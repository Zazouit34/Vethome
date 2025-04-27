import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    title: "1 mois",
    price: "2000DA",
    duration: "par mois",
    description: "Idéal pour découvrir la plateforme et ses fonctionnalités.",
  },
  {
    title: "3 mois",
    price: "5000DA",
    duration: "par 3 mois",
    description: "Économisez 10% en choisissant l'abonnement trimestriel.",
    highlight: true,
  },
  {
    title: "1 an",
    price: "18000DA",
    duration: "par an",
    description: "Profitez de la plateforme toute l'année à prix réduit.",
  },
];

const services = [
  "Publication illimitée d'annonces de stages et d'emplois",
  "Accès à la messagerie sécurisée avec les candidats",
  "Gestion des candidatures et des entretiens",
  "Visibilité accrue auprès des étudiants et professionnels",
  "Accès à des outils de gestion de planning et de rendez-vous",
  "Support prioritaire et assistance dédiée",
  "Accès à des statistiques avancées sur vos annonces",
];

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-rose-500">Abonnements Vétérinaire</h1>
        <p className="text-center text-gray-700 mb-8">
          Choisissez la formule qui correspond le mieux à vos besoins et profitez de tous les avantages de la plateforme VetHome !
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, idx) => (
            <Card key={plan.title} className={plan.highlight ? "border-2 border-rose-400 shadow-lg" : ""}>
              <CardContent className="flex flex-col items-center py-8">
                <div className="text-xl font-bold mb-2 text-rose-500">{plan.title}</div>
                <div className="text-3xl font-extrabold mb-1">{plan.price}</div>
                <div className="text-gray-500 mb-4">{plan.duration}</div>
                <div className="text-center text-gray-700 mb-6">{plan.description}</div>
                <Button className="bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-full px-8 py-2 mt-auto">S'abonner</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-rose-500">Services inclus dans l'abonnement :</h2>
          <ul className="space-y-3">
            {services.map((service, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-rose-400" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
