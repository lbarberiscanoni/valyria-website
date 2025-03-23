// src/app/work/page.js
import Link from 'next/link';
import projectsData from "@/app/data/projects.json";

export default function Work() {
  const { projects } = projectsData;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
          <p className="text-xl max-w-2xl">
            Showcasing the innovative projects built by our talented student developers under expert guidance
          </p>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-24">
        <div className="container-custom">
          {projects.map((project, index) => {
            const slug = project.developer.toLowerCase().replace(/\s+/g, "-");
            
            return (
              <div key={index} className="mb-24 last:mb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Project Image/Placeholder */}
                  <div className="bg-gray-100 h-80 flex items-center justify-center">
                    <span className="text-2xl text-gray-500">{project.name}</span>
                  </div>
                  
                  {/* Project Details */}
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Client</p>
                        <p className="text-lg">{project.client}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Developer</p>
                        <Link href={`/${slug}`} className="text-lg hover:underline">
                          {project.developer}
                        </Link>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Designer</p>
                        <p className="text-lg">{project.designer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Year</p>
                        <p className="text-lg">2023</p>
                      </div>
                    </div>
                    
                    <p className="text-lg mb-8">
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
                      
                      <Link 
                        href={`/${slug}`}
                        className="btn border border-black hover:bg-black hover:text-white"
                      >
                        Developer's Portfolio
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
      <section className="py-24 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let our team of talented student developers bring your vision to life
          </p>
          <Link 
            href="/services" 
            className="btn bg-white text-black hover:bg-gray-200"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </>
  );
}