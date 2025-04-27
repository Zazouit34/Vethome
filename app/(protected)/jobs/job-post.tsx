"use client";

import Image from "next/image";
import { Bell, Send } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Define the type for an announcement
type Announcement = {
  id: string;
  name: string;
  image: string;
  description: string;
};

// Initial announcements data
const initialAnnonces: Announcement[] = [
  {
    id: "1",
    name: "Dr. Amira Loudji",
    image: "/veterinary-woman-1.jpg",
    description:
      "Candidat vétérinaire à Sétif (Algérie) recherche un(e) stagiaire en médecine vétérinaire disponible 2 jours par semaine. Missions: assistance aux consultations, gestion des dossiers patients, soins médicaux, etc. Merci d'envoyer votre CV pour postuler. Bons contacts et bienveillant. Stagiaire rémunéré(e) possible selon profil. Merci de postuler par ce service. Coordination via Vethome ou par envoi de votre CV.",
  },
  {
    id: "2",
    name: "Mouhamed Zermouchi",
    image: "/veterinary-man.jpg",
    description:
      "Docteur en 4ème année en médecine vétérinaire, je suis à la recherche d'un stagiaire motivé pour m'assister lors des consultations et interventions chirurgicales. Formation pratique assurée. Horaires flexibles, adaptation aux emplois du temps étudiants. Merci de postuler pour plus d'informations.",
  },
  {
    id: "3",
    name: "Sihem Latrech",
    image: "/review-image.jpg",
    description:
      "Étudiante en Master de médecine vétérinaire à l'ITMAUF d'Alger, je suis à la recherche d'un stage pratique en clinique vétérinaire. Je propose également d'accompagner un praticien pour des missions de terrain, analyses, ou administration. Disponible dès maintenant, références universitaires sur demande.",
  },
];

export default function JobPost() {
  const [proposition, setProposition] = useState("");
  const [annonces, setAnnonces] = useState<Announcement[]>(initialAnnonces);

  const handlePublish = () => {
    if (proposition.trim() === "") return;
    
    // Create a new announcement
    const newAnnouncement: Announcement = {
      id: Date.now().toString(),
      name: "Samy Boudiaf",
      image: "/review-image-1.jpg",
      description: proposition,
    };
    
    // Add the new announcement to the beginning of the list
    setAnnonces([newAnnouncement, ...annonces]);
    
    // Clear the textarea
    setProposition("");
  };

  return (
    <div className="min-h-screen bg-white pb-8">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2">
        <span className="font-bold text-xl text-gray-900">Stage</span>
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-800" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-rose-400 rounded-full border-2 border-white"></span>
        </button>
      </div>
      {/* Welcome Section */}
      <div className="flex items-center gap-3 px-4 mt-2 mb-2">
        <Image
          src="/review-image-1.jpg"
          alt="Samy Boudiaf"
          width={96}
          height={96}
          className="rounded-full w-16 h-16 object-cover border-2 border-white shadow"
        />
        <div>
          <div className="font-bold text-base text-rose-500">Bienvenue, Samy Boudiaf</div>
          <div className="text-sm text-gray-700">Comment vas votre compagnon aujourd'hui !</div>
        </div>
      </div>
      <div className="px-4 mb-4">
        <div className="font-bold text-lg text-gray-900 mb-1">Trouvez ou proposez un stage dans le domaine animalier !</div>
      </div>
      {/* Proposition de stage */}
      <Card className="mx-4 mb-6">
        <CardContent className="pt-6">
          <label className="block font-medium text-gray-700 mb-1">Proposition de stage</label>
          <Textarea
            placeholder="Publiez votre proposition"
            value={proposition}
            onChange={e => setProposition(e.target.value)}
            className="mb-2"
          />
          <div className="flex justify-end">
            <Button 
              onClick={handlePublish}
              className="bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-lg px-5 py-2 transition"
            >
              <Send className="w-4 h-4 mr-2" />
              Publier
            </Button>
          </div>
        </CardContent>
      </Card>
      {/* Annonces */}
      <div className="px-4">
        <div className="font-semibold text-lg text-gray-900 mb-3">Annonces</div>
        <div className="flex flex-col gap-4">
          {annonces.map((a) => (
            <Card key={a.id} className="overflow-hidden">
              <CardContent className="p-4 flex gap-3 items-start">
                <Image
                  src={a.image}
                  alt={a.name}
                  width={56}
                  height={56}
                  className="rounded-full w-14 h-14 object-cover border border-gray-200"
                />
                <div className="flex-1">
                  <div className="font-bold text-base text-gray-900 mb-1">{a.name}</div>
                  <div className="text-sm text-gray-600 mb-2 line-clamp-4">{a.description}</div>
                  <Button className="bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-full px-5 py-1 text-sm transition">
                    Contacter
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 