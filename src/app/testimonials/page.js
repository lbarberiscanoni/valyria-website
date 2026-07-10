// src/app/testimonials/page.js
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { Grid3Cols } from "@/components/Grid";
import testimonialsData from "@/app/data/testimonials.json";

export default function Testimonials() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="hero">
        <Container>
          <div className="text-center">
            <h1 className="heading-xl mb-6">Testimonials</h1>
            <p className="text-body-lg max-w-2xl mx-auto">
              What our clients and partners say about working with us
            </p>
          </div>
        </Container>
      </Section>

      {/* Testimonials Grid */}
      <Section>
        <Container>
          <Grid3Cols>
            {testimonialsData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 hover-scale flex flex-col"
              >
                <p className="text-body-lg mb-6 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-caption">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </Grid3Cols>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section variant="cta">
        <Container size="md">
          <h2 className="heading-md mb-6">Ready to become our next success story?</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
            Let&apos;s build something amazing together. Contact us today to discuss your project.
          </p>
          <Button
            href="mailto:contact@valyriastudios.com"
            variant="white"
          >
            Contact Us
          </Button>
        </Container>
      </Section>
    </>
  );
}
