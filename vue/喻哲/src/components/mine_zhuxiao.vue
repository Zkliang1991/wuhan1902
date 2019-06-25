<template>
    <div>
        <van-button type="danger" @click="loginOut">注销</van-button>
    </div>
</template>

<script>
export default {
    
    methods: {
        loginOut(){
            console.log(111)
            this.$axios.get('/vue/loginOut').then(result=>{
                sessionStorage.removeItem("userInfo")
                this.$router.push({name:"login"})
                console.log(result)
                console.log("注销")
            })
        }
    },
}
</script>