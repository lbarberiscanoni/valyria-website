// src/app/[username]/page.js
import Link from 'next/link';
import projectsData from "@/app/data/projects.json";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { Grid2Cols } from "@/components/Grid";

export default function Portfolio({ params }) {
  const { username } = params;
  
  // Format the username for display (capitalize first letter of each word)
  const displayName = username
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Find projects for this developer
  const userProjects = projectsData.projects.filter(
    (project) => project.developer.toLowerCase().replace(/\s+/g, '-') === username.toLowerCase()
  );

  return (
    <>
      {/* Hero Section */}
      <Section variant="hero">
        <Container>
          <h1 className="heading-xl mb-6">{displayName}</h1>
          <p className="text-body-lg">
            Student Developer at Valyria Studios
          </p>
        </Container>
      </Section>
      
      {/* About Section */}
      <Section>
        <Container size="md">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto md:mx-0 flex-shrink-0"></div>
            
            <div>
              <h2 className="heading-md mb-6">About {displayName}</h2>
              
              <p className="text-body mb-6">
                {displayName} is a student developer at Valyria Studios, gaining real-world experience while contributing to client projects. 
                With a passion for technology and problem-solving, {displayName.split(' ')[0]} brings fresh perspectives and innovative solutions to every project.
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="text-link">
                  GitHub Profile
                </a>
                <a href="#" className="text-link">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Projects Section */}
      {userProjects.length > 0 ? (
        <Section variant="gray">
          <Container>
            <h2 className="heading-md mb-12 text-center">Projects</h2>
            
            <div className="space-y-16">
              {userProjects.map((project, index) => (
                <Grid2Cols key={index} className={index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}>
                  {/* Project Image/Placeholder - Alternate left and right */}
                  <div className={`bg-gray-200 h-80 flex-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <span className="text-2xl text-gray-500">{project.name}</span>
                  </div>
                  
                  {/* Project Details */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <h3 className="heading-xs mb-4">{project.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-caption font-medium">Client</p>
                        <p>{project.client}</p>
                      </div>
                      <div>
                        <p className="text-caption font-medium">Designer</p>
                        <p>{project.designer}</p>
                      </div>
                      <div>
                        <p className="text-caption font-medium">Role</p>
                        <p>Developer</p>
                      </div>
                      <div>
                        <p className="text-caption font-medium">Year</p>
                        <p>2023</p>
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
                    </div>
                  </div>
                </Grid2Cols>
              ))}
            </div>
          </Container>
        </Section>
      ) : (
        <Section variant="gray">
          <Container className="text-center">
            <h2 className="heading-md mb-6">Projects</h2>
            <p className="text-body">No projects found for {displayName}</p>
          </Container>
        </Section>
      )}
      
      {/* Skills Section */}
      <Section>
        <Container size="md">
          <h2 className="heading-md mb-12 text-center">Skills</h2>
          
          <Grid2Cols>
            <div>
              <h3 className="heading-xs mb-4">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex-between mb-1">
                    <span className="font-medium">JavaScript/React</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-black h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex-between mb-1">
                    <span className="font-medium">HTML/CSS</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-black h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex-between mb-1">
                    <span className="font-medium">Node.js</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-black h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex-between mb-1">
                    <span className="font-medium">Python</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-black h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="heading-xs mb-4">Soft Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Problem Solving</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Team Collaboration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Adaptability</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Critical Thinking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-black mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Time Management</span>
                </li>
              </ul>
            </div>
          </Grid2Cols>
        </Container>
      </Section>
      
      {/* Contact Section */}
      <Section variant="cta">
        <Container size="md">
          <h2 className="heading-md mb-6">Interested in working together?</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
            Feel free to reach out if you&apos;d like to collaborate or learn more about my work
          </p>
          <Button 
            href={`mailto:${username}@valyriastudios.com`} 
            variant="white"
          >
            Contact Me
          </Button>
        </Container>
      </Section>
    </>
  );
}