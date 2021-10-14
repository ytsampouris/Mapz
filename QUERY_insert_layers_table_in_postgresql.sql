insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('1','Custom xyz layer','a test layer','test','no','no','3857','Get metadata from postgres','','anonymous','Infinity','xyz','http://localhost:8081/dali/{z}/{x}/{y}.png','1','1','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('2','OpenStreetMap','osm','test','no','no','3857','openstreetmap community','','anonymous','Infinity','osm','','1','2','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('3','Bing Maps (Aerial with Labels)','bing','test','no','no','3857','Bing Maps (c)','','anonymous','Infinity','bingmaps','','1','3','Ap3sskZ5BccP6TvBr0FoLc9orA4_R1uh-8UjpOKYciXL1hNMtAJr_BdxMjTJNkpv','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('4','Βενθικά ενδιαιτήματα','Βενθικά ενδιαιτήματα','Το δεδομένα για τα βενθικά ενδιαιτήματα παράγονται με τη χρήση περιβαλλοντικών δεδομένων και είναι αποτέλεσμα του μοντέλου που δημιουργήθηκε από την EMODnet Seabed Habitats. Για την κατηγοριοποίηση των ενδιαιτημάτων χρησιμοποιείται η ταξινόμηση των ενδιαιτημάτων κατά EUNIS (διαθέσιμη στη διεύθυνση https://www.eea.europa.eu/data-and-maps/data/eunis-habitat-classification) ενώ παρέχονται και πληροφορίες για τον τύπο του υποστρώματος. Η πληροφορία για τα βενθικά ενδιαιτήματα δεν είναι διαθέσιμη για την υποπαραλιακή ζώνη. Περισσότερες πληροροφίες για τις μεθόδους που χρησιμοποιήθηκαν για την παραγωγή των δεδομένων είναι διαθέσιμες στη διεύθυνση https://archimer.ifremer.fr/doc/00388/49975/','2019','Πολύγωνα (Διανυσματικό αρχείο δεδομένων)','GCS_WGS_1984','EMODnet broad-scale seabed habitat map for Europe (v2019), licensed under CC-BY 4.0 from the European Marine Observation and Data Network (EMODnet) Seabed Habitats initiative (www.emodnet-seabedhabitats.eu), funded by the European Commission.  Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του EMODnet, 21/07/2021: https://www.emodnet-seabedhabitats.eu/access-data/download-data/?linkid=eusm2019_group','seabed_habitats','anonymous','Infinity','xyz','no url','1','4','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('5','Υψόμετρο - Βαθυμετρία','Υψόμετρο - Βαθυμετρία','Τα δεδομένα βαθυμετρίας αποτελούν τμήμα του παγκόσμιου μοντέλου εδάφους που αναπτύχθηκε στο πλαίσιο του έργου Nippon Foundation-GEBCO Seabed 2030 Project. Παρέχονται ως ψηφιδωτά δεδομένα και χαρακτηρίζονται από έναν αριθμό που αντιπροσωπεύει την απόσταση του σημείου από την επιφάνεια της θάλασσας σε μέτρα.','2020','Ψηφιδωτό αρχείο δεδομένων','GCS_WGS_1984','GEBCO Compilation Group (2020) GEBCO 2020 Grid (doi:10.5285/a29c5465-b138-234d-e053-6c86abc040b9) Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του GEBCO, 23/07/2021: https://download.gebco.net/','bathymetry_marter.tif','anonymous','Infinity','xyz','no url','1','5','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('6','Χρήσεις Γης','Χρήσεις Γης Corine Land Cover 2018','Τα δεδομένα Corine Land Cover (CLC) παράγονται στο πλαίσιο παρακολούθησης του προγράμματος Copernicus και αναφέρονται στην κατάσταση κάλυψης γης / χρήσης γης για το έτος 2018. Η ταξινόμηση στις διάφορες κατηγορίες χρήσεων γης βασίζονται στην φωτοερμηνεία των δορυφορικών εικόνων που παράγονται από τις εθνικές ομάδες των συμμετεχουσών χωρών. Πληροφορίες για τις κατηγορίες χρήσεων γης είναι διαθέσιμες στη διεύθυνση https://land.copernicus.eu/user-corner/technical-library/corine-land-cover-nomenclature-guidelines/html.','2017-2018','Πολύγωνα (Διανυσματικό αρχείο δεδομένων)','ETRS_1989_LAEA','Corine Land Cover (CLC) 2018, Version 2020_20u1, European Union, Copernicus Land Monitoring Service 2018, European Environment Agency (EEA) Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του Copernicus Land Monitoring Service, 23/07/2021: https://land.copernicus.eu/pan-european/corine-land-cover/clc2018?tab=download','corine','anonymous','Infinity','xyz','no url','1','6','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('7','Προστατευόμενες Περιοχές','Προστατευόμενες Περιοχές','Στις προστατευόμενες περιοχές περιλαμβάνονται οι Τόποι Κοινοτικής Σημασίας (ΤΚΣ) και οι Ζώνες Ειδικής Προστασίας (ΖΕΠ) του δικτύου Natura 2000 και τα Καταφύγια Άγριας Ζωής. Τα δεδομένα ανακτήθηκαν από την Παγκόσμια Βάση Δεδομένων για τις Προστατευόμενες Περιοχές (WDPA) που αποτελεί την πιο ολοκληρωμένη παγκόσμια βάση δεδομένων θαλάσσιων και χερσαίων προστατευόμενων περιοχών και ενημερώνεται σε μηνιαία βάση.','Ιούλιος 2021','Πολύγωνα (Διανυσματικό αρχείο δεδομένων)','GCS_WGS_1984','UNEP-WCMC (2021). Protected Area Profile for Greece from the World Database of Protected Areas, July 2021. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του Protected Planet, 23/07/2021: https://www.protectedplanet.net/','protected_areas','anonymous','Infinity','xyz','no url','1','7','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('8','Φωτορύπανση','Φωτορύπανση - Τεχνητός Νυχτερινός Φωτισμός','Τα δεδομένα απεικονίζουν τον τεχνητό νυχτερινό φωτισμό και παράγονται συνδυαστικά χρησιμοποιώντας όλη τη διαθέσιμη πληροφορία από το Defense Meteorological Satellite Program - Operational Linescan System. Παρέχονται ως ψηφιδωτά δεδομένα και χαρακτηρίζονται από μια τιμή που κυμαίνεται από 0 έως 63, με το μηδέν να αντιπροσωπεύει το απόλυτο σκοτάδι και υψηλότερες τιμές να είναι ενδεικτικές πολύ φωτεινών αστικών κέντρων.','2013','Ψηφιδωτό αρχείο δεδομένων','GCS_WGS_1984','Image and data processing by NOAAs National Geophysical Data Center. DMSP data collected by US Air Force Weather Agency. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του ΝΟΟΑ, 27/07/2021: https://ngdc.noaa.gov/eog/dmsp/downloadV4composites.html','nightlight.tif','anonymous','Infinity','xyz','no url','1','8','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('9','Διαχειριστικές Πιέσεις Δασικών Οικοσυστημάτων','Πιέσεις που σχετίζονται με τη διαχείριση των δασικών οικοσυστημάτων','Τα δεδομένα απεικονίζουν την ένταση της πίεσης που δέχονται τα δασικά οικοσυστήματα από τον τρόπο με τον οποίο πραγματοποιείται η διαχείρισής τους. Η ένταση της πίεσης υπολογίζεται από τις επιμέρους πιέσεις που ασκούνται από α) την εκμετάλλευση και την αναγέννηση του οικοσυστήματος, β) την ένταση της παρέμβασης στις φυσικές διεργασίες του οικοσυστήματος και γ) το βαθμό κατακερματισμού του οικοσυστήματος. Η τελική τιμή του δείκτη κυμαίνεται από 1 εως 5, με το 1 να αντιπροσωπεύει έναν τύπο διαχείρισης που δεν παρεμβαίνει στις φυσικές διεργασίες και ευνοεί την αναγέννηση και την ακεραιότητα του οικοσυστήματος και το 5 να είναι ενδεικτικό των κατακερματισμένων ενδιαιτημάτων και ενός εντατικού τύπου διαχείρισης με στόχο την παραγωγή.','2012-2017','Ψηφιδωτό αρχείο δεδομένων','ETRS_1989_LAEA','European Environment Agency (EEA) Management related pressures on forest ecosystems Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη της EEA, 28/07/2021: https://www.eea.europa.eu/data-and-maps/data/management-related-pressures-on-forest-ecosystems','manag_pres_forest.tif','anonymous','Infinity','xyz','no url','1','9','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('10','Κατακερματισμός Τοπίου','Δείκτης κατακερματισμού τοπίου Effective Mesh Density','O δείκτης κατακερματισμού τοπίου Effective Mesh Density αποτελεί ένα μέτρο του βαθμού στον οποίο η κίνηση μεταξύ διαφορετικών τμημάτων του τοπίου διακόπτεται από την παρουσία ανθρωπογενών κατασκευών όπως υποδομές κυκλοφορίας (συμπερλιμβανομένων δρόμων μεσαίου μεγέθους) ή άλλες υποδομές που μπορούν να χαρακτηριστούν αδιαπέραστες. Τα δεδομένα παρέχονται σε ψηφιδωτή μορφή και κάθε κελί χαρακτηρίζεται από μια τιμή που κυμαίνεται από 0 έως 100000, με τις υψηλότερες τιμές του δείκτη να υποδεικνύουν μεγαλύτερο βαθμό κατακερματισμού.','2015-2016','Ψηφιδωτό αρχείο δεδομένων','ETRS_1989_LAEA','European Environment Agency (EEA) Landscape fragmentation Effective Mesh Density time-series: major and medium anthropogenic fragmenting elements (FGA2-S) Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη της EEA, 29/07/2021: https://www.eea.europa.eu/data-and-maps/data/landscape-fragmentation-effective-mesh-density','fragmentation','anonymous','Infinity','xyz','no url','1','10','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('11','Χερσαίοι Τύποι Οικοσυστημάτων','Χερσαίοι Τύποι Οικοσυστημάτων και ταξινόμηση τους κατά EUNIS','Τα δεδομένα, συνδυάζοντας χωρική πληροφορία για τις χρήσεις γης με πληροφορία για την ταξινόμηση των ενδιαιτημάτων κατά EUNIS (διαθέσιμη στη διεύθυνση https://www.eea.europa.eu/data-and-maps/data/eunis-habitat-classification), παρέχουν μια πιο σαφή εικόνα για τη σύνθεση των χερσαίων οικουστημάτων. Παρέχονται ως ψηφιδωτά δεδομένα όπου κάθε κελί αντιστοιχεί στον πιθανότερο τύπο ενδιαιτήματος κατά EUNIS που χαρακτηρίζει την περιοχή.','2012','Ψηφιδωτό αρχείο δεδομένων','ETRS_1989_LAEA','European Environment Agency (EEA) Ecosystem types of Europe 2012 - Terrestrial habitats - version 3 revision 1, Feb. 2019 Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη της EEA, 29/07/2021: https://www.eea.europa.eu/data-and-maps/data/ecosystem-types-of-europe-1','ecotypes_ter.tif','anonymous','Infinity','xyz','no url','1','11','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('12','Θαλάσσιοι Τύποι Οικοσυστημάτων','Θαλάσσιοι Τύποι Οικοσυστημάτων και ταξινόμηση τους κατά EUNIS','Τα δεδομένα, συνδυάζοντας χωρική πληροφορία για τη βαθυμετρία και τα βεθνικά ενδιαιτήματα με πληροφορία για την ταξινόμηση των ενδιαιτημάτων κατά EUNIS (διαθέσιμη στη διεύθυνση https://www.eea.europa.eu/data-and-maps/data/eunis-habitat-classification), παρέχουν μια πιο σαφή εικόνα για τη σύνθεση των θαλάσσιων οικουστημάτων. Παρέχονται ως ψηφιδωτά δεδομένα όπου κάθε κελί αντιστοιχεί στον πιθανότερο τύπο ενδιαιτήματος κατά EUNIS που χαρακτηρίζει την περιοχή. Συνοδευτικά, για κάθε κελί παρέχονται πληροφορίες για τη θαλάσσια διαστρωμάτωση και τον τύπο του υποστρώματος.','2012','Ψηφιδωτό αρχείο δεδομένων','ETRS_1989_LAEA','European Environment Agency (EEA) Ecosystem types of Europe 2012 - Marine habitats - version 3 revision 1, Feb. 2019 Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη της EEA, 29/07/2021: https://www.eea.europa.eu/data-and-maps/data/ecosystem-types-of-europe-1','ecotypes_mar.tif','anonymous','Infinity','xyz','no url','1','12','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('13','Λιμάνια','Λιμάνια','Τα δεδομένα περιλαμβάνουν πληροφορίες για τα βασικά λιμάνια της περιοχής. Εκτός από την τοποθεσία παρέχονται πληροφορίες για την κίνηση επιβατών και πλοίων σε αυτά. Τα δεδομένα έχουν παραχθεί από το EMODnet με βάση πληροροφία που έχει καταγραφεί από την EUROSTAT.','2014','Σημεία (Διανυσματικό αρχείο δεδομένων)','GCS_WGS_1984','EMODnet Human Activities, Main Ports, Goods-Passengers-Vessels Traffic.  All information is pre-validated by EUROSTAT. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του EMODnet, 02/08/2021: https://www.emodnet-humanactivities.eu/search-results.php?dataname=Main+Ports','ports','anonymous','Infinity','xyz','no url','1','13','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('14','Θαλάσσια Κυκλοφορία','Πυκνότητα θαλάσσιας κυκλοφορία','Τα δεδομένα πυκνότητας θαλάσσιας κυκλοφορίας απεικονίζουν την κατανομή των πλοίων με βάση τον στιγμιαίο αριθμό σκαφών ανά μονάδα επιφάνειας. Η πυκνότητα θαλάσσιας κυκλοφορίας εκφράζεται ως οι ώρες ανά τετραγωνικό χιλιόμετρο ανά μήνα στις οποίες κυκλοφορεί κάποιο πλοίο (αλιευτικά σκάφη, επιβατηγά πλοία, δεξαμενόπλοια, φορτηγά πλοία, ιστιοφόρα κ.ά.). Τα δεδομένα παρέχονται ως ψηφιδωτά και κάθε κελί παίρνει την τιμή της μέσης πυκνότητας θαλάσσιας κυκλοφορίας για το έτος 2020.','2020','Ψηφιδωτό αρχείο δεδομένων','ETRS_1989_LAEA','EMODnet Human Activities, Vessel Density Map. AIS data generated by Collecte Localisation Satellites (CLS). Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του EMODnet, 02/08/2021: https://www.emodnet-humanactivities.eu/search-results.php?dataname=Vessel+Density+','vessel_dens','anonymous','Infinity','xyz','no url','1','14','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('15','Μεταβολή Θερμοκρασίας Θαλάσσης','Μεταβολή Θερμοκρασίας στην επιφάνεια της θάλασσας από το 1993 έως το 2019','Η μεταβολή της θερμοκρασίας υπολογίζεται από το μέσο ρυθμό αλλαγής της θερμοκρασίας (°C/χρόνο) πολλαπλασιασμένο με τον αριθμό των ετών για τα οποία υπολογίζεται η μεταβολή (27 χρόνια, 1993-2019). Τα δεδομένα παρέχονται σε ψηφιδωτή μορφή και κάθε κελί χαρακτηρίζεται από μια τιμή που αντιστοιχεί στη μεταβολή της θερμοκρασίας  σε °C και για την περιοχή της Μεσογείου μπορεί να κυμαίνεται από 0,23 έως 1,73.','1993-2019','Ψηφιδωτό αρχείο δεδομένων','GCS_WGS_1984','E.U. Copernicus Marine Service Information, Mediterranean Sea Cumulative Trend Map of Sea Surface Temperature Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του Copernicus Marine Service, 04/08/2021: https://resources.marine.copernicus.eu/?option=com_csw&view=details&product_id=MEDSEA_OMI_TEMPSAL_sst_trend','sst_change.tif','anonymous','Infinity','xyz','no url','1','15','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('16','Χλωρίδα Κεφαλονιάς','Παρατηρήσεις ειδών χλωρίδας Κεφαλονιάς','Θέσεις παρατηρήσεων των ειδών της χλωρίδας της Κεφαλονιάς','1985-2020','Σημεία (Διανυσματικό αρχείο δεδομένων)','GCS_WGS_1984','Παρατηρήσεις του Φορέα Διαχείρισης Εθνικού Δρυμού Αίνου Δείγματα του Ψηφιακού Herbarium JACQ, διαθέσιμα στη διαδικτυακή πύλη του JACQ, 16/06/2021: https://www.jacq.org/#database Τυποποιημένα Έντυπα Δεδομένων για τις περιοχές Natura 2000, διαθέσιμα στη διαδικτυακή πύλη του Natura 2000 Network Viewer, 05/2021: https://natura2000.eea.europa.eu/ Ευθυμιάτου - Κατσούνη, E.N. (2006) Συμβολή στην έρευνα της βιοποικιλότητας Κεφαλονιάς - Ιθάκης (Ιόνιοι Νήσοι) (Μεταπτυχιακή Διπλωματική Εργασία, Πανεπιστήμιο Ιωαννίνων)','flora','anonymous','Infinity','xyz','no url','1','16','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('17','Οικισμοί','Οικισμοί','Θέσεις και ονοματολογία οικισμών','2010','Σημεία (Διανυσματικό αρχείο δεδομένων)','GCS_WGS_1984','Ελληνική Στατιστική Αρχή Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του GEODATA.gov.gr, 05/08/2021: https://geodata.gov.gr/dataset/oikismoi ','oikismoi','anonymous','Infinity','xyz','no url','1','17','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('18','Ήσυχες Περιοχές','Πιθανές ήσυχες περιοχές με βάση το δείκτη QSI','Εντός της Ευρωπαϊκής Ένωσης, η Οδηγία 2002/49/ΕΚ σχετικά με την αξιολόγηση και τη διαχείριση του περιβαλλοντικού θορύβου ορίζει ως ήσυχες περιοχές τις περιοχές εκτός πόλεων στις οποίες απουσιάζει ο θόρυβος από την κυκλοφορία και τις  βιομηχανικές ή ψυχαγωγικές δραστηριότητες. Ο δείκτης Quietness Suitability Index (QSI) χρησιμοποιεί δεδομένα για το θόρυβο και τις χρήσεις γης για να υποδείξει την πιθανότητα μια περιοχή να μπορεί να χαρακτηριστεί ώς ήσυχη. Τα δεδομένα παρέχονται σε ψηφιδωτή μορφή και κάθε κελί χαρακτηρίζεται από μια τιμή που κυμαίνεται από 0 έως 100, με τις μεγαλύτερες τιμές του δείκτη να χρακτηρίζουν περιοχές με μεγαλύτερη αναλογία δυνητικά ήσυχων περιοχών.','2016','Ψηφιδωτό αρχείο δεδομένων','ETRS_1989_LAEA','European Environment Agency (EEA) Potential quiet areas in Europe, based upon Quietness Suitability Index (QSI), Aug. 2016 Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη της EEA, 05/08/2021: https://www.eea.europa.eu/data-and-maps/data/quiet-areas-in-europe-2','quiet_areas.tif','anonymous','Infinity','xyz','no url','1','18','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('19','Μέση Ετήσια Θερμοκρασία','Μέση Ετήσια Θερμοκρασία','Μέση ετήσια θερμοκρασία για τα έτη 1970-2020 σε °C','1970-2000','Ψηφιδωτό αρχείο δεδομένων','GCS_WGS_1984','Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του WorldClim, 17/08/2021: https://www.worldclim.org/data/worldclim21.html','wc2.1_30s_bio_1.tif','anonymous','Infinity','xyz','no url','1','19','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('20','Μέγιστη Θερμοκρασία Θερμότερου Μήνα','Μέγιστη Θερμοκρασία Θερμότερου Μήνα','Μέση μέγιστη θερμοκρασία θερμότερου μήνα για τα έτη 1970-2020 σε °C','1970-2000','Ψηφιδωτό αρχείο δεδομένων','GCS_WGS_1984','Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του WorldClim, 17/08/2021: https://www.worldclim.org/data/worldclim21.html','wc2.1_30s_bio_5.tif','anonymous','Infinity','xyz','no url','1','20','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('21','Ελάχιστη Θερμοκρασία Ψυχρότερου Μήνα','Ελάχιστη Θερμοκρασία Ψυχρότερου Μήνα','Μέση ελάχιστη θερμοκρασία ψυχρότερου μήνα για τα έτη 1970-2020 σε °C','1970-2000','Ψηφιδωτό αρχείο δεδομένων','GCS_WGS_1984','Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του WorldClim, 17/08/2021: https://www.worldclim.org/data/worldclim21.html','wc2.1_30s_bio_6.tif','anonymous','Infinity','xyz','no url','1','21','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('22','Ετήσιο Θερμοκρασιακό Εύρος','Ετήσιο Θερμοκρασιακό Εύρος','Μέση ετήσιο θερμοκρασιακό εύρος για τα έτη 1970-2020 σε °C','1970-2000','Ψηφιδωτό αρχείο δεδομένων','GCS_WGS_1984','Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του WorldClim, 17/08/2021: https://www.worldclim.org/data/worldclim21.html','wc2.1_30s_bio_7.tif','anonymous','Infinity','xyz','no url','1','22','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('23','Ετήσια Βροχόπτωση','Ετήσια Βροχόπτωση','Μέση ετήσια βροχόπτωση για τα έτη 1970-2020 σε mm','1970-2000','Ψηφιδωτό αρχείο δεδομένων','GCS_WGS_1984','Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του WorldClim, 17/08/2021: https://www.worldclim.org/data/worldclim21.html','wc2.1_30s_bio_12.tif','anonymous','Infinity','xyz','no url','1','23','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
insert into layers ("id","label","description","details","timespan","filetype","crs","attributions","filename","crossorigin","preload","type","url","visible","zindex","apikey", "createdAt", "updatedAt") values ('24','Εποχικότητα Βροχοπτώσεων','Εποχικότητα Βροχοπτώσεων','Η εποχικότητα των βροχοπτώσεων αποτελεί ένα μέτρο της κατανομής των βροχοπτώσεων κατά τη διάρκεια ενός κανονικού έτους. Όσο πιο ακανόνιστη είναι η κατανομή και όσο μεγαλύτερη είναι η τιμή του δείκτη, αυτό σημαίνει ότι οι περισσότερες βροχοπτώσεις συμβαίνουν σε συγκεκριμένους μήνες.','1970-2000','Ψηφιδωτό αρχείο δεδομένων','GCS_WGS_1984','Fick, S.E. and R.J. Hijmans, 2017. WorldClim 2: new 1km spatial resolution climate surfaces for global land areas. International Journal of Climatology 37 (12): 4302-4315. Τα δεδομένα ανακτήθηκαν από τη διαδικτυακή πύλη του WorldClim, 17/08/2021: https://www.worldclim.org/data/worldclim21.html','wc2.1_30s_bio_15.tif','anonymous','Infinity','xyz','no url','1','24','','2021-08-26T21:00:00.000+00:00','2021-08-26T21:00:00.000+00:00');
