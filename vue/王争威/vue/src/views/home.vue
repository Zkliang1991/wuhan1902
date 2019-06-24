<template>
    <div>

        <Head msg="欢迎来到花嫁小店"></Head>
        <swipe></swipe>
      
        <van-tabs v-model="active" swipeable>
            <van-tab >
                 <List></List>
            </van-tab>
            <van-tab >
                    <List1></List1>
               </van-tab>
        </van-tabs>



    <fenLei></fenLei>
    </div>
</template>
<script>
    import swipe from "@/components/swipe.vue"
    import List from "@/views/list.vue"
    import List1 from "@/components/list1.vue"
    import fenLei from "@/components/fenlei.vue"
   
    export default {
        data(){
            return {
                active:0
            }
        },
        components: { swipe, List ,List1,fenLei},

    }
</script>