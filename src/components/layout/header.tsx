
"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { navItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { WHATSAPP_MESSAGE_BASE } from "@/lib/constants";
import { Logo } from "@/components/icons";
import { RainbowButton } from "../ui/rainbow-button";
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const getLink = (href: string) => {
    if (href.startsWith('/#')) {
        // If on homepage, use hash for smooth scroll. Otherwise, link to homepage with hash.
        return pathname === '/' ? href : `/${href}`;
    }
    return href;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="EasyMove Home">
          <Logo className="h-8 w-8 text-primary" />
          <span className="hidden sm:inline text-xl font-bold text-primary font-headline">EasyMove</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={getLink(item.href)}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
           <Button variant="ghost" size="icon" asChild>
            <a href={`${WHATSAPP_MESSAGE_BASE}Olá! Gostaria de pedir um orçamento.`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Phone className="h-5 w-5 text-primary"/>
            </a>
          </Button>
          <RainbowButton asChild>
            <Link href="/orcamento">Pedir orçamento</Link>
          </RainbowButton>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Logo className="h-6 w-6" />
                  <span>EasyMove</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={getLink(item.href)}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Separator className="my-4"/>
                 <Button variant="default" size="lg" asChild className="bg-green-500 hover:bg-green-600 text-white">
                    <a href={`${WHATSAPP_MESSAGE_BASE}Olá! Gostaria de pedir um orçamento.`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Phone className="h-5 w-5"/>
                        <span>Fale no WhatsApp</span>
                    </a>
                </Button>
                <RainbowButton asChild>
                  <Link href="/orcamento">Pedir orçamento</Link>
                </RainbowButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
