import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Lead Product Manager - Messaging Platform Evolution",
      company: "Ford Motor Company (Fortune 100 Automaker)",
      period: "Mar 2023 - Present (18+ months)",
      description: "Owned the evolution of a legacy messaging stack into an intelligent, real-time platform across consumer mobile app and in-vehicle surfaces at 14M+ scale. Introduced AI-powered recommendation system, modernized pipelines, and enabled self-serve tools for teams to ship fewer, more helpful messages with clear impact metrics.",
      achievements: [
        "Engagement: Increased message opens from ~14% to ~18% (+4 percentage points)",
        "Fatigue Reduction: Decreased opt-outs by ~12%; increased high-priority message mix to ~55%",
        "Business Impact: Boosted targeted renewal flows by ~10%",
        "Operational Efficiency: 35% faster time-to-publish, 50% fewer revisions needed",
        "Reliability: Achieved 0 P1 incidents post-launch across the entire platform",
        "Built AI-powered recommendation system with learning-to-rank algorithms for message prioritization",
        "Implemented real-time events, cross-channel suppression, and NPIR-based trust measurement",
        "Created self-serve content system with templates, workflow automation, and analytics-driven optimization"
      ]
    },
    {
      title: "Senior Product Manager - Customer Digital Account",
      company: "Ford Motor Company",
      period: "Aug 2021 - Jun 2024",
      description: "Empowered Ford/Lincoln Way customers with seamless onboarding experience, personalization, and management of smart vehicles across all digital touchpoints.",
      achievements: [
        "Led teams to build scalable API solutions integrating across multiple platforms",
        "Drove customer engagement and retention through innovative app/web features",
        "Led 3rd party partnerships with Google, Amazon, and other tech giants"
      ]
    },
    {
      title: "Senior Product Manager - Enterprise, B2B, B2C",
      company: "ServiceLink",
      period: "Nov 2019 - Aug 2021",
      description: "Drove successful product launches and led A/B tests & KPI settings across enterprise, B2B, and B2C products in the real estate technology space.",
      achievements: [
        "Led and mentored multiple product quads in Agile environment",
        "Collaborated with engineering, portfolio and design teams for optimal product experience",
        "Owned product roadmap and rapid iteration for all applications"
      ]
    },
    {
      title: "Product Data Analyst - Telecommunications",
      company: "Wipro Limited",
      period: "Mar 2013 - Mar 2016",
      description: "Analyzed customer data and billing systems for telecommunications clients, focusing on customer analytics and data migration projects.",
      achievements: [
        "Increased client profits by 15% using Customer Analytics to predict late payment segments",
        "Led data migration for 160K+ customers across all segments and products",
        "Implemented predictive models for customer behavior analysis"
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