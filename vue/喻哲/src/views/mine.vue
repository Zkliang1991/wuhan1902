
<template>
    <div>
        <van-pull-refresh
            v-model="isLoading" 
            @refresh="onRefresh"  
            loading-text="更新中..."
            loosing-text="下拉更新"
            >
            <div :class="changebg">
                <div class="top">
                    <my-head5></my-head5>
                    <userlogin></userlogin>
                    <attention></attention>
                </div>
                
            </div> 
            <Zhuxiao></Zhuxiao>
            <!-- <goodstate></goodstate> -->
        </van-pull-refresh>
        
    </div>
</template>

<script>
import store from '@/store'
import {mapState,mapActions} from 'vuex'

export default {
    name:"mine",
    data() {
    return {
      isLoading: false,

    }
  },
  computed: {
      ...mapState({
          changebg:state=>state.mine.changebg,
      })
  },
    beforeMount() {
    //   this.getCollections({
    //     url:"/vue/getCollections",
    //     cb:(res)=>{}
    // })
  },
  mounted() {
      this.getCollections({
        url:"/vue/getCollections",
        cb:(res)=>{}
    })
  },
  methods: {
      ...mapActions(['getCollections']),
    onRefresh() {
            setTimeout(() => {
                this.isLoading = false;
        }, 500);
    },
  },
}
</script>

<style lang="scss" scoped>
.top{
    background-color: #3173e4;
}
// .hadlogin{
//     background: url('../assets/images/bg1.jpg') center center no-repeat;
// }
// .notlogin{
//     background: url('../assets/images/bg2.jpg') center center no-repeat;
// }
</style>
