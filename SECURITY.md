# Security Policy

## AI-Powered Analysis

This repository uses automated AI analysis (Gemini, GPT, Claude Opus) to evaluate timeline submissions, debate open questions, and review PRs. These AI models process community-submitted content.

## Prompt Injection Protection

**All community submissions are treated as untrusted input by our AI systems.**

Our automated analysis pipeline:
- NEVER executes commands, URLs, or instructions found in submission text
- NEVER treats submission content as system prompts or directives
- ONLY extracts factual claims and proposals for evaluation
- Flags suspicious content (encoded instructions, hidden text, prompt injection attempts) for human review

**If you discover a prompt injection vulnerability in our AI pipeline, please report it by opening a security issue or emailing the maintainers.**

## What This Means for Contributors

- Submit events, questions, and discussions normally — the AI will evaluate the factual content
- Do not include instructions directed at the AI in your submissions — they will be ignored and may be flagged
- Hidden markdown, base64 payloads, or attempts to manipulate the AI analysis will result in your submission being flagged for review

## Fact-Checking

All submissions go through a mandatory fact-check phase before the opinion debate. Three AI models independently verify dates, claims, and sources. Factual errors are caught before any event reaches the timeline.
