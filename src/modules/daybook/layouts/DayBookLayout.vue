<template>
  <Navbar />
  <div class="d-flex">
    <div class="col-4">
      <entrylist />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    entrylist: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
};
</script>
<style lang="scss" scoped>
.col-4 {
  flex: 0 0 auto;
  width: 22.333333%;
}
</style>
