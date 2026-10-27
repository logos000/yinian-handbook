<script setup lang="ts">
import { withBase } from 'vitepress'
import StoryboardSheet from './StoryboardSheet.vue'

const APP_URL = 'https://yinian.avalidigital.ca'

// Mirrors guide/pipeline.md; the Chinese names are the ones used inside the app
const stages = [
  { en: 'Script', zh: '剧本', text: 'Write in plain language. Ask for rewrites, cuts or a tighter draft.' },
  { en: 'Storyboard', zh: '拆镜', text: 'The script becomes a shot list with framing, action and duration.' },
  { en: 'Character lock', zh: '定妆', text: 'Fix each character’s look before anything is generated.' },
  { en: 'Keyframes', zh: '生图', text: 'One still per shot, in batches. Re-roll any shot on its own.' },
  { en: 'Video', zh: '视频', text: 'Keyframes become moving shots, with progress you can watch.' },
  { en: 'Editing handoff', zh: '剪辑交接', text: 'Export an ordered package for Premiere, Resolve or any editor.' }
]

const safeguards = [
  {
    key: 'faces',
    title: 'Faces stay the same',
    text: 'Lock a character once. Every keyframe after that is generated against the same reference, so your lead still looks like your lead in shot\u00a040.'
  },
  {
    key: 'redo',
    title: 'Redo one shot, keep the rest',
    text: 'Unhappy with a single keyframe or clip? Regenerate just that one. Nothing else on the board moves.'
  },
  {
    key: 'billing',
    title: 'No double charges',
    text: 'A failed or timed-out video job is never resubmitted behind your back. If a result was already paid for, you fetch it again instead of paying twice.'
  },
  {
    key: 'private',
    title: 'Your workspace is yours',
    text: 'Every account gets its own isolated workspace. API keys are stored encrypted and never written to logs.'
  }
]
</script>

<template>
  <div class="yn-home">
    <section class="hero">
      <div class="hero-copy">
        <p class="intro">Yinian <span lang="zh">一念</span>, “one thought”</p>
        <h1>One person,<br /><span class="nw">one anime series.</span></h1>
        <p class="lede">
          A production workbench for solo creators. Write the script, and Yinian carries every shot
          through storyboard, character design, keyframes and video, then hands you a folder your
          editor can open.
        </p>
        <div class="actions">
          <a class="btn primary" :href="APP_URL">Open the app</a>
          <a class="btn ghost" :href="withBase('/guide/quick-start')">Read the quick start</a>
        </div>
        <p class="aside">Runs in your browser. English and Chinese interface.</p>
      </div>
      <div class="hero-sheet">
        <StoryboardSheet />
      </div>
    </section>

    <section class="band stages" aria-labelledby="stages-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="stages-title">Six stages, one workspace</h2>
          <p>
            The pipeline follows a real animation production. Each stage feeds the next, and you
            can go back to any of them at any time.
          </p>
        </div>
        <ol class="track">
          <li v-for="(s, i) in stages" :key="s.en">
            <span class="n">{{ i + 1 }}</span>
            <h3>{{ s.en }} <span lang="zh">{{ s.zh }}</span></h3>
            <p>{{ s.text }}</p>
          </li>
        </ol>
        <a class="more" :href="withBase('/guide/pipeline')">See what happens at each stage</a>
      </div>
    </section>

    <section class="band guards" aria-labelledby="guards-title">
      <div class="wrap split">
        <h2 id="guards-title">Made for the parts that usually go wrong</h2>
        <ul class="guard-list">
          <li v-for="g in safeguards" :key="g.key">
            <svg class="glyph" viewBox="0 0 64 40" aria-hidden="true">
              <template v-if="g.key === 'faces'">
                <g v-for="x in [12, 32, 52]" :key="x">
                  <circle :cx="x" cy="15" r="7" />
                  <path :d="`M${x - 9} 34 C${x - 8} 26 ${x - 4} 23 ${x} 23 C${x + 4} 23 ${x + 8} 26 ${x + 9} 34`" />
                </g>
                <path class="acc" d="M4 38 H60" />
              </template>
              <template v-else-if="g.key === 'redo'">
                <rect x="4" y="4" width="16" height="14" />
                <rect x="24" y="4" width="16" height="14" />
                <rect x="44" y="4" width="16" height="14" />
                <rect x="4" y="22" width="16" height="14" />
                <rect class="acc fill" x="24" y="22" width="16" height="14" />
                <rect x="44" y="22" width="16" height="14" />
              </template>
              <template v-else-if="g.key === 'billing'">
                <path d="M18 2 H46 V38 L41 35 L36 38 L32 35 L28 38 L23 35 L18 38 Z" />
                <path d="M24 12 H40 M24 19 H34" />
                <path class="acc" d="M24 27 H40" />
              </template>
              <template v-else>
                <rect x="14" y="16" width="36" height="22" />
                <path d="M22 16 V10 a10 10 0 0 1 20 0 V16" />
                <circle class="acc fill" cx="32" cy="27" r="3" />
              </template>
            </svg>
            <div>
              <h3>{{ g.title }}</h3>
              <p>{{ g.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="band editions" aria-labelledby="editions-title">
      <div class="wrap">
        <h2 id="editions-title">Use it hosted, or run your own</h2>
        <div class="edition-grid">
          <article class="edition hosted">
            <h3>In your browser</h3>
            <p>
              Sign up with an email address and start your first project. We run the servers and
              keep them up to date.
            </p>
            <a class="btn on-ink" :href="APP_URL">Create an account</a>
          </article>
          <article class="edition self">
            <h3>On your own machine</h3>
            <p>
              The same app in Docker, with your own Supabase project for accounts. Projects, media
              and keys live in one volume you control. The self-hosted build is available on request.
            </p>
            <a class="btn ghost" :href="withBase('/self-host')">Read the self-hosting guide</a>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.yn-home {
  --gutter: 24px;
  font-family: var(--yn-font-body);
  color: var(--vp-c-text-1);
}
.wrap,
.hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--gutter);
}
@media (min-width: 640px) {
  .yn-home { --gutter: 48px; }
}
@media (min-width: 960px) {
  .yn-home { --gutter: 64px; }
}

