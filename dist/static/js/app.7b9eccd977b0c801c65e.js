webpackJsonp([5],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},r,!1,function(e){n("l64H")},null,null).exports,c=n("/ocq");o.a.use(c.a);var i=new c.a({mode:"history",linkActiveClass:"is-active",scrollBehavior:function(e,t,n){return n||{x:0,y:0}},routes:[{path:"/",component:function(e){return n.e(3).then(function(){return e(n("8/c5"))}.bind(null,n)).catch(n.oe)},meta:{title:"index"}},{path:"/list",component:function(e){return n.e(0).then(function(){return e(n("yEG0"))}.bind(null,n)).catch(n.oe)},meta:{title:"list"}},{path:"/login",component:function(e){return n.e(2).then(function(){return e(n("QrVH"))}.bind(null,n)).catch(n.oe)},meta:{title:"login"}},{path:"/page",component:function(e){return n.e(1).then(function(){return e(n("hBsA"))}.bind(null,n)).catch(n.oe)},meta:{title:"page",login:!0}}]});i.beforeEach(function(e,t,n){e.meta.title?(window.document.title=e.meta.title,n()):(window.document.title="....",n())}),i.beforeEach(function(e,t,n){var o=window.localStorage.getItem("sbtoken");!e.matched.some(function(e){return e.meta.login})||o&&null!==o?n():n({path:"/login",query:{redirect:e.path.slice(8)}})});var u=i,s=n("//Fk"),l=n.n(s),p=n("mtWM"),d=n.n(p),f=n("mw3O"),m=n.n(f);function h(e){return!e||200!==e.status&&304!==e.status&&400!==e.status?{code:"404",message:"网络异常"}:e.data}d.a.interceptors.request.use(function(e){return e},function(e){return l.a.reject(e)}),d.a.interceptors.response.use(function(e){return e},function(e){return l.a.reject(e)});var g={post:function(e,t){return d()({method:"post",baseURL:"https://549673720948957-shlef.alibiaojia.com/",url:e,data:m.a.stringify(t),headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",accessToken:null==window.localStorage.getItem("sbtoken")?"":window.localStorage.getItem("sbtoken").replace('"',"").replace('"',"")},timeout:1e4}).then(function(e){return h(e)}).catch(function(e){if(401==e.response.data.code)return u.push("/login"),!1;alert(e.response.data.message)})},get:function(e,t){return d()({method:"get",baseURL:"https://549673720948957-shlef.alibiaojia.com/",url:e,params:t,timeout:1e4,headers:{"X-Requested-With":"XMLHttpRequest",accessToken:null==window.localStorage.getItem("sbtoken")?"":window.localStorage.getItem("sbtoken").replace('"',"").replace('"',"")}}).then(function(e){return h(e)}).catch(function(e){if(401==e.response.data.code)return u.push("/login"),!1;alert(e.response.data.message)})}},w=n("mvHQ"),v=n.n(w),b={install:function(e){var t={save:function(e,t){localStorage.setItem(e,v()(t))},fetch:function(e){return JSON.parse(localStorage.getItem(e))||{}}};e.prototype.$local=t}},k=n("5K15"),y=n.n(k);o.a.prototype.$http=g,o.a.config.productionTip=!1,o.a.use(b),o.a.use(y.a),new o.a({el:"#app",router:u,components:{App:a},template:"<App/>",mounted:function(){document.dispatchEvent(new Event("render-event"))}})},l64H:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7b9eccd977b0c801c65e.js.map