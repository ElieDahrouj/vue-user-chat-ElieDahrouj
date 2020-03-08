import User from './user.js'
let Users = {
    template: `
        <div style="background-color: #373f80;min-width: 200px;">
            <h1 style="font-size: 20px;background-color: rgb(40,46,94);margin: 0;padding: 25px 0">Users Connected</h1>
            <User class="scrollUser" :allUsers="this.randomCard"></User>
        </div>
    `,
    data(){
        return{
            randomCard : [],
        }
    },
    components:{
        User
    },
    mounted(){
        setInterval(this.newUser,8000)
    },
    methods:{
        newUser(){
            let user = {
                name: faker.name.firstName(),
                photo: faker.image.avatar()
            }
            this.randomCard.push(user)
            this.$bus.$emit('user',user.name)
        }
    }
};
export default Users;