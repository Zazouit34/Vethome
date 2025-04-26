"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, ShoppingCart, Plus } from "lucide-react";

const categories = [
  { label: "Tout", value: "all" },
  { label: "Chien", value: "dog" },
  { label: "Chat", value: "cat" },
  { label: "Oiseaux", value: "bird" },
  { label: "Poisson", value: "fish" },
  { label: "Rongeur", value: "rodent" },
];

const foods = [
  {
    name: "Vitakraft",
    price: "800DA",
    image: "/vitakraft.png",
    category: "dog",
    bg: "bg-yellow-50",
    border: "border-yellow-300",
  },
  {
    name: "Edgard",
    price: "3500DA",
    image: "/edgard.png",
    category: "dog",
    bg: "bg-green-50",
    border: "border-green-300",
  },
  {
    name: "Goldfish",
    price: "250DA",
    image: "/goldfish.png",
    category: "fish",
    bg: "bg-orange-50",
    border: "border-orange-300",
  },
  {
    name: "Milk-bone",
    price: "850DA",
    image: "/milk-bone.png",
    category: "dog",
    bg: "bg-pink-50",
    border: "border-pink-300",
  },
  {
    name: "Friskies",
    price: "1200DA",
    image: "/friskies.png",
    category: "cat",
    bg: "bg-blue-50",
    border: "border-blue-300",
  },
  {
    name: "Canistar",
    price: "2800DA",
    image: "/canistar.png",
    category: "dog",
    bg: "bg-purple-50",
    border: "border-purple-300",
  },
];

export default function FoodPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartCount, setCartCount] = useState(0);
  const [animateCart, setAnimateCart] = useState(false);

  const filteredFoods = foods.filter(
    (f) =>
      (selectedCategory === "all" || f.category === selectedCategory) &&
      (f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.price.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white pb-8">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2">
        <span className="font-bold text-lg text-gray-900">Nourriture</span>
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-800" />
          {cartCount > 0 && (
            <span
              className={`absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold bg-rose-400 text-white rounded-full border-2 border-white transition-transform ${animateCart ? 'scale-125' : 'scale-100'}`}
              style={{ transition: 'transform 0.2s' }}
            >
              {cartCount}
            </span>
          )}
        </div>
      </div>
      {/* Search Bar */}
      <div className="px-4 mt-2">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <Search className="text-gray-400 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Rechercher un produit ou une marque"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-transparent outline-none flex-1 text-base placeholder-gray-400"
          />
        </div>
      </div>
      {/* Category Navigation */}
      <div className="px-4 mt-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-1 rounded-full border text-sm font-medium transition w-auto whitespace-nowrap ${selectedCategory === cat.value ? "bg-rose-400 text-white border-rose-400" : "bg-white text-gray-700 border-gray-300"}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      {/* Food Grid */}
      <div className="px-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          {filteredFoods.map((food, idx) => (
            <div
              key={food.name}
              className={`rounded-2xl p-3 h-52 flex flex-col items-center justify-between border shadow-sm relative ${food.bg} ${food.border}`}
            >
              <Image
                src={food.image}
                alt={food.name}
                width={64}
                height={64}
                className="object-contain mb-2 max-h-20"
              />
              <div className="font-semibold text-gray-800 text-sm text-center mb-1">{food.name}</div>
              <div className="text-xs text-gray-500 mb-2">{food.price}</div>
              <button
                className="absolute bottom-3 right-3 bg-rose-400 hover:bg-rose-500 text-white rounded-md p-2 shadow transition"
                onClick={() => {
                  setCartCount((c) => c + 1);
                  setAnimateCart(true);
                  setTimeout(() => setAnimateCart(false), 250);
                }}
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
