<template>
    <div class="wrap" width="100%" height="100%">
        <Head2 title2="书籍详情" :lico="lico" :rico="rico"></Head2>
        <div class="bookint_top">
            <img :src='tem.cover' alt="" width="120px" height="160px">
            <div class="bookint_top_left">
                <p class="bookint_title">{{tem.title}}</p>
                <p class="bookint_author">作者：{{tem.author}}</p>
                <p class="bookint_type">类型：{{tem.minorCate}}</p>
            </div>
        </div>
        <div class="bookint_intro">
            <p><b>简介：</b></p>
            <p>{{tem.shortIntro}}</p>
        </div>
        <div class="bookint_comment">
            <p><b>书友评论：</b></p>
            <p>暂无</p>
        </div>
        <div class="bookint_bottom">
            <span v-if="removeorshow" @click="collect"><u>加入书架</u></span>
            <span v-else @click="remove"><u>移除书架</u></span>
            <span><u>全本缓存</u></span>
            <span style="background-color:darkturquoise;color:#fff"><u>立即阅读</u></span>
        </div>
        <div class="shadow" v-if="cover">
            <div class="tip">
                <p>您还未登陆</p>
                <p @click="bookinttologin">前往登陆</p>
                <p @click="notyet">暂不登陆</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'bookInt',
    data(){
        return{
            lico:"&#xe669;",
            rico:"",
            book:[],
            tem:[],
            cover:false,
            removeorshow:true
        }
    },
    methods: {
        collect(){
            if(sessionStorage.userInfo){
                this.$axios.post("/vue/personcollect",{bookid:this.tem._id}).then(res=>{
                    // console.log(res)
                    this.removeorshow = false
                })
            }else{
                this.cover = true
            }
        },
        remove(){
            console.log("移除书架")
            this.$axios.post("/vue/personcollectremove",{bookid:this.tem._id}).then(res=>{
                this.removeorshow = true
            })
        },
        bookinttologin(){
            this.$router.push({name:'login'})
        },
        notyet(){
            this.cover = false
        }
    },
    mounted(){
        this.$axios.get("/vue/noveldetail",{
            params:{
                bookid:this.$route.params.bookid
            },
        }).then(res=>{
            console.log(res)
            this.tem = res.data.result;
            this.removeorshow = res.data.ishave
            // console.log(decodeURIComponent(this.tem[0].cover).replace("/agent/",""))
            this.tem[0].cover = (decodeURIComponent(this.tem[0].cover).replace("/agent/",""))   //转img格式
            this.tem = this.tem[0]      //数组转对象
        });
    }
}
</script>

<style lang="scss" scoped>
.wrap{
    background-color:#fff;
    position:relative
}
.bookint_top{
    padding: 20px;
    overflow: hidden;
    border-bottom: 5px solid rgb(243, 241, 241);
}
.bookint_top>img{
    float: left;
}
.bookint_top .bookint_top_left{
    float: left;
}
.bookint_top .bookint_top_left p{
    text-align: left;
    margin: 20px 0 0 20px
}
.bookint_title{
    font-size: 20px;
}
.bookint_author,.bookint_type{
    font-size: 14px;
    color: #777
}
.bookint_intro,.bookint_comment{
    border-bottom: 5px solid rgb(243, 241, 241);
    padding: 15px;
    text-align: left;
}
.bookint_intro p:last-child,.bookint_comment p:last-child{
    font-size: 14px;
    color: #777;
    padding: 2px;
    line-height: 25px;
}
.bookint_bottom{
    display: flex;
    justify-content:space-around;
    position: fixed;
    bottom: 0;
    left:0;
    right: 0;

}
.bookint_bottom span{
    width: 33.3%;
    line-height: 45px;
    border-top:1px solid rgb(209, 200, 200);
    color: blue
}
.shadow{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    left: 0;
    top: 0
}
.tip{
    width: 50%;
    height: 25%;
    border-radius: 20px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
}
.tip p:nth-of-type(1){
    margin-top: 30px;
    font-size: 24px;
}
.tip p:nth-of-type(2),.tip p:nth-of-type(3){
    font-size: 18px;
    width: 50%;
    border-top: 1px solid #000;
    line-height: 40px;
}
.tip p:nth-of-type(2){
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: darkturquoise;
    border-radius: 0 0 0 20px;
}
.tip p:nth-of-type(3){
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>

