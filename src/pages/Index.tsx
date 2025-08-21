import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-6 text-center">
          {/* Social Icons */}
          <div className="flex justify-center space-x-8 mb-6">
            <a 
              href="https://www.linkedin.com/in/arushi-mishra/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:arushimishra3@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <div className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                {/* Space Needle base */}
                <path d="M8 20L16 20L16 18L8 18Z" />
                {/* Space Needle tower */}
                <path d="M11 18L13 18L13 8L11 8Z" />
                {/* Space Needle top structure */}
                <path d="M10 8L14 8L14 6L10 6Z" />
                {/* Space Needle observation deck */}
                <path d="M9 6L15 6L15 4L9 4Z" />
                {/* Space Needle antenna */}
                <path d="M11.5 4L12.5 4L12.5 2L11.5 2Z" />
                {/* Space Needle sphere */}
                <circle cx="12" cy="2" r="0.5" />
              </svg>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                Seattle, WA
                {/* Arrow pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
              </div>
            </div>
          </div>
          
          {/* Built with love text */}
          <p className="text-muted-foreground text-sm">
            Built with <span className="text-red-500">❤️</span> by Arushi Mishra
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
