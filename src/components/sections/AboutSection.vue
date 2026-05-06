<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
  import { useLang } from '../../composables/useLang'
  import SectionHeader from '../ui/SectionHeader.vue'

  const { messages } = useLang()

  const cardRefs = ref([])
  const visible = ref([false, false, false, false])
  let observers = []

  onMounted(() => {
    cardRefs.value.forEach((el, i) => {
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
  <section class="about" id="about">
    <SectionHeader index="[02]" :title="messages.about.sectionTitle" :comment="messages.about.sectionComment" />

    <div class="about-grid">
      <div class="about-bio">
        <p class="bio-main">{{ messages.about.bio }}</p>
      </div>

      <div class="about-cards">
        <div
            class="info-card"
            v-for="(card, i) in messages.about.cards"
            :key="i"
            :class="['card-accent-' + i, { visible: visible[i] }]"
            :ref="el => { if (el) cardRefs[i] = el }"
            :style="{ transitionDelay: (i * 0.20) + 's' }"
        >
          <span class="card-label">{{ card.label }}</span>
          <span class="card-title">{{ card.title }}</span>
          <span class="card-sub">{{ card.sub }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 80px;
  border-bottom: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);
  background-color: var(--color-bg);
}

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
.section-title { color: var(--text-blue); }
.section-comment { color: var(--color-muted); }

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-bio {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 32px;
}
.bio-main {
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.8;
  color: var(--color-text);
}

.about-cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.info-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 5px solid;
  border-radius: 8px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-card {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.info-card.visible {
  opacity: 1;
  transform: translateX(0);
}

.card-accent-0 { border-left-color: var(--text-green); }
.card-accent-1 { border-left-color: var(--text-blue); }
.card-accent-2 { border-left-color: var(--text-pink); }
.card-accent-3 { border-left-color: var(--text-yellow); }

.card-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--color-muted);
}
.card-title {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
}
.card-sub {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-muted);
}

@media (max-width: 768px) {
  .about { padding: 60px 24px; }
  .about-grid { grid-template-columns: 1fr; gap: 32px; }
}
</style>