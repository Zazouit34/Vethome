"use client"

import * as React from "react"
import { Clock } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface TimePickerProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function TimePicker({ value, onValueChange }: TimePickerProps) {
  // Generate time slots from 08:00 to 17:00
  const timeSlots = Array.from({ length: 19 }, (_, i) => {
    const hour = Math.floor(i / 2) + 8
    const minutes = i % 2 === 0 ? "00" : "30"
    return `${hour.toString().padStart(2, "0")}:${minutes}`
  })

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <Clock className="mr-2 h-4 w-4" />
        <SelectValue placeholder="Select time" />
      </SelectTrigger>
      <SelectContent>
        {timeSlots.map((slot) => (
          <SelectItem key={slot} value={slot}>
            {slot}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
} 