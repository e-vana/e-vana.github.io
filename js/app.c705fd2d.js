(function(e){function t(t){for(var r,n,o=t[0],u=t[1],c=t[2],p=0,d=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],r=!0,o=1;o<i.length;o++){var u=i[o];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=n(n.s=i[0]))}return e}var r={},a={app:0},s=[];function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=r,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0ed7":function(e,t,i){"use strict";var r=i("50af"),a=i.n(r);a.a},1771:function(e,t,i){var r={"./gcscraper.png":"583c","./logo.png":"cf05","./twitter-bot.png":"bbe4","./vue-cart-template1.png":"8944","./vue-login-template1.png":"eb0b"};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="1771"},"24cf":function(e,t,i){"use strict";var r=i("44e6"),a=i.n(r);a.a},"2a89":function(e,t,i){},"44e6":function(e,t,i){},"49c1":function(e,t,i){},"50af":function(e,t,i){},5222:function(e,t,i){"use strict";var r=i("b2b5"),a=i.n(r);a.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"svg-container"}),i("div",{staticClass:"container"},[i("div",{staticClass:"header"},[i("div",{staticClass:"header-site-name"},[i("router-link",{style:e.isHome?{visibility:"hidden"}:{visibility:"visible"},attrs:{to:"/"}},[i("i",{staticClass:"fas fa-lg fa-home"})])],1),i("div",{staticClass:"header-link-grp",style:e.isHome?{visibility:"hidden"}:{visibility:"visible"}},[i("router-link",{attrs:{to:"/projects"}},[e._v("Projects")]),i("router-link",{attrs:{to:"/resume"}},[e._v("Resume")])],1)]),i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)])},s=[],n=(i("b0c0"),{components:{},data:function(){return{visibilityClass:{visibility:"hidden"}}},computed:{isHome:function(){return"home"==this.$route.name}}}),o=n,u=(i("5222"),i("2877")),c=Object(u["a"])(o,a,s,!1,null,"06042e40",null),l=c.exports,p=i("8c4f"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("div",{staticClass:"container"},[i("div",{staticClass:"main-text"},[i("h1",[e._v("Evan Vana")]),i("h3",[e._v("West Palm Beach, Florida")]),e._m(0),i("div",{staticClass:"home-nav"},[i("router-link",{attrs:{to:"/projects"}},[e._v("Projects")]),i("router-link",{attrs:{to:"/resume"}},[e._v("Resume")])],1)])])])},m=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-text-icons"},[i("a",{attrs:{href:"https://github.com/e-vana"}},[i("i",{staticClass:"fab fa-github-square"})]),i("a",{attrs:{href:"https://www.linkedin.com/in/evanvana/"}},[i("i",{staticClass:"fab fa-linkedin-in"})])])}],f={name:"home",components:{},data:function(){return{}}},v=f,h=(i("0ed7"),Object(u["a"])(v,d,m,!1,null,"37a05e94",null)),g=h.exports,b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"project-container"},[i("h2",[e._v("Projects")]),i("hr"),e._l(e.projects,(function(t){return i("div",{key:t.index},[i("ProjectCard",e._b({},"ProjectCard",t,!1))],1)}))],2)},w=[],_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card-container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"column"},[i("a",{attrs:{href:e.siteLiveUrl}},[i("div",{staticClass:"image-container",style:e.classStyle},[i("div",{staticClass:"image-container-text"},[i("h1",[e._v(e._s(e.siteName))])])])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"column"},[i("div",{staticClass:"text-container"},[i("h3",[e._v("What is "+e._s(e.siteName)+"?")]),i("p",[e._v(e._s(e.siteDescription))]),i("p",[e._v(e._s(e.siteFuturePlans))]),i("hr"),i("div",{staticClass:"social-buttons"},[i("h4",[e._v("See the live site or the github repository:")]),e.siteGithubUrl?i("a",{attrs:{href:e.siteGithubUrl,target:"_blank"}},[i("i",{staticClass:"fab fa-github-square"})]):e._e(),e.siteLiveUrl?i("a",{attrs:{href:e.siteLiveUrl,target:"_blank"}},[i("i",{staticClass:"fas fa-eye"})]):e._e()]),i("hr"),i("h4",[e._v("Technology Tags")]),i("p",[e._v(e._s(e.siteTags))])])])])])},y=[],k={name:"ProjectCard",data:function(){return{classStyle:{background:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(".concat(i("1771")("./"+this.siteBackgroundImage),")")}}},methods:{},props:{siteName:String,siteLiveUrl:String,siteGithubUrl:String,siteBackgroundImage:String,siteRouterLink:String,siteFuturePlans:String,siteDescription:String,siteTags:String}},C=k,x=(i("59f8"),Object(u["a"])(C,_,y,!1,null,"4d4343ee",null)),j=x.exports,S={name:"projects",components:{ProjectCard:j},data:function(){return{projects:[{siteName:"GC Scraper",siteGithubUrl:"https://github.com/e-vana/GC-Scraper",siteBackgroundImage:"gcscraper.png",siteRouterLink:"gc-scraper",siteDescription:"This application uses Puppeteer to scrape the classified sections of the Guitar Center website.  You can add and remove keywords from the search queue.  Depending on the interval set, the backend will scrape all of the desired keywords and show updated product data.  This application utilizes Vue, Vuex, Vue Router, Puppeteer, Express JS and MongoDB.",siteFuturePlans:"Future plans for this application involve setting up automatic alerting for products that meet certain price conditions.",siteTags:"Vue, Vuex, Vue Router, Express, NodeJS, MongoDB, Mongoose, jsonwebtoken, Express, Bcrypt, Nodemailer, MLAB, Javascript, Heroku, HTML and CSS."},{siteName:"Vue-Login-Template",siteGithubUrl:"https://github.com/e-vana/vue-login-template-public",siteBackgroundImage:"vue-login-template1.png",siteRouterLink:"vue-login-template",siteDescription:"Vue Login Template is a login system that allows users to register, login, get email confirmations, and reset passwords.  There are some primative admin tools that allow a user flagged as an admin and with an admin token to set user roles and permissions.  This application utilizes Vue, Vuex, Vue Router, Express JS and MongoDB.",siteFuturePlans:"Some future plans for this application involve building out more administrative tools to track user data and user page usage.",siteTags:"Vue, Vuex, Vue Router, Express, NodeJS, MongoDB, Mongoose, jsonwebtoken, Express, Bcrypt, Nodemailer, MLAB, Javascript, Heroku, HTML and CSS."},{siteName:"Vue-Cart-Template",siteGithubUrl:"https://github.com/e-vana/vue-cart-template",siteLiveUrl:"https://github.com/e-vana/vue-cart-template",siteBackgroundImage:"vue-cart-template1.png",siteRouterLink:"vue-cart-template",siteDescription:"Vue Cart Template is an e-store store front that allows users to register, sign in, view products and add products to their cart.  Users with admin privileges can also add or remove items from the database, as well as changed certain parameters on items to show them in different places in the application.",siteFuturePlans:"Some future plans involve writing back end code to be more strict with numbers in javascript as well as writing some features to mock checking out with the Stripe API.",siteTags:"Vue, Vuex, Vue Router, Express, NodeJS, MongoDB, Mongoose, jsonwebtoken, Express, Bcrypt, Nodemailer, MLAB, Javascript, Heroku, HTML and CSS."},{siteName:"Twitter Bot",siteGithubUrl:"https://github.com/e-vana/TrumpTwitterBot",siteLiveUrl:"https://twitter.com/TrumpBobTweets",siteBackgroundImage:"twitter-bot.png",siteRouterLink:"twitter-bot",siteDescription:"This application converts twitter posts to a meme-ified image with text overlay.  What started out as a not so funny joke turned into learning a lot about various APIs and Heroku deployment.",siteFuturePlans:"I have no future plans for this application but maybe reuse some of the Twitter integration code, most of it is very outdated and not reflective of my current ability but I thought that it was an interesting include.",siteTags:"Node, ExpressJS, Heroku"}]}}},T=S,P=(i("e1ee"),Object(u["a"])(T,b,w,!1,null,"0825b948",null)),L=P.exports,B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"resume-container"},[i("h2",[e._v("Resume")]),i("hr"),i("iframe",{attrs:{id:"resume-iframe",src:"https://docs.google.com/document/d/e/2PACX-1vQ366dlMy7w3wvUo7FtmxYPzUJ5UB-xkbCLL3N-NV-7uXFAmsq33WcUuwzyNDbTW3JIeG7l1eZgGLgt/pub?embedded=true"}})])}],V={name:"resume"},E=V,M=(i("24cf"),Object(u["a"])(E,B,U,!1,null,null,null)),O=M.exports;r["a"].use(p["a"]);var N=new p["a"]({mode:"hash",base:"process.env.BASE_URL",routes:[{path:"/",name:"home",component:g},{path:"/projects",name:"projects",component:L},{path:"/resume",name:"resume",component:O},{path:"*",component:g}]});r["a"].config.productionTip=!1,new r["a"]({router:N,render:function(e){return e(l)}}).$mount("#app")},"583c":function(e,t,i){e.exports=i.p+"img/gcscraper.d557d828.png"},"59f8":function(e,t,i){"use strict";var r=i("2a89"),a=i.n(r);a.a},8944:function(e,t,i){e.exports=i.p+"img/vue-cart-template1.2f5bef83.png"},b2b5:function(e,t,i){},bbe4:function(e,t,i){e.exports=i.p+"img/twitter-bot.26e2af9e.png"},cf05:function(e,t,i){e.exports=i.p+"img/logo.82b9c7a5.png"},e1ee:function(e,t,i){"use strict";var r=i("49c1"),a=i.n(r);a.a},eb0b:function(e,t,i){e.exports=i.p+"img/vue-login-template1.9db61fdf.png"}});
//# sourceMappingURL=app.c705fd2d.js.map