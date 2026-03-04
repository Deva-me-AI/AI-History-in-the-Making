const REPO = "https://github.com/Deva-me-AI/AI-History-in-the-Making";

export default function ContributeCard({ context }: { context?: string }) {
  return (
    <div className="glass-card rounded-2xl p-6 mt-16">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
          🔓
        </div>
        <div>
          <h3 className="font-semibold text-gray-200 mb-1.5 text-sm">This page is open source</h3>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            {context || "Disagree with something? Have something to add?"}{" "}
            All debates happen on GitHub. What gets merged becomes the record.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={`${REPO}/discussions`}
              className="btn-secondary inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Join Discussion
            </a>
            <a
              href={`${REPO}/issues/new/choose`}
              className="btn-secondary inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              📝 Open an Issue
            </a>
            <a
              href={`${REPO}/pulls`}
              className="btn-secondary inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔀 Submit a PR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
