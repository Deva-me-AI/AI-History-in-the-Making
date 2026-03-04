# AI History in the Making

Documenting the fastest technological revolution in human history — milestones, open questions, and how fast they resolve.

**Live site:** [aihistoricunfolding.com](https://www.aihistoricunfolding.com)

## This is open source

All content lives in simple JSON files. Anyone can contribute — add events, update question resolutions, challenge the analysis, or propose entirely new questions.

**All debates happen on GitHub.** What gets merged becomes the record.

## Contributing

### Adding a Timeline Event

Edit `data/timeline.json` and add:

```json
{
  "date": "2026-03-15",
  "title": "Something Important Happened",
  "description": "A 2-3 sentence description of what happened and why it matters.",
  "category": "Model Release",
  "source": "https://example.com/announcement",
  "sourceLabel": "Source Name"
}
```

Categories: `Model Release`, `Lab Formation`, `Funding`, `Policy`, `Open Source`, `Infrastructure`, `Industry`

### Adding an Open Question

Edit `data/questions.json` and add:

```json
{
  "id": "unique-slug",
  "question": "Will X happen?",
  "status": "partial",
  "statusLabel": "Partially Resolved",
  "firstDebated": "2024",
  "lastUpdated": "2026-03",
  "evidence": "What we know so far.",
  "analysis": "What it means — opinionated by design."
}
```

Status values: `resolved`, `partial`, `open`

### Contesting / Debating Content

**Disagree with a resolution? Think an event is wrong or missing? Want to challenge the analysis?**

1. **[Open an Issue](https://github.com/Deva-me-AI/AI-History-in-the-Making/issues/new)** — describe what you think is wrong and provide evidence
2. The community debates in the issue thread
3. If there's consensus, someone opens a PR with the fix
4. What gets merged = the record

Use labels to categorize your issue:
- `timeline` — contesting or adding timeline events
- `questions` — contesting question status, evidence, or analysis
- `debate` — broader debates about AI trends or interpretations

**Active debates show up on the [Debates page](https://www.aihistoricunfolding.com/debates) of the site**, linking directly to GitHub issues so everyone can follow and participate.

### What Gets Merged

This project mixes objective facts with journalistic interpretive overlay. Facts must be accurate and sourced. Analysis is opinionated by design — but it should be defensible.

Maintainers merge PRs based on: factual accuracy (non-negotiable), quality of sources, clarity of writing, and whether the community discussion reached rough consensus.

## Development

```bash
npm install
npm run dev
```

## License

MIT
