"use client";

import Image from "next/image";
import { Plus, Minus, X } from "lucide-react";
import { useState } from "react";

const initialCartItems = [
  {
    name: "Croquettes",
    subtitle: "5kg, Prix",
    image: "/friskies.png",
    price: 3500,
    quantity: 1,
  },
  {
    name: "Vermifuge medicamaent",
    subtitle: "4pcs, Price",
    image: "/vermifuge-dog.png",
    price: 750,
    quantity: 1,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantity = (idx: number, delta: number) => {
    setCartItems(items => items.map((item, i) =>
      i === idx ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const handleRemove = (idx: number) => {
    setCartItems(items => items.filter((_, i) => i !== idx));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="text-center font-semibold text-lg py-4 border-b">Panier</div>
      <div className="flex-1 px-4 py-4">
        {cartItems.map((item, idx) => (
          <div key={item.name}>
            <div className="flex items-center py-4 gap-3 w-full">
              <Image src={item.image} alt={item.name} width={56} height={56} className="rounded-lg object-contain w-14 h-14" />
              <div className="flex-1">
                <div className="font-semibold text-sm">{item.name}</div>
                <div className="text-xs text-gray-400">{item.subtitle}</div>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => handleQuantity(idx, -1)} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-lg text-gray-500">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-semibold text-base">{item.quantity}</span>
                  <button onClick={() => handleQuantity(idx, 1)} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-lg text-rose-400">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button className="text-gray-400 text-xl"><X className="w-5 h-5" /></button>
                <div className="font-bold text-base text-gray-800 whitespace-nowrap">{item.price * item.quantity}DA</div>
              </div>
            </div>
            {idx !== cartItems.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white py-4 px-4 border-t flex justify-center">
        <button className="relative w-full max-w-md bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-full py-3 text-lg transition flex items-center justify-center">
          Payer
          <span className="absolute right-4 bg-white text-rose-400 rounded-full px-4 py-1 text-sm font-bold ml-2" style={{ minWidth: 60 }}>
            {total}DA
          </span>
        </button>
      </div>
    </div>
  );
}
