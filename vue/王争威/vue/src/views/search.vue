<template>
    <div>
            <Head msg="输入搜索项进行搜索"></Head>
        <Search></Search>
          <goodsList></goodsList>
        
    </div>
</template>
<script>
    import Search from "@/components/search.vue";
    // import goodsList from "@/components/goodsList.vue"
export default {
        components:{Search}
}
</script>