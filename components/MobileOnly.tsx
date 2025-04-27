"use client";

import { useEffect, useState } from "react";

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
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        textAlign: "center"
      }}>
        This app is only available on mobile devices.
      </div>
    );
  }

  return <>{children}</>;
}