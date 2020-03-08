import tchat from './components/tchat.js'
import notification from './components/notifications.js'
let bus = new Vue()
Vue.prototype.$bus = bus
const app = new Vue({
    el: '#app',
    components:{
        tchat,
        notification
    },
    data() {
        return {
            message:"hello"
        }
    },
})