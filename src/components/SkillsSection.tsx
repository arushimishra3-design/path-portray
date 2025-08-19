import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: [
        "Product Strategy",
        "Roadmapping", 
        "Agile/Scrum",
        "A/B Testing",
      ]
    },
    {
      title: "AI & Personalization", 
      skills: [
        "AI-Powered Features",
        "Personalization",
        "Predictive Analytics", 
        "Customer Segmentation",
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        "Data Analytics",
        "KPI Management",
        "Customer Analytics",
        "Business Intelligence",
      ]
    }
  ];

  const toolCategories = [
    {
      category: "Vertex AI",
      tools: ["LLMs", "Document AI", "Embeddings", "Pipelines"]
    },
    {
      category: "GCP",
      tools: ["BigQuery (incl. vector search)", "Pub/Sub", "Cloud Run", "Cloud Storage"]
    },
    {
      category: "Data & Analytics",
      tools: ["SQL (BigQuery)", "Python", "Amplitude (funnels, cohorts, A/B testing)"]
    },
    {
      category: "Experimentation",
      tools: ["A/B tests", "Holdouts", "Online metrics", "Offline model evaluation"]
    },
    {
      category: "Messaging & APIs",
      tools: ["Push", "In-app", "Email", "SMS", "REST APIs", "Webhooks", "Event-driven design"]
    },
    {
      category: "Privacy & Trust",
      tools: ["Consent and preference management", "GDPR/CCPA compliance"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Product management skills and technical competencies
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors duration-200">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="px-3 py-2 bg-muted/30 rounded-md text-center"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-center text-primary">
                Technologies & Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {toolCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-medium hover:bg-accent/20 transition-colors duration-200 cursor-default"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;