import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetial from '@/components/header-detail/header-detail'
import ShowCartList from '@/components/shop-cart-list/shop-cart-list'
import ShowCartSticky from '@/components/shop-cart-sticky/shop-cart-sticky'

createAPI(Vue, HeaderDetial)
createAPI(Vue, ShowCartList)
createAPI(Vue, ShowCartSticky)
