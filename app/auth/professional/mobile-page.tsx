import { LoginFormMobile } from "@/components/login-form-mobile";
import Link from "next/link";
import Image from "next/image";

export default function ProfessionalAuthMobile() {
  return (
    <div className="min-h-screen relative">
      {/* Image d'arrière-plan */}
      <Image
        src="/vethome-background-image-horse.png"
        alt=""
        fill
        priority
        className="object-cover brightness-[0.3]"
      />

      {/* Contenu */}
      <div className="relative flex flex-col min-h-screen p-6">
        <div className="flex justify-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-medium text-white">
            <div className="relative w-48 h-48">
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

        <div className="flex-1 flex items-center justify-center mt-8">
          <div className="w-full max-w-xs">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Portail Professionnel
              </h2>
              <p className="text-sm text-gray-200 mt-2">
                Connectez-vous à votre compte professionnel ou inscrivez-vous en tant que vétérinaire
              </p>
            </div>
            <LoginFormMobile />
          </div>
        </div>
      </div>
    </div>
  );
} 