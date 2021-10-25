(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"1d0e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4"},[a("div",[a("q-input",{ref:"filter",attrs:{filled:"",label:"Αναζήτηση"},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.filter?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:e.resetFilter}}):e._e()]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("q-scroll-area",{staticStyle:{height:"40vh"}},[a("q-tree",{attrs:{nodes:e.baseLayers,"node-key":"id","label-key":"label",filter:e.filter,"tick-strategy":"strict",ticked:e.ticked,selected:e.selectedLayer},on:{"update:ticked":[function(t){e.ticked=t},e.setVisibility],"update:selected":function(t){e.selectedLayer=t}},scopedSlots:e._u([{key:"default-header",fn:function(t){return[a("div",{staticClass:"row items-center"},[a("div",[e._v(e._s(t.node.label)+"\n                  "),t.node.zindex<e.baseLayers.length?a("q-btn",{attrs:{round:"",flat:"",color:"primary",size:"xs",icon:"expand_less"},on:{click:function(a){return e.moveUp(t.node.id)}}}):e._e(),t.node.zindex>1?a("q-btn",{attrs:{round:"",flat:"",color:"primary",size:"xs",icon:"expand_more"},on:{click:function(a){return e.moveDown(t.node.id)}}}):e._e(),a("q-btn",{attrs:{round:"",flat:"",color:"primary",size:"xs",icon:"invert_colors"},on:{click:function(a){e.layerToSetOpacity=t.node,e.opacityDialog=!0}}}),a("q-btn",{attrs:{round:"",flat:"",color:"primary",size:"xs",icon:"info"},on:{click:function(a){return e.layerInfo(t.node)}}})],1)])]}}])})],1)],1),a("q-separator",{attrs:{inset:""}}),a("div",{staticClass:"text-center"},[e._v("\n        "+e._s(e.$store.state.mapStatus)+"\n        "),"home"===e.$store.state.webgis.mapStatus?a("displayPanel"):e._e(),"geolocation"===e.$store.state.webgis.mapStatus?a("geolocation"):e._e(),"info"===e.$store.state.webgis.mapStatus?a("info"):e._e(),"print"===e.$store.state.webgis.mapStatus?a("print"):e._e(),"measure"===e.$store.state.webgis.mapStatus?a("measure"):e._e(),"draw"===e.$store.state.webgis.mapStatus?a("draw"):e._e(),"dragdrop"===e.$store.state.webgis.mapStatus?a("dragAndDrop"):e._e()],1)],1),a("div",{staticClass:"col-12 col-md-8"},[a("div",{ref:"map-root",staticStyle:{width:"100%",height:"95vh"}})])]),a("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:e.opacityDialog,callback:function(t){e.opacityDialog=t},expression:"opacityDialog"}},[a("q-card",{staticStyle:{width:"50%"}},[a("q-card-section",{staticClass:"q-pt-md"},[a("q-icon",{attrs:{color:"primary",name:"invert_colors"}}),a("q-slider",{attrs:{min:1,max:100,label:"","label-value":e.layerOpacity+"%"},model:{value:e.layerOpacity,callback:function(t){e.layerOpacity=t},expression:"layerOpacity"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{label:"OK",color:"primary"},on:{click:function(t){return e.setOpacity()}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Κλείσιμο",color:"black"}})],1)],1)],1),a("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:e.layerInfoDialog,callback:function(t){e.layerInfoDialog=t},expression:"layerInfoDialog"}},[a("q-card",{staticStyle:{width:"70%"}},[a("q-card-section",{staticClass:"q-pt-md"},[a("div",{staticClass:"text-h6"},[e._v("Πληροφορίες χάρτη")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-list",e._l(Object.keys(e.layerMetadata),(function(t){return a("q-item",{key:t},["label"===t?a("span",[e._v("Γενική περιγραφή")]):e._e(),"details"===t?a("span",[e._v("Λεπτομέρειες")]):e._e(),"timespan"===t?a("span",[e._v("Χρονική κάλυψη")]):e._e(),"filetype"===t?a("span",[e._v("Τύπος αρχείου")]):e._e(),"crs"===t?a("span",[e._v("Πρωτότυπο σύστημα γεωγραφικών συντεταγμένων")]):e._e(),"attributions"===t?a("span",[e._v("Αρχική πηγή")]):e._e(),e._v("\n            : "+e._s(e.layerMetadata[t])+"\n          ")])})),1)],1),a("q-card-actions",{staticClass:"primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK"}})],1)],1)],1)],1)},n=[],r=(a("4e82"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-btn",{attrs:{small:"",href:"https://res.cloudinary.com/firvain/image/upload/v1574936982/Combine2Protect_GIS_Platform_End-User_Manual_v1.1.0.pdf",target:"_blank"}},[e._v("\n    "+e._s(e.$t("labels.manual")))])],1)}),s=[],o=a("2877"),l=a("9c40"),c=a("eebe"),d=a.n(c),u={},p=Object(o["a"])(u,r,s,!1,null,null,null),m=p.exports;d()(p,"components",{QBtn:l["a"]});var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",[0===Object.keys(e.selectedFeature).length&&e.selectedFeature.constructor===Object?a("q-card-section",[e._v("\n    "+e._s(e.$t("panelText.dragdrop"))+"\n")]):a("q-card-section",[e.selectedFeature.valid?a("div",{staticClass:"overlayWrapper"},[a("Strong",[e._v(e._s(e.selectedFeature.id))]),a("ul",e._l(Object.keys(e.selectedFeature.properties),(function(t){return a("li",{key:t},[e._v("\n        "+e._s(t)+" : "+e._s(e.selectedFeature.properties[t])+"\n        ")])})),0)],1):a("div",[a("p",[e._v(e._s(e.$t("panelText.invalid")))])])]),a("q-card-actions",[a("v-spacer"),a("q-btn",{attrs:{small:"",flat:""},on:{click:e.clearUploaded}},[e._v(e._s(e.$t("labels.clearUploaded")))]),a("q-btn",{attrs:{small:"",flat:""},on:{click:e.cancelUploaded}},[e._v(e._s(e.$t("labels.cancel")))])],1)],1)},f=[],$=a("f09f"),g=a("a370"),h=a("4b7e"),b={},_=Object(o["a"])(b,y,f,!1,null,null,null),S=_.exports;d()(_,"components",{QCard:$["a"],QCardSection:g["a"],QCardActions:h["a"],QBtn:l["a"]});var v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",[a("q-card-section",[a("div",[a("q-banner",{staticClass:"bg-purple-8 text-white",attrs:{rounded:""}},[e._v("\n          "+e._s(e.$t("panelText.draw"))+"\n      ")])],1),a("q-select",{attrs:{options:e.drawTypes},on:{input:function(t){return e.setDrawType()}},model:{value:e.drawType,callback:function(t){e.drawType=t},expression:"drawType"}})],1),a("q-card-actions",[a("q-space"),a("q-btn",{attrs:{small:"",flat:""},on:{click:e.clearDraw}},[e._v(e._s(e.$t("labels.clear")))])],1)],1)},w=[],q={data(){return{drawType:{id:1,label:this.$t("labels.drawTypes.point"),value:"Point"},drawTypes:[{id:1,label:this.$t("labels.drawTypes.point"),value:"Point"},{id:2,label:this.$t("labels.drawTypes.linestring"),value:"LineString"},{id:3,label:this.$t("labels.drawTypes.polygon"),value:"Polygon"}]}},methods:{clearDraw(){this.$root.$emit("draw:clear")},setDrawType(){this.$store.commit("webgis/SET_DRAW_TYPE",this.drawType.value)}}},x=q,L=a("54e1"),I=a("ddd8"),O=a("2c91"),k=Object(o["a"])(x,v,w,!1,null,null,null),D=k.exports;d()(k,"components",{QCard:$["a"],QCardSection:g["a"],QBanner:L["a"],QSelect:I["a"],QCardActions:h["a"],QSpace:O["a"],QBtn:l["a"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",[e._v("\n    "+e._s(e.$t("panelText.geolocation"))+"\n    "),e.deviceCoordinate?a("q-card-section",{staticClass:"subheading text-xs-center"},[e._v("\n        "+e._s(Number(Math.round(e.deviceCoordinate[0]+"e3")+"e-3"))+"\n        "+e._s(Number(Math.round(e.deviceCoordinate[1]+"e3")+"e-3"))+"\n\n        "+e._s(this.$refs.map.$map.getView().getProjection().getCode()))]):a("q-card-section",{staticClass:"full"}),a("q-card-actions",[a("q-space"),e.deviceCoordinate?a("q-btn",{attrs:{small:"",flat:""},on:{click:e.clearGeolocation}},[e._v("cancel")]):e._e()],1)],1)},C=[],E={data(){return{deviceCoordinate:void 0}},methods:{clearGeolocation(){this.$root.$emit("geolocation:clear"),this.deviceCoordinate=void 0}}},M=E,j=Object(o["a"])(M,T,C,!1,null,null,null),Q=j.exports;d()(j,"components",{QCard:$["a"],QCardSection:g["a"],QCardActions:h["a"],QSpace:O["a"],QBtn:l["a"]});var z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",[a("q-card-section",[a("div",[a("q-banner",{staticClass:"bg-purple-8 text-white",attrs:{rounded:""}},[e._v("\n            "+e._s(e.$t("panelText.info"))+"\n        ")]),e.loading?a("div",{staticStyle:{width:"100%",height:"100%","text-align":"center","vertical-align":"middle","z-index":"999",color:"grey",position:"absolute"}},[a("div",{staticStyle:{top:"40%",width:"100%",height:"100%",position:"absolute"}},[a("q-spinner-gears",{attrs:{color:"grey",size:"4em"}}),a("div",{staticStyle:{margin:"1em"}},[e._v("Φόρτωση...")])],1)]):e._e()],1),a("q-scroll-area",{staticStyle:{height:"40vh"}},[e.$apollo.loading?a("div",[e._v("\n        "+e._s(e.featureInfo)+"\n      ")]):a("div",e._l(e.featuresInfo,(function(t){return a("q-list",{key:t.id},e._l(Object.keys(t.properties),(function(i){return a("q-item",{key:i},[a("q-icon",{attrs:{xs:"",name:"chevron_right"}}),"image"===i?a("span",[a("img",{attrs:{src:""+i,alt:"Image",width:"100%",height:"100%"}})]):e._e(),a("span","url"===i?[a("a",{attrs:{href:""+i}},[e._v("Σύνδεσμος")])]:[e._v("\n                "+e._s(i)+" : "+e._s(t.properties[i])+"\n              ")])],1)})),1)})),1)])],1)],1)},P=[],U=a("1fee"),F={data(){return{featureInfo:{},featuresInfo:[],loading:!1}},mounted(){this.$root.$on("map:info:coordinates",((e,t,a)=>{if(t.id){const i=e[0],n=e[1],r=t.dbtablename,s=t.filetype;this.loading=!0,this.$apollo.query({query:U["b"].queryXY,variables:{layer:r,type:s,zoom:a,x:i,y:n},fetchPolicy:"no-cache"}).then((e=>{null!==JSON.parse(e.data.queryXY)[0][0].query_point_layer_by_xy&&(JSON.parse(e.data.queryXY)["1"].rows.length>0?(this.featuresInfo=[],this.$root.$emit("map:infoLayer:clearSource"),JSON.parse(e.data.queryXY)["1"].rows.forEach((e=>{"Point"===s&&this.featuresInfo.push(JSON.parse(e.query_point_layer_by_xy)),"Line"===s&&this.featuresInfo.push(JSON.parse(e.query_line_layer_by_xy)),"Polygon"===s&&this.featuresInfo.push(JSON.parse(e.query_polygon_layer_by_xy)),"Raster"===s&&this.featuresInfo.push({id:"1",properties:{"Τιμή pixel:":e.val}})}))):this.$q.notify({message:"Δεν βρέθηκαν πληροφορίες",color:"negative",timeout:1200})),this.loading=!1})).then((()=>{this.featuresInfo.length>0&&"Raster"!==s&&this.featuresInfo.forEach((e=>{this.$root.$emit("map:infoLayer:addFeature",e)}))}))}else this.$q.notify({message:"Δεν έχετε επιλέξει χάρτη! Επιλέξτε από την λίστα και ξαναπροσπαθήστε.",color:"negative",timeout:1800})}))},methods:{clearInfo(){this.$root.$emit("info:clear")},cancelInfo(){this.$root.$emit("info:cancel"),this.selectedLayer=null},onFeatureInfoUpdate(e){if(e.length>0){const e=this.$refs.featureInfo.getSource().getExtent();this.$refs.map.$map.getView().fit(e)}}}},A=F,B=a("cf57"),N=a("4983"),V=a("1c1c"),G=a("66e5"),R=a("0016"),Y=Object(o["a"])(A,z,P,!1,null,null,null),Z=Y.exports;d()(Y,"components",{QCard:$["a"],QCardSection:g["a"],QBanner:L["a"],QSpinnerGears:B["a"],QScrollArea:N["a"],QList:V["a"],QItem:G["a"],QIcon:R["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",[a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-banner",{staticClass:"bg-purple-8 text-white",attrs:{rounded:""}},[e._v("\n      "+e._s(e.$t("labels.panelTitle.measure"))+"\n    ")])],1),a("q-card-actions",[a("q-btn",{staticClass:"q-mr-xs",attrs:{icon:"fa fa-ruler",color:"LineString"===e.$store.state.webgis.measureType?"primary":"secondary"},on:{click:function(t){return e.setMeasureType("LineString")}}}),a("q-btn",{staticClass:"q-mr-xs",attrs:{icon:"fa fa-draw-polygon",color:"Polygon"===e.$store.state.webgis.measureType?"primary":"secondary"},on:{click:function(t){return e.setMeasureType("Polygon")}}}),a("q-btn",{attrs:{small:"",flat:""},on:{click:function(t){return e.clearMeasure()}}},[e._v(e._s(e.$t("labels.clear"))+"\n    ")])],1),a("q-banner",{staticClass:"bg-grey-3"},[a("span",{ref:"measurement",attrs:{id:"measurement"}})])],1)},X=[],H={name:"measureTool",data(){return{lengthUnit:"meters",lengthUnits:["meters","miles","yards","feet"],areaUnit:"sq. meters",areaUnits:["sq. meters","sq. miles","sq. yards","sq. feet"],convertLength:{meters:{meters:1,miles:.000621371192,yards:1.0936133,feet:3.2808399},miles:{meters:1609.344,miles:1,yards:1760,feet:5280},yards:{meters:.9144,miles:.000568181818,yards:1,feet:3},feet:{meters:.3048,miles:.000189393939,yards:.333333333,feet:1},"sq. meters":{"sq. meters":1,"sq. miles":3.8610215854781257e-7,"sq. yards":1.19599005,"sq. feet":10.7639104},"sq. miles":{"sq. meters":2589988.11,"sq. miles":1,"sq. yards":3097600,"sq. feet":27878400},"sq. yards":{"sq. meters":.83612736,"sq. miles":3.22830579e-7,"sq. yards":1,"sq. feet":9},"sq. feet":{"sq. meters":.09290304,"sq. miles":3.5870064279155e-8,"sq. yards":.111111111,"sq. feet":1}},measureType:"LineString",measureOutput:0}},methods:{setMeasureType(e){this.$store.commit("webgis/SET_MEASURE_TYPE",e),this.$root.$emit("map:measure:start",e),this.$root.$emit("map:mapStatus:measure",e),"LineString"===e&&this.$store.commit("webgis/SET_MEASURE_UNIT","meters"),"Polygon"===e&&this.$store.commit("webgis/SET_MEASURE_UNIT","sq. meters")},setMeasureUnit(){this.$store.commit("webgis/SET_MEASURE_UNIT",this.lengthUnit)},clearMeasure(){this.$root.$emit("map:measure:clear"),this.$store.commit("webgis/SET_MEASURE_TYPE","LineString"),this.$store.commit("webgis/SET_MEASURE_OUTPUT","")}}},W=H,K=Object(o["a"])(W,J,X,!1,null,null,null),ee=K.exports;d()(K,"components",{QCard:$["a"],QBanner:L["a"],QCardActions:h["a"],QBtn:l["a"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",[a("q-card-section",[a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-banner",{staticClass:"bg-purple-8 text-white",attrs:{rounded:""}},[e._v("\n                "+e._s(e.$t("panelText.print"))+"\n            ")])],1)])],1)},ae=[],ie={},ne=Object(o["a"])(ie,te,ae,!1,null,null,null),re=ne.exports;d()(ne,"components",{QCard:$["a"],QCardSection:g["a"],QBanner:L["a"]});var se=a("a2c7"),oe=a("5eee"),le=a("480c"),ce=a("d0e9"),de=a("2ef1"),ue=a("a226"),pe=a("f53f"),me=a("4cdf"),ye=a("ac29"),fe=a("a2e1"),$e=a("6c77"),ge=a("83a6"),he=a("8682"),be=a("ce2c"),_e=a("5bc3"),Se=a("7a09"),ve=a("f403"),we=a("5831"),qe=a("3e6b"),xe=a("790a"),Le=a("35a7"),Ie=(a("5bc0"),{name:"WebGIS",components:{displayPanel:m,dragAndDrop:S,draw:D,geolocation:Q,info:Z,measure:ee,print:re},data(){return{olMap:null,vectorLayer:null,vectorSource:null,infoLayer:null,geolocation:null,draw:null,measurements:null,mapStatus:null,filter:"",opacityDialog:!1,layerOpacity:100,layerToSetOpacity:null,baseLayers:[],layerInfoDialog:!1,pdfOptions:{fontSize:6,textColor:"#FFFFFF",fillCollor:"#3f51b5",text:"powered by Terrarum"},date:{year:null,month:null,day:null,hour:null,minute:null},selectedLayer:null,layerMetadata:{}}},computed:{tableName:{get(){let e=null;return this.baseLayers.forEach((t=>{t.id===this.selectedLayer&&(e=t.dbtablename)})),e}},ticked:{get(){let e=[];return this.baseLayers.forEach((t=>{!0===t.visible&&e.push(t.id)})),e},set(){}},currentDate:{get(){return this.date},set(e){this.date={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minutes:e.getMinutes()}}}},methods:{layerInfo(e){this.layerMetadata={},this.layerInfoDialog=!0,Object.keys(e).forEach((t=>{e[t]&&["label","details","attributions","timespan","crs","filetype"].includes(t)&&(this.layerMetadata[t]=e[t])}))},info(){const e=this;this.olMap.on("singleclick",(function(t){if("info"===e.mapStatus){document.getElementById("layerInfo")&&(document.getElementById("layerInfo").innerHTML=t.coordinate),this.measurements=t.coordinate;let a={};e.baseLayers.forEach((t=>{t.id===e.selectedLayer&&(a=t)})),e.$root.$emit("map:info:coordinates",this.measurements,a,e.olMap.getView().getZoom())}}))},addInteraction(e){let t,a;this.draw=new ye["a"]({source:this.vectorSource,type:e,style:new $e["c"]({fill:new ge["a"]({color:"rgba(255, 255, 255, 0.2)"}),stroke:new he["a"]({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new be["a"]({radius:5,stroke:new he["a"]({color:"rgba(0, 0, 0, 0.7)"}),fill:new ge["a"]({color:"rgba(255, 255, 255, 0.2)"})})})}),this.olMap.addInteraction(this.draw);const i=this;this.draw.on("drawstart",(function(e){i.vectorLayer.getSource().clear(),a=e.feature,t=a.getGeometry().on("change",(function(e,t){const a=e.target;a instanceof _e["b"]?t=i.formatArea(a):a instanceof Se["a"]&&(t=i.formatLength(a)),console.log(t),document.getElementById("measurement").innerHTML=t}))})),this.draw.on("drawend",(function(){a=null,Object(Le["b"])(t)}))},formatLength(e){let t=null;const a=Object(xe["c"])(e);return t=a>100?Math.round(a/1e3*100)/100+" km":Math.round(100*a)/100+" m",this.$root.$emit("map:measurement:result",t),t},formatArea(e){let t=null;const a=Object(xe["a"])(e);return t=a>1e4?Math.round(a/1e6*100)/100+" km<sup>2</sup>":Math.round(100*a)/100+" m<sup>2</sup>",this.$root.$emit("map:measurement:result",t),t},resetFilter(){this.filter="",this.$refs.filter.focus()},async exportPDF(e){const t=new Promise(((t,a)=>{e&&t(e),a()}));try{const{data:e}=await t,a=new jsPDF("landscape","mm","a4");a.addImage(e,"JPEG",0,0,297,210),a.setFontSize(this.pdfOptions.fontSize),a.setFillColor(this.pdfOptions.fillCollor),a.rect(0,0,25,6,"F"),a.setTextColor(this.pdfOptions.textColor),a.text(this.pdfOptions.text,2,4),this.currentDate=new Date;const{year:i,month:n,day:r,hour:s,minutes:o}=this.date;await a.save(`export_${i}-${n}-${r}_${s}ː${o}.pdf`,{returnPromise:!0}),this.updateMapStatus("display")}catch(a){this.updateMapStatus("display")}},setVisibility(e){this.baseLayers.forEach((t=>{e.includes(t.id)?(t.visible=!0,this.$root.$emit("map:layer:setVisibility",{id:t.id,visibility:!0})):(t.visible=!1,this.$root.$emit("map:layer:setVisibility",{id:t.id,visibility:!1}))}))},moveUp(e){const t=this.baseLayers.findIndex((t=>t.id===e)),a=t-1;this.array_move(this.baseLayers,t,a)},moveDown(e){const t=this.baseLayers.findIndex((t=>t.id===e)),a=t+1;this.array_move(this.baseLayers,t,a)},array_move(e,t,a){if(a>=e.length){var i=a-e.length+1;while(i--)e.push(void 0)}e.splice(a,0,e.splice(t,1)[0]),e.forEach((t=>{const a=Math.abs(this.baseLayers.findIndex((e=>e.id===t.id))-e.length);t.zindex=a,this.$root.$emit("map:layers:setZIndex",t.id,a)})),this.baseLayers=e},changeShowPanel(e){this.$store.commit("webgis/SET_SHOWPANEL",e)},setDisplay(){this.updateMapStatus("display")},clearInfo(){this.SET_FEATURE_INFO({})},cancelInfo(){this.clearInfo(),this.setDisplay()},downloadLayer(){},dynamicSort(e,t){let a;return a=t||1,"-"===e[0]&&(a=-1,e=e.substr(1)),function(t,i){var n=t[e]<i[e]?-1:t[e]>i[e]?1:0;return n*a}},fetchLayers(){this.$apollo.query({query:U["b"].getPublishedLayers,fetchPolicy:"no-cache"}).then((e=>{e&&e.data&&e.data.publishedLayers&&e.data.publishedLayers.forEach((e=>{this.baseLayers.push(e),this.baseLayers=this.baseLayers.sort(((e,t)=>e.zindex-t.zindex))})),this.baseLayers.sort(this.dynamicSort("zindex",-1)),this.$root.$emit("map:setLayers",this.baseLayers)}))},setOpacity(){this.layerToSetOpacity.opacity=this.layerOpacity/100,this.$root.$emit("map:layer:setOpacity",{id:this.layerToSetOpacity.id,opacity:this.layerOpacity/100})}},mounted(){const e=this;this.$root.$on("change:showpanel",(e=>{this.changeShowPanel(e)})),this.fetchLayers(),this.vectorSource=new we["a"],this.vectorLayer=new qe["a"]({name:"measure",source:this.vectorSource,zIndex:999999,style:new $e["c"]({fill:new ge["a"]({color:"rgba(255, 255, 255, 0.2)"}),stroke:new he["a"]({color:"#ffcc33",width:2}),image:new be["a"]({radius:7,fill:new ge["a"]({color:"#ffcc33"})})})}),this.infoLayerSource=new we["a"],this.infoLayer=new qe["a"]({name:"info",source:this.infoLayerSource,zIndex:999999,style:new $e["c"]({fill:new ge["a"]({color:"rgba(255, 255, 255, 0.2)"}),stroke:new he["a"]({color:"#FF0000",width:2}),image:new be["a"]({radius:7,fill:new ge["a"]({color:"#FF0000"})})})}),this.olMap=new oe["a"]({target:this.$refs["map-root"],layers:[this.vectorLayer,this.infoLayer],view:new se["a"]({zoom:11,maxZoom:16,minZoom:11,center:[2289715,4615511],constrainResolution:!0})}),this.geolocation=new pe["a"]({projection:this.olMap.getView().getProjection(),tracking:!0,trackingOptions:{enableHighAccuracy:!0}});const t=new me["a"];this.geolocation.on("change:accuracyGeometry",(function(){t.setGeometry(e.geolocation.getAccuracyGeometry())}));const a=new me["a"];a.setStyle(new $e["c"]({image:new be["a"]({radius:6,fill:new ge["a"]({color:"#3399CC"}),stroke:new he["a"]({color:"#fff",width:2})})})),this.geolocation.on("change:position",(function(){const t=e.geolocation.getPosition();a.setGeometry(t?new ve["a"](t):null)}));const i=new qe["a"]({source:new we["a"]({features:[t,a]}),zIndex:99999});this.olMap.addLayer(i),this.olMap.once("postcompose",(async()=>{this.info(),this.$root.$on("map:updateSize",(()=>{setTimeout((function(){e.olMap.updateSize()}),200)})),this.$root.$on("map:zoomToExtent",(()=>{this.olMap.getView().animate({center:[2300914.433,4599808.379],zoom:this.olMap.getView().getZoom()+2})})),this.$root.$on("map:activateGeolocation",(()=>{console.log(this.geolocation);const e=this.geolocation.getPosition();console.log(e),this.olMap.getView().animate({center:e,zoom:16})})),this.$root.$on("map:setLayers",(e=>{e.forEach((e=>{if(e.type){let t=null;"osm"===e.type?t=new le["a"]({source:new ce["a"],maxZoom:18}):"xyz"===e.type||"XYZ"===e.type?t=new le["a"]({source:new de["a"](e),minZoom:10,className:"layer",crossOrigin:"anonymous"}):"bingmaps"===e.type&&(t=new le["a"]({visible:!0,preload:1/0,source:new ue["a"]({key:e.apiKey,imagerySet:"AerialWithLabelsOnDemand"})})),t.setProperties(e),t.setZIndex(e.zindex),this.olMap.addLayer(t)}}))})),this.$root.$on("map:layer:setOpacity",(e=>{this.olMap.getLayers().forEach((t=>{t.getProperties().id===e.id&&t.setOpacity(e.opacity)}))})),this.$root.$on("map:layer:setVisibility",(e=>{this.olMap.getLayers().forEach((t=>{t.getProperties().id===e.id&&t.setVisible(e.visibility)}))})),this.$root.$on("map:layers:setZIndex",((e,t)=>{this.olMap.getLayers().forEach((a=>{a.getProperties().id===e&&a.setZIndex(t)}))})),this.$root.$on("map:measure:start",(e=>{this.olMap.removeInteraction(this.draw),this.addInteraction(e)})),this.$root.$on("map:measure:clear",(()=>{this.vectorLayer.getSource().clear(),this.olMap.removeInteraction(this.draw),document.getElementById("measurement").innerHTML=""})),this.$root.$on("map:mapStatus:info",(()=>{this.mapStatus="info",this.vectorLayer.getSource().clear(),this.olMap.removeInteraction(this.draw),document.getElementById("measurement")&&(document.getElementById("measurement").innerHTML="")})),this.$root.$on("map:infoLayer:clearSource",(()=>{this.infoLayer.getSource().clear()})),this.$root.$on("map:infoLayer:addFeature",(e=>{this.infoLayerSource.addFeatures((new fe["a"]).readFeatures(e)),this.$root.$emit("map:updateSize")}))}))}}),Oe=Ie,ke=(a("c4e4"),a("9989")),De=a("27f9"),Te=a("7f41"),Ce=a("eb85"),Ee=a("24e8"),Me=a("c1d0"),je=a("7f67"),Qe=Object(o["a"])(Oe,i,n,!1,null,null,null);t["default"]=Qe.exports;d()(Qe,"components",{QPage:ke["a"],QInput:De["a"],QIcon:R["a"],QScrollArea:N["a"],QTree:Te["a"],QBtn:l["a"],QSeparator:Ce["a"],QDialog:Ee["a"],QCard:$["a"],QCardSection:g["a"],QSlider:Me["a"],QCardActions:h["a"],QList:V["a"],QItem:G["a"]}),d()(Qe,"directives",{ClosePopup:je["a"]})},"1fee":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return n}));var i={};a.r(i),a.d(i,"getLayers",(function(){return g})),a.d(i,"getPublishedLayers",(function(){return h})),a.d(i,"getSpecies",(function(){return b})),a.d(i,"getUsers",(function(){return _})),a.d(i,"getContacts",(function(){return S})),a.d(i,"getDepartments",(function(){return v})),a.d(i,"getUsersOfDepartment",(function(){return w})),a.d(i,"queryXY",(function(){return q}));var n={};a.r(n),a.d(n,"createUser",(function(){return B})),a.d(n,"updateUser",(function(){return N})),a.d(n,"deleteUser",(function(){return V})),a.d(n,"createDocument",(function(){return G})),a.d(n,"deleteLayer",(function(){return R})),a.d(n,"createDepartment",(function(){return Y})),a.d(n,"updateDepartment",(function(){return Z})),a.d(n,"updateDepartmentManager",(function(){return J})),a.d(n,"deleteDepartment",(function(){return X})),a.d(n,"singleUpload",(function(){return H})),a.d(n,"signIn",(function(){return W})),a.d(n,"addLayer",(function(){return K})),a.d(n,"addSpecies",(function(){return ee})),a.d(n,"updateSpecies",(function(){return te})),a.d(n,"deleteSpecies",(function(){return ae})),a.d(n,"updateLayer",(function(){return ie}));var r=a("5184");let s,o=e=>e;Object(r["a"])(s||(s=o`
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
`));let l,c,d,u,p,m,y,f,$=e=>e;const g=Object(r["a"])(l||(l=$`
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
`)),h=Object(r["a"])(c||(c=$`
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
`)),b=Object(r["a"])(d||(d=$`
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
`)),_=Object(r["a"])(u||(u=$`
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
`)),S=Object(r["a"])(p||(p=$`
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
`)),v=Object(r["a"])(m||(m=$`
  query getDepartments {
    departments {
      _id
      title
      description
      manager
    }
  }
`)),w=Object(r["a"])(y||(y=$`
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
`)),q=Object(r["a"])(f||(f=$`
  query queryXY($layer: String, $type: String, $zoom: Int, $x: Float, $y: Float){
    queryXY(layer: $layer, type: $type, zoom: $zoom, x: $x, y: $y)
  }
`));a("ffd6");let x,L,I,O,k,D,T,C,E,M,j,Q,z,P,U,F,A=e=>e;const B=Object(r["a"])(x||(x=A`
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
`)),N=Object(r["a"])(L||(L=A`
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
`)),V=Object(r["a"])(I||(I=A`
  mutation($_id: ID!) {
    deleteUser(_id: $_id)
  }
`)),G=Object(r["a"])(O||(O=A`
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
`)),R=Object(r["a"])(k||(k=A`
  mutation($id: String!) {
    deleteLayer(id: $id)
  }
`)),Y=Object(r["a"])(D||(D=A`
  mutation($title: String, $description: String) {
    createDepartment(title: $title, description: $description) {
      _id
      title
      description
      manager
    }
  }
`)),Z=Object(r["a"])(T||(T=A`
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
`)),J=Object(r["a"])(C||(C=A`
  mutation($_id: ID!, $manager: ID) {
    updateDepartmentManager(_id: $_id, manager: $manager) {
      _id
      manager
    }
  }
`)),X=Object(r["a"])(E||(E=A`
  mutation($_id: ID!) {
    deleteDepartment(_id: $_id)
  }
`)),H=Object(r["a"])(M||(M=A`
  mutation singleUpload($doc_id: ID!, $file: Upload!) {
    singleUploadLocal(doc_id: $doc_id, file: $file) {
      filename
      encoding
      mimetype
      _id
    }
  }
`)),W=Object(r["a"])(j||(j=A`
  mutation signIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
      user_id
      username
      email
      role
    }
  }
`)),K=Object(r["a"])(Q||(Q=A`
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
`)),ee=Object(r["a"])(z||(z=A`
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
`)),te=Object(r["a"])(P||(P=A`
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
`)),ae=Object(r["a"])(U||(U=A`
  mutation($id: String) {
    deleteSpecies(id: $id)
  }
`)),ie=Object(r["a"])(F||(F=A`
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
`))},"813b5":function(e,t,a){},c4e4:function(e,t,a){"use strict";a("813b5")},ffd6:function(e,t){}}]);