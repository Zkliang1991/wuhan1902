<template>
    <div>
        <div id="photo">
            <img :src="touxiang" alt="上传头像" @click.stop="scimg" class="tou">
            <input type="file" ref="one" accept="image/*" @change="shangchuan" class="hiddenInput">
        </div>
    </div>
</template>

<script>
export default {
    name:"scimg",
    data(){
        return{
            touxiang:require("@/assets/images/photo.png")
        }
    },
    methods:{
        scimg(){
            this.$refs.one.click();
        },
        shangchuan(){
            console.log("准备上传图片");
            let file=this.$refs.one.files[0];  //需要上传的图片
            let data=new FormData();   //新建表单对象 <form></form>
            data.append("avatar",file); //需要上传到服务器的数据

            this.$axios({
                url:"/vue/getImg",
                method:"POST",  //请求方式
                contentType:false,
                processData:false,
                data:data
                // processData: false,//默认情况下，通过data选项传递进来的数据，如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
                // contentType: false,//数据编码格式不使用jquery的方式 为了避免 JQuery 对其操作，从而失去分界符，而使服务器不能正常解析文件。data:formData,
        
            }).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>
<style scoped>
.tou{
    width:1.8rem;
    height:1.8rem;
    border-radius: 50%;
}
.hiddenInput{
    display: none;
}
</style>
