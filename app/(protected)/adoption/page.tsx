"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Filter, Bell, Plus } from "lucide-react";

const pets = [
  {
    name: "Gary",
    age: "3 Ans",
    breed: "Yorkshire Terrier",
    image: "/gary.png",
  },
  {
    name: "Peach",
    age: "2.5 Ans",
    breed: "Half-breed",
    image: "/peach.png",
  },
  {
    name: "Whitney",
    age: "2 Mois",
    breed: "British Longhair",
    image: "/whitney.png",
  },
  {
    name: "Buggy",
    age: "4 Mois",
    breed: "Jack Russell Terrier",
    image: "/buggy.png",
  },
  {
    name: "Willie",
    age: "1.5 Ans",
    breed: "Samoyed",
    image: "/willie.png",
  },
  {
    name: "Kiwi",
    age: "1 An",
    breed: "Yorkshire Terrier",
    image: "/kiwi.png",
  },
];

export default function AdoptionPage() {
  const [search, setSearch] = useState("");

  const filteredPets = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(search.toLowerCase()) ||
      pet.breed.toLowerCase().includes(search.toLowerCase()) ||
      pet.age.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white md:bg-gradient-to-b md:from-white md:to-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2 md:max-w-6xl md:mx-auto">
        <span className="font-bold text-lg text-gray-900">Adoption</span>
        <div className="flex items-center gap-3">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <Plus className="w-6 h-6 text-gray-800" />
          </button>
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-800" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-rose-400 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </div>
      {/* Search Bar */}
      <div className="px-4 mt-2 md:max-w-6xl md:mx-auto">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <Search className="text-gray-400 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Rechercher"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-transparent outline-none flex-1 text-base placeholder-gray-400"
          />
          <button className="ml-2">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
      {/* Pets Grid */}
      <div className="px-4 mt-6 md:max-w-6xl md:mx-auto mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {filteredPets.map((pet, idx) => (
            <div
              key={pet.name}
              className="bg-white rounded-2xl shadow-md p-3 flex flex-col items-center relative"
            >
              <Image
                src={pet.image}
                alt={pet.name}
                width={120}
                height={120}
                className="rounded-xl object-cover w-24 h-24 mb-2"
              />
              <div className="font-semibold text-base text-gray-900 text-center mb-1">{pet.name}</div>
              <div className="text-sm text-gray-500 text-center mb-1">{pet.age}</div>
              <div className="text-xs text-gray-400 text-center">{pet.breed}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
