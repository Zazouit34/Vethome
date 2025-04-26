'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function UserProfileInfo() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center bg-white relative pb-24 md:pb-0">
      {/* Back Button */}
      <button onClick={() => router.back()} className="absolute left-4 top-6 text-2xl md:left-10 md:top-10">←</button>
      {/* Header */}
      <h1 className="text-xl font-bold mt-8 mb-6 md:mt-16 md:text-4xl">Informations personnelles</h1>
      {/* Profile Image */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
        <Image
          src="/review-image-1.jpg"
          alt="Samy Boudiaf"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Info */}
      <div className="w-full max-w-xs md:max-w-md bg-white rounded-xl shadow p-6 flex flex-col gap-4">
        <div>
          <div className="font-semibold text-lg">Samy Boudiaf</div>
          <div className="text-rose-400 font-medium">Utilisateur</div>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Email</div>
          <div className="font-medium">samy.boudiaf@email.com</div>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Téléphone</div>
          <div className="font-medium">+213 555 789 123</div>
        </div>
        <div>
          <div className="text-gray-500 text-sm">Adresse</div>
          <div className="font-medium">Alger, Algérie</div>
        </div>
      </div>
    </div>
  );
} 