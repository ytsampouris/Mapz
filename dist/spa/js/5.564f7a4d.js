(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"034d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        Geoportal\n      ")])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Menu\n      ")]),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))})),a("a",{attrs:{href:"https://tidydox.herokuapp.com",target:"_blank"}},[a("q-item",{attrs:{clickable:"",tag:"a"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"inventory_2"}})],1),a("q-item-section",[a("q-item-label",[t._v("Διαχειριστής εγγράφων")]),a("q-item-label",{attrs:{caption:""}},[t._v("\n              Μετάβαση\n            ")])],1)],1)],1)],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],l=a("37c0");const r=[{title:"Χάρτης",caption:"Πλοήγηση στους χάρτες",icon:"map",link:"/map"},{title:"Βάση Δεδομένων",caption:"Πλοήγηση στα δεδομένα",icon:"fa fa-database",link:"/database"},{title:"Πληροφορίες",caption:"Πληροφορίες για την εφαρμογή",icon:"info",link:"/"},{title:"Είσοδος",caption:"Είσοδος στην εφαρμογή",icon:"login",link:"login"}];var o={name:"MainLayout",components:{EssentialLink:l["a"]},data(){return{leftDrawerOpen:!1,essentialLinks:r}},methods:{}},c=o,s=(a("2857"),a("2877")),p=a("4d5a"),u=a("e359"),m=a("65c6"),b=a("9c40"),f=a("6ac5"),d=a("9404"),q=a("1c1c"),k=a("0170"),v=a("66e5"),w=a("4074"),_=a("0016"),Q=a("09e3"),g=a("eebe"),y=a.n(g),L=Object(s["a"])(c,n,i,!1,null,"0022b9e0",null);e["default"]=L.exports;y()(L,"components",{QLayout:p["a"],QHeader:u["a"],QToolbar:m["a"],QBtn:b["a"],QToolbarTitle:f["a"],QDrawer:d["a"],QList:q["a"],QItemLabel:k["a"],QItem:v["a"],QItemSection:w["a"],QIcon:_["a"],QPageContainer:Q["a"]})},2857:function(t,e,a){"use strict";a("730d")},"37c0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",to:t.link,exact:""}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},i=[],l={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},r=l,o=a("2877"),c=a("66e5"),s=a("4074"),p=a("0016"),u=a("0170"),m=a("eebe"),b=a.n(m),f=Object(o["a"])(r,n,i,!1,null,null,null);e["a"]=f.exports;b()(f,"components",{QItem:c["a"],QItemSection:s["a"],QIcon:p["a"],QItemLabel:u["a"]})},"730d":function(t,e,a){}}]);