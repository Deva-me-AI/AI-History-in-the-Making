# AI History in the Making

Documenting the fastest technological revolution in human history — milestones, open questions, and how fast they resolve.

## Contributing

All content lives in `data/`:

- **`data/timeline.json`** — Timeline events (date, title, description, category)
- **`data/questions.json`** — Open questions (question, status, evidence, analysis)

Submit a PR to add events, update resolutions, or challenge the analysis. The site rebuilds automatically on merge.

### Adding a Timeline Event

Add an object to `data/timeline.json`:

```json
{
  "date": "2026-03-15",
  "title": "Something Important Happened",
  "description": "A 2-3 sentence description of what happened and why it matters.",
  "category": "Model Release"
}
```

Categories: `Model Release`, `Lab Formation`, `Funding`, `Policy`, `Open Source`, `Infrastructure`, `Industry`

### Adding an Open Question

Add an object to `data/questions.json`:

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

## Development

```bash
npm install
npm run dev
```

## License

MIT
