<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <ul v-if="foots.length>0">
                <li v-for="(foot,i) in foots" :key="i">
                    <Item :foot="foot"></Item>
                </li>
            </ul>
        </van-pull-refresh>
    </div>
</template>

<script>
import { PullRefresh } from 'vant';
import Item from "./Item.vue"
import { List } from 'vant';
export default {
    name:"list",
    props:{
        foots:{
            type:Array,
        },
        type:Object,
        allFoots:Array
    },
    components:{
        Item    
    },
    data() {
        return {
        isLoading: false
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.foots=this.foots.reverse();
                this.isLoading = false;
            }, 500);
        }
    }
  
}
</script>
