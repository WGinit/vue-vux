import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import About from '@/views/about'
import News from '@/views/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '/about/:id',
      name: 'about',
      component: About
    },
    {
      path: '/news/:id',
      name: 'news',
      component: News
    },
    // { 
    //   path: "*",
    //   redirect: "/"
    // }
  ]
});
