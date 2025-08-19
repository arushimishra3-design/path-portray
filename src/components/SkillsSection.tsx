import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: [
        { name: "Product Strategy", level: 95 },
        { name: "Roadmapping", level: 92 },
        { name: "Agile/Scrum", level: 90 },
        { name: "A/B Testing", level: 88 },
      ]
    },
    {
      title: "AI & Personalization",
      skills: [
        { name: "AI-Powered Features", level: 90 },
        { name: "Personalization", level: 92 },
        { name: "Predictive Analytics", level: 85 },
        { name: "Customer Segmentation", level: 88 },
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Data Analytics", level: 88 },
        { name: "KPI Management", level: 90 },
        { name: "Customer Analytics", level: 85 },
        { name: "Business Intelligence", level: 82 },
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
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
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