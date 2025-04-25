"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { TimePicker } from "@/components/ui/time-picker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

interface ReservationProps {
  price: number
  onReserve?: (date: Date | undefined, time: string) => void
}

export function Reservation({ price, onReserve }: ReservationProps) {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>("")

  const router = useRouter();
  
  const handleReserve = () => {
    if (onReserve && date && time) {
      onReserve(date, time);
      router.push('/payment');
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Faire une Réservation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Sélectionner une Date</Label>
          <div className="flex flex-col justify-center items-center ">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-full"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Sélectionner L'Heure</Label>
          <TimePicker value={time} onValueChange={setTime} />
        </div>

        <div className="pt-2">
          <div className="text-lg font-semibold">
            Prix: {price} DZD
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleReserve}
          disabled={!date || !time}
        >
          Réserver un Rendez-vous
        </Button>
      </CardFooter>
    </Card>
  )
} 