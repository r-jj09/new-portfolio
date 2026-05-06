<script setup>
  import { useLang } from '../../composables/useLang'

  const { messages } = useLang()

</script>
<template>
    <section class="contact" id="contact"0>
      <div class="contact-content">
        <p class="contact-echo">
          <span class="echo-cmd">$ echo </span>
          <span class="echo-text">"{{ messages.contact.echo }}"</span>
        </p>

        <a :href="`mailto:${messages.contact.email}`" class="email-btn">
          <span class="email-arrow">→</span>
          {{ messages.contact.email }}
        </a>

        <div class="contact-links">
          <template v-for="(link, i) in messages.contact.links" :key="i">
            <a :href="link.url" target="_blank" class="contact-link">{{ link.label }}</a>
            <span class="link-dot" v-if="i < messages.contact.links.length - 1">·</span>
          </template>
        </div>
      </div>
    </section>
</template>

<style scoped>
.contact {
  background: var(--color-bg);
  padding: 40px;
  border-bottom: 1px solid var(--color-border);
}

.contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;
  padding: 40px 0;
}

.contact-echo {
  font-family: var(--font-mono);
  font-size: 13px;
}
.echo-cmd { color: var(--text-green); }
.echo-text { color: var(--color-muted); }

.email-btn {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-green);
  text-decoration: none;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: border-color 0.2s, background 0.2s;
}
.email-btn:hover {
  border-color: var(--text-green);
  background: rgba(124, 243, 160, 0.05);
}

.email-arrow { color: var(--text-green); }

.contact-links {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 12px;
}
.contact-link {
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.contact-link:hover { color: var(--color-text); }
.link-dot { color: var(--color-border); }

@media (max-width: 768px) {
  .contact { padding: 60px 24px; }
}
</style>