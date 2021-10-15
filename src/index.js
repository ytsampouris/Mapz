import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import jwt from 'jsonwebtoken';
import DataLoader from 'dataloader';
import express from 'express';
import {
  ApolloServer,
  AuthenticationError,
} from 'apollo-server-express';
import multer from 'multer';
import schema from './schema';
import resolvers from './resolvers';
import models, { sequelize } from './models';
import loaders from './loaders';
import path from 'path';
const serveStatic = require('serve-static');
const history = require("connect-history-api-fallback");

const app = express();

app.use(cors());
app.use(morgan('dev'));

var config = require('./config');
var TileService = require('./TileService');


var routeHandlers = {
  getTile: function(req, res, next) {
    var tileService = new TileService(req);
    tileService.getTile(function(err, tile, headers) {
      if (err) return res.status(404).send(err.message);
      res.set(headers);
      res.send(tile);
    });
  },
  getGrid: function(req, res, next) {
    var tileService = new TileService(req);
    tileService.getGrid(function(err, tile, headers) {
      if (err) return res.status(404).send(err.message);
      res.set(headers);
      res.send(tile);
    });
  },
  getInfo: function(req, res, next) {
    var tileService = new TileService(req);
    tileService.getInfo(function(err, info) {
      if (err) return res.status(404).send(err.message);
      res.json(info);
    });
  },
  ping: function(req, res, next){
    res.send('tilehut says pong!');
  },
  // openshift expects to get a valid response from '/' (health status)
  healthStatus: function(req, res, next){
    res.send(':)');
  },
};

// TODO Cache-Control: setting

