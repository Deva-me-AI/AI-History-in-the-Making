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
  inspiredBy?: {
    label: string;
    url: string;
  };
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
    { title: "Still Open", items: open, desc: "Genuine uncertainty remains. These are the hardest questions." },
    { title: "Partially Resolved", items: partial, desc: "Evidence is mounting but the jury's still out." },
    { title: "Resolved", items: resolved, desc: "Questions that seemed open months ago and are now largely settled." },
  ].filter((s) => s.items.length > 0);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 tracking-tight">Open Questions</h1>
      <p className="text-gray-400 mb-4 max-w-2xl leading-relaxed">
        The big debates about AI — tracked from when they were first seriously
        discussed to how they&apos;re resolving. Inspired by{" "}
        <a
          href="https://www.dwarkesh.com/p/questions-about-ai"
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dwarkesh Patel&apos;s format
        </a>
        .
      </p>
      <p className="text-gray-600 text-sm mb-12">
        📂 Data lives in{" "}
        <a href="https://github.com/Deva-me-AI/AI-History-in-the-Making/blob/main/data/questions.json" className="text-indigo-400 hover:text-indigo-300" target="_blank" rel="noopener noreferrer">
          questions.json
        </a>{" "}
        — disagree?{" "}
        <a href="https://github.com/Deva-me-AI/AI-History-in-the-Making/issues/new/choose" className="text-indigo-400 hover:text-indigo-300" target="_blank" rel="noopener noreferrer">
          Open an issue
        </a>
        .
      </p>

      {/* Stats bar */}
      <div className="flex items-center gap-6 mb-12 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-red-400" />
          <span className="text-gray-500">{open.length} Open</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-yellow-400" />
          <span className="text-gray-500">{partial.length} Partial</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-green-400" />
          <span className="text-gray-500">{resolved.length} Resolved</span>
        </div>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="mb-16">
          <h2 className="text-xl font-semibold mb-2 tracking-tight">{section.title}</h2>
          <p className="text-gray-600 text-sm mb-6">{section.desc}</p>

          <div className="space-y-5">
            {section.items.map((q) => (
              <div
                key={q.id}
                className="glass-card rounded-xl p-6 question-card"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-base font-semibold leading-snug">
                    {statusEmoji[q.status]} {q.question}
                  </h3>
                  <span
                    className={`${statusStyles[q.status]} whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-medium flex-shrink-0`}
                  >
                    {q.statusLabel}
                  </span>
                </div>

                <div className="flex gap-4 text-[11px] text-gray-600 mb-4 font-mono">
                  <span>debated {q.firstDebated}</span>
                  <span>updated {q.lastUpdated}</span>
                </div>

                <div className="mb-4">
                  <h4 className="text-[11px] font-semibold uppercase tracking-widest text-gray-600 mb-2">
                    Evidence
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {q.evidence}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-[11px] font-semibold uppercase tracking-widest text-gray-600 mb-2">
                    Analysis
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    {q.analysis}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-x-4 gap-y-2">
                  {q.issueUrl && (
                    <a
                      href={q.issueUrl}
                      className="inline-flex items-center gap-2 text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💬 Join the debate (#{q.issueNumber}) →
                    </a>
                  )}
                  {q.inspiredBy && (
                    <a
                      href={q.inspiredBy.url}
                      className="inline-flex items-center gap-1.5 text-[11px] text-gray-600 hover:text-gray-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📖 {q.inspiredBy.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <ContributeCard context="Think a question is missing? Disagree with a resolution status? Have new evidence?" />
    </div>
  );
}
