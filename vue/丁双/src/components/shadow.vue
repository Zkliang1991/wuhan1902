<template>
    <div>
        <div id = "shadow">
            <div id = "center"> 
                <input id = "content_title" type="text" placeholder="请输入评论标题...可不填写" style = "width:248px">
                <textarea v-model="content" onKeyDown='if (this.value.length>=30){event.returnValue=false}' name="content" cols="30" rows="10" placeholder="请输入评论内容..."></textarea>
                <div>
                    <span style = "color:#fff">商品评分:</span>
                    <van-rate
                    v-model="value"
                    icon="like"
                    :size="35"
                    allow-half 
                    void-icon="like-o"
                    color = "red"
                    />
                </div>
               <van-button size="large"  type="primary" @click = 'submit' style = "width:250px">提交评论</van-button>
            </div>
            
        </div>
    </div>
</template>
 
<script>
// var content = document.getElementById('content')
import { Toast } from 'vant';
import { mapMutations } from 'vuex';
export default {
    name:'Shadow',
    data(){
        return {
            value:4.5,
            content:'',
        }
    },
    computed: {
        content:{
            get(val){
                // console.log(val)
            },
            set(newval){
                // console.log(newval)
            }
        }
    },
    methods:{
        ...mapMutations(['changeLists']),
        submit(){
            shadow.style.display = "none";
            var nickname = JSON.parse(sessionStorage.nickname).nickname
            if(content_title != '' && this.content != ''){
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hour = date.getHours();
                var minute = date.getMinutes();
                var second  = date.getSeconds();
                var time = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

                // 保存商品评论
                this.$axios.get('/vue/addComments',{
                    params:{
                        nickname:nickname,
                        content_title:content_title.value,
                        content:this.content,
                        goodId:this.$route.params.keyword,
                        time:time,
                        value:this.value,
                        touxiang:sessionStorage.touxaing
                    }
                }).then(res=>{
                    this.$axios.get('/vue/commentData',{
                        params:{
                            goodId:this.$route.params.keyword
                        }
                    }).then(res=>{
                        this.$store.commit('changeLists',res.data.result);
                        content_title.value = "";
                        this.content = "";
                    })
                })
            }else{
                Toast({
                    message:'标题和内容不能为空',
                    duration:400,
                    mask:true
                })
            }
        }
    }
}
</script>




<style scoped>
    #shadow{
        position:absolute;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.6);
        top:0;
        left:0;
        z-index:1000;
        display:none
    }
    #center{
        position:absolute;
        left:80px;
        top:244px;
    }
    .van-rate{
        float:right;
        margin-right:80px;
    }
</style>
