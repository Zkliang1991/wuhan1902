<template>
    <div>

        <Head msg="个人中心"></Head>

        <changeLogin :img="img">
            <van-uploader :after-read="afterRead" class="read" >
                    <van-button icon="photo" type="primary">切换图像</van-button>
            </van-uploader>
        </changeLogin>

        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="已买过的商品,点击查看" name="1" class="red" icon="send-gift">
                <maiGuo></maiGuo>
            </van-collapse-item>
            <van-collapse-item title="点击查看商品评论" name="2" icon="browsing-history">
                <allpl></allpl>
            </van-collapse-item>
            <van-collapse-item title="售后" name="3" icon="balance-list-o">
                <shouHou></shouHou>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>
<script>
    import changeLogin from "@/components/changeLogin.vue"
    import shouHou from '@/components/shouhou.vue'
    import maiGuo from "@/components/maiguo.vue"
    import { mapState, mapMutations } from 'vuex'
    import allpl from "@/views/allpl.vue"
    export default {
        components: { changeLogin, maiGuo, allpl,shouHou },
        data() {
            return {
                activeName: "0",
                img: "",
            }
        },
        created() {
            this.img = localStorage.img
        },
        computed: {

        },
        methods: {
            // ...mapMutations(['tupian']),
            afterRead(val) {
                console.log(val)
                var fd = new FormData();
                console.log(val.file.name)
                var file = val.file
                fd.append('avatar', file)
                this.$axios({
                    method: "POST",
                    url: "/vue/upload",
                    contentType: false,//数据编码的格式不适用jq的方法，避免jq对其操作
                    processData: false,//默认情况下，通过data选项传递过来的数据，如果是一个对象会将其转换成一个字符串
                    data: fd,
                }).then(res => {
                    console.log(res)
                    this.img = res.data.avatarurl.replace(/public/, '')
                    // this.tupian(img)
                    localStorage.img = this.img
                })
            },
           
        }
    }
</script>
<style>
    .read {
        margin-left: 0.3rem;
        
    }

    .van-cell__right-icon {
        color: #666;
        font-size: 0.6rem
    }
    .van-uploader__upload{
        width: 0.5rem;
     
    }
    .van-uploader{
        /* height: 2rem; */
    }
</style>