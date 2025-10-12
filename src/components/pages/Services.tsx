import { Link } from "react-router-dom";
import SEOHead from "../seo/SEOHead";
import { createServiceSchema, createBreadcrumbSchema } from "../seo/schemas";

const Services = () => {
  const serviceSchema = createServiceSchema(
    "IT Services & Solutions",
    "Comprehensive IT services including Cloud Migration, Networking, Web Design & Development, and IT Automation by Afghankar. Transform your business with our expert solutions.",
    "https://afghankar.com/services"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://afghankar.com" },
    { name: "Services", url: "https://afghankar.com/services" }
  ]);

  return (
    <>
      <SEOHead
        title="IT Services & Solutions - Afghankar"
        description="Comprehensive IT services including Cloud Migration, Networking, Web Design & Development, and IT Automation by Afghankar. Transform your business with our expert solutions."
        keywords="IT services, cloud migration, networking, web development, IT automation, digital transformation, business solutions, technology consulting"
        canonical="https://afghankar.com/services"
        schema={[serviceSchema, breadcrumbSchema]}
      />
      <main className="min-h-screen bg-[#0A0A0A] text-[#e7e7e7]">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#0A0A0A] to-[#1A1A1A]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-[#3b82f6]/20 to-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-[#8B5CF6]/15 to-[#3b82f6]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-[#3b82f6]/10 to-[#8B5CF6]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6]/40 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#8B5CF6]/50 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#3b82f6]/30 rounded-full animate-ping delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 md:mb-10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              🚀 Complete IT Solutions
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#e7e7e7] mb-3 sm:mb-4 leading-tight">
              Transform Your Business With 
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Expert IT Services
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              From cloud migration to network infrastructure, web development to IT automation - we provide comprehensive technology solutions that drive your business forward.
            </p>
            
            <div className="flex justify-center mt-8 sm:mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#e7e7e7] bg-[#3B82F6] border border-[#3B82F6] rounded-xl transition-all duration-300 hover:bg-[#2563eb] hover:border-[#2563eb] hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
                Services
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  Complete IT Solutions for Modern Business
                </span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                We provide end-to-end IT services that cover every aspect of your digital transformation journey. From infrastructure to applications, our expert team delivers solutions that scale with your business.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Cloud Migration",
                  emoji: "☁️",
                  description: "Seamless cloud transformation",
                  technologies: "AWS, Azure, Google Cloud, Hybrid Cloud, Data Migration, Cloud Security, Cost Optimization"
                },
                {
                  title: "Networking & Infrastructure",
                  emoji: "🌐",
                  description: "Robust network foundations",
                  technologies: "Network Design, Security Implementation, VPN Setup, Firewall Configuration, Network Monitoring, Wireless Solutions"
                },
                {
                  title: "Web Design & Development",
                  emoji: "🎨",
                  description: "Beautiful digital experiences",
                  technologies: "React, Angular, Vue.js, Node.js, PHP Laravel, .NET, Mobile Apps, E-commerce Solutions"
                },
                {
                  title: "IT Automation",
                  emoji: "🤖",
                  description: "Streamlined operations",
                  technologies: "Process Automation, Workflow Optimization, API Integration, System Integration, DevOps, CI/CD Pipelines"
                },
                {
                  title: "Back-end Development",
                  emoji: "⚙️",
                  description: "Powerful server-side solutions",
                  technologies: ".NET, PHP Laravel, Python, Java, NodeJS, Database Design, API Development"
                },
                {
                  title: "Full-Stack Development",
                  emoji: "🚀",
                  description: "Complete digital solutions",
                  technologies: "PHP Laravel + VueJS, NodeJS + React, .NET + Angular, .NET + React, Mobile Development, Cross-platform Apps"
                },
                {
                  title: "DevOps & Cloud",
                  emoji: "☁️",
                  description: "Efficient deployment & scaling",
                  technologies: "AWS, Azure, Google Cloud, Docker, Kubernetes, GitLab, CI/CD, Infrastructure as Code"
                },
                {
                  title: "AI & Machine Learning",
                  emoji: "🤖",
                  description: "Intelligent automation",
                  technologies: "NLP, Image Processing, Machine Learning, AI Integration, Data Analytics, Predictive Modeling"
                },
                {
                  title: "Quality Assurance",
                  emoji: "🔍",
                  description: "Reliable software testing",
                  technologies: "Cypress, Selenium, Playwright, Automated Testing, Performance Testing, Security Testing"
                },
                {
                  title: "UI/UX Design",
                  emoji: "✨",
                  description: "User-centered design",
                  technologies: "Figma, Adobe XD, Sketch, User Research, Prototyping, Design Systems, Accessibility"
                },
                {
                  title: "Mobile Development",
                  emoji: "📱",
                  description: "Native & cross-platform apps",
                  technologies: "iOS, Android, Flutter, React Native, .NET MAUI, Progressive Web Apps"
                },
                {
                  title: "Project Management",
                  emoji: "📋",
                  description: "Agile project delivery",
                  technologies: "Scrum, Agile, Jira, Azure DevOps, MS Project, Team Leadership, Stakeholder Management"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.emoji}
                  </div>
                  
                  {/* Header */}
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e7e7e7] mb-2 group-hover:text-[#3b82f6] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#e7e7e7]/70 mb-3 sm:mb-4">
                      {service.description}
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full"></div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <p className="text-[#e7e7e7] text-xs sm:text-sm leading-relaxed opacity-90">
                      {service.technologies}
                    </p>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
                🔄 Our Process
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#8B5CF6] to-[#3b82f6] bg-clip-text text-transparent">
                  How We Deliver Excellence
                </span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7] max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                We follow a proven methodology that ensures your project is delivered on time, within budget, and exceeds your expectations. Every step is designed to maximize value and minimize risk.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    title: "Discovery & Planning",
                    description: "Understanding your business goals and technical requirements through comprehensive analysis",
                    icon: "🔍"
                  },
                  {
                    title: "Design & Architecture",
                    description: "Creating scalable solutions with modern design principles and best practices",
                    icon: "🎨"
                  },
                  {
                    title: "Development & Implementation",
                    description: "Building robust solutions with agile development and continuous integration",
                    icon: "⚡"
                  },
                  {
                    title: "Deployment & Support",
                    description: "Launching your solution and providing ongoing maintenance and optimization",
                    icon: "🚀"
                  }
                ].map((process, index) => (
                  <div
                    key={index}
                    className="text-center group relative bg-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#1A1A1A] hover:border-[#3b82f6]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/10"
                  >
                    <div className="relative mb-6">
                      <div className="w-10 h-10 mx-auto bg-gradient-to-br from-[#3b82f6] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {process.icon}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#e7e7e7] group-hover:text-[#3b82f6] transition-colors duration-300">
                      {process.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#e7e7e7]/70 leading-relaxed">
                      {process.description}
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full mx-auto mt-4 sm:mt-6"></div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-[#3b82f6]/10 to-[#8B5CF6]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e7e7e7] mb-6 sm:mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e7e7e7]/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Let's discuss how our IT services can help you achieve your business goals. Get a free consultation and discover the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#e7e7e7] bg-[#3B82F6] border border-[#3B82F6] rounded-xl transition-all duration-300 hover:bg-[#2563eb] hover:border-[#2563eb] hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#e7e7e7] border border-[#3B82F6]/50 rounded-xl transition-all duration-300 hover:bg-[#3B82F6]/10 hover:border-[#3B82F6] hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
    </>
  );
};

export default Services;
