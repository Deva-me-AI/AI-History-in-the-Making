# AI History in the Making

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.aihistoricunfolding.com&label=aihistoricunfolding.com)](https://www.aihistoricunfolding.com)
[![Stars](https://img.shields.io/github/stars/Deva-me-AI/AI-History-in-the-Making?style=flat&logo=github&v=2)](https://github.com/Deva-me-AI/AI-History-in-the-Making/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/Deva-me-AI/AI-History-in-the-Making?label=Last%20Update&v=2)](https://github.com/Deva-me-AI/AI-History-in-the-Making/commits/main)
[![Discussions](https://img.shields.io/github/discussions/Deva-me-AI/AI-History-in-the-Making?label=Discussions&logo=github&v=2)](https://github.com/Deva-me-AI/AI-History-in-the-Making/discussions)
[![Issues](https://img.shields.io/github/issues/Deva-me-AI/AI-History-in-the-Making?label=Issues&logo=github&v=2)](https://github.com/Deva-me-AI/AI-History-in-the-Making/issues)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

Documenting the fastest technological revolution in human history — milestones, open questions, and how fast they resolve.

**Live site:** [aihistoricunfolding.com](https://www.aihistoricunfolding.com)

## This is open source

All content lives in simple JSON files. Anyone can contribute — add events, update question resolutions, challenge the analysis, or propose entirely new questions.

**Community happens on GitHub:**
- **[Discussions](https://github.com/Deva-me-AI/AI-History-in-the-Making/discussions)** — Open debates, questions, and community conversation about AI history
- **[Issues](https://github.com/Deva-me-AI/AI-History-in-the-Making/issues)** — Actionable fixes: wrong dates, missing events, factual errors
- **What gets merged becomes the record.**

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

### Debating & Discussing

**Want to debate AI history or challenge the analysis?**

→ **[Start a Discussion](https://github.com/Deva-me-AI/AI-History-in-the-Making/discussions/new)** for open-ended debates, questions, and conversation

→ **[Open an Issue](https://github.com/Deva-me-AI/AI-History-in-the-Making/issues/new)** for actionable fixes (wrong dates, missing events, factual errors)

**When to use Discussions vs Issues:**
- **Discussions** — "Is the AI bubble real?", "Should we add robotics events?", "What's the most important event we're missing?" — open questions with no single right answer
- **Issues** — "The First AI Winter date is wrong (1969 should be 1973)", "Missing event: AlphaFold 2" — specific errors that need a data change

When a Discussion reaches consensus on something actionable, it gets converted to an Issue → PR → merged.

**Active debates show up on the [Community page](https://www.aihistoricunfolding.com/debates) of the site**, linking to both GitHub Discussions and Issues.

### What Gets Merged

This project mixes objective facts with journalistic interpretive overlay. Facts must be accurate and sourced. Analysis is opinionated by design — but it should be defensible.

Maintainers merge PRs based on: factual accuracy (non-negotiable), quality of sources, clarity of writing, and whether the community discussion reached rough consensus.

## Development

```bash
npm install
npm run dev
```

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — you're free to share and adapt this content for any purpose, even commercially, as long as you give appropriate credit.
