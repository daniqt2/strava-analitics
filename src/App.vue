<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo" />
      <p class="tw-text-white tw-text-xl">Fitics</p>
    </a-layout-header>
    <a-layout>
      <Sider v-if="!isLogin"></Sider>
      <Content></Content>
    </a-layout>
  </a-layout>
</template>

<script>
import Content from './components/content/mainContent.vue';
import Sider from './components/content/sider';

export default {
  name: 'App',
  components: {
    Content,
    Sider
  },
  computed: {
    isLogin() {
      console.log(this.$route.meta.login);
      return this.$route.meta.login;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
