<template>
        <van-nav-bar :title="title" left-text="返回" left-arrow 
        @click-left="onClickLeft" @click-right="onClickRight">
            <van-icon name="search" slot="right" />
        </van-nav-bar>
    </template>
    <script>
        export default {
            components: {
    
            },
            props: ["title"]
            ,
            data() {
                return {
                    active: 0,
                }
            },
            methods: {
                onClickLeft() {
                    this.$router.go(-1)
                },
                onClickRight() {
                    console.log(1)
                    this.$router.push({ name: 'sousuo' })
                }
            }
        }
    
    
    </script>
    <style lang="scss" scoped>
        .van-nav-bar {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999 !important;
            background-color: blue;
            width: 100vw;
            color: #fff
        }
    
        .van-nav-bar .van-icon {
            color: #fff;
    
        }
    
        .van-nav-bar__text {
            color: #fff;
        }
    
        .van-nav-bar__title {
            color: #fff
        }
    
        .van-nav-bar__text:active {}
    
        .van-icon {
            font-size: 0.56rem;
        }
    </style>