"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChefHat, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#concepto", label: "Concepto" },
    { href: "#menu", label: "Menú" },
    { href: "#el-chef", label: "El Chef" },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "border-b border-border bg-background/95 shadow-sm" : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center">
        <a href="#" className="flex items-center mr-auto">
          <ChefHat className="h-7 w-7 mr-2 text-primary" />
          <span className="font-bold text-xl tracking-wider">ARDE</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium mr-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary">{link.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a href="#reservas">
            <Button>Reservar Mesa</Button>
          </a>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="grid gap-6 text-lg font-medium mt-10">
                <a href="#" className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <ChefHat className="h-6 w-6 text-primary" />
                  <span className="tracking-wider">ARDE</span>
                </a>
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground">{link.label}</a>
                ))}
              </nav>
              <div className="mt-8">
                <a href="#reservas">
                  <Button className="w-full">Reservar Mesa</Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};