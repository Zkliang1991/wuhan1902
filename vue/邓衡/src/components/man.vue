<template>
        <div class="par"> 
            <van-pull-refresh  v-model="isLoading" @refresh="onRefresh">
                <div >
                    <List :goods="data.man"></List>
                </div>
            </van-pull-refresh>
        </div>
    </template>
    
    <script>
        import { mapState, mapActions } from "vuex"
        export default {
            data(){
                return{
                    finished:false,
                    isLoading:false,
                }
            },
            name: 'man',
            computed: {
                ...mapState(['data'])
            },
            methods: {
                ...mapActions(['getMan']),
                onRefresh(){
                    setTimeout(() => {
                        this.$axios.get('/vue/img', {
                            params: {
                                limit: 8,
                                skip: 15,
                                key:"男"
                            }
                        }).then(res => {
                            this.$store.commit('getNewMan', res.data.result)
                        })
    
                        this.isLoading = false;
                    }, 500);
                }
            },
            mounted() {
                this.getMan({
                    url: 'vue/img',
                    params: {
                        key: '男',
                        limit:15,
                    }
    
                })
            }
        }
    
    </script>