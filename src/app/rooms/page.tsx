import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import MotionDiv from "@/components/motion-div";

const rooms = [
  {
    id: "grand-ballroom",
    title: "The Grand Ballroom",
    description: "An epitome of elegance, perfect for large weddings and corporate events. Features high ceilings and crystal chandeliers.",
    capacity: 500,
    amenities: ["A/C", "Wi-Fi", "Stage", "Sound System"],
    image: PlaceHolderImages.find(p => p.id === 'room-1'),
  },
  {
    id: "executive-suite",
    title: "The Executive Suite",
    description: "A sophisticated space designed for board meetings, seminars, and intimate corporate gatherings.",
    capacity: 50,
    amenities: ["A/C", "Wi-Fi", "Projector", "Conference Table"],
    image: PlaceHolderImages.find(p => p.id === 'room-2'),
  },
  {
    id: "garden-pavilion",
    title: "The Garden Pavilion",
    description: "An open-air pavilion surrounded by lush greenery, ideal for receptions and social functions.",
    capacity: 150,
    amenities: ["Outdoor Seating", "Sound System", "Natural Light"],
    image: PlaceHolderImages.find(p => p.id === 'room-3'),
  },
];

export default function RoomsPage() {
  return (
    <section>
      <div className="container px-4 md:px-6">
        <MotionDiv>
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our Rooms & Suites
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Explore our versatile spaces designed to fit any occasion.
            </p>
          </div>
        </MotionDiv>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <MotionDiv key={room.id} transition={{ delay: index * 0.1 }}>
              <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                {room.image && (
                  <div className="relative aspect-video">
                    <Image
                      src={room.image.imageUrl}
                      alt={room.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={room.image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{room.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <p className="text-muted-foreground">{room.description}</p>
                  <div className="mt-4">
                    <p className="mb-2 font-semibold">
                      Capacity: Up to {room.capacity} guests
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity) => (
                        <Badge key={amenity} variant="secondary">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
