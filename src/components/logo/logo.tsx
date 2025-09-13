import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" title="Página inicial">
      <Image
        src="/brand-logo.svg"
        alt="Site.Set logo"
        width={116}
        height={32}
      />
    </Link>
  );
};
