import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/search'
import List from '@/components/list'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'//:li?',
      component:Search
    },
    {
      path:'/list',
      component:List
    },
  ]
})
