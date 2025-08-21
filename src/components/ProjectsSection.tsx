
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Ford Messaging Platform Evolution",
      description: "Owned the evolution of a legacy messaging stack into an intelligent, real-time platform across consumer mobile app and in-vehicle surfaces at 14M+ scale. Introduced AI-powered recommendation system, modernized pipelines, and enabled self-serve tools.",
      detailedDescription: "Led the transformation of Ford's legacy messaging infrastructure into an intelligent, real-time platform serving 14M+ customers across FordPass mobile and in-vehicle surfaces. Core challenge: Over-messaging, low relevance, and eroding trust. Shipped MVP in 6 months, then scaled through successive waves to harden the platform, add intelligence, and expand use cases across regions. Built foundations with eligibility rules and cross-channel suppression, real-time events and triggers. Implemented intelligence layer with AI-powered recommendation system featuring scoring for predicted positive interaction and learning-to-rank algorithms to order messages by urgency, value, and fatigue. Established trust & measurement framework with NPIR as north star, plus consent/opt-out automation with auditability across regions. Created self-serve content system with templates, workflow, versioning, and rollbacks, plus analytics to prune low performers.",
      impact: "Engagement: opens improved from ~14% to ~18% (+4 pts). Fatigue: opt-outs decreased ~12%, high-priority mix reached ~55%. Renewals: targeted flows increased ~10%. Velocity: time-to-publish ~35% faster, revisions ~50% fewer. Reliability: 0 P1 incidents post-launch.",
      challenges: "Unifying fragmented data into real-time signals at scale; balancing personalization with regional privacy requirements; aligning 10+ stakeholder teams on shared prioritization model and KPI stack.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
      technologies: ["AI/ML Decisioning", "Recommendation Systems", "Personalization", "Real-time Messaging", "Mobile & In-Vehicle Platforms", "Experimentation & Analytics", "Privacy/Consent Automation", "Platform Strategy"],
      duration: "18 months",
      role: "Lead Product Manager"
    },
    {
      title: "Customer Digital Account Experience",
      description: "Empowered Ford/Lincoln customers with seamless onboarding, personalization, and smart vehicle management across all digital touchpoints, serving millions of users.",
      detailedDescription: "Redesigned and launched Ford's comprehensive digital account experience serving over 8 million active users. The project involved creating a unified customer journey from initial onboarding through advanced vehicle management features. I led cross-functional teams to implement personalized dashboards, streamlined account setup processes, and intelligent vehicle connectivity features. The platform integrated with Ford's entire ecosystem including dealerships, service centers, and mobile applications.",
      impact: "Reduced onboarding time by 50%, increased feature adoption by 35%, and achieved 4.8/5 customer satisfaction rating.",
      challenges: "Legacy system integration, coordinating across 15+ teams, and maintaining consistent experience across web and mobile platforms.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80",
      technologies: ["Product Strategy", "API Integration", "Customer Experience", "Cross-platform", "Agile"],
      duration: "24 months",
      role: "Senior Product Manager"
    },
    {
      title: "Enterprise B2B/B2C Platform",
      description: "Drove successful product launches for ServiceLink's enterprise platform, leading A/B tests and implementing KPI frameworks that improved conversion rates across multiple user segments.",
      detailedDescription: "Led the product strategy and execution for ServiceLink's flagship B2B/B2C platform serving enterprise clients in the real estate and financial services sectors. Implemented comprehensive A/B testing framework, developed data-driven KPI measurement systems, and orchestrated product launches across multiple market segments. The platform handled complex workflows for loan processing, title services, and regulatory compliance while maintaining high performance and user satisfaction.",
      impact: "Improved conversion rates by 28%, reduced processing time by 45%, and increased client retention by 22%.",
      challenges: "Complex regulatory requirements, diverse user needs across B2B and B2C segments, and integration with legacy enterprise systems.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["Product Management", "A/B Testing", "Enterprise Solutions", "KPI Management", "Prototyping"],
      duration: "15 months",
      role: "Product Manager"
    },
    {
      title: "Customer Analytics Platform",
      description: "Increased client profits by 15% using advanced Customer Analytics to predict customer segments and behavior patterns for telecommunications industry clients.",
      detailedDescription: "Built and launched a comprehensive customer analytics platform for telecommunications industry clients, leveraging advanced machine learning algorithms to predict customer behavior and segment users effectively. The platform processed millions of data points daily to generate actionable insights, churn prediction models, and personalized marketing recommendations. Worked closely with data science teams to translate complex analytics into user-friendly dashboards and automated reporting systems.",
      impact: "Generated $2M+ additional revenue for clients, reduced customer churn by 18%, and improved marketing campaign ROI by 32%.",
      challenges: "Handling massive datasets, ensuring real-time analytics performance, and creating intuitive interfaces for non-technical users.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Data Analytics", "Predictive Modeling", "Customer Segmentation", "Business Intelligence", "ROI Optimization"],
      duration: "12 months",
      role: "Product Analyst"
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
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden cursor-pointer">
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
                      
                      <div className="pt-2">
                        <Button 
                          variant="default" 
                          size="sm"
                          className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                        >
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-primary mb-2">
                      {project.title}
                    </DialogTitle>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                      <span><strong>Role:</strong> {project.role}</span>
                      <span><strong>Duration:</strong> {project.duration}</span>
                    </div>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">Project Overview</h4>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        {project.detailedDescription}
                      </p>
                    </div>

                    {project.title === "Ford Messaging Platform Evolution" && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Situation</h4>
                        <p className="text-muted-foreground leading-relaxed text-justify">
                          <strong>Core problem:</strong> Over-messaging, low relevance, and eroding trust.<br/>
                          <strong>Task & timeline:</strong> Ship an MVP in ~6 months, then scale through successive waves over the following year to harden the platform, add intelligence, and expand use cases across regions.
                        </p>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">Key Impact</h4>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        {project.impact}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">Challenges Overcome</h4>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        {project.challenges}
                      </p>
                    </div>

                    {project.title === "Ford Messaging Platform Evolution" && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Forward Vision</h4>
                        <p className="text-muted-foreground leading-relaxed text-justify">
                          Personalization evolves from targeted to truly adaptive—one brain that knows when, where, and whether to speak to each customer. The platform leveled up the team with the tools and numbers to iterate weekly and align on what "good" means.
                        </p>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              More projects available upon request. Some details are limited due to confidentiality agreements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
