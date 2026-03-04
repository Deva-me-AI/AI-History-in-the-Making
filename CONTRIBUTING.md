# Contributing to AI History in the Making

This is an open-source, community-driven record of the AI revolution. All debates happen on GitHub — what gets merged becomes the record.

## How to Contribute

### Adding a Timeline Event

1. Fork the repo
2. Edit `data/timeline.json`
3. Add your event object:

```json
{
  "date": "YYYY-MM-DD",
  "title": "What Happened",
  "description": "2-3 sentences. What happened and why it matters.",
  "category": "Model Release",
  "source": "https://...",
  "sourceLabel": "Source Name"
}
```

4. Open a PR with evidence/sources

**Categories:** `Model Release`, `Lab Formation`, `Funding`, `Policy`, `Open Source`, `Infrastructure`, `Industry`

### Adding or Updating an Open Question

1. Fork the repo
2. Edit `data/questions.json`
3. Add or modify a question:

```json
{
  "id": "unique-slug",
  "question": "Your question?",
  "status": "partial",
  "statusLabel": "Partially Resolved",
  "firstDebated": "2024",
  "lastUpdated": "2026-03",
  "evidence": "What we know. Cite sources.",
  "analysis": "What it means. Opinionated by design."
}
```

4. Open a PR explaining your reasoning

**Status values:** `resolved`, `partial`, `open`

### Challenging Existing Content

Disagree with an analysis? Think a question's status is wrong? Think an event is missing or misdated?

1. **Open an Issue** first to discuss
2. If there's consensus (or strong evidence), open a PR
3. All debates happen in GitHub Issues and PR comments

### What Makes a Good Contribution

- **Sourced claims** — link to primary sources, official announcements, or credible reporting
- **Specific dates** — at least month/year, exact dates preferred
- **Concise descriptions** — 2-3 sentences that explain what happened AND why it matters
- **Honest analysis** — opinionated is fine, unsupported isn't

### What Gets Merged

This project mixes objective facts with journalistic interpretive overlay. Facts must be accurate and sourced. Analysis is opinionated by design — but it should be defensible.

Maintainers merge PRs based on:
- Factual accuracy (non-negotiable)
- Quality of sources
- Clarity of writing
- Whether the community discussion reached rough consensus

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
