import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import MobileOnly from "@/components/MobileOnly";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VetHome",
  description: "Your trusted platform for veterinary care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
       
          <div className="page-transitions">
            {children}
          </div>
      
        <Toaster />
      </body>
    </html>
  );
}
