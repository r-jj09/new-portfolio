<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '@/composables/useLang.js'
import SectionHeader from '../ui/SectionHeader.vue'

const { messages } = useLang()

const itemRefs = ref([])
const visible = ref([false, false, false])
let observers = []

onMounted(() => {
  itemRefs.value.forEach((el, i) => {
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        visible.value[i] = true
        observer.disconnect()
      }
    }, { threshold: 0.2 })
    observer.observe(el)
    observers.push(observer)
  })
})

onUnmounted(() => observers.forEach(o => o.disconnect()))

</script>

<template>
  <section class="experience" id="exp">
    <SectionHeader
        index="[05]"
        :title="messages.experience.sectionTitle"
        :comment="messages.experience.comment"
    />
    <div class="hero-grid"></div>
    <div class="timeline">
      <div
          class="timeline-item"
          v-for="(item, i) in messages.experience.items"
          :key="i"
      >
        <div
            class="timeline-animated"
            :ref="el => { if (el) itemRefs[i] = el }"
            :class="{ visible: visible[i] }"
            :style="{ transitionDelay: (i * 0.15) + 's' }"
        >
          <div class="timeline-dot" :style="{ background: `var(--${item.color})` }"></div>
          <div class="timeline-content">
            <div class="timeline-meta">
              <span class="commit-badge" :style="{ color: `var(--${item.color})` }">commit</span>
              <span class="timeline-date">{{ item.date }}</span>
            </div>
            <h3 class="timeline-role">{{ item.role }}</h3>
            <p class="timeline-place">@ {{ item.place }}</p>
          </div>
        </div>
        <div class="timeline-line" v-if="i < messages.experience.items.length - 1"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  position: relative;
  background-color: var(--color-bg);
  padding: 80px;
  border-bottom: 1px solid var(--color-border);
}

.hero-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.4;
  background-image:
      linear-gradient(rgb(38, 43, 51) 1px, transparent 1px),
      linear-gradient(90deg, rgb(38, 43, 51) 1px, transparent 1px);
  background-size: 48px 48px;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-left: 12px;
}

.timeline-item {
  display: flex;
  gap: 24px;
  position: relative;
}

.timeline-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 6px;
  position: relative;
  z-index: 1;
}

.timeline-line {
  position: absolute;
  left: 4px;
  top: 16px;
  bottom: -32px;
  width: 1px;
  background: var(--color-border);
}

.timeline-content {
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.timeline-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.commit-badge {
  font-family: var(--font-mono);
  font-size: 10px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 2px 8px;
  color: var(--text-green);
  letter-spacing: 0.05em;
}

.timeline-date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-muted);
}

.timeline-role {
  font-family: var(--font-sans);
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text);
}

.timeline-place {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-muted);
}

@media (max-width: 768px) {
  .experience { padding: 60px 24px; }
}

.timeline-animated {
  display: flex;
  gap: 24px;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.timeline-animated.visible {
  opacity: 1;
  transform: translateX(0);
}

</style>