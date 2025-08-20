import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 h-12 bg-muted/50 p-1 rounded-lg">
              <TabsTrigger 
                value="skills" 
                className="font-semibold text-sm hover:bg-background/80 hover:text-primary cursor-pointer transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
              >
                Skills & Expertise
              </TabsTrigger>
              <TabsTrigger 
                value="tools" 
                className="font-semibold text-sm hover:bg-background/80 hover:text-primary cursor-pointer transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
              >
                Technologies & Tools
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="skills" className="mt-0">
              <div className="grid md:grid-cols-3 gap-3">
                {skillCategories.map((category, index) => (
                  <div key={index} className="bg-card border rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-primary mb-2">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-0">
              <div className="grid md:grid-cols-3 gap-3">
                {toolCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-card border rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-primary mb-2">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {category.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex} 
                          className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;