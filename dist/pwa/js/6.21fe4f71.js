(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"45d5":function(e,o,t){"use strict";t.r(o);var a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("q-page",{attrs:{padding:""}},[t("q-file",{ref:"file",staticClass:"file",attrs:{label:"Standard"},model:{value:e.nuevaFoto,callback:function(o){e.nuevaFoto=o},expression:"nuevaFoto"}}),t("q-carousel",{attrs:{swipeable:"",animated:"",thumbnails:"",infinite:""},model:{value:e.fotoSel,callback:function(o){e.fotoSel=o},expression:"fotoSel"}},e._l(e.fotosEncoded,(function(e,o){return t("q-carousel-slide",{key:o,attrs:{name:o,"img-src":e.ruta}})})),1),t("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[t("q-fab",{attrs:{color:"primary",icon:"keyboard_arrow_left",direction:"left","text-color":"white"}},[t("q-fab-action",{attrs:{fab:"",icon:"add",color:"green"},on:{click:function(o){return e.$refs.file.pickFiles()}}}),t("q-fab-action",{attrs:{color:"negative",icon:"delete"},on:{click:e.eliminarFoto}}),t("q-fab-action",{attrs:{color:"info",icon:"check"},on:{click:e.establecerFotoPerfil}})],1)],1)],1)},n=[],r=(t("a434"),t("ddb0"),t("2b3d"),t("ded3")),i=t.n(r),c=t("c973"),l=t.n(c),f=t("2f62"),s={name:"Fotos",data(){return{nuevaFoto:null,fotosEncoded:null,fotoSel:1}},watch:{nuevaFoto:{handler(e){var o=this;return l()((function*(){try{(yield o.perfil.guardarFoto(e))&&o.fotosEncoded.push({name:e.name,ruta:o.fotoEncoded(e)})}catch(t){console.log(t)}}))()}}},computed:i()({},Object(f["e"])("perfiles",["perfil"])),methods:i()(i()(i()({},Object(f["d"])("perfiles",["updateFotosPerfil","updateFotoPerfil"])),Object(f["b"])("perfiles",["cargarPerfiles"])),{},{fotoEncoded(e){return URL.createObjectURL(e)},cargarFotosEncoded(){var e=this;return l()((function*(){try{e.fotosEncoded=[],yield e.perfil.fotos.forEach(function(){var o=l()((function*(o,t){const a=yield e.$db.local.rel.getAttachment("perfil",e.perfil.id,o);e.fotosEncoded.push({name:o,ruta:e.fotoEncoded(a)})}));return function(e,t){return o.apply(this,arguments)}}())}catch(o){console.log(o)}}))()},eliminarFoto(){var e=this;return l()((function*(){(yield e.perfil.eliminarFoto(e.fotoSel))&&e.fotosfotoEncoded.splice(e.fotoSel,1)}))()},establecerFotoPerfil(){var e=this;return l()((function*(){(yield e.perfil.establecerFotoPerfil(e.perfil.fotos[e.fotoSel]))&&e.$router.push({name:"Perfil"})}))()}}),mounted(){var e=this;return l()((function*(){e.cargarFotosEncoded()}))()}},d=s,u=(t("9233"),t("2877")),p=t("9989"),b=t("7d53"),h=t("880c"),m=t("62cd"),F=t("4b7e"),v=t("9c40"),g=t("f09f"),k=t("de5e"),y=t("c294"),E=t("72db"),w=t("eebe"),Q=t.n(w),S=Object(u["a"])(d,a,n,!1,null,null,null);o["default"]=S.exports;Q()(S,"components",{QPage:p["a"],QFile:b["a"],QCarousel:h["a"],QCarouselSlide:m["a"],QCardActions:F["a"],QBtn:v["a"],QCard:g["a"],QPageSticky:k["a"],QFab:y["a"],QFabAction:E["a"]})},"6ac2":function(e,o,t){},9233:function(e,o,t){"use strict";var a=t("6ac2"),n=t.n(a);n.a}}]);