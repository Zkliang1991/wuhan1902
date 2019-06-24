
<template>
    <footer>
        <div  v-for="(foot,i) in foots" :key="i" @click="judge_home(foot.txt)">
            <router-link :to="{name:foot.name}">
                <i class="icon iconfont" v-html="foot.ico"></i>
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
		<div class="img" v-if="footTaobao">
			<img src="@/assets/images/taobao.jpg" alt="" width="100%" height="100%">
		</div>
		
    </footer>
</template> 
<script>
import {mapState}from "vuex";
export default {
    data(){
        return {
            title:"我是尾部组件",
             foots:[
                {txt:"首页",path:"/index/home",name:"home",ico:"&#xe61a"},
                {txt:"会场",path:"/index/classify",name:"classify",ico:"&#xe618"},
                {txt:"购物车",path:"/index/buycar",name:"buycar",ico:"&#xf0179"},
                {txt:"个人中心",path:"/index/my",name:"my",ico:"&#xe660"}
			],
        }
	},
	methods:{
		judge_home(data){
			if(data=="首页"){
				this.$store.commit("footTaobao",true);
			}else{
				this.$store.commit("footTaobao",false);
			}
		}
	},
	computed:{
		...mapState([
			"footTaobao"
		])
	}
}
</script>
<style lang="scss" scoped>
footer{
    background-image:linear-gradient(to right,rgb(248, 8, 8),rgb(243, 243, 9));
	position:fixed;
	width:100%;
    height:0.6rem;
   padding-top:0.2rem;
	left:0;
	bottom:0;
	display:flex !important;
    z-index:100;
    border-top:1px solid black;
	div{
		flex:1;
		height:1rem;
		a{
			display: block;
			width:100%;
			height:100%;
			display:flex;
			flex-direction:column;
			box-sizing:border-box;
			// padding:0.06rem 0;
			text-align:center;
			font-family:"微软雅黑";
			color:#fff;
			position: relative;
			i{
			width:100%;
			height:0.2rem;
			line-height:0.2rem;
            font-size:0.4rem !important;
            padding-bottom:0.15rem;
			}
			span{
				width:100%;
				height:0.2rem;
				line-height:0.2rem;
				font-size:0.2rem;
			}
			// .hot{
			// 	position: absolute;
			// 	top:0;
			// 	left:60%;
			// 	display: inline;
			// 	width:.25rem;
			// }
		}
		.nav-active,.router-link-exact-active{
			color:#7bc725;
		    border-color:#7bc725;
		}

	}
}
.img{
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	position: fixed;
	bottom:0.04rem;
	left:0.44rem;
	z-index: 3;
	overflow: hidden;
}
</style>