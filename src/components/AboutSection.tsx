import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "14M+", label: "Users Impacted" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              About Me  
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital solutions that make a real difference
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <p className="text-2xl font-semibold text-primary mb-6">
                Curious. Thoughtful. Relentless.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground text-justify">
                As a kid, I kept asking why things felt clunky, then sketched a simpler way. That habit became my product compass: start with one person, one moment, one job to be done.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground text-justify">
                Today I build customer-centered products. I led intelligent, cross-channel messaging for a Fortune 100 organization across mobile, web, and embedded surfaces. I pair platform strategy with polished front ends in B2B and B2C. Onboarding that makes setup effortless. Recommendation systems that surface what really matters. Document intelligence that turns messy files into clean, usable data.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground text-justify">
                I listen hard, test fast, measure honestly, and ship what helps. If it doesn't reduce friction or increase relevance, it waits. That's how teams move with clarity and how products earn trust—one useful moment at a time.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
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

            {/* Core Strengths */}
            <div className="max-w-4xl mx-auto">
              <div className="p-8 bg-gradient-to-r from-background via-accent/5 to-background border-l-4 border-primary rounded-r-xl">
                <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Core Strengths</h3>
                <div className="flex flex-nowrap gap-2 justify-center overflow-x-auto pb-2">
                  {[
                    "Product Strategy & Execution",
                    "AI & Personalization", 
                    "Data-Driven Decision Making",
                    "Customer Empathy"
                  ].map((strength, index) => (
                    <span 
                      key={strength}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover-scale animate-fade-in"
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