app.disable('x-powered-by');
app.use('*', function(req, res, next) {
  // set CORS response header
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

// app.use('/:ts/map', express.static(config.MAP_DIR));

app.route('/:ts/:z/:x/:y.*grid.json$').get(routeHandlers.getGrid);
app.route('/:ts/:z/:x/:y.*').get(routeHandlers.getTile);
app.route('/:ts/meta.json').get(routeHandlers.getInfo);
app.route('/ping').get(routeHandlers.ping);
// app.route('/').get(routeHandlers.healthStatus);


const getMe = async req => {
  const token = req.headers['token'];

  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (e) {
      throw new AuthenticationError(
        'Your session expired. Sign in again.',
      );
    }
  }
};

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers,
  formatError: error => {
    // remove the internal sequelize error message
    // leave only the important validation error
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');

    return {
      ...error,
      message,
    };
  },
  context: async ({ req, connection }) => {
    if (connection) {
      return {
        models,
        loaders: {
          user: new DataLoader(keys =>
            loaders.user.batchUsers(keys, models),
          ),
        },
      };
    }

    if (req) {
      const me = await getMe(req);

      return {
        models,
        me,
        secret: process.env.SECRET,
        loaders: {
          user: new DataLoader(keys =>
            loaders.user.batchUsers(keys, models),
          ),
        },
      };
    }
  },
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const isTest = !!process.env.TEST_DATABASE;
const isProduction = !!process.env.DATABASE_URL;
console.log('is production:: ', isProduction);
const port = process.env.PORT || 8081;
let createInitialTables = false;
if(process.env.CREATE_INITIAL_TABLES === 'false') {
  createInitialTables = false;
} else {
  createInitialTables = true;
}
console.log(createInitialTables)
sequelize.sync({ force: createInitialTables }).then(async () => {
  if (createInitialTables) {
    initializeDatabase(new Date());
  }

  httpServer.listen({ port }, () => {
    console.log(`Apollo Server on http://${process.env.API_HOST_URL}:${port}/graphql`);
  });
});

console.log('Running on ', process.env.API_HOST_URL, port);

const initializeDatabase = async date => {
  await models.User.create(
    {
      username: 'Yiannis Tsampouris',
      email: 'ytsampouris@gmail.com',
      password: '12345678',
      role: 'admin',
    }
  );

  await models.Layer.create(
    {
      id: '28b7bf26-f11c-4b77-a309-623951eaefda',
      label: 'Openstreet maps',
      details: 'osm',
      timespan: '',
      filetype: 'Raster',
      crs: '',
      attributions: 'Openstreet map contributors',
      filename: '',
      type: 'osm',
      url: '',
      visible: true,
      published: true,
      zindex: 1
    }
  );
  
  await models.Layer.create({id: '64b47ebd-6d47-440c-a34b-43c979e16445', label: 'Βενθικά ενδιαιτήματα', details: 'Το δεδομένα για τα βενθικά ενδιαιτήματα παράγονται με τη χρήση περιβαλλοντικών δεδομένων και είναι αποτέλεσμα του μοντέλου που δημιουργήθηκε από την EMODnet Seabed Habitats. Για την κατηγοριοποίηση των ενδιαιτημάτων χρησιμοποιείται η ταξινόμηση των ενδιαιτημάτων κατά EUNIS (διαθέσιμη στη διεύθυνση https://www.eea.europa.eu/data-and-maps/data/eunis-habitat-classification) ενώ παρέχονται και πληροφορίες για τον τύπο του υποστρώματος. Η πληροφορία για τα βενθικά ενδιαιτήματα δεν είναι διαθέσιμη για την υποπαραλιακή ζώνη. Περισσότερες πληροροφίες για τις μεθόδους που χρησιμοποιήθηκαν για την παραγωγή των δεδομένων είναι διαθέσιμες στη διεύθυνση https://archimer.ifremer.fr/doc/00388/49975/', timespan: '2019', filetype: 'Polygon', crs: 'GCS_WGS_1984', attributions: 'EMODnet broad-scale seabed habitat map for Europe (v2019), licensed under CC-BY 4.0 from the European Marine Observation and Data Network (EMODnet) Seabed Habitats initiative (www.emodnet-seabedhabitats.eu), funded by the European Commission.  Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του EMODnet, 21/07/2021: https://www.emodnet-seabedhabitats.eu/access-data/download-data/?linkid=eusm2019_group', filename: 'seabed_habitats', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/seabed_habitats/{z}/{x}/{y}.png`, visible: false, zindex: 6, apikey: '', published: true});
  await models.Layer.create({
    id: '86b49ef5-d848-427a-bef9-00c0ff5a0bcd',
    label: 'Υψόμετρο - Βαθυμετρία',
    details: 'Τα δεδομένα βαθυμετρίας αποτελούν τμήμα του παγκόσμιου μοντέλου εδάφους που αναπτύχθηκε στο πλαίσιο του έργου Nippon Foundation-GEBCO Seabed 2030 Project. Παρέχονται ως ψηφιδωτά δεδομένα και χαρακτηρίζονται από έναν αριθμό που αντιπροσωπεύει την απόσταση του σημείου από την επιφάνεια της θάλασσας σε μέτρα.', 
    timespan: '2020', 
    filetype: 'Raster', 
    crs: 'GCS_WGS_1984', 
    attributions: 'GEBCO Compilation Group (2020) GEBCO 2020 Grid (doi:10.5285/a29c5465-b138-234d-e053-6c86abc040b9) Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του GEBCO, 23/07/2021: https://download.gebco.net/', 
    filename: 'bathymetry_marter.tif', 
    type: 'xyz', 
    url: `${process.env.API_HOST_URL}:${port}/bathymetry_marter/{z}/{x}/{y}.png`, 
    visible: false,
    published: true,
    zindex: 7,
    apikey: '',
    crossorigin: 'anonymous',
    dbtablename: 'bathymetry_marter'
  });

  // ADD VECTOR LAYERS IN LAYERS TABLE
  await models.Layer.create({id: '3fdb3dc6-eccb-4421-a374-8cbd9ac99c5e', published: true, label: 'Χρήσεις Γης', details: 'Τα δεδομένα Corine Land Cover (CLC) παράγονται στο πλαίσιο παρακολούθησης του προγράμματος Copernicus και αναφέρονται στην κατάσταση κάλυψης γης / χρήσης γης για το έτος 2018. Η ταξινόμηση στις διάφορες κατηγορίες χρήσεων γης βασίζονται στην φωτοερμηνεία των δορυφορικών εικόνων που παράγονται από τις εθνικές ομάδες των συμμετεχουσών χωρών. Πληροφορίες για τις κατηγορίες χρήσεων γης είναι διαθέσιμες στη διεύθυνση https://land.copernicus.eu/user-corner/technical-library/corine-land-cover-nomenclature-guidelines/html.', timespan: '2017-2018', filetype: 'Polygon', crs: 'ETRS_1989_LAEA', attributions: 'Corine Land Cover (CLC) 2018, Version 2020_20u1, European Union, Copernicus Land Monitoring Service 2018, European Environment Agency (EEA) Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του Copernicus Land Monitoring Service, 23/07/2021: https://land.copernicus.eu/pan-european/corine-land-cover/clc2018?tab=download', filename: 'corine', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/corine/{z}/{x}/{y}.png`, visible: true, zindex: 28, apikey: '', dbtablename: 'corine'});
  await models.Layer.create({id: '1ed4127c-ce6a-4180-9203-341ccf133033', published: true, label: 'Προστατευόμενες Περιοχές', details: 'Στις προστατευόμενες περιοχές περιλαμβάνονται οι Τόποι Κοινοτικής Σημασίας (ΤΚΣ) και οι Ζώνες Ειδικής Προστασίας (ΖΕΠ) του δικτύου Natura 2000 και τα Καταφύγια Άγριας Ζωής. Τα δεδομένα ανακτήθηκαν από την Παγκόσμια Βάση Δεδομένων για τις Προστατευόμενες Περιοχές (WDPA) που αποτελεί την πιο ολοκληρωμένη παγκόσμια βάση δεδομένων θαλάσσιων και χερσαίων προστατευόμενων περιοχών και ενημερώνεται σε μηνιαία βάση.', timespan: 'Ιούλιος 2021', filetype: 'Polygon', crs: 'GCS_WGS_1984', attributions: 'UNEP-WCMC (2021). Protected Area Profile for Greece from the World Database of Protected Areas, July 2021. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του Protected Planet, 23/07/2021: https://www.protectedplanet.net/', filename: 'protected_areas', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/protected_areas/{z}/{x}/{y}.png`, visible: true, zindex: 29, apikey: '', dbtablename: 'protected_areas'});
  await models.Layer.create({id: '817557d6-0ed7-4cc2-8490-e8f6623b2e2e', published: true, label: 'Λιμάνια', details: 'Τα δεδομένα περιλαμβάνουν πληροφορίες για τα βασικά λιμάνια της περιοχής. Εκτός από την τοποθεσία παρέχονται πληροφορίες για την κίνηση επιβατών και πλοίων σε αυτά. Τα δεδομένα έχουν παραχθεί από το EMODnet με βάση πληροροφία που έχει καταγραφεί από την EUROSTAT.', timespan: '2014', filetype: 'Point', crs: 'GCS_WGS_1984', attributions: 'EMODnet Human Activities, Main Ports, Goods-Passengers-Vessels Traffic.  All information is pre-validated by EUROSTAT. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του EMODnet, 02/08/2021: https://www.emodnet-humanactivities.eu/search-results.php?dataname=Main+Ports', filename: 'ports', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/ports/{z}/{x}/{y}.png`, visible: true, zindex: 30, apikey: '', dbtablename: 'ports'});
  await models.Layer.create({id: '02a600c4-eca1-418e-9746-5bf51fe16483', published: true, label: 'Οικισμοί', details: 'Θέσεις και ονοματολογία οικισμών', timespan: '2010', filetype: 'Point', crs: 'GCS_WGS_1984', attributions: 'Ελληνική Στατιστική Αρχή Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του GEODATA.gov.gr, 05/08/2021: https://geodata.gov.gr/dataset/oikismoi ', filename: 'oikismoi', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/oikismoi/{z}/{x}/{y}.png`, visible: true, zindex: 31, apikey: '', dbtablename: 'oikismoi'});

  await models.Layer.create({id: 'a1427900-e03c-4906-85a8-db57c9fc2d2e', published: true, label: 'Φωτορύπανση', details: 'Τα δεδομένα απεικονίζουν τον τεχνητό νυχτερινό φωτισμό και παράγονται συνδυαστικά χρησιμοποιώντας όλη τη διαθέσιμη πληροφορία από το Defense Meteorological Satellite Program - Operational Linescan System. Παρέχονται ως ψηφιδωτά δεδομένα και χαρακτηρίζονται από μια τιμή που κυμαίνεται από 0 έως 63, με το μηδέν να αντιπροσωπεύει το απόλυτο σκοτάδι και υψηλότερες τιμές να είναι ενδεικτικές πολύ φωτεινών αστικών κέντρων.', timespan: '2013', filetype: 'Raster', crs: 'GCS_WGS_1984', attributions: 'Image and data processing by NOAAs National Geophysical Data Center. DMSP data collected by US Air Force Weather Agency. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του ΝΟΟΑ, 27/07/2021: https://ngdc.noaa.gov/eog/dmsp/downloadV4composites.html', filename: 'nightlight.tif', dbtablename: 'nightlight', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/nightlight/{z}/{x}/{y}.png`, visible: false, zindex: 8, apikey: ''});
  await models.Layer.create({id: 'dd16fde0-8394-4faa-8eeb-467f1345571f', published: true, label: 'Διαχειριστικές Πιέσεις Δασικών Οικοσυστημάτων', details: 'Τα δεδομένα απεικονίζουν την ένταση της πίεσης που δέχονται τα δασικά οικοσυστήματα από τον τρόπο με τον οποίο πραγματοποιείται η διαχείρισής τους. Η ένταση της πίεσης υπολογίζεται από τις επιμέρους πιέσεις που ασκούνται από α) την εκμετάλλευση και την αναγέννηση του οικοσυστήματος, β) την ένταση της παρέμβασης στις φυσικές διεργασίες του οικοσυστήματος και γ) το βαθμό κατακερματισμού του οικοσυστήματος. Η τελική τιμή του δείκτη κυμαίνεται από 1 εως 5, με το 1 να αντιπροσωπεύει έναν τύπο διαχείρισης που δεν παρεμβαίνει στις φυσικές διεργασίες και ευνοεί την αναγέννηση και την ακεραιότητα του οικοσυστήματος και το 5 να είναι ενδεικτικό των κατακερματισμένων ενδιαιτημάτων και ενός εντατικού τύπου διαχείρισης με στόχο την παραγωγή.', timespan: '2012-2017', filetype: 'Raster', crs: 'ETRS_1989_LAEA', attributions: 'European Environment Agency (EEA) Management related pressures on forest ecosystems Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη της EEA, 28/07/2021: https://www.eea.europa.eu/data-and-maps/data/management-related-pressures-on-forest-ecosystems', filename: 'manag_pres_forest.tif', dbtablename: 'manag_pres_forest', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/manag_pres_forest/{z}/{x}/{y}.png`, visible: false, zindex: 9, apikey: ''});
  await models.Layer.create({id: 'a0ff6e87-ffc4-4799-9562-2f8c0bf54160', published: true, label: 'Κατακερματισμός Τοπίου', details: 'O δείκτης κατακερματισμού τοπίου Effective Mesh Density αποτελεί ένα μέτρο του βαθμού στον οποίο η κίνηση μεταξύ διαφορετικών τμημάτων του τοπίου διακόπτεται από την παρουσία ανθρωπογενών κατασκευών όπως υποδομές κυκλοφορίας (συμπερλιμβανομένων δρόμων μεσαίου μεγέθους) ή άλλες υποδομές που μπορούν να χαρακτηριστούν αδιαπέραστες. Τα δεδομένα παρέχονται σε ψηφιδωτή μορφή και κάθε κελί χαρακτηρίζεται από μια τιμή που κυμαίνεται από 0 έως 100000, με τις υψηλότερες τιμές του δείκτη να υποδεικνύουν μεγαλύτερο βαθμό κατακερματισμού.', timespan: '2015-2016', filetype: 'Raster', crs: 'ETRS_1989_LAEA', attributions: 'European Environment Agency (EEA) Landscape fragmentation Effective Mesh Density time-series: major and medium anthropogenic fragmenting elements (FGA2-S) Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη της EEA, 29/07/2021: https://www.eea.europa.eu/data-and-maps/data/landscape-fragmentation-effective-mesh-density', filename: 'fragmentation', dbtablename: 'fragmentation', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/fragmentation/{z}/{x}/{y}.png`, visible: false, zindex: 10, apikey: ''});
  await models.Layer.create({id: '578a1739-7523-4339-8306-a576afe28375', published: true, label: 'Χερσαίοι Τύποι Οικοσυστημάτων', details: 'Τα δεδομένα, συνδυάζοντας χωρική πληροφορία για τις χρήσεις γης με πληροφορία για την ταξινόμηση των ενδιαιτημάτων κατά EUNIS (διαθέσιμη στη διεύθυνση https://www.eea.europa.eu/data-and-maps/data/eunis-habitat-classification), παρέχουν μια πιο σαφή εικόνα για τη σύνθεση των χερσαίων οικουστημάτων. Παρέχονται ως ψηφιδωτά δεδομένα όπου κάθε κελί αντιστοιχεί στον πιθανότερο τύπο ενδιαιτήματος κατά EUNIS που χαρακτηρίζει την περιοχή.', timespan: '2012', filetype: 'Raster', crs: 'ETRS_1989_LAEA', attributions: 'European Environment Agency (EEA) Ecosystem types of Europe 2012 - Terrestrial habitats - version 3 revision 1, Feb. 2019 Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη της EEA, 29/07/2021: https://www.eea.europa.eu/data-and-maps/data/ecosystem-types-of-europe-1', filename: 'ecotypes_ter.tif', dbtablename: 'ecotypes_ter', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/ecotypes_ter/{z}/{x}/{y}.png`, visible: false, zindex: 11, apikey: ''});
  await models.Layer.create({id: '9a0ec9ae-bdf5-4b4f-b0d3-48abefea0500', published: true, label: 'Θαλάσσιοι Τύποι Οικοσυστημάτων', details: 'Τα δεδομένα, συνδυάζοντας χωρική πληροφορία για τη βαθυμετρία και τα βεθνικά ενδιαιτήματα με πληροφορία για την ταξινόμηση των ενδιαιτημάτων κατά EUNIS (διαθέσιμη στη διεύθυνση https://www.eea.europa.eu/data-and-maps/data/eunis-habitat-classification), παρέχουν μια πιο σαφή εικόνα για τη σύνθεση των θαλάσσιων οικουστημάτων. Παρέχονται ως ψηφιδωτά δεδομένα όπου κάθε κελί αντιστοιχεί στον πιθανότερο τύπο ενδιαιτήματος κατά EUNIS που χαρακτηρίζει την περιοχή. Συνοδευτικά, για κάθε κελί παρέχονται πληροφορίες για τη θαλάσσια διαστρωμάτωση και τον τύπο του υποστρώματος.', timespan: '2012', filetype: 'Raster', crs: 'ETRS_1989_LAEA', attributions: 'European Environment Agency (EEA) Ecosystem types of Europe 2012 - Marine habitats - version 3 revision 1, Feb. 2019 Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη της EEA, 29/07/2021: https://www.eea.europa.eu/data-and-maps/data/ecosystem-types-of-europe-1', filename: 'ecotypes_mar.tif', dbtablename: 'ecotypes_mar', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/ecotypes_mar/{z}/{x}/{y}.png`, visible: false, zindex: 12, apikey: ''});
  await models.Layer.create({id: '52cefe57-505e-41f0-b6e6-98d6a658fd3f', published: true, label: 'Θαλάσσια Κυκλοφορία', details: 'Τα δεδομένα πυκνότητας θαλάσσιας κυκλοφορίας απεικονίζουν την κατανομή των πλοίων με βάση τον στιγμιαίο αριθμό σκαφών ανά μονάδα επιφάνειας. Η πυκνότητα θαλάσσιας κυκλοφορίας εκφράζεται ως οι ώρες ανά τετραγωνικό χιλιόμετρο ανά μήνα στις οποίες κυκλοφορεί κάποιο πλοίο (αλιευτικά σκάφη, επιβατηγά πλοία, δεξαμενόπλοια, φορτηγά πλοία, ιστιοφόρα κ.ά.). Τα δεδομένα παρέχονται ως ψηφιδωτά και κάθε κελί παίρνει την τιμή της μέσης πυκνότητας θαλάσσιας κυκλοφορίας για το έτος 2020.', timespan: '2020', filetype: 'Raster', crs: 'ETRS_1989_LAEA', attributions: 'EMODnet Human Activities, Vessel Density Map. AIS data generated by Collecte Localisation Satellites (CLS). Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του EMODnet, 02/08/2021: https://www.emodnet-humanactivities.eu/search-results.php?dataname=Vessel+Density+', filename: 'vessel_dens', dbtablename: 'vessel_dens', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/vessel_dens/{z}/{x}/{y}.png`, visible: false, zindex: 14, apikey: ''});
  await models.Layer.create({id: 'c26a1ba6-e28c-413b-ba68-6c59b0f6d72b', published: true, label: 'Μεταβολή Θερμοκρασίας Θαλάσσης', details: 'Η μεταβολή της θερμοκρασίας υπολογίζεται από το μέσο ρυθμό αλλαγής της θερμοκρασίας (°C/χρόνο) πολλαπλασιασμένο με τον αριθμό των ετών για τα οποία υπολογίζεται η μεταβολή (27 χρόνια, 1993-2019). Τα δεδομένα παρέχονται σε ψηφιδωτή μορφή και κάθε κελί χαρακτηρίζεται από μια τιμή που αντιστοιχεί στη μεταβολή της θερμοκρασίας  σε °C και για την περιοχή της Μεσογείου μπορεί να κυμαίνεται από 0,23 έως 1,73.', timespan: '1993-2019', filetype: 'Raster', crs: 'GCS_WGS_1984', attributions: 'E.U. Copernicus Marine Service Information, Mediterranean Sea Cumulative Trend Map of Sea Surface Temperature Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του Copernicus Marine Service, 04/08/2021: https://resources.marine.copernicus.eu/?option=com_csw&view=details&product_id=MEDSEA_OMI_TEMPSAL_sst_trend', filename: 'sst_change.tif', dbtablename: 'sst_change', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/sst_change/{z}/{x}/{y}.png`, visible: false, zindex: 15, apikey: ''});
  await models.Layer.create({id: 'fdec732e-25a9-43e9-8a2d-b950e39187ba', published: true, label: 'Χλωρίδα Κεφαλονιάς', details: 'Θέσεις παρατηρήσεων των ειδών της χλωρίδας της Κεφαλονιάς', timespan: '1985-2020', filetype: 'Point', crs: 'GCS_WGS_1984', attributions: 'Παρατηρήσεις του Φορέα Διαχείρισης Εθνικού Δρυμού Αίνου Δείγματα του Ψηφιακού Herbarium JACQ, διαθέσιμα στη διαδικτυακή πύλη του JACQ, 16/06/2021: https://www.jacq.org/#database Τυποποιημένα Έντυπα Δεδομένων για τις περιοχές Natura 2000, διαθέσιμα στη διαδικτυακή πύλη του Natura 2000 Network Viewer, 05/2021: https://natura2000.eea.europa.eu/ Ευθυμιάτου - Κατσούνη, E.N. (2006) Συμβολή στην έρευνα της βιοποικιλότητας Κεφαλονιάς - Ιθάκης (Ιόνιοι Νήσοι) (Μεταπτυχιακή Διπλωματική Εργασία, Πανεπιστήμιο Ιωαννίνων)', filename: 'flora', dbtablename: 'flora', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/flora/{z}/{x}/{y}.png`, visible: false, zindex: 16, apikey: ''});
  await models.Layer.create({id: '917ff3cd-ce3e-4462-89cb-9e70fe786c8e', published: true, label: 'Ήσυχες Περιοχές', details: 'Εντός της Ευρωπαϊκής Ένωσης, η Οδηγία 2002/49/ΕΚ σχετικά με την αξιολόγηση και τη διαχείριση του περιβαλλοντικού θορύβου ορίζει ως ήσυχες περιοχές τις περιοχές εκτός πόλεων στις οποίες απουσιάζει ο θόρυβος από την κυκλοφορία και τις  βιομηχανικές ή ψυχαγωγικές δραστηριότητες. Ο δείκτης Quietness Suitability Index (QSI) χρησιμοποιεί δεδομένα για το θόρυβο και τις χρήσεις γης για να υποδείξει την πιθανότητα μια περιοχή να μπορεί να χαρακτηριστεί ώς ήσυχη. Τα δεδομένα παρέχονται σε ψηφιδωτή μορφή και κάθε κελί χαρακτηρίζεται από μια τιμή που κυμαίνεται από 0 έως 100, με τις μεγαλύτερες τιμές του δείκτη να χρακτηρίζουν περιοχές με μεγαλύτερη αναλογία δυνητικά ήσυχων περιοχών.', timespan: '2016', filetype: 'Raster', crs: 'ETRS_1989_LAEA', attributions: 'European Environment Agency (EEA) Potential quiet areas in Europe, based upon Quietness Suitability Index (QSI), Aug. 2016 Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη της EEA, 05/08/2021: https://www.eea.europa.eu/data-and-maps/data/quiet-areas-in-europe-2', filename: 'quiet_areas.tif', dbtablename: 'quiet_areas', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/quiet_areas/{z}/{x}/{y}.png`, visible: false, zindex: 18, apikey: ''});
  await models.Layer.create({id: 'c0bb4a64-ba59-40b4-9ee2-051d059d9351', published: true, label: 'Μέση Ετήσια Θερμοκρασία', details: 'Μέση ετήσια θερμοκρασία για τα έτη 1970-2020 σε °C', timespan: '1970-2000', filetype: 'Raster', crs: 'GCS_WGS_1984', attributions: 'Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του WorldClim, 17/08/2021: https://www.worldclim.org/data/worldclim21.html', filename: 'wc2.1_30s_bio_1.tif', dbtablename: 'wc_bio_1', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/wc_bio_1/{z}/{x}/{y}.png`, visible: false, zindex: 19, apikey: ''});
  await models.Layer.create({id: '57d3bf98-6bf4-4f17-973e-be9f7d9e38ff', published: true, label: 'Μέγιστη Θερμοκρασία Θερμότερου Μήνα', details: 'Μέση μέγιστη θερμοκρασία θερμότερου μήνα για τα έτη 1970-2020 σε °C', timespan: '1970-2000', filetype: 'Raster', crs: 'GCS_WGS_1984', attributions: 'Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του WorldClim, 17/08/2021: https://www.worldclim.org/data/worldclim21.html', filename: 'wc2.1_30s_bio_5.tif', dbtablename: 'wc_bio_5', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/wc_bio_5/{z}/{x}/{y}.png`, visible: false, zindex: 20, apikey: ''});
  await models.Layer.create({id: '7b1d9557-a1c7-4102-89a1-05db71552207', published: true, label: 'Ελάχιστη Θερμοκρασία Ψυχρότερου Μήνα', details: 'Μέση ελάχιστη θερμοκρασία ψυχρότερου μήνα για τα έτη 1970-2020 σε °C', timespan: '1970-2000', filetype: 'Raster', crs: 'GCS_WGS_1984', attributions: 'Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του WorldClim, 17/08/2021: https://www.worldclim.org/data/worldclim21.html', filename: 'wc2.1_30s_bio_6.tif', dbtablename: 'wc_bio_6', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/wc_bio_6/{z}/{x}/{y}.png`, visible: false, zindex: 21, apikey: ''});                                                                                                                                                                                                                                        
  await models.Layer.create({id: '9ba136b9-f965-4f7b-a4bc-3f3a024e1242', published: true, label: 'Ετήσιο Θερμοκρασιακό Εύρος', details: 'Μέση ετήσιο θερμοκρασιακό εύρος για τα έτη 1970-2020 σε °C', timespan: '1970-2000', filetype: 'Raster', crs: 'GCS_WGS_1984', attributions: 'Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του WorldClim, 17/08/2021: https://www.worldclim.org/data/worldclim21.html', filename: 'wc2.1_30s_bio_7.tif', dbtablename: 'wc_bio_7', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/wc_bio_7/{z}/{x}/{y}.png`, visible: false, zindex: 22, apikey: ''});
  await models.Layer.create({id: '31c0dc68-7399-49ae-87b9-89089e7916ce', published: true, label: 'Ετήσια Βροχόπτωση', details: 'Μέση ετήσια βροχόπτωση για τα έτη 1970-2020 σε mm', timespan: '1970-2000', filetype: 'Raster', crs: 'GCS_WGS_1984', attributions: 'Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του WorldClim, 17/08/2021: https://www.worldclim.org/data/worldclim21.html', filename: 'wc2.1_30s_bio_12.tif', dbtablename: 'wc_bio_12', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/wc_bio_12/{z}/{x}/{y}.png`, visible: false, zindex: 23, apikey: ''});
  await models.Layer.create({id: '9d03c55a-04fa-44da-bf61-a7dbb2704bf0', published: true, label: 'Εποχικότητα Βροχοπτώσεων', details: 'Η εποχικότητα των βροχοπτώσεων αποτελεί ένα μέτρο της κατανομής των βροχοπτώσεων κατά τη διάρκεια ενός κανονικού έτους. Όσο πιο ακανόνιστη είναι η κατανομή και όσο μεγαλύτερη είναι η τιμή του δείκτη, αυτό σημαίνει ότι οι περισσότερες βροχοπτώσεις συμβαίνουν σε συγκεκριμένους μήνες.', timespan: '1970-2000', filetype: 'Raster', crs: 'GCS_WGS_1984', attributions: 'Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του WorldClim, 17/08/2021: https://www.worldclim.org/data/worldclim21.html', filename: 'wc2.1_30s_bio_15.tif', dbtablename: 'wc_bio_15', crossorigin: 'anonymous', type: 'xyz', url: `${process.env.API_HOST_URL}:${port}/wc_bio_15/{z}/{x}/{y}.png`, visible: false, zindex: 24, apikey: ''});

  await models.Species.create({ id: 'a1c85f7e-2b2d-48c6-bff8-d8115cee1510', species: 'Balaenoptera physalus', family: 'Balaenopteridae', classification: 'Cetartiodactyla', n2k: '2621', code_n2k: 'GR2220005', iunc: 'NC', directive_92: 'IV', bern: 'II', bonn: 'I', cites: 'I', date: '2019', source: "Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220005, ανακτήθηκε Μάιο 2021", eunis: "https://eunis.eea.europa.eu/species/8358"})
  await models.Species.create({ id: '375a5846-8217-4252-bb19-e0e481d4c9a3', species: 'Crocidura leucodon', family: 'Soricidae ', classification: ' Eulipotyphla', n2k: '2591', code_n2k: 'GR2220002', iunc: 'LC', directive_92: '', bern: 'III', bonn: '', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/11252 '})
  await models.Species.create({ id: '19083210-962c-47d0-99fc-aca4e10efa0d', species: 'Crocidura suaveolens', family: 'Soricidae ', classification: ' Eulipotyphla', n2k: '2593', code_n2k: 'GR2220002', iunc: 'LC', directive_92: '', bern: 'III', bonn: ' ', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/11256 '})
  await models.Species.create({ id: 'bafa62ac-1b71-42c6-ae25-635e9930bce4', species: 'Delphinus delphis', family: 'Delphinidae', classification: 'Cetartiodactyla', n2k: '1350', code_n2k: 'GR2220005', iunc: 'DD', directive_92: 'IV', bern: 'II', bonn: 'I,II', cites: 'II', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220005, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1385 '})
  await models.Species.create({ id: '8a46add3-bfd8-4960-baa7-f2d5b662f7d6', species: 'Eptesicus serotinus', family: 'Vespertilionidae', classification: 'Chiroptera', n2k: '1327', code_n2k: 'GR2220002', iunc: 'LC', directive_92: 'IV', bern: 'II', bonn: '', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1395 '})
  await models.Species.create({ id: 'bccdee87-b235-4829-ba01-5871db8edc2d', species: 'Equus ferus caballus', family: 'Equidae', classification: 'Perissodactyla', n2k: '', code_n2k: '', iunc: '', directive_92: '', bern: '', bonn: '', cites: '', date: '2015', source: 'Παρατήρηση από ομάδα πεδίου του Φορέα Διαχείρισης Εθνικού Δρυμού Αίνου', eunis: 'https://eunis.eea.europa.eu/species/15697 '})
  await models.Species.create({ id: 'cff3f25f-9003-4d4e-b14b-e7a3e1bc40c8', species: 'Grampus griseus', family: 'Delphinidae', classification: 'Cetartiodactyla', n2k: '2030', code_n2k: 'GR2220005', iunc: 'DD', directive_92: 'IV', bern: 'II', bonn: 'II', cites: 'II', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220005, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/8371 '})
  await models.Species.create({ id: '40a040a7-58f0-40e2-925d-1a995c31ce65', species: 'Hypsugo savii', family: 'Vespertilionidae', classification: 'Chiroptera', n2k: '5365', code_n2k: 'GR2220002', iunc: 'LC', directive_92: 'IV', bern: 'II', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1423 '})
  await models.Species.create({ id: 'f2e85d71-620f-45d8-9fe2-4c7e5b3cdd3d', species: 'Lepus europaeus', family: 'Leporidae ', classification: 'Lagomorpha', n2k: '5690', code_n2k: 'GR2220002', iunc: 'LC', directive_92: '', bern: 'III', bonn: '', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1427 '})
  await models.Species.create({ id: 'a53cefdb-96e2-417c-b1a5-ad163f8d53f0', species: 'Martes foina', family: 'Mustelidae', classification: 'Carnivora', n2k: '2630', code_n2k: 'GR2220002', iunc: 'LC', directive_92: '', bern: 'III', bonn: '', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/11279 '})
  await models.Species.create({ id: '39f5d636-3871-4f01-9f9b-701a7b12538b', species: 'Meles meles', family: 'Mustelidae', classification: 'Carnivora', n2k: '2631', code_n2k: 'GR2220002', iunc: 'LC', directive_92: '', bern: 'III', bonn: '', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/11280 '})
  await models.Species.create({ id: '9c16efc2-fceb-45ca-974c-44470b4717c6', species: 'Miniopterus schreibersii', family: 'Vespertilionidae', classification: 'Chiroptera', n2k: '1310', code_n2k: 'GR2220002', iunc: 'NC', directive_92: 'II,IV', bern: 'I,II', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1452 '})
  await models.Species.create({ id: 'e17a2d07-1ae3-4a53-8f75-e3f45d3bdd9b', species: 'Monachus monachus', family: 'Phocidae', classification: 'Carnivora', n2k: '1366', code_n2k: 'GR2220004', iunc: 'CR', directive_92: 'II,IV', bern: 'I,II', bonn: 'I,II', cites: 'I', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220004, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1455 '})
  await models.Species.create({ id: '6727578d-c9a3-4509-8ac7-9ef21a54f047', species: 'Monachus monachus', family: 'Phocidae', classification: 'Carnivora', n2k: '1366', code_n2k: 'GR2220005', iunc: 'CR', directive_92: 'II,IV', bern: 'I,II', bonn: 'I,II', cites: 'I', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220005, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1455 '})
  await models.Species.create({ id: '048157e4-4afe-4050-93c0-fda0e7f83043', species: 'Monachus monachus', family: 'Phocidae', classification: 'Carnivora', n2k: '1366', code_n2k: 'GR2220007', iunc: 'CR', directive_92: 'II,IV', bern: 'I,II', bonn: 'I,II', cites: 'I', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220007, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1455 '})
  await models.Species.create({ id: '571ab073-c460-4ab1-8f4d-496fb03e5cfd', species: 'Mus musculus domesticus', family: 'Muridae', classification: 'Rodentia', n2k: '', code_n2k: '', iunc: '', directive_92: '', bern: '', bonn: '', cites: '', date: '2013', source: 'Παρατήρηση από Μίγκλη Δ., Μήτσαινας Γ.', eunis: 'https://eunis.eea.europa.eu/species/11302 '})
  await models.Species.create({ id: '05f60992-f38d-4266-ab68-f3a7762c549d', species: 'Mustela nivalis', family: 'Mustelidae', classification: 'Carnivora', n2k: '2634', code_n2k: 'GR2220002', iunc: 'LC', directive_92: '', bern: 'III', bonn: '', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1464 '})
  await models.Species.create({ id: '9b33da89-2e3e-417e-aacd-89dde3f118f4', species: 'Myotis aurascens', family: 'Vespertilionidae', classification: 'Chiroptera', n2k: '5004', code_n2k: 'GR2220002', iunc: 'LC', directive_92: 'IV', bern: 'II', bonn: '', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/314977 '})
  await models.Species.create({ id: '74640879-a70a-4a78-a0df-e9febc2c4a34', species: 'Myotis blythii', family: 'Vespertilionidae', classification: 'Chiroptera', n2k: '1307', code_n2k: 'GR2220002', iunc: 'NC', directive_92: 'II,IV', bern: 'I,II', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1475 '})
  await models.Species.create({ id: '54593dab-e85b-4ae0-a4d5-01610f38ffcb', species: 'Myotis capaccinii', family: 'Vespertilionidae', classification: 'Chiroptera', n2k: '1316', code_n2k: '', iunc: 'VU', directive_92: 'II,IV', bern: 'I,II', bonn: 'II', cites: '', date: '2013', source: 'Παρατήρηση από Παπαδάτου Ε., Μίγκλη Δ., Γιουλάτος Δ.,Μήτσαινας Γ.', eunis: 'https://eunis.eea.europa.eu/species/1479 '})
  await models.Species.create({ id: '7b5a5b2c-3933-46df-8efc-b339564394d1', species: 'Myotis mystacinus', family: 'Vespertilionidae', classification: 'Chiroptera', n2k: '1330', code_n2k: '', iunc: 'LC', directive_92: 'IV', bern: 'II', bonn: 'II', cites: '', date: '2013', source: 'Παρατήρηση από Παπαδάτου Ε., Μίγκλη Δ., Μήτσαινας Γ., Λυσίτσα Γ.', eunis: 'https://eunis.eea.europa.eu/species/1488 '})
  await models.Species.create({ id: 'dbc7b3b2-c7d4-4e35-949d-9f7a14434e8d', species: 'Nyctalus leisleri', family: 'Vespertilionidae', classification: 'Chiroptera', n2k: '1331', code_n2k: 'GR2220002', iunc: 'LC', directive_92: 'IV', bern: 'II', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1497 '})
  await models.Species.create({ id: '181a5c72-bc51-4283-913c-e4e52615c613', species: 'Nyctalus noctula', family: 'Vespertilionidae', classification: 'Chiroptera', n2k: '1312', code_n2k: 'GR2220002', iunc: 'LC', directive_92: 'IV', bern: 'II', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1499 '})
  await models.Species.create({ id: '64408ccc-cec0-483e-9e67-c7ae25cdbb6a', species: 'Physeter macrocephalus', family: 'Physeteridae', classification: 'Cetartiodactyla', n2k: '2624', code_n2k: 'GR2220005', iunc: 'VU', directive_92: 'IV', bern: 'II', bonn: 'I', cites: 'I', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220005, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/8362 '})
  await models.Species.create({ id: '69fe6c24-d01b-4e5d-bbc3-5459115a8c9e', species: 'Pipistrellus kuhlii', family: 'Vespertilionidae', classification: 'Chiroptera', n2k: '2016', code_n2k: 'GR2220002', iunc: 'LC', directive_92: 'IV', bern: 'II', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1513 '})
  await models.Species.create({ id: '275e19e3-3501-4414-b979-782f50512bba', species: 'Pipistrellus pipistrellus', family: 'Vespertilionidae', classification: 'Chiroptera', n2k: '1309', code_n2k: 'GR2220002', iunc: 'LC', directive_92: 'IV', bern: 'III', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1518 '})
  await models.Species.create({ id: '6566083e-c91e-4356-b410-ff63ce6960b6', species: 'Pipistrellus pygmaeus', family: 'Vespertilionidae', classification: 'Chiroptera', n2k: '5009', code_n2k: 'GR2220002', iunc: 'LC', directive_92: 'IV', bern: 'II', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/196416 '})
  await models.Species.create({ id: '2eacad89-5642-467c-a594-ea403b8efa68', species: 'Pseudorca crassidens', family: 'Delphinidae', classification: 'Cetartiodactyla', n2k: '2028', code_n2k: 'GR2220005', iunc: 'NA', directive_92: 'IV', bern: 'II', bonn: '', cites: 'II', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220005, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/8375 '})
  await models.Species.create({ id: '3e5fb048-3b3f-442d-a973-8f992f4e4f9c', species: 'Rhinolophus blasii', family: 'Rhinolophidae', classification: 'Chiroptera', n2k: '1306', code_n2k: 'GR2220002', iunc: 'VU', directive_92: 'II,IV', bern: 'I,II', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1539 '})
  await models.Species.create({ id: '281ef9ff-3a75-42f3-a19f-6ca55d4c25d7', species: 'Rhinolophus euryale', family: 'Rhinolophidae', classification: 'Chiroptera', n2k: '1305', code_n2k: 'GR2220002', iunc: 'VU', directive_92: 'II,IV', bern: 'I,II', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1542 '})
  await models.Species.create({ id: '59d9b824-bb6e-4187-af33-c1b7c47c7856', species: 'Rhinolophus ferrumequinum', family: 'Rhinolophidae', classification: 'Chiroptera', n2k: '1304', code_n2k: 'GR2220002', iunc: 'NC', directive_92: 'II,IV', bern: 'I,II', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1544 '})
  await models.Species.create({ id: '6d05817e-ee92-48a3-bc9e-2c5771637edd', species: 'Rhinolophus hipposideros', family: 'Rhinolophidae', classification: 'Chiroptera', n2k: '1303', code_n2k: 'GR2220002', iunc: 'NC', directive_92: 'II,IV', bern: 'I,II', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1545 '})
  await models.Species.create({ id: 'e613d0aa-abab-43d9-939e-0984d0c0082d', species: 'Stenella coeruleoalba', family: 'Delphinidae', classification: 'Cetartiodactyla', n2k: '2034', code_n2k: 'GR2220005', iunc: 'DD', directive_92: 'IV', bern: 'II', bonn: 'II', cites: 'II', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220005, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/8376 '})
  await models.Species.create({ id: '06df1b87-ccf3-41d8-8494-efe31b81195d', species: 'Tadarida teniotis', family: 'Molossidae', classification: 'Chiroptera', n2k: '1333', code_n2k: 'GR2220002', iunc: 'LC', directive_92: 'IV', bern: 'II', bonn: 'II', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1566 '})
  await models.Species.create({ id: 'cf35cf97-6480-45fb-a4da-9df0ee093b83', species: 'Talpa caeca', family: 'Talpidae', classification: ' Eulipotyphla', n2k: '5876', code_n2k: 'GR2220002', iunc: 'LC', directive_92: '', bern: '', bonn: '', cites: '', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220002, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/11342 '})
  await models.Species.create({ id: '42ec7764-3996-49f3-a3dc-91985b598082', species: 'Talpa stankovici', family: 'Talpidae ', classification: 'Insectivora', n2k: '', code_n2k: '', iunc: 'LC', directive_92: '', bern: '', bonn: '', cites: '', date: '2006', source: 'Ευθυμιάτου - Κατσούνη, E.N. (2006) Συμβολή στην έρευνα της βιοποικιλότητας Κεφαλονιάς - Ιθάκης (Ιόνιοι Νήσοι) (Μεταπτυχιακή Διπλωματική Εργασία, Πανεπιστήμιο Ιωαννίνων)', eunis: 'https://eunis.eea.europa.eu/species/11346 '})
  await models.Species.create({ id: '209ba692-782a-4194-8b3c-4ebafccb2c97', species: 'Tursiops truncatus', family: 'Delphinidae', classification: 'Cetartiodactyla', n2k: '1349', code_n2k: 'GR2220004', iunc: 'DD', directive_92: 'II,IV', bern: 'I,II', bonn: 'II', cites: 'II', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220004, ανακτήθηκε Μάιο 2022', eunis: 'https://eunis.eea.europa.eu/species/1567 '})
  await models.Species.create({ id: '0029f367-0846-4f65-8f17-2b732364969a', species: 'Tursiops truncatus', family: 'Delphinidae', classification: 'Cetartiodactyla', n2k: '1349', code_n2k: 'GR2220005', iunc: 'DD', directive_92: 'II,IV', bern: 'I,II', bonn: 'II', cites: 'II', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220005, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/1567 '})
  await models.Species.create({ id: 'd155df8e-9076-42f6-85b0-106ce7f7858e', species: 'Ziphius cavirostris', family: 'Ziphiidae', classification: 'Cetartiodactyla', n2k: '2035', code_n2k: 'GR2220005', iunc: 'DD', directive_92: 'IV', bern: 'II', bonn: 'I', cites: 'II', date: '2019', source: 'Natura 2000 Viewer, διαθέσιμο από https://natura2000.eea.europa.eu/Natura2000/SDF.aspx?site=GR2220005, ανακτήθηκε Μάιο 2021', eunis: 'https://eunis.eea.europa.eu/species/8367 '})
};

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '/maps/'));
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
var upload = multer({
  storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if(ext !== '.mbtiles') {
        return callback(new Error('Only mbtiles are allowed'))
    }
    callback(null, true)
  }
})
app.post('/upload', upload.single('layer'), (req, res) => {
  try {
    res.send(req.layer);
  }catch(err) {
    res.send(400);
  }
});

app.use(serveStatic(path.resolve(__dirname, '../dist/spa')));
app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
);
app.use(serveStatic(path.resolve(__dirname, '../dist/spa')));
