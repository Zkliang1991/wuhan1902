<template>
    <div>
        <uploadImg></uploadImg>
        <Foot></Foot>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import uploadImg from '@/components/uploadImg';
export default {
    name:'my',
    components:{
        uploadImg,
    },
    methods:{
    ...mapMutations([
            'changeTitle'
        ])
  },
  mounted(){
    this.$store.commit('changeTitle','我的淘宝');
  }
}
</script>

