'use client';

import Image from 'next/image';
import { Filter, MapPin } from 'lucide-react';

const garderies = [
  {
    id: 1,
    title: 'Garderie chat pilo',
    image: '/host-1.png',
    rating: 4,
    comments: 27,
    subtitle: 'Hebergement géré par un particulier',
    distance: '1km',
    price: 500,
  },
  {
    id: 2,
    title: 'Garderie dog happy',
    image: '/host-2.png',
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

function PawRating({ rating }: { rating: number }) {
  const paws = [];
  for (let i = 1; i <= 5; i++) {
    paws.push(
      <span key={i} className="inline-block align-middle">
        <Image
          src={i <= rating ? '/rate-selected.png' : '/rate-unselected.png'}
          alt={i <= rating ? 'Paw filled' : 'Paw unfilled'}
          width={20}
          height={20}
          className="inline-block align-middle"
        />
      </span>
    );
  }
  return <span className="ml-1">{paws}</span>;
}

export default function HousingPage() {
  return (
    <div className="min-h-screen bg-white py-8 px-2 md:px-8">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Garderies</h1>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {garderies.map((g, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-xl p-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 transition hover:shadow-2xl">
            <div className="flex-shrink-0 flex justify-center items-center">
              <Image src={g.image} alt={g.title} width={120} height={120} className="rounded-2xl object-cover w-32 h-32" />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg md:text-xl text-gray-900">{g.title}</span>
                <PawRating rating={g.rating} />
                <span className="text-xs text-gray-500 flex items-center ml-2">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#F95D7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {g.comments} commentaires
                </span>
              </div>
              <div className="text-rose-400 text-xs mb-1">{g.subtitle}</div>
              <div className="text-gray-600 text-sm mb-1">El mouradia distance depuis votre emplacement : {g.distance}</div>
              <div className="font-semibold text-base mb-2">Tarif pour 1 nuit : {g.price} DZD</div>
              <button className="bg-rose-400 hover:bg-rose-500 text-white rounded-full px-8 py-2 text-lg font-semibold shadow-md transition w-fit">Reserver</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}