(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"725f":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("lista-perfiles")],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-list",[e._l(e.perfiles,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,staticClass:"q-my-sm",attrs:{clickable:"",to:{name:"Inicio"}},on:{click:function(a){return e.setLocalData(t)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{size:"xl",color:"primary","text-color":"white",icon:"perm_identity"}},[a("q-badge",{attrs:{floating:"",color:"teal"}},[e._v(e._s(t.nivel))])],1)],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.nombre))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v("Tiempo jugado: ")]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v("Logros: ")]),a("q-separator",{attrs:{spaced:""}})],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"gamepad",color:"teal"}})],1)],1)})),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-my-sm q-pl-lg",attrs:{to:{name:"CrearPerfil"},clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"add",color:"primary"}})],1),a("q-item-section",[a("q-item-label",[e._v("Crear perfil")])],1)],1)],2)},s=[],n=a("ded3"),o=a.n(n),c=a("2f62"),p={name:"ListaPerfiles",data(){return{}},computed:o()({},Object(c["d"])("perfiles",["perfiles"])),methods:o()(o()({},Object(c["c"])("perfiles",["updatePerfil"])),{},{setLocalData(e){try{this.$q.localStorage.set("perfil",e),this.updatePerfil(e),this.$router.push({name:"Inicio"})}catch(t){alert("ha ocurrido un error al ingresar: "+t)}}})},m=p,d=a("2877"),u=a("1c1c"),f=a("66e5"),q=a("4074"),v=a("cb32"),b=a("58a81"),g=a("0170"),_=a("eb85"),h=a("0016"),w=a("714f"),Q=a("eebe"),y=a.n(Q),L=Object(d["a"])(m,l,s,!1,null,null,null),P=L.exports;y()(L,"components",{QList:u["a"],QItem:f["a"],QItemSection:q["a"],QAvatar:v["a"],QBadge:b["a"],QItemLabel:g["a"],QSeparator:_["a"],QIcon:h["a"]}),y()(L,"directives",{Ripple:w["a"]});var k={name:"PageName",components:{ListaPerfiles:P},data(){return{}}},I=k,j=a("9989"),x=Object(d["a"])(I,r,i,!1,null,null,null);t["default"]=x.exports;y()(x,"components",{QPage:j["a"]})}}]);