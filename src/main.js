import { createApp } from "vue";
import "@fontsource-variable/inter/opsz.css";
import "@fontsource-variable/jetbrains-mono";
import "./style.css";
import App from "./App.vue";
import { initConsent } from "./consent";

initConsent();

createApp(App).mount("#app");
