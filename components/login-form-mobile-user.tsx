"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export function LoginFormMobile({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Connexion réussie")
    router.push("/auth/user/create-profile")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-black/40 backdrop-blur-sm border-white/20">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-white">Mot de passe</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm text-white hover:text-white/90 underline-offset-4 hover:underline"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <Button type="submit" className="w-full border-white/20 hover:bg-white/10">
                Connexion
              </Button>
              <Button variant="outline" className="w-full border-white/20 text-black hover:bg-white/10">
                Connexion avec Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm text-white">
              Vous n&apos;avez pas de compte ?{" "}
              <a href="/user/signup" className="underline underline-offset-4 hover:text-white/90">
                S&apos;inscrire
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 