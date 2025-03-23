// src/app/[username]/page.js
import Link from 'next/link';
import projectsData from "@/app/data/projects.json";

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
      <section className="bg-black text-white py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{displayName}</h1>
          <p className="text-xl">
            Student Developer at Valyria Studios
          </p>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto md:mx-0 flex-shrink-0"></div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">About {displayName}</h2>
              
              <p className="text-lg mb-6">
                {displayName} is a student developer at Valyria Studios, gaining real-world experience while contributing to client projects. 
                With a passion for technology and problem-solving, {displayName.split(' ')[0]} brings fresh perspectives and innovative solutions to every project.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="text-sm font-medium border-b border-black pb-px hover:border-b-2"
                >
                  GitHub Profile
                </a>
                <a 
                  href="#" 
                  className="text-sm font-medium border-b border-black pb-px hover:border-b-2"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      {userProjects.length > 0 ? (
        <section className="py-24 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            
            <div className="space-y-16">
              {userProjects.map((project, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Project Image/Placeholder - Alternate left and right */}
                  <div className={`bg-gray-200 h-80 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <span className="text-2xl text-gray-500">{project.name}</span>
                  </div>
                  
                  {/* Project Details */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Client</p>
                        <p>{project.client}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Designer</p>
                        <p>{project.designer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Role</p>
                        <p>Developer</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Year</p>
                        <p>2023</p>
                      </div>
                    </div>
                    
                    <p className="mb-8">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      {project["project-url"] && (
                        <a 
                          href={project["project-url"]} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn bg-black text-white hover:bg-gray-800"
                        >
                          View Live Project
                        </a>
                      )}
                      
                      {project["repo-link"] && (
                        <a 
                          href={project["repo-link"]} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn border border-black hover:bg-black hover:text-white"
                        >
                          GitHub Repository
                        </a>
                      )}
                      
                      {project["video-url"] && (
                        <a 
                          href={project["video-url"]} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn border border-black hover:bg-black hover:text-white"
                        >
                          Watch Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-24 bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <p className="text-lg">No projects found for {displayName}</p>
          </div>
        </section>
      )}
      
      {/* Skills Section */}
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">JavaScript/React</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-black h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">HTML/CSS</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-black h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Node.js</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-black h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
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
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
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
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-24 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Feel free to reach out if you&apos;d like to collaborate or learn more about my work
          </p>
          <a 
            href={`mailto:${username}@valyriastudios.com`} 
            className="btn bg-white text-black hover:bg-gray-200"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}