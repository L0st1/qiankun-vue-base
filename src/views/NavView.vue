<template>
  <nav class="base-nav">
    <!-- <RouterLink v-for="{ code, path, id } in routerTree" :key="id" :to="path" replace class="router-link">{{ code }} | </RouterLink> -->
    <p v-for="{ code, path, id, appName } in routerTree" :key="id" class="base-nav__item">
      <a @click="handleRouter(path)" class="base-nav__item--link">{{ code }}</a><br />
      <span class="base-nav__item--app">{{ appName }}</span>
    </p>
  </nav>
</template>
<script lang="ts" setup>
const routerTree = [
  { code: "about", id: 1, path: "/app-vue3/about", appName: "app-vue3" },
  { code: "interserctionOb", id: 2, path: "/app-vue3/useInterserctionOb", appName: "app-vue3" },
  { code: "AnchorByElement", id: 3, path: "/app-vue3/AnchorByElement", appName: "app-vue3" },
  { code: "ElementTest", id: 4, path: "/app-vue3/test", appName: "app-vue3" },
  // { code: "BaseAbout", id: 5, path: "/about", appName: "base" },
  { code: "AnotherApp", id: 6, path: "/app-vue-history/about", appName: "app-vue2" },
  // { code: "", id: 7, path: "/app-vue3", appName: "app-vue3" },
  // { code: "", id: 8, path: "/app-vue3", appName: "app-vue3" },
];
const handleRouter = (path: string) => {
  window.history.pushState({}, '', path);
}
</script>
<style scoped lang="scss">
.base-nav {
  font-size: 20px;
  padding: 34px;
  text-align: start;
  display: flex;
  gap: 16px;

  &__item {
    &--link {
      font-weight: bold;
      color: #2c3e50;
    }

    &--app {
      color: color-mix(in srgb, blue 30%, red 50%);
      font-size: 14px;
    }
  }


}
</style>
