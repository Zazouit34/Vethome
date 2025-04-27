'use client';

import Image from 'next/image';
import Link from 'next/link';

const veterinaries = [
  {
    id: 1,
    name: 'Dr. Lina Bensouna',
    image: '/veterinary-woman-1.jpg',
    specialization: 'Exotic Specialist',
    rating: 4.8,
    schedule: 'Dim - Jed, 12:00 - 9:00 PM',
    location: 'Clinic visite',
  },
  {
    id: 2,
    name: 'Dr. Samy Boudiaf',
    image: '/veterinary-man.jpg',
    specialization: 'Generalist',
    rating: 4.0,
    schedule: 'Lun - Ven, 9:00 - 6:00 PM',
    location: 'Clinic visite',
  },
  {
    id: 3,
    name: 'Dr. Hafidha Merzouki',
    image: '/veterinary-woman.jpg',
    specialization: 'Surgery',
    rating: 3.6,
    schedule: 'Sam - Dim, 10:00 - 4:00 PM',
    location: 'Clinic visite',
  },
];

function PawRating({ rating }: { rating: number }) {
  const paws = [];
  for (let i = 1; i <= 5; i++) {
    paws.push(
      <span key={i} className="inline-block align-middle">
        <Image
          src={i <= Math.floor(rating) ? '/rate-selected.png' : '/rate-unselected.png'}
          alt={i <= Math.floor(rating) ? 'Paw filled' : 'Paw unfilled'}
          width={22}
          height={22}
          className="inline-block align-middle"
        />
      </span>
    );
  }
  return <span className="ml-1">{paws} <span className="text-gray-500 text-base align-middle ml-1">{rating}</span></span>;
}

export default function VeterinariesPage() {
  return (
    <div className="min-h-screen bg-white py-8 px-2 md:px-8">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Vétérinaires</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {veterinaries.map((vet, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-6 flex flex-col h-full transition hover:shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="rounded-full border-4 border-rose-400 p-1 w-20 h-20 flex items-center justify-center bg-white">
                <Image src={vet.image} alt={vet.name} width={72} height={72} className="rounded-full object-cover w-16 h-16" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <span className="font-bold text-lg md:text-xl text-gray-900">{vet.name}</span>
                <div className="text-gray-500 text-sm mb-1">{vet.specialization}</div>
                <div className="flex items-center gap-2 mb-1">
                  <PawRating rating={vet.rating} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M8 7V3h8v4" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/><rect x="3" y="7" width="18" height="14" rx="2" stroke="#666" strokeWidth="1.5"/></svg>
                {vet.schedule}
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="10" r="3.5" stroke="#666" strokeWidth="1.5"/><path d="M19.5 19.5c-1.5-2.5-4-4-7.5-4s-6 1.5-7.5 4" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/></svg>
                {vet.location}
              </div>
            </div>
            <Link href={`/profile?id=${vet.id}`} className="self-end mt-auto">
              <button className="bg-rose-400 hover:bg-rose-500 text-white rounded-full px-8 py-2 text-lg font-semibold shadow-md transition">Détails</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
