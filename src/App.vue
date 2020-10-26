<template>
  <div id="" class="tw-h-full tw-flex tw-flex-col ">
    <div class="header tw-w-full tw-bg-blue-800 tw-p-4 tw-mb-0">
      <div class="logo" />
      <p class="tw-text-white tw-font-bold  tw-text-xl">Huachinango</p>
    </div>
    <Content></Content>
    <div
      style="textAlign: center"
      class="tw-fixed tw-w-full tw-bottom-0 tw-bg-blue-800 tw-text-white"
    >
      By Daniela Quesada T..
    </div>
  </div>
</template>

<script>
import Content from './components/content/mainContent.vue';
// import Sider from './components/content/sider';

export default {
  name: 'App',
  components: {
    Content
    // Sider
  },
  computed: {
    isLogin() {
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
