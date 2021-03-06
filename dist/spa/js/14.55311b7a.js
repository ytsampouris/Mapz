(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"1fee":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return a}));var n={};i.r(n),i.d(n,"getLayers",(function(){return g})),i.d(n,"getPublishedLayers",(function(){return y})),i.d(n,"getSpecies",(function(){return v})),i.d(n,"getUsers",(function(){return S})),i.d(n,"getContacts",(function(){return _})),i.d(n,"getDepartments",(function(){return h})),i.d(n,"getUsersOfDepartment",(function(){return q})),i.d(n,"queryXY",(function(){return k}));var a={};i.r(a),i.d(a,"createUser",(function(){return R})),i.d(a,"updateUser",(function(){return T})),i.d(a,"deleteUser",(function(){return G})),i.d(a,"createDocument",(function(){return J})),i.d(a,"deleteLayer",(function(){return X})),i.d(a,"createDepartment",(function(){return E})),i.d(a,"updateDepartment",(function(){return A})),i.d(a,"updateDepartmentManager",(function(){return H})),i.d(a,"deleteDepartment",(function(){return K})),i.d(a,"singleUpload",(function(){return V})),i.d(a,"signIn",(function(){return W})),i.d(a,"addLayer",(function(){return Z})),i.d(a,"addSpecies",(function(){return ee})),i.d(a,"updateSpecies",(function(){return te})),i.d(a,"deleteSpecies",(function(){return ie})),i.d(a,"updateLayer",(function(){return ne}));var s=i("5184");let l,r=e=>e;Object(s["a"])(l||(l=r`
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
`));let o,d,c,u,p,m,b,$,f=e=>e;const g=Object(s["a"])(o||(o=f`
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
`)),y=Object(s["a"])(d||(d=f`
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
`)),v=Object(s["a"])(c||(c=f`
  query getSpecies {
    species {
      id
      type
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
      latin_name
      taxonomy
      common_name
      directive_09
    }
  }
`)),S=Object(s["a"])(u||(u=f`
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
`)),_=Object(s["a"])(p||(p=f`
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
`)),h=Object(s["a"])(m||(m=f`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),q=Object(s["a"])(b||(b=f`
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
`)),k=Object(s["a"])($||($=f`
  query queryXY($layer: String, $type: String, $zoom: Int, $x: Float, $y: Float){
    queryXY(layer: $layer, type: $type, zoom: $zoom, x: $x, y: $y)
  }
`));i("ffd6");let x,w,D,C,I,O,j,z,L,Q,U,M,Y,B,F,N,P=e=>e;const R=Object(s["a"])(x||(x=P`
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
`)),T=Object(s["a"])(w||(w=P`
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
`)),G=Object(s["a"])(D||(D=P`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),J=Object(s["a"])(C||(C=P`
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
`)),X=Object(s["a"])(I||(I=P`
  mutation($id: String!) {
    deleteLayer(id: $id)
  }
`)),E=Object(s["a"])(O||(O=P`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),A=Object(s["a"])(j||(j=P`
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
`)),H=Object(s["a"])(z||(z=P`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),K=Object(s["a"])(L||(L=P`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),V=Object(s["a"])(Q||(Q=P`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),W=Object(s["a"])(U||(U=P`
  mutation signIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),Z=Object(s["a"])(M||(M=P`
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
`)),ee=Object(s["a"])(Y||(Y=P`
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
`)),te=Object(s["a"])(B||(B=P`
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
`)),ie=Object(s["a"])(F||(F=P`
  mutation($id: String) {
    deleteSpecies(id: $id)
  }
`)),ne=Object(s["a"])(N||(N=P`
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
`))},c58f:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("q-btn",{attrs:{color:"red","icon-right":"fab fa-youtube",label:"?????????????? ????????????",type:"a",target:"new_tab",href:"https://www.youtube.com/playlist?list=PLwQ-2nYs008a8uMgJw64h7NcyjxtLbCUa"}}),i("div",{staticClass:"q-pa-md"},[i("q-stepper",{ref:"stepper",attrs:{color:"primary",animated:""},scopedSlots:e._u([{key:"navigation",fn:function(){return[i("q-stepper-navigation",[1===e.step?i("q-btn",{attrs:{color:"primary",label:"???????????????? ??????????"},on:{click:function(t){e.addLayer(),e.$refs.stepper.next()}}}):e._e(),1===e.step?i("q-btn",{staticClass:"q-ml-sm",attrs:{color:"primary",label:"???????????????? ??????????????"},on:{click:function(t){return e.$refs.stepper.next()}}}):e._e(),2===e.step?i("q-btn",{attrs:{color:"primary",label:"???????????????????? ??????????????"},on:{click:function(t){return e.uploadFiles()}}}):e._e(),2===e.step?i("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"????????"},on:{click:function(t){return e.$refs.stepper.previous()}}}):e._e()],1)]},proxy:!0}]),model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[i("q-step",{attrs:{name:1,title:"???????????????? ?????????????????? ??????????",icon:"list",done:e.step>1}},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[i("q-item-section",[i("q-item-label",[e._v("???????????????? ???????? ?????? ??????????????????????")]),i("q-item-label",{attrs:{caption:""}},[e._v("?????????????????????????? ?????? ???????????????? ???????? ???? ?????????????????????? ???????????? ?????? ???? ???????????????????????? ?? ????????????. ???? ???????????????? ?????????????? ???????????????????????? ?????? ?????? ?????????? ???????????????????? ?????? ???? ???????????????????????? ??????????, ???????? ?????????????????????? ?????? ???? ????????????.")])],1),i("q-item-section",{attrs:{avatar:""}},[i("q-toggle",{model:{value:e.visibleMetadata,callback:function(t){e.visibleMetadata=t},expression:"visibleMetadata"}})],1)],1),i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"col q-ma-md"},[i("q-input",{attrs:{label:"???????????? ??????????????????","bottom-slots":"",filled:"",md:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n                      ?? ?????????????????? ?????? ???? ???????????????? ?????? ?????????? ???????? ?????????? ?????? ????????????\n                    ")]},proxy:!0}]),model:{value:e.label,callback:function(t){e.label=t},expression:"label"}})],1)]),i("div",{staticClass:"row",attrs:{md:""}},[i("div",{staticClass:"col q-ma-md"},[i("q-select",{attrs:{options:["Point","Line","Polygon","Raster"],label:"?????????? ??????????????????","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n                    ?? ???????????? ???????? ???????????? ?????????????????? ???????? ???????? ?????? ???????????????? ?????? info tool. ???????????????????? ?????????????????? ???? ?????????? ?????????????????? ?????????? ?????? ???? ?????????????? ?????????? ?? ?????????????????? ?????????????????????? ???????? ???????? ??????????????????.\n                  ")]},proxy:!0}]),model:{value:e.filetype,callback:function(t){e.filetype=t},expression:"filetype"}})],1)]),i("div",{staticClass:"row",attrs:{md:""}},[i("div",{staticClass:"col q-ma-md"},[i("q-input",{attrs:{label:"?????????? ??????????????????","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n                    ?????????? ???????? ?????????????? ???? ???????? ?????? ?????????? ???? layer ?????????????????????? ?????? tree ?????? ?????? ?????????? ???????????????? ?? ???????????????????? ?????? ???? ????????????????. ?????? ?????? ?????????????? ?? ?????????????? ???????? ?????? ???????? ??????????????????????.\n                  ")]},proxy:!0}]),model:{value:e.zindex,callback:function(t){e.zindex=t},expression:"zindex"}})],1)]),i("div",{staticClass:"row",attrs:{md:""}},[i("div",{staticClass:"col q-ma-md"},[i("q-select",{attrs:{options:["xyz","osm"],label:"??????????","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n                    ???????????? xyz ???? ?????????????????? ?????? ???????????????????? ???????????????? tiles ?????? ???? QGIS, osm ?????? Openstreet map.\n                  ")]},proxy:!0}]),model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1)]),i("div",{staticClass:"row",attrs:{md:""}},[i("div",{staticClass:"col q-ma-md"},[i("q-input",{attrs:{label:"URL","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n                    ???????? ?????????? ?? ???????? URL ?????? ???????? ???????????????????? ?? ????????????. ?????? ???????????? ?????? ?????????????????????? ???? ???? QGIS ?????? ???????????????????? ???? ???????????? *.mbtiles.\n                  ")]},proxy:!0}]),model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1)]),i("div",{staticClass:"row",attrs:{md:""}},[i("div",{staticClass:"col q-ma-md"},[i("q-input",{attrs:{label:"?????????? ???????????? ?????????? ??????????????????","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n                    ???? ???????????????????????? ???????????????? ???? ?????????????????? ?? ?????????? ???????????????? ???? ???? QGIS ???????? ???????? ??????????????????. ?????? ?????????????? ???? ?????????? ???? ???? ?????????? ???????? ?????????? ?? ???????????????? ?????? ???? ???????????? ???? ???????????????????????? ?? ???????????????? ?????????????????? ???? ???? info tool.\n                  ")]},proxy:!0}]),model:{value:e.dbtablename,callback:function(t){e.dbtablename=t},expression:"dbtablename"}})],1)]),i("div",{staticClass:"row",attrs:{md:""}},[i("div",{staticClass:"col q-ma-md"},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[i("q-item-section",[i("q-item-label",[e._v("??????????")]),i("q-item-label",{attrs:{caption:""}},[e._v("???? ???? ?????????? ?????? ?????? ???????? ?????? ???????????????? ?????? ?????????? ?????????? ???? layer.")])],1),i("q-item-section",{attrs:{avatar:""}},[i("q-toggle",{model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}})],1)],1)],1)]),i("div",{staticClass:"row",attrs:{md:""}},[i("div",{staticClass:"col q-ma-md"},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[i("q-item-section",[i("q-item-label",[e._v("????????????????????????")]),i("q-item-label",{attrs:{caption:""}},[e._v("???? ?? ???????????? ???? ?????????? ???????????? ???? ???????????? ??????????????.")])],1),i("q-item-section",{attrs:{avatar:""}},[i("q-toggle",{model:{value:e.published,callback:function(t){e.published=t},expression:"published"}})],1)],1)],1)])]),e.visibleMetadata?e._e():i("div",[i("div",{staticClass:"row",attrs:{md:""}},[i("div",{staticClass:"col q-ma-md"},[i("q-input",{attrs:{label:"????????????????????????","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n                      ???????????????????? ?????????????????? ?????? ??????????. ???? ???????????????? ???????? ?? ?????????????? ???????????? ?????? ???? ?????? ???????????????????????? ???????????????????? ?????? ???? ???????????????? ??????????????.\n                    ")]},proxy:!0}],null,!1,239223324),model:{value:e.details,callback:function(t){e.details=t},expression:"details"}})],1)]),i("div",{staticClass:"row",attrs:{md:""}},[i("div",{staticClass:"col q-ma-md"},[i("q-input",{attrs:{label:"?????????????? ????????????","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n                    ?? ???????????? ???????????????? ?????? ?????????????????? ?????? ??????????.\n                  ")]},proxy:!0}],null,!1,3338490259),model:{value:e.timespan,callback:function(t){e.timespan=t},expression:"timespan"}})],1)]),i("div",{staticClass:"row",attrs:{md:""}},[i("div",{staticClass:"col q-ma-md"},[i("q-input",{attrs:{label:"?????????????????? ?????????????? ?????????????????????? ??????????????????????????","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n                    ???? ?????????????? ?????????????????????????? ?????? ?????????????? ????????????????????. ?????? ???????????????????????? ?????????? ???????? ???????????????? EPSG.\n                  ")]},proxy:!0}],null,!1,2242950839),model:{value:e.crs,callback:function(t){e.crs=t},expression:"crs"}})],1)]),i("div",{staticClass:"row",attrs:{md:""}},[i("div",{staticClass:"col q-ma-md"},[i("q-input",{attrs:{label:"???????????? ????????","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n                    ???????????????????? ?? ?????????????????????????? ??????????????. ???????? ?????????? ?? ???????? ?????? ??????????????????.\n                  ")]},proxy:!0}],null,!1,1531319562),model:{value:e.attributions,callback:function(t){e.attributions=t},expression:"attributions"}})],1)]),i("div",{staticClass:"row",attrs:{md:""}},[i("div",{staticClass:"col q-ma-md"},[i("q-input",{attrs:{label:"?????????? ??????????????","bottom-slots":"",filled:""},scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("\n                    ???? ?????????? ?????? ?????????????? ?????? ?????????????? ?????????? ??????????????????.\n                  ")]},proxy:!0}],null,!1,3852897802),model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}})],1)])])],1),i("q-step",{attrs:{name:2,title:"?????????????????? ?????????????????????????? ??????????????",icon:"settings",done:e.step>2}},[i("q-file",{attrs:{label:"?????????????? ??????????????",outlined:"","use-chips":""},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),1===e.step&&e.files&&e.files.length>0?i("q-btn",{attrs:{color:"primary",label:"?????????????????? ??????????????"},on:{click:function(t){return e.uploadFiles()}}}):e._e()],1)],1)],1)],1)},a=[],s=(i("ac1f"),i("5319"),i("1fee")),l=i("cf57"),r=i("bd4c"),o={name:"NewMap",data(){return{step:1,done1:!1,done2:!1,done3:!1,date:r["a"].formatDate(Date.now(),"DD/MM/YYYY"),files:null,layer_id:null,label:null,details:null,timespan:null,filetype:null,crs:null,attributions:null,filename:null,crossorigin:null,preload:null,type:null,url:'"https://mapz-geolynked.herokuapp.com/":"8081"/??????????_??????????????_mbtiles/{z}/{x}/{y}.png'.replace(/['"]+/g,""),visible:!0,published:!1,zindex:null,apikey:null,dbtablename:null,visibleMetadata:!1}},methods:{async uploadFiles(){this.$q.loading.show({message:"???????????????? ??????????????",backgroundColor:"grey",spinner:l["a"],customClass:"loader"});const e=new FormData;e.append("layer",this.files);try{await this.$api.post("/upload",e),this.$q.loading.hide()}catch(t){console.log(t),this.$q.loading.hide(),this.$q.notify({message:"???????????????????????? ???????? ???????????? mbtiles",color:"negative",timeout:1500})}},addLayer(){this.$q.loading.show({message:"???????????????????? ??????????????????????",backgroundColor:"grey",spinner:l["a"],customClass:"loader"});const e=this.label,t=this.details,i=this.timespan,n=this.filetype,a=this.crs,r=this.attributions,o=this.filename,d=this.type,c=this.url,u=this.visible,p=this.published,m=this.apikey,b=this.dbtablename,$=parseInt(this.zindex);this.$apollo.mutate({mutation:s["a"].addLayer,variables:{label:e,details:t,timespan:i,filetype:n,crs:a,attributions:r,filename:o,type:d,url:c,visible:u,published:p,apikey:m,dbtablename:b,zindex:$},update:(e,{data:{addLayer:t}})=>{console.log("the document added was",t),this.layer_id=t.id}}).then((()=>{this.label=null,this.details=null,this.timespan=null,this.filetype=null,this.crs=null,this.attributions=null,this.filename=null,this.type=null,this.url=null,this.visible=null,this.published=null,this.apikey=null,this.dbtablename=null,this.zindex=null,this.$q.loading.hide()})),this.step=1}}},d=o,c=i("2877"),u=i("9989"),p=i("9c40"),m=i("f531"),b=i("87fe"),$=i("66e5"),f=i("4074"),g=i("0170"),y=i("9564"),v=i("27f9"),S=i("ddd8"),_=i("7d53"),h=i("b19c"),q=i("714f"),k=i("eebe"),x=i.n(k),w=Object(c["a"])(d,n,a,!1,null,null,null);t["default"]=w.exports;x()(w,"components",{QPage:u["a"],QBtn:p["a"],QStepper:m["a"],QStep:b["a"],QItem:$["a"],QItemSection:f["a"],QItemLabel:g["a"],QToggle:y["a"],QInput:v["a"],QSelect:S["a"],QFile:_["a"],QStepperNavigation:h["a"]}),x()(w,"directives",{Ripple:q["a"]})},ffd6:function(e,t){}}]);