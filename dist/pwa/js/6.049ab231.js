(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{2718:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("nuevo-perfil")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-stepper",{attrs:{vertical:"",color:"primary",animated:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[n("q-step",{attrs:{name:1,title:"Genero",icon:"supervised_user_circle",done:e.step>1}},[n("genero")],1),n("q-step",{attrs:{name:2,title:"Informacion Personal",icon:"info",done:e.step>2}},[n("informacion-personal"),n("q-stepper-navigation",[n("q-btn",{attrs:{color:"primary",label:"Siguiente"},on:{click:function(t){return e.updateStep(3)}}}),n("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Regresar"},on:{click:function(t){return e.updateStep(1)}}})],1)],1),n("q-step",{attrs:{name:3,title:"Foto",caption:"Optional",icon:"face",done:e.step>3}},[n("foto"),n("q-stepper-navigation",[n("q-btn",{attrs:{color:"primary",label:"Siguiente"},on:{click:function(t){return e.updateStep(4)}}}),n("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Regresar"},on:{click:function(t){return e.updateStep(2)}}})],1)],1),n("q-step",{attrs:{name:4,title:"Confirmacion",icon:"verified"}},[n("confirmacion"),n("q-stepper-navigation",[n("q-btn",{attrs:{color:"primary",label:"Listo"},on:{click:function(t){return e.guardarPerfil()}}}),n("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Regresar"},on:{click:function(t){return e.updateStep(3)}}})],1)],1)],1)},l=[],i=n("c973"),s=n.n(i),c=n("ded3"),p=n.n(c),u=n("2f62"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-splitter",{staticStyle:{height:"300px"},attrs:{limits:[0,100],"before-class":"overflow-hidden","after-class":"overflow-hidden","separator-class":"bg-black"},scopedSlots:e._u([{key:"before",fn:function(){return[n("div",{staticClass:"flex flex-center bg-white"},[n("q-btn",{attrs:{label:"Masculino",color:"blue"},on:{click:function(t){return e.genero("Masculino")}}})],1)]},proxy:!0},{key:"after",fn:function(){return[n("div",{staticClass:"flex flex-center bg-white"},[n("q-btn",{attrs:{label:"Femenino",color:"pink"},on:{click:function(t){return e.genero("Femenino")}}})],1)]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})},d=[],m={name:"Genero",data(){return{splitterModel:50}},computed:{},methods:p()(p()({},Object(u["c"])("perfiles",["updateGenero","updateStep"])),{},{genero(e){this.updateGenero(e),this.updateStep(2)}})},b=m,h=n("2877"),v=n("8562"),g=n("9c40"),x=n("eebe"),_=n.n(x),q=Object(h["a"])(b,f,d,!1,null,null,null),y=q.exports;_()(q,"components",{QSplitter:v["a"],QBtn:g["a"]});var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-form",{staticClass:"q-gutter-md",on:{submit:function(e){e.preventDefault()}}},[n("q-input",{attrs:{filled:"",label:"Nombre *","lazy-rules":""},model:{value:e._nombre,callback:function(t){e._nombre=t},expression:"_nombre"}}),n("q-input",{attrs:{filled:"",label:"Apellido *","lazy-rules":""},model:{value:e._apellido,callback:function(t){e._apellido=t},expression:"_apellido"}}),n("q-input",{attrs:{filled:"",mask:"date",rules:["date"]},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[n("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e._fecha,callback:function(t){e._fecha=t},expression:"_fecha"}})],1)],1)]},proxy:!0}]),model:{value:e._fecha,callback:function(t){e._fecha=t},expression:"_fecha"}})],1)},S=[],C={name:"InformacionPersonal",data(){return{}},computed:p()(p()({},Object(u["d"])("perfiles",["nombre","apellido","fecha"])),{},{_nombre:{get(){return this.nombre},set(e){this.updateNombre(e)}},_apellido:{get(){return this.apellido},set(e){this.updateApellido(e)}},_fecha:{get(){return this.fecha},set(e){this.updateFecha(e)}}}),methods:p()(p()({},Object(u["c"])("perfiles",["updateNombre","updateApellido","updateFecha","updateStep"])),{},{methodName(){}})},w=C,Q=n("0378"),O=n("27f9"),P=n("0016"),j=n("7cbe"),F=n("52ee"),N=Object(h["a"])(w,k,S,!1,null,null,null),$=N.exports;_()(N,"components",{QForm:Q["a"],QInput:O["a"],QIcon:P["a"],QPopupProxy:j["a"],QDate:F["a"]});var I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-center bg-white"},[a("q-img",{attrs:{src:n("bca0"),"spinner-color":"primary","spinner-size":"82px",width:"200px"}}),a("q-file",{attrs:{color:"grey-3",outlined:"","label-color":"primary",label:"Selecciona una foto"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"attachment",color:"primary"}})]},proxy:!0}]),model:{value:e._foto,callback:function(t){e._foto=t},expression:"_foto"}})],1)},E=[],G={name:"Foto",data(){return{}},watch:{foto:e=>{console.log(e)}},computed:p()(p()({},Object(u["d"])("perfiles",["foto"])),{},{_foto:{get(){return this.foto},set(e){this.updateFoto(e)}}}),methods:p()({},Object(u["c"])("perfiles",["updateFoto","updateStep"]))},M=G,A=n("068f"),z=n("7d53"),D=Object(h["a"])(M,I,E,!1,null,null,null),L=D.exports;_()(D,"components",{QImg:A["a"],QFile:z["a"],QIcon:P["a"]});var R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"flex flex-center bg-white"},[a("q-img",{attrs:{src:n("bca0"),"spinner-color":"primary","spinner-size":"82px",width:"200px"}})],1),a("div",{staticClass:"text-subtitle1"},[e._v("\n\t\tNombre:\n\t")]),a("div",{staticClass:"text-caption text-grey"},[e._v("\n\t\t"+e._s(e.nombre)+"\n\t")]),a("div",{staticClass:"text-subtitle1"},[e._v("\n\t\tApellido:\n\t")]),a("div",{staticClass:"text-caption text-grey"},[e._v("\n\t\t"+e._s(e.apellido)+"\n\t")]),a("div",{staticClass:"text-subtitle1"},[e._v("\n\t\tFecha de nacimiento:\n\t")]),a("div",{staticClass:"text-caption text-grey"},[e._v("\n\t\t"+e._s(e.fecha)+"\n\t")])])},B=[],J={name:"Confirmacion",data(){return{}},computed:p()({},Object(u["d"])("perfiles",["genero","nombre","apellido","fecha","foto"]))},H=J,K=Object(h["a"])(H,R,B,!1,null,null,null),T=K.exports;_()(K,"components",{QImg:A["a"]});var U={name:"NuevoPerfil",components:{Genero:y,InformacionPersonal:$,Foto:L,Confirmacion:T},data(){return{}},computed:p()({},Object(u["d"])("perfiles",["genero","nombre","apellido","fecha","foto","step"])),methods:p()(p()({},Object(u["c"])("perfiles",["updateGenero","updateNombre","updateApellido","updateFecha","updateFoto","updateStep"])),{},{guardarPerfil(){var e=this;return s()((function*(){const t={genero:e.genero,nombre:e.nombre,apellido:e.apellido,fecha:e.fecha,foto:"assets/Logo.png",nivel:0,exp:0};try{const n=yield e.$db.local.rel.save("perfil",t);e.$q.notify({type:n?"positive":"negative",message:n?"Perfil creado":"No se pudo crear el perfil",timeout:500}),n&&e.$router.push({name:"Perfiles"})}catch(n){alert("ha ocurrido un error al crear el perfil: "+n)}}))()}})},V=U,W=n("f531"),X=n("87fe"),Y=n("b19c"),Z=Object(h["a"])(V,r,l,!1,null,null,null),ee=Z.exports;_()(Z,"components",{QStepper:W["a"],QStep:X["a"],QStepperNavigation:Y["a"],QBtn:g["a"]});var te={name:"CrearPerfil",components:{NuevoPerfil:ee}},ne=te,ae=n("9989"),oe=Object(h["a"])(ne,a,o,!1,null,null,null);t["default"]=oe.exports;_()(oe,"components",{QPage:ae["a"]})},bca0:function(e,t,n){e.exports=n.p+"img/Logo.dbd67164.png"}}]);