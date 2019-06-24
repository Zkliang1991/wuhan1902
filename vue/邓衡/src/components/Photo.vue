<template>

    <div>

        <div id="photo">
            <img :src="imgs" alt="" class="imgs" @click.stop="upload">
            <input type="file" accept="images/*" ref="one" @change="upImg" style="display: none">
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex"
    export default {
        name: 'photo',
        computed: {
            ...mapState(['imgs'])
        },
        mounted() {
            // console.log("ssss")
            if (localStorage.imgs) {
                console.log(localStorage.imgs);
                this.$store.commit('upImg', localStorage.imgs)
            }
        },
        methods: {
            upload() {
                this.$refs.one.click()
            },
            upImg() {
                let file = this.$refs.one.files[0];
                let data = new FormData()
                data.append("avatar", file)

                this.$axios({
                    url: '/vue/uploadAvatar',
                    method: 'POST',
                    contentType: false,
                    processDate: false,
                    data: data
                }).then(res => {
                    var newImg = res.data.avatarurl.replace(/public/, 'http://localhost:1902/')
                    this.$store.commit('upImg', newImg);
                    localStorage.imgs = newImg
                    console.log(newImg)

                })
            }
        }

    }


</script>
<style scoped>
    .imgs {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;

    }
</style>