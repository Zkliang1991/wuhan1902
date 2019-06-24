<template>
    <div>
        <!-- <h2> app = 主页 --index </h2>
        <hr> -->
        <router-view></router-view>
        <!-- <Foot></Foot> -->
        <MFoot></MFoot>
    </div>
</template>


<script>
import MFoot from "@/components/mFoot.vue"
export default {
    components:{
        MFoot
    }
}
</script>
