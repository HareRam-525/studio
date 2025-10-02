import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ParkingCircle,
  Wifi,
  UtensilsCrossed,
  Wind,
  Video,
  Speaker,
} from "lucide-react";
import MotionDiv from "@/components/motion-div";

const amenities = [
  {
    icon: <ParkingCircle className="h-10 w-10 text-accent" />,
    title: "Ample Parking",
    description: "Spacious and secure parking for all your guests.",
  },
  {
    icon: <Wifi className="h-10 w-10 text-accent" />,
    title: "High-Speed Wi-Fi",
    description: "Seamless connectivity throughout the venue.",
  },
  {
    icon: <UtensilsCrossed className="h-10 w-10 text-accent" />,
    title: "Catering Services",
    description: "Exquisite dining options tailored to your event.",
  },
  {
    icon: <Wind className="h-10 w-10 text-accent" />,
    title: "Air Conditioning",
    description: "Fully air-conditioned halls for ultimate comfort.",
  },
  {
    icon: <Video className="h-10 w-10 text-accent" />,
    title: "Projector Systems",
    description: "High-definition projectors for presentations and visuals.",
  },
  {
    icon: <Speaker className="h-10 w-10 text-accent" />,
    title: "Sound System",
    description: "Professional-grade audio equipment for clear sound.",
  },
];

export default function AmenitiesPage() {
  return (
    <section>
      <div className="container px-4 md:px-6">
        <MotionDiv>
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our Amenities
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need for a perfect event.
            </p>
          </div>
        </MotionDiv>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => (
            <MotionDiv key={index} transition={{ delay: index * 0.1 }}>
              <Card className="h-full text-center transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    {amenity.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{amenity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
