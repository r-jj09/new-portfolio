<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '../../composables/useLang'
import SectionHeader from '../ui/SectionHeader.vue'
import ProjectCard  from '../ui/ProjectCard.vue'

const { messages } = useLang()

const cardRefs = ref([])
const visible = ref([false, false, false])
let observers = []

onMounted(() => {
  cardRefs.value.forEach((el, i) => {
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        visible.value[i] = true
        observer.disconnect()
      }
    }, { threshold: 0.15 })
    observer.observe(el)
    observers.push(observer)
  })
})

onUnmounted(() => observers.forEach(o => o.disconnect()))
</script>
<template>
  <section class="projects" id="work">
    <SectionHeader
        index="[03]"
        :title="messages.projects.sectionTitle"
        :comment="messages.projects.comment"
    />

    <div class="projects-grid">
      <div
          class="project-card-wrapper"
          v-for="(project, i) in messages.projects.items"
          :key="i"
          :ref="el => { if (el) cardRefs[i] = el }"
          :class="{ visible: visible[i] }"
          :style="{ transitionDelay: (i * 0.25) + 's' }"
      >
        <ProjectCard
            :project="project"
            :color="['text-green', 'text-blue', 'text-pink'][i]"
        />
      </div>
    </div>
  </section>
</template>
<style scoped>
.projects {
  padding: 80px;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .projects { padding: 60px 24px; }
  .projects-grid { grid-template-columns: 1fr; }
}

.project-card-wrapper {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.project-card-wrapper.visible {
  opacity: 1;
  transform: translateY(0);
}

</style>