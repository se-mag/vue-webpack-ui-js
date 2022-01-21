<script lang="js">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Dashboard',
  components: {},
  props: {},

  setup(props, ctx) {

    return {}
  }
});
</script>

<template>
  <section class="section-module">
    <h1 class="page__title">Dashboard</h1>
    <img src="./../assets/img/vue-logo.png" alt="Vue" />
    <img src="./../assets/img/webpack-logo.png" alt="Webpack" />
  </section>
</template>

<style lang="scss">
  img {
    width: 192px;
  }
</style>