

<!----导航栏插件------>
<template>
    <div class="all van-tabbar" :id="id">
        <slot></slot>
        <!-- <div class="van-tabbar-item" v-for="(li,i) in lists" :key="i">
          <div class="van-tabbar-item" v-html="li.icon"></div>
          <div class="van-tabbar-item__text">{{li.txt}}</div>
        </div>       -->
    </div>
</template>

<script>
export default {
    name:'tabbar',
    props:['id'],
}
</script>
