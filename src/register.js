import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from '@/components/header-detail/header-detail'
import ShowCartList from '@/components/shop-cart-list/shop-cart-list'
import ShowCartSticky from '@/components/shop-cart-sticky/shop-cart-sticky'
import Food from '@/components/food/food'

createAPI(Vue, HeaderDetail)
createAPI(Vue, ShowCartList)
createAPI(Vue, ShowCartSticky)
createAPI(Vue, Food)
