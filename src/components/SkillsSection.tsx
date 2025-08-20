import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: ["Product Strategy", "Roadmapping", "Agile/Scrum", "A/B Testing"]
    },
    {
      title: "AI & Personalization", 
      skills: ["AI-Powered Features", "Personalization", "Predictive Analytics", "Customer Segmentation"]
    },
    {
      title: "Data & Analytics",
      skills: ["Data Analytics", "KPI Management", "Customer Analytics", "Business Intelligence"]
    }
  ];

  const toolCategories = [
    {
      category: "Vertex AI",
      tools: ["LLMs", "Document AI", "Embeddings", "Pipelines"]
    },
    {
      category: "GCP",
      tools: ["BigQuery", "Pub/Sub", "Cloud Run", "Cloud Storage"]
    },
    {
      category: "Data & Analytics",
      tools: ["SQL", "Python", "Amplitude"]
    },
    {
      category: "Experimentation",
      tools: ["A/B tests", "Holdouts", "Online metrics", "Model evaluation"]
    },
    {
      category: "Messaging & APIs",
      tools: ["Push", "In-app", "Email", "SMS", "REST APIs", "Webhooks"]
    },
    {
      category: "Privacy & Trust",
      tools: ["Consent management", "GDPR/CCPA compliance"]
    }
  ];

  return (
    <section id="skills" className="py-12 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground">
              Product management expertise and technical competencies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills & Expertise */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                Skills & Expertise
              </h3>
              
              <div className="space-y-4">
                {skillCategories.map((category, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-primary">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technologies & Tools */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                Technologies & Tools
              </h3>
              
              <div className="space-y-4">
                {toolCategories.map((category, categoryIndex) => (
                  <Card key={categoryIndex} className="shadow-soft">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-primary">
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2">
                        {category.tools.map((tool, toolIndex) => (
                          <span 
                            key={toolIndex} 
                            className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;