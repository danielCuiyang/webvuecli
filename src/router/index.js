import Vue from 'vue'
import Router from 'vue-router'


const index = r => require.ensure([], () => r(require('../page/index')), 'index')
const list = r => require.ensure([], () => r(require('../page/list')), 'list')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const page = r => require.ensure([], () => r(require('../page/page')), 'page')

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      component: index,
      meta: {title: 'index'},
    },
    {
      path: '/list',
      component: list,
      meta: {title: 'list'},
    },
    {
      path: '/login',
      component: login,
      meta: {title: 'login'},
    },
    {
      path: '/page',
      component: page,
      meta: {title: 'page',login:true},
    },
  ]
})

//设置title
router.afterEach((to,from)=>{
  if(to.meta.title){
    document.getElementById("title").innerHTML = to.meta.title;
  }else {
    window.document.title = '....';
  }
})
export default router;
