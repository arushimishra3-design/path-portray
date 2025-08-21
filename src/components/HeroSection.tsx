import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workspace.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent">
            Hey, I am Arushi.
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Excited about problems, and even more hyped about solving them.
          </p>
          <p className="text-lg text-muted-foreground/80 mb-8">
            Carnegie Mellon • Stanford Alumni • (she/her)
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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