let notification = {
    template:`
        <transition name="fade">
            <section v-if="notif" style="position: absolute;z-index: 22;left: 22%;background-color: rgb(40,46,94);width: 70%;padding: 15px;margin-top: 0.5em;border-radius: 3px">
                <span style="padding: 15px;color: whitesmoke">{{notif}} vient de se connecter</span>
            </section>
        </transition>
    `,
    data(){
        return{
            notif :false
        }
    },
    mounted(){
        this.$bus.$on("user", data => {
            this.notif = data
            setTimeout(()=>{
                this.notif = false
            },3000)
        })
    }
};

export default notification;