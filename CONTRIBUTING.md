# Contributing to AI History in the Making

This is an open-source, community-driven record of the AI revolution. Community happens on GitHub — what gets merged becomes the record.

## Discussions vs Issues vs Pull Requests

We use **three channels** — pick the right one:

### Start a [Discussion](https://github.com/Deva-me-AI/AI-History-in-the-Making/discussions) when you want to:
- **Debate or discuss** — "Is the AI bubble sustainable?" or "What's the most important event we're missing?"
- **Ask open questions** — "Should we add a robotics section?" or "How should we handle contested claims?"
- **Share perspectives** — your take on AI trends, interpretations, or what the timeline gets right/wrong
- **Community conversation** — anything that doesn't need a specific code change

**→ Discussions are for conversation. No code changes needed.**

### Open an [Issue](https://github.com/Deva-me-AI/AI-History-in-the-Making/issues) when you want to:
- **Report a factual error** — "The First AI Winter date is wrong (1969 should be 1973)"
- **Flag a missing event** — "AlphaFold 2 should be on the timeline"
- **Propose a specific fix** — wrong date, broken source link, inaccurate description

**→ Issues are for actionable fixes that need a PR to resolve.**

### Open a Pull Request when you want to:
- **Add content** — you've written the timeline event or question and it's ready to merge
- **Fix something** — wrong date, broken link, typo, factual error
- **Update a status** — you have evidence that a question's resolution has changed
- **Improve the site** — UI fixes, new features, better design

**→ PRs are for shipping. You've made the change and it's ready for review.**

### The typical flow:
1. **Not sure / want to discuss first?** → Open an Issue
2. **Know exactly what to change?** → Open a PR directly
3. **Issue gets consensus?** → Someone (maybe you) opens a PR to implement it

## How to Contribute

### Adding a Timeline Event

Edit `data/timeline.json` and add:

```json
{
  "date": "2026-03-15",
  "title": "Something Important Happened",
  "description": "2-3 sentences: what happened AND why it matters.",
  "category": "Model Release",
  "sources": [
    { "url": "https://example.com/announcement", "label": "Official Source" },
    { "url": "https://techcrunch.com/...", "label": "TechCrunch" }
  ]
}
```

**Categories:** `Model Release`, `Lab Formation`, `Funding`, `Policy`, `Open Source`, `Infrastructure`, `Industry`, `Research`

### Adding or Updating an Open Question

Edit `data/questions.json` and add:

```json
{
  "id": "unique-slug",
  "question": "Will X happen?",
  "status": "partial",
  "statusLabel": "Partially Resolved",
  "firstDebated": "2024",
  "lastUpdated": "2026-03",
  "evidence": "What we know so far. Cite specifics.",
  "analysis": "What it means — opinionated by design."
}
```

**Status values:** `resolved`, `partial`, `open`

### What Gets Merged

This project mixes objective facts with journalistic interpretive overlay.

- **Facts must be accurate and sourced** (non-negotiable)
- **Analysis is opinionated by design** — but should be defensible
- **Dates matter** — at least month/year, exact dates preferred
- **Sources matter** — link to primary sources, official announcements, or credible reporting

Maintainers merge PRs based on factual accuracy, source quality, writing clarity, and whether the discussion reached rough consensus.

## Development

```bash
git clone https://github.com/Deva-me-AI/AI-History-in-the-Making.git
cd AI-History-in-the-Making
npm install
npm run dev
```

The site auto-deploys on every merge to `main`.

## Code of Conduct

Be constructive. Disagree on facts and analysis, not on people. This is a record of history — treat it with the seriousness it deserves.
