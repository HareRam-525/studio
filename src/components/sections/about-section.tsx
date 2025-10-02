import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import MotionDiv from "../motion-div";

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-home");
  return (
    <section id="about" className="border-t">
      <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6 lg:gap-12">
        <MotionDiv className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Elegance, Redefined.
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            At B.K.R Convention Hall, we provide a stunning backdrop for your most
            cherished moments. Our venue combines modern luxury with timeless
            sophistication, ensuring every event is a masterpiece.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From grand celebrations to intimate gatherings, our dedicated team is
            committed to delivering flawless service and creating unforgettable
            experiences.
          </p>
          <Button asChild size="lg">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </MotionDiv>
        <MotionDiv className="relative aspect-video overflow-hidden rounded-xl">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
        </MotionDiv>
      </div>
    </section>
  );
}
