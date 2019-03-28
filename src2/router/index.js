import Vue from 'vue'
import Router from 'vue-router'
import Line from '@/components/line'
import My from '@/components/my'
import Shopcart from '@/components/shopcart'
import Xqye from '@/components/xqye'
import Dizhi from '@/components/dizhi'
import Tijiao from '@/components/tijiao'
import Address from '@/components/Address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Line
    },
    {
      path:'/my',
      component:My
    },
    {
      path:'/shopcart',
      component:Shopcart
    },
    {
      path:'/xqye',
      component:Xqye
    },
    {
      path:'/dizhi',
      component:Dizhi
    },{
      path:'/tijiao',
      component:Tijiao
    }
    ,{
      path:'/address',
      component:Address
    }
  ]
})
