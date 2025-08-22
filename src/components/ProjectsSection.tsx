
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Messaging Platform Evolution",
      description: "Led transformation of Fortune 100 automaker's legacy messaging into intelligent, real-time platform serving 14M+ customers across mobile, web, and embedded surfaces.",
      detailedDescription: "Role: Lead PM → Program Lead\nLength: 18 months • Surfaces: mobile, web, embedded • Scale: 14M+ customers\n\nSituation (heading)\n\nWe weren't failing because we didn't message enough. We were failing because we messaged too much—and not helpfully. Messages weren't personalized or timed to the journey; they landed as generic blasts, not help. Customers called them spammy. A batch, front-end-heavy stack couldn't decide in real time what to say, when to say it, or whether to say anything at all.\n\nWhy personalization matters: it answers \"why this, why now, why here\" for each person. Without that, trust erodes, opt-outs rise, and our customer-level trust metric falls.\n\nGoal (heading)\n\nReplace volume with value. Build a system that decides whether to speak, what to say, when to say it, and where it should appear. Give teams a safe, fast way to publish and learn. Measure trust at the customer level with NPIR (Net Positive Interaction Rate)\n Definition: (customers with ≥1 positive interaction − customers with ≥1 negative interaction) ÷ customers targeted in the period.\nPositive signals: open → action, task completion, \"helpful\" feedback.\nNegative signals: mute, opt-out, spam mark, quick bounce. Count at most one positive and one negative per customer per period; dedupe across channels.\n\nMy Contribution (heading)\n\n1. Reset the defaults\n• Eligibility rules (should we speak at all) and cross-channel suppression (stop duplicates and off-context pings).\n• Moved decisioning server-side with real-time triggers so timing and channel could be smart.\n\n2. Add intelligence Layer\n• Scoring model to estimate the likelihood of a positive interaction.\n• Learning-to-rank recommendation system to order eligible messages by urgency, value, and fatigue.\nLearning-to-rank: a model that sorts many candidates so the most useful show up first.\n\n3. Make trust visible\n• Adopted NPIR as the north star across product, marketing, legal, and engineering.\n• Added launch gates and kill switches tied to NPIR and experiment results.\nLaunch gate: minimum bar to ship broadly. Kill switch: quick rollback if trust drops.\n\n4. Speed up teams\n• Self-serve content system with templates, approvals, versioning, rollbacks, and analytics.\n• Dashboards to prune low performers and increase experiment cadence.\n\n5. Built-in compliance\n• Consent and opt-out automation with audit trails so the compliant path was also the fastest path.\n\nSystem at a glance (heading)\n\n1. Signals & identity: app, device, lifecycle, and event streams captured in real time with a shared taxonomy.\n\n2. Eligibility & policy: \"should we speak at all\" plus suppression across channels to prevent overload.\n\n3. Scoring (recommender): predicts the chance a message will help this customer in-the-moment or has a chance of positive interaction.\n\n4. Ranking : sorts eligible messages by urgency, value, and fatigue to pick the best few.\n\n5. Orchestration: chooses timing, channel fit, and frequency caps so useful messages don't crowd each other.\n\n6. Authoring & delivery: templates and approvals flow to mobile, web, and embedded with safe rollout and rollback.\n\n7. Analytics & governance: NPIR dashboards, A/B results, consent logs, and playbooks for rollback and template retirement.\n\nImpact (heading)\n\n1. NPIR: moved from undefined to the north star; stayed positive week over week after guardrails + ranker rollout.\n\n2. Engagement: opens +4 pts (~14% → ~18%).\n\n3. Fatigue: opt-outs −12%; high-priority mix to ~55%.\n\n4. Subscription health: targeted renewals +~10%.\n\n5. Velocity: time to publish −35%; revisions −50%.\n\n\nWhat I learned (heading)\n\nPut guardrails in first; reducing noise makes intelligence work.\n\nA shared, customer-level metric changes behavior. NPIR aligned incentives across teams.\n\nSelf-serve plus clear gates turns improvement into a weekly habit, not a yearly event.\n\nForward view (heading)\n\nAdaptive ranker that learns per customer, smarter timing and channel selection with dynamic frequency by cohort, LLM-assisted authoring with policy checks, and measured expansion to new surfaces—guided by NPIR and clear launch gates.",
      impact: "NPIR: moved from undefined to north star; stayed positive week over week after guardrails + ranker rollout. Engagement: opens +4 pts (~14% → ~18%). Fatigue: opt-outs −12%; high-priority mix to ~55%. Subscription health: targeted renewals +~10%. Velocity: time to publish −35%; revisions −50%. Scale: 14M+ customers across mobile, web, and embedded.",
      challenges: "Unifying fragmented data into real-time signals at scale; balancing personalization with regional privacy requirements; aligning 10+ stakeholder teams on shared prioritization model and KPI stack.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["AI/ML Decisioning", "Recommendation Systems", "Personalization", "Real-time Messaging", "Mobile & In-Vehicle Platforms", "Experimentation & Analytics", "Privacy/Consent Automation", "Platform Strategy"],
      duration: "18 months",
      role: "Lead Product Manager"
    },
    {
      title: "Personalized Vehicle Onboarding (App setup)",
      description: "Owned the end-to-end simplification of vehicle management in My Garage area for a Fortune 100 automaker. Reduced friction, improved verification clarity, and made multi-user access safe and straightforward.",
      detailedDescription: "Led the comprehensive redesign of vehicle onboarding and authorization flows for a Fortune 100 automaker's consumer mobile app. Owned end-to-end simplification of 'add vehicle,' 'remove vehicle,' and 'vehicle authorization' features in the My Garage area. The core challenge was high customer drop-offs and support tickets due to complex flows, unclear verification processes, and trust issues from errors. Delivered a simplified, compliant v1 in one quarter, then iterated across subsequent releases to harden edge cases and scale globally.",
      impact: "Higher completion: measurable lift in successful 'add vehicle' and 'authorization' completions. Faster setup: reduced time-to-link and fewer back-and-forth attempts. Lower support load: material drop in tickets related to add/remove and access. Cleaner data: fewer duplicate vehicles and error loops after idempotency changes. Numbers: Completion +10–15 pts, time-to-link −25–35%, support tickets −30–40%, duplicate records −50%+.",
      challenges: "Legacy data inconsistencies across systems, complex multi-user ownership scenarios, and coordinating policy/compliance across markets while keeping the UI simple.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      surfaces: "Mobile App",
      technologies: ["Mobile UX flows", "Identity & authorization", "API design collaboration", "Analytics & experimentation", "Platform strategy", "Cross-functional leadership"],
      duration: "1 year + iterations",
      role: "Senior Product Manager",
      situation: "Core problem: Customers struggled to add or remove vehicles and to authorize additional drivers; drop-offs and support tickets were high, and errors created trust issues.",
      actions: "Journey mapping & diagnostics: Mapped end-to-end flows and analyzed drop-off points with usability sessions. Flow redesign: Consolidated entry points, reduced steps, clearer copy with inline validation. Authorization & safety: Standardized ownership/consent model with edge-case handling. Platform & operations: Feature-flagged rollouts with dashboards and support tools. Experimentation: A/B tested copy and flows with weekly metric reviews.",
      forwardVision: "Move from 'guided forms' to personalized setup: pre-filled context where possible, adaptive next best actions, and cross-device start/resume. Build a shared access model that stays simple for families and fleets while enforcing clear consent, revocation, and auditability."
    },
    {
      title: "Enterprise Closing Platform",
      description: "Shipped a unified platform for real-estate closings across three pillars: a new Order Management system, a Scheduling app for customers and agents, and NLP/ML document automation to extract key fields from loan packages.",
      detailedDescription: "Shipped a unified platform for real-estate closings across three pillars: a new Order Management system, a Scheduling app for customers and agents, and NLP/ML document automation to extract key fields from loan packages.",
      contribution: "Order Management: End-to-end workflow for closing orders with clear statuses, SLAs, and handoffs.\n\nScheduling: Real-time availability, reminders, and reschedule flows to reduce no-shows and friction.\n\nNLP/ML Automation: Built an NLP/ML pipeline to parse loan packages and extract vesting, legal description, borrower/co-borrower names, addresses, and marital status with confidence thresholds, human-in-the-loop verification, audit logs, and an active-learning retraining loop.",
      impact: "Turnaround time 8 hrs → <2 hrs per file (6+ hrs saved). Analytics-driven ops improvements contributed to ~15% profit lift. Fewer back-and-forths and no-shows; cleaner data and faster, more reliable closings.",
      challenges: "Integrating three distinct systems into a cohesive platform, ensuring accuracy in ML document extraction while maintaining human oversight, and coordinating complex scheduling across multiple stakeholders.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      surfaces: "Web Platform, App",
      technologies: ["Product Management", "Platform Strategy", "Workflow Orchestration", "Scheduling Systems", "NLP/ML Automation", "Experimentation", "Analytics", "B2B & B2C"],
      duration: "15 months",
      role: "Product Manager"
    },
    {
      title: "Customer Analytics Platform",
      description: "Increased client profits by 15% using advanced Customer Analytics to predict customer segments and behavior patterns for telecommunications industry clients.",
      detailedDescription: "Built and launched a comprehensive customer analytics platform for telecommunications industry clients, leveraging advanced machine learning algorithms to predict customer behavior and segment users effectively. The platform processed millions of data points daily to generate actionable insights, churn prediction models, and personalized marketing recommendations. Worked closely with data science teams to translate complex analytics into user-friendly dashboards and automated reporting systems.",
      impact: "Generated $2M+ additional revenue for clients, reduced customer churn by 18%, and improved marketing campaign ROI by 32%.",
      challenges: "Handling massive datasets, ensuring real-time analytics performance, and creating intuitive interfaces for non-technical users.",
      image: "/lovable-uploads/Telefonica-Img-924x512.png",
      surfaces: "Web Dashboard",
      technologies: ["Data Analytics", "Predictive Modeling", "Customer Segmentation", "Business Intelligence", "ROI Optimization"],
      duration: "36 months",
      role: "Product Analyst"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Key product initiatives and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-200">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button 
                          variant="default" 
                          size="sm"
                          className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                        >
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-primary mb-2">
                      {project.title}
                    </DialogTitle>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                      <span><strong>Role:</strong> {project.role}</span>
                      <span><strong>Duration:</strong> {project.duration}</span>
                      {project.surfaces && (
                        <span><strong>Surfaces:</strong> {project.surfaces}</span>
                      )}
                      {project.title === "Messaging Platform Evolution" && (
                        <span><strong>Scale:</strong> 14M+ customers</span>
                      )}
                    </div>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    
                    {project.title === "Messaging Platform Evolution" ? (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Project Overview</h4>
                        <div className="text-muted-foreground leading-relaxed text-justify space-y-4">
                        <p>Led and built an intelligent, AI-driven messaging platform, pioneering the transformation at scale.</p>
                        
                        <p>Personalization chooses the content; the system chooses timing and channel. Signals drive eligibility, scoring, and a learning-to-rank engine that surfaces what matters.</p>
                        
                        <p><em>Meeting customers in-the-moment and showing them we care - That's the power of Messaging</em></p>
                        
                        <h4 className="text-lg font-semibold mb-3 text-primary">Situation</h4>
                        <p className="text-muted-foreground leading-relaxed">We weren't failing because we didn't message enough. We were failing because we messaged too much—and not helpfully. Messages weren't personalized or timed to the journey; they landed as generic blasts, not help. Customers called them spammy. A batch, front-end-heavy stack couldn't decide in real time what to say, when to say it, or whether to say anything at all.</p>
                        
                        <p className="text-muted-foreground leading-relaxed">Why personalization matters: it answers "why this, why now, why here" for each person. Without that, trust erodes, opt-outs rise, and our customer-level trust metric falls.</p>
                        
                        <h4 className="text-lg font-semibold mb-3 text-primary">Goal</h4>
                        <p className="text-muted-foreground leading-relaxed">Replace volume with value. Build a system that decides whether to speak, what to say, when to say it, and where it should appear. Give teams a safe, fast way to publish and learn. Measure trust at the customer level with NPIR (Net Positive Interaction Rate)</p>
                        
                        <div className="bg-muted/50 border border-border rounded-lg p-4 my-4">
                          <h5 className="text-base font-semibold text-primary mb-2">NPIR Definition</h5>
                          <p className="text-sm mb-2"><strong>Formula:</strong> (customers with ≥1 positive interaction − customers with ≥1 negative interaction) ÷ customers targeted in the period.</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-green-600 mb-1">Positive signals:</p>
                              <p>• open → action</p>
                              <p>• task completion</p>
                              <p>• "helpful" feedback</p>
                            </div>
                            <div>
                              <p className="font-medium text-red-600 mb-1">Negative signals:</p>
                              <p>• mute, opt-out</p>
                              <p>• spam mark</p>
                              <p>• quick bounce</p>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">Count at most one positive and one negative per customer per period; dedupe across channels.</p>
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-3 text-primary">My Contribution</h4>
                        
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-primary mb-2">Reset the defaults</h5>
                              <ul className="space-y-1 text-sm">
                                <li>• Eligibility rules (should we speak at all) and cross-channel suppression (stop duplicates and off-context pings).</li>
                                <li>• Moved decisioning server-side with real-time triggers so timing and channel could be smart.</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-primary mb-2">Add intelligence Layer</h5>
                              <ul className="space-y-1">
                                <li className="text-muted-foreground">• Scoring model to estimate the likelihood of a positive interaction.</li>
                                <li className="text-muted-foreground">• Learning-to-rank recommendation system to order eligible messages by urgency, value, and fatigue.</li>
                                <li className="text-muted-foreground">Learning-to-rank: a model that sorts many candidates so the most useful show up first.</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-primary mb-2">Make trust visible</h5>
                              <ul className="space-y-1">
                                <li className="text-muted-foreground">• Adopted NPIR as the north star across product, marketing, legal, and engineering.</li>
                                <li className="text-muted-foreground">• Added launch gates and kill switches tied to NPIR and experiment results.</li>
                                <li className="text-muted-foreground">Launch gate: minimum bar to ship broadly. Kill switch: quick rollback if trust drops.</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-primary mb-2">Speed up teams</h5>
                              <ul className="space-y-1">
                                <li className="text-muted-foreground">• Self-serve content system with templates, approvals, versioning, rollbacks, and analytics.</li>
                                <li className="text-muted-foreground">• Dashboards to prune low performers and increase experiment cadence.</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</div>
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-primary mb-2">Built-in compliance</h5>
                              <ul className="space-y-1">
                                <li className="text-muted-foreground">• Consent and opt-out automation with audit trails so the compliant path was also the fastest path.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-3 text-primary">System at a glance</h4>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border-l-4 border-l-primary">
                            <div className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold">1</div>
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-primary mb-1">Signals & Identity</h5>
                              <p className="text-sm text-muted-foreground">App, device, lifecycle, and event streams captured in real time with a shared taxonomy.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border-l-4 border-l-primary">
                            <div className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold">2</div>
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-primary mb-1">Eligibility & Policy</h5>
                              <p className="text-sm text-muted-foreground">"Should we speak at all" plus suppression across channels to prevent overload.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border-l-4 border-l-primary">
                            <div className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold">3</div>
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-primary mb-1">Scoring (Recommender)</h5>
                              <p className="text-sm text-muted-foreground">Predicts the chance a message will help this customer in-the-moment or has a chance of positive interaction.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border-l-4 border-l-primary">
                            <div className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold">4</div>
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-primary mb-1">Ranking</h5>
                              <p className="text-sm text-muted-foreground">Sorts eligible messages by urgency, value, and fatigue to pick the best few.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border-l-4 border-l-primary">
                            <div className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold">5</div>
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-primary mb-1">Orchestration</h5>
                              <p className="text-sm text-muted-foreground">Chooses timing, channel fit, and frequency caps so useful messages don't crowd each other.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border-l-4 border-l-primary">
                            <div className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold">6</div>
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-primary mb-1">Authoring & Delivery</h5>
                              <p className="text-sm text-muted-foreground">Templates and approvals flow to mobile, web, and embedded with safe rollout and rollback.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border-l-4 border-l-primary">
                            <div className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold">7</div>
                            <div className="flex-1">
                              <h5 className="text-base font-semibold text-primary mb-1">Analytics & Governance</h5>
                              <p className="text-sm text-muted-foreground">NPIR dashboards, A/B results, consent logs, and playbooks for rollback and template retirement.</p>
                            </div>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-3 text-primary">Impact</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-muted/30 border border-border rounded-lg p-4 hover:shadow-sm transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <h5 className="text-base font-semibold text-primary">NPIR Transformation</h5>
                            </div>
                            <p className="text-sm text-muted-foreground">Moved from <span className="font-semibold">undefined</span> to <span className="font-bold text-primary">north star</span></p>
                            <p className="text-xs text-muted-foreground mt-1">✓ Stayed positive week over week after guardrails + ranker rollout</p>
                          </div>
                          
                          <div className="bg-muted/30 border border-border rounded-lg p-4 hover:shadow-sm transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <h5 className="text-base font-semibold text-primary">Engagement Boost</h5>
                            </div>
                            <p className="text-sm text-muted-foreground">Opens <span className="font-bold text-primary">+8 pts</span></p>
                            <p className="text-xs text-muted-foreground mt-1">📈 10-18%</p>
                          </div>
                          
                          <div className="bg-muted/30 border border-border rounded-lg p-4 hover:shadow-sm transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <h5 className="text-base font-semibold text-primary">Fatigue Reduction</h5>
                            </div>
                            <p className="text-sm text-muted-foreground">Opt-outs <span className="font-bold text-primary">−12%</span></p>
                            <p className="text-xs text-muted-foreground mt-1">🎯 High-priority mix to ~55%</p>
                          </div>
                          
                          <div className="bg-muted/30 border border-border rounded-lg p-4 hover:shadow-sm transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <h5 className="text-base font-semibold text-primary">Subscription Health</h5>
                            </div>
                            <p className="text-sm text-muted-foreground">Targeted renewals <span className="font-bold text-primary">+~10%</span></p>
                            <p className="text-xs text-muted-foreground mt-1">💪 Improved customer retention</p>
                          </div>
                          
                          <div className="bg-muted/30 border border-border rounded-lg p-4 hover:shadow-sm transition-shadow md:col-span-2">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <h5 className="text-base font-semibold text-primary">Team Velocity</h5>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Time to publish <span className="font-bold text-primary">−35%</span></p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Revisions <span className="font-bold text-primary">−50%</span></p>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">⚡ Faster iteration cycles, higher quality output</p>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-3 text-primary">What I learned</h4>
                        <p className="text-muted-foreground leading-relaxed">'Customer first' means context first. Share when message and moment match.</p>
                        
                        <h4 className="text-lg font-semibold mb-3 text-primary">Forward view</h4>
                        <p className="text-muted-foreground leading-relaxed">Adaptive ranker that learns per customer, smarter timing and channel selection with dynamic frequency by cohort, LLM-assisted authoring with policy checks, and measured expansion to new surfaces—guided by NPIR and clear launch gates.</p>
                      </div>
                    </div>
                    ) : (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Project Overview</h4>
                        <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                          {project.detailedDescription}
                        </p>
                      </div>
                    )}

                    {project.title === "Personalized Vehicle Onboarding (App setup)" && (
                      <>
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-primary">Situation</h4>
                          <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                            {project.situation}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-primary">My Contribution</h4>
                          <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                            {project.actions}
                          </p>
                        </div>
                      </>
                    )}

                    {project.title === "Enterprise Closing Platform" && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">My Contribution</h4>
                        <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                          {project.contribution}
                        </p>
                      </div>
                    )}

                    {project.title !== "Messaging Platform Evolution" && (
                      <>
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-primary">Key Impact</h4>
                          <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                            {project.impact}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-primary">Challenges Overcome</h4>
                          <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                            {project.challenges}
                          </p>
                        </div>
                      </>
                    )}

                    {project.title === "Personalized Vehicle Onboarding (App setup)" && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Forward Vision</h4>
                        <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                          {project.forwardVision}
                        </p>
                      </div>
                    )}

                    {project.title === "Enterprise Closing Platform" && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Forward Vision</h4>
                        <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                          Platform evolution to support multi-tenant workflows, advanced ML document processing with higher accuracy, and integration with external legal and financial systems for end-to-end closing automation.
                        </p>
                      </div>
                    )}

                    {project.title === "Customer Analytics Platform" && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Forward Vision</h4>
                        <p className="text-muted-foreground leading-relaxed text-justify whitespace-pre-line">
                          Expand to predictive analytics for customer lifetime value, real-time behavioral scoring, and AI-powered recommendation engines for personalized customer experiences across multiple industries.
                        </p>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground">
              More projects available upon request. Some details are limited due to confidentiality agreements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
