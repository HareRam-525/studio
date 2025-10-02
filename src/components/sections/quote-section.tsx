import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import MotionDiv from "../motion-div";

export function QuoteSection() {
  const quoteImage = PlaceHolderImages.find((p) => p.id === "quote-bg");
  return (
    <section className="relative border-t py-24 md:py-32 lg:py-40">
      {quoteImage && (
        <Image
          src={quoteImage.imageUrl}
          alt={quoteImage.description}
          fill
          className="object-cover"
          data-ai-hint={quoteImage.imageHint}
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
