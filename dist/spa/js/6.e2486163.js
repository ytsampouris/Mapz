(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{2873:function(t,e,a){},"37c0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",to:t.link,exact:""}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},i=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},r=o,s=a("2877"),l=a("66e5"),c=a("4074"),u=a("0016"),m=a("0170"),p=a("eebe"),f=a.n(p),b=Object(s["a"])(r,n,i,!1,null,null,null);e["a"]=b.exports;f()(b,"components",{QItem:l["a"],QItemSection:c["a"],QIcon:u["a"],QItemLabel:m["a"]})},"4ab4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        Geoportal\n      ")]),a("div",[a("q-btn",{staticClass:"q-mr-xs",attrs:{flat:"",round:"",dense:"",icon:"fa fa-expand-arrows-alt"},on:{click:function(e){return t.zoomToExtent()}}}),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"room"},on:{click:function(e){return t.geolocation()}}}),a("q-btn",{staticClass:"q-mr-xs",attrs:{flat:"",round:"",dense:"",icon:"info"},on:{click:function(e){return t.setMapStatus("info")}}}),a("q-btn",{staticClass:"q-mr-xs",attrs:{flat:"",round:"",dense:"",icon:"architecture"},on:{click:function(e){return t.setMapStatus("measure")}}})],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Menu\n      ")]),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))})),a("a",{attrs:{href:"https://tidydox.herokuapp.com",target:"_blank"}},[a("q-item",{attrs:{clickable:"",tag:"a"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"inventory_2"}})],1),a("q-item-section",[a("q-item-label",[t._v("Διαχειριστής εγγράφων")]),a("q-item-label",{attrs:{caption:""}},[t._v("\n              Μετάβαση\n            ")])],1)],1)],1)],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],o=a("37c0");const r=[{title:"Πληροφορίες",caption:"Πληροφορίες για την εφαρμογή",icon:"info",link:"/"},{title:"Χάρτης",caption:"Πλοήγηση στους χάρτες",icon:"map",link:"/map"},{title:"Βάση Δεδομένων",caption:"Πλοήγηση στα δεδομένα",icon:"fa fa-database",link:"/database"},{title:"Είσοδος",caption:"Είσοδος στην εφαρμογή",icon:"login",link:"login"}];var s={name:"MainLayout",components:{EssentialLink:o["a"]},data(){return{leftDrawerOpen:!1,essentialLinks:r}},watch:{leftDrawerOpen:function(){this.emitUpdateMapSize()}},methods:{setMapStatus(t){this.$store.commit("webgis/SET_MAP_STATUS",t),"info"===t&&this.$root.$emit("map:mapStatus:info"),"measure"===t&&this.$root.$emit("map:measure:start","LineString")},zoomToExtent(){this.$root.$emit("map:zoomToExtent",!0)},geolocation(){this.$root.$emit("map:activateGeolocation",!0),this.setMapStatus("geolocation")},emitUpdateMapSize(){this.$root.$emit("map:updateSize")}}},l=s,c=(a("8ff6"),a("2877")),u=a("4d5a"),m=a("e359"),p=a("65c6"),f=a("9c40"),b=a("6ac5"),d=a("9404"),q=a("1c1c"),k=a("0170"),h=a("66e5"),v=a("4074"),w=a("0016"),g=a("09e3"),_=a("eebe"),S=a.n(_),Q=Object(c["a"])(l,n,i,!1,null,"4ab65fbc",null);e["default"]=Q.exports;S()(Q,"components",{QLayout:u["a"],QHeader:m["a"],QToolbar:p["a"],QBtn:f["a"],QToolbarTitle:b["a"],QDrawer:d["a"],QList:q["a"],QItemLabel:k["a"],QItem:h["a"],QItemSection:v["a"],QIcon:w["a"],QPageContainer:g["a"]})},"8ff6":function(t,e,a){"use strict";a("2873")}}]);