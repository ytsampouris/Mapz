(function(e){function n(n){for(var r,o,u=n[0],c=n[1],l=n[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(f.length)f.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={3:0},a={3:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{1:"22161087",2:"3392379c",4:"380ab1ad",5:"29b03034",6:"cd7150b0",7:"ff3bf872",8:"d631a988",9:"c6cde793",10:"579eea3a",11:"d271f141",12:"76439658",13:"c85f6aaa",14:"aed45c2e",15:"bef8f327",16:"78035046"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={1:1,4:1,5:1,6:1,7:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{1:"63d1c1c7",2:"31d6cfe0",4:"a93148b1",5:"edbc8b65",6:"994945f0",7:"8a7e38e6",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0",16:"31d6cfe0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),t(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var f=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var d=s;i.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"272a":function(e,n,t){"use strict";function r({apolloProviderConfigObj:e,router:n}){e.errorHandler=function({graphQLErrors:e,networkError:t}){e&&e.map((({message:e,locations:n,path:t})=>console.log(`[GraphQL error]: Message: ${e}, Location: ${n}, Path: ${t}`))),t&&n.push("/login")}}function o({apolloProvider:e}){}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))},"2f39":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"mapStatus",(function(){return _})),t.d(r,"drawType",(function(){return j})),t.d(r,"measureType",(function(){return k})),t.d(r,"featureInfo",(function(){return C})),t.d(r,"featureInfoTable",(function(){return I})),t.d(r,"showPanel",(function(){return M})),t.d(r,"tableHeaders",(function(){return q})),t.d(r,"tableItems",(function(){return L}));var o={};t.r(o),t.d(o,"SET_SHOWPANEL",(function(){return U})),t.d(o,"SET_FEATURE_INFO",(function(){return x})),t.d(o,"SET_MAP_STATUS",(function(){return N})),t.d(o,"SET_DRAW_TYPE",(function(){return $})),t.d(o,"SET_MEASURE_OUTPUT",(function(){return R})),t.d(o,"SET_MEASURE_TYPE",(function(){return B})),t.d(o,"SET_MEASURE_UNIT",(function(){return F}));t("ac1f"),t("5319"),t("573e"),t("7d6e"),t("e54f"),t("985d"),t("31cd"),t("f64d");var a=t("2b0e"),i=t("1f91"),u=t("42d2"),c=t("b05d"),l=t("2a19"),s=t("f508");a["a"].use(c["a"],{config:{brand:{primary:"#036145"}},lang:i["a"],iconSet:u["a"],plugins:{Notify:l["a"],Loading:s["a"]}});var f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}}),t("router-view")],1)},d=[],p={name:"App"},m=p,h=t("2877"),g=Object(h["a"])(m,f,d,!1,null,null,null),b=g.exports,y=t("2f62");const v="display",w="Point",P="LineString",S=0,A="meters",T={},E="";var O=function(){return{mapStatus:v,drawType:w,measureType:P,measureOutput:S,measureUnit:A,featureInfo:T,featureInfoTable:E}};function _(e){return e.mapStatus}function j(e){return e.drawType}function k(e){return e.measureType}function C(e){return e.featureInfo}function I(e){return e.featureInfoTable}function M(e){return e.showPanel}function q(e){return e.tableHeaders}function L(e){return e.tableItems}function U(e,n){console.log("setting show panel in vuex"),e.showPanel=n}function x(e,n){e.featureInfo=n}function N(e,n){e.mapStatus=n}function $(e,n){e.drawType=n}function R(e,n){e.measureOutput=n}function B(e,n){e.measureType=n}function F(e,n){e.measureUnit=n}var G=t("d3c0"),H={namespaced:!0,state:O,getters:r,mutations:o,actions:G};a["a"].use(y["a"]);var J=function(){const e=new y["a"].Store({modules:{webgis:H},strict:!1});return e},z=t("8c4f");t("ddb0");const D=[{path:"/user",name:"user",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"8b24"))},{path:"maps",name:"maps",component:()=>Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"0e66")),meta:{requiresAuth:!0}},{path:"myAccount",name:"myAccount",component:()=>Promise.all([t.e(0),t.e(16)]).then(t.bind(null,"526f")),meta:{requiresAuth:!0}},{path:"newMap",name:"newMap",component:()=>Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"c58f")),meta:{requiresAuth:!0,isAdmin:!0}},{path:"usermanagement",name:"userManagement",component:()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"7367")),meta:{requiresAuth:!0,isAdmin:!0}},{path:"departmentmanagement",name:"departmentManagement",component:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"9dd3")),meta:{requiresAuth:!0,isAdmin:!0}},{path:"databaseAdministration",name:"databaseAdministration",component:()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"05ff")),meta:{requiresAuth:!0,isAdmin:!0}}]},{path:"/",component:()=>Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"034d")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"8b24"))},{path:"/login",name:"login",component:()=>Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"013f"))},{path:"database",name:"database",component:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"2eb2")),meta:{requiresAuth:!1}},{path:"/projectinfo",name:"projectinfo",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"8493"))}]},{path:"/",component:()=>Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"4ab4")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"8b24"))},{path:"map",name:"map",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"1d0e")),meta:{requiresAuth:!1}},{path:"/projectinfo",name:"projectinfo",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"8493"))}]},{path:"*",component:()=>Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"e51e"))}];var Q=D;a["a"].use(z["a"]);var V=function(){const e=new z["a"]({scrollBehavior:()=>({x:0,y:0}),routes:Q,mode:"history",base:"/"});return e.beforeEach(((e,n,t)=>{const r=JSON.parse(localStorage.getItem("user")),o=localStorage.getItem("token");if(e.meta.requiresAuth){if(r&&o){if(e.meta.isAdmin&&"admin"===r.role)return t();if(e.meta.isAdmin&&"admin"!==r.role)return t("/login");t()}}else t()})),e},K=async function(){const e="function"===typeof J?await J({Vue:a["a"]}):J,n="function"===typeof V?await V({Vue:a["a"],store:e}):V;e.$router=n;const t={router:n,store:e,render:e=>e(b),el:"#q-app"};return{app:t,store:e,router:n}},W=t("a925"),Y={failed:"Action failed",success:"Action was successful"},X={failed:"Action failed",success:"Action was successful",labels:{selectToQuety:"Επιλέξτε Επίπεδο για αναζήτηση",lengthUnit:"Μονάδα Μήκους",areaUnit:"Μονάδα Επιφάνειας",clear:"καθαρισμος",cancel:"ακυρωση",search:"αναζητηση",clearUploaded:"καθαρισμος αρχειου",panelTitle:{general:"γενικές πληροφοριες",featureInfo:"πληροφοριες οντοτητας",measure:"μετρηση",draw:"σχεδιασμος",print:"εκτυπωση",geolocation:"γεωγραφικη θεση",draganddrop:"απεικονιση αρχειου",nomimatim:"αναζητηση μερους"},drawTypes:{point:"Σημείο",linestring:"Γραμμη",polygon:"Πολυγωνο"},manual:"Εγχειριδιο Χρησης"},panelText:{display:"Γεωγραφική πλατφόρμα ΦΔ Αίνου",geolocation:"Το γεωγραφικό σας στίγμα παρέχεται από τον Διαδικτυακό σας πάροχο.",info:"Πρώτα επιλέξτε ένα Επίπεδο και στη συνέχεια, κάντε κλικ στο χάρτη.",print:"Παρακαλώ περιμένετε ο χάρτης ετοιμάζεται για εκτύπωση",draw:"Επιλέξτε τι θελετε να σχεδιάσετε",dragdrop:"Σύρετε και αφήστε ένα αρχείο (KML, GeoJSON ή TopoJSON) στο χάρτη. Η γεωγραφική προβολή των δεδομένων πρέπει να είναι EPSG: 4326 ή EPSG: 3857.",invalid:"Μη έγκυρος τύπος αρχείου"}},Z={"en-us":Y,"el-gr":X};a["a"].use(W["a"]);const ee=new W["a"]({locale:"el-gr",fallbackLocale:"el-gr",messages:Z});var ne=({app:e})=>{e.i18n=ee},te=t("1cf8");t("2b69");a["a"].use(te["a"],{dataProjection:"EPSG:3857"});var re=t("bc3a"),oe=t.n(re);a["a"].prototype.$axios=oe.a;const ae=oe.a.create({baseURL:'"https://mapz-geolynked.herokuapp.com/":"8081"'});a["a"].prototype.$api=ae;var ie=t("6441"),ue=t("2e98");const ce="/";async function le(){const{app:e,store:n,router:t}=await K();let r=!1;const o=e=>{r=!0;const n=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=n},i=window.location.href.replace(window.location.origin,""),u=[ne,void 0,void 0,ie["a"],ue["a"]];for(let l=0;!1===r&&l<u.length;l++)if("function"===typeof u[l])try{await u[l]({app:e,router:t,store:n,Vue:a["a"],ssrContext:null,redirect:o,urlPath:i,publicPath:ce})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&new a["a"](e)}le()},"31cd":function(e,n,t){},3863:function(e,n,t){"use strict";n["a"]=function(){return{default:{httpLinkConfig:{uri:'"https://mapz-geolynked.herokuapp.com/"graphql'},cacheConfig:{},additionalConfig:{}},ssrOnServer:{additionalConfig:{ssrMode:!0}},ssrOnClient:{additionalConfig:{ssrForceFetchDelay:100}}}}},d3c0:function(e,n){},ee25:function(e,n,t){"use strict";t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return c}));var r=t("ded3"),o=t.n(r),a=(t("ac1f"),t("5319"),t("0014")),i=t.n(a),u=t("c2c3");let c={};function l({apolloClientConfigObj:e}){const n='"https://mapz-geolynked.herokuapp.com/"graphql'.replace(/['"]+/g,"");let t=new i.a({uri:n});const r=Object(u["a"])(((e,{headers:n})=>{const t=localStorage.getItem("token");return{headers:o()(o()({},n),t&&{authorization:`Bearer ${t}`,token:`${t}`})}}));e.link=r.concat(t)}function s(e){c=e}}});