<script setup lang="ts">
// Hero visual: a storyboard sheet (絵コンテ) for a sample scene.
// Each cut carries a stamp showing how far through the pipeline it is.
// Timings use the animation-sheet convention seconds+frames (24 fps).
const cuts = [
  {
    no: '1',
    framing: 'Wide',
    action: 'Empty platform at dusk. The last train pulls in.',
    time: '3+12',
    stamp: 'Video done',
    state: 'done'
  },
  {
    no: '2',
    framing: 'Medium',
    action: 'Aoi steps off. Wind catches her scarf.',
    time: '2+18',
    stamp: 'Rendering',
    state: 'busy'
  },
  {
    no: '3',
    framing: 'Close-up',
    action: 'She looks back as the doors close.',
    time: '4+00',
    stamp: 'Keyframe',
    state: 'next'
  }
] as const
</script>

<template>
  <figure class="sheet" aria-label="Sample storyboard sheet: three cuts of one scene, each at a different stage of the pipeline">
    <div class="pegs" aria-hidden="true"><i /><i class="slot" /><i /></div>

    <header class="sheet-head">
      <span class="sheet-title">The Last Train</span>
      <span class="sheet-meta">Ep. 01&ensp;Sc. 03</span>
    </header>

    <div class="row head" aria-hidden="true">
      <span>Cut</span>
      <span>Picture</span>
      <span class="h-action">Action</span>
      <span class="t">Time</span>
    </div>

    <div v-for="(cut, i) in cuts" :key="cut.no" class="row cut" :style="{ '--i': i }">
      <span class="no">{{ cut.no }}</span>

      <span class="pic">
        <!-- Cut 1, wide: platform in perspective, train, low sun -->
        <svg v-if="i === 0" viewBox="0 0 160 90" aria-hidden="true">
          <circle class="sun" cx="122" cy="40" r="11" />
          <path class="ln" d="M0 58 H160" />
          <path class="ln" d="M0 90 L70 58 M160 90 L100 58 M40 90 L80 58" />
          <path class="ln" d="M6 32 H98 V58 H6 Z M16 39 h16 v9 h-16 Z M40 39 h16 v9 h-16 Z M64 39 h16 v9 h-16 Z" />
          <path class="ln" d="M132 72 v-12 M128 64 h8" />
          <circle class="ln" cx="132" cy="56" r="3" />
        </svg>
        <!-- Cut 2, medium: figure in the door frame, scarf in the wind -->
        <svg v-else-if="i === 1" viewBox="0 0 160 90" aria-hidden="true">
          <path class="ln" d="M42 90 V8 H118 V90" />
          <circle class="ln" cx="80" cy="38" r="12" />
          <path class="ln" d="M56 90 C58 66 66 58 80 56 C94 58 102 66 104 90" />
          <path class="ln acc" d="M70 57 C84 63 100 52 118 57 C130 61 140 55 152 48" />
          <path class="ln acc" d="M110 62 C122 67 134 65 148 60" />
        </svg>
        <!-- Cut 3, close-up: head turned back, door edges closing in -->
        <svg v-else viewBox="0 0 160 90" aria-hidden="true">
          <path class="ln" d="M22 0 V90 M138 0 V90" />
          <path class="ln" d="M58 90 C52 70 52 40 68 26 C84 12 112 16 120 34 C126 48 122 62 112 70 L108 90" />
          <path class="ln" d="M64 32 C76 18 104 18 118 32 C104 28 86 28 72 42" />
          <path class="ln acc" d="M98 48 h10" />
        </svg>
        <em class="framing">{{ cut.framing }}</em>
      </span>

      <span class="action">{{ cut.action }}</span>
      <span class="time">{{ cut.time }}</span>

      <span class="stamp" :class="cut.state">
        <b v-if="cut.state === 'busy'" class="dot" aria-hidden="true" />{{ cut.stamp }}
      </span>
    </div>
  </figure>
</template>

<style scoped>
.sheet {
  --paper: #f8f5f1;
  --rule: #c8c2b8;
  --ink: #252820;
  --muted: #5e5b53;
  position: relative;
  margin: 0;
  padding: 36px 22px 14px;
  background: var(--paper);
  color: var(--ink);
  border: 1px solid #aaa59a;
  box-shadow: 10px 10px 0 var(--yn-shadow);
}

