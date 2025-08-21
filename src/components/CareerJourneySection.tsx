import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const CareerJourneySection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const journeySteps = [
    {
      year: "2008-2012",
      title: "Bachelor's in Computer Science",
      company: "MMMEC India",
      type: "education",
      icon: "🎓",
      description: "Foundation in computer science and engineering",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      milestone: "🌱 Beginning"
    },
    {
      year: "2013-2016",
      title: "Product Data Analyst",
      company: "Wipro Limited",
      type: "work",
      icon: "💼",
      description: "Started career in telecommunications analytics",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      milestone: "🚀 Launch"
    },
    {
      year: "2016-2017",
      title: "Master's Degree",
      company: "Carnegie Mellon University",
      type: "education",
      icon: "🎓",
      description: "Advanced studies in technology and innovation",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      milestone: "📚 Growth"
    },
    {
      year: "2017-2021",
      title: "Senior Product Manager",
      company: "ServiceLink",
      type: "work",
      icon: "🏢",
      description: "Enterprise B2B/B2C product management",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      milestone: "⭐ Excellence"
    },
    {
      year: "2021-Present",
      title: "Senior Product Manager",
      company: "Ford Motor Company",  
      type: "work",
      icon: "🚗",
      description: "Digital customer account & AI-powered messaging",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      milestone: "🎯 Mastery"
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

          {/* Creative Desktop Journey Path */}
          <div className="hidden lg:block relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Journey Path */}
            <div className="relative">
              {/* Curved SVG Path */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" fill="none">
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.8"/>
                    <stop offset="25%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.8"/>
                    <stop offset="75%" stopColor="rgb(34, 197, 94)" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
                <path
                  d="M 50 200 Q 300 100 600 200 Q 900 300 1150 200"
                  stroke="url(#pathGradient)"
                  strokeWidth="4"
                  fill="none"
                  className="drop-shadow-lg"
                />
                {/* Animated dots along path */}
                <circle r="4" fill="rgba(255,255,255,0.8)" className="drop-shadow-md">
                  <animateMotion dur="8s" repeatCount="indefinite">
                    <mpath href="#journeyPath"/>
                  </animateMotion>
                </circle>
                <path id="journeyPath" d="M 50 200 Q 300 100 600 200 Q 900 300 1150 200" fill="none"/>
              </svg>

              {/* Journey Steps positioned along the curve */}
              <div className="relative py-16">
                {journeySteps.map((step, index) => {
                  const positions = [
                    { left: '4%', top: '45%' },
                    { left: '25%', top: '20%' },
                    { left: '50%', top: '45%' },
                    { left: '75%', top: '70%' },
                    { left: '96%', top: '45%' }
                  ];
                  const position = positions[index];
                  
                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                      style={{ left: position.left, top: position.top }}
                      onMouseEnter={() => setHoveredStep(index)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      {/* Floating milestone badge */}
                      <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${step.color} shadow-lg transition-all duration-300 ${hoveredStep === index ? 'scale-110 -translate-y-2' : ''}`}>
                        {step.milestone}
                      </div>

                      {/* Main step card */}
                      <div className={`relative transition-all duration-500 ${hoveredStep === index ? 'scale-110 -translate-y-4' : 'hover:scale-105 hover:-translate-y-2'}`}>
                        {/* Year bubble */}
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-xl relative z-10 ring-4 ring-white transition-all duration-300 ${hoveredStep === index ? 'ring-8 ring-white/50' : ''}`}>
                          <div className="text-center">
                            <div className="text-xs leading-tight">{step.year.split('-')[0]}</div>
                            <div className="text-xs leading-tight opacity-80">{step.year.split('-')[1] || 'Now'}</div>
                          </div>
                        </div>

                        {/* Icon overlay */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                          <span className="text-lg">{step.icon}</span>
                        </div>

                        {/* Info card that appears on hover */}
                        <div className={`absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-72 transition-all duration-300 ${hoveredStep === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                          <Card className={`${step.bgColor} border-0 shadow-2xl backdrop-blur-sm`}>
                            <CardContent className="p-6">
                              <div className="text-center">
                                <h3 className="font-bold text-lg text-gray-800 mb-2">
                                  {step.title}
                                </h3>
                                <p className="font-semibold text-gray-700 mb-3">
                                  {step.company}
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                          {/* Arrow pointing up */}
                          <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 ${step.bgColor.replace('bg-gradient-to-br', 'bg-gradient-to-tl')} rotate-45 border-l border-t border-white`}></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-sm text-muted-foreground">
                <span>🌟 Career Evolution Timeline</span>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-full"></div>
                <span>{journeySteps.length} Milestones</span>
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Icon and line */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-lg shadow-lg ring-2 ring-white`}>
                    {step.icon}
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-100 mt-2 rounded-full"></div>
                  )}
                </div>
                
                {/* Content */}
                <Card className={`flex-1 shadow-soft ${step.bgColor} border-0`}>
                  <CardContent className="p-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${step.color} shadow-md mb-3`}>
                      <span>{step.milestone}</span>
                      <span>•</span>
                      <span>{step.year}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      {step.company}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
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