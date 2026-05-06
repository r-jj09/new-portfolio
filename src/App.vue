<script setup>
  import AppPreloader from './components/layout/AppPreloader.vue'
  import AppHeader from "./components/layout/AppHeader.vue";
  import AppFooter from "./components/layout/AppFooter.vue";
  import HomeView from "./views/HomeView.vue";
</script>

<template>
  <AppPreloader/>
	<AppHeader></AppHeader>
  <HomeView></HomeView>
	<AppFooter></AppFooter>
</template>

<style scoped></style>
