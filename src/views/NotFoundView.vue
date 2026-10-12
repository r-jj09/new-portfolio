<script setup>
import en from '../locales/en'
import hu from '../locales/hu'
import { privacyPaths } from '../routes.js'

// Saved site language > browser language > English
const saved = localStorage.getItem('lang')
const lang = saved === 'en' || saved === 'hu'
  ? saved
  : navigator.language?.toLowerCase().startsWith('hu') ? 'hu' : 'en'

const t = (lang === 'hu' ? hu : en).notFound

let path = window.location.pathname
try { path = decodeURIComponent(path) } catch { /* keep the raw path */ }

document.title = `404 | ${t.title}`
document.documentElement.lang = lang
</script>

<template>
  <main class="not-found">
    <div class="grid"></div>

    <div class="terminal">
      <div class="terminal-bar">
        <span class="dot dot-pink"></span>
        <span class="dot dot-yellow"></span>
        <span class="dot dot-green"></span>
        <span class="terminal-title">~/portfolio — bash</span>
      </div>

      <div class="terminal-body">
        <h1 class="sr-only">404 — {{ t.title }}</h1>

        <p class="line">
          <span class="prompt">$</span> cd <span class="path">{{ path }}</span>
        </p>
        <p class="line error">bash: cd: {{ path }}: {{ t.error }}</p>
        <p class="line comment">{{ t.comment }}</p>

        <p class="code" aria-hidden="true">404</p>

        <div class="actions">
          <a href="/" class="btn-primary">$ {{ t.home }}</a>
          <a :href="privacyPaths[lang]" class="btn-secondary">$ {{ t.privacy }}</a>
        </div>

        <p class="line">
          <span class="prompt">$</span> <span class="cursor"></span>
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: var(--color-bg);
}

.grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.4;
  background-image:
      linear-gradient(rgb(38, 43, 51) 1px, transparent 1px),
      linear-gradient(90deg, rgb(38, 43, 51) 1px, transparent 1px);
  background-size: 48px 48px;
}

.terminal {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 640px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  font-family: var(--font-mono);
  animation: fadein 0.3s ease-out;
}

.terminal-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot-pink { background: var(--text-pink); }
.dot-yellow { background: var(--text-yellow); }
.dot-green { background: var(--text-green); }

.terminal-title {
  margin-left: 8px;
  font-size: 12px;
  color: var(--color-muted);
}

.terminal-body {
  padding: 24px;
  font-size: 14px;
  line-height: 1.8;
  color: var(--color-text);
}

.line {
  margin: 0;
  overflow-wrap: anywhere;
}
.prompt { color: var(--text-green); }
.path { color: var(--text-blue); }
.error { color: var(--text-pink); }
.comment { color: var(--color-muted); }

.code {
  margin: 24px 0;
  font-size: clamp(4rem, 14vw, 7rem);
  font-weight: 700;
  line-height: 1;
  color: var(--text-yellow);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.btn-primary {
  font-size: 13px;
  padding: 10px 20px;
  background: var(--text-green);
  color: #0d0d0d;
  border-radius: 6px;
  text-decoration: none;
  transition: opacity 0.2s;
}
.btn-primary:hover { opacity: 0.85; }

.btn-secondary {
  font-size: 13px;
  padding: 10px 20px;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  text-decoration: none;
  transition: border-color 0.2s;
}
.btn-secondary:hover { border-color: var(--color-text); }

.cursor {
  display: inline-block;
  width: 9px;
  height: 1em;
  background: var(--text-green);
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes fadein {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .terminal, .cursor { animation: none; }
}
</style>
