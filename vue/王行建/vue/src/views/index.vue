<template>
  <div>
    <keep-alive><router-view></router-view></keep-alive>
    <Foot></Foot>
  </div>
</template>

 <script>
import Foot from "@/components/foot.vue";
export default {
  components: {
    Foot
  }
};
</script>

