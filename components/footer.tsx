import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center py-4 bg-white shadow-t">
      <Link href="/main" prefetch={false} className="flex items-center">
        <Image
          src="/logo-vethome.png"
          alt="VetHome Logo"
          width={48}
          height={48}
          className="h-12 w-auto"
          priority
        />
      </Link>
    </footer>
  );
}
