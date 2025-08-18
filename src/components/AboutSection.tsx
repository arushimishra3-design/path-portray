import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "15+", label: "Product Launches" },
    { number: "160K+", label: "Users Impacted" },
    { number: "15%", label: "Profit Increase" },
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
              Passionate about creating digital solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                I'm a passionate Product Leader with 8+ years of experience driving innovation 
                in AI-powered experiences and personalization. Currently at Ford Motor Company, 
                I lead the vision and roadmap for intelligent, customer-first messaging across 
                FordPass mobile and In-Vehicle platforms.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                My expertise spans product strategy, data analytics, and cross-functional 
                leadership. I've successfully increased customer engagement, drove 15% profit 
                increases through analytics, and mentored product teams while building scalable 
                platforms that serve hundreds of thousands of users.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Product Management", "AI & Personalization", "Data Analytics", "Strategy", "Agile", "Customer Experience"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;