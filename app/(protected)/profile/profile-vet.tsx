'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import GoogleMapsComponent from "@/components/GoogleMap";
import { Reservation } from "@/components/Reservation"

// Données fictives pour les vétérinaires (identiques à celles de la page des vétérinaires)
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
  }
];

export default function ProfileVet() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get('id'));
  
  // Trouver les données du vétérinaire en fonction de l'ID
  const selectedVet = veterinaries.find(vet => vet.id === id);

  // Données fictives - utilisant les données du vétérinaire sélectionné lorsque c'est applicable
  const profile = {
    name: selectedVet?.name || "Dr. John Doe",
    specialization: selectedVet?.specialization || "Médecine Générale",
    experience: "5 ans",
    email: "john.doe@vet.com",
    phone: "+1 234 567 890",
    clinicName: "Clinique Vétérinaire de la Ville",
    address: selectedVet?.address || "123 Rue Vétérinaire, Quartier Médical, Ville",
    consultationFee: selectedVet?.price.toString() || "500",
    description: "Vétérinaire expérimenté spécialisé dans les soins des petits animaux avec un accent sur la médecine préventive et la chirurgie. Passionné par l'offre des meilleurs soins pour vos animaux de compagnie.",
    availableHours: "8h00 - 17h00",
    rating: selectedVet?.rating || 4.5,
    totalReviews: selectedVet?.reviews || 32,
    location: {
      lat: 36.7538,  // Coordonnées d'exemple (Alger)
      lng: 3.0588
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/review-image.jpg",
      rating: 5,
      date: "il y a 2 semaines",
      comment: "Dr. Doe est incroyable avec les animaux ! Mon chat était très nerveux mais il a su exactement comment le calmer. Très professionnel et attentionné."
    },
    {
      id: 2,
      name: "Michael Brown",
      image: "/review-image-1.jpg",
      rating: 4,
      date: "il y a 1 mois",
      comment: "Excellente expérience globale. La clinique est propre et moderne, et Dr. Doe a pris le temps d'expliquer tout en détail. Je recommande vivement !"
    }
  ];

  const renderRating = (rating: number, size: 'sm' | 'md' = 'sm') => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <Image
          key={i}
          src={i < fullStars ? "/rate-selected.png" : "/rate-unselected.png"}
          alt="évaluation"
          width={size === 'sm' ? 24 : 28}
          height={size === 'sm' ? 24 : 28}
          className="inline-block"
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* En-tête du profil avec image */}
        <div className="relative flex justify-center">
          <div className="relative w-40 h-40 rounded-xl overflow-hidden border-4 border-white shadow-xl">
            <Image
              src={selectedVet?.image || "/veterinary-female.png"}
              alt={profile.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Carte d'informations du profil */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">{profile.name}</CardTitle>
            <div className="flex flex-col items-center gap-2">
              <p className="text-muted-foreground">{profile.specialization}</p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {renderRating(profile.rating)}
                </div>
                <span className="text-sm text-muted-foreground">
                  {profile.rating} ({profile.totalReviews} avis)
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Contact et informations de base */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>{profile.availableHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="link" className="p-0 h-auto font-normal">
                      {profile.clinicName}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-semibold">{profile.clinicName}</h4>
                      <p className="text-sm text-muted-foreground">{profile.address}</p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Description */}
            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">À propos</h3>
              <p className="text-muted-foreground">{profile.description}</p>
            </div>

            {/* Section des avis */}
            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-4">Avis</h3>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-base md:text-lg">{review.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex gap-1">
                            {renderRating(review.rating)}
                          </div>
                          <span className="text-xs md:text-sm text-muted-foreground">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground pl-16 md:pl-20">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">Emplacement</h3>
              <GoogleMapsComponent
                center={profile.location}
                address={profile.address}
                clinicName={profile.clinicName}
              />
            </div>

            {/* Section de réservation */}
            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-4">Prendre un Rendez-vous</h3>
              <Reservation 
                price={Number(profile.consultationFee)} 
                onReserve={(date, time) => {
                  // Gérer la réservation
                  console.log('Réservation:', { date, time })
                }} 
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 