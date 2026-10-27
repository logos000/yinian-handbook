<script setup lang="ts">
// Hero visual: one conversation with the Yinian agent, from a one-line idea to a finished short.
// Mirrors the in-app flow: plan checklist, a sample for review, then the exported mp4.
// The whole exchange plays once on load; with reduced motion it is shown complete.
const plan = [
  { label: 'Script', detail: '3 scenes, about a minute' },
  { label: 'Cast', detail: 'Aoi and the stranger, looks locked' },
  { label: 'Storyboard', detail: '14 shots' },
  { label: 'Sample', detail: 'first 4 shots drawn' }
]
</script>

<template>
  <figure class="chat" aria-label="Sample conversation: a one-line idea becomes a finished anime short">
    <header class="bar">
      <span class="who">
        <span class="mark" aria-hidden="true">Y</span>
        Yinian
      </span>
      <span class="project">The Last Train</span>
    </header>

    <div class="log">
      <p class="msg user" style="--d: 0.2s">
        A girl misses the last train home and meets a stranger on the empty platform. Make it about a minute.
      </p>

      <div class="msg agent" style="--d: 1s">
        <p>Love it. I’ve planned the short and drawn a sample for you:</p>
        <ul class="plan">
          <li v-for="(step, i) in plan" :key="step.label" :style="{ '--d': `${1.4 + i * 0.35}s` }">
            <svg class="box" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 7.5 L6 10.5 L11 4" /></svg>
            <b>{{ step.label }}</b>
            <span>{{ step.detail }}</span>
          </li>
        </ul>
        <div class="thumbs" aria-hidden="true">
          <!-- Wide: platform at dusk, train, low sun -->
          <svg viewBox="0 0 160 90" style="--d: 2.9s">
            <circle class="sun" cx="122" cy="40" r="11" />
            <path d="M0 58 H160 M0 90 L70 58 M160 90 L100 58 M40 90 L80 58" />
            <path d="M6 32 H98 V58 H6 Z M16 39 h16 v9 h-16 Z M40 39 h16 v9 h-16 Z M64 39 h16 v9 h-16 Z" />
            <path d="M132 72 v-12 M128 64 h8" />
            <circle cx="132" cy="56" r="3" />
          </svg>
          <!-- Medium: figure in the door frame, scarf in the wind -->
          <svg viewBox="0 0 160 90" style="--d: 3.05s">
            <path d="M42 90 V8 H118 V90" />
            <circle cx="80" cy="38" r="12" />
            <path d="M56 90 C58 66 66 58 80 56 C94 58 102 66 104 90" />
            <path class="acc" d="M70 57 C84 63 100 52 118 57 C130 61 140 55 152 48" />
          </svg>
          <!-- Two-shot: the stranger on the bench -->
          <svg viewBox="0 0 160 90" style="--d: 3.2s">
            <path d="M0 70 H160" />
            <path d="M88 52 H150 M94 52 V70 M144 52 V70" />
            <circle cx="118" cy="30" r="9" />
            <path d="M104 52 C106 42 112 40 118 40 C124 40 130 42 132 52" />
            <circle cx="44" cy="30" r="9" />
            <path d="M30 70 C32 50 38 42 44 42 C50 42 56 50 58 70" />
            <path class="acc" d="M38 44 C46 48 56 44 66 47" />
          </svg>
          <!-- Close-up: she looks back -->
          <svg viewBox="0 0 160 90" style="--d: 3.35s">
            <path d="M22 0 V90 M138 0 V90" />
            <path d="M58 90 C52 70 52 40 68 26 C84 12 112 16 120 34 C126 48 122 62 112 70 L108 90" />
            <path d="M64 32 C76 18 104 18 118 32 C104 28 86 28 72 42" />
            <path class="acc" d="M98 48 h10" />
          </svg>
        </div>
        <p class="ask" style="--d: 3.7s">Happy with the look? I’ll show the cost before rendering the rest.</p>
      </div>

      <p class="msg user" style="--d: 4.5s">Perfect. Make her scarf red, then finish it.</p>

      <div class="msg agent" style="--d: 5.3s">
        <div class="film">
          <span class="frame" aria-hidden="true">
            <svg viewBox="0 0 160 90">
              <circle class="sun" cx="122" cy="40" r="11" />
              <path d="M0 58 H160 M0 90 L70 58 M160 90 L100 58 M40 90 L80 58" />
              <path d="M6 32 H98 V58 H6 Z" />
            </svg>
            <span class="play"><i /></span>
          </span>
          <span class="file">
            <b>The Last Train.mp4</b>
            <span>1:04, 14 shots with sound. Ready to download.</span>
          </span>
        </div>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.chat {
  --paper: #f8f5f1;
  --panel: #efebe5;
  --rule: #d6d0c6;
  --ink: #252820;
  --muted: #5e5b53;
  --copper: #9b7247;
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  border: 1px solid #aaa59a;
  box-shadow: 10px 10px 0 var(--yn-shadow);
  font-family: var(--yn-font-body);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 18px;
  border-bottom: 1px solid var(--rule);
  font-size: 13px;
  color: var(--muted);
}
.who {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: var(--yn-font-display);
  font-size: 17px;
  font-weight: 600;
  color: var(--ink);
}
.mark {
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 24px;
  background: var(--ink);
  color: #f0eee5;
  font-size: 16px;
  line-height: 1;
}

