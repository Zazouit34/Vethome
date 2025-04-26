'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AnimalProfile() {
  const router = useRouter();
  
  // Sample pet data - in a real app this would come from an API or database
  const pet = {
    name: 'Max',
    type: 'Chien',
    breed: 'Berger Allemand',
    age: '3 ans',
    weight: '28 kg',
    birthDate: '15/04/2021',
    microchipNumber: '985121054367892',
    lastVaccination: '23/01/2024',
    nextVaccination: '23/01/2025',
    allergies: 'Aucune',
    medicalHistory: [
      { date: '12/05/2023', description: 'Visite annuelle' },
      { date: '03/09/2023', description: 'Traitement antiparasitaire' },
      { date: '23/01/2024', description: 'Vaccination annuelle' }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white relative pb-24 md:pb-0 px-4 md:px-8">
      {/* Back Button */}
      <button onClick={() => router.back()} className="absolute left-4 top-6 text-2xl md:left-10 md:top-10">←</button>
      
      {/* Header */}
      <h1 className="text-2xl font-bold mt-16 mb-6 md:text-4xl text-center">Profil de mon animal</h1>
      
      <div className="w-full max-w-3xl mx-auto">
        {/* Pet Image and Basic Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/pet-image.png"
              alt={pet.name}
              width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{pet.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
              <p><span className="font-semibold">Type:</span> {pet.type}</p>
              <p><span className="font-semibold">Race:</span> {pet.breed}</p>
              <p><span className="font-semibold">Âge:</span> {pet.age}</p>
              <p><span className="font-semibold">Poids:</span> {pet.weight}</p>
              <p><span className="font-semibold">Date de naissance:</span> {pet.birthDate}</p>
              <p><span className="font-semibold">N° de puce:</span> {pet.microchipNumber}</p>
            </div>
          </div>
        </div>
        
        {/* Health Information */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Informations de santé</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Dernière vaccination:</p>
                <p className="text-gray-700">{pet.lastVaccination}</p>
              </div>
              <div>
                <p className="font-medium">Prochaine vaccination:</p>
                <p className="text-gray-700">{pet.nextVaccination}</p>
              </div>
              <div className="md:col-span-2">
                <p className="font-medium">Allergies:</p>
                <p className="text-gray-700">{pet.allergies}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Medical History */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Historique médical</h3>
            <div className="space-y-3">
              {pet.medicalHistory.map((record, index) => (
                <div key={index} className="flex justify-between border-b pb-2">
                  <span className="font-medium">{record.date}</span>
                  <span className="text-gray-700">{record.description}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            className="py-3 rounded-full bg-rose-400 text-white font-medium text-base shadow-md hover:bg-rose-500 transition"
            
          >
            Modifier les informations
          </Button>
          <Button 
            className="py-3 rounded-full bg-rose-400 text-white font-medium text-base shadow-md hover:bg-rose-500 transition"
            
          >
            Prendre un rendez-vous
          </Button>
        </div>
      </div>
    </div>
  );
}