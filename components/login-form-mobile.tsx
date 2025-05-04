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
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useState } from "react"

export function LoginFormMobile({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Check if user is in professionals collection
      const profRef = doc(db, 'professionals', user.uid);
      const profSnap = await getDoc(profRef);
      if (profSnap.exists()) {
        toast.success('Connexion réussie');
        router.push('/auth/professional/create-profile');
      } else {
        await signOut(auth);
        setError("Ce compte n'est pas un professionnel.");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full border-white/20 hover:bg-white/10">
                Connexion
              </Button>
              <Button variant="outline" className="w-full border-white/20 text-black hover:bg-white/10">
                Connexion avec Google
              </Button>
            </div>
            {error && <div className="mt-4 text-center text-sm text-red-400">{error}</div>}
            <div className="mt-4 text-center text-sm text-white">
              Vous n&apos;avez pas de compte ?{" "}
              <a href="/professional/signup" className="underline underline-offset-4 hover:text-white/90">
                S&apos;inscrire
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 