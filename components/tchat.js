import Users from './users.js'
import message from './message.js'
let tchat = {
    template:`
    <section>
        <div style="display: flex; min-height: 100vh">
            <Users></Users>
            <div style="width:100%;background: linear-gradient(RGB(239, 234, 254),RGB(200, 180, 231));display: flex;flex-direction: column;justify-content: flex-end;">
                <div class="scrollMsg">
                    <message :getMsg="this.arrayMsg"></message>
                </div>
                <div style="display: flex;">
                    <textarea @keypress.enter="display" v-model="messageText" style="border-right: none;border-top: 1px solid #efeafe;background-color: transparent;padding: 10px;width:90%" cols="100">{{messageText}}</textarea>
                    <button @click="display" style="width: 8%;border: none;background-color: transparent;outline: none">
                        <img src="https://img.icons8.com/ios-filled/32/000000/forward-arrow.png">
                    </button>
                </div>
            </div>
        </div>
    </section>
    `,
    data(){
        return{
            messageText:null,
            arrayMsg:[]
        }
    },
    components: {
        Users,
        message
    },
    methods:{
        display(){
            if (this.messageText !==null) {
                this.arrayMsg.push({
                    content: this.messageText,
                    avatarPrivate : "https://i.ytimg.com/vi/siiZeMJhw-s/hqdefault.jpg",
                    time: new Date().getHours()+':'+new Date().getMinutes()
                })
                this.messageText = null
                let scrollCalcul = document.querySelector('.scrollMsg')
                setTimeout(()=>{
                    scrollCalcul.scrollTop = scrollCalcul.scrollHeight
                },100)
            }
        }
    }
};
export default tchat;