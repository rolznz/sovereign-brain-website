---
title: "A Sovereign Brain on a Laptop: Local LLM + Pi Agent + Markdown"
description: "How I run a private, local AI second brain on a laptop — llama.cpp, a local Qwen model, the Pi agent, and plain Markdown. 100% offline, no cloud, runs on 32GB RAM."
pubDate: 2026-05-31
heroImage: ../../assets/local-ai-second-brain-laptop.jpg
heroImageAlt: "A local AI second brain running on a laptop"
---

My sovereign brain is my safe place. It holds my list of past, current, and future projects, my TODOs, upcoming events, my thoughts, my reflections, my goals.

But it isn't somewhere just to write notes. It's my thinking partner. It knows my past successes and failures. It pushes back on my ideas. It helps me step back and consider things from different angles. It ensures that I stay on track and work on the things that matter.

My sovereign brain is:

- 100% local and private
- efficient
- valuable

## How it works

1. **I dump:** Thoughts, ideas, TODOs. My agent automatically organizes the information as simple markdown files.
2. **We brainstorm:** Together, leveraging my existing context, we work through problems and develop plans.
3. **I execute:** I know what to work on, and the minimum work required for maximum return, and can quickly iterate.

## But don't I need some crazy powerful machine?

This setup even runs on a laptop with 32GB RAM (integrated graphics, expect ~7 tps), and works great on a laptop with a mid-tier graphics card or better (NVIDIA GeForce RTX 4060 - 8GB VRAM - expect ~20-30 tps).

For the first time ever I have a sufficiently smart and fast LLM running locally on my laptop. I didn't know it was possible until I tried it. It's been a massive unlock - I think anyone who hasn't tried it yet will feel the same.

However, we do need something simple and efficient since we are working with local models. That means, less general-purpose - OpenClaw or Hermes are overkill. Pi agent is perfect here - it has a minimal system prompt, maximizing your context window.

## Why local

Cloud models are smarter and faster. But giving an LLM access to my own thoughts is where I draw the line.

## Who is this for

For anyone who has to make a lot of decisions and wants to do so in a smarter way. I work almost 100% open source and in the public, but that doesn't mean I'm comfortable to share all my thoughts with Claude, OpenAI or Google. Privacy is a human right.

## My setup

1. LLM inference: llama.cpp
2. Local LLM: Qwen3.6-35B-A3B
3. 24/7 setup: systemd
4. Sandboxed agent VM: Multipass
5. Agent Harness: Pi
6. Local speech to text: VoxType
7. Backups: A flash drive
8. Wallet: Alby payments skill

This isn't about using the smartest AI. It's about an AI you're comfortable actually sharing information with. And now, you can set it up on the laptop you already own.

## Build your own

The tools are open source and free.

Take what you need and create your sovereign brain at [sovereignbrain.me](https://sovereignbrain.me).
