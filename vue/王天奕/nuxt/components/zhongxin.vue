<template>
    
    <div>   

        <van-uploader :after-read="afterRead" />
        <span>
            亲爱的用户请登录{{username}}
        </span>
    </div>
</template>
<script>

    

    export default {
        props:['username'],
        data(){
            return{
                
            }
        },
        methods: {
            afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
            }
        }
    };

</script>
