'use client';

import Image from 'next/image';
import { Bell } from 'lucide-react';
import { useRouter } from 'next/navigation';

const user = {
  name: 'Particulier',
  image: '/review-image-1.jpg',
};

const services = [
  {
    title: 'Soin du pelage',
    image: '/soin.png',
  },
  {
    title: 'Bain & Nettoyage',
    image: '/bain.png',
  },
  {
    title: 'Soins des griffes',
    image: '/griffes.png',
  },
];

export default function CleaningPage() {
  const router = useRouter();

  const handleServiceClick = () => {
    // Rediriger vers la page des vétérinaires
    router.push('/veterinaries');
  };

  return (
    <div className="min-h-screen bg-white md:bg-gradient-to-b md:from-white md:to-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2 md:max-w-6xl md:mx-auto">
        <Image src={user.image} alt="profile" width={96} height={96} className="rounded-full w-12 h-12 md:w-20 md:h-20 object-cover" />
        <span className="font-bold text-lg md:text-2xl text-rose-400">Bienvenue, {user.name}</span>
        <button className="relative">
          <Bell className="w-7 h-7 text-gray-700" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-rose-400 rounded-full border-2 border-white"></span>
        </button>
      </div>
      {/* Cute message */}
      <div className="text-center text-gray-500 text-base mt-2 mb-2 md:max-w-3xl md:mx-auto">Comment vas votre compagnon aujourd'hui !</div>
      {/* Subtitle */}
      <div className="text-center text-lg font-semibold text-gray-700 mb-6 md:max-w-6xl md:mx-auto">Quel service pour votre compagnon aujourd'hui ?</div>
      {/* Service Cards */}
      <div className="px-4 md:max-w-6xl md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="relative rounded-2xl overflow-hidden shadow-lg h-48 md:h-56 flex items-end group cursor-pointer"
              onClick={handleServiceClick}
            >
              <Image src={service.image} alt={service.title} fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">{service.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
