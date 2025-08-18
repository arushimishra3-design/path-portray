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

  const tools = [
    "Product Strategy", "AI/ML", "Data Analytics", "Agile", "Scrum", "Customer Experience", 
    "A/B Testing", "Personalization", "API Development", "Cross-functional Leadership", "KPI Management", "Strategic Planning"
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
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors duration-200 cursor-default"
                  >
                    {tool}
                  </span>
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