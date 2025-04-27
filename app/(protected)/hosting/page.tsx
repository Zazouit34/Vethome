'use client';

import Image from 'next/image';
import { Filter, MapPin, UserPlus, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { DatePicker } from '@/components/Calendar-nopopover';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

const garderies = [
  {
    id: 1,
    title: 'Garderie chat pilo',
    image: '/host-2.png',
    rating: 4,
    comments: 27,
    subtitle: 'Hebergement géré par un particulier',
    distance: '1km',
    price: 500,
  },
  {
    id: 2,
    title: 'Garderie dog happy',
    image: '/host-1.png',
    rating: 5,
    comments: 12,
    subtitle: 'Hebergement géré par un particulier',
    distance: '2km',
    price: 600,
  },
  {
    id: 3,
    title: 'Garderie animaux cool',
    image: '/host-3.png',
    rating: 3,
    comments: 8,
    subtitle: 'Hebergement géré par un particulier',
    distance: '3km',
    price: 400,
  },
  {
    id: 4,
    title: 'Garderie chat mimi',
    image: '/host-4.png',
    rating: 4,
    comments: 19,
    subtitle: 'Hebergement géré par un particulier',
    distance: '1.5km',
    price: 550,
  },
  {
    id: 5,
    title: 'Garderie dog max',
    image: '/host-5.png',
    rating: 5,
    comments: 33,
    subtitle: 'Hebergement géré par un particulier',
    distance: '2.5km',
    price: 700,
  },
  {
    id: 6,
    title: 'Garderie animaux zen',
    image: '/host-6.png',
    rating: 4,
    comments: 15,
    subtitle: 'Hebergement géré par un particulier',
    distance: '2km',
    price: 500,
  },
];

export default function HousingPage() {
  const [stepDone, setStepDone] = useState(false);
  const [address, setAddress] = useState('');
  const [numAnimals, setNumAnimals] = useState('1');
  const [animalType, setAnimalType] = useState('dog');
  const router = useRouter();

  const handleReserve = () => {
    router.push('/payment');
  };

  return (
    <div className="min-h-screen bg-white py-8 px-2 md:px-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <button onClick={() => router.back()} className="text-gray-700 hover:text-rose-400 transition p-1">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">Garderies</h1>
      </div>
      {!stepDone ? (
        <div className="max-w-md mx-auto flex flex-col gap-6 bg-white p-6 rounded-2xl shadow mb-8">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Adresse</label>
            <Input placeholder="Entrez votre adresse" value={address} onChange={e => setAddress(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Date</label>
            <DatePicker />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Nombre d'animaux</label>
            <Select value={numAnimals} onValueChange={setNumAnimals}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Nombre d'animaux" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Type d'animal</label>
            <Select value={animalType} onValueChange={setAnimalType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Type d'animal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dog">Chien</SelectItem>
                <SelectItem value="cat">Chat</SelectItem>
                <SelectItem value="bird">Oiseau</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <button className="flex items-center gap-2 text-rose-400 font-medium hover:underline transition w-fit">
            <UserPlus className="w-5 h-5" />
            Ajouter un profil existant
          </button>
          <button onClick={() => setStepDone(true)} className="mt-4 bg-rose-400 hover:bg-rose-500 text-white rounded-full px-8 py-2 text-lg font-semibold shadow-md transition w-full">Suivant</button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between max-w-6xl mx-auto mb-8 px-2 md:px-0">
            <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filtrer</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Map</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {garderies.slice(0, 2).map((g, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl p-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 transition hover:shadow-2xl">
                <div className="flex-shrink-0 flex justify-center items-center">
                  <Image src={g.image} alt={g.title} width={120} height={120} className="rounded-2xl object-cover w-32 h-32" />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <span className="font-bold text-lg md:text-xl text-gray-900">{g.title}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Image src="/rate-selected.png" alt="Paw" width={20} height={20} className="inline-block align-middle" />
                    <span className="text-base text-gray-700 font-semibold">{g.rating}</span>
                    <span className="text-xs text-gray-500 flex items-center ml-2">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#F95D7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {g.comments} commentaires
                    </span>
                  </div>
                  <div className="text-rose-400 text-xs mb-1">{g.subtitle}</div>
                  <div className="text-gray-600 text-sm mb-1">El mouradia distance depuis votre emplacement : {g.distance}</div>
                  <div className="font-semibold text-base mb-2">Tarif pour 1 nuit : {g.price} DZD</div>
                  <button className="bg-rose-400 hover:bg-rose-500 text-white rounded-full px-8 py-2 text-lg font-semibold shadow-md transition w-fit" onClick={handleReserve}>Reserver</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}