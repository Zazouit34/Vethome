'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function UserReservations() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-white relative pb-24 md:pb-0">
      {/* Back Button */}
      <button onClick={() => router.back()} className="absolute left-4 top-6 text-2xl md:left-10 md:top-10">
        <ArrowLeft className="w-6 h-6" />
      </button>
      {/* Header */}
      <h1 className="text-xl font-bold mt-8 mb-6 md:mt-16 md:text-5xl text-center">Réservations</h1>
      {/* Reservation Card */}
      <div className="w-full flex justify-center">
        <div className="bg-rose-100 rounded-xl p-4 flex flex-row gap-4 items-start max-w-md w-full mx-4 shadow-md">
          <Image
            src="/veterinary-man.jpg"
            alt="Dr. Mouloud sala"
            width={64}
            height={64}
            className="rounded-full object-cover w-16 h-16 mt-1"
          />
          <div className="flex-1">
            <div className="font-semibold text-lg text-gray-800 mb-1">Dr. Mouloud sala</div>
            <div className="text-sm font-semibold text-gray-700 mb-1">Rendez-vous à domicile :</div>
            <div className="text-sm text-gray-700 mb-1">mardi 22/06/2025 à 14h:00</div>
            <div className="text-sm font-semibold text-gray-700 mb-1">Prestations :</div>
            <div className="text-sm text-gray-700 mb-1">rappel vaccin<br/>Soin anti parasitaire vermifuge</div>
            <div className="text-sm text-gray-500 mb-2">Paiement par carte effectué</div>
            <div className="flex gap-3 mt-2">
              <button className="px-4 py-1 rounded-full bg-rose-400 text-white text-sm font-medium shadow hover:bg-rose-500 transition">Modifier</button>
              <button className="px-4 py-1 rounded-full bg-rose-400 text-white text-sm font-medium shadow hover:bg-rose-500 transition">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
