<template>

    <div>
        <div id="text">
            <div>
                <div><img :src="img" alt="" class="img"> <span class="kefu">客服：爱你哟</span></div>
                <p class="p">欢迎光临花嫁小店，有什么可以帮您</p>
            </div>
            <div class="par">
                <div class="civ" v-show='flag'>
                <div><span class="sp">高级会员:{{username}}</span> <img :src="src" alt="" class="img"></div>

                <div class="my" style="background-color: orange"><span class="font">{{msg}}</span></div>

            </div>
            </div>
            
            <div v-show='flag'>
                <div><img :src="img" alt="" class="img"> <span class="kefu">客服：爱你哟</span></div>
                <p class="p">店主不在家，改日再聊天吧</p>
            </div>

        </div>
        <van-search v-model="value" left-icon="chat-o" placeholder="请输入内容" show-action shape="round" @search="onSearch">

            <div slot="action" @click="onSearch">发送</div>
        </van-search>
    </div>
</template>
<script>
    import { Dialog } from 'vant';
    export default {

        created() {
      
            this.src = localStorage.img;
            this.username = sessionStorage.username
        },
        data() {
            return {
                value: '',
                img: require('@/assets/images/2.jpg'),
                src: "",
                username: "",
                flag: false,
                msg: ""
            }
        },
        methods: {
            onSearch() {
             
             
                if (this.value) {
                    
                    this.msg = this.value
                    this.flag = true;
                    this.value = ""
                        
                } else {
                    Dialog.alert({
                        message: '请输入内容'
                    })
                }


            }
        }
    }

</script>
<style scoped>
    .par{
        overflow: hidden;
    }
    .font {
        color: black;
    }

    .sp {
        margin-right: 0.3rem;
        font-size: 0.4rem;
        color: blanchedalmond
    }

    .civ {
        float: right;
    }

    .my {

        font-size: 0.3rem;
        height: 0.3rem;
        background-color: #fff;
        padding: 0.2rem 0.1rem;
        border-radius: 0.3rem
    }

    .kefu {
        /* margin-bottom: 0.5rem; */
        margin-left: 0.3rem;
        display: inline-block;
        font-size: 0.3rem;
        color: darkcyan
    }

    #text {
        width: 7rem;
        height: 4rem;
        background-color: #ccc;
        border-radius: 0.1rem;
        overflow-y: auto;
        padding: 0.3rem 0.2rem;
        box-sizing: border-box;
    }

    .img {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        margin-bottom: 0.1rem;
        display: inline-block;
        vertical-align: middle;
    }

    .p {
        font-size: 0.3rem;
        height: 0.3rem;
        background-color: #fff;
        padding: 0.2rem 0.1rem;
        border-radius: 0.3rem;
        margin-bottom: 0.3rem;
    }
</style>