(function(e){function a(a){for(var r,t,s=a[0],d=a[1],o=a[2],l=0,c=[];l<s.length;l++)t=s[l],Object.prototype.hasOwnProperty.call(n,t)&&n[t]&&c.push(n[t][0]),n[t]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);p&&p(a);while(c.length)c.shift()();return u.push.apply(u,o||[]),i()}function i(){for(var e,a=0;a<u.length;a++){for(var i=u[a],r=!0,t=1;t<i.length;t++){var s=i[t];0!==n[s]&&(r=!1)}r&&(u.splice(a--,1),e=d(d.s=i[0]))}return e}var r={},t={1:0},n={1:0},u=[];function s(e){return d.p+"js/"+({}[e]||e)+"."+{2:"1fcc1722",3:"a94e0acb",4:"2af3feb8",5:"0a21b778",6:"d5604a40",7:"dd18e71e",8:"2f59e3f9",9:"d981e07a",10:"6fd24c9f"}[e]+".js"}function d(a){if(r[a])return r[a].exports;var i=r[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,d),i.l=!0,i.exports}d.e=function(e){var a=[],i={2:1,3:1};t[e]?a.push(t[e]):0!==t[e]&&i[e]&&a.push(t[e]=new Promise((function(a,i){for(var r="css/"+({}[e]||e)+"."+{2:"35284b31",3:"213f5c77",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",n=d.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var o=u[s],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===r||l===n))return a()}var c=document.getElementsByTagName("style");for(s=0;s<c.length;s++){o=c[s],l=o.getAttribute("data-href");if(l===r||l===n)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var r=a&&a.target&&a.target.src||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete t[e],p.parentNode.removeChild(p),i(u)},p.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){t[e]=0})));var r=n[e];if(0!==r)if(r)a.push(r[2]);else{var u=new Promise((function(a,i){r=n[e]=[a,i]}));a.push(r[2]=u);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=s(e);var c=new Error;o=function(a){l.onerror=l.onload=null,clearTimeout(p);var i=n[e];if(0!==i){if(i){var r=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+t+")",c.name="ChunkLoadError",c.type=r,c.request=t,i[1](c)}n[e]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(a)},d.m=e,d.c=r,d.d=function(e,a,i){d.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,a){if(1&a&&(e=d(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(d.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)d.d(i,r,function(a){return e[a]}.bind(null,r));return i},d.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(a,"a",a),a},d.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},d.p="/",d.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var p=l;u.push([0,0]),i()})({0:function(e,a,i){e.exports=i("2f39")},"034f":function(e,a,i){"use strict";var r=i("ed82"),t=i.n(r);t.a},"2f39":function(e,a,i){"use strict";i.r(a);var r={};i.r(r),i.d(r,"updateTab",(function(){return x}));var t={};i.r(t),i.d(t,"cronometro",(function(){return G})),i.d(t,"tiempoTranscurido",(function(){return q}));var n={};i.r(n),i.d(n,"increaseSegundos",(function(){return Q})),i.d(n,"increaseMinutos",(function(){return _})),i.d(n,"updateSegundos",(function(){return V})),i.d(n,"updateMinutos",(function(){return k})),i.d(n,"updateTimer",(function(){return F})),i.d(n,"clearTimer",(function(){return z}));var u={};i.r(u),i.d(u,"buscarPruebaBandera",(function(){return Y})),i.d(u,"buscarPruebaOpcionMultiple",(function(){return X}));var s={};i.r(s),i.d(s,"updateBanderas",(function(){return Z})),i.d(s,"updateOpcionMultiple",(function(){return K})),i.d(s,"updateBanderasGeneradas",(function(){return W})),i.d(s,"updateMultiplesGeneradas",(function(){return ee})),i.d(s,"insertarBanderasGeneradas",(function(){return ae})),i.d(s,"insertarMultiplesGeneradas",(function(){return ie})),i.d(s,"updateTipoPrueba",(function(){return re})),i.d(s,"updatePruebaGenerada",(function(){return te})),i.d(s,"updateOpciones",(function(){return ne})),i.d(s,"updateResumenFinal",(function(){return ue}));var d={};i.r(d),i.d(d,"loadData",(function(){return oe}));var o={};i.r(o),i.d(o,"updateCorrectas",(function(){return ge})),i.d(o,"updateIncorrectas",(function(){return me})),i.d(o,"updatePasadas",(function(){return be})),i.d(o,"increaseCorrectas",(function(){return Ae})),i.d(o,"increaseIncorrectas",(function(){return he})),i.d(o,"increasePasadas",(function(){return ve}));var l={};i.r(l),i.d(l,"buscarIndice",(function(){return Ie})),i.d(l,"buscarPerfil",(function(){return Ee})),i.d(l,"nivel",(function(){return Ce})),i.d(l,"calculoExpMax",(function(){return Ne})),i.d(l,"calculoBarraExp",(function(){return Oe}));var c={};i.r(c),i.d(c,"updateGenero",(function(){return Me})),i.d(c,"updateNombre",(function(){return Le})),i.d(c,"updateApellido",(function(){return Se})),i.d(c,"updateFecha",(function(){return Re})),i.d(c,"updateFoto",(function(){return Ue})),i.d(c,"updateStep",(function(){return we})),i.d(c,"insertarPerfil",(function(){return xe})),i.d(c,"cargarPerfiles",(function(){return De})),i.d(c,"updatePerfil",(function(){return Te})),i.d(c,"modificarPerfil",(function(){return Be})),i.d(c,"eliminarPerfil",(function(){return Ge})),i.d(c,"increaseExp",(function(){return qe})),i.d(c,"updateExp",(function(){return Qe})),i.d(c,"updateNivel",(function(){return _e})),i.d(c,"increaseCorrectasPerfil",(function(){return Ve})),i.d(c,"increaseIncorrectasPerfil",(function(){return ke})),i.d(c,"increasePasadasPerfil",(function(){return Fe}));var p={};i.r(p),i.d(p,"guardarPerfil",(function(){return ta})),i.d(p,"eliminarPerfil",(function(){return ua})),i.d(p,"cargarPerfiles",(function(){return da})),i.d(p,"buscarPerfil",(function(){return la}));i("e6cf"),i("5319");var f=i("c973"),g=i.n(f),m=(i("573e"),i("7d6e"),i("e54f"),i("4439"),i("4605"),i("f580"),i("5b2b"),i("8753"),i("2967"),i("7e67"),i("d770"),i("dd82"),i("922c"),i("d7fb"),i("a533"),i("c32e"),i("a151"),i("8bc7"),i("e80f"),i("5fec"),i("e42f"),i("57fc"),i("d67f"),i("880e"),i("1c10"),i("9482"),i("e797"),i("4848"),i("53d0"),i("63b1"),i("e9fd"),i("195c"),i("64e9"),i("33c5"),i("4f62"),i("0dbc"),i("7c38"),i("0756"),i("4953"),i("81db"),i("2e52"),i("22485"),i("7797"),i("12a1"),i("ce96"),i("70ca"),i("2318"),i("24bd"),i("8f27"),i("3064"),i("c9a2"),i("8767"),i("4a8e"),i("b828"),i("3c1c"),i("21cb"),i("c00e"),i("e4a8"),i("e4d3"),i("f4d9"),i("fffd"),i("f645"),i("639e"),i("34ee"),i("b794"),i("af24"),i("7c9c"),i("7bb2"),i("64f7"),i("c382"),i("053c"),i("c48f"),i("f5d1"),i("3cec"),i("c00ee"),i("d450"),i("ca07"),i("14e3"),i("9393"),i("9227"),i("1dba"),i("674a"),i("de26"),i("6721"),i("9cb5"),i("ed9b"),i("fc83"),i("98e5"),i("605a"),i("ba60"),i("df07"),i("7903"),i("e046"),i("58af"),i("7713"),i("0571"),i("3e27"),i("6837"),i("3fc9"),i("0693"),i("bf41"),i("0ca9"),i("5b0d"),i("2b0e")),b=i("df1a"),A=i("42d2"),h=i("b05d"),v=i("2a19"),j=i("18d6");m["a"].use(h["a"],{config:{},lang:b["a"],iconSet:A["a"],plugins:{Notify:v["a"],LocalStorage:j["a"]}});var P=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{attrs:{id:"q-app"}},[i("router-view")],1)},y=[],I=i("ded3"),E=i.n(I),C=i("2f62"),N={watch:{perfil:{deep:!0,immediate:!0,handler(e){var a=this;return g()((function*(){if(e.exp>=a.calculoExpMax){a.updateExp(a.perfil.exp-a.calculoExpMax),a.updateNivel();try{yield a.$db.local.rel.save("perfil",e),a.$q.localStorage.set("perfil",e)}catch(i){console.log("no se pudo guardar el perfil: "+i)}}}))()}},"perfil.exp":{handler(){var e=this;return g()((function*(){try{yield e.$db.local.rel.save("perfil",e.perfil),e.$q.localStorage.set("perfil",e.perfil)}catch(a){console.log("no se pudo guardar el perfil: "+a)}}))()}},"perfil.estadisticas":{deep:!0,handler(){var e=this;return g()((function*(){try{yield e.$db.local.rel.save("perfil",e.perfil),e.$q.localStorage.set("perfil",e.perfil)}catch(a){console.log("no se pudo guardar el perfil: "+a)}}))()}}},computed:E()(E()({},Object(C["d"])("perfiles",["perfil"])),Object(C["b"])("perfiles",["calculoExpMax"])),methods:E()({},Object(C["c"])("perfiles",["updateNivel","updateExp"]))},O={name:"App",mixins:[N]},M=O,L=(i("034f"),i("2877")),S=Object(L["a"])(M,P,y,!1,null,null,null),R=S.exports,U=function(){return{tab:"basico"}},w=i("e839");function x(e,a){e.tab=a}var D=i("d2d4"),T={namespaced:!0,getters:w,mutations:r,actions:D,state:U},B=function(){return{segundos:0,minutos:0,timer:null}};function G(e){let a,i;return a=e.minutos<10?"0"+e.minutos:e.minutos,i=e.segundos<10?"0"+e.segundos:e.segundos,a+":"+i}function q(e){return 60*e.minutos+e.segundos}function Q(e){e.segundos++}function _(e){e.minutos++}function V(e,a){e.segundos=a}function k(e,a){e.minutos=a}function F(e,a){e.timer=a}function z(e){clearInterval(e.timer)}var H=i("d618"),J={namespaced:!0,state:B,getters:t,mutations:n,actions:H},$=function(){return{banderas:[],opcionMultiple:[],banderasGeneradas:[],multiplesGeneradas:[],tipoPrueba:null,pruebaGenerada:null,opciones:null,resumenFinal:!1}};const Y=e=>a=>e.banderas.find(e=>e.id===a),X=e=>a=>e.opcionMultiple.find(e=>e.id===a);function Z(e,a){e.banderas=a}function K(e,a){e.opcionMultiple=a}function W(e,a){e.banderasGeneradas=a}function ee(e,a){e.multiplesGeneradas=a}function ae(e,a){e.banderasGeneradas.push(a)}function ie(e,a){e.multiplesGeneradas.push(a)}function re(e,a){e.tipoPrueba=a}function te(e,a){e.pruebaGenerada=a}function ne(e,a){e.opciones=a}function ue(e){e.resumenFinal=!e.resumenFinal}var se=i("6345"),de=i("feda");function oe(e){return le.apply(this,arguments)}function le(){return le=g()((function*({commit:e}){e("updateBanderas",se),e("updateOpcionMultiple",de)})),le.apply(this,arguments)}var ce={namespaced:!0,state:$,getters:u,mutations:s,actions:d},pe=function(){return{correctas:0,incorrectas:0,pasadas:0}},fe=i("fa5f");function ge(e,a){e.correctas=a}function me(e,a){e.incorrectas=a}function be(e,a){e.pasadas=a}function Ae(e){e.correctas++}function he(e){e.incorrectas++}function ve(e){e.pasadas++}var je=i("b6c1"),Pe={namespaced:!0,state:pe,getters:fe,mutations:o,actions:je},ye=function(){return{perfiles:[],perfil:null,genero:"",nombre:"",apellido:"",fecha:"",foto:null,step:1}};const Ie=e=>a=>e.perfiles.findIndex(e=>e.id===a),Ee=e=>a=>e.perfiles.find(e=>e.id===a);function Ce(e){return e.perfil?e.perfil.exp<100?0:Math.ceil((Math.log(e.perfil.exp)-Math.log(100))/Math.log(1.15)):0}function Ne(e,a){return e.perfil?Math.ceil(100*Math.pow(1.15,e.perfil.nivel)):0}function Oe(e,a){return e.perfil?Math.ceil(100*e.perfil.exp/a.calculoExpMax):0}i("a434");function Me(e,a){e.genero=a}function Le(e,a){e.nombre=a}function Se(e,a){e.apellido=a}function Re(e,a){e.fecha=a}function Ue(e,a){e.foto=a}function we(e,a){e.step=a}function xe(e,a){e.perfiles.push(a)}function De(e,a){e.perfiles=a}function Te(e,a){e.perfil=a}function Be(e,a){e.perfiles[a.indice].nombre=a.perfil.nombre,e.perfiles[a.indice].apellido=a.perfil.apellido,e.perfiles[a.indice].fecha=a.perfil.fecha,e.perfiles[a.indice].foto=a.perfil.foto,e.perfiles[a.indice].nivel=a.perfil.nivel,e.perfiles[a.indice].exp=a.perfil.exp,e.perfiles[a.indice].genero=a.perfil.genero,e.perfiles[a.indice].img=a.perfil.img,e.perfiles[a.indice].foto=a.perfil.foto,e.perfiles[a.indice].rev=a.perfil.rev}function Ge(e,a){e.perfiles.splice(a,1)}function qe(e,a){e.perfil.exp+=a}function Qe(e,a){e.perfil.exp=a}function _e(e){e.perfil.nivel++}function Ve(e,a){switch(a){case 0:e.perfil.estadisticas.basico.correctas++;break;case 1:e.perfil.estadisticas.intermedio.correctas++;break;case 1:e.perfil.estadisticas.avanzada.correctas++;break}}function ke(e,a){switch(a){case 0:e.perfil.estadisticas.basico.incorrectas++;break;case 1:e.perfil.estadisticas.intermedio.incorrectas++;break;case 1:e.perfil.estadisticas.avanzada.incorrectas++;break}}function Fe(e,a){switch(a){case 0:e.perfil.estadisticas.basico.pasadas++;break;case 1:e.perfil.estadisticas.intermedio.pasadas++;break;case 1:e.perfil.estadisticas.avanzada.pasadas++;break}}i("ddb0"),i("2b3d");var ze=i("9523"),He=i.n(ze),Je=i("16b2"),$e=i("0b77"),Ye=i("5d16");Je["a"].plugin($e["a"]),Je["a"].plugin(Ye["a"]);var Xe=Je["a"];const Ze=[{singular:"perfil",plural:"perfiles"}];var Ke=Ze,We=function(e,a){let i=void 0!==a?new Xe(e,a):new Xe(e);return i.setSchema(Ke),i};class ea{constructor(){He()(this,"local",void 0),He()(this,"syncHandler",void 0)}configure({onchange:e}){var a=this;return g()((function*(){a.local=We("learn_n_play_db"),a.local.changes({since:"now",live:!0,include_docs:!0}).on("change",e)}))()}}let aa={perfil:{name:"perfiles",eliminar:"perfiles/eliminarPerfil",guardar:"perfiles/guardarPerfil"}};const ia=new ea;var ra=function(){var e=g()((function*({Vue:e,store:a}){yield ia.configure({onchange(e){let{data:i,_id:r,_rev:t,_deleted:n}=e.doc,u=ia.local.rel.parseDocID(r),s=aa[u.type];n?s&&a.dispatch(s.eliminar,u.id):(i.id=u.id,i.rev=t,s&&a.dispatch(s.guardar,i))}}),e.prototype.$db=ia}));return function(a){return e.apply(this,arguments)}}();function ta(e,a){return na.apply(this,arguments)}function na(){return na=g()((function*({commit:e,getters:a},i){const r=a.buscarIndice(i.id);if(r>=0){const a={indice:r,perfil:i};e("modificarPerfil",a)}else e("insertarPerfil",i)})),na.apply(this,arguments)}function ua(e,a){return sa.apply(this,arguments)}function sa(){return sa=g()((function*({commit:e,getters:a},i){const r=a.buscarIndice(i);r>=0?e("eliminarPerfil",r):alert("no se encuentra el indice "+i)})),sa.apply(this,arguments)}function da(e){return oa.apply(this,arguments)}function oa(){return oa=g()((function*({commit:e}){try{const i=yield ia.local.rel.find("perfil");for(var a=0;a<i.perfiles.length;a++)i.perfiles[a].foto&&(i.perfiles[a].img=URL.createObjectURL(yield ia.local.rel.getAttachment("perfil",i.perfiles[a].id,"file")));i&&e("cargarPerfiles",i.perfiles)}catch(i){alert("error al cargar los perfiles 101: "+i)}})),oa.apply(this,arguments)}function la(e,a){return ca.apply(this,arguments)}function ca(){return ca=g()((function*({commit:e},a){try{const i=yield ia.local.rel.find("perfil",a);return!!i.perfiles[0]&&(e("updatePerfil",i.perfiles[0]),i.perfiles[0])}catch(i){return alert("error al buscar el perfil 101: "+i),!1}})),ca.apply(this,arguments)}var pa={namespaced:!0,state:ye,getters:l,mutations:c,actions:p};m["a"].use(C["a"]);var fa=function(){const e=new C["a"].Store({modules:{global:T,cronometro:J,play:ce,puntaje:Pe,perfiles:pa},strict:!1});return e},ga=i("8c4f");const ma=[{path:"/",component:()=>Promise.all([i.e(0),i.e(7)]).then(i.bind(null,"713b")),children:[{path:"",name:"Inicio",component:()=>Promise.all([i.e(0),i.e(3)]).then(i.bind(null,"92b5"))}]},{path:"/play",component:()=>Promise.all([i.e(0),i.e(6)]).then(i.bind(null,"0c62")),children:[{path:"",name:"Play",component:()=>Promise.all([i.e(0),i.e(2)]).then(i.bind(null,"e90e"))}]},{path:"/perfiles",component:()=>Promise.all([i.e(0),i.e(4)]).then(i.bind(null,"5170")),children:[{path:"",name:"Perfiles",component:()=>Promise.all([i.e(0),i.e(10)]).then(i.bind(null,"725f"))}]},{path:"/crear-perfil",component:()=>Promise.all([i.e(0),i.e(5)]).then(i.bind(null,"f798")),children:[{path:"",name:"CrearPerfil",component:()=>Promise.all([i.e(0),i.e(8)]).then(i.bind(null,"2718"))}]},{path:"*",component:()=>Promise.all([i.e(0),i.e(9)]).then(i.bind(null,"e51e"))}];var ba=ma;m["a"].use(ga["a"]);var Aa=function(){const e=new ga["a"]({scrollBehavior:()=>({x:0,y:0}),routes:ba,mode:"history",base:"/"});return e},ha=function(){return va.apply(this,arguments)};function va(){return va=g()((function*(){const e="function"===typeof fa?yield fa({Vue:m["a"]}):fa,a="function"===typeof Aa?yield Aa({Vue:m["a"],store:e}):Aa;e.$router=a;const i={router:a,store:e,render:e=>e(R),el:"#q-app"};return{app:i,store:e,router:a}})),va.apply(this,arguments)}var ja=i("9483");Object(ja["a"])("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var Pa=i("f508"),ya=function(){var e=g()((function*({store:e,Vue:a}){Pa["a"].show({message:"Cargando Informacion... Por favor espere."}),yield e.dispatch("play/loadData"),yield e.dispatch("perfiles/cargarPerfiles"),Pa["a"].hide()}));return function(a){return e.apply(this,arguments)}}(),Ia=({store:e})=>{let a=j["a"].getItem("perfil");if(a){let i=e.getters["perfiles/buscarPerfil"](a.id);i&&e.commit("perfiles/updatePerfil",i)}},Ea=({router:e,store:a,Vue:i})=>{e.beforeEach((e,i,r)=>{const t=a.state.perfiles.perfil;"Perfiles"===e.name||"CrearPerfil"===e.name||t?r():r({name:"Perfiles"})})};/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&i.e(0).then(i.t.bind(null,"a0db",7));const Ca="/";function Na(){return Oa.apply(this,arguments)}function Oa(){return Oa=g()((function*(){const{app:e,store:a,router:i}=yield ha();let r=!1;const t=e=>{r=!0;const a=Object(e)===e?i.resolve(e).route.fullPath:e;window.location.href=a},n=window.location.href.replace(window.location.origin,""),u=[ra,ya,Ia,Ea];for(let d=0;!1===r&&d<u.length;d++)if("function"===typeof u[d])try{yield u[d]({app:e,router:i,store:a,Vue:m["a"],ssrContext:null,redirect:t,urlPath:n,publicPath:Ca})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==r&&new m["a"](e)})),Oa.apply(this,arguments)}Na()},"5b0d":function(e,a,i){},6345:function(e){e.exports=JSON.parse('[{"dificultad":0,"id":1,"respuesta":"ARGENTINA","url":"america/argentina.jpg"},{"dificultad":0,"id":2,"respuesta":"BRASIL","url":"america/brasil.jpg"},{"dificultad":0,"id":3,"respuesta":"BOLIVIA","url":"america/bolivia.jpg"},{"dificultad":0,"id":4,"respuesta":"CANADA","url":"america/canada.jpg"},{"dificultad":0,"id":5,"respuesta":"CHILE","url":"america/chile.jpg"},{"dificultad":0,"id":6,"respuesta":"VENEZUELA","url":"america/venezuela.jpg"},{"dificultad":0,"id":7,"respuesta":"COLOMBIA","url":"america/colombia.jpg"},{"dificultad":0,"id":8,"respuesta":"ECUADOR","url":"america/ecuador.jpg"},{"dificultad":0,"id":9,"respuesta":"ESTADOS UNIDOS","url":"america/eeuu.jpg"},{"dificultad":0,"id":10,"respuesta":"MEXICO","url":"america/mexico.jpg"},{"dificultad":0,"id":11,"respuesta":"PERU","url":"america/peru.jpg"},{"dificultad":0,"id":12,"respuesta":"URUGUAY","url":"america/uruguay.jpg"},{"dificultad":0,"id":13,"respuesta":"CHINA","url":"asia/china.jpg"},{"dificultad":0,"id":14,"respuesta":"JAPON","url":"asia/japon.jpg"},{"dificultad":0,"id":15,"respuesta":"ALEMANIA","url":"europa/alemania.jpg"},{"dificultad":0,"id":16,"respuesta":"ESPAÑA","url":"europa/españa.jpg"},{"dificultad":0,"id":17,"respuesta":"ITALIA","url":"europa/italia.jpg"},{"dificultad":0,"id":18,"respuesta":"PORTUGAL","url":"europa/portugal.jpg"},{"dificultad":0,"id":19,"respuesta":"REINO UNIDO","url":"europa/reino unido.jpg"},{"dificultad":0,"id":20,"respuesta":"RUSIA","url":"europa/rusia.jpg"},{"dificultad":0,"id":21,"respuesta":"CUBA","url":"america/cuba.jpg"},{"dificultad":0,"id":22,"respuesta":"GUATEMALA","url":"america/guatemala.jpg"},{"dificultad":0,"id":23,"respuesta":"PANAMA","url":"america/panama.jpg"},{"dificultad":0,"id":24,"respuesta":"PARAGUAY","url":"america/paraguay.jpg"},{"dificultad":0,"id":25,"respuesta":"REPUBLICA DOMINICANA","url":"america/republica-dominicana.jpg"},{"dificultad":0,"id":26,"respuesta":"MALTA","url":"europa/malta.jpg"},{"dificultad":0,"id":27,"respuesta":"HONDURAS","url":"america/honduras.jpg"},{"dificultad":0,"id":28,"respuesta":"NICARAGUA","url":"america/nicaragua.jpg"},{"dificultad":1,"id":29,"respuesta":"COREA DEL SUR","url":"asia/corea-sur.jpg"},{"dificultad":1,"id":30,"respuesta":"INDIA","url":"asia/india.jpg"},{"dificultad":1,"id":31,"respuesta":"FILIPINAS","url":"asia/filipinas.jpg"},{"dificultad":1,"id":32,"respuesta":"INDONESIA","url":"asia/indonesia.jpg"},{"dificultad":1,"id":33,"respuesta":"MALasia","url":"asia/malasia.jpg"},{"dificultad":1,"id":34,"respuesta":"SINGAPUR","url":"asia/singapur.jpg"},{"dificultad":1,"id":35,"respuesta":"SIRIA","url":"asia/siria.jpg"},{"dificultad":1,"id":36,"respuesta":"TAILANDIA","url":"asia/tailandia.jpg"},{"dificultad":1,"id":37,"respuesta":"VIETNAM","url":"asia/vietnam.jpg"},{"dificultad":1,"id":38,"respuesta":"ANDORRA","url":"europa/andorra.jpg"},{"dificultad":1,"id":39,"respuesta":"AUSTRIA","url":"europa/austria.jpg"},{"dificultad":1,"id":40,"respuesta":"BELGICA","url":"europa/belgica.jpg"},{"dificultad":1,"id":41,"respuesta":"BULGARIA","url":"europa/bulgaria.jpg"},{"dificultad":1,"id":42,"respuesta":"CROACIA","url":"europa/croacia.jpg"},{"dificultad":1,"id":43,"respuesta":"DINAMARCA","url":"europa/dinamarca.jpg"},{"dificultad":1,"id":44,"respuesta":"ESLOVAQUIA","url":"europa/eslovaquia.jpg"},{"dificultad":1,"id":45,"respuesta":"ESLOVENIA","url":"europa/eslovenia.jpg"},{"dificultad":1,"id":46,"respuesta":"FINLANDIA","url":"europa/finlandia.jpg"},{"dificultad":1,"id":47,"respuesta":"GRECIA","url":"europa/grecia.jpg"},{"dificultad":1,"id":48,"respuesta":"HUNGRIA","url":"europa/hungria.jpg"},{"dificultad":1,"id":49,"respuesta":"IRLANDA","url":"europa/irlanda.jpg"},{"dificultad":1,"id":50,"respuesta":"ISLANDIA","url":"europa/islandia.jpg"},{"dificultad":1,"id":51,"respuesta":"PAISES BAJOS","url":"europa/paises-bajos.jpg"},{"dificultad":1,"id":52,"respuesta":"REPUBLICA CHECA","url":"europa/republica-checa.jpg"},{"dificultad":1,"id":53,"respuesta":"GUYANA","url":"america/guyana.jpg"},{"dificultad":1,"id":54,"respuesta":"SURINAM","url":"america/surinam.jpg"},{"dificultad":1,"id":55,"respuesta":"EL SALVADOR","url":"america/el-salvador.jpg"},{"dificultad":1,"id":56,"respuesta":"JAMAICA","url":"america/jamaica.jpg"},{"dificultad":2,"id":57,"respuesta":"COREA DEL NORTE","url":"asia/corea-norte.jpg"},{"dificultad":2,"id":58,"respuesta":"IRAK","url":"asia/irak.jpg"},{"dificultad":2,"id":59,"respuesta":"IRAN","url":"asia/iran.jpg"},{"dificultad":2,"id":60,"respuesta":"ISRAEL","url":"asia/israel.jpg"},{"dificultad":2,"id":61,"respuesta":"JORDANIA","url":"asia/jordania.jpg"},{"dificultad":2,"id":62,"respuesta":"LIBANO","url":"asia/libano.jpg"},{"dificultad":2,"id":63,"respuesta":"MALDIVAS","url":"asia/maldivas.jpg"},{"dificultad":2,"id":64,"respuesta":"MONGOLIA","url":"asia/mongolia.jpg"},{"dificultad":2,"id":65,"respuesta":"ALBANIA","url":"europa/albania.jpg"},{"dificultad":2,"id":66,"respuesta":"BIELORRUSIA","url":"europa/bielorrusia.jpg"},{"dificultad":2,"id":67,"respuesta":"ESTONIA","url":"europa/estonia.jpg"},{"dificultad":2,"id":68,"respuesta":"LETONIA","url":"europa/letonia.jpg"},{"dificultad":2,"id":69,"respuesta":"LITUANIA","url":"europa/lituania.jpg"},{"dificultad":2,"id":70,"respuesta":"MOLDAVIA","url":"europa/moldavia.jpg"},{"dificultad":2,"id":71,"respuesta":"NORUEGA","url":"europa/noruega.jpg"},{"dificultad":2,"id":72,"respuesta":"POLONIA","url":"europa/polonia.jpg"},{"dificultad":2,"id":73,"respuesta":"RUMANIA","url":"europa/rumania.jpg"},{"dificultad":2,"id":74,"respuesta":"SERBIA","url":"europa/serbia.jpg"},{"dificultad":2,"id":75,"respuesta":"SUECIA","url":"europa/suecia.jpg"},{"dificultad":2,"id":76,"respuesta":"SUIZA","url":"europa/suiza.jpg"},{"dificultad":2,"id":77,"respuesta":"TURQUIA","url":"europa/turquia.jpg"},{"dificultad":2,"id":78,"respuesta":"UCRANIA","url":"europa/ucrania.jpg"},{"dificultad":2,"id":79,"respuesta":"BAHAMAS","url":"america/bahamas.jpg"},{"dificultad":2,"id":80,"respuesta":"BARBADOS","url":"america/barbados.jpg"},{"dificultad":2,"id":81,"respuesta":"HAITI","url":"america/haiti.jpg"},{"dificultad":2,"id":82,"respuesta":"DOMINICA","url":"america/dominica.jpg"},{"dificultad":2,"id":83,"respuesta":"COSTA RICA","url":"america/costa-rica.jpg"}]')},b6c1:function(e,a){},d2d4:function(e,a){},d618:function(e,a){},e839:function(e,a){},ed82:function(e,a,i){},fa5f:function(e,a){},feda:function(e){e.exports=JSON.parse('[{"a":"15 minutos","b":"30 minutos","c":"60 minutos","d":"120 minutos","dificultad":0,"id":1,"pregunta":"¿Cuántos minutos tiene una hora?","respuesta":"60 minutos"},{"a":"Monagas","b":"Miranda","c":"Zulia","d":"Caracas","dificultad":0,"id":2,"pregunta":"¿Cuál es la capital de Venezuela?","respuesta":"Caracas"},{"a":"4","b":"10","c":"6","d":"8","dificultad":0,"id":3,"pregunta":"¿Cuántas patas tiene una araña?","respuesta":"8"},{"a":"Español","b":"Portugués","c":"Inglés","d":"Brasileño","dificultad":0,"id":4,"pregunta":"Idioma hablado en Brasil","respuesta":"Portugués"},{"a":"Proverbio","b":"Adjetivo","c":"Adverbio","d":"Pronombre","dificultad":0,"id":5,"pregunta":"¿Qué tipo de palabra es “aquí”?","respuesta":"Adverbio"},{"a":"Groenlandia","b":"Asia","c":"América","d":"Europa","dificultad":0,"id":6,"pregunta":"¿Cuál de estos no es un continente?","respuesta":"Groenlandia"},{"a":"India","b":"China","c":"Rusia","d":"Australia","dificultad":0,"id":7,"pregunta":"¿Cuál es el país con mayor población del mundo?","respuesta":"China"},{"a":"Palabra","b":"Pelota","c":"Estrella","d":"Señal","dificultad":0,"id":8,"pregunta":"Completa la frase: “el sol es la  ______ más grande”","respuesta":"Estrella"},{"a":"4 sílabas","b":"6 sílabas","c":"7 sílabas","d":"5 sílabas","dificultad":0,"id":9,"pregunta":"¿Cuántas sílabas tiene la palabra abecedario?","respuesta":"5 sílabas"},{"a":"-a","b":"-ma","c":"-ne","d":"-cer","dificultad":0,"id":10,"pregunta":"¿Sílaba tónica de la palabra amanecer?","respuesta":"-cer"},{"a":"Marte","b":"Júpiter","c":"Saturno","d":"Urano","dificultad":0,"id":11,"pregunta":"¿5to planeta del sistema solar?","respuesta":"Júpiter"},{"a":"Roma","b":"El Vaticano","c":"Viena","d":"Venecia","dificultad":0,"id":12,"pregunta":"¿Cuál es la capital de Italia?","respuesta":"Roma"},{"a":"Una película","b":"Una canción","c":"Una flor","d":"Un premio","dificultad":0,"id":13,"pregunta":"¿Qué es una orquídea?","respuesta":"Una flor"},{"a":"365","b":"364","c":"367","d":"366","dificultad":0,"id":14,"pregunta":"¿Cuántos días tiene un año bisiesto?","respuesta":"366"},{"a":"El León","b":"El Oso","c":"El Tigre","d":"El Mono","dificultad":0,"id":15,"pregunta":"¿Quién se dice que es el rey de la selva?","respuesta":"El León"},{"a":"Norte","b":"Sur","c":"Este","d":"Oeste","dificultad":0,"id":16,"pregunta":"¿Por dónde sale el sol?","respuesta":"Este"},{"a":"Por 4","b":"Por  3","c":"Por 7","d":"Por 6","dificultad":0,"id":17,"pregunta":"¿Por cuánto hay que multiplicar 6 para tener 36?","respuesta":"Por 6"},{"a":"24","b":"12","c":"23","d":"21","dificultad":0,"id":18,"pregunta":"¿Cuántas unidades hay en dos docenas?","respuesta":"24"},{"a":"3 lados","b":"5 lados","c":"9 lados","d":"4 lados","dificultad":0,"id":19,"pregunta":"¿Cuántos lados tiene un pentágono?","respuesta":"5 lados"},{"a":"a","b":"e","c":"o","d":"Todas son vocales","dificultad":0,"id":20,"pregunta":"¿Cuál no es una vocal?","respuesta":"Todas son vocales"},{"a":"Nilo","b":"Amazonas","c":"Misisipi","d":"Orinoco","dificultad":1,"id":21,"pregunta":"¿Cuál es el río más caudaloso del mundo?","respuesta":"Amazonas"},{"a":"Faraona de Egipto","b":"Ganadora de un premio nobel","c":"Cantante","d":"Inventora","dificultad":1,"id":22,"pregunta":"¿Quién fue Cleopatra?","respuesta":"Faraona de Egipto"},{"a":"10 años","b":"5 años","c":"4 años","d":"100 años","dificultad":1,"id":23,"pregunta":"¿Cada cuántos años tenemos un año bisiesto?","respuesta":"4 años"},{"a":"Venus","b":"Júpiter","c":"La Luna","d":"Mercurio","dificultad":1,"id":24,"pregunta":"¿Qué planeta es el más cercano al Sol?","respuesta":"Mercurio"},{"a":"Pico Bolívar","b":"Sierra","c":"Everest","d":"El Ávila","dificultad":1,"id":25,"pregunta":"¿Cuál es la montaña más alta en la actualidad?","respuesta":"Everest"},{"a":"2019","b":"2109","c":"1919","d":"2009","dificultad":1,"id":26,"pregunta":"¿El número romano MMXIX significa?","respuesta":"2019"},{"a":"100° grados","b":"0° grados","c":"-12° grados","d":"2500° grados","dificultad":1,"id":27,"pregunta":"¿A qué temperatura se congela el agua?","respuesta":"0° grados"},{"a":"Forma distinta, Igual significado","b":"Forma distinta, Distinto significado","c":"Igual forma, Distinto significado","d":"Igual forma, Igual significado","dificultad":1,"id":28,"pregunta":"¿Qué significa que dos palabras sean sinónimos?","respuesta":"Forma distinta, Igual significado"},{"a":"Cuerdas","b":"Aire","c":"Percusión","d":"Ninguno","dificultad":1,"id":29,"pregunta":"¿Qué tipo de instrumento es un piano?","respuesta":"Percusión"},{"a":"La Niña y la Pinta","b":"La niña, la Pinta y la Santa María","c":"El Holandés Errante y el Perla Negra","d":"Todos los anteriores","dificultad":1,"id":30,"pregunta":"Cristóbal Colón vino con los barcos…","respuesta":"La Niña, la Pinta y la Santa María"},{"a":"Esdrújula","b":"Cómputo","c":"Lápiz","d":"Parámetro","dificultad":1,"id":31,"pregunta":"¿Cuál palabra NO es esdrújula?","respuesta":"Lápiz"},{"a":"10000","b":"0.001","c":"1000","d":"100","dificultad":1,"id":32,"pregunta":"¿Cuántos kilos son una tonelada?","respuesta":"1000"},{"a":"Roma","b":"París","c":"Caracas","d":"Maracay","dificultad":1,"id":33,"pregunta":"¿En qué ciudad se encuentra el museo del Louvre?","respuesta":"París"},{"a":"Que ciento volando","b":"Que riendo","c":"Que en jaula","d":"Que ninguno suelto","dificultad":1,"id":34,"pregunta":"Termina el refrán: Más vale pájaro en mano…","respuesta":"Que ciento volando"},{"a":"Cantante","b":"Pintor","c":"Astronauta","d":"Minero","dificultad":1,"id":35,"pregunta":"Pablo Picasso era…","respuesta":"Pintor"},{"a":"7 sentidos","b":"8 sentidos","c":"5 sentidos","d":"6 sentidos","dificultad":1,"id":36,"pregunta":"¿Cuántos sentidos tenemos los seres humanos?","respuesta":"5 sentidos"},{"a":"Descubrir América","b":"Pisar la luna","c":"Caminar sobre el agua","d":"Descubrir la electricidad","dificultad":1,"id":37,"pregunta":"¿Por qué se hizo famoso Cristóbal Colón?","respuesta":"Descubrir América"},{"a":"Blue","b":"Red","c":"Yellow","d":"Black","dificultad":1,"id":38,"pregunta":"¿Cómo se dice en inglés “amarillo”?","respuesta":"Yellow"},{"a":"Brillante","b":"Oscuro","c":"Opaco","d":"Ninguno","dificultad":1,"id":39,"pregunta":"¿Cuál es el antónimo de “Claro”?","respuesta":"Oscuro"},{"a":"Urales","b":"Los Andes","c":"El Himalaya","d":"Todos","dificultad":1,"id":40,"pregunta":"¿Qué cordillera montañosa separa Europa de Asia?","respuesta":"Urales"},{"a":"Tibia y Peroné","b":"Cúbito y Radio","c":"Húmero y Fémur","d":"Martillo, Yunque y Estribo","dificultad":2,"id":41,"pregunta":"¿Qué huesos encontramos en el antebrazo?","respuesta":"Cúbito y Radio"},{"a":"Don Quijote de la Mancha","b":"Atila el Huno","c":"Dave el Bárbaro","d":"Cristobal Colón","dificultad":2,"id":42,"pregunta":"¿Personaje más conocido de Miguel de Cervantes?","respuesta":"Don Quijote de la Mancha"},{"a":"1","b":"12","c":"2","d":"Ninguno","dificultad":2,"id":43,"pregunta":"¿Cuántos meses tienen 28 días?","respuesta":"12"},{"a":"Unidad de tiempo","b":"Una herramienta","c":"Un animal","d":"Ninguno","dificultad":2,"id":44,"pregunta":"¿Qué es un siglo?","respuesta":"Unidad de tiempo"},{"a":"Barcelona","b":"Caracas","c":"París","d":"Los Teques","dificultad":2,"id":45,"pregunta":"¿En qué ciudad se encuentra la Torre Eiffel?","respuesta":"París"},{"a":"2 lados iguales","b":"Todos iguales","c":"3 lados iguales","d":"Ningún lado igual","dificultad":2,"id":46,"pregunta":"Un triángulo Isósceles tiene…","respuesta":"2 lados iguales"},{"a":"Gas, metal y aire","b":"Agua, hierro y tierra","c":"Sólido, líquido y gas","d":"Fuego, rayo y viento","dificultad":2,"id":47,"pregunta":"¿Estados básicos de la materia?","respuesta":"Sólido, Líquido y Gas"},{"a":"2 tiempos","b":"3 tiempos","c":"No existe","d":"1 tiempo","dificultad":2,"id":48,"pregunta":"En música, ¿A cuántos tiempos equivale una blanca?","respuesta":"2 tiempos"},{"a":"360°","b":"270°","c":"180°","d":"Ninguno","dificultad":2,"id":49,"pregunta":"¿Cuánto suman los ángulos de un triángulo?","respuesta":"180°"},{"a":"20","b":"12","c":"12.5","d":"5","dificultad":2,"id":50,"pregunta":"¿Cuánto es el 25% de 25?","respuesta":"5"},{"a":"Número que contenga el 1","b":"Número divisible entre 2","c":"Número divisible entre sí mismo y 1","d":"Todas las anteriores","dificultad":2,"id":51,"pregunta":"¿Qué es un número primo?","respuesta":"Número divisible entre sí mismo y 1"},{"a":"Leonardo Di Caprio","b":"Di Estefano","c":"Leonardo Da Vinci","d":"Miguel Ángel","dificultad":2,"id":52,"pregunta":"¿Quién pintó la Mona Lisa?","respuesta":"Leonardo Da Vinci"},{"a":"La música","b":"El teatro","c":"La pintura","d":"La ciencia","dificultad":2,"id":53,"pregunta":"Mozart era un genio del mundo de…","respuesta":"La música"},{"a":"No pueden escribir","b":"Sensoria","c":"Puntero","d":"Braille","dificultad":2,"id":54,"pregunta":"¿Cómo se llama la escritura utilizada por personas ciegas?","respuesta":"Braille"},{"a":"Índico","b":"Pacífico","c":"Atlántico","d":"Antártico","dificultad":2,"id":55,"pregunta":"¿Qué océano es el más grande?","respuesta":"Pacífico"},{"a":"Solo 2 lados","b":"Ninguno","c":"3 lados","d":"4 lados","dificultad":2,"id":56,"pregunta":"¿Un triángulo equilátero tiene cuántos lados iguales?","respuesta":"3 lados"},{"a":"China","b":"Europa","c":"África","d":"Asia","dificultad":2,"id":57,"pregunta":"¿Qué continente es el más poblado?","respuesta":"Asia"},{"a":"Adjetivo","b":"Nombre","c":"Verbo","d":"Artículo","dificultad":2,"id":58,"pregunta":"¿La palabra “bonito” es un…?","respuesta":"Adjetivo"},{"a":"Traslación","b":"Rotación","c":"No se mueve","d":"Todos los anteriores","dificultad":2,"id":59,"pregunta":"Movimiento de la tierra sobre su eje","respuesta":"Rotación"},{"a":"Neil Armstrong","b":"Van Goh","c":"Bill Gates","d":"Bill Murray","dificultad":2,"id":60,"pregunta":"¿Quién pisó la luna por primera vez?","respuesta":"Neil Armstrong"}]')}});