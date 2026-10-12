<script setup>
  import AppPreloader from './components/layout/AppPreloader.vue'
  import AppHeader from "./components/layout/AppHeader.vue";
  import AppFooter from "./components/layout/AppFooter.vue";
  import HomeView from "./views/HomeView.vue";
  import PrivacyView from "./views/PrivacyView.vue";
  import { privacyLang } from "./routes.js";
</script>

<template>
  <PrivacyView v-if="privacyLang" :lang="privacyLang"></PrivacyView>
  <template v-else>
    <AppPreloader/>
    <AppHeader></AppHeader>
    <HomeView></HomeView>
  </template>
	<AppFooter></AppFooter>
</template>

<style scoped></style>
