import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
    { number: "100%", label: "Success Rate" },
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
                I'm a dedicated full-stack developer with over 5 years of experience 
                building scalable web applications and user-centered digital experiences. 
                My journey in tech started with a fascination for problem-solving and 
                has evolved into a passion for crafting elegant solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                I specialize in modern JavaScript frameworks, cloud technologies, 
                and responsive design. When I'm not coding, you'll find me exploring 
                new technologies, contributing to open-source projects, or mentoring 
                aspiring developers.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {tech}
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