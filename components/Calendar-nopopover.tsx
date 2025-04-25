"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"

export function DatePickerWithRange({
  className,
  onDateChange,
}: React.HTMLAttributes<HTMLDivElement> & {
  onDateChange?: (date: DateRange | undefined) => void
}) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  // Update parent component when date changes
  React.useEffect(() => {
    if (onDateChange) {
      onDateChange(date)
    }
  }, [date, onDateChange])

  return (
    <div className={cn("grid gap-4", className)}>
      {/* Display selected date range */}
      <div className="flex items-center gap-2 p-2 border rounded-md">
        <CalendarIcon className="h-4 w-4 shrink-0" />
        <span className="truncate">
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "MMM d")} - {format(date.to, "MMM d")}
              </>
            ) : (
              format(date.from, "MMM d")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </span>
      </div>

      {/* Calendar component displayed directly */}
      <div className="border rounded-md p-3">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={1}
          className="w-full"
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
  )
} 