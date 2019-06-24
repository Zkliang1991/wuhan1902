<template>
    <div>
        <div class="adress">
            <h2><span class="span3">默认收获地址</span> <router-link :to="{name:'adress'}">修改默认地址</router-link></h2>
            <p class="name">姓名<span class="span">{{username}}</span> <span class='span1'>手机号:{{mob}}</span></p>
            <p>地址:{{adress}}</p>
            <p class="more"> 商品详细</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:"",
            mob:"",
            adress:""
        }
    },
    created(){
        var all=JSON.parse(localStorage.adress)
        var all1=all.filter(item=>item.isDefault)
        console.log(all1)
        var all2=all1.slice(all1.length-2,all1.length-1)[0]
        // console.log(all2)
        this.username=all2.name;
        this.mob=all2.tel;
        this.adress=all2.province+all2.city+all2.county+all2.addressDetail



    }
}
</script>
<style scoped>
.adress{
    padding: 0.3rem;
    border:2px dashed salmon;

    color: rosybrown
}
    .name{
        margin: 0.2rem 0;
    }
    .span{
        color:#345652;
    }
    .span1{
        color:#f34342;
    }
    .span3{
        color:#de3454;
        margin-right:2rem;
    }
    .more{
        margin-top:0.2rem;
        color:#f0f;
    }
</style>