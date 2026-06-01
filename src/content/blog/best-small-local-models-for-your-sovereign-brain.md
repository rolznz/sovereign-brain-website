---
title: "Best Small Local Models for Your Sovereign Brain"
description: "I tested small local LLMs as the brain behind a sovereign second brain — Qwen3.6 35B A3B, Gemma 4 E4B, and LFM2.5 8B A1B — scored on reasoning, tool use, and whether they're actually a good thinking partner."
pubDate: 2026-06-01
heroImage: ../../assets/best-small-local-models.jpg
heroImageAlt: "Comparing small local language models for a private AI second brain"
---

The model is the brain of your sovereign brain. Pick the wrong one and the whole thing falls apart — it can't follow your files, it forgets to use its skills, and it's a useless thinking partner. Pick the right one and it's a genuine unlock.

So I've been running small local models through the same job: be the engine behind my sovereign brain. Here's what I found, and how I score them.

## The entry ticket

Every model here activates only **~1–4B parameters per token** — Qwen3.6 35B A3B routes through ~3B of its 35B, Gemma 4 E4B ~4B, LFM2.5 8B A1B ~1B. That low activated count is what makes them fast and lets them fit in 32GB. It's the entry ticket, not the differentiator — they're all in the same per-token *compute* class.

What separates them isn't on the spec sheet at all. Activated params don't predict it (they're all similar), and neither does total size — as you'll see, the model with *more* total parameters isn't the better brain. The only way to find out is to run them. So I score them on what actually matters for the job:

## What I'm scoring

A model for a sovereign brain isn't judged on benchmarks. It's judged on whether it can actually *do the job*:

- **Reasoning** — can it think, or just autocomplete?
- **Tool calling** — does it reliably call tools when it should?
- **Skill use** — does it remember it *has* skills and reach for them?
- **Knows the brain** — does it understand which Markdown files to read and edit?
- **Thinking partner** — does it analyze, push back, and ask for details — or just agree?
- **Speed** — tokens per second on consumer hardware.

### The carwash test

My quick reasoning probe is deliberately silly:

> "I want to wash my car. The carwash is 50 meters away. Should I walk myself or drive my car if I want to wash my car?"

The answer is *drive* — the car is the thing that needs washing, so the car has to go to the carwash. Walking yourself there leaves the car at home and defeats the whole point. A model that says "it's only 50 meters, just walk" is pattern-matching on "short distance," not actually reasoning about the goal. It's a cheap test, but it sorts the thinkers from the parrots fast.

## Qwen3.6 35B A3B — the one to use

This is the lead, and it's not close. It works perfectly: a true game changer. It's genuinely smart — it **passed the carwash test** without hesitation, reasoning that the car itself needs to get to the wash.

Tool calling is reliable, it reaches for its skills, it understands the structure of the brain and edits the right files, and it's an actual brainstorming partner — it analyzes, pushes back, and asks for the details it's missing. The only cost is speed: it's the slowest of the three, but it's more than fast enough to be a daily driver.

| Category | Score |
| --- | --- |
| Reasoning | ★★★★★ |
| Tool calling | ★★★★★ |
| Skill use | ★★★★★ |
| Knows the brain | ★★★★★ |
| Thinking partner | ★★★★★ |
| Speed | ★★★☆☆ |
| **Overall** | **9 / 10 — recommended** |

## Gemma 4 E4B — fast, but not quite

Gemma is about **2x faster** than Qwen3.6, which is tempting. But it's also about 2x dumber. Tool and skill use *sort of* works — which in practice means it doesn't, not reliably. It **fails the carwash test**, and worse for a second brain: it doesn't really analyze things, and it won't ask for the additional details it needs. That makes it a weak thinking partner.

It's almost there. But "almost" isn't good enough for the thing you trust with your thinking.

I also tested the larger **Gemma 4 26B A4B** — and interestingly, saw no improvement over Gemma 4 E4B. It still couldn't really use skills properly, didn't follow instructions, and wasn't thoroughly checking things. More total parameters didn't buy a better brain here.

| Category | Score |
| --- | --- |
| Reasoning | ★★☆☆☆ |
| Tool calling | ★★☆☆☆ |
| Skill use | ★★☆☆☆ |
| Knows the brain | ★★☆☆☆ |
| Thinking partner | ★★☆☆☆ |
| Speed | ★★★★★ |
| **Overall** | **4 / 10 — not yet** |

## LFM2.5 8B A1B — avoid

Fast, and that's the only nice thing I can say. It **fails the carwash test**, frequently fails at tool calling, doesn't think to use its skills, and isn't smart enough to work out which files in the brain it should be editing. For a second brain, that's disqualifying.

| Category | Score |
| --- | --- |
| Reasoning | ★☆☆☆☆ |
| Tool calling | ★☆☆☆☆ |
| Skill use | ★☆☆☆☆ |
| Knows the brain | ★☆☆☆☆ |
| Thinking partner | ★☆☆☆☆ |
| Speed | ★★★★★ |
| **Overall** | **2 / 10 — avoid** |

## The verdict

1. **Qwen3.6 35B A3B — 9/10.** Use this. Smart, reliable, a real thinking partner.
2. **Gemma 4 E4B — 4/10.** Fast and close, but won't make a good second brain yet.
3. **LFM2.5 8B A1B — 2/10.** Avoid.

Back to the spec sheet: all three run roughly the same compute per token, so speed isn't what sets them apart. Neither is raw size — **LFM2.5 has 8B total parameters, more than Gemma 4 E4B's ~4B, yet Gemma is the better brain.** The numbers don't predict the winner. What actually matters is overall model quality — how well those parameters were trained, not just how many there are — and the only way to know is to run your own gauntlet. Qwen3.6 35B A3B is the one that clears the bar: enough well-trained capacity to reason, call tools, and find the right file, while its MoE design keeps it fast enough and small enough to fit 32GB.

No 32GB machine? You can run a capable model in a [private cloud (PPQ.ai TEE)](/blog/use-ppq-ai-tee-for-your-sovereign-brain/) instead.

## Build your own

The tools are open source and free.

Take what you need and create your sovereign brain at [sovereignbrain.me](https://sovereignbrain.me).
