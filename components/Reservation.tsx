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
          <div className="flex justify-center items-center overflow-hidden">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-full max-w-[350px]"
              classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",
                month: "w-full",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                day_today: "bg-accent text-accent-foreground",
                day_outside: "text-muted-foreground opacity-50",
                day_disabled: "text-muted-foreground opacity-50",
                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
              }}
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