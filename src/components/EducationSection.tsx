import { GraduationCap, Calendar, Award, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  
  const education = [
    {
      institution: "Carnegie Mellon University - Heinz College",
      degree: "Master's degree, Information Systems Management",
      duration: "2016 - 2017",
      major: "Data Analytics and Product Management",
      skills: ["Data Science", "Product Management", "Coding with R/Python"],
      coursework: [
        "Data Mining Statistics for IT Managers",
        "Digital Marketing Analytics",
        "Distributed Systems",
        "Data-Focused Python",
        "Economic Analysis",
        "Managing Disruptive Technologies",
        "Digital Transformation",
        "Decision Making Under Uncertainty",
        "Organizational Design & Implementation",
        "Database Management",
        "Financial Accounting",
        "Object-Oriented Programming in Java",
        "Principles of Finance",
        "Professional Speaking",
        "Business Process Modeling",
        "Management Consulting",
        "Professional Writing",
        "Object-Oriented Analysis & Design"
      ],
      activities: [
        "Strategy Consultant at Neustar for risk management",
        "Editorial Writer for The Tartan (College Newspaper)"
      ],
      type: "Masters"
    },
    {
      institution: "Madan Mohan Malaviya University of Technology",
      degree: "Bachelor of Technology (B.Tech.), Computer Science",
      duration: "2008 - 2012",
      grade: "First Division with Honors",
      skills: ["Data Structures and Algorithms", "Object Oriented Programming", "Automata", "Neural Networks", "Computer Networking"],
      activities: [
        "Co-Founder of Computer Engineering Society, 2011",
        "Head Coordinator for Alumni Meet, 2012",
        "Assistant Coordinator for Cultural Committee, 2008-2011",
        "Winner of Poetry Competition, 2010",
        "Winner of Technical Paper Presentation on Brain Fingerprinting, 2010",
        "Winner of Article Writing Competition, 2008"
      ],
      type: "Bachelors"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Education</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Academics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through rigorous academic programs in technology and business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="group shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden cursor-pointer">
                  <CardHeader>
                                      <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {edu.type === "Bachelors" ? (
                        <img 
                          src="/images/Madan_Mohan_Malaviya_University_of_Technology_logo.png" 
                          alt="MMMUT Logo" 
                          className="w-full h-full object-contain"
                        />
                      ) : edu.type === "Masters" ? (
                        <img 
                          src="/images/cmu.png" 
                          alt="CMU Logo" 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-200 mb-2">
                          {edu.institution}
                        </CardTitle>
                        <p className="text-lg text-primary/80 font-medium mb-2">
                          {edu.degree}
                        </p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    {edu.major && (
                      <div className="mb-4">
                        <p className="text-foreground font-medium">
                          Major: {edu.major}
                        </p>
                      </div>
                    )}

                    {edu.grade && (
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-4 h-4 text-accent" />
                        <span className="text-foreground font-medium">
                          {edu.grade}
                        </span>
                      </div>
                    )}

                    {edu.skills && (
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="text-center mt-4">
                      <p className="text-sm text-muted-foreground">
                        Click to view details →
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-primary">
                    {edu.institution}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-primary/80">
                    {edu.degree} • {edu.duration}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {edu.major && (
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Major</h4>
                      <p className="text-foreground">{edu.major}</p>
                    </div>
                  )}

                  {edu.grade && (
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Achievement</h4>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent" />
                        <span className="text-foreground">{edu.grade}</span>
                      </div>
                    </div>
                  )}

                  {edu.skills && (
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.coursework && (
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Coursework</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.coursework.map((course, courseIndex) => (
                          <div
                            key={courseIndex}
                            className="flex items-start gap-2 p-3 bg-accent/5 rounded-lg border-l-3 border-primary/30"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.activities && (
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Activities & Achievements</h4>
                      <div className="space-y-3">
                        {edu.activities.map((activity, actIndex) => (
                          <div
                            key={actIndex}
                            className="flex items-start gap-2 p-3 bg-accent/5 rounded-lg border-l-3 border-accent/30"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground">{activity}</span>
                          </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;