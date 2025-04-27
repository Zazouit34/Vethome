"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MobileOnly({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const mobile = /android|iphone/i.test(userAgent);
    setIsMobile(mobile);
  }, []);

  if (isMobile === null) {
    // Optionally, show a loading spinner or nothing while checking
    return null;
  }

  if (!isMobile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <Image
          src="/construction.jpg"
          alt="En construction"
          width={200}
          height={200}
          className="rounded-2xl shadow mb-6"
        />
        <div className="text-center text-lg text-gray-700 font-semibold">
          Cette application est en cours de construction pour les ordinateurs.<br />
          Elle est disponible uniquement sur mobile.<br />
          Merci de votre compréhension !
        </div>
      </div>
    );
  }

  return <>{children}</>;
}