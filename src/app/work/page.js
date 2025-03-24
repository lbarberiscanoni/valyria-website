// src/app/work/page.js
import Link from 'next/link';
import projectsData from "@/app/data/projects.json";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { Grid2Cols } from "@/components/Grid";

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
                <Grid2Cols>
                  {/* Project Image/Placeholder */}
                  <div className="bg-gray-100 h-80 flex items-center justify-center">
                    <span className="text-2xl text-gray-500">{project.name}</span>
                  </div>
                  
                  {/* Project Details */}
                  <div>
                    <h2 className="heading-md mb-4">{project.name}</h2>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-caption font-medium">Client</p>
                        <p className="text-body-lg">{project.client}</p>
                      </div>
                      <div>
                        <p className="text-caption font-medium">Developer</p>
                        <Link href={`/${slug}`} className="text-body-lg hover:underline">
                          {project.developer}
                        </Link>
                      </div>
                      <div>
                        <p className="text-caption font-medium">Designer</p>
                        <p className="text-body-lg">{project.designer}</p>
                      </div>
                      <div>
                        <p className="text-caption font-medium">Year</p>
                        <p className="text-body-lg">2023</p>
                      </div>
                    </div>
                    
                    <p className="text-body mb-8">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      {project["project-url"] && (
                        <Button 
                          href={project["project-url"]} 
                          variant="primary"
                        >
                          View Live Project
                        </Button>
                      )}
                      
                      {project["repo-link"] && (
                        <Button 
                          href={project["repo-link"]} 
                          variant="secondary"
                        >
                          GitHub Repository
                        </Button>
                      )}
                      
                      {project["video-url"] && (
                        <Button 
                          href={project["video-url"]} 
                          variant="secondary"
                        >
                          Watch Demo
                        </Button>
                      )}
                      
                      <Button 
                        href={`/${slug}`}
                        variant="secondary"
                      >
                        Developer&apos;s Portfolio
                      </Button>
                    </div>
                  </div>
                </Grid2Cols>
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