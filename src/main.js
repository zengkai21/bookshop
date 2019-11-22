// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router//index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'
import VueCookies from 'vue-cookies'
Vue.use(VueAxios, axios)
Vue.use(VueCookies)

// this.$cookies.config(3,'/')

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';
Vue.use(Vant)

Vue.mixin({
  methods: {
    onBack() {
      this.$router.go(-1);
    }
  }
});
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requireAuth)){
    if(store.getters.getuserList==""){
      next({
        path:'/user/login'
      })
    }else{
      next()
    }
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
