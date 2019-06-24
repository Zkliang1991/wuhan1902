<template>
    <div>
        <Head title="搜索"></Head>
        <keep-alive>
            <form action="/">
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
                @cancel="onCancel"
                @change="getclassfiy"
                ref="one"
            />
             </form>
        </keep-alive>
        
        <List></List>
        <!-- <h1 v-if="listgoods.length>0">{{listgoods}}</h1> -->
        
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    data(){
        return{
            value:""
            // title1:"11"
        }
    },methods:{
        onSearch(){

        },
        onCancel(){

        },
        ...mapActions(
            {

            }
        ),
        getclassfiy(){
            console.log(111)
            this.$store.dispatch("getclassfiy",this.value)
        },
        ...mapMutations({
            
        })
    },
    computed:{
        listgoods(){
            return this.$store.state.listgoods
        },
        
    },
    mounted(){
        this.$nextTick(()=>{   //正确写法
        // console.log(this.$refs)
        document.getElementsByClassName("van-field__control")[0].focus()
    //    this.$refs.one.focus();
    })
        
    }
}

</script>
