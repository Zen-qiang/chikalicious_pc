import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index.vue'
const Home = resolve => require(['@/page/Home.vue'], resolve)
const Store = resolve => require(['@/page/Store.vue'], resolve)
const News = resolve => require(['@/page/News.vue'], resolve)
const About = resolve => require(['@/page/About.vue'], resolve)
const Contact = resolve => require(['@/page/Contact.vue'], resolve)
const NewsDeatil = resolve => require(['@/page/NewsDetail.vue'], resolve)
const ProductDetail = resolve => require(['@/page/ProductDetail.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: 'Home',
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: Home
        },
        {
          path: 'Store',
          name: 'Store',
          component: Store
        },
        {
          path: 'News',
          name: 'News',
          component: News,
          props: {
            paramsType: 1
          }
        },
        {
          path: 'Arts',
          name: 'Arts',
          component: News,
          props: {
            paramsType: 2
          }
        },
        {
          path: 'About',
          name: 'About',
          component: About
        },
        {
          path: 'Contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: ':type/Detail/:id',
          name: 'Detail',
          component: NewsDeatil
        },
        {
          path: 'ProductDetail/:id',
          name: 'ProductDetail',
          component: ProductDetail,
          alias: '/Home/product/:id'
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
