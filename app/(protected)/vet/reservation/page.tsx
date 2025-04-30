'use client'

import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, X } from 'lucide-react';
import { useState } from 'react';

const days = [
  { day: 'Dim', date: 11 },
  { day: 'Lun', date: 12 },
  { day: 'Mar', date: 13 },
  { day: 'Mer', date: 14 },
  { day: 'Jeu', date: 15 },
  { day: 'Ven', date: 16 },
  { day: 'Sam', date: 17 },
];

export default function VetReservation() {
  const router = useRouter();
  const [showPendingAppointment, setShowPendingAppointment] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-white relative pb-24 md:pb-0">
      {/* Back Button */}
      <button onClick={() => router.back()} className="absolute left-4 top-6 text-2xl md:left-10 md:top-10">
        <ArrowLeft className="w-6 h-6" />
      </button>
      {/* Header */}
      <h1 className="text-2xl font-bold mt-8 mb-4 md:mt-16 md:text-4xl md:mb-8 ml-10 md:ml-0 text-center md:text-center">Juin 2025</h1>
      {/* Date Selector */}
      <div className="w-full flex md:justify-center">
        <div className="flex gap-3 px-4 mb-6 overflow-x-auto md:overflow-visible md:gap-6 md:px-0 scrollbar-hide">
          {days.map((d, i) => (
            <div
              key={d.date}
              className={`flex flex-col items-center px-4 py-2 rounded-2xl shadow-sm ${i === 0 ? 'bg-rose-100 text-rose-500 font-bold' : 'bg-rose-50 text-rose-400'} min-w-[64px] md:min-w-[80px] md:px-6 md:py-4 md:text-lg`}
            >
              <span className="text-lg md:text-xl">{d.day}</span>
              <span className="text-xl md:text-2xl">{d.date}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Schedule Table */}
      <div className="flex flex-row w-full px-4 gap-2 md:justify-center md:mt-8">
        <div className="w-full md:max-w-2xl md:bg-white md:rounded-2xl md:shadow-lg md:p-8 flex flex-row gap-2">
          {/* Time Column */}
          <div className="flex flex-col items-end pr-4 min-w-[60px] text-right text-gray-700 font-semibold text-lg gap-2 pt-2 border-r border-gray-200">
            <span>10:00</span>
            <span>11:45</span>
          </div>
          {/* Appointments Column */}
          <div className="flex-1 flex flex-col gap-4 pl-4 pt-2">
            {/* Existing Confirmed Appointment */}
            <div className="rounded-2xl border border-gray-300 shadow-md p-4 bg-white max-w-xs md:max-w-md relative">
              <div className="font-medium text-gray-800">Déplacement à draria<br />réservation : 45D12</div>
              <div className="absolute top-2 right-2 bg-green-100 p-1 rounded-full">
                <Check className="w-5 h-5 text-green-600" />
              </div>
            </div>
            
            {/* New Pending Appointment */}
            {showPendingAppointment && (
              <div className="rounded-2xl border border-gray-300 shadow-md p-4 bg-white max-w-xs md:max-w-md">
                <div className="font-medium text-gray-800">Consultation générale<br />réservation : 78E34</div>
                <div className="flex justify-end gap-2 mt-3">
                  <button 
                    onClick={() => setShowPendingAppointment(false)}
                    className="bg-red-100 p-2 rounded-full hover:bg-red-200 transition-colors"
                  >
                    <X className="w-5 h-5 text-red-600" />
                  </button>
                  <button className="bg-green-100 p-2 rounded-full hover:bg-green-200 transition-colors">
                    <Check className="w-5 h-5 text-green-600" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 