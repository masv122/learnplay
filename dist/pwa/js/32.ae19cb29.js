(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"725f":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("lista-perfiles")],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-list",[e._l(e.perfiles,(function(t,r){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,staticClass:"q-my-sm",attrs:{clickable:"",to:{name:"Inicio"}},on:{click:function(t){return e.setLocalData(r)}}},[a("q-item-section",{attrs:{avatar:""}},[t.fotoPerfil?a("q-avatar",[a("img",{attrs:{src:t.fotoPerfil.foto}})]):a("q-avatar",{attrs:{size:"xl",color:"primary","text-color":"white",icon:"perm_identity"}},[a("q-badge",{attrs:{floating:"",color:"green"}},[e._v(e._s(t.nivel))])],1)],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.nombre))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v("Tiempo jugado: "+e._s(t.tiempo))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v("Logros: "+e._s(t.logros.length))]),a("q-separator",{attrs:{spaced:""}})],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"play_arrow",color:"teal"}})],1)],1)})),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-my-sm q-pl-lg",attrs:{to:{name:"CrearPerfil"},clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"add",color:"primary"}})],1),a("q-item-section",[a("q-item-label",[e._v("Crear perfil")])],1)],1)],2)},s=[],n=a("c973"),o=a.n(n),c=a("ded3"),p=a.n(c),m=a("2f62"),f={name:"ListaPerfiles",data(){return{}},computed:p()({},Object(m["e"])("perfiles",["perfiles"])),methods:p()(p()({},Object(m["d"])("perfiles",["updatePerfil"])),{},{setLocalData(e){var t=this;return o()((function*(){try{let a=t.perfiles[e];yield t.$q.localStorage.set("perfil",a),t.updatePerfil(a),t.$router.push({name:"Inicio"})}catch(a){alert("ha ocurrido un error al ingresar: "+a)}}))()}})},u=f,d=a("2877"),q=a("1c1c"),v=a("66e5"),b=a("4074"),g=a("cb32"),_=a("58a81"),h=a("0170"),w=a("eb85"),y=a("0016"),P=a("714f"),Q=a("eebe"),L=a.n(Q),k=Object(d["a"])(u,l,s,!1,null,null,null),I=k.exports;L()(k,"components",{QList:q["a"],QItem:v["a"],QItemSection:b["a"],QAvatar:g["a"],QBadge:_["a"],QItemLabel:h["a"],QSeparator:w["a"],QIcon:y["a"]}),L()(k,"directives",{Ripple:P["a"]});var j={name:"PageName",components:{ListaPerfiles:I},data(){return{}}},x=j,C=a("9989"),O=Object(d["a"])(x,r,i,!1,null,null,null);t["default"]=O.exports;L()(O,"components",{QPage:C["a"]})}}]);