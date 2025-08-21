import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "14M+", label: "Customers Impacted" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              About Me  
            </h2>
            <div className="mb-8">
              <div className="flex flex-wrap justify-center items-center gap-1 text-2xl md:text-3xl font-light">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-fade-in hover-scale cursor-default" style={{ animationDelay: '0.1s' }}>
                  Curious
                </span>
                <span className="text-primary/60 animate-fade-in" style={{ animationDelay: '0.2s' }}>.</span>
                <span className="bg-gradient-to-r from-primary/80 to-accent bg-clip-text text-transparent animate-fade-in hover-scale cursor-default" style={{ animationDelay: '0.3s' }}>
                  Thoughtful
                </span>
                <span className="text-primary/60 animate-fade-in" style={{ animationDelay: '0.4s' }}>.</span>
                <span className="bg-gradient-to-r from-accent to-primary/90 bg-clip-text text-transparent animate-fade-in hover-scale cursor-default" style={{ animationDelay: '0.5s' }}>
                  Relentless
                </span>
              </div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Stats Grid - Moved to top for better visual hierarchy */}
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="text-center p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Introduction */}
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <p className="text-xl leading-relaxed text-foreground text-justify">
                As a kid, I kept asking why things felt clunky, then sketched a simpler way. That habit became my product compass: start with one person, one moment, one job to be done.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground text-justify">
                Today I build customer-centered products. I led intelligent, cross-channel messaging for a Fortune 100 organization across mobile, web, and embedded surfaces. I pair platform strategy with polished front ends across B2B and B2C: effortless onboarding, recommendation systems that surface what matters, and document intelligence that turns noise into data.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground text-justify">
                I listen hard, test fast, measure honestly, and ship what helps. If it doesn't reduce friction or increase relevance, it waits. That's how teams move with clarity and how products earn trust—one useful moment at a time.
              </p>
            </div>

            {/* Core Strengths */}
            <div className="max-w-4xl mx-auto">
              <div className="p-4 md:p-8 bg-gradient-to-r from-background via-accent/5 to-background border-l-4 border-primary rounded-r-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6 text-center">Core Strengths</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "Product Strategy",
                    "Product Execution",
                    "AI & Personalization", 
                    "Data-Driven Decisions",
                    "Customer Empathy"
                  ].map((strength, index) => (
                    <span 
                      key={strength}
                      className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs md:text-sm font-medium hover-scale animate-fade-in whitespace-nowrap"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;