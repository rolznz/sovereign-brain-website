// Data for the /vs/* comparison pages. Each entry drives one page via the
// [slug].astro dynamic route. Angle: open source + local + private (Sovereign
// Brain) vs closed, cloud competitors. Tone: candid — we acknowledge where the
// competitor is genuinely stronger.

export interface ComparisonRow {
	feature: string;
	sovereign: string;
	competitor: string;
}

export interface Comparison {
	slug: string;
	/** Competitor display name, e.g. "ChatGPT". */
	name: string;
	/** Page <title>. */
	title: string;
	/** Meta description. */
	description: string;
	/** Short H1. */
	heading: string;
	/** Intro paragraph(s). */
	intro: string;
	/** Feature comparison table rows. */
	rows: ComparisonRow[];
	/** Honest "where {competitor} wins" note. */
	competitorWins: string;
	/** Closing "the verdict" paragraph. */
	verdict: string;
}

const PRIVATE = '100% local — your data never leaves your machine';
const OPEN = 'Open source (public domain template)';
const FREE = 'Free — no subscription';

export const comparisons: Comparison[] = [
	{
		slug: 'chatgpt',
		name: 'ChatGPT',
		title: 'Sovereign Brain vs ChatGPT: Open-Source, Local & Private',
		description:
			'Sovereign Brain vs ChatGPT — a private, open-source, local AI second brain compared to OpenAI’s closed cloud assistant. Privacy, cost, ownership, and offline use.',
		heading: 'Sovereign Brain vs ChatGPT',
		intro:
			'ChatGPT is a closed, cloud-hosted assistant: your conversations and memory live on OpenAI’s servers. Sovereign Brain is the opposite — an open-source second brain that runs a local model on your own machine, so your thinking stays private and entirely yours.',
		rows: [
			{ feature: 'Where it runs', sovereign: 'Your own machine, fully offline', competitor: 'OpenAI’s cloud servers' },
			{ feature: 'Your data', sovereign: PRIVATE, competitor: 'Stored and processed in the cloud' },
			{ feature: 'Source code', sovereign: OPEN, competitor: 'Closed source' },
			{ feature: 'Cost', sovereign: FREE, competitor: 'Free tier; Plus/Pro subscription for best models' },
			{ feature: 'Your notes', sovereign: 'Plain Markdown files you own', competitor: 'Proprietary chat history' },
			{ feature: 'Works offline', sovereign: 'Yes', competitor: 'No — requires internet' },
		],
		competitorWins:
			'Honestly: ChatGPT’s frontier models are smarter and faster than anything you’ll run locally, and it needs zero setup. If you want raw capability on a one-off question, it wins.',
		verdict:
			'But for a second brain — the place you offload your private thoughts, plans, and reflections — capability isn’t the whole story. Sovereign Brain trades a little intelligence for total privacy, zero cost, and real ownership. That’s a trade worth making for the thoughts you wouldn’t paste into someone else’s cloud.',
	},
	{
		slug: 'claude',
		name: 'Claude',
		title: 'Sovereign Brain vs Claude: Open-Source, Local & Private',
		description:
			'Sovereign Brain vs Claude — an open-source, local AI second brain compared to Anthropic’s closed cloud assistant. Compare privacy, cost, ownership, and offline use.',
		heading: 'Sovereign Brain vs Claude',
		intro:
			'Claude is a closed, cloud-based assistant from Anthropic — capable and thoughtful, but your data is processed on their servers. Sovereign Brain runs an open-source, local model on hardware you own, keeping your second brain private and offline.',
		rows: [
			{ feature: 'Where it runs', sovereign: 'Your own machine, fully offline', competitor: 'Anthropic’s cloud servers' },
			{ feature: 'Your data', sovereign: PRIVATE, competitor: 'Stored and processed in the cloud' },
			{ feature: 'Source code', sovereign: OPEN, competitor: 'Closed source' },
			{ feature: 'Cost', sovereign: FREE, competitor: 'Free tier; Pro subscription for more usage' },
			{ feature: 'Your notes', sovereign: 'Plain Markdown files you own', competitor: 'Proprietary chat history' },
			{ feature: 'Works offline', sovereign: 'Yes', competitor: 'No — requires internet' },
		],
		competitorWins:
			'To be fair: Claude is excellent at long-form reasoning and writing, and runs far larger models than your laptop can. For heavy, capability-bound work it’s stronger.',
		verdict:
			'For a personal thinking partner, though, the priority is trust, not benchmarks. Sovereign Brain keeps every reflection on your own disk, costs nothing, and is fully open. You can even use Claude for the hard problems and keep your private brain local — sovereignty where it matters most.',
	},
	{
		slug: 'gemini',
		name: 'Gemini',
		title: 'Sovereign Brain vs Gemini: Open-Source, Local & Private',
		description:
			'Sovereign Brain vs Google Gemini — an open-source, local AI second brain versus Google’s closed cloud assistant. Privacy, cost, data ownership, and offline use compared.',
		heading: 'Sovereign Brain vs Gemini',
		intro:
			'Gemini is Google’s closed, cloud assistant, woven into the Google account ecosystem. Sovereign Brain is its opposite: an open-source second brain that runs locally, so your ideas never become part of anyone’s ad-driven data graph.',
		rows: [
			{ feature: 'Where it runs', sovereign: 'Your own machine, fully offline', competitor: 'Google’s cloud servers' },
			{ feature: 'Your data', sovereign: PRIVATE, competitor: 'Stored and processed by Google' },
			{ feature: 'Source code', sovereign: OPEN, competitor: 'Closed source' },
			{ feature: 'Cost', sovereign: FREE, competitor: 'Free tier; subscription for advanced models' },
			{ feature: 'Your notes', sovereign: 'Plain Markdown files you own', competitor: 'Tied to your Google account' },
			{ feature: 'Works offline', sovereign: 'Yes', competitor: 'No — requires internet' },
		],
		competitorWins:
			'Credit where due: Gemini’s models are powerful and integrate tightly with Gmail, Docs, and search. If deep Google integration is what you want, it delivers.',
		verdict:
			'That integration is exactly the trade-off, though — your second brain lives inside Google. Sovereign Brain keeps your private thinking off the cloud entirely: open source, free, offline, and accountable to no one but you.',
	},
	{
		slug: 'notion-ai',
		name: 'Notion AI',
		title: 'Sovereign Brain vs Notion AI: Open-Source, Local & Private',
		description:
			'Sovereign Brain vs Notion AI — an open-source, local AI second brain compared to Notion’s closed, cloud, subscription AI. Privacy, cost, ownership, and offline use.',
		heading: 'Sovereign Brain vs Notion AI',
		intro:
			'Notion AI layers a closed, cloud assistant on top of Notion’s proprietary database — powerful, but your knowledge is locked in their format and their servers. Sovereign Brain keeps everything as plain Markdown on your own disk, driven by a local, open-source agent.',
		rows: [
			{ feature: 'Where it runs', sovereign: 'Your own machine, fully offline', competitor: 'Notion’s cloud servers' },
			{ feature: 'Your data', sovereign: PRIVATE, competitor: 'Stored in Notion’s cloud' },
			{ feature: 'Source code', sovereign: OPEN, competitor: 'Closed source' },
			{ feature: 'Cost', sovereign: FREE, competitor: 'Paid add-on on top of a Notion plan' },
			{ feature: 'Your notes', sovereign: 'Plain Markdown files you own', competitor: 'Proprietary blocks (export is lossy)' },
			{ feature: 'Works offline', sovereign: 'Yes', competitor: 'Limited — built for the cloud' },
		],
		competitorWins:
			'Fairly: Notion is a polished, all-in-one workspace with databases, sharing, and a slick UI that a folder of Markdown can’t match for team collaboration.',
		verdict:
			'For a private personal brain, that polish comes at the cost of lock-in and a subscription. Sovereign Brain gives you plain files you’ll still be able to open in decades, no monthly fee, and an open-source agent that runs on your terms.',
	},
	{
		slug: 'obsidian',
		name: 'Obsidian',
		title: 'Sovereign Brain vs Obsidian: Open vs Closed Source',
		description:
			'Sovereign Brain vs Obsidian — both are local and Markdown-based, but Obsidian is closed source. Compare openness, the built-in local AI agent, privacy, and cost.',
		heading: 'Sovereign Brain vs Obsidian',
		intro:
			'Obsidian and Sovereign Brain agree on the important things: local-first, plain Markdown, your files on your disk. The difference is openness and AI. Obsidian is a closed-source app with paid AI add-ons; Sovereign Brain is an open-source template with a private, local AI agent built in — and the two happily coexist.',
		rows: [
			{ feature: 'Where it runs', sovereign: 'Your own machine', competitor: 'Your own machine' },
			{ feature: 'File format', sovereign: 'Plain Markdown', competitor: 'Plain Markdown' },
			{ feature: 'Source code', sovereign: OPEN, competitor: 'Closed source (free to use)' },
			{ feature: 'Built-in AI', sovereign: 'Local, private agent included', competitor: 'Via paid/cloud plugins' },
			{ feature: 'Cost', sovereign: FREE, competitor: 'Free for personal use; paid add-ons' },
			{ feature: 'Lock-in', sovereign: 'None — it’s just files', competitor: 'Low — also just files' },
		],
		competitorWins:
			'In fairness: Obsidian is a beautifully crafted app with graph view, a huge plugin ecosystem, and mobile apps. As a day-to-day Markdown editor it’s hard to beat.',
		verdict:
			'They’re not really rivals — point Sovereign Brain at the same folder and edit it in Obsidian. The difference is that Sovereign Brain is fully open source and ships a private local AI agent, instead of relying on closed apps and cloud plugins for intelligence.',
	},
];
