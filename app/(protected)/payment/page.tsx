'use client';

import { CardsPaymentMethod } from "@/components/payment-method"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import PaymentMethodModal from "@/components/payment-method-modal"

export default function PaymentPage() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const [method, setMethod] = useState<string | null>(null)
  const router = useRouter()

  const handlePaymentSuccess = () => {
    setIsSuccess(true)
  }

  const handleContinue = (selected: string) => {
    if (selected === "cash") {
      setShowModal(false)
      setIsSuccess(true)
    } else {
      setMethod(selected)
      setShowModal(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-md mx-auto flex items-center justify-center min-h-[calc(100vh-3rem)]">
        {showModal ? (
          <PaymentMethodModal onContinue={handleContinue} />
        ) : !isSuccess ? (
          <div className="space-y-6">
            {method === "cib" && <CardsPaymentMethod onSuccess={handlePaymentSuccess} />}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full h-full min-h-[50vh] my-auto">
            <h2 className="text-2xl font-semibold text-center">
              Paiement Réussi !
            </h2>
            <p className="text-muted-foreground text-center">
              Votre commande est confirmée. Vous recevrez très bientôt votre code ainsi que la facture par e-mail ou SMS.
            </p>
            <Image src="/payment.png" alt="Paiement Sticker" width={96} height={96} className="w-24 h-24 mx-auto" />
            <div className="text-lg font-bold text-center text-rose-400">Merci pour votre Achat</div>
            <Button 
              className="mt-4" 
              onClick={() => router.push('/main')}
            >
              Retour à l'Accueil
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