h1,
h2,
h3 {
  font-family: var(--yn-font-display);
  font-weight: 600;
  color: var(--vp-c-text-1);
}
[lang='zh'] {
  font-family: var(--yn-font-cjk);
  font-weight: 500;
}

/* Hero */
.hero {
  display: grid;
  gap: 56px;
  padding-top: 56px;
  padding-bottom: 88px;
}
@media (min-width: 1000px) {
  .hero {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: center;
    gap: 64px;
    padding-top: 72px;
    padding-bottom: 112px;
  }
}
.intro {
  margin: 0 0 18px;
  font-size: 16px;
  color: var(--vp-c-text-2);
}
.intro [lang='zh'] {
  color: var(--vp-c-text-1);
}
.hero h1 {
  margin: 0;
  font-size: clamp(46px, 6.4vw, 80px);
  line-height: 0.96;
  letter-spacing: -0.012em;
}
@media (min-width: 1000px) {
  .hero h1 {
    font-size: clamp(54px, 5.2vw, 80px);
  }
  .hero h1 .nw {
    white-space: nowrap;
  }
}
.lede {
  max-width: 34em;
  margin: 26px 0 0;
  font-size: 19px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}
.aside {
  margin: 18px 0 0;
  font-size: 14px;
  color: var(--vp-c-text-3);
}

