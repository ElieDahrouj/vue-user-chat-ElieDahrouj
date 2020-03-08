let message = {
    template:`
        <div>
            <div v-for="msg in getMsg" style="margin: 15px;display: flex;align-items: flex-start;justify-content: flex-start;">
                <div>
                    <img style="object-fit: cover;width: 50px;border: 1px solid #efeafe;height: 50px;border-radius: 100%;margin-right: 10px;" :src="msg.avatarPrivate" alt="">
                </div>
                <div style="min-width: 140px;margin: 0;background-color: #c394cb;padding: 10px;border-radius: 10px;">
                    <p style="margin: 0;display: flex;justify-content: space-between;align-items: flex-start;"><strong>Naruto :</strong> <strong style="color: #efeafe">{{msg.time}}</strong></span>
                    <p style="margin:0;color: whitesmoke;">
                        {{msg.content}}
                    </p>
                </div>
            </div>
        </div>
    `,
    props:{
        getMsg:Array
    },
};
export default message;