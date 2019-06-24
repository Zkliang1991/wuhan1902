<template>
    <div>
        <Head :title = 'title'></Head>

        <router-view></router-view>
    </div>
</template>

<script>
// 组件
import Head from '@/components/head.vue';
import {mapState} from 'vuex';
export default {
    name:'index',
    computed:{
        ...mapState(['title','active']),
    },
    
    
}
</script>

