import { Button } from "@/components/ui/button";
import { GraduationCap, Sparkles } from "lucide-react";
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
          <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
            Arushi Mishra
          </h1>
          <p className="text-lg text-muted-foreground mb-6 font-medium">
            (she/her)
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Product Leader who turns data into delight.<br />
            <br />
            10+ years building intelligent experiences across startups and 14M+ user platforms.<br />
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold bg-gradient-hero bg-clip-text text-transparent">Carnegie Mellon</span>
              </div>
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full border border-accent/20">
                <GraduationCap className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold bg-gradient-accent bg-clip-text text-transparent">Stanford</span>
              </div>
            </div>
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