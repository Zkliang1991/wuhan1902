
<template>
    <div id="head">
        <div class="head">
            <div>
                <p class="scan">
                    <van-icon name="scan" />
                    <span>扫一扫</span>
                </p>
                <div class="search">
                    <van-icon name="search" class="searchIcon"/>
                    <input type="text" placeholder="请输入搜索内容" @click="goSearch">
                </div>
                <p class="vip">
                    <van-icon name="scan" />
                    <span>会员码</span>
                </p>
                <p class="msg">
                    <van-icon name="comment-o" />
                    <span>消息</span>
                </p>
            </div>
            
        </div>
        <!-- <div class="">
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch"
                right-icon="photograph"
                >
            <div slot="action"></div>
            </van-search>
        </div> -->
        
    </div>
</template>


<script>
export default {
    data() {
        return {
            value:"",
        }
    },
    methods: {
        goSearch(){
            this.$router.push('/search')
        },

    },
}
</script>

<style lang="scss" scoped>
#head{
    
}
.head{
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    color: #fff;
    >div{
        width: 100%;
        display: flex;
        justify-content: space-around;
        >p{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.45rem;
            >span{
                font-size: 0.2rem;
            }
        }
        >.search{
            display: flex;
            align-items: center;
            position: relative;
            >input{
                height: .5rem;
                width: 4.5rem;
                display: block;
                border: none;
                border-radius: .25rem;
                color: grey;
                padding-left: 12%;
                font-size: 0.25rem;
            }
            >.searchIcon{
                color: grey;
                position: absolute;
                top: 50%;
                left: 2%;
                transform: translateY(-51%)
            }
        }
    }
    
}
    // .van-nav-bar{
    //     background-color:transparent;
    // }
    
</style>
