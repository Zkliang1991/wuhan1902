<template>
  <div>
    <img :src="photo" alt="图像" @click.stop="uploadImg" class="imgs">
    <input type="file" ref="one" accept="image/*" @change="upload" v-show="false">
  </div>
</template>
<script>
export default {
  name: "photo",
  data() {
    return {
      photo: ""
    };
  },
  mounted() {
    this.$axios.get("/vue/getUserPhoto").then(res => {
      res.data.result.forEach(item => {
        if (item.photo !== undefined) {
          // this.photo = item.photo.replace(/public/, "http://localhost:1902/");
          this.photo = item.photo.replace(/public/, "");
        } else {
          this.photo = require("@/assets/images/photo.png");
        }
      });
    });
  },
  methods: {
    uploadImg() {
      this.$refs.one.click();
    },
    upload() {
      let file = this.$refs.one.files[0]; //需要上传图片
      let data = new FormData(); //新建表单对象
      data.append("photo", file);
      this.$axios({
        url: "/vue/uploadPhoto",
        method: "POST",
        contentType: false,
        processData: false,
        data: data
      }).then(res => {
        this.$axios.get("/vue/getUserPhoto").then(res => {
          res.data.result.forEach(item => {
            console.log(item);
            this.photo = item.photo.replace(/public/, "");
          });
        });
      });
    }
  }
};
</script>

<style scoped>
.imgs {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>


