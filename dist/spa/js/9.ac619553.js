(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"1fee":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return a}));var n={};i.r(n),i.d(n,"getLayers",(function(){return f})),i.d(n,"getPublishedLayers",(function(){return y})),i.d(n,"getSpecies",(function(){return S})),i.d(n,"getUsers",(function(){return _})),i.d(n,"getContacts",(function(){return k})),i.d(n,"getDepartments",(function(){return v})),i.d(n,"getUsersOfDepartment",(function(){return D})),i.d(n,"queryXY",(function(){return w}));var a={};i.r(a),i.d(a,"createUser",(function(){return T})),i.d(a,"updateUser",(function(){return Y})),i.d(a,"deleteUser",(function(){return X})),i.d(a,"createDocument",(function(){return E})),i.d(a,"deleteLayer",(function(){return G})),i.d(a,"createDepartment",(function(){return R})),i.d(a,"updateDepartment",(function(){return A})),i.d(a,"updateDepartmentManager",(function(){return H})),i.d(a,"deleteDepartment",(function(){return K})),i.d(a,"singleUpload",(function(){return V})),i.d(a,"signIn",(function(){return W})),i.d(a,"addLayer",(function(){return Z})),i.d(a,"addSpecies",(function(){return ee})),i.d(a,"updateSpecies",(function(){return te})),i.d(a,"deleteSpecies",(function(){return ie})),i.d(a,"updateLayer",(function(){return ne}));var r=i("5184");let l,s=e=>e;Object(r["a"])(l||(l=s`
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
`));let d,c,o,u,$,p,m,b,g=e=>e;const f=Object(r["a"])(d||(d=g`
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
`)),y=Object(r["a"])(c||(c=g`
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
`)),S=Object(r["a"])(o||(o=g`
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
`)),_=Object(r["a"])(u||(u=g`
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
`)),k=Object(r["a"])($||($=g`
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
`)),v=Object(r["a"])(p||(p=g`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),D=Object(r["a"])(m||(m=g`
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
`)),w=Object(r["a"])(b||(b=g`
  query queryXY($layer: String, $type: String, $zoom: Int, $x: Float, $y: Float){
    queryXY(layer: $layer, type: $type, zoom: $zoom, x: $x, y: $y)
  }
`));i("ffd6");let h,j,O,I,q,x,L,U,z,C,F,Q,B,N,J,M,P=e=>e;const T=Object(r["a"])(h||(h=P`
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
`)),Y=Object(r["a"])(j||(j=P`
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
`)),X=Object(r["a"])(O||(O=P`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),E=Object(r["a"])(I||(I=P`
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
`)),G=Object(r["a"])(q||(q=P`
  mutation($id: String!) {
    deleteLayer(id: $id)
  }
`)),R=Object(r["a"])(x||(x=P`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),A=Object(r["a"])(L||(L=P`
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
`)),H=Object(r["a"])(U||(U=P`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),K=Object(r["a"])(z||(z=P`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),V=Object(r["a"])(C||(C=P`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),W=Object(r["a"])(F||(F=P`
  mutation signIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),Z=Object(r["a"])(Q||(Q=P`
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
`)),ee=Object(r["a"])(B||(B=P`
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
`)),te=Object(r["a"])(N||(N=P`
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
`)),ie=Object(r["a"])(J||(J=P`
  mutation($id: String) {
    deleteSpecies(id: $id)
  }
`)),ne=Object(r["a"])(M||(M=P`
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
`))},"2eb2":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("q-btn",{attrs:{color:"white",flat:"","icon-right":"fab fa-youtube",label:"Οδηγίες χρήσης",type:"a",target:"new_tab",href:"https://www.youtube.com/playlist?list=PLwQ-2nYs008a8uMgJw64h7NcyjxtLbCUa"}}),i("br"),i("q-btn",{attrs:{color:"red","icon-right":"fab fa-youtube",label:"Οδηγίες χρήσης",type:"a",target:"new_tab",href:"https://www.youtube.com/playlist?list=PLwQ-2nYs008a8uMgJw64h7NcyjxtLbCUa"}}),e.$apollo.loading?i("div",{staticStyle:{width:"100%",height:"100vh","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute",top:"40%"}},[i("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),i("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1):e._e(),e.$apollo.loading?e._e():i("div",{staticClass:"q-pa-xs"},[i("q-table",{staticClass:"my-sticky-column-table",attrs:{title:"Είδη",data:e.species,columns:e.columns,filter:e.tableFilter,"row-key":"name","wrap-cells":""},scopedSlots:e._u([{key:"top",fn:function(t){return[i("div",{staticClass:"col-2 q-table__title"},[e._v("Είδη")]),i("q-space"),i("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.tableFilter,callback:function(t){e.tableFilter=t},expression:"tableFilter"}}),i("q-btn",{staticClass:"q-ml-md",attrs:{round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}})]}}],null,!1,1033238615)})],1)],1)},a=[],r=i("1fee"),l={name:"Database",apollo:{species:{query:r["b"].getSpecies,error(e){this.error=JSON.stringify(e.message),console.log("error:: ",e)}}},data(){return{error:null,tableFilter:"",columns:[{name:"species",align:"center",label:"Είδος",field:"species",sortable:!0},{name:"family",label:"Οικογένεια",field:"family",sortable:!0},{name:"class",label:"Τάξη",field:"class",sortable:!0},{name:"n2k",label:"Κωδικός Ν2Κ",field:"n2k",sortable:!0},{name:"code_n2k",label:"Περιοχή Ν2Κ",field:"code_n2k",sortable:!0},{name:"iunc",label:"IUNC",field:"iunc",sortable:!0},{name:"directive_92",label:"Οδηγία 92/43/ΕΟΚ",field:"directive_92",sortable:!0},{name:"bern",label:"Σύμβαση Βέρνης",field:"bern",sortable:!0},{name:"bonn",label:"Σύμβαση Βόννης",field:"bonn",sortable:!0},{name:"cites",label:"Cites",field:"cites",sortable:!0},{name:"date",label:"Ημερομηνία",field:"date",sortable:!0},{name:"source",label:"Πηγή",field:"source",sortable:!0},{name:"eunis",label:"Σύνδεσμος EUNIS",field:"eunis",sortable:!0}]}}},s=l,d=i("2877"),c=i("9989"),o=i("9c40"),u=i("cf57"),$=i("eaac"),p=i("2c91"),m=i("27f9"),b=i("0016"),g=i("eebe"),f=i.n(g),y=Object(d["a"])(s,n,a,!1,null,null,null);t["default"]=y.exports;f()(y,"components",{QPage:c["a"],QBtn:o["a"],QSpinnerGears:u["a"],QTable:$["a"],QSpace:p["a"],QInput:m["a"],QIcon:b["a"]})},ffd6:function(e,t){}}]);