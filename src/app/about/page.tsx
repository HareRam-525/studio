import Image from "next/image";
import MotionDiv from "@/components/motion-div";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-main');

  return (
    <section>
      <div className="container px-4 md:px-6">
        <MotionDiv>
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              About B.K.R Convention Hall
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Discover the story behind our commitment to excellence.
            </p>
          </div>
        </MotionDiv>
        
        <MotionDiv className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                B.K.R Convention Hall was founded with a singular vision: to create a versatile and elegant space where memories are made. Our journey began over a decade ago, driven by a passion for hospitality and a commitment to providing unparalleled service. We believe that every event is a unique story waiting to be told, and our venue is the perfect canvas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From grand weddings to corporate seminars, our state-of-the-art facilities and dedicated team ensure that every detail is meticulously handled. Our architecture blends modern sophistication with timeless charm, offering a stunning backdrop for any occasion. At B.K.R, we don't just host events; we build experiences that last a lifetime.
              </p>
            </div>
            {aboutImage && (
               <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    data-ai-hint={aboutImage.imageHint}
                />
               </div>
            )}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
