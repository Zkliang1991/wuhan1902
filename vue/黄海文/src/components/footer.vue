<template>
  <!-- <audio ref="one" :autoplay="flag" controls="controls" :src="imgUrl"></audio> -->
  <div>
    <div id="aplayer" ref="one"></div>
    <p :dd="foo"></p>
    <p :dd="my"></p>
  </div>
</template>
<script>
import { mapState } from "vuex";
import APlayer from "aplayer";
export default {
  name: "foot",
  computed: {
    ...mapState(["musicxq", "flag", "foo", "my"])
  },
  watch: {
    foo(foo) {
      const ap = new APlayer({
        container: document.getElementById("aplayer"),
        narrow: false,
        mutex: true,
        audio: [
          {
            name: this.musicxq.imgyou,
            artist: this.musicxq.imgtitle,
            url: this.musicxq.imgUrl,
            cover: this.musicxq.imgpic
          }
        ]
      });
      ap.play();
    },
    my(my) {
      const ap = new APlayer({
        container: document.getElementById("aplayer"),
        narrow: false,
        mutex: true,
        audio: [
          {
            name: this.musicxq.imgyou,
            artist: this.musicxq.imgtitle,
            url: this.musicxq.imgUrl,
            cover: this.musicxq.imgpic
          }
        ]
      });
      ap.play();
    }
  },
  mounted() {
    console.log(this.musicxq.imgyou);
    const ap = new APlayer({
      container: document.getElementById("aplayer"),
      narrow: false,
      mutex: true,
      audio: [
        {
          name: this.musicxq.imgyou,
          artist: this.musicxq.imgtitle,
          url: this.musicxq.imgUrl,
          cover: this.musicxq.imgpic
        }
      ]
    });
  }
};
</script>
<style scoped>
#aplayer {
  position: fixed;
  bottom: -0.09rem;
  left: -0.09rem;
  width: 100%;
  color: #000;
  height: 1.2rem;
}
@import "../styles/APlayer.min.css";
</style>



