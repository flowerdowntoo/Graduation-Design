
// #ifndef VUE3
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import float from '@/component/float/float.vue'		//引入组件
import fengexian from '@/component/fengexian/fengexian.vue'		//引入组件
import goodsCarts from '@/component/goods-carts/goods-carts.vue'		//引入组件

Vue.use(uView)
import App from './App'

Vue.config.productionTip = false

Vue.component('my-float',float)						//进行全局挂载
Vue.component('my-divider',fengexian)						//进行全局挂载
Vue.component('goods-carts',goodsCarts)
App.mpType = 'app'
const app = new Vue({
    ...App
})
// 3. 注册你需要的组件
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)

  return {
    app
  }
}

// #endif