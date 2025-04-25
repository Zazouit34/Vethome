"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/auth/professional/create-profile")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Connexion</CardTitle>
          <CardDescription>
            Entrez votre email ci-dessous pour vous connecter à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Connexion
              </Button>
              <Button variant="outline" className="w-full">
                Connexion avec Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Vous n&apos;avez pas de compte ?{" "}
              <a href="#" className="underline underline-offset-4">
                S&apos;inscrire
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
