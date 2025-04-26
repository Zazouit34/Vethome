'use client';

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import Link from "next/link";
import { Search, MapPin } from "lucide-react";

// Données fictives pour les vétérinaires
const veterinaries = [
  {
    id: 1,
    name: "Dr. Lina Bensouna",
    image: "/veterinary-female.png",
    specialization: "Médecine Générale",
    rating: 4.8,
    reviews: 124,
    price: 500,
    address: "123 Centre Médical, Alger",
    availability: "Disponible Aujourd'hui"
  },
  {
    id: 2,
    name: "Dr. Samy Boudiaf",
    image: "/veterinary-man.jpg",
    specialization: "Spécialiste en Chirurgie",
    rating: 4.9,
    reviews: 89,
    price: 700,
    address: "456 Rue des Soins Animaliers, Alger",
    availability: "Prochaine Disponibilité: Demain"
  },
  {
    id: 3,
    name: "Dr. Leila Messaoudi",
    image: "/veterinary-woman.jpg",
    specialization: "Dermatologie",
    rating: 4.7,
    reviews: 56,
    price: 600,
    address: "789 Avenue de la Santé Animale, Alger",
    availability: "Disponible Aujourd'hui"
  },
  {
    id: 4,
    name: "Dr. Ahmed Benali",
    image: "/veterinary-man-1.jpg",
    specialization: "Soins d'Urgence",
    rating: 4.6,
    reviews: 78,
    price: 800,
    address: "321 Soins d'Urgence pour Animaux, Alger",
    availability: "Disponible 24/7"
  },
  {
    id: 5,
    name: "Sara Mansouri",
    image: "/veterinary-woman-1.jpg",
    specialization: "Interne Vétérinaire",
    rating: 4.3,
    reviews: 15,
    price: 300,
    address: "567 Hôpital Universitaire, Alger",
    availability: "Disponible Aujourd'hui"
  },
  {
    id: 6,
    name: "Dr. Karim Ziani",
    image: "/veterinary-man-2.jpg",
    specialization: "Spécialiste des Animaux Exotiques",
    rating: 4.9,
    reviews: 92,
    price: 900,
    address: "890 Centre pour Animaux Exotiques, Alger",
    availability: "Prochaine Disponibilité: Demain"
  },
  // Ajoutez plus de vétérinaires si nécessaire
];

export default function VeterinariesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVeterinaries = veterinaries.filter(vet =>
    vet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vet.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vet.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderRating = (rating: number, reviews: number) => {
    return (
      <div className="flex items-center gap-1">
        <Image
          src="/rate-selected.png"
          alt="évaluation"
          width={20}
          height={20}
          className="inline-block"
        />
        <span className="text-sm font-medium">{rating}</span>
        <span className="text-sm text-muted-foreground">
          ({rating} • {reviews} avis)
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* En-tête avec Recherche */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-700 dark:text-white">Trouver un Vétérinaire</h1>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Rechercher par nom, spécialisation ou lieu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVeterinaries.map((vet) => (
            <Link 
              href={`/profile?id=${vet.id}`} 
              key={vet.id}
              className="block transition-transform hover:scale-[1.02]"
            >
              <Card className="overflow-hidden h-full">
                <div className="p-4">
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={vet.image}
                      alt={vet.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="px-4 pb-4 space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold">{vet.name}</h2>
                    <p className="text-muted-foreground">{vet.specialization}</p>
                  </div>
                  
                  {renderRating(vet.rating, vet.reviews)}
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{vet.address}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-lg font-semibold">{vet.price} DZD</p>
                    <span className="text-sm text-green-600 dark:text-green-400">
                      {vet.availability}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 