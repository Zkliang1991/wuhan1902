<template>
    <div>
        <!--5: 下面是子路由home,my等的出口 -->
        <router-view></router-view>
        <MFoot class="foot"></MFoot>
    </div>
</template>


<script>


export default {
    
}
</script>

<style lang="scss" scoped>
.foot{
    z-index:1000;
}
</style>

