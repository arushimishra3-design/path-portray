import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Ford AI-Powered Messaging Platform",
      description: "Led development of Ford's next-gen AI-powered messaging infrastructure driving personalization, targeting, and timing precision across FordPass mobile and In-Vehicle platforms.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
      technologies: ["AI/ML", "Personalization", "Mobile Platforms", "Real-time Messaging", "Analytics"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Customer Digital Account Experience",
      description: "Empowered Ford/Lincoln customers with seamless onboarding, personalization, and smart vehicle management across all digital touchpoints, serving millions of users.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80",
      technologies: ["Product Strategy", "API Integration", "Customer Experience", "Cross-platform", "Agile"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Enterprise B2B/B2C Platform",
      description: "Drove successful product launches for ServiceLink's enterprise platform, leading A/B tests and implementing KPI frameworks that improved conversion rates across multiple user segments.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["Product Management", "A/B Testing", "Enterprise Solutions", "KPI Management", "Prototyping"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Customer Analytics Platform",
      description: "Increased client profits by 15% using advanced Customer Analytics to predict customer segments and behavior patterns for telecommunications industry clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Data Analytics", "Predictive Modeling", "Customer Segmentation", "Business Intelligence", "ROI Optimization"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Key product initiatives and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="flex-1 bg-gradient-hero hover:shadow-glow transition-all duration-300"
                    >
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;