(function(e){function t(t){for(var i,s,o=t[0],c=t[1],u=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(i=!1)}i&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},r={app:0},n=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0ed7":function(e,t,a){"use strict";var i=a("50af"),r=a.n(i);r.a},1771:function(e,t,a){var i={"./logo.png":"cf05","./vue-cart-template1.png":"8944","./vue-login-template1.png":"eb0b"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=n,e.exports=r,r.id="1771"},"24cf":function(e,t,a){"use strict";var i=a("44e6"),r=a.n(i);r.a},3049:function(e,t,a){"use strict";var i=a("847d"),r=a.n(i);r.a},"44e6":function(e,t,a){},"50af":function(e,t,a){},5519:function(e,t,a){"use strict";var i=a("c59e"),r=a.n(i);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"svg-container"}),a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("div",{staticClass:"header-site-name"},[a("router-link",{style:e.isHome?{visibility:"hidden"}:{visibility:"visible"},attrs:{to:"/"}},[a("i",{staticClass:"fas fa-lg fa-home"})])],1),a("div",{staticClass:"header-link-grp",style:e.isHome?{visibility:"hidden"}:{visibility:"visible"}},[a("router-link",{attrs:{to:"/projects"}},[e._v("Projects")]),a("router-link",{attrs:{to:"/resume"}},[e._v("Resume")])],1)]),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)])},n=[],s=(a("b0c0"),{components:{},data:function(){return{visibilityClass:{visibility:"hidden"}}},computed:{isHome:function(){return"home"==this.$route.name}}}),o=s,c=(a("c661"),a("2877")),u=Object(c["a"])(o,r,n,!1,null,"73320044",null),l=u.exports,p=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("div",{staticClass:"main-text"},[a("h1",[e._v("Evan Vana")]),a("h3",[e._v("West Palm Beach, Florida")]),e._m(0),a("div",{staticClass:"home-nav"},[a("router-link",{attrs:{to:"/projects"}},[e._v("Projects")]),a("router-link",{attrs:{to:"/resume"}},[e._v("Resume")])],1)])])])},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-text-icons"},[a("a",{attrs:{href:"https://github.com/e-vana"}},[a("i",{staticClass:"fab fa-github-square"})]),a("a",{attrs:{href:"https://www.linkedin.com/in/evanvana/"}},[a("i",{staticClass:"fab fa-linkedin-in"})])])}],f={name:"home",components:{},data:function(){return{}}},v=f,h=(a("0ed7"),Object(c["a"])(v,d,m,!1,null,"37a05e94",null)),g=h.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project-container"},[a("h2",[e._v("Projects")]),a("hr"),e._l(e.projects,(function(t){return a("div",{key:t.index},[a("ProjectCard",e._b({},"ProjectCard",t,!1))],1)}))],2)},_=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("a",{attrs:{href:e.siteLiveUrl}},[a("div",{staticClass:"image-container",style:e.classStyle},[a("div",{staticClass:"image-container-text"},[a("h1",[e._v(e._s(e.siteName))])])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("div",{staticClass:"text-container"},[a("h3",[e._v("What is "+e._s(e.siteName)+"?")]),a("p",[e._v(e._s(e.siteDescription))]),a("p",[e._v(e._s(e.siteFuturePlans))]),a("hr"),a("div",{staticClass:"social-buttons"},[a("h4",[e._v("See the live site or the github repository:")]),a("a",{attrs:{href:e.siteGithubUrl,target:"_blank"}},[a("i",{staticClass:"fab fa-github-square"})]),a("a",{attrs:{href:e.siteLiveUrl,target:"_blank"}},[a("i",{staticClass:"fas fa-eye"})])]),a("hr"),a("h4",[e._v("Technology Tags")]),a("p",[e._v(e._s(e.siteTags))])])])])])},C=[],w={name:"ProjectCard",data:function(){return{classStyle:{background:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(".concat(a("1771")("./"+this.siteBackgroundImage),")")}}},methods:{},props:{siteName:String,siteLiveUrl:String,siteGithubUrl:String,siteBackgroundImage:String,siteRouterLink:String,siteFuturePlans:String,siteDescription:String,siteTags:String}},j=w,k=(a("3049"),Object(c["a"])(j,y,C,!1,null,"3640aaf0",null)),x=k.exports,S={name:"projects",components:{ProjectCard:x},data:function(){return{projects:[{siteName:"Vue-Login-Template",siteGithubUrl:"https://github.com/e-vana",siteLiveUrl:"https://vue-login-template.herokuapp.com/",siteBackgroundImage:"vue-login-template1.png",siteRouterLink:"vue-login-template",siteDescription:"Vue Login Template is a login system that allows users to register, login, get email confirmations, and reset passwords.  There are some primative admin tools that allow a user flagged as an admin and with an admin token to set user roles and permissions.  This application utilizes Vue, Vuex, Vue Router, Express JS and MongoDB.",siteFuturePlans:"Some future plans for this application involve building out more administrative tools to track user data and user page usage.",siteTags:"Vue, Vuex, Vue Router, Express, NodeJS, MongoDB, Mongoose, jsonwebtoken, Express, Bcrypt, Nodemailer, MLAB, Javascript, HTML and CSS."},{siteName:"Vue-Cart-Template",siteGithubUrl:"https://github.com/e-vana/vue-cart-template",siteLiveUrl:"NA",siteBackgroundImage:"vue-cart-template1.png",siteRouterLink:"vue-cart-template",siteDescription:"Vue Cart Template is an e-store store front that allows users to register, sign in, view products and add products to their cart.  Users with admin privileges can also add or remove items from the database, as well as changed certain parameters on items to show them in different places in the application.",siteFuturePlans:"Some future plans involve writing back end code to be more strict with numbers in javascript as well as writing some features to mock checking out with the Stripe API.",siteTags:"Vue, Vuex, Vue Router, Express, NodeJS, MongoDB, Mongoose, jsonwebtoken, Express, Bcrypt, Nodemailer, MLAB, Javascript, HTML and CSS."}]}}},O=S,P=(a("5519"),Object(c["a"])(O,b,_,!1,null,"565f73a2",null)),E=P.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"resume-container"},[a("h2",[e._v("Resume")]),a("hr"),a("iframe",{attrs:{id:"resume-iframe",src:"https://docs.google.com/document/d/e/2PACX-1vQOKbKzJLc_30sOcL0oKeJ1pG1g7eHQpWv8sZpEa83A6_42-c3cX_CWHlim4EhZfs8GWYl4XZR_eKE-/pub?embedded=true"}})])}],M={name:"resume"},V=M,B=(a("24cf"),Object(c["a"])(V,T,L,!1,null,null,null)),N=B.exports;i["a"].use(p["a"]);var U=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:g},{path:"/projects",name:"projects",component:E},{path:"/resume",name:"resume",component:N}]});i["a"].config.productionTip=!1,new i["a"]({router:U,render:function(e){return e(l)}}).$mount("#app")},"847d":function(e,t,a){},8944:function(e,t,a){e.exports=a.p+"img/vue-cart-template1.2f5bef83.png"},c59e:function(e,t,a){},c661:function(e,t,a){"use strict";var i=a("e878"),r=a.n(i);r.a},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},e878:function(e,t,a){},eb0b:function(e,t,a){e.exports=a.p+"img/vue-login-template1.9db61fdf.png"}});
//# sourceMappingURL=app.bd4e889f.js.map