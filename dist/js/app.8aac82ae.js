(function(e){function t(t){for(var a,o,s=t[0],u=t[1],i=t[2],d=0,f=[];d<s.length;d++)o=s[d],c[o]&&f.push(c[o][0]),c[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==c[u]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0197":function(e,t,n){},"0503":function(e,t,n){"use strict";var a=n("0197"),c=n.n(a);c.a},2516:function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),c=n("9f7b"),r=n.n(c);n("ab8b"),n("2dd8");a["default"].use(r.a);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],u=(n("5c0b"),n("2877")),i={},l=Object(u["a"])(i,o,s,!1,null,null,null),d=l.exports,f=(n("7f7f"),n("6762"),n("8c4f")),b=(n("96cf"),n("3b8d")),h=function(e){switch(e){case"messenger":return"facebook";case"twitter":case"facebook":return e;default:return}},j={isAuth:!1},m={isAuthenticated:function(e){return a["default"].prototype.$auth.isAuthenticated()},authToken:function(e){return a["default"].prototype.$auth.isAuthenticated()?a["default"].prototype.$auth.getToken():null}},p={logout:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a["default"].prototype.$auth.logout();case 3:t.commit("changeAuthStatus"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.error("Logout:",e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t,n){return e.apply(this,arguments)}return t}(),authenticate:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(t,n){var c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,n.provider&&void 0!==h(n.provider)){e.next=4;break}return n.callback({error:"Authentication platform not provided."}),e.abrupt("return");case 4:return e.next=6,a["default"].prototype.$auth.authenticate(h(n.provider));case 6:c=e.sent,console.log(c),c.data.success?n.callback({success:!0,platform:n.provider,data:c.data.data}):n.callback({error:"Something went wrong. Try again."}),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0),n.callback({error:"An unexpected error ocurred."});case 15:case"end":return e.stop()}},e,null,[[0,11]])}));function t(t,n){return e.apply(this,arguments)}return t}()},v={changeAuthStatus:function(e){e.isAuth=a["default"].prototype.$auth.isAuthenticated()}},g={state:j,mutations:v,actions:p,getters:m},y=n("cebc"),k=n("2f62"),w={requestCount:0},_={isAxiosLoading:function(e){return e.requestCount>0}},O={},x={addRequest:function(e){e.requestCount++},subtractRequest:function(e){e.requestCount>0&&e.requestCount--}},T={state:w,mutations:x,actions:O,getters:_};a["default"].use(k["a"]);var z=new k["a"].Store({state:{},mutations:{},actions:{},modules:{auth:Object(y["a"])({namespaced:!0},g),loader:Object(y["a"])({namespaced:!0},T)}}),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("b-container",[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{staticStyle:{"text-align":"center"},attrs:{md:"5",xl:"4"}},[n("img",{staticClass:"logo mb-4",attrs:{src:"/logo.png"}}),n("h3",[e._v("Login with Facebook")]),n("div",{staticClass:"help-text mb-4"},[e._v("We don't post anything to Facebook")]),n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.authenticate("facebook")}}},[n("v-icon",{staticClass:"mr-2",attrs:{name:"brands/facebook-square",scale:"1.5"}}),n("span",[e._v("Continue with Facebook")])],1)],1)],1)],1)],1)},q=[],$={methods:Object(y["a"])({},Object(k["b"])(["auth/authenticate"]),{authenticate:function(e){this["auth/authenticate"]({provider:e,callback:function(e){console.log(e)}})}})},C=$,P=(n("d232"),Object(u["a"])(C,A,q,!1,null,"0458d95c",null)),S=P.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("b-container",[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{staticStyle:{"text-align":"center"},attrs:{md:"5",xl:"4"}},[n("h3",[e._v("How are you feeling today?")]),n("div",{staticClass:"help-text mb-4"},[e._v("Select the emoji that best represents you")]),n("b-row",e._l(e.emojis,function(t,a){return n("b-col",{key:a,staticClass:"emoji",attrs:{cols:"3"}},[e._v(e._s(t))])}),1)],1)],1)],1)],1)},R=[],L={data:function(){return{emojis:["😩","😟","😄","😡"]}},methods:Object(y["a"])({},Object(k["b"])(["auth/authenticate"]),{authenticate:function(e){this["auth/authenticate"]({provider:e,callback:function(e){console.log(e)}})}})},F=L,U=(n("0503"),Object(u["a"])(F,E,R,!1,null,"57e560de",null)),N=U.exports;a["default"].use(f["a"]);var D=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"root",beforeEnter:function(e,t,n){g.getters.isAuthenticated()?n({name:"dashboard"}):n({name:"login"})}},{path:"/login",name:"login",component:S},{path:"/logout",name:"logout",beforeEnter:function(e,t,n){z.dispatch("auth/logout"),n({name:"root"})}},{path:"/callback",name:"callback"},{path:"/check-in",name:"checkin",component:N}]}),M=["root","login","checkin","callback"];D.beforeEach(function(e,t,n){M.includes(e.name)?n():g.getters.isAuthenticated()?n():n({name:"login"})});var I=D,B=(n("7049"),n("d06d"),n("0874")),V=n("ff6b"),G=n("7f45"),J=n.n(G),H=n("bc3a"),K=n.n(H),W=n("a7fe"),Q=n.n(W),X=n("ba38"),Y=K.a.create({baseURL:Object({VUE_APP_FACEBOOK_APP_ID:"1552067311591511",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API});Y.interceptors.request.use(function(e){return a["default"].prototype.$Progress.start(),z.commit("loader/addRequest"),a["default"].prototype.$auth.isAuthenticated()?e.headers["Authorization"]=[a["default"].prototype.$auth.options.tokenType,a["default"].prototype.$auth.getToken()].join(" "):delete e.headers["Authorization"],e},function(e){return Promise.reject(e)}),Y.interceptors.response.use(function(e){return z.commit("loader/subtractRequest"),z.getters["loader/isAxiosLoading"]||a["default"].prototype.$Progress.finish(),a["default"].prototype.$auth.setToken(e),e},function(e){return z.commit("loader/subtractRequest"),z.getters["loader/isAxiosLoading"]||a["default"].prototype.$Progress.fail(),401===e.response.status&&I.push({name:"logout"}),Promise.reject(e)});var Z={install:function(e,t){e.request=Y,e.prototype.$request=Y}},ee=n("26b9"),te=n.n(ee),ne=n("7bb1"),ae=n("768b"),ce={es:{messages:{_default:function(e){return"".concat(e," no es válido.")},after:function(e,t){var n=Object(ae["a"])(t,2),a=n[0],c=n[1];return"The ".concat(e," must be after ").concat(c?"or equal to ":"").concat(a,".")},alpha_dash:function(e){return"The ".concat(e," field may contain alpha-numeric characters as well as dashes and underscores.")},alpha_num:function(e){return"The ".concat(e," field may only contain alpha-numeric characters.")},alpha_spaces:function(e){return"The ".concat(e," field may only contain alphabetic characters as well as spaces.")},alpha:function(e){return"".concat(e," debe contener solo letras.")},before:function(e,t){var n=Object(ae["a"])(t,2),a=n[0],c=n[1];return"The ".concat(e," must be before ").concat(c?"or equal to ":"").concat(a,".")},between:function(e,t){var n=Object(ae["a"])(t,2),a=n[0],c=n[1];return"The ".concat(e," field must be between ").concat(a," and ").concat(c,".")},confirmed:function(e){return"".concat(e," no coincide.")},credit_card:function(e){return"".concat(e," no es válido.")},date_between:function(e,t){var n=Object(ae["a"])(t,2),a=n[0],c=n[1];return"The ".concat(e," must be between ").concat(a," and ").concat(c,".")},date_format:function(e,t){var n=Object(ae["a"])(t,1),a=n[0];return"".concat(e," debe ser en formato ").concat(a,".")},decimal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(ae["a"])(t,1),a=n[0],c=void 0===a?"*":a;return"The ".concat(e," field must be numeric and may contain ").concat(c&&"*"!==c?c:""," decimal points.")},digits:function(e,t){var n=Object(ae["a"])(t,1),a=n[0];return"".concat(e," debe ser de máximo ").concat(a," dígitos.")},dimensions:function(e,t){var n=Object(ae["a"])(t,2),a=n[0],c=n[1];return"The ".concat(e," field must be ").concat(a," pixels by ").concat(c," pixels.")},email:function(e){return"".concat(e," no es válido.")},ext:function(e){return"The ".concat(e," field must be a valid file.")},image:function(e){return"The ".concat(e," field must be an image.")},included:function(e){return"The ".concat(e," field must be a valid value.")},integer:function(e){return"The ".concat(e," field must be an integer.")},ip:function(e){return"The ".concat(e," field must be a valid ip address.")},length:function(e,t){var n=Object(ae["a"])(t,2),a=n[0],c=n[1];return c?"The ".concat(e," length must be between ").concat(a," and ").concat(c,"."):"The ".concat(e," length must be ").concat(a,".")},max:function(e,t){var n=Object(ae["a"])(t,1),a=n[0];return"".concat(e," no puede tener más de ").concat(a," caracteres.")},max_value:function(e,t){var n=Object(ae["a"])(t,1),a=n[0];return"".concat(e," debe tener ").concat(a," o menos caracteres.")},mimes:function(e){return"The ".concat(e," field must have a valid file type.")},min:function(e,t){var n=Object(ae["a"])(t,1),a=n[0];return"".concat(e," debe tener al menos ").concat(a," caracteres.")},min_value:function(e,t){var n=Object(ae["a"])(t,1),a=n[0];return"The ".concat(e," field must be ").concat(a," or more.")},excluded:function(e){return"The ".concat(e," field must be a valid value.")},numeric:function(e){return"".concat(e," debe contener solo números.")},regex:function(e){return"".concat(e," no es válido.")},required:function(e){return"".concat(e," es requerido.")},size:function(e,t){var n=Object(ae["a"])(t,1),a=n[0];return"The ".concat(e," size must be less than ").concat(formatFileSize(a),".")},url:function(e){return"The ".concat(e," field is not a valid URL.")}},custom:{terms:{required:function(){return"Debes aceptar los términos y condiciones"}}}}},re=ce,oe=n("9062"),se=n.n(oe),ue=(n("e40d"),{install:function(e,t){e.mixin({data:function(){return{loading_screen:null}},methods:{showLoadingScreen:function(){this.$loading&&(this.loading_screen=this.$loading.show())},hideLoadingScreen:function(){this.loading_screen&&(this.loading_screen.hide(),this.loading_screen=null)}}})}}),ie=n("f13c"),le=n.n(ie);a["default"].component("v-icon",B["a"]),a["default"].use(V["a"]),J.a.locale("es"),a["default"].prototype.$moment=J.a,a["default"].use(Q.a,K.a),a["default"].use(X["a"],{baseUrl:"https://656e0bf4.ngrok.io/backend/api",tokenName:"access_token",providers:{facebook:{clientId:"1552067311591511",redirectUri:"https://656e0bf4.ngrok.io/callback",scope:["email"]}}}),a["default"].use(Z),a["default"].use(te.a,{color:"#409EFF",failedColor:"rgb(245, 108, 108)",thickness:"2px",autoFinish:!1,transition:{speed:".8s",opacity:".2s",termination:800}}),a["default"].use(ne["a"],{locale:"es",dictionary:re,fieldsBagName:"veeFields",mode:"eager"}),a["default"].use(se.a,{color:"#0e5ccf",zIndex:2e3,height:70,width:70,opacity:.6}),a["default"].use(ue),a["default"].use(le.a),a["default"].config.productionTip=!1,new a["default"]({router:I,store:z,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),c=n.n(a);c.a},"5e27":function(e,t,n){},7049:function(e,t,n){},d232:function(e,t,n){"use strict";var a=n("2516"),c=n.n(a);c.a}});
//# sourceMappingURL=app.8aac82ae.js.map