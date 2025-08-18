import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "CSS/Tailwind", level: 88 },
        { name: "Vue.js", level: 75 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS/Cloud", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Git/GitHub", level: 95 },
        { name: "CI/CD", level: 78 },
      ]
    }
  ];

  const tools = [
    "React", "TypeScript", "Node.js", "Python", "AWS", "Docker", 
    "PostgreSQL", "MongoDB", "Git", "Figma", "VS Code", "Tailwind CSS"
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
              Technologies and tools I work with
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