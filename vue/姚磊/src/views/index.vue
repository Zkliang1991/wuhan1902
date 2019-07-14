<template>
    <div>  
        
        <router-view></router-view>
        <!-- <van-loading size="24px" type="spinner" color="#1989fa" vertical>加载中...</van-loading> -->
        <Foot></Foot>
    </div>
</template>
<script>
import { Toast } from 'vant';
// Vue.use(Toast);
export default {
    mounted(){
        Toast.loading({
            mask: true,
            loadingType: 'spinner',
            message: '加载中...'
        });
        /* const toast = Toast.loading({
            duration: 0,       // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            loadingType: 'spinner',
            message: '加载倒计时 3 秒'
            });

            let second = 3;
            const timer = setInterval(() => {
            second--;
            if (second) {
                toast.message = `加载倒计时 ${second} 秒`;
            } else {
                clearInterval(timer);
                Toast.clear();
            }
            }, 1000);
        } */
    } 
}
</script>

