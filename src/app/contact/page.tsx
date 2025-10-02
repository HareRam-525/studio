import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";
import MotionDiv from "@/components/motion-div";

export default function ContactPage() {
  return (
    <section>
      <div className="container px-4 md:px-6">
        <MotionDiv>
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Get In Touch
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              We&apos;re here to help and answer any question you might have.
            </p>
          </div>
        </MotionDiv>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <MotionDiv className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-headline text-2xl font-semibold">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span>
                    123 Event Lane, Celebration City, 456789, Wonderland
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <a href="tel:+911234567890" className="hover:text-accent">
                    +91 12345 67890
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <a
                    href="mailto:contact@bkrconventions.com"
                    className="hover:text-accent"
                  >
                    contact@bkrconventions.com
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.819561314769!3d-6.194741395515038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2c562e01528682!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1620029511214!5m2!1sen!2sid"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="B.K.R Convention Hall Location"
              ></iframe>
            </div>
          </MotionDiv>
          <MotionDiv>
            <ContactForm />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
