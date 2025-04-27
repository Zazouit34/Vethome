'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { User } from "lucide-react";

export default function CreateUserProfile() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [petImage, setPetImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profilePreviewUrl, setProfilePreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPetImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const url = URL.createObjectURL(file);
      setProfilePreviewUrl(url);
    }
  };

  const handleComplete = () => {
    toast.success("Profil créé avec succès")
    router.push('/user');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Photo de Profil</Label>
              <div className="border-2 border-dashed rounded-lg p-4 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                  className="hidden"
                  id="profileImage"
                />
                <Label
                  htmlFor="profileImage"
                  className="cursor-pointer block p-4 text-center"
                >
                  {profilePreviewUrl ? (
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                      <Image
                        src={profilePreviewUrl}
                        alt="Photo de profil"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4">
                      <User className="h-12 w-12 text-primary mb-2" />
                      <span className="text-muted-foreground">
                        Cliquez pour télécharger votre photo de profil
                        <br />
                        <span className="text-sm">
                          (JPG, PNG acceptés)
                        </span>
                      </span>
                    </div>
                  )}
                </Label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fullName">Nom Complet</Label>
              <Input id="fullName" placeholder="Particulier" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Numéro de Téléphone</Label>
              <Input id="phone" type="tel" placeholder="+213 123 456 789" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Adresse</Label>
              <Textarea
                id="address"
                placeholder="Entrez votre adresse complète"
                className="min-h-[100px]"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="petName">Nom de l'Animal</Label>
              <Input id="petName" placeholder="Max" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="petType">Type d'Animal</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez le type d'animal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dog">Chien</SelectItem>
                  <SelectItem value="cat">Chat</SelectItem>
                  <SelectItem value="bird">Oiseau</SelectItem>
                  <SelectItem value="rabbit">Lapin</SelectItem>
                  <SelectItem value="other">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="breed">Race</Label>
              <Input id="breed" placeholder="Ex: Berger Allemand" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Âge</Label>
                <Input id="age" type="number" min="0" placeholder="2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Genre</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Mâle</SelectItem>
                    <SelectItem value="female">Femelle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Photo de l'Animal</Label>
              <div className="border-2 border-dashed rounded-lg p-4 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="petImage"
                />
                <Label
                  htmlFor="petImage"
                  className="cursor-pointer block p-4 text-center"
                >
                  {previewUrl ? (
                    <div className="relative w-full h-48">
                      <Image
                        src={previewUrl}
                        alt="Aperçu de l'animal"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-muted-foreground">
                      Cliquez pour télécharger une photo de votre animal
                      <br />
                      <span className="text-sm">
                        (JPG, PNG acceptés)
                      </span>
                    </div>
                  )}
                </Label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="medicalHistory">Antécédents Médicaux</Label>
              <Textarea
                id="medicalHistory"
                placeholder="Décrivez les antécédents médicaux de votre animal (vaccins, maladies, allergies, etc.)"
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialNeeds">Besoins Spéciaux</Label>
              <Textarea
                id="specialNeeds"
                placeholder="Votre animal a-t-il des besoins spéciaux ? (régime alimentaire, médicaments, etc.)"
                className="min-h-[100px]"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const totalSteps = 3;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Créez Votre Profil
          </h1>
          <p className="text-muted-foreground mt-2">
            Étape {step} sur {totalSteps}
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            {renderStep()}
            
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
              >
                Précédent
              </Button>
              <Button
                onClick={() => {
                  if (step === totalSteps) {
                    handleComplete();
                  } else {
                    setStep(step + 1);
                  }
                }}
              >
                {step === totalSteps ? 'Compléter le Profil' : 'Suivant'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={cn(
                'h-2 w-2 rounded-full',
                step === index + 1
                  ? 'bg-primary'
                  : index + 1 < step
                  ? 'bg-primary/50'
                  : 'bg-gray-200 dark:bg-gray-700'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 