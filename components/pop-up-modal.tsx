"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Gift } from "lucide-react";

export default function PopUpModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 max-w-sm w-full relative animate-pop">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex flex-col items-center">
          <Gift className="w-12 h-12 text-rose-400 mb-2" />
          <h2 className="text-xl font-bold text-rose-500 mb-2 text-center">Promotion Spéciale !</h2>
          <p className="text-center text-gray-700 mb-6">
            Découvrez nos offres d'abonnement exclusives pour les vétérinaires et profitez de tous les avantages de la plateforme VetHome !
          </p>
          <div className="flex gap-4 w-full">
            <Button
              className="flex-1 bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-full"
              onClick={() => router.push("/subscription")}
            >
              Découvrir
            </Button>
            <Button
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-full"
              variant="outline"
              onClick={onClose}
            >
              Plus tard
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-pop {
          animation: popIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes popIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
} 