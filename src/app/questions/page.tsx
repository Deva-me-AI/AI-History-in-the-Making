import questionsData from "../../../data/questions.json";
import ContributeCard from "@/components/ContributeCard";

type Question = {
  id: string;
  question: string;
  status: string;
  statusLabel: string;
  firstDebated: string;
  lastUpdated: string;
  evidence: string;
  analysis: string;
  issueNumber?: number;
  issueUrl?: string;
};

const statusStyles: Record<string, string> = {
  resolved: "status-resolved",
  partial: "status-partial",
  open: "status-open",
};

const statusEmoji: Record<string, string> = {
  resolved: "🟢",
  partial: "🟡",
  open: "🔴",
};

export default function QuestionsPage() {
  const questions: Question[] = questionsData;

  const resolved = questions.filter((q) => q.status === "resolved");
  const partial = questions.filter((q) => q.status === "partial");
  const open = questions.filter((q) => q.status === "open");

  const sections = [
    { title: "Resolved", items: resolved, desc: "Questions that seemed open months ago and are now largely settled." },
    { title: "Partially Resolved", items: partial, desc: "Evidence is mounting but the jury's still out." },
    { title: "Still Open", items: open, desc: "Genuine uncertainty remains." },
  ].filter((s) => s.items.length > 0);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Open Questions</h1>
      <p className="text-gray-400 mb-4 max-w-2xl">
        The big debates about AI — tracked from when they were first seriously
        discussed to how they&apos;re resolving. Inspired by{" "}
        <a
          href="https://www.dwarkesh.com/p/questions-about-ai"
          className="text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dwarkesh Patel&apos;s format
        </a>
        .
      </p>
      <p className="text-gray-500 text-sm mb-12">
        📂 Data lives in{" "}
        <a
          href="https://github.com/Deva-me-AI/AI-History-in-the-Making/blob/main/data/questions.json"
          className="text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          questions.json
        </a>{" "}
        — disagree with a resolution?{" "}
        <a
          href="https://github.com/Deva-me-AI/AI-History-in-the-Making/issues/new?title=Question+challenge:+&labels=questions"
          className="text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open an issue
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/Deva-me-AI/AI-History-in-the-Making/edit/main/data/questions.json"
          className="text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          edit directly on GitHub
        </a>
        .
      </p>

      {sections.map((section) => (
        <div key={section.title} className="mb-16">
          <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
          <p className="text-gray-500 text-sm mb-8">{section.desc}</p>

          <div className="space-y-8">
            {section.items.map((q) => (
              <div
                key={q.id}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 question-card"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg font-semibold">
                    {statusEmoji[q.status]} {q.question}
                  </h3>
                  <span
                    className={`${statusStyles[q.status]} whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium`}
                  >
                    {q.statusLabel}
                  </span>
                </div>

                <div className="flex gap-4 text-xs text-gray-500 mb-4">
                  <span>First debated: {q.firstDebated}</span>
                  <span>Last updated: {q.lastUpdated}</span>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Evidence
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {q.evidence}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Analysis
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    {q.analysis}
                  </p>
                </div>

                {q.issueUrl && (
                  <div className="pt-3 border-t border-gray-800">
                    <a
                      href={q.issueUrl}
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💬 Join the debate on GitHub (#{q.issueNumber}) →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <ContributeCard context="Think a question is missing? Disagree with a resolution status? Have new evidence?" />
    </div>
  );
}
