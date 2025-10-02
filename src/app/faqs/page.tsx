import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MotionDiv from "@/components/motion-div";

const faqs = [
  {
    question: "What is the capacity of the convention hall?",
    answer:
      "Our main hall can comfortably accommodate up to 500 guests for a seated dinner and up to 1000 guests for a standing reception. We also have smaller rooms for more intimate gatherings.",
  },
  {
    question: "Is parking available at the venue?",
    answer:
      "Yes, we offer ample, complimentary parking for all your guests. Our parking area is secure and well-lit, with dedicated spots for easy access.",
  },
  {
    question: "Can we bring our own caterer?",
    answer:
      "While we have a list of preferred, high-quality caterers that we work with, we do allow external catering for a nominal fee. Please contact our event manager for more details on our policy.",
  },
  {
    question: "What is the booking and cancellation policy?",
    answer:
      "To book a date, we require a 50% deposit. The remaining balance is due 30 days before the event. Cancellations made more than 90 days prior to the event are fully refundable. Please refer to our contract for the full cancellation policy.",
  },
  {
    question: "Are audio/visual equipment included?",
    answer:
      "Yes, our venue is equipped with a state-of-the-art sound system, microphones, and HD projectors. Our on-site technical team will be available to assist you throughout your event.",
  },
];

export default function FAQsPage() {
  return (
    <section>
      <div className="container px-4 md:px-6">
        <MotionDiv>
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Find answers to common questions about our venue and services.
            </p>
          </div>
        </MotionDiv>

        <MotionDiv className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionDiv>
      </div>
    </section>
  );
}
