<script setup>
import { computed } from 'vue'
import * as CookieConsent from 'vanilla-cookieconsent'
import { useLang } from '@/composables/useLang.js'
import en from '@/locales/en'
import hu from '@/locales/hu'
import { privacyLang, privacyPaths } from '@/routes.js'

const { lang } = useLang()

const footerLang = computed(() => privacyLang || lang.value)
const labels = computed(() => (footerLang.value === 'hu' ? hu : en).footer)
</script>
<template>
  <footer class="footer">
    <span class="footer-left">© 2026 Réka Hajdú · v2.0</span>
    <span class="footer-links">
      <a :href="privacyPaths[footerLang]" class="footer-link">{{ labels.privacy }}</a>
      <span class="link-dot">·</span>
      <button type="button" class="footer-link" @click="CookieConsent.showPreferences()">
        {{ labels.cookies }}
      </button>
    </span>
    <span class="footer-right">
      <span class="status-dot">●</span>
      system online
    </span>
  </footer>
</template>
<style scoped>

.footer {
  background-color: var(--color-surface);
  padding: 20px 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-border);
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-muted);
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-green);
}

.status-dot {
  font-size: 8px;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-link {
  font: inherit;
  color: var(--color-muted);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover,
.footer-link:focus-visible {
  color: var(--text-pink);
}

@media (max-width: 640px) {
  .footer { padding: 20px 24px; }
}
</style>
