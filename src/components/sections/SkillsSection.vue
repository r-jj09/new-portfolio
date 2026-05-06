<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '../../composables/useLang'
import SectionHeader from '../ui/SectionHeader.vue'
import { skills } from '../../data/skills.js'

const { messages } = useLang()

const levelColor = { 0: 'var(--text-pink)', 1: 'var(--text-blue)', 2: 'var(--text-green)' }
const levelLabel = { 0: 'Beginner', 1: 'Intermediate', 2: 'Advanced' }
const colSize = 7

const skillRefs = ref([])
const visible = ref(skills.map(() => false))

let observers = []

onMounted(() => {
  skillRefs.value.forEach((el, i) => {
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        visible.value[i] = true
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    observers.push(observer)
  })
})

onUnmounted(() => observers.forEach(o => o.disconnect()))
</script>

<template>
  <section class="skills" id="skills">
    <SectionHeader
        index="[04]"
        :title="messages.skills.sectionTitle"
        :comment="messages.skills.comment"
    />

    <div class="skills-grid">
      <div
          class="skill-row"
          v-for="(skill, i) in skills"
          :key="i"
          :ref="el => { if (el) skillRefs[i] = el }"
      >
        <span class="skill-name">{{ skill.name }}</span>
        <div class="track">
          <div
              class="fill"
              :style="{
              width: visible[i] ? skill.pct + '%' : '0%',
              background: levelColor[skill.level],
              transitionDelay: (i % colSize * 0.1) + 's'
            }"
          ></div>
        </div>
        <span class="skill-level" :style="{ color: levelColor[skill.level] }">
          {{ levelLabel[skill.level] }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 80px;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
}

.skills-grid {
  display: grid;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 24px;
  grid-template-columns: 1fr 1fr;
  gap: 16px 60px;
}

.skill-row {
  display: grid;
  grid-template-columns: 160px 1fr 100px;
  align-items: center;
  gap: 16px;
}

.skill-name {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text);
  white-space: nowrap;
}

.track {
  height: 4px;
  background: var(--color-border);
  border-radius: 2px;
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: 2px;
  width: 0%;
  transition: width 0.9s ease-out;
}

.skill-level {
  font-family: var(--font-mono);
  font-size: 11px;
  text-align: right;
  white-space: nowrap;
}

@media (max-width: 1000px) {
  .skills { padding: 60px 24px; }
  .skills-grid { grid-template-columns: 1fr; }
  .skill-row { grid-template-columns: 150px 1fr 90px; }
}
</style>

