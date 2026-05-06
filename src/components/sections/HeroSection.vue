<script setup>
  import { ref, watch, onMounted, onUnmounted } from 'vue'
  import { useLang } from '../../composables/useLang'

  const { messages } = useLang()

  const typedText = ref('')
  const cursor = ref(true)
  let typingTimer = null
  let roleIndex = 0
  let charIndex = 0
  let isDeleting = false

  function typeLoop() {
  const roles = messages.value.hero.roles
  const current = roles[roleIndex]

  if (!isDeleting) {
  typedText.value = current.slice(0, charIndex + 1)
  charIndex++
  if (charIndex === current.length) {
  isDeleting = true
  typingTimer = setTimeout(typeLoop, 1800)
  return
}
} else {
  typedText.value = current.slice(0, charIndex - 1)
  charIndex--
  if (charIndex === 0) {
  isDeleting = false
  roleIndex = (roleIndex + 1) % roles.length
}
}

  typingTimer = setTimeout(typeLoop, isDeleting ? 50 : 80)
}

  onMounted(() => typeLoop())
  onUnmounted(() => clearTimeout(typingTimer))

  watch(() => messages.value.hero.roles, () => {
  clearTimeout(typingTimer)
  typedText.value = ''
  charIndex = 0
  isDeleting = false
  roleIndex = 0
  typeLoop()
})
</script>
<template>
    <section class="hero">
      <div class="hero-grid"></div>
      <div class="hero-left w-full sm:w-1/2">
        <div class="code-block">
          <span class="code-keyword">const<span class="code-var"> developer</span>
          <span class="code-plain"> = {</span></span>
          <div class="code-line p-6">
            <span class="code-key">  name</span>
            <span class="code-plain">: </span>
            <span class="code-name">"<span class="code-main">{{ messages.hero.name }}</span>"</span>
          </div>

          <div class="code-line">
            <span class="code-key">  role</span>
            <span class="code-plain">: </span>
            <span class="code-string">"<span ref="typedEl">{{ typedText }}</span><span class="cursor"></span>"</span>
          </div>

          <div class="code-line">
            <span class="code-key">  location</span>
            <span class="code-plain">: </span>
            <span class="code-string">"{{ messages.hero.location }}"</span>
          </div>

          <div class="code-line">
            <span class="code-key">  status</span>
            <span class="code-plain">: </span>
            <span class="code-green">"available"</span>
          </div>

          <div class="code-line">
            <span class="code-key">  focus</span>
            <span class="code-plain">: [</span>
            <span v-for="(item, i) in messages.hero.focus" :key="i">
            <span class="code-string">"{{ item }}"</span>
            <span class="code-plain" v-if="i < messages.hero.focus.length - 1">, </span>
          </span>
            <span class="code-plain">]</span>
          </div>

          <span class="code-plain">};</span>
        </div>

        <div class="hero-buttons">
          <a href="#work" class="btn-primary">{{ messages.hero.viewProjects }}</a>
          <a href="/src/assets/HajdúRékaCV(HUN).pdf" download class="btn-secondary">{{ messages.hero.downloadCv }}</a>
        </div>
      </div>

      <div class="hero-right w-[50%] flex justify-center
">
        <div class="profile-card">
          <div class="card-titlebar">
            <span class="card-filename">profile.jpg</span>
            <span class="card-dims">344 × 430</span>
          </div>
          <div class="card-image p-2">
            <img
                :src="profileImg"
                srcset="/src/assets/profile-sm.webp 400w, /src/assets/profile.webp 800w"
                sizes="(max-width: 640px) 100vw, 326px"
                alt="Hajdú Réka"
            />
          </div>
          <div class="card-log">
            <div v-for="(line, i) in messages.hero.log" :key="i">
              <span :style="{ color: i === messages.hero.log.length - 1 ? 'var(--text-green)' : 'var(--text-blue)' }">> </span>
              <span style="color: var(--color-muted)"> {{ line }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<style scoped>
.hero {
  position: relative;
  background-color: var(--color-bg);
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 120px;
  gap: 30px;
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

.hero-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 10;
}

.hero-right {
  z-index: 10;
}

.code-block {
  font-family: var(--font-mono);
  font-size: 16px;
  line-height: 2;
  display: flex;
  flex-direction: column;
}

.code-main {color: var(--color-text)}
.code-line { display: flex; align-items: center; gap: 0; padding-left: 35px; }
.code-keyword { color: var(--text-pink); }
.code-var { color: var(--text-blue); }
.code-plain { color: var(--color-muted); }
.code-key { color: var(--color-muted); }
.code-string { color: var(--text-green); }
.code-green { color: var(--text-pink); }

.code-name {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  color: var(--text-yellow);
  line-height: 1;
  font-family: var(--font-mono);
}

.cursor {
  display: inline-block;
  width: 9px;
  height: 1em;
  background: var(--text-green);
  vertical-align: text-bottom;
  margin-left: 1px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-buttons {
  display: flex;
  gap: 16px;
}

.btn-primary {
  font-family: var(--font-mono);
  font-size: 13px;
  padding: 10px 20px;
  background: var(--text-green);
  color: #0d0d0d;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-primary:hover { opacity: 0.85; }

.btn-secondary {
  font-family: var(--font-mono);
  font-size: 13px;
  padding: 10px 20px;
  background: none;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.2s;
}
.btn-secondary:hover { border-color: var(--color-text); }

.hero-right { flex-shrink: 0; }

.profile-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  overflow: hidden;
  width: 344px;
}

.card-titlebar {
  display: flex;
  justify-content: space-between;
  padding: 8px 14px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-muted);
  border-bottom: 1px solid var(--color-border);
}

.card-image img {
  width: 100%;
  height: 430px;
  object-fit: cover;
  display: block;
}

.card-log {
  border-top: 1px solid var(--color-border);
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-green);
}

@media (max-width: 1000px) {
  .hero {
    flex-direction: column;
    padding: 80px 24px 60px;
    text-align: center;
  }
  .hero-right { width: 100%; }
  .hero-buttons { justify-content: center; }
}
</style>