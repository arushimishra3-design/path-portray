import { Card, CardContent } from "@/components/ui/card";

const CareerJourneySection = () => {
  const journeySteps = [
    {
      year: "2021-Present",
      title: "Senior Product Manager",
      company: "Ford Motor Company",
      type: "work",
      icon: "🚗",
      description: "Digital customer account & AI-powered messaging",
      color: "bg-primary"
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
      year: "2016-2017",
      title: "Master's Degree",
      company: "Carnegie Mellon University",
      type: "education",
      icon: "🎓",
      description: "Advanced studies in technology and innovation",
      color: "bg-purple-500"
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
      year: "2008-2012",
      title: "Bachelor's in Computer Science",
      company: "MMMEC India",
      type: "education",
      icon: "🎓",
      description: "Foundation in computer science and engineering",
      color: "bg-indigo-500"
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
            <div className="relative overflow-x-auto">
              {/* Horizontal timeline line */}
              <div className="flex items-center min-w-max px-8">
                {journeySteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    {/* Step content */}
                    <div className="flex flex-col items-center group min-w-[240px]">
                      {/* Content card (above the line) */}
                      <Card className="w-56 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-2 mb-6">
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
                      
                      {/* Icon circle (on the line) */}
                      <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10 bg-white border-4 border-white`}>
                        <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white text-xl`}>
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Connecting line (except for last item) */}
                    {index < journeySteps.length - 1 && (
                      <div className="h-2 w-24 bg-gradient-to-r from-current to-muted-foreground/50 mx-4 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Direction indicator */}
              <div className="flex justify-between items-center mt-8 px-8 text-sm text-muted-foreground">
                <span>← Latest</span>
                <span className="flex items-center gap-2">
                  <span>Timeline Flow</span>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-muted-foreground"></div>
                </span>
                <span>Oldest →</span>
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