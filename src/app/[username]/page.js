"use client"

// src/app/[username]/page.js
import { useParams } from 'next/navigation';
import Link from 'next/link';
import projectsData from "@/app/data/projects.json";
import teamData from "@/app/data/team.json"; // Import team data
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { Grid2Cols } from "@/components/Grid";

export default function Portfolio() {
  // Use the useParams hook to get the username parameter
  const params = useParams();
  const username = params.username;
  
  // Find the team member by normalizing the username
  // This makes "/noah" work the same as "/noah-broome"
  const normalizedUsername = username.toLowerCase();
  
  // Check if this is a full name or just first name
  const isFirstNameOnly = !normalizedUsername.includes('-');
  
  // Combine leadership and students
  const allTeamMembers = [...teamData.leadership, ...teamData.students];
  
  // Find the team member
  const teamMember = allTeamMembers.find(member => {
    const fullName = member.name.toLowerCase().replace(/\s+/g, '-');
    if (isFirstNameOnly) {
      // Check if the first part of the name matches
      const firstName = member.name.split(' ')[0].toLowerCase();
      return firstName === normalizedUsername;
    }
    return fullName === normalizedUsername;
  });
  
  // Find projects for this team member
  const userProjects = projectsData.projects.filter(
    (project) => teamMember && project.developer === teamMember.name
  );

  // If no team member found, use the URL to create a display name
  let displayName;
  if (teamMember) {
    displayName = teamMember.name;
  } else {
    // Format the username for display (capitalize first letter of each word)
    displayName = username
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <>
      {/* Hero Section */}
      <Section variant="hero">
        <Container>
          <h1 className="heading-xl mb-6">{displayName}</h1>
          <p className="text-body-lg">
            {teamMember ? teamMember.role : "Team Member"} at Valyria Studios
          </p>
        </Container>
      </Section>
      
      {/* About Section */}
      <Section>
        <Container size="md">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto md:mx-0 flex-shrink-0">
              {teamMember && teamMember.image && (
                <img 
                  src={teamMember.image} 
                  alt={teamMember.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
            
            <div>
              <h2 className="heading-md mb-6">About {displayName}</h2>
              
              <p className="text-body mb-6">
                {teamMember ? teamMember.bio : `${displayName} is a team member at Valyria Studios, contributing their talents to client projects and gaining valuable experience.`}
              </p>
              
              <div className="flex gap-4">
                {teamMember && teamMember.links.github && (
                  <a 
                    href={teamMember.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-link"
                  >
                    GitHub Profile
                  </a>
                )}
                
                {teamMember && teamMember.links.linkedin && (
                  <a 
                    href={teamMember.links.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-link"
                  >
                    LinkedIn Profile
                  </a>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Skills Section - Only show if team member is found */}
      {teamMember && teamMember.skills && teamMember.skills.length > 0 && (
        <Section variant="gray">
          <Container size="md">
            <h2 className="heading-md mb-6 text-center">Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {teamMember.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Container>
        </Section>
      )}
      
      {/* Projects Section */}
      {userProjects.length > 0 ? (
        <Section variant={teamMember && teamMember.skills && teamMember.skills.length > 0 ? "white" : "gray"}>
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
                        <p>{teamMember ? teamMember.role : "Developer"}</p>
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
        <Section variant={teamMember && teamMember.skills && teamMember.skills.length > 0 ? "white" : "gray"}>
          <Container className="text-center">
            <h2 className="heading-md mb-6">Projects</h2>
            <p className="text-body">No projects found for {displayName}</p>
          </Container>
        </Section>
      )}
      
      {/* Contact Section */}
      <Section variant="cta">
        <Container size="md">
          <h2 className="heading-md mb-6">Interested in working together?</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
            Feel free to reach out if you&apos;d like to collaborate or learn more about my work
          </p>
          <Button 
            href={`mailto:${teamMember ? teamMember.name.toLowerCase().replace(/\s+/g, '.') : username}@valyriastudios.com`} 
            variant="white"
          >
            Contact Me
          </Button>
        </Container>
      </Section>
    </>
  );
}