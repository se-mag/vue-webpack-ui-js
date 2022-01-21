<script lang="js">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Login',
  components: {},
  props: {},

  setup(props, ctx) {
    function onSubmit() {
      alert('onSubmit')
    }
    return {onSubmit}
  }
});
</script>

<template>
  <section class="section-module container">
    <h1 class="page__title">Login</h1>
    <form>
      <div class="">
        <label for="username">Username</label>
        <div class="">
          <input type="text" name="username" id="username" placeholder="Username" />
          <div class="">validation error</div>
        </div>
      </div>
      <div class="">
        <label for="password">Password</label>
        <div class="">
          <input type="password" name="password" id="password" placeholder="Password" />
          <div class="">validation error</div>
        </div>
      </div>
      <div class="">
        <input type="button" value="Login" @click.prevent="onSubmit" />
      </div>
    </form>
    <router-link :to="{ name: 'Dashboard'}" >Back</router-link>
  </section>
</template>

<style lang="scss" scoped>

.container {
  width: 600px;
  margin: auto;
}

</style>
