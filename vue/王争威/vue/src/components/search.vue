<template>
    <div>
        <form action="/">
            <van-search v-model="value" placeholder="请输入搜索中文关键词" show-action
                @search="onSearch({url:'/vue/search',params:{keyword:value}})" @cancel="onCancel" error />
        </form>
        <goodsList></goodsList>
    </div>
</template>
<script>
    import { mapState, mapActions } from "vuex"
    export default {
        data() {
            return {
                value: "",

            }
        },
        computed: {
            ...mapState(['data'])
        },
        methods: {

            ...mapActions(['onSearch']),
            // onSearch(){
            //     // console.log(this.value)
            //     this.$axios.get('vue/search',{params:{keyword:this.value}}).then(res=>{
            //         // console.log(res)
            //         this.goods=res.data.result

            //     })
            // },
            onCancel() {

            }
        }
    }
</script>