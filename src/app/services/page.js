// src/app/services/page.js
export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container-2xl text-center">
          <h1 className="heading-xl mb-6">Our Services</h1>
          <p className="text-body-lg max-w-2xl mx-auto">
            A different approach to software development
          </p>
        </div>
      </section>
      
      {/* Subscription Model */}
      <section className="section-white">
        <div className="container-2xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-md mb-8">Our Subscription Model</h2>
            
            <p className="text-body-lg mb-4">
              At Valyria we operate a little differently
            </p>
            
            <p className="text-body-lg mb-4">
              Instead of charging per-hour or using a half-upfront-half-at-completion fee structure
            </p>
            
            <p className="text-body-lg mb-4">
              We offer a monthly subscription service
            </p>
          </div>
          
          <div className="grid-3-cols">
            {/* Base Plan */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover-scale">
              <div className="p-8">
                <h3 className="heading-xs mb-4">Base</h3>
                <div className="text-4xl font-bold mb-6">$10,000<span className="text-lg font-normal text-gray-600">/month</span></div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>End-to-end service</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Design and development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Great application delivery</span>
                  </li>
                </ul>
                
                <a href="mailto:contact@valyriastudios.com" className="btn btn-primary block w-full text-center">
                  Contact Us
                </a>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div className="border-2 border-black rounded-lg overflow-hidden shadow-lg hover-scale relative">
              <div className="bg-black text-white text-center py-2 text-sm font-medium">
                MOST POPULAR
              </div>
              <div className="p-8">
                <h3 className="heading-xs mb-4">Premium</h3>
                <div className="text-4xl font-bold mb-6">$15,000<span className="text-lg font-normal text-gray-600">/month</span></div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Everything in Base plan</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Customer interviews</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Figma prototype for demos</span>
                  </li>
                </ul>
                
                <a href="mailto:contact@valyriastudios.com" className="btn btn-primary block w-full text-center">
                  Contact Us
                </a>
              </div>
            </div>
            
            {/* Advanced Plan */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover-scale">
              <div className="p-8">
                <h3 className="heading-xs mb-4">Advanced</h3>
                <div className="text-4xl font-bold mb-6">$20,000<span className="text-lg font-normal text-gray-600">/month</span></div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Everything in Premium plan</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Machine learning expertise</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Training models from scratch</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>AI integration into your product</span>
                  </li>
                </ul>
                
                <a href="mailto:contact@valyriastudios.com" className="btn btn-primary block w-full text-center">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="section-gray">
        <div className="container-2xl">
          <h2 className="heading-md mb-12 text-center">How It Works</h2>
          
          <div className="grid-3-cols">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-xl font-bold mb-4">1</div>
              <h3 className="heading-xs mb-3">Initial Consultation</h3>
              <p className="text-caption">
                We start by understanding your vision, goals, and requirements to create a tailored plan.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-xl font-bold mb-4">2</div>
              <h3 className="heading-xs mb-3">Design & Development</h3>
              <p className="text-caption">
                Our team of designers and student developers work together to bring your vision to life.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-xl font-bold mb-4">3</div>
              <h3 className="heading-xs mb-3">Continuous Iteration</h3>
              <p className="text-caption">
                We deliver regular updates and iterations, ensuring your application evolves with your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="section-white">
        <div className="container-md">
          <h2 className="heading-md mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="heading-xs mb-3">Why a subscription model?</h3>
              <p className="text-caption">
                Our subscription model aligns our incentives with yours. Instead of rushing to complete work to move on to the next project, we&apos;re invested in your long-term success, providing continuous improvements and support.
              </p>
            </div>
            
            <div>
              <h3 className="heading-xs mb-3">Who will be working on my project?</h3>
              <p className="text-caption">
                Your project will be built by a team of talented student developers under the guidance of experienced professionals. This unique structure allows us to deliver high-quality work while providing valuable experience to emerging talent.
              </p>
            </div>
            
            <div>
              <h3 className="heading-xs mb-3">What if I need to cancel?</h3>
              <p className="text-caption">
                We understand that needs change. Our subscriptions are flexible, and you can cancel with a 30-day notice. We&apos;ll ensure a smooth transition and provide you with all project assets and documentation.
              </p>
            </div>
            
            <div>
              <h3 className="heading-xs mb-3">Do you offer custom packages?</h3>
              <p className="text-caption">
                Yes, we understand that every project is unique. Contact us to discuss your specific needs, and we&apos;ll create a custom package that works for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-cta">
        <div className="container-md">
          <h2 className="heading-md mb-6">Ready to get started?</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
            Let&apos;s build something amazing together. Contact us today to discuss your project.
          </p>
          <a 
            href="mailto:contact@valyriastudios.com" 
            className="btn btn-white"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}