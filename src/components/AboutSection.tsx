import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "15+", label: "Product Launches" },
    { number: "14M+", label: "Users Impacted" },
    { number: "+10pts", label: "Engagement Lift" },
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
              <p className="text-xl leading-relaxed text-foreground">
                I'm a Product Leader with 10+ years building AI-powered experiences. I've led intelligent, 
                cross-channel messaging for a Fortune 100 consumer platform across mobile, web and in-vehicle. 
                My experience spans platform strategy and front-end, customer-facing apps across both B2B and B2C.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground">
                Throughout my career, I've built and shipped contextual personalization, learning-to-rank 
                recommendations, and NLP document automation. I mentor PMs, shape roadmaps, 
                and turn ambiguity into systems that ship.
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
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    "Product strategy & execution",
                    "AI & Personalization", 
                    "Data-driven decision making",
                    "Crisp storytelling",
                    "Customer empathy"
                  ].map((strength, index) => (
                    <span 
                      key={strength}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover-scale animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
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