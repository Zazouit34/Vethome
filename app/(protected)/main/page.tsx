'use client';

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import Link from "next/link";
import { Search, MapPin } from "lucide-react";

// Données fictives pour les vétérinaires
const veterinaries = [
  {
    id: 1,
    name: "Dr. Mouloud sala",
    image: "/veterinary-man.jpg",
    specialization: "Docteur vétérinaire",
    rating: 4.8,
    distance: 8,
  },
  {
    id: 2,
    name: "Dr. Kalini Jithma",
    image: "/veterinary-woman-1.jpg",
    specialization: "Docteur vétérinaire",
    rating: 4.0,
    distance: 12,
  },
  {
    id: 3,
    name: "Dr. Amira loudji",
    image: "/veterinary-woman.jpg",
    specialization: "Docteur vétérinaire",
    rating: 3.6,
    distance: 14,
  },
];

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVeterinaries = veterinaries.filter(vet =>
    vet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vet.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vet.distance.toString().includes(searchQuery.toLowerCase())
  );

  const renderRating = (rating: number, distance: number) => {
    return (
      <div className="flex items-center gap-1">
        <Image
          src="/rate-selected.png"
          alt="évaluation"
          width={20}
          height={20}
          className="inline-block"
        />
        <span className="text-sm font-medium">{rating}</span>
        <span className="text-sm text-muted-foreground">
          ({rating} • {distance} km)
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white md:bg-gradient-to-b md:from-white md:to-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2 md:max-w-2xl md:mx-auto">
        <Image src="/veterinary-woman.jpg" alt="profile" width={48} height={48} className="rounded-full w-12 h-12 object-cover" />
        <span className="font-bold text-lg text-rose-400">Bienvenue, Dr. Hafidha</span>
        <button className="relative">
          <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="absolute top-0 right-0 w-2 h-2 bg-rose-400 rounded-full border-2 border-white"></span>
        </button>
      </div>
      {/* Search Bar */}
      <div className="px-4 mt-2 md:max-w-2xl md:mx-auto">
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
      <div className="px-4 mt-4 md:max-w-2xl md:mx-auto">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          <div className="flex flex-col items-center min-w-[72px]">
            <div className="bg-rose-100 rounded-full p-3 mb-1">
              <Image src="/veterinary-man.jpg" alt="Vet" width={32} height={32} className="rounded-full" />
            </div>
            <span className="text-xs font-medium">Vet</span>
          </div>
          <div className="flex flex-col items-center min-w-[72px]">
            <div className="bg-rose-100 rounded-full p-3 mb-1">
              <Image src="/rate-selected.png" alt="Toilettage" width={32} height={32} />
            </div>
            <span className="text-xs font-medium">Toilettage</span>
          </div>
          <div className="flex flex-col items-center min-w-[72px]">
            <div className="bg-gray-200 rounded-full p-3 mb-1">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#888" strokeWidth="2" /><path d="M8 12h8" stroke="#888" strokeWidth="2" strokeLinecap="round" /></svg>
            </div>
            <span className="text-xs font-medium">Garde</span>
          </div>
          <div className="flex flex-col items-center min-w-[72px]">
            <div className="bg-gray-200 rounded-full p-3 mb-1">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="6" stroke="#888" strokeWidth="2" /></svg>
            </div>
            <span className="text-xs font-medium">Autre</span>
          </div>
        </div>
      </div>
      {/* Vethub Section */}
      <div className="px-4 mt-6 md:max-w-2xl md:mx-auto">
        <div className="flex gap-4">
          <div className="flex-1 bg-gray-100 rounded-xl overflow-hidden">
            <Image src="/veterinary-female.png" alt="stage" width={160} height={100} className="w-full h-24 object-cover" />
            <div className="p-2 text-sm font-medium">Trouvez votre stage</div>
          </div>
          <div className="flex-1 bg-gray-100 rounded-xl overflow-hidden">
            <Image src="/pet-image.png" alt="adoptez" width={160} height={100} className="w-full h-24 object-cover" />
            <div className="p-2 text-sm font-medium">Adoptez, <br />changez Une vie</div>
          </div>
        </div>
      </div>
      {/* Top spécialistes */}
      <div className="px-4 mt-8 md:max-w-2xl md:mx-auto">
        <div className="font-semibold mb-3">Top spécialistes</div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {filteredVeterinaries.map((vet) => (
            <Link href={`/profile?id=${vet.id}`} key={vet.id} className="min-w-[180px]">
              <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center">
                <Image src={vet.image} alt={vet.name} width={56} height={56} className="rounded-full w-14 h-14 object-cover mb-2" />
                <div className="font-semibold text-sm text-center mb-1">{vet.name}</div>
                <div className="text-xs text-gray-500 mb-1">{vet.specialization}</div>
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                  {renderRating(vet.rating, vet.distance)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Shopping Section */}
      <div className="px-4 mt-8 md:max-w-2xl md:mx-auto mb-8">
        <div className="font-semibold mb-3">Shopping</div>
        <div className="flex gap-4">
          <div className="flex-1 bg-rose-200 rounded-xl flex flex-col items-center justify-center p-3">
            <span className="font-semibold text-xs mb-2">Nourriture</span>
            <Image src="/nourriture.png" alt="Nourriture" width={48} height={48} className="w-12 h-12 object-contain" />
          </div>
          <div className="flex-1 bg-blue-100 rounded-xl flex flex-col items-center justify-center p-3">
            <span className="font-semibold text-xs mb-2">Médicaments</span>
            <Image src="/medicament.png" alt="Médicaments" width={48} height={48} className="w-12 h-12 object-contain" />
          </div>
          <div className="flex-1 bg-pink-100 rounded-xl flex flex-col items-center justify-center p-3">
            <span className="font-semibold text-xs mb-2">Accessoires</span>
            <Image src="/accessoire.png" alt="Accessoires" width={48} height={48} className="w-12 h-12 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
} 