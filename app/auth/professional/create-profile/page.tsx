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
import { TimePicker } from "@/components/ui/time-picker";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { DatePickerWithRange } from "@/components/Calendar";
import { useRouter } from "next/navigation";
import { FileText, FileImage } from "lucide-react";
import { toast } from "sonner";
export default function CreateProfile() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [certificate, setCertificate] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCertificate(file);
      
      // Check if the file is an image
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        // For non-image files, we'll just show the filename
        setPreviewUrl(null);
      }
    }
  };

  const handleComplete = () => {
    toast.success("Profil créé avec succès")
    router.push('/vet');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nom Complet</Label>
              <Input id="fullName" placeholder="Dr. Jean Dupont" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Professionnel</Label>
              <Input id="email" type="email" placeholder="jean.dupont@vet.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Numéro de Téléphone</Label>
              <Input id="phone" type="tel" placeholder="+213 123 456 789" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialization">Spécialisation</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre spécialisation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">Médecine Générale</SelectItem>
                  <SelectItem value="surgery">Chirurgie</SelectItem>
                  <SelectItem value="dermatology">Dermatologie</SelectItem>
                  <SelectItem value="cardiology">Cardiologie</SelectItem>
                  <SelectItem value="neurology">Neurologie</SelectItem>
                  <SelectItem value="internship">Stage</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Certificat Professionnel</Label>
              <div className="border-2 border-dashed rounded-lg p-4 text-center">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                  id="certificate"
                />
                <Label
                  htmlFor="certificate"
                  className="cursor-pointer block p-4 text-center"
                >
                  {previewUrl ? (
                    <div className="relative w-full h-48">
                      <Image
                        src={previewUrl}
                        alt="Aperçu du certificat"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : certificate ? (
                    <div className="flex flex-col items-center justify-center p-4">
                      {certificate.type === 'application/pdf' ? (
                        <FileText className="h-12 w-12 text-primary mb-2" />
                      ) : (
                        <FileImage className="h-12 w-12 text-primary mb-2" />
                      )}
                      <span className="font-medium truncate max-w-full">
                        {certificate.name}
                      </span>
                      <span className="text-sm text-muted-foreground mt-1">
                        {(certificate.size / 1024).toFixed(1)} KB
                      </span>
                    </div>
                  ) : (
                    <div className="text-muted-foreground">
                      Cliquez pour télécharger votre certificat
                      <br />
                      <span className="text-sm">
                        (PDF, JPG, JPEG, PNG acceptés)
                      </span>
                    </div>
                  )}
                </Label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="licenseNumber">Numéro de Licence</Label>
              <Input id="licenseNumber" placeholder="VET-123456" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Années d'Expérience</Label>
              <Input id="experience" type="number" min="0" placeholder="5" />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Dates Disponibles</Label>
              <DatePickerWithRange />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Heure de Début</Label>
                <TimePicker value={startTime} onValueChange={setStartTime} />
              </div>
              <div className="space-y-2">
                <Label>Heure de Fin</Label>
                <TimePicker value={endTime} onValueChange={setEndTime} />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="address">Adresse de la Clinique</Label>
              <Textarea
                id="address"
                placeholder="Entrez l'adresse complète de votre clinique"
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clinicName">Nom de la Clinique</Label>
              <Input id="clinicName" placeholder="Clinique Vétérinaire de la Ville" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="consultationFee">Frais de Consultation</Label>
              <Input
                id="consultationFee"
                type="number"
                min="0"
                placeholder="100"
                className="[appearance:textfield]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">À Propos de Votre Pratique</Label>
              <Textarea
                id="description"
                placeholder="Parlez-nous de votre pratique vétérinaire, vos spécialités et votre expérience..."
                className="min-h-[100px]"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const totalSteps = 4;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Créez Votre Profil Professionnel
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