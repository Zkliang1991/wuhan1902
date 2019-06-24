<template>
    <div>
         <div id="photo">
             <img :src="touxiang" alt="上传头像" @click.stop="uploadImg" class='tou'>
             <input type="file" ref='one' accept='image/*' @change="shangchuan" class='hiddenInput'>
             <!-- type="file" 属性  表示上传所有文件 -->
         </div>
    </div>
</template>


<script>
export default {
    name:'avatar',
    data(){
        return {
            touxiang:require('@/assets/images/guo.jpg')
        }
    },
    methods:{
        uploadImg(){
            this.$refs.one.click();  //点头像的的时候  触发下面input的这个事件
            
        },
        shangchuan(){
             console.log('准备上传')
             let file=this.$refs.one.files[0]  //0表示需要上传的图片  第几个
             let data = new FormData(); // 新建一个表单对象 相当于HTML的 <form></form>
             data.append('avatar',file);

             this.$axios({
                url:"/vue/uploadAvatar",
                method:"POST",
                contentType:false,
                processData:false,
                data:data
            }).then(res=>{
                console.log(res);
                this.touxiang = res.data.avatarurl.replace(/public/,'http://localhost:1902/');
                localStorage.touxiang = this.touxiang;
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.tou{ 
  width: 25vw;
  height: 15vh;
  background-color: red;
  border-radius:40%;
  margin: 0 auto;
}
.hiddenInput{
    display: none;
}
</style>


