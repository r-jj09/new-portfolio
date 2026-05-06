<script setup >
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '@/composables/useLang.js'
const { lang, messages, setLang } = useLang()

const navLinks = [
  { id: 'about', key: 'about' },
  { id: 'work', key: 'work' },
  { id: 'skills', key: 'skills' },
  { id: 'exp', key: 'experience' },
  { id: 'contact', key: 'contact' },
]

const menuOpen = ref(false)

const activeSection = ref('about')

let observer = null

onMounted(() => {
  const sections = document.querySelectorAll('section[id]')
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, {
    threshold: 0,
    rootMargin: '-40% 0px -55% 0px'
  })
  sections.forEach(s => observer.observe(s))
})

onUnmounted(() => observer?.disconnect())

</script>

<template>
  <div class="header-wrapper">
  <nav>
    <div class="nav-brand">
      <span>~/portfolio/</span>réka_hajdú.vue<span></span>
    </div>

    <ul class="nav-links">
      <li v-for="link in navLinks" :key="link.id">
        <a
        :href="`#${link.id}`"
        :class="{ active: activeSection === link.id }"
        >
        {{ messages.nav[link.key] }}
        </a>
      </li>
    </ul>

    <div class="lang-switch">
      <button class="lang-btn" @click="setLang(lang === 'en' ? 'hu' : 'en')">
        --lang={{ lang }}
      </button>
    </div>

    <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" :class="{ open: menuOpen }">
    <a
    v-for="link in navLinks"
    :key="link.id"
    :href="`#${link.id}`"
    :class="{ active: activeSection === link.id }"
    @click="menuOpen = false"
    >
    {{ messages.nav[link.key] }}
    </a>
    <button class="lang-btn" @click="setLang(lang === 'en' ? 'hu' : 'en')">
      --lang={{ lang }}
    </button>
  </div>
  </div>
</template>

<style scoped>
nav {
  font-family: "JetBrains Mono", monospace;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 0 24px;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-wrapper {
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand { font-size: 13px; color: var(--color-text); }
.nav-brand span { color: var(--color-muted); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
}
.nav-links a {
  font-size: 14px;
  color: var(--color-muted);
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: var(--text-pink);
  box-shadow: 0 12px 28px rgba(124, 243, 160, 0.08);
}

.lang-switch {
  display: flex;
  gap: 4px;
  margin-left: 16px;
  padding-left: 20px;
  border-left: 1px solid var(--color-surface);
}
.lang-btn {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-green);
  background-color: #1c2027;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: all 0.2s;
}

.lang-btn:hover {
  border-color: var(--text-green);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--color-muted);
  transition: all 0.25s;
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

.mobile-menu {
  display: none;
  flex-direction: column;
  background: #111;
  border-bottom: 1px solid var(--color-surface);
  padding: 16px 24px 20px;
  gap: 16px;
}
.mobile-menu.open { display: flex; width: 100% }
.mobile-menu a {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-muted);
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.2s;
}
.mobile-menu a:hover { color: var(--color-text); }
.mobile-lang {
  display: flex;
  gap: 6px;
  padding-top: 8px;
  border-top: 1px solid var(--color-surface);
}

@media (max-width: 900px) {
  .lang-switch { display: none; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
}

.nav-links a.active {
  color: var(--text-green);
}

</style>