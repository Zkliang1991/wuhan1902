<template>
  <div>

    <Head title="首页"></Head>

    <Foot></Foot>


    <!-- <nux-child></nux-child> -->
  </div>

</template>

<script>
  // import Logo from '~/components/Logo.vue'
  // import Head from '~/components/head.vue'


  // import Head from '~/components/head.vue'

  export default {
    watch: {
      '$route': function (to) {
        console.log(to);
      }
    },

    components: {
      // Head
    },
    methods: {
      getSome() {
        this.$axios.get("/api/index").then(res => {

          console.log(res);

        })

      }
    },

  }

</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>