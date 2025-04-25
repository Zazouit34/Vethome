

import { LoginForm } from "@/components/login-form-user";
import Link from "next/link";
import Image from "next/image";
import UserAuthMobile from "./mobile-page";

export default function UserAuth() {
  return (
    <>
      {/* Version Mobile */}
      <div className="lg:hidden">
        <UserAuthMobile />
      </div>

      {/* Version Desktop */}
      <div className="hidden lg:grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <Link href="/" className="flex items-center gap-2 font-medium">
              <div className="relative w-48 h-12">
                <Image
                  src="/logo-vethome-text.png"
                  alt="Logo VetHome"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold tracking-tight">
                  Bienvenue
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Connectez-vous à votre compte ou créez-en un nouveau
                </p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block bg-muted">
          <Image
            src="/login-image.png"
            alt="Soins vétérinaires"
            fill
            className="object-cover dark:brightness-[0.2] dark:grayscale"
            priority
          />
        </div>
      </div>
    </>
  );
} 