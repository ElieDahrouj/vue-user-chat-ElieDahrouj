let User = {
    template: `
        <div style="overflow-y: scroll;height: 86vh;">
        <div style="display: flex;margin: 15px 0;;align-items: center;justify-content: center" v-for="dataUser in dataUsers">
            <div style="width: 65%;display: flex;justify-content: space-between;align-items: center;">
                <img style="width: 40px;border: 1px solid #efeafe;height: 40px;border-radius: 100%;margin-right: 5px;" :src="dataUser.photo" alt="">
                <span style="color: #efeafe">{{dataUser.name}}</span>
            </div>
        </div>
        </div>
    `,
    props:{
        allUsers:Array
    },
    data(){
        return{
            dataUsers: this.allUsers
        }
    }
};

export default User;