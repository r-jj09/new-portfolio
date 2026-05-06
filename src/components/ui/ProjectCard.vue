<script setup>
defineProps({
  project: Object,
  color: { type: String, default: 'text-green' },
})
</script>

<template>
  <div class="project-card">
    <div class="card-header">
      <span class="card-path">{{ project.path }}</span>
      <span class="year-dot" :style="{ color: `var(--${color})` }">● <span :style="{ color: `var(--${color})` }">{{ project.year }}</span></span>
    </div>

    <div class="card-body">
      <h3 class="card-title">{{ project.title }}</h3>
      <p class="card-desc">{{ project.desc }}</p>
    </div>

    <div class="card-footer">
      <div class="card-stack">
        <span class="stack-tag" v-for="(tech, i) in project.stack" :key="i">
          {{ tech }}
        </span>
      </div>
      <a :href="project.link" target="_blank" class="card-link" :style="{ color: `var(--${color})` }">
        open ↗
      </a>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  height: 100%;
}
.project-card:hover
{
  cursor: pointer;
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(124, 243, 160, 0.08);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border);
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-muted);
}

.year-dot {
  color: var(--text-green);
  margin-right: 4px;
}

.card-body {
  padding: 24px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-title {
  font-family: var(--font-sans);
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text);
}

.card-desc {
  font-family: var(--font-sans);
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-muted);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid var(--color-border);
}

.card-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.stack-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-muted);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 2px 8px;
}

.card-link {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-green);
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.card-link:hover { opacity: 0.7; }
</style>