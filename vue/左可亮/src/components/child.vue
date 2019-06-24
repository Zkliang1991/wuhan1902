<template>
    <div>
        <h2> child - one ---{{count}}</h2>
        <h2>props == {{msg}}--- {{word}} </h2>
        <button @click="send"> 自定义事件去 实现 子修改父组件 </button>
        <slot name="msg">如果没有分发的内容就会默认显示</slot>
    </div>
</template>


<script>
import {bus} from "@/utils/bus"
export default {
    name:"childone",
    props:['msg','word'],
    data(){
        return {
            count:1000
        }
    },
    methods:{
        send(){
            this.$emit("sendparent","我是通过自定义事件传递过来的....")
        }
    }
}
</script>
