import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <BrandLogo href="/" size={48} priority />
      <p className="mt-10 text-[0.78rem] font-semibold tracking-[0.16em] text-jade-bright uppercase">
        404
      </p>
      <h1 className="font-display mt-3 text-[clamp(2rem,5vw,3.2rem)] tracking-[-0.03em] text-ink">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-jade-bright px-5 py-3 text-sm font-semibold text-on-accent transition hover:brightness-110"
        >
          Back to home
        </Link>
        <Link
          href="/careers"
          className="rounded-lg border border-[var(--line)] px-5 py-3 text-sm font-semibold text-ink transition hover:border-jade-bright/40"
        >
          Careers
        </Link>
      </div>
    </div>
  );
}
