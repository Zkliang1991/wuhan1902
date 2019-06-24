<template>
  <div>
    <Heade title="英雄" :show="true"></Heade>
    <div class="lol-main">
      <van-tabs v-model="active" :swipe-threshold="6">
        <van-tab v-for="(type,i) in types" :key="i" :title="type">
          <HeroList :type="type" :allHeros="allHeros"></HeroList>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import HeroList from "@/components/heroList.vue";
import { bus } from "@/utils/bus";
import { mapState } from "vuex";
export default {
  name: "hero",
  data() {
    return {
      typeBack: "",
      types: [],
      allHeros: []
      // active:0
    };
  },
  computed: {
    // ...mapState([
    //     "active"
    // ])
    active: {
      get() {
        return this.$store.state.active;
      },
      set(val) {
        return (this.$store.state.active = val);
      }
    }
  },
  components: {
    HeroList
  },
  beforeCreate() {
    // bus.$on("typeBack",(typeBack)=>{
    //     console.log(typeBack);
    //     var index = this.types.indexOf(typeBack);
    //     console.log(index);
    //     this.active = index ;
    //     console.log("active:"+this.active);
    // })
  },
  created() {
    this.$axios.get("/lol/getHeroTypes").then(res => {
      console.log(res);
      this.types = res.data.result;
      var code = res.data.code;
      console.log(code);
      
      if (code == 401) {
        console.log("gggggggggggggg")
        this.$router.push({ name: "login" });
        console.log("kkkkkkkkkkkk");
      }

      bus.$emit("changeLogin", code);
    });
  },
  mounted() {
    this.$axios.get("/lol/getHeros").then(res => {
      console.log(res);
      this.allHeros = res.data.result;
    });

    
  }
};
</script>
