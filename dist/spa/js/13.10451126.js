(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"37c0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",to:t.link,exact:""}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},i=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},r=o,s=a("2877"),l=a("66e5"),c=a("4074"),u=a("0016"),p=a("0170"),m=a("eebe"),f=a.n(m),d=Object(s["a"])(r,n,i,!1,null,null,null);e["a"]=d.exports;f()(d,"components",{QItem:l["a"],QItemSection:c["a"],QIcon:u["a"],QItemLabel:p["a"]})},"4ab4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        Geoportal\n      ")]),a("div",[a("q-btn",{staticClass:"q-mr-xs",attrs:{flat:"",round:"",dense:"",icon:"fa fa-expand-arrows-alt"},on:{click:function(e){return t.zoomToExtent()}}}),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"room"},on:{click:function(e){return t.geolocation()}}}),a("q-btn",{staticClass:"q-mr-xs",attrs:{flat:"",round:"",dense:"",icon:"info"},on:{click:function(e){return t.setMapStatus("info")}}}),a("q-btn",{staticClass:"q-mr-xs",attrs:{flat:"",round:"",dense:"",icon:"architecture"},on:{click:function(e){return t.setMapStatus("measure")}}})],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Menu\n      ")]),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],o=a("37c0");const r=[{title:"Χάρτης",caption:"Πλοήγηση στους χάρτες",icon:"map",link:"/map"},{title:"Βάση Δεδομένων",caption:"Πλοήγηση στα δεδομένα",icon:"fa fa-database",link:"/database"},{title:"Πληροφορίες",caption:"Πληροφορίες για την εφαρμογή",icon:"info",link:"projectinfo"},{title:"Είσοδος",caption:"Είσοδος στην εφαρμογή",icon:"login",link:"login"}];var s={name:"MainLayout",components:{EssentialLink:o["a"]},data(){return{leftDrawerOpen:!1,essentialLinks:r}},watch:{leftDrawerOpen:function(){this.emitUpdateMapSize()}},methods:{setMapStatus(t){this.$store.commit("webgis/SET_MAP_STATUS",t),"info"===t&&this.$root.$emit("map:mapStatus:info"),"measure"===t&&this.$root.$emit("map:measure:start","LineString")},zoomToExtent(){this.$root.$emit("map:zoomToExtent",!0)},geolocation(){this.$root.$emit("map:activateGeolocation",!0),this.setMapStatus("geolocation")},emitUpdateMapSize(){this.$root.$emit("map:updateSize")}}},l=s,c=a("2877"),u=a("4d5a"),p=a("e359"),m=a("65c6"),f=a("9c40"),d=a("6ac5"),b=a("9404"),q=a("1c1c"),k=a("0170"),w=a("09e3"),h=a("eebe"),g=a.n(h),v=Object(c["a"])(l,n,i,!1,null,null,null);e["default"]=v.exports;g()(v,"components",{QLayout:u["a"],QHeader:p["a"],QToolbar:m["a"],QBtn:f["a"],QToolbarTitle:d["a"],QDrawer:b["a"],QList:q["a"],QItemLabel:k["a"],QPageContainer:w["a"]})}}]);