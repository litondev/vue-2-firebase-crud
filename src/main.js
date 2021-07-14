import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import App from './App.vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';

import AddItem from './components/AddItem.vue'
import EditItem from './components/EditItem.vue'
import ListItem from './components/ListItem.vue'
import Home from './components/Home.vue'

import '../node_modules/nprogress/nprogress.css'

Vue.use(VueRouter)
Vue.use(firestorePlugin)
Vue.config.productionTip = false

const routes = [
 {
  name: 'Home',
  path: '/',
  component: Home
 },
 {
  name: 'Add',
  path: '/add',
  component: AddItem
 },
 {
  name: 'Edit',
  path: '/edit/:id',
  component: EditItem
 },
 {
  name: 'List',
  path: '/index',
  component: ListItem
 }
];

const router = new VueRouter({ mode : 'history',routes : routes});

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
