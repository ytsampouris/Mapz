(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"013f":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("h5",{staticClass:"text-center"},[e._v("Είσοδος στο σύστημα")]),i("q-form",{ref:"emailAuthenticationForm",staticClass:"authentication q-gutter-y-md",on:{submit:e.signIn}},[i("q-input",{attrs:{name:"email",outlined:"outlined","lazy-rules":"lazy-rules",autocomplete:"email",color:"primary","data-cy":"email",label:"EMAIL",type:"email",rules:[function(e){return!!e||"*Field is required"},function(e){return e.includes("@")&&e.includes(".")||"*Please Provide a valid email"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),i("q-input",{ref:"fldPasswordChange",attrs:{"lazy-rules":"lazy-rules",outlined:"outlined",autocomplete:"current-password new-password",color:"primary","data-cy":"password",label:"PASSWORD",rules:[function(e){return!!e||"*Field is required"}],type:e.isPwd?"password":"text"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.onSubmit(),t.target.blur()}},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),i("q-btn",{staticClass:"full-width q-mt-md",attrs:{color:"primary","data-cy":"submit",type:"submit",label:"Είσοδος"}})],1)],1)},a=[],r=i("1fee"),s=(i("cf57"),{name:"Login",data(){return{email:null,password:null,isPwd:!0}},methods:{signIn(){const e=this.email,t=this.password;this.$apollo.mutate({mutation:r["a"].signIn,variables:{login:e,password:t},update:(e,{data:{signIn:t}})=>{localStorage.setItem("token",t.token),localStorage.setItem("user",JSON.stringify(t)),this.$router.push({path:"/user"})}}).catch((e=>{localStorage.removeItem("token"),localStorage.removeItem("user"),this.$apollo.mutate({mutation:r["a"].signIn,variables:{email:email,password:t},update:(e,{data:{signIn:t}})=>{localStorage.setItem("token",t.token),localStorage.setItem("user",JSON.stringify(t)),this.$router.push({path:"/user"})}})}))}}}),l=s,d=i("2877"),o=i("9989"),u=i("0378"),c=i("27f9"),p=i("0016"),$=i("9c40"),m=i("eebe"),g=i.n(m),b=Object(d["a"])(l,n,a,!1,null,null,null);t["default"]=b.exports;g()(b,"components",{QPage:o["a"],QForm:u["a"],QInput:c["a"],QIcon:p["a"],QBtn:$["a"]})},"1fee":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return a}));var n={};i.r(n),i.d(n,"getLayers",(function(){return f})),i.d(n,"getPublishedLayers",(function(){return y})),i.d(n,"getSpecies",(function(){return S})),i.d(n,"getUsers",(function(){return _})),i.d(n,"getContacts",(function(){return k})),i.d(n,"getDepartments",(function(){return v})),i.d(n,"getUsersOfDepartment",(function(){return w})),i.d(n,"queryXY",(function(){return D}));var a={};i.r(a),i.d(a,"createUser",(function(){return A})),i.d(a,"updateUser",(function(){return E})),i.d(a,"deleteUser",(function(){return N})),i.d(a,"createDocument",(function(){return X})),i.d(a,"deleteLayer",(function(){return Y})),i.d(a,"createDepartment",(function(){return R})),i.d(a,"updateDepartment",(function(){return W})),i.d(a,"updateDepartmentManager",(function(){return G})),i.d(a,"deleteDepartment",(function(){return H})),i.d(a,"singleUpload",(function(){return K})),i.d(a,"signIn",(function(){return V})),i.d(a,"addLayer",(function(){return Z})),i.d(a,"addSpecies",(function(){return ee})),i.d(a,"updateSpecies",(function(){return te})),i.d(a,"deleteSpecies",(function(){return ie})),i.d(a,"updateLayer",(function(){return ne}));var r=i("5184");let s,l=e=>e;Object(r["a"])(s||(s=l`
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
`));let d,o,u,c,p,$,m,g,b=e=>e;const f=Object(r["a"])(d||(d=b`
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
`)),y=Object(r["a"])(o||(o=b`
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
`)),S=Object(r["a"])(u||(u=b`
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
`)),_=Object(r["a"])(c||(c=b`
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
`)),k=Object(r["a"])(p||(p=b`
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
`)),v=Object(r["a"])($||($=b`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),w=Object(r["a"])(m||(m=b`
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
`)),D=Object(r["a"])(g||(g=b`
  query queryXY($layer: String, $type: String, $zoom: Int, $x: Float, $y: Float){
    queryXY(layer: $layer, type: $type, zoom: $zoom, x: $x, y: $y)
  }
`));i("ffd6");let I,h,O,j,x,q,z,L,U,P,C,B,F,Q,J,M,T=e=>e;const A=Object(r["a"])(I||(I=T`
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
`)),E=Object(r["a"])(h||(h=T`
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
`)),N=Object(r["a"])(O||(O=T`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),X=Object(r["a"])(j||(j=T`
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
`)),Y=Object(r["a"])(x||(x=T`
  mutation($id: String!) {
    deleteLayer(id: $id)
  }
`)),R=Object(r["a"])(q||(q=T`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),W=Object(r["a"])(z||(z=T`
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
`)),G=Object(r["a"])(L||(L=T`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),H=Object(r["a"])(U||(U=T`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),K=Object(r["a"])(P||(P=T`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),V=Object(r["a"])(C||(C=T`
  mutation signIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),Z=Object(r["a"])(B||(B=T`
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
`)),ee=Object(r["a"])(F||(F=T`
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
`)),te=Object(r["a"])(Q||(Q=T`
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
`)),ie=Object(r["a"])(J||(J=T`
  mutation($id: String) {
    deleteSpecies(id: $id)
  }
`)),ne=Object(r["a"])(M||(M=T`
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