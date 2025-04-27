import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function PaymentMethodModal({ onContinue }: { onContinue: (method: string) => void }) {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity" />
      {/* Modal */}
      <div
        className="relative w-full max-w-md mx-auto bg-white rounded-t-3xl p-6 pb-8 shadow-lg animate-slideUp"
        style={{ minHeight: "40vh" }}
      >
        <Label className="font-bold text-lg text-center block mb-6">Modes de paiement</Label>
        <RadioGroup
          value={selected}
          onValueChange={setSelected}
          className="flex flex-col gap-4 mb-8"
        >
          <Label className="flex items-center gap-3 font-normal">
            <RadioGroupItem value="cash" />
            Paiement par cash
          </Label>
          <Label className="flex items-center gap-3 font-normal">
            <RadioGroupItem value="cib" />
            Carte CIB
          </Label>
        </RadioGroup>
        <button
          className="w-full bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-full py-3 text-lg transition disabled:opacity-50"
          disabled={!selected}
          onClick={() => selected && onContinue(selected)}
        >
          Continuer
        </button>
      </div>
      <style jsx>{`
        .animate-slideUp {
          animation: slideUp 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}