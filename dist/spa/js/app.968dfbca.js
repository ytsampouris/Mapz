(function(e){function n(n){for(var r,a,u=n[0],c=n[1],l=n[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(f.length)f.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={3:0},o={3:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{1:"41e1a928",2:"3392379c",4:"109e6f9c",5:"5bbf1e19",6:"ef12b76a",7:"966b9dcc",8:"63f772b4",9:"70d696c7",10:"0aeb16c1",11:"40eabcf1",12:"07c3ffb2",13:"10451126",14:"2beb41e2",15:"bef8f327",16:"78035046"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={4:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{1:"31d6cfe0",2:"31d6cfe0",4:"a93148b1",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0",16:"31d6cfe0"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),t(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var f=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var d=s;i.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"272a":function(e,n,t){"use strict";function r(){}function a(){}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))},"2f39":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"mapStatus",(function(){return _})),t.d(r,"drawType",(function(){return j})),t.d(r,"measureType",(function(){return I})),t.d(r,"featureInfo",(function(){return U})),t.d(r,"featureInfoTable",(function(){return C})),t.d(r,"showPanel",(function(){return q})),t.d(r,"tableHeaders",(function(){return M})),t.d(r,"tableItems",(function(){return k}));var a={};t.r(a),t.d(a,"SET_SHOWPANEL",(function(){return L})),t.d(a,"SET_FEATURE_INFO",(function(){return x})),t.d(a,"SET_MAP_STATUS",(function(){return N})),t.d(a,"SET_DRAW_TYPE",(function(){return R})),t.d(a,"SET_MEASURE_OUTPUT",(function(){return $})),t.d(a,"SET_MEASURE_TYPE",(function(){return H})),t.d(a,"SET_MEASURE_UNIT",(function(){return B}));t("ac1f"),t("5319"),t("573e"),t("7d6e"),t("e54f"),t("985d"),t("31cd"),t("f64d");var o=t("2b0e"),i=t("1f91"),u=t("42d2"),c=t("b05d"),l=t("2a19"),s=t("f508");o["a"].use(c["a"],{config:{},lang:i["a"],iconSet:u["a"],plugins:{Notify:l["a"],Loading:s["a"]}});var f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}}),t("router-view")],1)},d=[],p={name:"App"},m=p,h=t("2877"),b=Object(h["a"])(m,f,d,!1,null,null,null),g=b.exports,v=t("2f62");const y="display",w="Point",P="LineString",T=0,S="meters",A={},E="";var O=function(){return{mapStatus:y,drawType:w,measureType:P,measureOutput:T,measureUnit:S,featureInfo:A,featureInfoTable:E}};function _(e){return e.mapStatus}function j(e){return e.drawType}function I(e){return e.measureType}function U(e){return e.featureInfo}function C(e){return e.featureInfoTable}function q(e){return e.showPanel}function M(e){return e.tableHeaders}function k(e){return e.tableItems}function L(e,n){console.log("setting show panel in vuex"),e.showPanel=n}function x(e,n){e.featureInfo=n}function N(e,n){e.mapStatus=n}function R(e,n){e.drawType=n}function $(e,n){e.measureOutput=n}function H(e,n){e.measureType=n}function B(e,n){e.measureUnit=n}var F=t("d3c0"),J={namespaced:!0,state:O,getters:r,mutations:a,actions:F};o["a"].use(v["a"]);var D=function(){const e=new v["a"].Store({modules:{webgis:J},strict:!1});return e},G=t("8c4f");t("ddb0");const V=[{path:"/user",name:"user",component:()=>Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"8b24"))},{path:"maps",name:"maps",component:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"0e66")),meta:{requiresAuth:!0}},{path:"myAccount",name:"myAccount",component:()=>Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"526f")),meta:{requiresAuth:!0}},{path:"newMap",name:"newMap",component:()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"c58f")),meta:{requiresAuth:!0,isAdmin:!0}},{path:"usermanagement",name:"userManagement",component:()=>Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"7367")),meta:{requiresAuth:!0,isAdmin:!0}},{path:"departmentmanagement",name:"departmentManagement",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"9dd3")),meta:{requiresAuth:!0,isAdmin:!0}},{path:"databaseAdministration",name:"databaseAdministration",component:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"05ff")),meta:{requiresAuth:!0,isAdmin:!0}}]},{path:"/",component:()=>Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"034d")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"8b24"))},{path:"/login",name:"login",component:()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"013f"))},{path:"database",name:"database",component:()=>Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"2eb2")),meta:{requiresAuth:!1}},{path:"/projectinfo",name:"projectinfo",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"8493"))}]},{path:"/",component:()=>Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"4ab4")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"8b24"))},{path:"map",name:"map",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"1d0e")),meta:{requiresAuth:!1}},{path:"/projectinfo",name:"projectinfo",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"8493"))}]},{path:"*",component:()=>Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"e51e"))}];var K=V;o["a"].use(G["a"]);var Q=function(){const e=new G["a"]({scrollBehavior:()=>({x:0,y:0}),routes:K,mode:"history",base:"/"});return e.beforeEach(((e,n,t)=>{const r=JSON.parse(localStorage.getItem("user")),a=localStorage.getItem("token");if(e.meta.requiresAuth){if(r&&a){if(e.meta.isAdmin&&"admin"===r.role)return t();if(e.meta.isAdmin&&"admin"!==r.role)return t("/login");t()}}else t()})),e},W=async function(){const e="function"===typeof D?await D({Vue:o["a"]}):D,n="function"===typeof Q?await Q({Vue:o["a"],store:e}):Q;e.$router=n;const t={router:n,store:e,render:e=>e(g),el:"#q-app"};return{app:t,store:e,router:n}},Y=t("a925"),z={failed:"Action failed",success:"Action was successful"},X={failed:"Action failed",success:"Action was successful",labels:{selectToQuety:"Επιλέξτε Επίπεδο για αναζήτηση",lengthUnit:"Μονάδα Μήκους",areaUnit:"Μονάδα Επιφάνειας",clear:"καθαρισμος",cancel:"ακυρωση",search:"αναζητηση",clearUploaded:"καθαρισμος αρχειου",panelTitle:{general:"γενικές πληροφοριες",featureInfo:"πληροφοριες οντοτητας",measure:"μετρηση",draw:"σχεδιασμος",print:"εκτυπωση",geolocation:"γεωγραφικη θεση",draganddrop:"απεικονιση αρχειου",nomimatim:"αναζητηση μερους"},drawTypes:{point:"Σημείο",linestring:"Γραμμη",polygon:"Πολυγωνο"},manual:"Εγχειριδιο Χρησης"},panelText:{display:"Γεωγραφική πλατφόρμα ΦΔ Αίνου",geolocation:"Το γεωγραφικό σας στίγμα παρέχεται από τον Διαδικτυακό σας πάροχο.",info:"Πρώτα επιλέξτε ένα Επίπεδο και στη συνέχεια, κάντε κλικ στο χάρτη.",print:"Παρακαλώ περιμένετε ο χάρτης ετοιμάζεται για εκτύπωση",draw:"Επιλέξτε τι θελετε να σχεδιάσετε",dragdrop:"Σύρετε και αφήστε ένα αρχείο (KML, GeoJSON ή TopoJSON) στο χάρτη. Η γεωγραφική προβολή των δεδομένων πρέπει να είναι EPSG: 4326 ή EPSG: 3857.",invalid:"Μη έγκυρος τύπος αρχείου"}},Z={"en-us":z,"el-gr":X};o["a"].use(Y["a"]);const ee=new Y["a"]({locale:"el-gr",fallbackLocale:"el-gr",messages:Z});var ne=({app:e})=>{e.i18n=ee},te=t("1cf8");t("2b69");o["a"].use(te["a"],{dataProjection:"EPSG:3857"});var re=t("758b"),ae=t("6441"),oe=t("2e98");const ie="/";async function ue(){const{app:e,store:n,router:t}=await W();let r=!1;const a=e=>{r=!0;const n=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=n},i=window.location.href.replace(window.location.origin,""),u=[ne,void 0,re["default"],ae["a"],oe["a"]];for(let l=0;!1===r&&l<u.length;l++)if("function"===typeof u[l])try{await u[l]({app:e,router:t,store:n,Vue:o["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:ie})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&new o["a"](e)}ue()},"31cd":function(e,n,t){},3863:function(e,n,t){"use strict";(function(e){n["a"]=function(){return{default:{httpLinkConfig:{uri:`${e.env.API_HOST_URL}:${e.env.PORT}/graphql`},cacheConfig:{},additionalConfig:{}},ssrOnServer:{additionalConfig:{ssrMode:!0}},ssrOnClient:{additionalConfig:{ssrForceFetchDelay:100}}}}}).call(this,t("4362"))},"758b":function(e,n,t){"use strict";(function(e){var n=t("2b0e"),r=t("bc3a"),a=t.n(r);n["a"].prototype.$axios=a.a;const o=a.a.create({baseURL:`${e.env.API_HOST_URL}:${e.env.PORT}`});n["a"].prototype.$api=o}).call(this,t("4362"))},d3c0:function(e,n){},ee25:function(e,n,t){"use strict";t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return c}));var r=t("ded3"),a=t.n(r),o=t("0014"),i=t.n(o),u=t("c2c3");let c={};function l({apolloClientConfigObj:e}){let n=new i.a({uri:"http://localhost:8081/graphql"});const t=Object(u["a"])(((e,{headers:n})=>{const t=localStorage.getItem("token");return{headers:a()(a()({},n),t&&{authorization:`Bearer ${t}`,token:`${t}`})}}));e.link=t.concat(n)}function s(e){c=e}}});