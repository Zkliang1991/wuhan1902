<template>

    <div>
        <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft">
            <van-icon name="search" slot="right" @click="gotoSearch" />
        </van-nav-bar>
    </div>

</template>

<script>
    import { NavBar, Toast } from 'vant';
    import { mapState, mapActions } from "vuex";

    export default {

        props: ['title'],

        methods: {
            onClickLeft() {

                history.go(-1);



            },
            gotoSearch() {
                this.$router.push({ name: "search" })
            }

        },

    }




</script>