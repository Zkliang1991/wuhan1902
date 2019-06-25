<template>
  <div class="addBox">
    <Head title="地址列表"></Head>
    <van-address-list v-model="chosenAddressId" :list="myMsg" @add="onAdd"/>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      chosenAddressId: "0"
    };
  },
  computed: {
    ...mapState(["myMsg"])
  },
  methods: {
    onAdd() {
      this.$router.push({ path: "/addressEdit" });
    },
    ...mapActions(["getAddressMsg"])
  },
  created() {
    this.getAddressMsg({
      url: "/vue/getAddressMsg"
    });
  }
};
</script>

<style scoped>
.addBox {
  margin-top: 0.8rem;
}
</style>
