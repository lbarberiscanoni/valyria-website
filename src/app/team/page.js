// src/app/team/page.js
import Link from 'next/link';
import projectsData from "@/app/data/projects.json";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { Grid2Cols, Grid3Cols } from "@/components/Grid";

export default function Team() {
  // Extract developer names from the projects data
  const developers = projectsData.projects.map((project) => project.developer);
  
  // Create a set to remove duplicates, then convert back to an array
  const uniqueDevelopers = Array.from(new Set(developers));

  // Team leadership data
  const leadership = [
    {
      name: "Lorenzo Barberis Canonico",
      title: "Co-Founder & Development Lead",
      bio: "Former speech & debate coach turned tech entrepreneur. Lorenzo manages the development team, providing guidance to student developers.",
      linkedin: "https://www.linkedin.com/in/lorenzo-barberis-canonico-612734aa/"
    },
    {
      name: "Yan Chen",
      title: "Co-Founder & Design Lead",
      bio: "Experienced designer who ensures all Valyria projects meet the highest standards of UX/UI design.",
      linkedin: "https://www.linkedin.com/in/ychen/"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section variant="hero">
        <Container>
          <h1 className="heading-xl mb-6">Our Team</h1>
          <p className="text-body-lg max-w-2xl">
            Meet the talented individuals who bring Valyria Studios&apos; unique vision to life
          </p>
        </Container>
      </Section>
      
      {/* Leadership Section */}
      <Section>
        <Container>
          <h2 className="heading-md mb-12 text-center">Leadership</h2>
          
          <Grid2Cols>
            {leadership.map((leader, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex-shrink-0 mx-auto md:mx-0"></div>
                <div>
                  <h3 className="heading-xs">{leader.name}</h3>
                  <p className="text-caption mb-4">{leader.title}</p>
                  <p className="text-body mb-4">{leader.bio}</p>
                  <a 
                    href={leader.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </Grid2Cols>
        </Container>
      </Section>
      
      {/* Student Developers Section */}
      <Section variant="gray">
        <Container>
          <h2 className="heading-md mb-6 text-center">Student Developers</h2>
          <p className="text-body text-center max-w-3xl mx-auto mb-12">
            Our talented students gain real-world experience while delivering exceptional work for our clients
          </p>
          
          <Grid3Cols>
            {uniqueDevelopers.map((developer) => {
              // Generate a slug by converting to lowercase and replacing spaces with hyphens
              const slug = developer.toLowerCase().replace(/\s+/g, "-");
              
              // Find the developer's projects
              const devProjects = projectsData.projects.filter(
                (project) => project.developer === developer
              );

              return (
                <Card key={developer}>
                  <Card.Body className="p-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                    <Card.Title className="text-center">{developer}</Card.Title>
                    <Card.Subtitle className="text-center">Student Developer</Card.Subtitle>
                    
                    {devProjects.length > 0 && (
                      <div className="mb-4">
                        <p className="text-caption mb-2">Projects:</p>
                        <ul className="text-body-sm space-y-1">
                          {devProjects.slice(0, 3).map((project, idx) => (
                            <li key={idx}>{project.name}</li>
                          ))}
                          {devProjects.length > 3 && <li>+ {devProjects.length - 3} more</li>}
                        </ul>
                      </div>
                    )}
                    
                    <Card.Action className="justify-center">
                      <Button 
                        href={`/${slug}`}
                        variant="secondary"
                        size="small"
                      >
                        View Portfolio
                      </Button>
                    </Card.Action>
                  </Card.Body>
                </Card>
              );
            })}
          </Grid3Cols>
        </Container>
      </Section>
      
      {/* Join Our Team Section */}
      <Section>
        <Container size="md" className="text-center">
          <h2 className="heading-md mb-6">Join Our Team</h2>
          <p className="text-body mb-8">
            Are you a student looking to gain real-world experience in software development? We&apos;re always looking for talented individuals to join our team.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="heading-xs mb-4">Benefits of Working with Valyria Studios</h3>
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Work on real projects for real clients</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Flexible, part-time schedule that accommodates your studies</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Mentorship from experienced professionals</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Build an impressive portfolio while earning income</span>
              </li>
            </ul>
            
            <Button 
              href="mailto:careers@valyriastudios.com" 
              variant="primary"
            >
              Apply Now
            </Button>
          </div>
        </Container>
      </Section>
      
      {/* Call to Action */}
      <Section variant="cta">
        <Container size="md">
          <h2 className="heading-md mb-6">Work with our talented team</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
            Looking for a software development partner? Our team of talented developers is ready to bring your ideas to life.
          </p>
          <Button href="/services" variant="white">
            Explore Our Services
          </Button>
        </Container>
      </Section>
    </>
  );
}