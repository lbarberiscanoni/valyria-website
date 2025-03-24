// src/app/page.js
import projectsData from "@/app/data/projects.json";
import Link from "next/link";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { Grid3Cols } from "@/components/Grid";

export default function Home() {
  const { projects } = projectsData;

  return (
    <>
      {/* Hero Section */}
      <Section variant="hero">
        <Container>
          <h1 className="heading-xl mb-6">
            We build software.
            <br />
            We build careers.
          </h1>
          <p className="text-body-lg max-w-2xl mb-8">
            A software studio providing real-world experience to student developers while delivering exceptional products for our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/services" variant="white">
              Our Services
            </Button>
            <Button 
              href="/work" 
              variant="secondary" 
              className="text-white border-white hover:text-black"
            >
              View Our Work
            </Button>
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section>
        <Container>
          <h2 className="heading-md mb-12">Our Unique Approach</h2>
          
          <p className="text-body max-w-3xl mb-12">
            Valyria is a software studio that grew out of a collaboration between{" "}
            <a 
              href="https://www.linkedin.com/in/lorenzo-barberis-canonico-612734aa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-link"
            >
              Lorenzo Barberis Canonico
            </a>{" "}
            and{" "}
            <a 
              href="https://www.linkedin.com/in/ychen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-link"
            >
              Yan Chen
            </a>
            , and it has a unique mission: to turn the contract work opportunities that come our way 
            into part-time jobs and real-world experience to college students studying computer science, {" "}
            <a 
              href="https://www.loom.com/share/d17221546a8d417b96f3192bc606d8da?sid=04a27fe3-5a42-4168-b93d-32437f5f20fd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-link"
            >
              many of whom Lorenzo has previously coached in Speech & Debate.
            </a>
          </p>
        </Container>
      </Section>

      {/* Projects Section */}
      <Section variant="gray">
        <Container>
          <h2 className="heading-md mb-12">Featured Projects</h2>
          
          <Grid3Cols>
            {projects.map((project, index) => {
              const slug = project.developer.toLowerCase().replace(/\s+/g, "-");
              
              return (
                <Card key={index}>
                  <div className="h-48 bg-gray-200 flex-center">
                    {/* Placeholder for project image */}
                    <span className="text-2xl text-gray-500">{project.name}</span>
                  </div>
                  
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    
                    <Card.Subtitle>
                      <span className="font-medium">Client:</span> {project.client} • <span className="font-medium">Designer:</span> {project.designer}
                    </Card.Subtitle>
                    
                    <p className="text-body line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    
                    <Card.Action>
                      <Link 
                        href={`/${slug}`} 
                        className="text-link"
                      >
                        View details
                      </Link>
                      
                      {project["project-url"] && (
                        <a 
                          href={project["project-url"]} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-link"
                        >
                          Live project
                        </a>
                      )}
                    </Card.Action>
                  </Card.Body>
                </Card>
              );
            })}
          </Grid3Cols>
          
          <div className="mt-12 text-center">
            <Button href="/work" variant="primary">
              View All Projects
            </Button>
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section variant="cta">
        <Container size="md">
          <h2 className="heading-md mb-6">Ready to bring your idea to life?</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
            Whether you need a complete software solution or expertise in machine learning, we have the team to deliver exceptional results.
          </p>
          <Button href="/services" variant="white">
            Explore Our Services
          </Button>
        </Container>
      </Section>
    </>
  );
}