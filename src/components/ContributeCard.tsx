const REPO = "https://github.com/Deva-me-AI/AI-History-in-the-Making";

export default function ContributeCard({ context }: { context?: string }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-6 mt-12">
      <div className="flex items-start gap-4">
        <div className="text-2xl">🔓</div>
        <div>
          <h3 className="font-semibold mb-1">This page is open source</h3>
          <p className="text-gray-400 text-sm mb-3">
            {context || "Disagree with something? Have something to add?"}{" "}
            All debates happen on GitHub. What gets merged becomes the record.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`${REPO}/issues/new`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              📝 Open an Issue
            </a>
            <a
              href={`${REPO}/pulls`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔀 Submit a PR
            </a>
            <a
              href={`${REPO}/blob/main/CONTRIBUTING.md`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-gray-200 hover:border-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              📖 How to Contribute
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
