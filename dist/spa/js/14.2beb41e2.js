(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"034d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        Geoportal\n      ")])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n        Menu\n      ")]),e._l(e.essentialLinks,(function(t){return a("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],l=a("37c0");const r=[{title:"Χάρτης",caption:"Πλοήγηση στους χάρτες",icon:"map",link:"/map"},{title:"Βάση Δεδομένων",caption:"Πλοήγηση στα δεδομένα",icon:"fa fa-database",link:"/database"},{title:"Πληροφορίες",caption:"Πληροφορίες για την εφαρμογή",icon:"info",link:"projectinfo"},{title:"Είσοδος",caption:"Είσοδος στην εφαρμογή",icon:"login",link:"login"}];var o={name:"MainLayout",components:{EssentialLink:l["a"]},data(){return{leftDrawerOpen:!1,essentialLinks:r}},methods:{}},c=o,s=a("2877"),p=a("4d5a"),u=a("e359"),f=a("65c6"),b=a("9c40"),d=a("6ac5"),m=a("9404"),k=a("1c1c"),w=a("0170"),q=a("09e3"),v=a("eebe"),Q=a.n(v),_=Object(s["a"])(c,n,i,!1,null,null,null);t["default"]=_.exports;Q()(_,"components",{QLayout:p["a"],QHeader:u["a"],QToolbar:f["a"],QBtn:b["a"],QToolbarTitle:d["a"],QDrawer:m["a"],QList:k["a"],QItemLabel:w["a"],QPageContainer:q["a"]})},"37c0":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:"",tag:"a",to:e.link,exact:""}},[e.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(e.title))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},i=[],l={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},r=l,o=a("2877"),c=a("66e5"),s=a("4074"),p=a("0016"),u=a("0170"),f=a("eebe"),b=a.n(f),d=Object(o["a"])(r,n,i,!1,null,null,null);t["a"]=d.exports;b()(d,"components",{QItem:c["a"],QItemSection:s["a"],QIcon:p["a"],QItemLabel:u["a"]})}}]);