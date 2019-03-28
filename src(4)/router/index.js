import Vue from 'vue'
import Router from 'vue-router'
import Line from '@/components/line'
import My from '@/components/my'
import Shop from '@/components/shop'
import Xiang from '@/components/xiang'
import Address from '@/components/address'
import Qued from '@/components/qued'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'line',
      component: Line
    },
    {
      path:'/my',
      component:My
    },
    {
      path:'/shop',
      component:Shop
    },
		{
			path:'/xiang',
			component:Xiang
		},
		{
			path:'/address',
			component:Address
		},
		{
			path:'/qued',
			component:Qued
		}

  ]
})
