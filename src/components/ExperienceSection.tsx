import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Ford Motor Company",
      period: "2021 - Ongoing",
      positions: [
        {
          title: "Product Leader - Messaging and Personalization",
          period: "Mar 2023 - Present",
          description: "Leading the vision and roadmap for intelligent, customer-first messaging across FordPass mobile and IVI platforms, enabling scalable, real-time engagement across multiple channels.",
          achievements: [
            "Built Ford's next-gen AI-powered messaging infrastructure for personalization and targeting",
            "Delivered measurable business impact through increased CTR and conversion rates",
            "Championed customer trust through timely, relevant, and actionable messaging"
          ]
        },
        {
          title: "Senior Product Manager - Customer Digital Account",
          period: "Aug 2021 - Jun 2024",
          description: "Empowered Ford/Lincoln Way customers with seamless onboarding experience, personalization, and management of smart vehicles across all digital touchpoints.",
          achievements: [
            "Led teams to build scalable API solutions integrating across multiple platforms",
            "Drove customer engagement and retention through innovative app/web features",
            "Led 3rd party partnerships with Google, Amazon, and other tech giants"
          ]
        }
      ]
    },
    {
      company: "ServiceLink",
      period: "2017 - 2021",
      positions: [
        {
          title: "Senior Product Manager - Enterprise, B2B, B2C",
          period: "Nov 2019 - Aug 2021",
          description: "Drove successful product launches and led A/B tests & KPI settings across enterprise, B2B, and B2C products in the real estate technology space.",
          achievements: [
            "Led and mentored multiple product quads in Agile environment",
            "Collaborated with engineering, portfolio and design teams for optimal product experience",
            "Owned product roadmap and rapid iteration for all applications"
          ]
        },
        {
          title: "Product Manager",
          period: "2017 - 2019",
          description: "Managed product development and strategy for enterprise solutions in the real estate technology space.",
          achievements: [
            "Developed and executed product roadmaps for enterprise clients",
            "Collaborated with cross-functional teams to deliver high-quality products",
            "Analyzed market trends and customer feedback to inform product decisions"
          ]
        },
        {
          title: "Strategy and Operations Research Analyst",
          period: "2017 - 2018",
          description: "Conducted research and analysis to support strategic decision-making and operational improvements.",
          achievements: [
            "Analyzed market data and competitive landscape to inform business strategy",
            "Developed operational metrics and KPIs for performance tracking",
            "Supported strategic initiatives through data-driven insights and recommendations"
          ]
        }
      ]
    },
    {
      company: "Wipro Technologies",
      period: "2013 - 2016",
      positions: [
        {
          title: "Product Data Analyst - Telecommunications",
          period: "Mar 2013 - Mar 2016",
          description: "Analyzed customer data and billing systems for telecommunications clients, focusing on customer analytics and data migration projects.",
          achievements: [
            "Increased client profits by 15% using Customer Analytics to predict late payment segments",
            "Led data migration for 160K+ customers across all segments and products",
            "Implemented predictive models for customer behavior analysis"
          ]
        }
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
              My professional journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted-foreground"></div>
            
            <div className="space-y-12">
              {experiences.map((company, companyIndex) => (
                <div key={companyIndex} className="relative">
                  {/* Company timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  <div className="ml-16">
                    {/* Company header */}
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-border flex items-center justify-center overflow-hidden group relative">
                            {company.company === "Ford Motor Company" ? (
                              <a href="https://ford.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all duration-200 hover:scale-105 cursor-pointer">
                                <img src="/lovable-uploads/Ford.png" alt="Ford Motor Company" className="w-8 h-8 object-contain" />
                                <div className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                              </a>
                            ) : company.company === "ServiceLink" ? (
                              <a href="https://www.servicelink.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all duration-200 hover:scale-105 cursor-pointer">
                                <img src="/lovable-uploads/servicelink.png" alt="ServiceLink" className="w-8 h-8 object-contain" />
                                <div className="absolute inset-0 bg-green-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                              </a>
                            ) : company.company === "Wipro Technologies" ? (
                              <a href="https://www.wipro.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all duration-200 hover:scale-105 cursor-pointer">
                                <img src="/lovable-uploads/wipro.png" alt="Wipro Technologies" className="w-8 h-8 object-contain" />
                                <div className="absolute inset-0 bg-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                              </a>
                            ) : (
                              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                                <span className="text-white font-bold text-sm">C</span>
                              </div>
                            )}
                            {/* Clickable indicator */}
                            <div className="absolute top-1 right-1 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-primary">{company.company}</h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            {company.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              {company.period === "2021 - Ongoing" ? (
                                // 3.75+ years - 3 full dots + 1 partial dot
                                <>
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                                </>
                              ) : company.period === "2017 - 2021" ? (
                                // 4 years - 4 full dots
                                <>
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                </>
                              ) : company.period === "2013 - 2016" ? (
                                // 3 years - 3 full dots
                                <>
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                </>
                              ) : null}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {company.period === "2021 - Ongoing" ? "3.75+ years" : 
                               company.period === "2017 - 2021" ? "4 years" : 
                               company.period === "2013 - 2016" ? "3 years" : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Positions */}
                    <div className="space-y-6">
                      {company.positions.map((position, positionIndex) => (
                        <Card 
                          key={positionIndex} 
                          className="shadow-soft hover:shadow-medium transition-all duration-300 group border-l-4 border-l-primary/20 hover:border-l-primary/40"
                        >
                          <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div>
                                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-200">
                                  {position.title}
                                </CardTitle>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                                    {position.period}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {position.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;