.log {
  display: grid;
  gap: 16px;
  padding: 20px 18px 22px;
}
.msg {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
}
.msg p {
  margin: 0;
}
.msg.user {
  justify-self: end;
  max-width: 82%;
  padding: 10px 14px;
  background: var(--ink);
  color: #f0eee5;
}
.msg.agent {
  display: grid;
  gap: 12px;
  max-width: 94%;
  padding-left: 14px;
  border-left: 2px solid var(--copper);
}

.plan {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 10px 12px;
  background: var(--panel);
  list-style: none;
  font-size: 14px;
}
.plan li {
  display: grid;
  grid-template-columns: 14px auto 1fr;
  align-items: center;
  gap: 9px;
}
.plan b {
  font-weight: 600;
}
.plan span {
  color: var(--muted);
}
.box {
  width: 14px;
  height: 14px;
  border: 1.5px solid var(--ink);
}
.box path {
  fill: none;
  stroke: var(--copper);
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.thumbs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 6px;
}
.thumbs svg,
.frame svg {
  display: block;
  width: 100%;
  height: auto;
  background: #fffdf9;
  border: 1px solid var(--ink);
}
.thumbs path,
.thumbs circle,
.frame path {
  fill: none;
  stroke: var(--ink);
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.thumbs .acc {
  stroke: var(--copper);
  stroke-width: 3;
}
.sun {
  fill: #d9c3a5 !important;
  stroke: none !important;
}
.ask {
  color: var(--muted);
}

.film {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr);
  align-items: center;
  gap: 14px;
}
.frame {
  position: relative;
  display: block;
}
.frame svg {
  background: #2c2f26;
  border-color: #2c2f26;
}
.frame path {
  stroke: #cfcbbf;
}
.frame .sun {
  fill: #c2914a !important;
}
.play {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}
.play i {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 11px 0 11px 18px;
  border-color: transparent transparent transparent #f0eee5;
  filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.4));
}
.file {
  display: grid;
  gap: 4px;
}
.file b {
  font-family: var(--yn-font-display);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.15;
}
.file span {
  font-size: 13px;
  line-height: 1.45;
  color: var(--muted);
}

@media (max-width: 559px) {
  .log {
    padding: 16px 14px 18px;
  }
  .msg {
    font-size: 14px;
  }
  .plan li {
    grid-template-columns: 14px 1fr;
  }
  .plan span {
    grid-column: 2;
    margin-top: -6px;
    font-size: 13px;
  }
  .thumbs {
    gap: 4px;
  }
  .file b {
    font-size: 16px;
  }
}

/* The one orchestrated moment: the exchange plays through once */
@media (prefers-reduced-motion: no-preference) {
  .msg,
  .plan li,
  .thumbs svg,
  .ask {
    animation: arrive 0.45s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s) both;
  }
  .plan li .box path {
    stroke-dasharray: 14;
    animation: tick 0.3s ease-out calc(var(--d) + 0.2s) both;
  }
  .film .play {
    animation: arrive 0.4s ease-out 5.8s both;
  }
}
@keyframes arrive {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
}
@keyframes tick {
  from {
    stroke-dashoffset: 14;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
