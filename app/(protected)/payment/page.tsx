'use client';

import { CardsPaymentMethod } from "@/components/payment-method"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function PaymentPage() {
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()

  const handlePaymentSuccess = () => {
    setIsSuccess(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-md mx-auto flex items-center justify-center min-h-[calc(100vh-3rem)]">
        {!isSuccess ? (
          <div className="space-y-6">
            <CardsPaymentMethod onSuccess={handlePaymentSuccess} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full h-full min-h-[50vh] my-auto">
            <CheckCircle className="w-24 h-24 text-green-500" strokeWidth={1.5} />
            <h2 className="text-2xl font-semibold text-center">
              Paiement Réussi !
            </h2>
            <p className="text-muted-foreground text-center">
              Votre rendez-vous a été confirmé.
            </p>
            <Button 
              className="mt-4" 
              onClick={() => router.push('/veterinaries')}
            >
              Retour à l'Accueil
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
