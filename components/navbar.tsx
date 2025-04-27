'use client';

import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { User, LogOut, Home, Briefcase, Stethoscope, Hotel } from "lucide-react"


export default function Component() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-white dark:bg-gray-950 shadow-sm sticky top-0 z-50">
      <div className="flex w-full items-center justify-between lg:justify-start">
        {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="w-full sm:w-[540px] mx-auto">
            <SheetHeader>
              <SheetTitle className="text-white">Navigation Menu</SheetTitle>
            </SheetHeader>
            <div className="grid gap-2 py-6 px-4">
              <Link
                href="/main"
                className="flex w-full items-center justify-start gap-3 py-2 text-lg font-semibold text-gray-700"
                prefetch={false}
                onClick={() => setOpen(false)}
              >
                <Home className="w-5 h-5" />
                Accueil
              </Link>
              <Link
                href="/jobs"
                className="flex w-full items-center justify-start gap-3 py-2 text-lg font-semibold text-gray-700"
                prefetch={false}
                onClick={() => setOpen(false)}
              >
                <Briefcase className="w-5 h-5" />
                Annonces
              </Link>
              <Link
                href="/veterinaries"
                className="flex w-full items-center justify-start gap-3 py-2 text-lg font-semibold text-gray-700"
                prefetch={false}
                onClick={() => setOpen(false)}
              >
                <Stethoscope className="w-5 h-5" />
                Vétérinaires
              </Link>
              <Link
                href="/hosting"
                className="flex w-full items-center justify-start gap-3 py-2 text-lg font-semibold text-gray-700"
                prefetch={false}
                onClick={() => setOpen(false)}
              >
                <Hotel className="w-5 h-5" />
                Hébergement
              </Link>
              {/* Separator */}
              <div className="border-t border-gray-200 my-4" />
              {/* Profile link */}
              <Link
                href="/user"
                className="flex w-full items-center justify-start gap-3 py-2 text-lg font-semibold text-gray-700"
                prefetch={false}
                onClick={() => setOpen(false)}
              >
                <User className="w-5 h-5" />
                Profil
              </Link>
              {/* Logout link */}
              <Link
                href="/"
                className="flex w-full items-center justify-start gap-3 py-2 text-lg font-semibold text-gray-700"
                prefetch={false}
                onClick={() => setOpen(false)}
              >
                <LogOut className="w-5 h-5" />
                Déconnexion
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo - Centered on mobile, Left on desktop */}
        {/*
        <Link 
          href="/main" 
          className="flex items-center lg:mr-6"
          prefetch={false}
        >
          <Image
            src="/logo-vethome.png"
            alt="VetHome Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>
        */}

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden lg:flex gap-6">
          <Link
            href="/main"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Accueil
          </Link>
          <Link
            href="/jobs"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Annonces
          </Link>
          <Link
            href="/veterinaries"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Vétérinaires
          </Link>
          <Link
            href="/hosting"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Hébergement
          </Link>
        </nav>
      </div>
    </header>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

