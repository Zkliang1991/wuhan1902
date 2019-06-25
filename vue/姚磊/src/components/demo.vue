<template>
    <div>
        <h2>demo - -demo  -demo </h2>
        <div class="box">
            完整语法高亮
            CommonJS 模块
            组件作用域的 CSS
            {{word}}
        </div>
        <p><input type="text" v-model="word"></p>
        <button @click="chages">ref 去实现父修改子</button>
        <!-- 写在标签上面的叫props属性 -->
        <Child ref="one" msg="这就是props" :word="word" v-on:sendparent="getWord">
            <!-- 这是插槽，需要具名，不然显示不了 -->
            <template v-slot:msg>
                <h3 v-for="(a,i) in arr" :key="i">{{a}}</h3>
            </template>
        </Child>
    </div>
</template>

<script>
import Child from "./child.vue"
export default {
    methods:{
        chages(){
            this.$refs.one.count+=10;
        },
        getWord(data){
            console.log(data);
            this.word=data;

        }
    },
    data(){
        return{
            word:"以凡人之力比肩神明",
            arr:["钢铁侠","雷神索尔"],
        }
    },
    components:{
        Child
    }
}
</script>

<style lang="css" scoped>
h2 {
    color:orange;
}
.box{
    color:red;
}
</style>