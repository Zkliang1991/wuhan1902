<template>
    <footer>
		<router-view />
			<van-tabbar route>
				<van-tabbar-item
					replace
					to="/index/home"
					icon="star"
				>
					首页
				</van-tabbar-item>
				<van-tabbar-item
					replace
					to="/index/jie"
					icon="comment"
				>
					出借
				</van-tabbar-item>
				<van-tabbar-item
					replace
					to="/index/find"
					icon="eye"
				>
					发现
				</van-tabbar-item>
				<van-tabbar-item				  
					replace
					to="/index/my"
					icon="manager"
				>
					我的
				</van-tabbar-item>
			</van-tabbar>
    </footer>
</template>

<script>
export default {
	name:"foot",
}
</script>


 