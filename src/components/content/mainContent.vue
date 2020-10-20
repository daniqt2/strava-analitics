<template>
  <a-layout style="padding: 0 24px 24px" class="content-continer">
    <a-layout-content class="tw-mt-4 tw-p-4">
      <routerPage></routerPage>
    </a-layout-content>
    <a-layout-footer style="textAlign: center">
      By Daniela Quesada T.
    </a-layout-footer>
  </a-layout>
</template>

<script>
import routerPage from '../router';
export default {
  components: {
    routerPage
  }
};
</script>

<style></style>
