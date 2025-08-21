import { GraduationCap, Calendar, Award, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const EducationSection = () => {
  const [expandedCoursework, setExpandedCoursework] = useState<number | null>(null);
  const [expandedActivities, setExpandedActivities] = useState<number | null>(null);
  
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

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-primary font-medium mb-2">
                        {edu.degree}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
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
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.coursework && (
                    <div>
                      <button
                        onClick={() => setExpandedCoursework(expandedCoursework === index ? null : index)}
                        className="flex items-center gap-2 mb-3 hover:text-accent transition-colors duration-200 group"
                      >
                        <GraduationCap className="w-4 h-4 text-accent" />
                        <p className="text-sm text-muted-foreground font-medium group-hover:text-accent">
                          Coursework:
                        </p>
                        <div className="text-accent group-hover:scale-110 transition-transform duration-200">
                          {expandedCoursework === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedCoursework === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <div
                              key={courseIndex}
                              className="text-sm text-muted-foreground pl-4 border-l-2 border-primary/30"
                            >
                              {course}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {edu.activities && (
                    <div className="mt-4">
                      <button
                        onClick={() => setExpandedActivities(expandedActivities === index ? null : index)}
                        className="flex items-center gap-2 mb-3 hover:text-accent transition-colors duration-200 group"
                      >
                        <Users className="w-4 h-4 text-accent" />
                        <p className="text-sm text-muted-foreground font-medium group-hover:text-accent">
                          Activities and Achievements:
                        </p>
                        <div className="text-accent group-hover:scale-110 transition-transform duration-200">
                          {expandedActivities === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedActivities === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="space-y-2">
                          {edu.activities.map((activity, actIndex) => (
                            <div
                              key={actIndex}
                              className="text-sm text-muted-foreground pl-4 border-l-2 border-accent/30 py-1"
                            >
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;