.pegs {
  position: absolute;
  top: 13px;
  left: 50%;
  display: flex;
  gap: 46px;
  align-items: center;
  transform: translateX(-50%);
}
.pegs i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--vp-c-bg);
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.22);
}
.pegs i.slot {
  width: 34px;
  border-radius: 5px;
}

.sheet-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 9px;
  border-bottom: 2px solid var(--ink);
}
.sheet-title {
  font-family: var(--yn-font-display);
  font-size: 20px;
  font-weight: 600;
}
.sheet-meta {
  font-family: var(--yn-font-display);
  font-size: 15px;
  color: var(--muted);
}

.row {
  position: relative;
  display: grid;
  grid-template-columns: 30px minmax(0, 168px) minmax(0, 1fr) 44px;
  column-gap: 14px;
  align-items: start;
}
.row.head {
  padding: 7px 0 6px;
  font-size: 12px;
  color: var(--muted);
  border-bottom: 1px solid var(--rule);
}
.row.head .t,
.time {
  text-align: right;
}
.row.cut {
  padding: 12px 0;
  border-bottom: 1px solid var(--rule);
}
.row.cut:last-child {
  border-bottom: 0;
}

.no {
  font-family: var(--yn-font-display);
  font-size: 26px;
  font-weight: 600;
  line-height: 1;
}

.pic {
  position: relative;
  display: block;
  aspect-ratio: 16 / 9;
  border: 1.5px solid var(--ink);
  background: #fff;
  overflow: hidden;
}
.pic svg {
  display: block;
  width: 100%;
  height: 100%;
}
.ln {
  fill: none;
  stroke: var(--ink);
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.ln.acc {
  stroke: #9b7247;
  stroke-width: 1.8;
}
.sun {
  fill: #c2914a;
  opacity: 0.5;
}
.framing {
  position: absolute;
  left: 4px;
  bottom: 3px;
  padding: 0 3px;
  font-style: normal;
  font-size: 11px;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.85);
}

.action {
  padding-top: 2px;
  font-size: 14px;
  line-height: 1.45;
}
.time {
  padding-top: 2px;
  font-family: var(--yn-font-display);
  font-size: 16px;
  font-variant-numeric: tabular-nums;
}

.stamp {
  position: absolute;
  right: 0;
  bottom: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 8px 2px;
  font-family: var(--yn-font-display);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border: 1.5px solid currentColor;
  transform: rotate(-4deg);
}
.stamp.done {
  color: #85603a;
}
.stamp.busy {
  color: var(--ink);
}
.stamp.next {
  color: var(--muted);
  border-style: dashed;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c2914a;
}

/* The page's one orchestrated moment: each cut is drawn in, then stamped. */
@media (prefers-reduced-motion: no-preference) {
  .row.cut .ln {
    stroke-dasharray: 420;
    stroke-dashoffset: 420;
    animation: draw 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: calc(0.2s + var(--i) * 0.45s);
  }
  .row.cut .no,
  .row.cut .action,
  .row.cut .time,
  .row.cut .framing,
  .row.cut .sun {
    opacity: 0;
    animation: fade 0.5s ease forwards;
    animation-delay: calc(0.3s + var(--i) * 0.45s);
  }
  .row.cut .sun {
    animation-name: fade-sun;
  }
  .stamp {
    opacity: 0;
    animation: stamp 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: calc(1.15s + var(--i) * 0.45s);
  }
  .dot {
    animation: pulse 1.6s ease-in-out 2.2s infinite;
  }
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}
@keyframes fade {
  to { opacity: 1; }
}
@keyframes fade-sun {
  to { opacity: 0.5; }
}
@keyframes stamp {
  from { opacity: 0; transform: rotate(-4deg) scale(1.45); }
  to { opacity: 1; transform: rotate(-4deg) scale(1); }
}
@keyframes pulse {
  50% { opacity: 0.25; }
}

@media (max-width: 560px) {
  .sheet {
    padding: 32px 14px 10px;
    box-shadow: 6px 6px 0 var(--yn-shadow);
  }
  .row {
    grid-template-columns: 22px minmax(0, 1fr) 40px;
    column-gap: 12px;
  }
  .h-action {
    display: none;
  }
  .action {
    grid-column: 2;
    grid-row: 2;
    padding: 8px 0 34px;
  }
  .time {
    grid-column: 3;
    grid-row: 1;
  }
  .no {
    font-size: 21px;
  }
}
</style>
