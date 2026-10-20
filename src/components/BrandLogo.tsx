import Image from "next/image";
import Link from "next/link";

export function BrandLogo({
  href = "/",
  size = 36,
  showWordmark = true,
  priority = false,
}: {
  href?: string;
  size?: number;
  showWordmark?: boolean;
  priority?: boolean;
}) {
  return (
    <Link href={href} className="group flex items-center gap-2.5" aria-label="Nexoryna home">
      <Image
        src="/images/logo.png"
        alt="Nexoryna"
        width={size}
        height={size}
        className="rounded-md transition duration-300 group-hover:brightness-110"
        priority={priority}
      />
      {showWordmark && (
        <span className="font-display text-[1.45rem] tracking-[-0.03em] text-ink">Nexoryna</span>
      )}
    </Link>
  );
}
