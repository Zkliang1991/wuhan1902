<template>
    <div>

     <!-- <form action="/"> -->
        <van-search
            v-model.lazy="keyword"
            placeholder="请输入搜索关键词"
            show-action
            @search="onSearchSome"
            @cancel="onCancel"
        />
        <List :goods="data.goods"></List>
    <!-- </form> -->
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    name:"search",
    
    methods:{
       onSearchSome(val){
           this.onSearch({
                url:"/vue/getgoods",
                cb(){console.log(1)},
                params:{
                    keyword:val
                }
            })
       },
        onCancel(){
            history.go(-1)
        },
        ...mapActions(["onSearch"])
    },
    computed:{
        keyword:{
            get(){
                return this.$store.state.keyword;
            },
            set(val){
                this.$store.commit("getKeyword",val)
            },
        },
        ...mapState(['data'])
    },
}
</script>
