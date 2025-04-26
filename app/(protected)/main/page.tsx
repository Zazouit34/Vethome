'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Bell } from "lucide-react";

// Données fictives pour les vétérinaires
const veterinaries = [
  {
    id: 1,
    name: "Dr. Lina Bensouna",
    image: "/veterinary-woman-1.jpg",
    specialization: "Docteur vétérinaire",
    rating: 4.8,
    distance: 8,
  },
  {
    id: 2,
    name: "Dr. Samy Boudiaf",
    image: "/veterinary-man.jpg",
    specialization: "Docteur vétérinaire",
    rating: 4.0,
    distance: 12,
  },
  {
    id: 3,
    name: "Dr. Hafidha Merzouki",
    image: "/veterinary-woman.jpg",
    specialization: "Docteur vétérinaire",
    rating: 3.6,
    distance: 14,
  },
];

const services = [
  {
    name: "Vet",
    image: "/veterinary-man.jpg",
    link: "/veterinaries",
  },
  {
    name: "Toilettage",
    image: "/toilettage.png", // Use your dog with pink hat image here
    link: "/cleaning",
  },
  {
    name: "Garderie",
    image: "/garderie.png",
    link: "/hosting",
  },
  {
    name: "Autre",
    image: "/pet-image.png",
    link: "/autre",
  },
];

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVeterinaries = veterinaries.filter(vet =>
    vet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vet.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vet.distance.toString().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white md:bg-gradient-to-b md:from-white md:to-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2 md:max-w-6xl md:mx-auto">
        <div className="flex items-center gap-3">
          <Image
            src="/review-image-1.jpg"
            alt="Samy Boudiaf"
            width={96}
            height={96}
            className="rounded-full w-12 h-12 md:w-24 md:h-24 object-cover border-2 border-white shadow"
          />
          <div className="flex flex-col">
            <span className="font-bold text-base md:text-lg text-rose-500">Bienvenue, Samy Boudiaf</span>
            <span className="text-sm text-gray-700">Comment vas votre compagnon aujourd'hui !</span>
          </div>
        </div>
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-800" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-rose-400 rounded-full border-2 border-white"></span>
        </button>
      </div>
      {/* Search Bar */}
      <div className="px-4 mt-2 md:max-w-6xl md:mx-auto">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <Search className="text-gray-400 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Rechercher"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none flex-1 text-base placeholder-gray-400"
          />
        </div>
      </div>
      {/* Service Navigation */}
      <div className="px-4 mt-4 md:max-w-6xl md:mx-auto">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 md:gap-6 md:justify-center">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.link}
              className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 gap-3 min-w-[170px] md:min-w-[200px] shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Image src={service.image} alt={service.name} width={36} height={36} className="rounded-full w-9 h-9 object-cover border border-gray-200" />
              <span className="text-base font-medium text-gray-700 whitespace-nowrap">{service.name}</span>
            </Link>
          ))}
        </div>
      </div>
      {/* Vethub Section */}
      <div className="px-4 mt-6 md:max-w-6xl md:mx-auto">
        <div className="flex gap-4 md:gap-8">
          <div className="flex-1 rounded-xl overflow-hidden relative">
            <Link href="/jobs" className="block h-full w-full">
              <Image src="/veterinary-female.png" alt="stage" width={160} height={100} className="w-full h-40 md:h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-sm font-medium bg-gradient-to-t from-black/60 to-transparent text-white">Trouvez votre stage</div>
            </Link>
          </div>
          <div className="flex-1 rounded-xl overflow-hidden relative">
            <Link href="/adoption" className="block h-full w-full">
              <Image src="/pet-image.png" alt="adoptez" width={160} height={100} className="w-full h-40 md:h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-sm font-medium bg-gradient-to-t from-black/60 to-transparent text-white">
                Adoptez, changez Une vie
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Top spécialistes */}
      <div className="px-4 mt-8 md:max-w-6xl md:mx-auto">
        <div className="font-semibold mb-3">Top spécialistes</div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 md:gap-6 md:justify-center">
          {filteredVeterinaries.map((vet) => (
            <Link href={`/profile?id=${vet.id}`} key={vet.id} className="min-w-[180px] md:min-w-[220px]">
              <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center">
                <Image src={vet.image} alt={vet.name} width={56} height={56} className="rounded-full w-14 h-14 object-cover mb-2" />
                <div className="font-semibold text-sm text-center mb-1">{vet.name}</div>
                <div className="text-xs text-gray-500 mb-1">{vet.specialization}</div>
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                  <Image src="/rate-selected.png" alt="star" width={14} height={14} />
                  <span>{vet.rating}</span>
                  <span className="ml-2">{vet.distance} km</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Shopping Section */}
      <div className="px-4 mt-8 md:max-w-6xl md:mx-auto mb-8">
        <div className="font-semibold mb-3">Shopping</div>
        <div className="flex gap-4 md:gap-8">
          <Link href="/food" className="flex-1">
            <div className="bg-rose-200 rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer hover:shadow-md transition">
              <span className="font-semibold text-xs mb-2">Nourriture</span>
              <Image src="/nourriture.png" alt="Nourriture" width={48} height={48} className="w-12 h-12 object-contain" />
            </div>
          </Link>
          <Link href="/medecin" className="flex-1">
            <div className="bg-blue-100 rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer hover:shadow-md transition">
              <span className="font-semibold text-xs mb-2">Médicaments</span>
              <Image src="/medicament.png" alt="Médicaments" width={48} height={48} className="w-12 h-12 object-contain" />
            </div>
          </Link>
          <Link href="/accessories" className="flex-1">
            <div className="bg-pink-100 rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer hover:shadow-md transition">
              <span className="font-semibold text-xs mb-2">Accessoires</span>
              <Image src="/accessoir.png" alt="Accessoires" width={48} height={48} className="w-12 h-12 object-contain" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 