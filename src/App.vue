<template>
  <div>
    <header v-if="$route.meta.layout">
      <Header />
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header
  }
}
</script>

<style scoped>
</style>
