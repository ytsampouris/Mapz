(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"1fee":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return a}));var n={};i.r(n),i.d(n,"getLayers",(function(){return g})),i.d(n,"getPublishedLayers",(function(){return y})),i.d(n,"getSpecies",(function(){return S})),i.d(n,"getUsers",(function(){return _})),i.d(n,"getContacts",(function(){return h})),i.d(n,"getDepartments",(function(){return v})),i.d(n,"getUsersOfDepartment",(function(){return k})),i.d(n,"queryXY",(function(){return q}));var a={};i.r(a),i.d(a,"createUser",(function(){return N})),i.d(a,"updateUser",(function(){return R})),i.d(a,"deleteUser",(function(){return T})),i.d(a,"createDocument",(function(){return X})),i.d(a,"deleteLayer",(function(){return A})),i.d(a,"createDepartment",(function(){return E})),i.d(a,"updateDepartment",(function(){return J})),i.d(a,"updateDepartmentManager",(function(){return H})),i.d(a,"deleteDepartment",(function(){return K})),i.d(a,"singleUpload",(function(){return V})),i.d(a,"signIn",(function(){return W})),i.d(a,"addLayer",(function(){return Z})),i.d(a,"addSpecies",(function(){return ee})),i.d(a,"updateSpecies",(function(){return te})),i.d(a,"deleteSpecies",(function(){return ie})),i.d(a,"updateLayer",(function(){return ne}));var l=i("5184");let s,r=e=>e;Object(l["a"])(s||(s=r`
  type Document {
    title: String!
  }
  type Mutation {
    addDocument(text: String!): Document
    editDocument(text: String!, id: String!): Document
  }
  type RoleInput {
    label: String
    value: String
  }
  type DepartmentInput {
    _id: ID
    title: String
    description: String
  }
`));let o,d,u,c,p,m,b,$,f=e=>e;const g=Object(l["a"])(o||(o=f`
  query getLayers {
    layers {
      id
      label
      details
      timespan
      filetype
      crs
      attributions
      filename
      crossorigin
      preload
      type
      url
      visible
      published
      zindex
      apikey
      dbtablename
    }
  }
`)),y=Object(l["a"])(d||(d=f`
  query getPublishedLayers {
    publishedLayers {
      id
      label
      details
      timespan
      filetype
      crs
      attributions
      filename
      crossorigin
      preload
      type
      url
      visible
      zindex
      apikey
      dbtablename
    }
  }
`)),S=Object(l["a"])(u||(u=f`
  query getSpecies {
    species {
      id
      species
      family
      classification
      n2k
      code_n2k
      iunc
      directive_92
      bern
      bonn
      cites
      date
      source
      eunis
    }
  }
`)),_=Object(l["a"])(c||(c=f`
  query getUsers {
    users {
      id
      username
      fullname
      password
      department {
        _id
        title
      }
      email
    }
  }
`)),h=Object(l["a"])(p||(p=f`
  query getContacts {
    contacts {
      _id
      fullname
      organization
      street
      streetNumber
      postalCode
      area
      city
      website
      email
      position
      department
      phone
      fax
      country
      region
      prefecture
    }
  }
`)),v=Object(l["a"])(m||(m=f`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),k=Object(l["a"])(b||(b=f`
  query usersByDepartment($_id: ID) {
    usersByDepartment(_id: $_id) {
      _id
      username
      fullname
      password
      department {
        _id
        title
        description
      }
      email
    }
  }
`)),q=Object(l["a"])($||($=f`
  query queryXY($layer: String, $type: String, $zoom: Int, $x: Float, $y: Float){
    queryXY(layer: $layer, type: $type, zoom: $zoom, x: $x, y: $y)
  }
`));i("ffd6");let x,D,I,w,O,j,L,z,Q,U,C,B,P,F,Y,M,G=e=>e;const N=Object(l["a"])(x||(x=G`
  mutation(
    $username: String
    $fullname: String
    $password: String
    $department: [ID]
    $email: String
  ) {
    createUser(
      username: $username
      fullname: $fullname
      password: $password
      department: $department
      email: $email
    ) {
      _id
      username
      fullname
      password
      department {
        _id
        title
        description
      }
      email
    }
  }
`)),R=Object(l["a"])(D||(D=G`
  mutation(
    $_id: ID!
    $username: String
    $fullname: String
    $password: String
    $department: [ID]
    $email: String
  ) {
    updateUser(
      _id: $_id
      username: $username
      fullname: $fullname
      password: $password
      department: $department
      email: $email
    ) {
      username
      _id
    }
  }
`)),T=Object(l["a"])(I||(I=G`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),X=Object(l["a"])(w||(w=G`
  mutation(
    $title: String!
    $description: String
    $sender: ID!
    $receivers: [ID!]
    $date: Date
    $files: [ID]
    $transactionType: String
    $timestamp: String
  ) {
    createDocument(
      title: $title
      description: $description
      sender: $sender
      receivers: $receivers
      date: $date
      files: $files
      transactionType: $transactionType
      timestamp: $timestamp
    ) {
      _id
      title
      description
      sender
      receivers
      date
      files
      transactionType
      timestamp
    }
  }
`)),A=Object(l["a"])(O||(O=G`
  mutation($id: String!) {
    deleteLayer(id: $id)
  }
`)),E=Object(l["a"])(j||(j=G`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),J=Object(l["a"])(L||(L=G`
  mutation($_id: ID!, $title: String, $description: String, $manager: ID) {
    updateDepartment(
      _id: $_id
      title: $title
      description: $description
      manager: $manager
    ) {
      _id
      title
      description
      manager
    }
  }
`)),H=Object(l["a"])(z||(z=G`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),K=Object(l["a"])(Q||(Q=G`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),V=Object(l["a"])(U||(U=G`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),W=Object(l["a"])(C||(C=G`
  mutation signIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),Z=Object(l["a"])(B||(B=G`
  mutation addLayer(
    $label: String,
    $details: String,
    $timespan: String,
    $filetype: String,
    $crs: String,
    $attributions: String,
    $filename: String,
    $type: String,
    $url: String,
    $visible: Boolean,
    $published: Boolean,
    $apikey: String,
    $dbtablename: String,
    $zindex: Int
  )
  {
    addLayer(
      label: $label
      details: $details
      timespan: $timespan
      filetype: $filetype
      crs: $crs
      attributions: $attributions
      filename: $filename
      type: $type
      url: $url
      visible: $visible
      published: $published
      apikey: $apikey
      dbtablename: $dbtablename
      zindex: $zindex
    ) {
      id
      label
    }
  }
`)),ee=Object(l["a"])(P||(P=G`
  mutation addSpecies(
    $species: String
    $family: String
    $classification: String
    $n2k: String
    $code_n2k: String
    $iunc: String
    $directive_92: String
    $bern: String
    $bonn: String
    $cites: String
    $date: String
    $source: String
    $eunis: String
  )
  {
    addSpecies(
      species: $species
      family: $family
      classification: $classification
      n2k: $n2k
      code_n2k: $code_n2k
      iunc: $iunc
      directive_92: $directive_92
      bern: $bern
      bonn: $bonn
      cites: $cites
      date: $date
      source: $source
      eunis: $eunis
    ) {
      id
      species
      family
      classification
      n2k
      code_n2k
      iunc
      directive_92
      bern
      bonn
      cites
      date
      source
      eunis
    }
  }
`)),te=Object(l["a"])(F||(F=G`
  mutation(
    $id: String
    $species: String
    $family: String
    $classification: String
    $n2k: String
    $code_n2k: String
    $iunc: String
    $directive_92: String
    $bern: String
    $bonn: String
    $cites: String
    $date: String
    $source: String
    $eunis: String
  ) {
    updateSpecies(
      id: $id
      species: $species
      family: $family
      classification: $classification
      n2k: $n2k
      code_n2k: $code_n2k
      iunc: $iunc
      directive_92: $directive_92
      bern: $bern
      bonn: $bonn
      cites: $cites
      date: $date
      source: $source
      eunis: $eunis
    ) {
      id
    }
  }
`)),ie=Object(l["a"])(Y||(Y=G`
  mutation($id: String) {
    deleteSpecies(id: $id)
  }
`)),ne=Object(l["a"])(M||(M=G`
  mutation updateLayer(
    $id: String,
    $label: String,
    $details: String,
    $timespan: String,
    $filetype: String,
    $crs: String,
    $attributions: String,
    $filename: String,
    $type: String,
    $url: String,
    $visible: Boolean,
    $published: Boolean,
    $apikey: String,
    $dbtablename: String,
    $zindex: Int
  )
  {
    updateLayer(
      id: $id
      label: $label
      details: $details
      timespan: $timespan
      filetype: $filetype
      crs: $crs
      attributions: $attributions
      filename: $filename
      type: $type
      url: $url
      visible: $visible
      published: $published
      apikey: $apikey
      dbtablename: $dbtablename
      zindex: $zindex
    ) {
      id
      label
      details
      timespan
      filetype
      crs
      attributions
      filename
      type
      url
      visible
      published
      apikey
      dbtablename
      zindex
    }
  }
`))},c58f:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("div",{staticClass:"q-pa-md"},[i("q-stepper",{ref:"stepper",attrs:{color:"primary",animated:""},scopedSlots:e._u([{key:"navigation",fn:function(){return[i("q-stepper-navigation",[1===e.step?i("q-btn",{attrs:{color:"primary",label:"Εισαγωγή χάρτη"},on:{click:function(t){e.addLayer(),e.$refs.stepper.next()}}}):e._e(),1===e.step?i("q-btn",{staticClass:"q-ml-sm",attrs:{color:"primary",label:"Εισαγωγή αρχείων"},on:{click:function(t){return e.$refs.stepper.next()}}}):e._e(),2===e.step?i("q-btn",{attrs:{color:"primary",label:"Αποθήκευση αρχείων"},on:{click:function(t){return e.uploadFiles()}}}):e._e(),2===e.step?i("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Πίσω"},on:{click:function(t){return e.$refs.stepper.previous()}}}):e._e()],1)]},proxy:!0}]),model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[i("q-step",{attrs:{name:1,title:"Εισαγωγή στοιχείων χάρτη",icon:"list",done:e.step>1}},[i("q-input",{attrs:{label:"Γενική περιγραφή","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n            Η περιγραφή που θα φαίνεται σαν όνομα στην λίστα των χαρτών\n          ")]},proxy:!0}]),model:{value:e.label,callback:function(t){e.label=t},expression:"label"}}),i("q-input",{attrs:{label:"Λεπτομέρειες","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n            Λεπτομερής περιγραφή του χάρτη. Θα φαίνεται όταν ο χρήστης πατάει για να δει περισσότερες πληρφορίες για το θεματικό επίπεδο.\n          ")]},proxy:!0}]),model:{value:e.details,callback:function(t){e.details=t},expression:"details"}}),i("q-input",{attrs:{label:"Χρονική κάλυψη","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n            Ο χρόνος αναφοράς των δεδομένων του χάρτη.\n          ")]},proxy:!0}]),model:{value:e.timespan,callback:function(t){e.timespan=t},expression:"timespan"}}),i("q-select",{attrs:{options:["Point","Line","Polygon","Raster"],label:"Τύπος δεδομένων","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n            Η δήλωση αυτή παίζει σημαντικό ρόλο κατά την εκτέλεση του info tool. Ουσιαστικά δηλώνουμε τι τύπος δεδομένων είναι για να γίνεται σωστά η αναζήτηση πληροφορίας στην βάση δεδομένων.\n          ")]},proxy:!0}]),model:{value:e.filetype,callback:function(t){e.filetype=t},expression:"filetype"}}),i("q-input",{attrs:{label:"Πρωτότυπο σύστημα γεωγραφικών συντεταγμένων","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n            Το σύστημα συντεταγμένων της αρχικής καταγραφής. Για λεπτομέρειες δείτε τους κωδικούς EPSG.\n          ")]},proxy:!0}]),model:{value:e.crs,callback:function(t){e.crs=t},expression:"crs"}}),i("q-input",{attrs:{label:"Αρχική πηγή","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n            Ουσιαστικά η βιβλιογραφική αναφορά. Ποια είναι η πηγή των δεδομένων.\n          ")]},proxy:!0}]),model:{value:e.attributions,callback:function(t){e.attributions=t},expression:"attributions"}}),i("q-input",{attrs:{label:"Όνομα αρχείου","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n            Το όνομα του αρχείου της αρχικής πηγής δεδομένων.\n          ")]},proxy:!0}]),model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),i("q-select",{attrs:{options:["xyz","osm","bingmaps"],label:"Τύπος ","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n            Δήλωση xyz αν πρόκειται για αποτέλεσμα εξαγωγής tiles από το QGIS, osm για Openstreet map και bingmaps για χάρτες Bing.\n          ")]},proxy:!0}]),model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),i("q-input",{attrs:{label:"URL","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n            Ποια είναι η πηγή URL από όπου φορτώνεται ο χάρτης. Για χάρτες που φτιάχνονται με το QGIS και ανεβάζουμε στο επόμενο βήμα η πηγή είναι http://localhost:8081/ΧΧΧΧΧ/{z}/{x}/{y}.png, όπου ΧΧΧΧΧ βάζουμε το όνομα αρχείου που βγήκε από το QGIS.\n          ")]},proxy:!0}]),model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[i("q-item-section",[i("q-item-label",[e._v("Ορατό")]),i("q-item-label",{attrs:{caption:""}},[e._v("Αν θα είναι από την αρχή ορατός ο χάρτης. Μπορεί να γίνει ορατός σε δεύτερη φάση από την Επεξεργασία.")])],1),i("q-item-section",{attrs:{avatar:""}},[i("q-toggle",{model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}})],1)],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[i("q-item-section",[i("q-item-label",[e._v("Δημοσιευμένο")]),i("q-item-label",{attrs:{caption:""}},[e._v("Αν ο χάρτης θα είναι ορατός σε απλούς χρήστες.")])],1),i("q-item-section",{attrs:{avatar:""}},[i("q-toggle",{model:{value:e.published,callback:function(t){e.published=t},expression:"published"}})],1)],1),i("q-input",{attrs:{label:"Κλειδί API","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n            Αν η παραπάνω επιλογή είναι Bing τότε θα χρειαστεί να εισαχθεί και το κλειδί API για να είναι δυνατό να φορτώσει.\n          ")]},proxy:!0}]),model:{value:e.apikey,callback:function(t){e.apikey=t},expression:"apikey"}}),i("q-input",{attrs:{label:"Όνομα πίνακα βάσης δεδομένων","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n            Αν τα χαρτογραφικά δεδομένα θα εισαχθούν ή έχουν εισαχθεί με το QGIS στην βάση δεδομένων τότε εδώ γράφετε το όνομα με το οποίο έχει γίνει η εισαγωγή.\n          ")]},proxy:!0}]),model:{value:e.dbtablename,callback:function(t){e.dbtablename=t},expression:"dbtablename"}})],1),i("q-step",{attrs:{name:2,title:"Επισύναψη χαρτογραφικών αρχείων",icon:"settings",done:e.step>2}},[i("q-file",{attrs:{label:"Επιλογή αρχείου",outlined:"","use-chips":""},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),1===e.step&&e.files&&e.files.length>0?i("q-btn",{attrs:{color:"primary",label:"Επισύναψη αρχείων"},on:{click:function(t){return e.uploadFiles()}}}):e._e()],1)],1)],1)])},a=[],l=i("1fee"),s=i("cf57"),r=i("bd4c"),o={name:"NewMap",data(){return{step:1,done1:!1,done2:!1,done3:!1,date:r["a"].formatDate(Date.now(),"DD/MM/YYYY"),files:null,layer_id:null,label:null,details:null,timespan:null,filetype:null,crs:null,attributions:null,filename:null,crossorigin:null,preload:null,type:null,url:null,visible:!0,published:!1,zindex:null,apikey:null,dbtablename:null}},methods:{async uploadFiles(){this.$q.loading.show({message:"Ανέβασμα αρχείων",backgroundColor:"grey",spinner:s["a"],customClass:"loader"});const e=new FormData;e.append("layer",this.files);try{await this.$api.post("/upload",e),this.$q.loading.hide()}catch(t){console.log(t),this.$q.loading.hide(),this.$q.notify({message:"Επιτρέπονται μόνο αρχεία mbtiles",color:"negative",timeout:1500})}},addLayer(){this.$q.loading.show({message:"Ολοκλήρωση αποθήκευσης",backgroundColor:"grey",spinner:s["a"],customClass:"loader"});const e=this.label,t=this.details,i=this.timespan,n=this.filetype,a=this.crs,r=this.attributions,o=this.filename,d=this.type,u=this.url,c=this.visible,p=this.published,m=this.apikey,b=this.dbtablename;this.$apollo.mutate({mutation:l["a"].addLayer,variables:{label:e,details:t,timespan:i,filetype:n,crs:a,attributions:r,filename:o,type:d,url:u,visible:c,published:p,apikey:m,dbtablename:b},update:(e,{data:{addLayer:t}})=>{console.log("the document added was",t),this.layer_id=t.id}}).then((()=>{this.label=null,this.details=null,this.timespan=null,this.filetype=null,this.crs=null,this.attributions=null,this.filename=null,this.type=null,this.url=null,this.visible=null,this.published=null,this.apikey=null,this.dbtablename=null,this.$q.loading.hide()})),this.step=1}}},d=o,u=i("2877"),c=i("9989"),p=i("f531"),m=i("87fe"),b=i("27f9"),$=i("ddd8"),f=i("9564"),g=i("66e5"),y=i("4074"),S=i("0170"),_=i("7d53"),h=i("9c40"),v=i("b19c"),k=i("714f"),q=i("eebe"),x=i.n(q),D=Object(u["a"])(d,n,a,!1,null,null,null);t["default"]=D.exports;x()(D,"components",{QPage:c["a"],QStepper:p["a"],QStep:m["a"],QInput:b["a"],QSelect:$["a"],QToggle:f["a"],QItem:g["a"],QItemSection:y["a"],QItemLabel:S["a"],QFile:_["a"],QBtn:h["a"],QStepperNavigation:v["a"]}),x()(D,"directives",{Ripple:k["a"]})},ffd6:function(e,t){}}]);