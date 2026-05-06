<script setup></script>
<template>
  <footer class="footer">
    <span class="footer-left">© 2026 Réka Hajdú · v2.0</span>
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

@media (max-width: 640px) {
  .footer { padding: 20px 24px; }
}
</style>