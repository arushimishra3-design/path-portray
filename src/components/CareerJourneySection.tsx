import { Card, CardContent } from "@/components/ui/card";

const CareerJourneySection = () => {
  const journeySteps = [
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
      year: "2017-2019",
      title: "Transition Period",
      company: "Career Development",
      type: "transition",
      icon: "🚀",
      description: "Expanding skills and exploring opportunities",
      color: "bg-orange-500"
    },
    {
      year: "2019-2021",
      title: "Senior Product Manager",
      company: "ServiceLink",
      type: "work",
      icon: "🏢",
      description: "Enterprise B2B/B2C product management",
      color: "bg-green-500"
    },
    {
      year: "2021-2023",
      title: "Senior Product Manager",
      company: "Ford Motor Company",
      type: "work",
      icon: "🚗",
      description: "Digital customer account management",
      color: "bg-blue-600"
    },
    {
      year: "2023-Present",
      title: "Product Leader",
      company: "Ford Motor Company",
      type: "work",
      icon: "⭐",
      description: "AI-powered messaging and personalization",
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

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 via-green-500 via-blue-600 to-primary transform -translate-y-1/2 rounded-full"></div>
              
              {/* Timeline steps */}
              <div className="flex justify-between items-center relative z-10">
                {journeySteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    {/* Icon circle */}
                    <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                      {step.icon}
                    </div>
                    
                    {/* Content card */}
                    <Card className="w-48 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-2">
                      <CardContent className="p-4 text-center">
                        <div className="text-sm font-semibold text-accent mb-1">
                          {step.year}
                        </div>
                        <h3 className="font-bold text-sm text-primary mb-1 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs font-medium text-foreground mb-2">
                          {step.company}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
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