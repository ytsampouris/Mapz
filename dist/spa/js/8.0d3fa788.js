(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1fee":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return a}));var n={};i.r(n),i.d(n,"getLayers",(function(){return f})),i.d(n,"getPublishedLayers",(function(){return S})),i.d(n,"getSpecies",(function(){return y})),i.d(n,"getUsers",(function(){return _})),i.d(n,"getContacts",(function(){return k})),i.d(n,"getDepartments",(function(){return v})),i.d(n,"getUsersOfDepartment",(function(){return D})),i.d(n,"queryXY",(function(){return O}));var a={};i.r(a),i.d(a,"createUser",(function(){return P})),i.d(a,"updateUser",(function(){return X})),i.d(a,"deleteUser",(function(){return Y})),i.d(a,"createDocument",(function(){return E})),i.d(a,"deleteLayer",(function(){return G})),i.d(a,"createDepartment",(function(){return R})),i.d(a,"updateDepartment",(function(){return A})),i.d(a,"updateDepartmentManager",(function(){return H})),i.d(a,"deleteDepartment",(function(){return K})),i.d(a,"singleUpload",(function(){return V})),i.d(a,"signIn",(function(){return W})),i.d(a,"addLayer",(function(){return Z})),i.d(a,"addSpecies",(function(){return ee})),i.d(a,"updateSpecies",(function(){return te})),i.d(a,"deleteSpecies",(function(){return ie})),i.d(a,"updateLayer",(function(){return ne}));var r=i("5184");let s,l=e=>e;Object(r["a"])(s||(s=l`
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
`)),S=Object(r["a"])(c||(c=g`
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
`)),y=Object(r["a"])(o||(o=g`
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
`)),O=Object(r["a"])(b||(b=g`
  query queryXY($layer: String, $type: String, $zoom: Int, $x: Float, $y: Float){
    queryXY(layer: $layer, type: $type, zoom: $zoom, x: $x, y: $y)
  }
`));i("ffd6");let I,j,h,q,w,x,z,U,L,C,F,B,Q,T,N,J,M=e=>e;const P=Object(r["a"])(I||(I=M`
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
`)),X=Object(r["a"])(j||(j=M`
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
`)),Y=Object(r["a"])(h||(h=M`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),E=Object(r["a"])(q||(q=M`
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
`)),G=Object(r["a"])(w||(w=M`
  mutation($id: String!) {
    deleteLayer(id: $id)
  }
`)),R=Object(r["a"])(x||(x=M`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),A=Object(r["a"])(z||(z=M`
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
`)),H=Object(r["a"])(U||(U=M`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),K=Object(r["a"])(L||(L=M`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),V=Object(r["a"])(C||(C=M`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),W=Object(r["a"])(F||(F=M`
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
`)),ee=Object(r["a"])(Q||(Q=M`
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
`)),te=Object(r["a"])(T||(T=M`
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
`)),ne=Object(r["a"])(J||(J=M`
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
`))},"2eb2":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[e.$apollo.loading?i("div",{staticStyle:{width:"100%",height:"100vh","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute",top:"40%"}},[i("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),i("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1):e._e(),e.$apollo.loading?e._e():i("div",{staticClass:"q-pa-xs"},[i("q-table",{staticClass:"my-sticky-column-table",attrs:{title:"Είδη",data:e.species,columns:e.columns,filter:e.tableFilter,"row-key":"name","wrap-cells":""},scopedSlots:e._u([{key:"top",fn:function(t){return[i("div",{staticClass:"col-2 q-table__title"},[e._v("Είδη")]),i("q-space"),i("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.tableFilter,callback:function(t){e.tableFilter=t},expression:"tableFilter"}}),i("q-btn",{staticClass:"q-ml-md",attrs:{round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}})]}}],null,!1,1033238615)})],1)])},a=[],r=i("1fee"),s={name:"Database",apollo:{species:{query:r["b"].getSpecies,error(e){this.error=JSON.stringify(e.message),console.log("error:: ",e)}}},data(){return{error:null,tableFilter:"",columns:[{name:"species",align:"center",label:"Είδος",field:"species",sortable:!0},{name:"family",label:"Οικογένεια",field:"family",sortable:!0},{name:"class",label:"Τάξη",field:"class",sortable:!0},{name:"n2k",label:"Κωδικός Ν2Κ",field:"n2k",sortable:!0},{name:"code_n2k",label:"Περιοχή Ν2Κ",field:"code_n2k",sortable:!0},{name:"iunc",label:"IUNC",field:"iunc",sortable:!0},{name:"directive_92",label:"Οδηγία 92/43/ΕΟΚ",field:"directive_92",sortable:!0},{name:"bern",label:"Σύμβαση Βέρνης",field:"bern",sortable:!0},{name:"bonn",label:"Σύμβαση Βόννης",field:"bonn",sortable:!0},{name:"cites",label:"Cites",field:"cites",sortable:!0},{name:"date",label:"Ημερομηνία",field:"date",sortable:!0},{name:"source",label:"Πηγή",field:"source",sortable:!0},{name:"eunis",label:"Σύνδεσμος EUNIS",field:"eunis",sortable:!0}]}}},l=s,d=i("2877"),c=i("9989"),o=i("cf57"),u=i("eaac"),$=i("2c91"),p=i("27f9"),m=i("0016"),b=i("9c40"),g=i("eebe"),f=i.n(g),S=Object(d["a"])(l,n,a,!1,null,null,null);t["default"]=S.exports;f()(S,"components",{QPage:c["a"],QSpinnerGears:o["a"],QTable:u["a"],QSpace:$["a"],QInput:p["a"],QIcon:m["a"],QBtn:b["a"]})},ffd6:function(e,t){}}]);