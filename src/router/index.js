import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import pMovie from '@/components/pMovie.vue'

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/pMovie/:mID',
      name: 'pMovie',
      component: pMovie,
      props: true
    }
]
})