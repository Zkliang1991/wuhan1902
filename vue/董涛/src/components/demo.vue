<template>
    <div>
        <h2>demo - demo - demo </h2>
        <div class="box">
            完整语法高亮
            CommonJS 模块
            组件作用域的 CSS
            {{word}}
        </div>
        <p><input type="text" v-model="word"></p>
        <button @click="change">refs 去实现父修改子组件</button>
        <Child ref="one" msg="this is props" :word="word" v-on:sendparent="getWord"> 
            <div slot="msg">
                <h3 v-for="(a,i) in arr" :key="i"> {{a}} </h3>
            </div>
        </Child>
    </div>
</template>

<script>
import Child from "./child.vue"
export default {
    data(){
        return{
            word:"指尖江湖happy",
            arr:["山河人间，河清海晏"]
        }
    },
    methods:{
        change(){
            this.$refs.one.count+=10
        },
        getWord(data){
            console.log(data);
            this.word = data;
        }
    },
    components:{
        Child
    }
}
</script>


<style lang="scss" scoped>
h2{
    color: orange;
}
.box{
    color: red;
}
</style>
