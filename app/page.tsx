import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Mobile background decoration */}
      <div className="absolute inset-0 w-full h-full md:hidden">
        <Image
          src="/decoration-background.png"
          alt=""
          fill
          priority
          className="object-cover opacity-50 dark:opacity-30"
          quality={100}
        />
      </div>

      {/* Desktop background decoration */}
      <div className="absolute inset-0 w-full h-full hidden md:block">
        <Image
          src="/decoration-background-desktop.png"
          alt=""
          fill
          priority
          className="object-cover opacity-50 dark:opacity-30"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative text-center space-y-12 p-8">
        {/* Mobile splash text */}
        <div className="relative w-[280px] h-[120px] md:hidden mx-auto animate-in fade-in ">
          <Image
            src="/vetHome-splash-text.png"
            alt="VetHome"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Desktop splash text */}
        <div className="relative w-[400px] h-[171px] hidden md:block mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Image
            src="/vethome-spalsh-text-desktop.png"
            alt="VetHome"
            fill
            priority
            className="object-contain"
          />
        </div>
        
        <div className="flex flex-col gap-4 items-center mt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <Link href="/auth/user" className="transition-transform duration-200 hover:scale-105">
            <Button size="lg" className="w-64 transition-colors">
              Particulier
            </Button>
          </Link>
          <Link href="/auth/professional" className="transition-transform duration-200 hover:scale-105">
            <Button size="lg" variant="outline" className="w-64 transition-colors">
              Professionnel
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
