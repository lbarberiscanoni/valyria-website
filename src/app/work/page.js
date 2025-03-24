// src/app/work/page.js
import Link from 'next/link';
import projectsData from "@/app/data/projects.json";

export default function Work() {
  const { projects } = projectsData;

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container-2xl">
          <h1 className="heading-xl mb-6">Our Work</h1>
          <p className="text-body-lg max-w-2xl">
            Showcasing the innovative projects built by our talented student developers under expert guidance
          </p>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="section-white">
        <div className="container-2xl">
          {projects.map((project, index) => {
            const slug = project.developer.toLowerCase().replace(/\s+/g, "-");
            
            return (
              <div key={index} className="mb-24 last:mb-0">
                <div className="grid-2-cols">
                  {/* Project Image/Placeholder */}
                  <div className="bg-gray-100 h-80 flex-center">
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
                        <a 
                          href={project["project-url"]} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          View Live Project
                        </a>
                      )}
                      
                      {project["repo-link"] && (
                        <a 
                          href={project["repo-link"]} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                        >
                          GitHub Repository
                        </a>
                      )}
                      
                      {project["video-url"] && (
                        <a 
                          href={project["video-url"]} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                        >
                          Watch Demo
                        </a>
                      )}
                      
                      <Link 
                        href={`/${slug}`}
                        className="btn btn-secondary"
                      >
                        Developer&apos;s Portfolio
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-cta">
        <div className="container-md">
          <h2 className="heading-md mb-6">Have a project in mind?</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
            Let our team of talented student developers bring your vision to life
          </p>
          <Link 
            href="/services" 
            className="btn btn-white"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </>
  );
}