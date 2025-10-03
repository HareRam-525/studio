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
                    Beside Venkatampalli Road, Near Bolikonda Ranganatha Swamy Temple, 515401, Jakkalacheruvu , Andhra Pradesh
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <a href="tel:+918886125144" className="hover:text-accent">
                    +91  88861-25144
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <a
                    href="mailto:bkrconventionhall.jkc@gmail.com"
                    className="hover:text-accent"
                  >
                    www.bkrconventionhall.jkc@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.2493507571476!2d77.72055497248593!3d15.110958184157372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb697aadbaabc65%3A0x37af30aebff9252c!2sB.K.R%20Convention%20Hall!5e0!3m2!1sen!2sin!4v1759493929346!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              </iframe>
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
