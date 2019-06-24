<template>
    <div>
        <Head1 title1="排行榜" :lico="lico" :rico="rico"></Head1>
    </div>
</template>

<script>

export default {
   data() {
    return {
      lico:"",
      rico:"&#xe67c;"
    };
  },
}
</script>

<style lang="scss" scoped>
.van-nav-bar__title {
  color:#fff
}
</style>