export default function GradioEmbed({ src, minHeight = 720 }) {
  return (
    <div className="w-full">
      <iframe
        src={src}
        title="AlterEgo — Chat with Fei"
        className="w-full rounded-lg border border-slate-200"
        style={{ height: minHeight }}
      />
      <p className="mt-3 text-sm text-slate-600">
        The chat may take a moment to wake up. If it does not load,{' '}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 underline hover:text-emerald-900"
        >
          open AlterEgo in a new tab
        </a>.
      </p>
    </div>
  );
}
