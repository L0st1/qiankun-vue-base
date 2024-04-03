<template>
  <nav class="base-nav">
    <RouterLink v-for="{ code, path, id } in routerTree" :key="id" :to="path" replace>{{ code }} | </RouterLink>
  </nav>
</template>
<script lang="ts" setup>
const routerTree = [
  { code: "about", id: 1, path: "/app-vue3/about"},
  { code: "interserctionOb", id: 2, path: "/app-vue3/useInterserctionOb"},
  { code: "AnchorByElement", id: 3, path: "/app-vue3/AnchorByElement"},
  { code: "", id: 4, path: "/app-vue3"},
  { code: "", id: 5, path: "/app-vue3"},
  { code: "", id: 6, path: "/app-vue3"},
  { code: "", id: 7, path: "/app-vue3"},
  { code: "", id: 8, path: "/app-vue3"},
]
</script>
<style scoped lang="scss">
.base-nav {
  font-size: 20px;
  padding: 34px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
