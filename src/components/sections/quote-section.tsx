"use client"; // 1. Convert this to a client component to use hooks

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import MotionDiv from "../motion-div";
import { useState, useEffect } from "react"; // 2. Import useState and useEffect

export function QuoteSection() {
  const quoteImage = PlaceHolderImages.find((p) => p.id === "quote-bg");
  
  // 3. Create state to track the scroll position
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  // 4. Add an effect to listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Add overflow-hidden to the parent to contain the moving image
    <section className="relative border-t py-24 md:py-32 lg:py-40 overflow-hidden">
      {quoteImage && (
        <Image
          src={quoteImage.imageUrl}
          alt={quoteImage.description}
          fill
          className="object-cover"
          data-ai-hint={quoteImage.imageHint}
          // 5. Apply a transform style to move the image based on scroll position
          // You can change the "0.5" to a smaller number for a slower effect
          // or a larger number for a faster one.
          style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        />
      )}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="container relative px-4 md:px-6">
        <MotionDiv className="mx-auto max-w-3xl text-center text-primary-foreground">
          <blockquote className="font-headline text-2xl font-semibold italic sm:text-3xl md:text-4xl">
            &ldquo;The perfect venue is not just a place, but a feeling. It&apos;s
            the start of a beautiful story.&rdquo;
          </blockquote>
          <cite className="mt-6 block text-lg font-medium not-italic">
            - The B.K.R Team
          </cite>
        </MotionDiv>
      </div>
    </section>
  );
}
