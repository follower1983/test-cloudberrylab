import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import 'normalize.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'

new Vue({
  el: '#app',
    // router,
    components: { App },
    template: '<App/>'
    //render: h => h(App)
})
