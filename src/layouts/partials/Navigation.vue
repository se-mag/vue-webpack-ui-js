<script lang="js">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Navigation',
  components: {},
  props: {},

  setup(props, ctx) {

    return {}
  }
});
</script>

<template>
  <nav class="navbar">
    <router-link :to="{ name: 'Dashboard'}" >Dashboard</router-link>
    <router-link :to="{ name: 'Login'}" >Login</router-link>
  </nav>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 1rem;
}

</style>
