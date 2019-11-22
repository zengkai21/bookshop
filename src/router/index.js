import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from "../components/tabbar/HomeContainer.vue"
import ClassifyContainer from "../components/tabbar/ClassifyContainer.vue"
import ShopcarContainer from "../components/tabbar/ShopcarContainer.vue"
import UserContainer from '../components/tabbar/UserContainer.vue'
import UserInfo from '@/components/User/UserInfo.vue'
import UserOrder from '@/components/User/UserOrder.vue'
import UserAddress from '@/components/User/UserAddress.vue'
import AddressEdit from '@/components/User/AddressEdit.vue'
import ProductInfo from '../components/product/productinfo.vue'
import Login from '@/components/User/Login.vue'
Vue.use(Router)

const router= new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/classify',
      component: ClassifyContainer,
    },
    {
      path: '/shopcar',
      component: ShopcarContainer,
      meta:{
        title:'',
        requireAuth:true
      },
    },
    {
      path: '/user',
      component: UserContainer,
      meta:{
        title:'',
        requireAuth:true
      }
    },
    {
      path: '/user/info',
      component: UserInfo
    },
    {
      path: '/user/order',
      component: UserOrder
    },
    {
      path: '/user/address',
      component: UserAddress
    },
    {
      path: '/userAddress/addressedit',
      component: AddressEdit
    },
    {
      path: '/productInfo/:id',
      component: ProductInfo
    },
    {
      path: '/user/login',
      component: Login
    }
  ]
})

export default router