/* Buttons: product ink with the hard offset shadow */
.btn {
  display: inline-flex;
  align-items: center;
  min-height: 46px;
  padding: 0 22px;
  font-family: var(--yn-font-display);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-decoration: none;
  border: 1.5px solid var(--yn-ink-btn);
  transition: transform 0.15s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.15s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn.primary {
  background: var(--yn-ink-btn);
  color: var(--yn-on-ink-btn);
  box-shadow: 4px 4px 0 var(--yn-accent);
}
.btn.primary:hover {
  transform: translate(-1px, -1px);
  box-shadow: 6px 6px 0 var(--yn-accent);
}
.btn.ghost {
  color: var(--vp-c-text-1);
  background: transparent;
}
.btn.ghost:hover {
  background: var(--vp-c-bg-soft);
}
.btn.on-ink {
  background: #f0eee5;
  color: #252820;
  border-color: #f0eee5;
  box-shadow: 4px 4px 0 #c2914a;
}
.btn.on-ink:hover {
  transform: translate(-1px, -1px);
  box-shadow: 6px 6px 0 #c2914a;
}
.btn:focus-visible,
.more:focus-visible {
  outline: 2px solid var(--yn-accent);
  outline-offset: 3px;
}

/* Sections */
.band {
  padding: 88px 0;
  border-top: 1px solid var(--vp-c-divider);
}
.band h2 {
  margin: 0;
  font-size: clamp(32px, 4vw, 44px);
  line-height: 1.05;
}
.section-head {
  display: grid;
  gap: 16px 64px;
  margin-bottom: 48px;
}
.section-head p {
  max-width: 36em;
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}
@media (min-width: 960px) {
  .section-head {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: end;
  }
}

/* Stages: a production track, because the content really is a sequence */
.stages {
  background: var(--vp-c-bg-alt);
}
.track {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px 0;
  margin: 0;
  padding: 0;
  list-style: none;
}
@media (min-width: 640px) {
  .track { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (min-width: 1100px) {
  .track { grid-template-columns: repeat(6, minmax(0, 1fr)); }
}
.track li {
  position: relative;
  padding: 22px 24px 0 0;
  border-top: 2px solid var(--vp-c-text-1);
}
.track li::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 0;
  width: 10px;
  height: 10px;
  background: var(--yn-accent);
  transform: rotate(45deg);
}
.track .n {
  display: block;
  margin-bottom: 10px;
  font-family: var(--yn-font-display);
  font-size: 40px;
  font-weight: 500;
  line-height: 1;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
}
.track h3 {
  margin: 0 0 8px;
  font-size: 21px;
  line-height: 1.2;
}
.track h3 [lang='zh'] {
  display: block;
  margin-top: 2px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
.track p {
  margin: 0;
  font-size: 15px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}
.more {
  display: inline-block;
  margin-top: 44px;
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
}
.more:hover {
  color: var(--vp-c-text-1);
}

/* Safeguards */
.split {
  display: grid;
  gap: 48px 64px;
}
@media (min-width: 960px) {
  .split {
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.6fr);
  }
  .split h2 {
    position: sticky;
    top: calc(var(--vp-nav-height) + 32px);
    align-self: start;
    max-width: 9em;
  }
}
.guard-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 48px 40px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.guard-list li {
  display: grid;
  align-content: start;
  gap: 18px;
}
.glyph {
  width: 64px;
  height: 40px;
  overflow: visible;
}
.glyph * {
  fill: none;
  stroke: var(--vp-c-text-1);
  stroke-width: 1.6;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.glyph .acc {
  stroke: var(--yn-accent);
  stroke-width: 2.2;
}
.glyph .acc.fill {
  fill: var(--yn-accent);
}
.guard-list h3 {
  margin: 0 0 8px;
  font-size: 23px;
  line-height: 1.2;
}
.guard-list p {
  max-width: 32em;
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* Editions */
.editions {
  padding-bottom: 8px;
}
.editions h2 {
  margin-bottom: 40px;
}
.edition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
}
.edition {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 36px 40px;
}
.edition h3 {
  margin: 0 0 12px;
  font-size: 28px;
}
.edition p {
  flex: 1;
  max-width: 30em;
  margin: 0 0 32px;
  font-size: 16px;
  line-height: 1.6;
}
.edition.hosted {
  background: #252820;
  color: #f0eee5;
  box-shadow: 8px 8px 0 var(--yn-shadow);
}
.edition.hosted h3 {
  color: #f0eee5;
}
.edition.hosted p {
  color: #cfcbbf;
}
.edition.self {
  border: 1.5px solid var(--vp-c-text-1);
}
.edition.self p {
  color: var(--vp-c-text-2);
}
.dark .edition.hosted {
  background: #2c2f26;
  outline: 1px solid #4b4a3b;
}

@media (max-width: 639px) {
  .hero {
    padding-top: 32px;
  }
  .lede {
    font-size: 17px;
  }
  .band {
    padding: 64px 0;
  }
  .edition {
    padding: 28px 24px 30px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
</style>
