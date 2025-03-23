// src/app/page.js
import projectsData from "@/app/data/projects.json";
import Link from "next/link";

export default function Home() {
  const { projects } = projectsData;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We build software.
            <br />
            We build careers.
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            A software studio providing real-world experience to student developers while delivering exceptional products for our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="btn bg-white text-black hover:bg-gray-200">
              Our Services
            </Link>
            <Link href="/work" className="btn border border-white hover:bg-white hover:text-black">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12">Our Unique Approach</h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-12">
            Valyria is a software studio that grew out of a collaboration between{" "}
            <a 
              href="https://www.linkedin.com/in/lorenzo-barberis-canonico-612734aa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black font-medium border-b border-black hover:border-b-2"
            >
              Lorenzo Barberis Canonico
            </a>{" "}
            and{" "}
            <a 
              href="https://www.linkedin.com/in/ychen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black font-medium border-b border-black hover:border-b-2"
            >
              Yan Chen
            </a>
            , and it has a unique mission: to turn the contract work opportunities that come our way 
            into part-time jobs and real-world experience to college students studying computer science, {" "}
            <a 
              href="https://www.loom.com/share/d17221546a8d417b96f3192bc606d8da?sid=04a27fe3-5a42-4168-b93d-32437f5f20fd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black font-medium border-b border-black hover:border-b-2"
            >
              many of whom Lorenzo has previously coached in Speech & Debate.
            </a>
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const slug = project.developer.toLowerCase().replace(/\s+/g, "-");
              
              return (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    {/* Placeholder for project image */}
                    <span className="text-2xl text-gray-500">{project.name}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-medium">Client:</span> {project.client} • <span className="font-medium">Designer:</span> {project.designer}
                    </p>
                    
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-4">
                      <Link 
                        href={`/${slug}`} 
                        className="text-sm font-medium border-b border-black pb-px hover:border-b-2"
                      >
                        View details
                      </Link>
                      
                      {project["project-url"] && (
                        <a 
                          href={project["project-url"]} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm font-medium border-b border-black pb-px hover:border-b-2"
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
              className="inline-block btn bg-black text-white hover:bg-gray-800"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your idea to life?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Whether you need a complete software solution or expertise in machine learning, we have the team to deliver exceptional results.
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