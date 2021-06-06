import Router from 'vue-router'
import Vue from 'vue'


import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Pricing from '../components/Pricing.vue'
import Services from '../components/Services.vue'
import Scheduler from '../components/Scheduler.vue'
Vue.use(Router)
const router= new Router({
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: Pricing
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/scheduler',
    name: 'scheduler',
    component: Scheduler
  }
],
mode:'history'
})

export default router
