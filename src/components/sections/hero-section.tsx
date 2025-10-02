
"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function HeroSection() {
  const heroImages = PlaceHolderImages.filter((p) => p.id.startsWith("hero-"));
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      <Carousel
        className="h-full w-full"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image) => (
            <CarouselItem key={image.id}>
              <div className="relative h-full w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint={image.imageHint}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            B.K.R Convention Hall
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-shadow-md md:text-xl">
            Where Your Unforgettable Moments Come to Life
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="default">
              <Link href="/contact">Make an Enquiry</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
