export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-pulse rounded-md bg-jade-bright/30" />
        <p className="text-sm text-muted">Loading Altrevon…</p>
      </div>
    </div>
  );
}
