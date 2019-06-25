
<template>
    <div id="good">
        <!-- <div class="yulan">
            <van-image-preview
                v-model="show"
                :images="images"
                @change="onChange"
                >
                <template v-slot:index>1/1</template>
            </van-image-preview>
            <img :src="images" alt="">
        </div> -->
        <div class="goodPic">
            <van-swipe :autoplay="0">
                <van-swipe-item>
                    <img :src="singel.good.img" alt="">
                </van-swipe-item>        
            </van-swipe>
        </div>
        <div class="goodIntro">
            <p class="price_p"><span>￥</span>{{singel.good.price}}</p>
            <p class="name_p">{{singel.good.name}}</p>
            <p class="tips">618狂欢年终盛宴，狂欢继续，全场低至3折！大额优惠券可联系客服抢先录取：满减叠券：满300-90【点击提前领券】<a>查看></a></p>
        </div>

    </div>
</template>



<script>
import { ImagePreview } from 'vant'
import { mapState } from 'vuex';



export default {
  data() {
    return {
        show: true,
        index: 0,
        // images: this.image,
    };
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
    onBuyClicked(){

    },
    onAddCartClicked(){
        
    }
  },
  computed: {
      ...mapState(['singel'])
  },
}
</script>

<style lang="scss" scoped>
#good{
    width: 100%;
    height: 100%;
}
img{
    width: 100%;
    border-bottom-right-radius:.2rem;
    border-bottom-left-radius:.2rem;
}
.goodPic{
    margin-bottom: .2rem; 
}
.goodIntro{
    background-color: #fff;
    border-radius: .2rem;
    overflow: hidden;
    >p{
        text-align: left;
        padding: .1rem .25rem;
    }
    >.price_p{
        color: red;
        font-size: .5rem;
        >span{
            font-size: .32rem;
        }
    }
    >.name_p{
        font-weight: bold;
        color: #000;
    }
    >.tips{
        font-size: 0.15rem;
        color: gray;
        a{
            color: red;
        }
    }
}

</style>
