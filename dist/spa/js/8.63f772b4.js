(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"05ff":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[e.$apollo.loading?n("div",{staticStyle:{width:"100%",height:"50%","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute"}},[n("div",{staticStyle:{top:"40%",width:"100%",height:"100%",position:"absolute"}},[n("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),n("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1)]):e._e(),e.rowLoading?n("div",{staticStyle:{width:"100%",height:"50%","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute"}},[n("div",{staticStyle:{top:"40%",width:"100%",height:"100%",position:"absolute"}},[n("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),n("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1)]):e._e(),e.$apollo.loading||e.rowLoading?e._e():n("div",{staticClass:"q-pa-xs"},[n("q-table",{staticClass:"my-sticky-column-table",attrs:{title:"Είδη",data:e.species,columns:e.columns,"row-key":"name","wrap-cells":""},scopedSlots:e._u([{key:"top",fn:function(t){return[n("div",{staticClass:"col-2 q-table__title"},[e._v("Είδη")]),n("q-space"),n("q-btn",{staticClass:"q-ml-xs",attrs:{dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}}),n("q-btn",{staticClass:"q-ml-xs",attrs:{dense:"",icon:"add"},on:{click:function(t){e.addRowDialog=!0}}}),n("q-btn",{staticClass:"q-ml-xs",attrs:{dense:"",icon:"delete"},on:{click:t.toggleFullscreen}}),e.rowsChanged.length>0?n("q-btn",{staticClass:"q-ml-xs",attrs:{dense:"",color:"primary",icon:"save"},on:{click:e.saveTable}}):e._e()]}},{key:"body",fn:function(t){return[n("q-tr",{attrs:{props:t}},[n("q-td",{key:"id",attrs:{props:t}},[n("q-btn",{attrs:{icon:"delete",dense:"",flat:"",color:"negative"},on:{click:function(n){return e.deleteSpecies(t.row.id)}}})],1),n("q-td",{key:"species",attrs:{props:t}},[e._v("\n          "+e._s(t.row.species)+"\n          "),n("q-popup-edit",{model:{value:t.row.species,callback:function(n){e.$set(t.row,"species",n)},expression:"props.row.species"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.species,callback:function(n){e.$set(t.row,"species",n)},expression:"props.row.species"}})],1)],1),n("q-td",{key:"family",attrs:{props:t}},[e._v("\n          "+e._s(t.row.family)+"\n          "),n("q-popup-edit",{model:{value:t.row.family,callback:function(n){e.$set(t.row,"family",n)},expression:"props.row.family"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.family,callback:function(n){e.$set(t.row,"family",n)},expression:"props.row.family"}})],1)],1),n("q-td",{key:"classification",attrs:{props:t}},[e._v("\n          "+e._s(t.row.classification)+"\n          "),n("q-popup-edit",{model:{value:t.row.classification,callback:function(n){e.$set(t.row,"classification",n)},expression:"props.row.classification"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.classification,callback:function(n){e.$set(t.row,"classification",n)},expression:"props.row.classification"}})],1)],1),n("q-td",{key:"code_n2k",attrs:{props:t}},[e._v("\n          "+e._s(t.row.code_n2k)+"\n          "),n("q-popup-edit",{model:{value:t.row.code_n2k,callback:function(n){e.$set(t.row,"code_n2k",n)},expression:"props.row.code_n2k"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.code_n2k,callback:function(n){e.$set(t.row,"code_n2k",n)},expression:"props.row.code_n2k"}})],1)],1),n("q-td",{key:"n2k",attrs:{props:t}},[e._v("\n          "+e._s(t.row.n2k)+"\n          "),n("q-popup-edit",{model:{value:t.row.n2k,callback:function(n){e.$set(t.row,"n2k",n)},expression:"props.row.n2k"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.n2k,callback:function(n){e.$set(t.row,"n2k",n)},expression:"props.row.n2k"}})],1)],1),n("q-td",{key:"iunc",attrs:{props:t}},[e._v("\n          "+e._s(t.row.iunc)+"\n          "),n("q-popup-edit",{model:{value:t.row.iunc,callback:function(n){e.$set(t.row,"iunc",n)},expression:"props.row.iunc"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.iunc,callback:function(n){e.$set(t.row,"iunc",n)},expression:"props.row.iunc"}})],1)],1),n("q-td",{key:"directive_92",attrs:{props:t}},[e._v("\n          "+e._s(t.row.directive_92)+"\n          "),n("q-popup-edit",{model:{value:t.row.directive_92,callback:function(n){e.$set(t.row,"directive_92",n)},expression:"props.row.directive_92"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.directive_92,callback:function(n){e.$set(t.row,"directive_92",n)},expression:"props.row.directive_92"}})],1)],1),n("q-td",{key:"bern",attrs:{props:t}},[e._v("\n          "+e._s(t.row.bern)+"\n          "),n("q-popup-edit",{model:{value:t.row.bern,callback:function(n){e.$set(t.row,"bern",n)},expression:"props.row.bern"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.bern,callback:function(n){e.$set(t.row,"bern",n)},expression:"props.row.bern"}})],1)],1),n("q-td",{key:"bonn",attrs:{props:t}},[e._v("\n          "+e._s(t.row.bonn)+"\n          "),n("q-popup-edit",{model:{value:t.row.bonn,callback:function(n){e.$set(t.row,"bonn",n)},expression:"props.row.bonn"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.bonn,callback:function(n){e.$set(t.row,"bonn",n)},expression:"props.row.bonn"}})],1)],1),n("q-td",{key:"cites",attrs:{props:t}},[e._v("\n          "+e._s(t.row.cites)+"\n          "),n("q-popup-edit",{model:{value:t.row.cites,callback:function(n){e.$set(t.row,"cites",n)},expression:"props.row.cites"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.cites,callback:function(n){e.$set(t.row,"cites",n)},expression:"props.row.cites"}})],1)],1),n("q-td",{key:"date",attrs:{props:t}},[e._v("\n          "+e._s(t.row.date)+"\n          "),n("q-popup-edit",{model:{value:t.row.date,callback:function(n){e.$set(t.row,"date",n)},expression:"props.row.date"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.date,callback:function(n){e.$set(t.row,"date",n)},expression:"props.row.date"}})],1)],1),n("q-td",{key:"source",attrs:{props:t}},[e._v("\n          "+e._s(t.row.source)+"\n          "),n("q-popup-edit",{model:{value:t.row.source,callback:function(n){e.$set(t.row,"source",n)},expression:"props.row.source"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.source,callback:function(n){e.$set(t.row,"source",n)},expression:"props.row.source"}})],1)],1),n("q-td",{key:"eunis",attrs:{props:t}},[e._v("\n          "+e._s(t.row.eunis)+"\n          "),n("q-popup-edit",{model:{value:t.row.eunis,callback:function(n){e.$set(t.row,"eunis",n)},expression:"props.row.eunis"}},[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{input:function(n){return e.trackRowChanges(t.row)}},model:{value:t.row.eunis,callback:function(n){e.$set(t.row,"eunis",n)},expression:"props.row.eunis"}})],1)],1)],1)]}}],null,!1,2816129580)}),n("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:e.addRowDialog,callback:function(t){e.addRowDialog=t},expression:"addRowDialog"}},[e.rowLoading?n("div",{staticStyle:{width:"100%",height:"100vh","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute"}},[n("div",{staticStyle:{top:"40%",width:"100%",height:"100vh",position:"absolute"}},[n("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),n("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1)]):e._e(),n("q-card",{staticStyle:{width:"50%"}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Προσθήκη")])]),n("q-card-section",{staticClass:"q-pt-none"},[n("q-input",{attrs:{dense:"",label:"Είδος"},model:{value:e.new_species,callback:function(t){e.new_species=t},expression:"new_species"}}),n("q-input",{attrs:{dense:"",label:"Οικογένεια"},model:{value:e.new_family,callback:function(t){e.new_family=t},expression:"new_family"}}),n("q-input",{attrs:{dense:"",label:"Τάξη"},model:{value:e.new_classification,callback:function(t){e.new_classification=t},expression:"new_classification"}}),n("q-input",{attrs:{dense:"",label:"Κωδικός Ν2Κ"},model:{value:e.new_n2k,callback:function(t){e.new_n2k=t},expression:"new_n2k"}}),n("q-input",{attrs:{dense:"",label:"Περιοχή Ν2Κ"},model:{value:e.new_code_n2k,callback:function(t){e.new_code_n2k=t},expression:"new_code_n2k"}}),n("q-input",{attrs:{dense:"",label:"IUNC"},model:{value:e.new_iunc,callback:function(t){e.new_iunc=t},expression:"new_iunc"}}),n("q-input",{attrs:{dense:"",label:"Οδηγία 92/43/ΕΟΚ"},model:{value:e.new_directive_92,callback:function(t){e.new_directive_92=t},expression:"new_directive_92"}}),n("q-input",{attrs:{dense:"",label:"Σύμβαση Βέρνης"},model:{value:e.new_bern,callback:function(t){e.new_bern=t},expression:"new_bern"}}),n("q-input",{attrs:{dense:"",label:"Σύμβαση Βόννης"},model:{value:e.new_bonn,callback:function(t){e.new_bonn=t},expression:"new_bonn"}}),n("q-input",{attrs:{dense:"",label:"Cites"},model:{value:e.new_cites,callback:function(t){e.new_cites=t},expression:"new_cites"}}),n("q-input",{attrs:{dense:"",label:"Ημερομηνία"},model:{value:e.new_date,callback:function(t){e.new_date=t},expression:"new_date"}}),n("q-input",{attrs:{dense:"",label:"Πηγή"},model:{value:e.new_source,callback:function(t){e.new_source=t},expression:"new_source"}}),n("q-input",{attrs:{dense:"",label:"Σύνδεσμος EUNIS"},model:{value:e.new_eunis,callback:function(t){e.new_eunis=t},expression:"new_eunis"}})],1),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{attrs:{label:"Αποθήκευση",color:"primary"},on:{click:function(t){return e.addSpecies()}}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{outline:"",label:"Άκυρο"}})],1)],1)],1)],1)])},a=[],s=(n("ddb0"),n("1fee")),r={name:"DatabaseAdministration",apollo:{species:{query:s["b"].getSpecies,error(e){this.error=JSON.stringify(e.message)}}},methods:{saveTable(){this.rowLoading=!0,this.rowsChanged.forEach((e=>{this.$apollo.mutate({mutation:s["a"].updateSpecies,variables:{id:e.id,species:e.species,family:e.family,classification:e.classification,n2k:e.n2k,code_n2k:e.code_n2k,iunc:e.iunc,directive_92:e.directive_92,bern:e.bern,bonn:e.bonn,cites:e.cites,date:e.date,source:e.source,eunis:e.eunis},update:(e,{data:{updateSpecies:t}})=>{this.rowLoading=!1}})}))},addSpecies(){const e=this.new_species,t=this.new_family,n=this.new_classification,i=this.new_n2k,a=this.new_code_n2k,r=this.new_iunc,o=this.new_directive_92,l=this.new_bern,c=this.new_bonn,d=this.new_cites,u=this.new_date,p=this.new_source,b=this.new_eunis;this.rowLoading=!0,this.$apollo.mutate({mutation:s["a"].addSpecies,variables:{species:e,family:t,classification:n,n2k:i,code_n2k:a,iunc:r,directive_92:o,bern:l,bonn:c,cites:d,date:u,source:p,eunis:b},update:(e,{data:{addSpecies:t}})=>{if(t){const n=e.readQuery({query:s["b"].getSpecies});n.species=[t,...n.species],e.writeQuery({query:s["b"].getSpecies,data:n})}this.addRowDialog=!1,this.rowLoading=!1}})},deleteSpecies(e){this.rowLoading=!0,this.$apollo.mutate({mutation:s["a"].deleteSpecies,variables:{id:e},update:(t,{data:{deleteSpecies:n}})=>{if(n){console.log(n);const i=t.readQuery({query:s["b"].getSpecies});i.species=i.species.filter((t=>t.id!==e)),t.writeQuery({query:s["b"].getSpecies,data:i})}this.rowLoading=!1}})},trackRowChanges(e){const t=[e];this.rowsChanged.some((t=>t.id===e.id))?this.rowsChanged=this.rowsChanged.map((e=>t.find((t=>t.id===e.id))||e)):this.rowsChanged.push(e)}},data(){return{addRowDialog:!1,rowLoading:!1,rowsChanged:[],new_species:null,new_family:null,new_classification:null,new_n2k:null,new_code_n2k:null,new_iunc:null,new_directive_92:null,new_bern:null,new_bonn:null,new_cites:null,new_date:null,new_source:null,new_eunis:null,columns:[{name:"id",required:!1,label:"",align:"left",field:e=>e.id},{name:"species",align:"center",label:"Είδος",field:"species",sortable:!0},{name:"family",label:"Οικογένεια",field:"family",sortable:!0},{name:"classification",label:"Τάξη",field:"classification",sortable:!0},{name:"n2k",label:"Κωδικός Ν2Κ",field:"n2k",sortable:!0},{name:"code_n2k",label:"Περιοχή Ν2Κ",field:"code_n2k",sortable:!0},{name:"iunc",label:"IUNC",field:"iunc",sortable:!0},{name:"directive_92",label:"Οδηγία 92/43/ΕΟΚ",field:"directive_92",sortable:!0},{name:"bern",label:"Σύμβαση Βέρνης",field:"bern",sortable:!0},{name:"bonn",label:"Σύμβαση Βόννης",field:"bonn",sortable:!0},{name:"cites",label:"Cites",field:"cites",sortable:!0},{name:"date",label:"Ημερομηνία",field:"date",sortable:!0},{name:"source",label:"Πηγή",field:"source",sortable:!0},{name:"eunis",label:"Σύνδεσμος EUNIS",field:"eunis",sortable:!0}]}}},o=r,l=n("2877"),c=n("9989"),d=n("cf57"),u=n("eaac"),p=n("2c91"),b=n("9c40"),m=n("bd08"),w=n("db86"),f=n("42a1"),$=n("27f9"),g=n("24e8"),_=n("f09f"),y=n("a370"),k=n("4b7e"),v=n("7f67"),S=n("eebe"),q=n.n(S),h=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=h.exports;q()(h,"components",{QPage:c["a"],QSpinnerGears:d["a"],QTable:u["a"],QSpace:p["a"],QBtn:b["a"],QTr:m["a"],QTd:w["a"],QPopupEdit:f["a"],QInput:$["a"],QDialog:g["a"],QCard:_["a"],QCardSection:y["a"],QCardActions:k["a"]}),q()(h,"directives",{ClosePopup:v["a"]})},"1fee":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var i={};n.r(i),n.d(i,"getLayers",(function(){return $})),n.d(i,"getPublishedLayers",(function(){return g})),n.d(i,"getSpecies",(function(){return _})),n.d(i,"getUsers",(function(){return y})),n.d(i,"getContacts",(function(){return k})),n.d(i,"getDepartments",(function(){return v})),n.d(i,"getUsersOfDepartment",(function(){return S})),n.d(i,"queryXY",(function(){return q}));var a={};n.r(a),n.d(a,"createUser",(function(){return P})),n.d(a,"updateUser",(function(){return J})),n.d(a,"deleteUser",(function(){return M})),n.d(a,"createDocument",(function(){return X})),n.d(a,"deleteLayer",(function(){return Y})),n.d(a,"createDepartment",(function(){return A})),n.d(a,"updateDepartment",(function(){return G})),n.d(a,"updateDepartmentManager",(function(){return H})),n.d(a,"deleteDepartment",(function(){return K})),n.d(a,"singleUpload",(function(){return V})),n.d(a,"signIn",(function(){return W})),n.d(a,"addLayer",(function(){return Z})),n.d(a,"addSpecies",(function(){return ee})),n.d(a,"updateSpecies",(function(){return te})),n.d(a,"deleteSpecies",(function(){return ne})),n.d(a,"updateLayer",(function(){return ie}));var s=n("5184");let r,o=e=>e;Object(s["a"])(r||(r=o`
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
`));let l,c,d,u,p,b,m,w,f=e=>e;const $=Object(s["a"])(l||(l=f`
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
`)),g=Object(s["a"])(c||(c=f`
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
`)),_=Object(s["a"])(d||(d=f`
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
`)),y=Object(s["a"])(u||(u=f`
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
`)),k=Object(s["a"])(p||(p=f`
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
`)),v=Object(s["a"])(b||(b=f`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),S=Object(s["a"])(m||(m=f`
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
`)),q=Object(s["a"])(w||(w=f`
  query queryXY($layer: String, $type: String, $zoom: Int, $x: Float, $y: Float){
    queryXY(layer: $layer, type: $type, zoom: $zoom, x: $x, y: $y)
  }
`));n("ffd6");let h,x,D,C,I,O,j,L,R,z,Q,U,T,B,N,E,F=e=>e;const P=Object(s["a"])(h||(h=F`
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
`)),J=Object(s["a"])(x||(x=F`
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
`)),M=Object(s["a"])(D||(D=F`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),X=Object(s["a"])(C||(C=F`
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
`)),Y=Object(s["a"])(I||(I=F`
  mutation($id: String!) {
    deleteLayer(id: $id)
  }
`)),A=Object(s["a"])(O||(O=F`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),G=Object(s["a"])(j||(j=F`
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
`)),H=Object(s["a"])(L||(L=F`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),K=Object(s["a"])(R||(R=F`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),V=Object(s["a"])(z||(z=F`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),W=Object(s["a"])(Q||(Q=F`
  mutation signIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),Z=Object(s["a"])(U||(U=F`
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
`)),ee=Object(s["a"])(T||(T=F`
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
`)),te=Object(s["a"])(B||(B=F`
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
`)),ne=Object(s["a"])(N||(N=F`
  mutation($id: String) {
    deleteSpecies(id: $id)
  }
`)),ie=Object(s["a"])(E||(E=F`
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