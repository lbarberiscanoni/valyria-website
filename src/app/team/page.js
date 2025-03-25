// src/app/team/page.js
import Link from 'next/link';
import projectsData from "@/app/data/projects.json";
import teamData from "@/app/data/team.json";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { Grid2Cols, Grid3Cols } from "@/components/Grid";

export default function Team() {
  // Extract leaders and students from team data
  const { leadership, students } = teamData;

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
                <div className="w-32 h-32 rounded-full bg-gray-200 flex-shrink-0 mx-auto md:mx-0">
                  {leader.image && (
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  )}
                </div>
                <div>
                  <h3 className="heading-xs">{leader.name}</h3>
                  <p className="text-caption mb-4">{leader.role}</p>
                  <p className="text-body mb-4">{leader.bio}</p>
                  <div className="flex gap-4">
                    {leader.links.linkedin && (
                      <a 
                        href={leader.links.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-link"
                      >
                        LinkedIn Profile
                      </a>
                    )}
                    {leader.links.github && (
                      <a 
                        href={leader.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-link"
                      >
                        GitHub Profile
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Grid2Cols>
        </Container>
      </Section>
      
      {/* Student Developers Section */}
      <Section variant="gray">
        <Container>
          <h2 className="heading-md mb-6 text-center">Development Team</h2>
          <p className="text-body text-center max-w-3xl mx-auto mb-12">
            Our talented team delivers exceptional work for our clients while gaining real-world experience
          </p>
          
          <Grid3Cols>
            {students.map((student, index) => {
              // Generate a slug by converting to lowercase and replacing spaces with hyphens
              const slug = student.name.toLowerCase().replace(/\s+/g, "-");
              
              // Find the student's projects
              const studentProjects = projectsData.projects.filter(
                (project) => project.developer === student.name
              );

              return (
                <Card key={index}>
                  <Card.Body className="p-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4">
                      {student.image && (
                        <img 
                          src={student.image} 
                          alt={student.name} 
                          className="w-full h-full object-cover rounded-full"
                        />
                      )}
                    </div>
                    <Card.Title className="text-center">{student.name}</Card.Title>
                    <Card.Subtitle className="text-center">{student.role}</Card.Subtitle>
                    
                    {student.skills && student.skills.length > 0 && (
                      <div className="my-3 flex flex-wrap justify-center gap-2">
                        {student.skills.slice(0, 3).map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="inline-block px-2 py-1 bg-gray-100 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {studentProjects.length > 0 && (
                      <div className="mb-4">
                        <p className="text-caption mb-2 text-center">Projects:</p>
                        <ul className="text-body-sm space-y-1 text-center">
                          {studentProjects.slice(0, 2).map((project, idx) => (
                            <li key={idx}>{project.name}</li>
                          ))}
                          {studentProjects.length > 2 && (
                            <li>+ {studentProjects.length - 2} more</li>
                          )}
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