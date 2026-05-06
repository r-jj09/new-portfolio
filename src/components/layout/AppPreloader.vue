<script setup>
import { ref, onMounted } from 'vue'

const lines = [
  { text: 'initializing system...', done: false },
  { text: 'loading portfolio.vue', done: false },
  { text: 'mounting components...', done: false },
  { text: 'fetching developer data...', done: false },
  { text: 'build successful', done: false },
]

const visible = ref(true)
const visibleLines = ref([])
const done = ref(false)

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function runSequence() {
  for (let i = 0; i < lines.length; i++) {
    await sleep(i === 0 ? 300 : 500)
    visibleLines.value.push({ ...lines[i] })
    await sleep(400)
    visibleLines.value[i].done = true
  }
  done.value = true
  await sleep(800)
  document.body.style.overflow = ''
  visible.value = false
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  runSequence()
})
</script>

<template>
  <Transition name="preloader-fade">
    <div class="preloader" v-if="visible">
      <div class="preloader-inner">
        <div class="preloader-lines">
          <div
              class="preloader-line"
              v-for="(line, i) in visibleLines"
              :key="i"
          >
            <span class="line-prompt">></span>
            <span class="line-text">{{ line.text }}</span>
            <span class="line-cursor" v-if="i === visibleLines.length - 1 && !done">▊</span>
            <span class="line-check" v-if="line.done && i < visibleLines.length - 1">✓</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  background: var(--color-bg);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader-inner {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 320px;
}

.preloader-line {
  display: grid;
  grid-template-columns: 14px 400px 14px;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 22px;
  animation: fadein 0.2s ease-out;
}

.line-prompt { color: var(--text-green); }

.line-cursor {
  color: var(--text-green);
  animation: blink 1s step-end infinite;
}

.line-check,
.line-cursor {
  display: inline-block;
  width: 14px;
  text-align: center;
}

.line-check {
  color: var(--text-green);
}

.line-text { color: var(--color-text); }

@keyframes fadein {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.preloader-fade-leave-active {
  transition: opacity 0.1s ease-out;
}
.preloader-fade-leave-to {
  opacity: 0;
}
</style>