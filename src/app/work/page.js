// src/app/work/page.js
import Link from 'next/link';
import projectsData from "@/app/data/projects.json";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { Grid2Cols } from "@/components/Grid";
import ProjectCard from "@/components/ProjectCard";


export default function Work() {
  const { projects } = projectsData;

  return (
    <>
      {/* Hero Section */}
      <Section variant="hero">
        <Container>
          <h1 className="heading-xl mb-6">Our Work</h1>
          <p className="text-body-lg max-w-2xl">
            Showcasing the innovative projects built by our talented student developers under expert guidance
          </p>
        </Container>
      </Section>
      
      {/* Projects Section */}
      <Section>
        <Container>
          {projects.map((project, index) => {
            const slug = project.developer.toLowerCase().replace(/\s+/g, "-");
            
            return (

                <div key={index} className="mb-24 last:mb-0">
                  <ProjectCard project={project} />
                </div>


            );
          })}
        </Container>
      </Section>
      
      {/* Call to Action */}
      <Section variant="cta">
        <Container size="md">
          <h2 className="heading-md mb-6">Have a project in mind?</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
            Let our team of talented student developers bring your vision to life
          </p>
          <Button 
            href="/services" 
            variant="white"
          >
            Explore Our Services
          </Button>
        </Container>
      </Section>
    </>
  );
}