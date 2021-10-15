(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"1fee":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var a={};n.r(a),n.d(a,"getLayers",(function(){return b})),n.d(a,"getPublishedLayers",(function(){return y})),n.d(a,"getSpecies",(function(){return D})),n.d(a,"getUsers",(function(){return _})),n.d(a,"getContacts",(function(){return S})),n.d(a,"getDepartments",(function(){return k})),n.d(a,"getUsersOfDepartment",(function(){return q})),n.d(a,"queryXY",(function(){return v}));var i={};n.r(i),n.d(i,"createUser",(function(){return J})),n.d(i,"updateUser",(function(){return X})),n.d(i,"deleteUser",(function(){return Y})),n.d(i,"createDocument",(function(){return A})),n.d(i,"deleteLayer",(function(){return F})),n.d(i,"createDepartment",(function(){return R})),n.d(i,"updateDepartment",(function(){return G})),n.d(i,"updateDepartmentManager",(function(){return H})),n.d(i,"deleteDepartment",(function(){return K})),n.d(i,"singleUpload",(function(){return V})),n.d(i,"signIn",(function(){return W})),n.d(i,"addLayer",(function(){return Z})),n.d(i,"addSpecies",(function(){return ee})),n.d(i,"updateSpecies",(function(){return te})),n.d(i,"deleteSpecies",(function(){return ne})),n.d(i,"updateLayer",(function(){return ae}));var r=n("5184");let s,l=e=>e;Object(r["a"])(s||(s=l`
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
`));let o,d,u,p,c,m,$,f,g=e=>e;const b=Object(r["a"])(o||(o=g`
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
`)),y=Object(r["a"])(d||(d=g`
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
`)),D=Object(r["a"])(u||(u=g`
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
`)),_=Object(r["a"])(p||(p=g`
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
`)),S=Object(r["a"])(c||(c=g`
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
`)),k=Object(r["a"])(m||(m=g`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),q=Object(r["a"])($||($=g`
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
`)),v=Object(r["a"])(f||(f=g`
  query queryXY($layer: String, $type: String, $zoom: Int, $x: Float, $y: Float){
    queryXY(layer: $layer, type: $type, zoom: $zoom, x: $x, y: $y)
  }
`));n("ffd6");let h,w,x,U,O,C,I,Q,j,T,L,z,E,P,B,N,M=e=>e;const J=Object(r["a"])(h||(h=M`
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
`)),X=Object(r["a"])(w||(w=M`
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
`)),Y=Object(r["a"])(x||(x=M`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),A=Object(r["a"])(U||(U=M`
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
`)),F=Object(r["a"])(O||(O=M`
  mutation($id: String!) {
    deleteLayer(id: $id)
  }
`)),R=Object(r["a"])(C||(C=M`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),G=Object(r["a"])(I||(I=M`
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
`)),H=Object(r["a"])(Q||(Q=M`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),K=Object(r["a"])(j||(j=M`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),V=Object(r["a"])(T||(T=M`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),W=Object(r["a"])(L||(L=M`
  mutation signIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),Z=Object(r["a"])(z||(z=M`
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
`)),ee=Object(r["a"])(E||(E=M`
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
`)),ne=Object(r["a"])(B||(B=M`
  mutation($id: String) {
    deleteSpecies(id: $id)
  }
`)),ae=Object(r["a"])(N||(N=M`
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
`))},"9dd3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("q-list",[n("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[n("q-btn",{attrs:{icon:"add",flat:"",round:""},on:{click:function(t){e.newDepartmentDialog=!0}}}),e._v("Τμήματα\n        ")],1),e._l(e.departments,(function(t){return n("q-item",e._b({key:t._id,attrs:{clickable:""},on:{click:function(n){e.selectedDepartmentId=t._id,e.selectedDepartment=t}}},"q-item",t,!1),[n("q-item-section",[n("q-item-label",[e._v(e._s(t.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n              "+e._s(t.description)+"\n            ")])],1),n("q-item-section",{attrs:{side:"",top:""}},[n("q-btn",{attrs:{flat:"",round:"",icon:"edit"},on:{click:function(n){n.stopPropagation(),e.updateDepartmentDialog=!0,e.departmentToUpdate=t}}})],1),n("q-item-section",{attrs:{side:"",top:""}},[n("q-btn",{attrs:{flat:"",round:"",icon:"delete"},on:{click:function(n){return n.stopPropagation(),e.deleteDepartment(t._id)}}})],1)],1)}))],2)],1),n("div",{staticClass:"col"},[n("q-list",[n("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n          Μέλη επιλεγμένου τμήματος\n          ")]),e._l(e.usersByDepartment,(function(t){return n("q-item",e._b({key:t._id,attrs:{clickable:""},on:{click:function(n){e.userToEdit=t,e.newUserDialog=!0}}},"q-item",t,!1),[n("q-item-section",[n("q-item-label",[e._v(e._s(t.fullname))])],1),t._id===e.selectedDepartment.manager?n("q-item-section",{attrs:{side:"",top:""}},[n("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"stars",disable:""}})],1):e._e(),t._id!==e.selectedDepartment.manager?n("q-item-section",{attrs:{side:"",top:""}},[n("q-btn",{attrs:{flat:"",round:"",color:"grey",icon:"stars"},on:{click:function(n){return n.stopPropagation(),e.toggleManager(t._id)}}})],1):e._e()],1)}))],2)],1)]),n("q-dialog",{attrs:{persistent:""},model:{value:e.newDepartmentDialog,callback:function(t){e.newDepartmentDialog=t},expression:"newDepartmentDialog"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Νέο Τμήμα")])]),n("q-card-section",{staticClass:"q-pt-none"},[n("q-input",{attrs:{dense:"",label:"Τίτλος",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.newDepartment.title,callback:function(t){e.$set(e.newDepartment,"title",t)},expression:"newDepartment.title"}})],1),n("q-card-section",{staticClass:"q-pt-none"},[n("q-input",{attrs:{dense:"",label:"Περιγραφή",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.newDepartment.description,callback:function(t){e.$set(e.newDepartment,"description",t)},expression:"newDepartment.description"}})],1),n("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Άκυρο"}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Προσθήκη"},on:{click:function(t){return e.createDepartment()}}})],1)],1)],1),n("q-dialog",{attrs:{persistent:""},model:{value:e.updateDepartmentDialog,callback:function(t){e.updateDepartmentDialog=t},expression:"updateDepartmentDialog"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Επεξεργασία Τμήματος")])]),n("q-card-section",{staticClass:"q-pt-none"},[n("q-input",{attrs:{dense:"",label:"Τίτλος",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.departmentToUpdate.title,callback:function(t){e.$set(e.departmentToUpdate,"title",t)},expression:"departmentToUpdate.title"}})],1),n("q-card-section",{staticClass:"q-pt-none"},[n("q-input",{attrs:{dense:"",label:"Περιγραφή",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.departmentToUpdate.description,callback:function(t){e.$set(e.departmentToUpdate,"description",t)},expression:"departmentToUpdate.description"}})],1),n("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Άκυρο"}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Προσθήκη"},on:{click:function(t){return e.updateDepartment()}}})],1)],1)],1),n("q-dialog",{attrs:{persistent:""},model:{value:e.newUserDialog,callback:function(t){e.newUserDialog=t},expression:"newUserDialog"}},[n("userProfile",{attrs:{user:e.userToEdit}})],1)],1)},i=[],r=(n("e01a"),n("ddb0"),n("1fee")),s=n("9f73"),l={name:"DepartmentManagement",components:{userProfile:s["a"]},apollo:{departments:{query:r["b"].getDepartments,error(e){this.error=JSON.stringify(e.message)}},usersByDepartment:{query:r["b"].getUsersOfDepartment,variables(){return{_id:this.selectedDepartmentId}},error(e){this.error=JSON.stringify(e.message)}}},methods:{listUsers(){this.$apollo.queries.getUsersOfDepartment.refetch()},createDepartment(){const e=this.newDepartment.title,t=this.newDepartment.description;this.$apollo.mutate({mutation:r["a"].createDepartment,variables:{title:e,description:t},update:(e,{data:{createDepartment:t}})=>{if(t){const n=e.readQuery({query:r["b"].getDepartments});n.departments=[...n.departments,t],e.writeQuery({query:r["b"].getDepartments,data:n})}}})},deleteDepartment(e){this.$q.notify({message:"Διαγραφή Τμήματος;",color:"negative",timeout:0,actions:[{label:"Διαγραφή",color:"white",handler:()=>{this.$apollo.mutate({mutation:r["a"].deleteDepartment,variables:{_id:e},update:(t,{data:{deleteDepartment:n}})=>{if(n){const n=t.readQuery({query:r["b"].getDepartments});n.departments=n.departments.filter((t=>t._id!==e)),t.writeQuery({query:r["b"].getDepartments,data:n})}}}),this.$q.loading.hide()}},{label:"Άκυρο",color:"white"}]})},updateDepartment(){const e=this.departmentToUpdate._id,t=this.departmentToUpdate.title,n=this.departmentToUpdate.description;this.$apollo.mutate({mutation:r["a"].updateDepartment,variables:{_id:e,title:t,description:n},update:(e,{data:{updateDepartment:t}})=>{if(t){const t=e.readQuery({query:r["b"].getDepartments});e.writeQuery({query:r["b"].getDepartments,data:t})}}})},toggleManager(e){const t=this.selectedDepartmentId,n=e;this.$apollo.mutate({mutation:r["a"].updateDepartmentManager,variables:{_id:t,manager:n},update:(e,{data:{updateDepartmentManager:t}})=>{if(t){const t=e.readQuery({query:r["b"].getUsersOfDepartment});e.writeQuery({query:r["b"].getUsersOfDepartment,data:t})}}}),this.selectedDepartment.manager=e}},data(){return{newDepartmentDialog:!1,newDepartment:{title:null,description:null},selectedDepartmentId:null,selectedDepartment:null,userToEdit:null,newUserDialog:!1,updateDepartmentDialog:!1,departmentToUpdate:{_id:null,title:null,description:null}}}},o=l,d=n("2877"),u=n("9989"),p=n("1c1c"),c=n("0170"),m=n("9c40"),$=n("66e5"),f=n("4074"),g=n("24e8"),b=n("f09f"),y=n("a370"),D=n("27f9"),_=n("4b7e"),S=n("7f67"),k=n("eebe"),q=n.n(k),v=Object(d["a"])(o,a,i,!1,null,null,null);t["default"]=v.exports;q()(v,"components",{QPage:u["a"],QList:p["a"],QItemLabel:c["a"],QBtn:m["a"],QItem:$["a"],QItemSection:f["a"],QDialog:g["a"],QCard:b["a"],QCardSection:y["a"],QInput:D["a"],QCardActions:_["a"]}),q()(v,"directives",{ClosePopup:S["a"]})},"9f73":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Επεξεργασία Χρήστη")])]),n("q-card-section",{staticClass:"q-pt-none"},[n("q-input",{attrs:{dense:"",label:"Όνομα χρήστη",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),n("q-input",{attrs:{dense:"",label:"Ονοματεπώνυμο"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.fullname,callback:function(t){e.$set(e.user,"fullname",t)},expression:"user.fullname"}}),n("q-input",{attrs:{dense:"",label:"email"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),n("q-input",{attrs:{dense:"",label:"Κωδικός",type:"password"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),n("q-select",{attrs:{label:"Τμήμα","stack-label":"",multiple:"","use-chips":"",dense:"",options:e.departments,"option-value":"_id","option-label":"title","transition-show":"scale","transition-hide":"scale"},model:{value:e.user.department,callback:function(t){e.$set(e.user,"department",t)},expression:"user.department"}})],1),n("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Άκυρο"}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Αποθήκευση"},on:{click:e.saveUserProfile}})],1)],1)},i=[],r=n("1fee"),s={name:"userProfile",props:["user"],data(){return{newDepartment:null,newDepartmentDialog:!1}},apollo:{departments:{query:r["b"].getDepartments,error(e){this.error=JSON.stringify(e.message)}}},methods:{saveUserProfile(){const e=this.user.department.map((function(e){return e["_id"]}));this.user._id?this.$apollo.mutate({mutation:r["a"].updateUser,variables:{_id:this.user._id,username:this.user.username,fullname:this.user.fullname,password:this.user.password,department:e,email:this.user.email},update:(e,{data:{updateUser:t}})=>{if(t){const t=e.readQuery({query:r["b"].getUsers});e.writeQuery({query:r["b"].getUsers,data:t})}}}):this.$apollo.mutate({mutation:r["a"].createUser,variables:{username:this.user.username,fullname:this.user.fullname,password:this.user.password,department:e,email:this.user.email},update:(e,{data:{createUser:t}})=>{if(t){const n=e.readQuery({query:r["b"].getUsers});e.writeQuery({query:r["b"].getUsers,data:n.users.push(t)})}}})}}},l=s,o=n("2877"),d=n("f09f"),u=n("a370"),p=n("27f9"),c=n("ddd8"),m=n("4b7e"),$=n("9c40"),f=n("7f67"),g=n("eebe"),b=n.n(g),y=Object(o["a"])(l,a,i,!1,null,null,null);t["a"]=y.exports;b()(y,"components",{QCard:d["a"],QCardSection:u["a"],QInput:p["a"],QSelect:c["a"],QCardActions:m["a"],QBtn:$["a"]}),b()(y,"directives",{ClosePopup:f["a"]})},ffd6:function(e,t){}}]);