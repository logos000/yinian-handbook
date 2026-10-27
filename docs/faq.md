# FAQ

## What is Yinian?

Yinian (一念, "one thought") is an AI production workbench for making anime-style series **solo**. It covers the whole pipeline — script, storyboard, character design, keyframe generation, video generation, and editing handoff — in one workspace, so one person can carry an episode from idea to edit.

## Who is it for?

Solo creators and tiny teams making anime-style content — series pilots, shorts, fan works, story-driven channels — who would otherwise need a studio's worth of coordination to keep a production consistent.

## Do I need to know how to prompt-engineer?

No. The pipeline is structured: you write and review at each stage, and Yinian handles the generation details. If you like fine control, per-shot prompt tuning is there when you want it.

## How does billing work?

Generation is billed by usage. Each creator can plug in their own video-generation gateway key in Settings, so costs follow the providers you choose — see the in-app pricing details for current rates. Failed jobs never bill you twice.

## What's the difference between the hosted edition and self-hosting?

- **Hosted** ([yinian.avalidigital.ca](https://yinian.avalidigital.ca)): open an account and start immediately — we run the servers.
- **Self-hosted**: run your own Docker deployment with your own Supabase project for accounts; all data stays on your machine. See [Self-hosting](/self-host).

## Where is my data?

Every account gets an isolated workspace. On the hosted edition workspaces are per-user and isolated from each other; on a self-hosted instance everything stays in your own Docker volume. Your API keys are stored encrypted, and logs never contain them.

## Which languages does the UI support?

English and Chinese, switchable in-app. New UI copy ships bilingually.

## I forgot my password

Use "forgot password" on the login page — you'll get a recovery link by email.
