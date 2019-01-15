import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// .default
const landingPage = () => import('@/components/LandingPage/LandingPage.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: landingPage
    }, {
      path: '*',
      redirect: '/'
    },
    {
      path: '/landing-page',
      name: 'landing-page',
      component: landingPage
    }
  ]
})
