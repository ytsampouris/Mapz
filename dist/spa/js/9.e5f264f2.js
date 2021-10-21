(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"1fee":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return r}));var n={};i.r(n),i.d(n,"getLayers",(function(){return b})),i.d(n,"getPublishedLayers",(function(){return y})),i.d(n,"getSpecies",(function(){return S})),i.d(n,"getUsers",(function(){return _})),i.d(n,"getContacts",(function(){return k})),i.d(n,"getDepartments",(function(){return v})),i.d(n,"getUsersOfDepartment",(function(){return D})),i.d(n,"queryXY",(function(){return w}));var r={};i.r(r),i.d(r,"createUser",(function(){return M})),i.d(r,"updateUser",(function(){return X})),i.d(r,"deleteUser",(function(){return Y})),i.d(r,"createDocument",(function(){return F})),i.d(r,"deleteLayer",(function(){return A})),i.d(r,"createDepartment",(function(){return R})),i.d(r,"updateDepartment",(function(){return G})),i.d(r,"updateDepartmentManager",(function(){return H})),i.d(r,"deleteDepartment",(function(){return K})),i.d(r,"singleUpload",(function(){return V})),i.d(r,"signIn",(function(){return W})),i.d(r,"addLayer",(function(){return Z})),i.d(r,"addSpecies",(function(){return ee})),i.d(r,"updateSpecies",(function(){return te})),i.d(r,"deleteSpecies",(function(){return ie})),i.d(r,"updateLayer",(function(){return ne}));var a=i("5184");let s,l=e=>e;Object(a["a"])(s||(s=l`
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
`));let d,u,o,c,p,m,$,f,g=e=>e;const b=Object(a["a"])(d||(d=g`
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
`)),y=Object(a["a"])(u||(u=g`
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
`)),S=Object(a["a"])(o||(o=g`
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
`)),_=Object(a["a"])(c||(c=g`
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
`)),k=Object(a["a"])(p||(p=g`
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
`)),v=Object(a["a"])(m||(m=g`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),D=Object(a["a"])($||($=g`
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
`)),w=Object(a["a"])(f||(f=g`
  query queryXY($layer: String, $type: String, $zoom: Int, $x: Float, $y: Float){
    queryXY(layer: $layer, type: $type, zoom: $zoom, x: $x, y: $y)
  }
`));i("ffd6");let h,q,U,O,x,j,I,Q,L,C,z,E,P,B,T,N,J=e=>e;const M=Object(a["a"])(h||(h=J`
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
`)),X=Object(a["a"])(q||(q=J`
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
`)),Y=Object(a["a"])(U||(U=J`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),F=Object(a["a"])(O||(O=J`
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
`)),A=Object(a["a"])(x||(x=J`
  mutation($id: String!) {
    deleteLayer(id: $id)
  }
`)),R=Object(a["a"])(j||(j=J`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),G=Object(a["a"])(I||(I=J`
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
`)),H=Object(a["a"])(Q||(Q=J`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),K=Object(a["a"])(L||(L=J`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),V=Object(a["a"])(C||(C=J`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),W=Object(a["a"])(z||(z=J`
  mutation signIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),Z=Object(a["a"])(E||(E=J`
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
`)),ee=Object(a["a"])(P||(P=J`
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
`)),te=Object(a["a"])(B||(B=J`
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
`)),ie=Object(a["a"])(T||(T=J`
  mutation($id: String) {
    deleteSpecies(id: $id)
  }
`)),ne=Object(a["a"])(N||(N=J`
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
`))},7367:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[e._v("\n  Λίστα των χρηστών του συστήματος\n  "),i("q-list",{attrs:{bordered:"",padding:""}},e._l(e.users,(function(t){return i("q-item",{key:t._id},[i("q-item-section",[i("q-item-label",[e._v(e._s(t.fullname))])],1),i("q-item-section",{attrs:{side:"",top:""}},[i("q-btn",{attrs:{icon:"edit",flat:"",round:""},on:{click:function(i){e.newUserDialog=!0,e.userToEdit=t}}})],1),i("q-item-section",{attrs:{side:"",top:""}},[i("q-btn",{attrs:{icon:"delete",flat:"",round:""},on:{click:function(i){return e.deleteUser(t._id)}}})],1)],1)})),1),i("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[i("q-btn",{attrs:{fab:"",icon:"add",color:"primary"},on:{click:function(t){e.newUserDialog=!0,e.userToEdit=e.newUser}}})],1),i("q-dialog",{attrs:{persistent:""},model:{value:e.newUserDialog,callback:function(t){e.newUserDialog=t},expression:"newUserDialog"}},[i("userProfile",{attrs:{user:e.userToEdit}})],1)],1)},r=[],a=i("1fee"),s=i("9f73"),l={name:"userManagement",components:{userProfile:s["a"]},data(){return{newUser:{userName:"Νέος χρήστης"},newUserDialog:!1,userToEdit:null}},apollo:{users:{query:a["b"].getUsers,error(e){this.error=JSON.stringify(e.message)}}},methods:{deleteUser(e){this.$q.notify({message:"Διαγραφή Χρήστη;",color:"negative",timeout:0,actions:[{label:"Διαγραφή",color:"white",handler:()=>{this.$apollo.mutate({mutation:a["a"].deleteUser,variables:{_id:e},update:(t,{data:{deleteUser:i}})=>{if(i){const i=t.readQuery({query:a["b"].getUsers});i.users=i.users.filter((t=>t._id!==e)),t.writeQuery({query:a["b"].getUsers,data:i})}}})}},{label:"Άκυρο",color:"white"}]})}}},d=l,u=i("2877"),o=i("9989"),c=i("1c1c"),p=i("66e5"),m=i("4074"),$=i("0170"),f=i("9c40"),g=i("de5e"),b=i("24e8"),y=i("eebe"),S=i.n(y),_=Object(u["a"])(d,n,r,!1,null,null,null);t["default"]=_.exports;S()(_,"components",{QPage:o["a"],QList:c["a"],QItem:p["a"],QItemSection:m["a"],QItemLabel:$["a"],QBtn:f["a"],QPageSticky:g["a"],QDialog:b["a"]})},"9f73":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-card",{staticStyle:{"min-width":"350px"}},[i("q-card-section",[i("div",{staticClass:"text-h6"},[e._v("Επεξεργασία Χρήστη")])]),i("q-card-section",{staticClass:"q-pt-none"},[i("q-input",{attrs:{dense:"",label:"Όνομα χρήστη",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),i("q-input",{attrs:{dense:"",label:"Ονοματεπώνυμο"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.fullname,callback:function(t){e.$set(e.user,"fullname",t)},expression:"user.fullname"}}),i("q-input",{attrs:{dense:"",label:"email"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),i("q-input",{attrs:{dense:"",label:"Κωδικός",type:"password"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),i("q-select",{attrs:{label:"Τμήμα","stack-label":"",multiple:"","use-chips":"",dense:"",options:e.departments,"option-value":"_id","option-label":"title","transition-show":"scale","transition-hide":"scale"},model:{value:e.user.department,callback:function(t){e.$set(e.user,"department",t)},expression:"user.department"}})],1),i("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Άκυρο"}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Αποθήκευση"},on:{click:e.saveUserProfile}})],1)],1)},r=[],a=i("1fee"),s={name:"userProfile",props:["user"],data(){return{newDepartment:null,newDepartmentDialog:!1}},apollo:{departments:{query:a["b"].getDepartments,error(e){this.error=JSON.stringify(e.message)}}},methods:{saveUserProfile(){const e=this.user.department.map((function(e){return e["_id"]}));this.user._id?this.$apollo.mutate({mutation:a["a"].updateUser,variables:{_id:this.user._id,username:this.user.username,fullname:this.user.fullname,password:this.user.password,department:e,email:this.user.email},update:(e,{data:{updateUser:t}})=>{if(t){const t=e.readQuery({query:a["b"].getUsers});e.writeQuery({query:a["b"].getUsers,data:t})}}}):this.$apollo.mutate({mutation:a["a"].createUser,variables:{username:this.user.username,fullname:this.user.fullname,password:this.user.password,department:e,email:this.user.email},update:(e,{data:{createUser:t}})=>{if(t){const i=e.readQuery({query:a["b"].getUsers});e.writeQuery({query:a["b"].getUsers,data:i.users.push(t)})}}})}}},l=s,d=i("2877"),u=i("f09f"),o=i("a370"),c=i("27f9"),p=i("ddd8"),m=i("4b7e"),$=i("9c40"),f=i("7f67"),g=i("eebe"),b=i.n(g),y=Object(d["a"])(l,n,r,!1,null,null,null);t["a"]=y.exports;b()(y,"components",{QCard:u["a"],QCardSection:o["a"],QInput:c["a"],QSelect:p["a"],QCardActions:m["a"],QBtn:$["a"]}),b()(y,"directives",{ClosePopup:f["a"]})},ffd6:function(e,t){}}]);