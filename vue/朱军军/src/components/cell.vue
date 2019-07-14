<template>
    <div class="all">
        <van-cell is-link>
            <slot></slot>
            <!-- <template slot="title">
                <span class="custom-text">新手专享</span>
                <van-tag plain type="danger">新手首投</van-tag>
                <van-tag plain type="danger">1000元起投</van-tag>
            </template> -->
        </van-cell>
    </div>
   
</template>

<script>
export default {
    name:"cell",
    props:["value"]
}
</script>

<style scoped>
.all{
  margin-top:10px;
}
.van-cell{
  border-bottom:1px solid gray;
}
</style>


