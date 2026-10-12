<script setup>
import en from '../locales/privacy-en'
import hu from '../locales/privacy-hu'
import { privacyPaths } from '../routes.js'

const props = defineProps({
  lang: { type: String, required: true },
})

const content = props.lang === 'hu' ? hu : en
const otherLang = props.lang === 'hu' ? 'en' : 'hu'

document.title = content.docTitle
document.documentElement.lang = props.lang

// Makes unfilled [PLACEHOLDERS] stand out on the page
const mark = (html) => html.replace(/\[[A-Z ]+\]/g, '<mark class="placeholder">$&</mark>')
</script>

<template>
  <main class="privacy">
    <div class="privacy-bar">
      <a href="/" class="bar-link">← {{ content.back }}</a>
      <a :href="privacyPaths[otherLang]" class="lang-btn" :hreflang="otherLang">--lang={{ lang }}</a>
    </div>

    <article class="privacy-content">
      <p class="command">{{ content.command }}</p>
      <h1>{{ content.title }}</h1>
      <p class="updated" v-html="mark(content.updated)"></p>

      <section v-for="section in content.sections" :key="section.title">
        <h2><span class="hash">##</span> {{ section.title }}</h2>

        <div v-if="section.table" class="table-wrap">
          <table>
            <thead>
              <tr>
                <th v-for="h in content.cookieTable.headers" :key="h">{{ h }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in content.cookieTable.rows" :key="row[0]">
                <td v-for="(cell, i) in row" :key="i" :class="{ 'cell-name': i === 0 }">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p v-for="(p, i) in section.paragraphs" :key="i" v-html="mark(p)"></p>
        <ul v-if="section.list">
          <li v-for="(item, i) in section.list" :key="i">{{ item }}</li>
        </ul>
        <p v-for="(p, i) in section.after" :key="`a${i}`" v-html="mark(p)"></p>
      </section>
    </article>
  </main>
</template>

<style scoped>
.privacy {
  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
}

.privacy-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  font-family: var(--font-mono);
}

.bar-link {
  font-size: 13px;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.bar-link:hover { color: var(--text-pink); }

.lang-btn {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-green);
  background-color: #1c2027;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 4px 10px;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: all 0.2s;
}
.lang-btn:hover { border-color: var(--text-green); }

.privacy-content {
  max-width: 820px;
  margin: 0 auto;
  padding: 64px 24px 96px;
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.7;
}

.command {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-green);
  margin: 0 0 8px;
}

h1 {
  font-family: var(--font-mono);
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 4px;
}

.updated {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-muted);
  margin: 0 0 40px;
}

section { margin-bottom: 40px; }

h2 {
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 500;
  color: var(--text-blue);
  margin: 0 0 12px;
}
.hash { color: var(--color-muted); }

p { margin: 0 0 12px; color: var(--color-text); }
p :deep(strong) { color: var(--text-yellow); font-weight: 600; }
p :deep(a) { color: var(--text-green); }
p :deep(a:hover) { color: var(--text-pink); }

ul {
  margin: 0 0 12px;
  padding-left: 0;
  list-style: none;
}
li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 4px;
}
li::before {
  content: '-';
  position: absolute;
  left: 4px;
  color: var(--text-green);
  font-family: var(--font-mono);
}

.table-wrap {
  overflow-x: auto;
  margin-bottom: 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

th, td {
  text-align: left;
  padding: 10px 12px;
  border-bottom: 1px solid var(--color-border);
  vertical-align: top;
}
tbody tr:last-child td { border-bottom: none; }

th {
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 12px;
  color: var(--color-muted);
  background: var(--color-surface);
}

.cell-name {
  font-family: var(--font-mono);
  color: var(--text-green);
  white-space: nowrap;
}

:deep(.placeholder) {
  font-family: var(--font-mono);
  background: rgba(255, 128, 181, 0.15);
  color: var(--text-pink);
  padding: 0 4px;
  border-radius: 3px;
}

@media (max-width: 640px) {
  .privacy-content { padding: 40px 20px 64px; }
  h1 { font-size: 22px; }
}
</style>
