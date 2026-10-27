# The pipeline

Yinian's pipeline mirrors a real animation production, compressed into one workspace a single creator can drive. Six stages, each feeding the next — and each one you can revisit at any time.

| Stage | What happens | What you do |
| --- | --- | --- |
| **Script** (剧本) | Your episode takes shape as plain text | Write, iterate, ask for rewrites |
| **Storyboard** (拆镜) | Scenes split into individual shots | Review framing, action, durations |
| **Character lock** (定妆) | Each character gets a fixed reference look | Approve or adjust the designs |
| **Keyframes** (生图) | A still image is generated per shot | Batch-generate, re-roll single shots |
| **Video** (视频) | Keyframes become moving shots | Submit, track, retry safely |
| **Editing handoff** (剪辑交接) | Everything is organized for the edit | Export and finish in your editor |

## Script (剧本)

Everything starts as text. Write a synopsis or a full script in plain language — you don't need any special formatting. The assistant can expand a one-paragraph idea into scenes, tighten an overwritten draft, or translate your beat sheet into a shootable script.

## Storyboard (拆镜)

The script is broken into a structured shot list: one row per shot, with framing (wide, medium, close-up…), on-screen action, and intended duration. This is the backbone of the production — every later stage hangs off a shot in this board. You stay in control: adjust any shot, reorder, merge, split, then lock the board.

## Character lock (定妆)

The classic failure mode of AI-generated animation is a protagonist who looks different in every shot. Yinian attacks this head-on: before mass generation, each character gets a locked reference look, and later stages generate against that reference. Re-lock a design at any time — shots generated afterwards follow the new look.

## Keyframes (生图)

With the board locked and the cast dressed, Yinian generates a keyframe still for each shot. Generate in batches and review the grid; any single shot can be regenerated on its own without disturbing its neighbors. Fine-tune the prompt behind a shot when you want a different take.

## Video (视频)

Keyframes become moving shots through the built-in video gateway. Every job has a visible status; failures are categorized so you know what went wrong. The retry semantics are billing-safe — a failed or timed-out job never silently resubmits, so you can't be charged twice for the same shot.

## Editing handoff (剪辑交接)

The pipeline ends where your editor begins. Shots are organized and exported as a clean package — naming and structure kept consistent — so whether the next step is Premiere, DaVinci Resolve, or your own hands on a timeline, you start from an ordered set of finished shots instead of a download folder of chaos.
