import { Card, CardContent } from "@/components/ui/card";

const CareerJourneySection = () => {
  const journeySteps = [
    {
      year: "2008-2012",
      title: "Bachelor's in Computer Science",
      company: "MMMEC India",
      type: "education",
      icon: "🎓",
      description: "Foundation in computer science and engineering",
      color: "bg-indigo-500"
    },
    {
      year: "2013-2016",
      title: "Product Data Analyst",
      company: "Wipro Limited",
      type: "work",
      icon: "💼",
      description: "Started career in telecommunications analytics",
      color: "bg-blue-500"
    },
    {
      year: "2016-2017",
      title: "Master's Degree",
      company: "Carnegie Mellon University",
      type: "education",
      icon: "🎓",
      description: "Advanced studies in technology and innovation",
      color: "bg-purple-500"
    },
    {
      year: "2017-2021",
      title: "Senior Product Manager",
      company: "ServiceLink",
      type: "work",
      icon: "🏢",
      description: "Enterprise B2B/B2C product management",
      color: "bg-green-500"
    },
    {
      year: "2021-Present",
      title: "Senior Product Manager",
      company: "Ford Motor Company",
      type: "work",
      icon: "🚗",
      description: "Digital customer account & AI-powered messaging",
      color: "bg-primary"
    }
  ];

  return (
    <section id="career-journey" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Career Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              A decade of growth in product management and technology
            </p>
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="overflow-x-auto">
              <div className="flex items-center justify-center min-w-max px-8 py-12">
                {journeySteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    {/* Timeline step */}
                    <div className="flex flex-col items-center text-center min-w-[200px] group">
                      {/* Year badge */}
                      <div className={`${step.color} text-white px-4 py-2 rounded-full font-bold text-lg mb-3 shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                        {step.year}
                      </div>
                      {/* Icon */}
                      <div className="text-3xl mb-2">
                        {step.icon}
                      </div>
                      {/* Content */}
                      <h3 className="font-bold text-primary text-sm mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs font-medium text-foreground mb-1">
                        {step.company}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Arrow connector (except for last item) */}
                    {index < journeySteps.length - 1 && (
                      <div className="flex items-center mx-6">
                        <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent"></div>
                        <div className="text-2xl text-primary ml-2">→</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Icon and line */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white text-lg shadow-lg`}>
                    {step.icon}
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-current to-muted-foreground/30 mt-2"></div>
                  )}
                </div>
                
                {/* Content */}
                <Card className="flex-1 shadow-soft">
                  <CardContent className="p-4">
                    <div className="text-sm font-semibold text-accent mb-1">
                      {step.year}
                    </div>
                    <h3 className="font-bold text-primary mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-foreground mb-2">
                      {step.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerJourneySection;