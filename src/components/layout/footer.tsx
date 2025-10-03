import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h3 className="font-headline text-2xl font-bold">
                B.K.R. Convention Hall
              </h3>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Creating timeless memories in an elegant setting.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  123 Event Lane, Celebration City, 456789,
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+918886125144"
                  className="text-primary-foreground/70 hover:text-primary-foreground"
                >
                  +91 88861-25144
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:bkrconventionhall.jkc@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground"
                >
                  www.bkrconventionhall.jkc@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">Location</h4>
            <div className="overflow-hidden rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.2493507571476!2d77.72055497248593!3d15.110958184157372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb697aadbaabc65%3A0x37af30aebff9252c!2sB.K.R%20Convention%20Hall!5e0!3m2!1sen!2sin!4v1759494477012!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="B.K.R. Convention Hall Location"
                className="brightness-75 contrast-125 grayscale"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/70">
          <p>
            &copy; {new Date().getFullYear()} B.K.R Convention Hall. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
