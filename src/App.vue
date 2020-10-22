<template>
  <div id="" class="tw-h-full tw-flex tw-flex-col ">
    <div class="header tw-w-full tw-bg-blue-800 tw-p-4 tw-mb-0">
      <div class="logo" />
      <p class="tw-text-white tw-font-bold  tw-text-xl">Huachinango</p>
    </div>
    <!-- <div class="tw-h-full tw-bg-gray-100 tw-mt-0"> -->
    <!-- <Sider v-if="!isLogin"></Sider> -->
    <Content></Content>
    <!-- </div> -->
  </div>
  <!-- <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo" />
      <p class="tw-text-white tw-text-xl">Fitics</p>
    </a-layout-header>
    <a-layout>
      <Sider v-if="!isLogin"></Sider>
      <Content></Content>
    </a-layout>
  </a-layout> -->
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
