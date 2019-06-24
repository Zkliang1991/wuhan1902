<template>
  <div>
    <ul class="musicdan">
      <li v-for="(gd,i) in data.gdimg" :key="i" @click="gogd(i)">
        <img :src="gd" alt>
        <span>{{data.gdtitle[i]}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
import router from "vue-router";
export default {
  name: "musicdan",
  data() {
    return {
      gdid: [
        "645765966",
        "564801446",
        "921104393",
        "439937402",
        "988690134",
        "2111010477",
        "2829998155",
        "2324451155",
        "2440498598",
        "2232237850",
        "411680085",
        "2602222983",
        "2715933347",
        "2142526217",
        "2417099944",
        "2511560749"
      ]
    };
  },
  computed: {
    ...mapState(["data"])
  },
  methods: {
    gogd(i) {
      this.$router.push({
        name: "musiclist",  
        params: {
          id: this.gdid[i]
        }
      });
      console.log(this.gdid[i]);
    }
  }
};
</script>
<style>
.musicdan {
  width: 7.5rem;
  height: 8.06rem;
}
.musicdan span {
  display: block;
  font-size: 0.2rem;
  margin: 0.1rem 0;
}
.musicdan img {
  width: 1.65rem;
  height: 1.65rem;
  border-radius: 20%;
}
.musicdan li {
  width: 1.65rem;
  height: 2.2rem;
  float: left;
  text-align: center;
  margin: 0.3rem 0 0.2rem 0.185rem;
}
</style>


