(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(t,n,o){"use strict";o.r(n),o.d(n,"HomePageModule",(function(){return C}));var i=o("ofXK"),e=o("TEn/"),r=o("3Pt+"),c=o("tyNb"),s=o("fXoL"),a=o("tk/3");let u=(()=>{class t{constructor(t){this.http=t}getUsers(){return this.http.get("https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user")}}return t.\u0275fac=function(n){return new(n||t)(s.Qb(a.a))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=o("mrSG"),l=o("pb7T");function p(t,n){1&t&&(s.Mb(0,"span",7),s.ic(1,"El rut est\xe1 incorrecto"),s.Lb())}function d(t,n){1&t&&(s.Mb(0,"span",7),s.ic(1,"La fecha no es v\xe1lida"),s.Lb())}let f=(()=>{class t{constructor(t){this.modalCtrl=t}ngOnInit(){console.log(this.usuario.rut),this.rutValidado=!!Object(l.validate)(this.usuario.rut),this.fechaValida=!!this.validarFecha(this.usuario.fechaNacimiento)}goBack(){this.modalCtrl.dismiss()}validarFecha(t){var n=t.split("/"),o=n[0],i=n[1],e=n[2];return i>0&&i<13&&e>0&&e<32768&&o>0&&o<=new Date(e,i,0).getDate()}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(e.t))},t.\u0275cmp=s.Db({type:t,selectors:[["app-usuario"]],inputs:{usuario:"usuario"},decls:41,vars:14,consts:[[3,"translucent"],["slot","start"],[3,"click"],["padding",""],["slot","end"],["slot","end",1,"dato_custom",3,"color"],["class","mensaje_validacion-incorrecto",4,"ngIf"],[1,"mensaje_validacion-incorrecto"]],template:function(t,n){1&t&&(s.Mb(0,"ion-header",0),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-buttons",1),s.Mb(3,"ion-button",2),s.Ub("click",(function(){return n.goBack()})),s.ic(4,"X"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(5,"ion-content",3),s.Mb(6,"ion-grid"),s.Mb(7,"ion-row"),s.Mb(8,"ion-col"),s.Mb(9,"ion-item"),s.Mb(10,"ion-label"),s.ic(11,"Nombre"),s.Lb(),s.Mb(12,"ion-note",4),s.ic(13),s.Lb(),s.Lb(),s.Mb(14,"ion-item"),s.Mb(15,"ion-label"),s.ic(16,"Tel\xe9fono"),s.Lb(),s.Mb(17,"ion-note",4),s.ic(18),s.Lb(),s.Lb(),s.Mb(19,"ion-item"),s.Mb(20,"ion-label"),s.ic(21,"Rut"),s.Lb(),s.Mb(22,"ion-note",5),s.ic(23),s.hc(24,p,2,0,"span",6),s.Lb(),s.Lb(),s.Mb(25,"ion-item"),s.Mb(26,"ion-label"),s.ic(27,"Fecha de nacimiento"),s.Lb(),s.Mb(28,"ion-note",5),s.ic(29),s.hc(30,d,2,0,"span",6),s.Lb(),s.Lb(),s.Mb(31,"ion-item"),s.Mb(32,"ion-label"),s.ic(33,"Direcci\xf3n"),s.Lb(),s.Mb(34,"ion-note",4),s.ic(35),s.Lb(),s.Lb(),s.Mb(36,"ion-item"),s.Mb(37,"ion-label"),s.ic(38,"Status trabajador"),s.Lb(),s.Mb(39,"ion-note",4),s.ic(40),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&t&&(s.bc("translucent",!0),s.zb(13),s.lc("",n.usuario.nombre," ",n.usuario.apellido,""),s.zb(5),s.jc(n.usuario.telefono),s.zb(4),s.cc("color",n.rutValidado?"dark":"danger"),s.zb(1),s.kc(" ",n.usuario.rut," "),s.zb(1),s.bc("ngIf",!n.rutValidado),s.zb(4),s.cc("color",n.fechaValida?"dark":"danger"),s.zb(1),s.kc(" ",n.usuario.fechaNacimiento," "),s.zb(1),s.bc("ngIf",!n.fechaValida),s.zb(5),s.mc("",n.usuario.direccion.calle," ",n.usuario.direccion.numero," ",n.usuario.direccion.comuna,""),s.zb(5),s.jc(1===n.usuario.activo?"Activo":"Inactivo"))},directives:[e.h,e.q,e.d,e.c,e.f,e.g,e.n,e.e,e.i,e.j,e.l,i.i],styles:[".dato_custom[_ngcontent-%COMP%]{text-align:right}.dato_custom[_ngcontent-%COMP%]   .mensaje_validacion-incorrecto[_ngcontent-%COMP%]{display:block}"]}),t})(),h=(()=>{class t{transform(t,n){return""===n?t:t.filter(t=>(t.nombre+t.apellido).toLowerCase().includes(n.toLowerCase()))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=s.Ib({name:"filtro",type:t,pure:!0}),t})();function m(t,n){if(1&t){const t=s.Nb();s.Mb(0,"ion-list"),s.Mb(1,"ion-item",3),s.Ub("click",(function(){s.ec(t);const o=n.$implicit;return s.Wb().goToUser(o)})),s.Mb(2,"ion-avatar",4),s.Kb(3,"img",5),s.Lb(),s.Mb(4,"ion-label"),s.Mb(5,"h3"),s.ic(6),s.Lb(),s.Mb(7,"p"),s.ic(8),s.Lb(),s.Lb(),s.Lb(),s.Lb()}if(2&t){const t=n.$implicit;s.zb(6),s.lc("",t.nombre," ",t.apellido,""),s.zb(2),s.jc(1===t.activo?"Activo":"Inactivo")}}let g=(()=>{class t{constructor(t){this.modalController=t,this.usuarios=[],this.usuarioBuscado=""}ngOnInit(){console.log(this.usuarios)}goToUser(t){return Object(b.a)(this,void 0,void 0,(function*(){(yield this.modalController.create({component:f,componentProps:{usuario:t}})).present()}))}findUser(t){this.usuarioBuscado=t.detail.value,console.log(this.usuarioBuscado)}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(e.t))},t.\u0275cmp=s.Db({type:t,selectors:[["app-usuarios"]],inputs:{usuarios:"usuarios"},decls:6,vars:4,consts:[["fixed",""],[3,"ionChange"],[4,"ngFor","ngForOf"],[3,"click"],["slot","start"],["src","../../../assets/icon/avatar.png"]],template:function(t,n){1&t&&(s.Mb(0,"ion-grid",0),s.Mb(1,"ion-row"),s.Mb(2,"ion-col"),s.Mb(3,"ion-searchbar",1),s.Ub("ionChange",(function(t){return n.findUser(t)})),s.Lb(),s.hc(4,m,9,3,"ion-list",2),s.Xb(5,"filtro"),s.Lb(),s.Lb(),s.Lb()),2&t&&(s.zb(4),s.bc("ngForOf",s.Yb(5,1,n.usuarios,n.usuarioBuscado)))},directives:[e.g,e.n,e.e,e.o,e.v,i.h,e.k,e.i,e.b,e.j],pipes:[h],styles:[""]}),t})();const M=[{path:"",component:(()=>{class t{constructor(t){this.usuariosService=t,this.usuarios=[]}ngOnInit(){this.usuariosService.getUsers().subscribe(t=>{this.usuarios.push(...t)})}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(u))},t.\u0275cmp=s.Db({type:t,selectors:[["app-home"]],decls:6,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],[3,"usuarios"]],template:function(t,n){1&t&&(s.Mb(0,"ion-header",0),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-title"),s.ic(3," Haibu Solutions "),s.Lb(),s.Lb(),s.Lb(),s.Mb(4,"ion-content",1),s.Kb(5,"app-usuarios",2),s.Lb()),2&t&&(s.bc("translucent",!0),s.zb(4),s.bc("fullscreen",!0),s.zb(1),s.bc("usuarios",n.usuarios))},directives:[e.h,e.q,e.p,e.f,g],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[c.i.forChild(M)],c.i]}),t})();var v=o("iTUp");let y=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[i.b,e.r,v.a]]}),t})(),C=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[y,i.b,r.a,e.r,L]]}),t})()},pb7T:function(t,n,o){"use strict";function i(t){return"string"==typeof t?t.replace(/^0+|[^0-9kK]+/g,"").toUpperCase():""}t.exports={validate:function(t){if("string"!=typeof t)return!1;if(!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(t))return!1;t=i(t);for(var n=parseInt(t.slice(0,-1),10),o=0,e=1;n>0;)e=(e+n%10*(9-o++%6))%11,n=Math.floor(n/10);return(e>0?""+(e-1):"K")===t.slice(-1)},clean:i,format:function(t){for(var n=(t=i(t)).slice(-4,-1)+"-"+t.substr(t.length-1),o=4;o<t.length;o+=3)n=t.slice(-3-o,-o)+"."+n;return n}}}}]);