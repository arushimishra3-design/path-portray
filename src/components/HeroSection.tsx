import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workspace.jpg";
import lighterBackgroundPhoto from "@/assets/arushi-lighter-background.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Account for fixed navigation
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    } else {
      console.warn(`Element with id "${sectionId}" not found`);
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional workspace" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent">
              Hey, I am Arushi.
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-medium">
              I read the bumps in the journey so users don't have to.
            </p>
            <p className="text-lg text-muted-foreground/80 mb-8">
              Carnegie Mellon • Stanford Alumni • (she/her)
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                variant="default"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-hero hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 lg:order-last">
            <div className="relative animate-fade-in">
              <img 
                src={lighterBackgroundPhoto} 
                alt="Arushi Mishra - Product Leader" 
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-elegant border-4 border-primary/10 hover:shadow-glow transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Floating Animation Element */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-accent rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-32 left-10 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;