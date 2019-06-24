<template>
  <div>
    <div>
      <img :src="userPic" alt="上传图片" @click.stop="uploadImg" class="userPic">
      <input type="file" ref="one" accept="image/*" @change="upload" style="display:none;">
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // userPic: "",
        }
    },
    mounted() {
        // if(localStorage.userPic){
        //     this.userPic = localStorage.userPic;
        // }else{
        //     this.userPic = require("@/assets/images/duanwei.jpg");
        // }
    },
    computed: {
        userPic:{
            get(){
                // localStorage.userPic = this.$store.state.userPic;
                return this.$store.state.userPic;
            },
            set(val){
                return (this.$store.state.userPic = val)
            },
        }
    },
    methods: {
        uploadImg(){
            this.$refs.one.click(); // js中的 DOM 对象 click
        },
        upload(){
            // console.log("准备上传");
            // let file = this.$refs.one.files[0]; // 需要上传的 文件
            // let data = new FormData(); // 用js 新建一个表单对象    也可以html中 写 from标签

            // data.append("avatar",file);

            // this.$axios({
            //     url:"/lol/uploadAvatar",
            //     methods:"POST",
            //     contentType:false,
            //     processData:false,
            //     data:data
            // }).then(res=>{
            //     console.log(res);
            // })

            console.log("准备上传 ");
            let file = this.$refs.one.files[0];   
            let data = new FormData();   
            data.append("avatar",file);

            // this.$axios({
            //     url:"/lol/uploadAvatar",
            //     method:"POST",
            //     contentType:false,
            //     processData:false,
            //     data:data
            // }).then(res=>{
            //     console.log(res);
            //     this.userPic = res.data.avatarurl.replace(/public/,'http://localhost:2333/');
            //     localStorage.userPic = this.userPic;
            // })

            var parent ={
                url:"/lol/uploadAvatar",
                method:"POST",
                contentType:false,
                processData:false,
                data:data
            };
            this.$store.dispatch("upload",parent);


        }
    },
}
</script>

<style lang="scss" scoped>
.userPic {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  margin: 0 auto;
}
</style>
