'use client'


import Image from 'next/image';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';

export default function VetProfilePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center bg-white relative pb-24 md:pb-0">
      {/* Header */}
      <h1 className="text-4xl font-bold mt-8 mb-6 md:mt-16 md:text-5xl">Profil</h1>

      {/* Profile Image */}
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
        <Image
          src="/veterinary-woman.jpg"
          alt="Dr. Professionnel"
          width={224}
          height={224}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name */}
      <div className="text-xl md:text-2xl font-semibold text-center mb-10">Dr. Professionnel</div>

      {/* Buttons */}
      <div className="flex flex-col gap-6 w-full max-w-xs md:max-w-md">
        <button onClick={() => router.push('/vet/profile')} className="py-3 rounded-full bg-rose-400 text-white font-medium text-base shadow-md hover:bg-rose-500 transition">Informations personnelles</button>
        <button onClick={() => router.push('/vet/reservation')} className="py-3 rounded-full bg-rose-400 text-white font-medium text-base shadow-md hover:bg-rose-500 transition">Gérer mes rendez-vous</button>
        <button onClick={() => router.push('/subscription')} className="py-3 rounded-full bg-rose-400 text-white font-medium text-base shadow-md hover:bg-rose-500 transition">Passer Premium</button>
      </div>
    </div>
  );
}
