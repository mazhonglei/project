  import Vue from 'vue'
  import App from './App.vue'
  import router from './router'
  import store from './store/store'
  import Axios from 'axios';
  import './assets/css/font/iconfont.css'
  //引入element-ui
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);
  Vue.prototype.$ajax=Axios;
  import Mint from 'mint-ui'
  import fastClick from 'fastclick';
  fastClick.attach(document.body);
  import 'mint-ui/lib/style.css'
  Vue.use(Mint);
  Vue.config.productionTip = false
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'public/favicon.ico',
    attempt: 1
  });
  import VuePreview from 'vue-preview'
  Vue.use(VuePreview);

  // require styles
  import 'swiper/dist/css/swiper.css'

  Vue.use(VueAwesomeSwiper);
  import moment from 'moment'//导入文件
  Vue.use(moment);
    Vue.filter('timeDate',function (value) {
          return moment(value).format('YYYY-MM-DD');
  });
    import toast from './components/toast/index';
    Vue.use(toast);
    //百度地图
  import BaiduMap from 'vue-baidu-map'
  Vue.use(BaiduMap, {
    ak: 'ocIqGFCQLLNdbDCUzIA3HgzxC9DSKOkz'
  });
  window.addEventListener('popstate', function (e) {
    router.isBack = true
  },false)
  //引入ly-tab
  import LyTab from 'ly-tab';
  Vue.use(LyTab);
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
