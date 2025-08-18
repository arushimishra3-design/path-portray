import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovation Corp",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 60%.",
      achievements: [
        "Architected microservices handling 1M+ daily requests",
        "Led team of 5 developers on enterprise projects",
        "Improved application performance by 40%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with UX/UI teams to create intuitive user interfaces. Specialized in React ecosystem and modern CSS frameworks.",
      achievements: [
        "Built 15+ responsive web applications",
        "Reduced page load times by 50%",
        "Implemented automated testing suite"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description: "Started my professional journey building dynamic websites and learning modern development practices. Gained experience with full-stack development and agile methodologies.",
      achievements: [
        "Delivered 20+ client projects on time",
        "Learned React, Node.js, and database design",
        "Contributed to open-source projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              My professional journey and key achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-200">
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-foreground mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;