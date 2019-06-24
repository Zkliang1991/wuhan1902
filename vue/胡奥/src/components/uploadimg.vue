<template>
    <div>
        <div id="photo">
            <img :src="txiang" alt="上传头像" @click.stop="uploadimg" class="tx">
            <input type="file" ref="one" accept="image/*" @change="updata" class="hiddenput">
        </div>
    </div>
</template>
<script>
export default {
    name:"avatar",
    data(){
        return{
            txiang:require('@/assets/images/Pikachu.jpg'),
        } 
    },
     methods:{
        uploadimg(){
            this.$refs.one.click();
        },
        updata(){
            let file = this.$refs.one.files[0];
            let data = new FormData();
            data.append("avatar",file);

            this.$axios({
                url:"/vue/uploadAvatar",
                method:"POST",
                contentType:false,
                processData:false,
                data:data,
            }).then(res=>{
                this.txiang = res.data.avatarurl.replace(/public/,"");
            })
            
        }
    }
    
}
</script>
<style scoped>
    .tx{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
    }
    .hiddenput{
        display: none;
    }
</style>
