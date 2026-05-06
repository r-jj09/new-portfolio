<script setup>
defineProps({
  index: String,
  title: String,
  comment: String,
})
</script>

<template>
  <div class="section-header">
    <span class="section-index">{{ index }}</span>
    <span class="section-icon">$</span>
    <span class="section-title">{{ title }}</span>
    <span class="section-comment">// {{ comment }}</span>
  </div>
</template>

<style scoped>
.section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 48px;
  font-family: var(--font-mono);
  font-size: 13px;
}
.section-index { color: var(--color-muted); }
.section-icon  { color: var(--text-green); }
.section-title { color: var(--color-text); }
.section-comment { color: var(--color-muted); }
</style>