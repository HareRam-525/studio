import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { QuoteSection } from "@/components/sections/quote-section";
import ContactForm from "@/components/contact-form";
import MotionDiv from "@/components/motion-div";

export default function Home() {
  return (
    <>
      {/* Each div with "scroll-snap-section" is a full-screen snapping point */}
      
      <div className="scroll-snap-section">
        <HeroSection />
      </div>

      <div className="scroll-snap-section">
        <AboutSection />
      </div>

      <div className="scroll-snap-section">
        <QuoteSection />
      </div>

      <div id="enquiry" className="scroll-snap-section border-t">
        <div className="container px-4 md:px-6">
          <MotionDiv>
            <div className="mx-auto max-w-xl space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Make an Enquiry
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or want to book our hall? Fill out the form below
                and we&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </MotionDiv>
          <MotionDiv className="mx-auto mt-12 max-w-xl">
            <ContactForm />
          </MotionDiv>
        </div>
      </div>
    </>
  );
}
