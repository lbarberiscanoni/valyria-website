// src/app/page.js
import projectsData from "@/app/data/projects.json";
import Link from "next/link";

export default function Home() {
  const { projects } = projectsData;

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container-2xl">
          <h1 className="heading-xl mb-6">
            We build software.
            <br />
            We build careers.
          </h1>
          <p className="text-body-lg max-w-2xl mb-8">
            A software studio providing real-world experience to student developers while delivering exceptional products for our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="btn btn-white">
              Our Services
            </Link>
            <Link href="/work" className="btn btn-secondary text-white border-white hover:text-black">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-white">
        <div className="container-2xl">
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
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-gray">
        <div className="container-2xl">
          <h2 className="heading-md mb-12">Featured Projects</h2>
          
          <div className="grid-3-cols">
            {projects.map((project, index) => {
              const slug = project.developer.toLowerCase().replace(/\s+/g, "-");
              
              return (
                <div key={index} className="card">
                  <div className="h-48 bg-gray-200 flex-center">
                    {/* Placeholder for project image */}
                    <span className="text-2xl text-gray-500">{project.name}</span>
                  </div>
                  
                  <div className="card-body">
                    <h3 className="card-title">{project.name}</h3>
                    
                    <p className="card-subtitle">
                      <span className="font-medium">Client:</span> {project.client} • <span className="font-medium">Designer:</span> {project.designer}
                    </p>
                    
                    <p className="text-body line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-4">
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/work" 
              className="btn btn-primary"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-cta">
        <div className="container-md">
          <h2 className="heading-md mb-6">Ready to bring your idea to life?</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
            Whether you need a complete software solution or expertise in machine learning, we have the team to deliver exceptional results.
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