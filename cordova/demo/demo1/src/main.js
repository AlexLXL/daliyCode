import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

document.addEventListener('deviceready',function () {
    new Vue({
        render: h => h(App),
    }).$mount('#app')
})

