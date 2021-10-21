(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"0e66":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("q-btn",{attrs:{color:"white",flat:"","icon-right":"fab fa-youtube",label:"Οδηγίες χρήσης",type:"a",target:"new_tab",href:"https://www.youtube.com/playlist?list=PLwQ-2nYs008a8uMgJw64h7NcyjxtLbCUa"}}),i("br"),i("q-btn",{attrs:{color:"red","icon-right":"fab fa-youtube",label:"Οδηγίες χρήσης",type:"a",target:"new_tab",href:"https://www.youtube.com/playlist?list=PLwQ-2nYs008a8uMgJw64h7NcyjxtLbCUa"}}),!e.layers||e.$apollo.loading?i("div",{staticStyle:{width:"100%",height:"50%","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute"}},[i("div",{staticStyle:{top:"40%",width:"100%",height:"100%",position:"absolute"}},[i("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),i("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1)]):e._e(),e.layers?i("div",[i("div",{staticClass:"q-pa-xs flex flex-center"},[i("span",{staticClass:"text-subtitle1"},[e._v("Χάρτες")])]),0===e.layers.length?i("q-banner",{staticClass:"bg-orange text-white",attrs:{"inline-actions":"",rounded:""}},[e._v("\n      Δεν βρέθηκαν χάρτες\n    ")]):e._e(),e.layers&&e.layers.length>0?i("q-list",e._l(e.layers,(function(t){return i("q-item",{key:t.id},[i("q-item-section",[i("q-expansion-item",{attrs:{"expand-separator":"",icon:"map",label:t.zindex+". "+t.label,caption:t.details}},[i("q-card",[i("q-card-section",[i("q-item-label",{attrs:{caption:""}},[i("q-list",[t.timespan?i("q-item",[e._v("Timespan: "+e._s(t.timespan))]):e._e(),t.type?i("q-item",[e._v("Type: "+e._s(t.type))]):e._e(),t.visible?i("q-item",[e._v("Visibility: "+e._s(t.visible))]):e._e(),t.url?i("q-item",[e._v("URL: "+e._s(t.url))]):e._e(),t.attributions?i("q-item",[e._v("Attributions: "+e._s(t.attributions))]):e._e(),t.zindex?i("q-item",[e._v("zIndex: "+e._s(t.zindex))]):e._e(),t.filetype?i("q-item",[e._v("Filetype: "+e._s(t.filetype))]):e._e(),t.crs?i("q-item",[e._v("Coordinate system: "+e._s(t.crs))]):e._e(),t.filename?i("q-item",[e._v("Filename: "+e._s(t.filename))]):e._e(),t.dbtablename?i("q-item",[e._v("Database table name: "+e._s(t.dbtablename))]):e._e()],1),i("q-separator",{attrs:{spaced:"",inset:""}})],1)],1)],1)],1)],1),i("q-item-section",{attrs:{side:"",top:""}},[i("div",{staticClass:"text-grey-8 q-gutter-xs"},[i("q-btn",{attrs:{flat:"",round:"",icon:"delete"},on:{click:function(i){return e.deleteLayer(t.id)}}}),i("q-btn",{attrs:{flat:"",round:"",icon:"edit"},on:{click:function(i){e.editLayerDialog=!0,e.editingLayer=t}}})],1)])],1)})),1):e._e()],1):e._e(),i("q-banner",{staticClass:"bg-light-blue-7 text-white",attrs:{"inline-actions":"",rounded:""}},[e._v("\n    Με τα κουμπιά πραγματοποιείται διαγραφή θεματικού χάρτη, επιλογή εμφάνισης ή όχι και επεξεργασία ιδιοτήτων χάρτη.\n  ")]),i("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:e.editLayerDialog,callback:function(t){e.editLayerDialog=t},expression:"editLayerDialog"}},[e.editingLayer?i("q-card",{staticStyle:{width:"50%"}},[i("q-card-section",[i("q-input",{attrs:{label:"Γενική περιγραφή"},model:{value:e.editingLayer.label,callback:function(t){e.$set(e.editingLayer,"label",t)},expression:"editingLayer.label"}}),i("q-input",{attrs:{label:"Λεπτομέρειες"},model:{value:e.editingLayer.details,callback:function(t){e.$set(e.editingLayer,"details",t)},expression:"editingLayer.details"}}),i("q-input",{attrs:{label:"Χρονική κάλυψη"},model:{value:e.editingLayer.timespan,callback:function(t){e.$set(e.editingLayer,"timespan",t)},expression:"editingLayer.timespan"}}),i("q-input",{attrs:{label:"Τύπος αρχείου"},model:{value:e.editingLayer.filetype,callback:function(t){e.$set(e.editingLayer,"filetype",t)},expression:"editingLayer.filetype"}}),i("q-input",{attrs:{label:"Πρωτότυπο σύστημα γεωγραφικών συντεταγμένων"},model:{value:e.editingLayer.crs,callback:function(t){e.$set(e.editingLayer,"crs",t)},expression:"editingLayer.crs"}}),i("q-input",{attrs:{label:"Αρχική πηγή"},model:{value:e.editingLayer.attributions,callback:function(t){e.$set(e.editingLayer,"attributions",t)},expression:"editingLayer.attributions"}}),i("q-input",{attrs:{label:"Όνομα αρχείου"},model:{value:e.editingLayer.filename,callback:function(t){e.$set(e.editingLayer,"filename",t)},expression:"editingLayer.filename"}}),i("q-input",{attrs:{label:"Τύπος map tiles"},model:{value:e.editingLayer.type,callback:function(t){e.$set(e.editingLayer,"type",t)},expression:"editingLayer.type"}}),i("q-input",{attrs:{label:"URL"},model:{value:e.editingLayer.url,callback:function(t){e.$set(e.editingLayer,"url",t)},expression:"editingLayer.url"}}),i("q-toggle",{attrs:{label:"Ορατό"},model:{value:e.editingLayer.visible,callback:function(t){e.$set(e.editingLayer,"visible",t)},expression:"editingLayer.visible"}}),i("q-toggle",{attrs:{label:"Δημοσιευμένος"},model:{value:e.editingLayer.published,callback:function(t){e.$set(e.editingLayer,"published",t)},expression:"editingLayer.published"}}),i("q-input",{attrs:{label:"Σειρά εμφάνισης"},model:{value:e.editingLayer.zindex,callback:function(t){e.$set(e.editingLayer,"zindex",t)},expression:"editingLayer.zindex"}}),i("q-input",{attrs:{label:"Κλειδί API"},model:{value:e.editingLayer.apikey,callback:function(t){e.$set(e.editingLayer,"apikey",t)},expression:"editingLayer.apikey"}}),i("q-input",{attrs:{label:"Όνομα πίνακα βάσης δεδομένων"},model:{value:e.editingLayer.dbtablename,callback:function(t){e.$set(e.editingLayer,"dbtablename",t)},expression:"editingLayer.dbtablename"}})],1),i("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Άκυρο"}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Αποθήκευση"},on:{click:e.saveLayer}})],1)],1):e._e()],1)],1)},n=[],r=i("1fee"),s={name:"maps",data(){return{current:1,searchText:null,expanded:!1,group:["title"],searchDocuments:null,editLayerDialog:!1,editingLayer:null}},apollo:{layers:{query:r["b"].getLayers,error(e){this.error=JSON.stringify(e.message)}}},methods:{saveLayer(){const e=this.editingLayer;this.$apollo.mutate({mutation:r["a"].updateLayer,variables:{id:e.id,label:e.label,details:e.details,timespan:e.timespan,filetype:e.filetype,crs:e.crs,attributions:e.attributions,filename:e.filename,type:e.type,url:e.url,zindex:parseInt(e.zindex),visible:e.visible,published:e.published,apikey:e.apikey,dbtablename:e.dbtablename},update:(e,{data:{updateLayer:t}})=>{if(t){const t=e.readQuery({query:r["b"].getLayers});e.writeQuery({query:r["b"].getLayers,data:t})}}})},deleteLayer(e){this.$q.notify({message:"Διαγραφή χάρτη;",color:"negative",timeout:0,actions:[{label:"Διαγραφή",color:"white",handler:()=>{this.$apollo.mutate({mutation:r["a"].deleteLayer,variables:{id:e},update:(t,{data:{deleteLayer:i}})=>{if(i){const i=t.readQuery({query:r["b"].getLayers});i.layers=i.layers.filter((t=>t.id!==e)),t.writeQuery({query:r["b"].getLayers,data:i})}}}),this.$q.loading.hide()}},{label:"Άκυρο",color:"white"}]})}}},l=s,d=i("2877"),o=i("9989"),c=i("9c40"),u=i("cf57"),p=i("54e1"),m=i("1c1c"),b=i("66e5"),g=i("4074"),$=i("3b73"),y=i("f09f"),f=i("a370"),S=i("0170"),_=i("eb85"),L=i("24e8"),v=i("27f9"),q=i("9564"),x=i("4b7e"),h=i("7f67"),k=i("eebe"),D=i.n(k),w=Object(d["a"])(l,a,n,!1,null,null,null);t["default"]=w.exports;D()(w,"components",{QPage:o["a"],QBtn:c["a"],QSpinnerGears:u["a"],QBanner:p["a"],QList:m["a"],QItem:b["a"],QItemSection:g["a"],QExpansionItem:$["a"],QCard:y["a"],QCardSection:f["a"],QItemLabel:S["a"],QSeparator:_["a"],QDialog:L["a"],QInput:v["a"],QToggle:q["a"],QCardActions:x["a"]}),D()(w,"directives",{ClosePopup:h["a"]})},"1fee":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return n}));var a={};i.r(a),i.d(a,"getLayers",(function(){return y})),i.d(a,"getPublishedLayers",(function(){return f})),i.d(a,"getSpecies",(function(){return S})),i.d(a,"getUsers",(function(){return _})),i.d(a,"getContacts",(function(){return L})),i.d(a,"getDepartments",(function(){return v})),i.d(a,"getUsersOfDepartment",(function(){return q})),i.d(a,"queryXY",(function(){return x}));var n={};i.r(n),i.d(n,"createUser",(function(){return Y})),i.d(n,"updateUser",(function(){return F})),i.d(n,"deleteUser",(function(){return A})),i.d(n,"createDocument",(function(){return R})),i.d(n,"deleteLayer",(function(){return X})),i.d(n,"createDepartment",(function(){return E})),i.d(n,"updateDepartment",(function(){return G})),i.d(n,"updateDepartmentManager",(function(){return V})),i.d(n,"deleteDepartment",(function(){return H})),i.d(n,"singleUpload",(function(){return K})),i.d(n,"signIn",(function(){return W})),i.d(n,"addLayer",(function(){return Z})),i.d(n,"addSpecies",(function(){return ee})),i.d(n,"updateSpecies",(function(){return te})),i.d(n,"deleteSpecies",(function(){return ie})),i.d(n,"updateLayer",(function(){return ae}));var r=i("5184");let s,l=e=>e;Object(r["a"])(s||(s=l`
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
`));let d,o,c,u,p,m,b,g,$=e=>e;const y=Object(r["a"])(d||(d=$`
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
`)),f=Object(r["a"])(o||(o=$`
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
`)),S=Object(r["a"])(c||(c=$`
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
`)),_=Object(r["a"])(u||(u=$`
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
`)),L=Object(r["a"])(p||(p=$`
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
`)),v=Object(r["a"])(m||(m=$`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),q=Object(r["a"])(b||(b=$`
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
`)),x=Object(r["a"])(g||(g=$`
  query queryXY($layer: String, $type: String, $zoom: Int, $x: Float, $y: Float){
    queryXY(layer: $layer, type: $type, zoom: $zoom, x: $x, y: $y)
  }
`));i("ffd6");let h,k,D,w,I,j,O,z,Q,U,C,B,T,P,N,J,M=e=>e;const Y=Object(r["a"])(h||(h=M`
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
`)),F=Object(r["a"])(k||(k=M`
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
`)),A=Object(r["a"])(D||(D=M`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),R=Object(r["a"])(w||(w=M`
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
`)),X=Object(r["a"])(I||(I=M`
  mutation($id: String!) {
    deleteLayer(id: $id)
  }
`)),E=Object(r["a"])(j||(j=M`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),G=Object(r["a"])(O||(O=M`
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
`)),V=Object(r["a"])(z||(z=M`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),H=Object(r["a"])(Q||(Q=M`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),K=Object(r["a"])(U||(U=M`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),W=Object(r["a"])(C||(C=M`
  mutation signIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),Z=Object(r["a"])(B||(B=M`
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
`)),ee=Object(r["a"])(T||(T=M`
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
`)),te=Object(r["a"])(P||(P=M`
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
`)),ie=Object(r["a"])(N||(N=M`
  mutation($id: String) {
    deleteSpecies(id: $id)
  }
`)),ae=Object(r["a"])(J||(J=M`
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
`))},ffd6:function(e,t){}}]);