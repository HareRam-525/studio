"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader } from "@/components/ui/sheet";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-sm">
        <SheetHeader className="border-b pb-4">
          <Link href="/" className="inline-block" onClick={() => setIsOpen(false)}>
            <h3 className="font-headline text-xl font-bold">
              B.K.R Convention Hall
            </h3>
          </Link>
        </SheetHeader>
        <div className="mt-6 flex h-full flex-col">
          <nav className="flex-1">
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md px-3 py-2 text-lg font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto border-t pt-6">
            <Button asChild className="w-full" size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Book NOW
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
