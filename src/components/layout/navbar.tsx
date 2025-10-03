import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";
import { NavLink } from "./nav-link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-6 flex items-center">
          <Link href="/" className="mr-6">
            <h1 className="font-headline text-lg font-bold sm:text-xl">
              B.K.R. Convention Hall
            </h1>
          </Link>
        </div>
        
        <nav className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild className="hidden md:inline-flex" variant="outline">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Book NOW
            </a>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
