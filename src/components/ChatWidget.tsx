import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { trackChatUsage, trackCustomEvent } from "@/lib/analytics";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Arushi's AI assistant. I can help you learn more about Arushi's experience, projects, and skills. What would you like to know?",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Get visitor location on component mount
  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await fetch('/api/geolocation');
        if (response.ok) {
          const locationData = await response.json();
          setLocation(locationData);
          
          // Update welcome message with location
          if (locationData.city && locationData.city !== 'Unknown') {
            const locationGreeting = `Hi from ${locationData.city}, ${locationData.country}! I'm Arushi's AI assistant. I can help you learn more about Arushi's experience, projects, and skills. What would you like to know?`;
            
            setMessages(prev => prev.map(msg => 
              msg.id === '1' 
                ? { ...msg, content: locationGreeting }
                : msg
            ));
          }
        }
      } catch (error) {
        console.log('Location not available, using default greeting');
      }
    };

    getLocation();
  }, []);

  // Function to format AI message content with proper styling
  const formatMessageContent = (content: string) => {
    return content
      // Convert **text** to bold
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      // Convert *text* to italic
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      // Convert - text to bullet points
      .replace(/^- (.+)$/gm, '• $1')
      // Convert numbered lists
      .replace(/^\d+\. (.+)$/gm, '<span class="font-semibold text-primary">$&</span>')
      // Convert headers
      .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-primary mb-2">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-primary mb-3">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-primary mb-4">$1</h1>')
      // Convert code blocks
      .replace(/```([\s\S]*?)```/g, '<code class="bg-muted-foreground/10 px-2 py-1 rounded text-sm font-mono">$1</code>')
      // Convert inline code
      .replace(/`([^`]+)`/g, '<code class="bg-muted-foreground/10 px-1 py-0.5 rounded text-xs font-mono">$1</code>')
      // Convert links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
      // Convert line breaks to proper spacing
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  };

  // Function to extract website content for AI context
  const getWebsiteContext = () => {
    const context = {
      // Basic Personal Info
      name: "Arushi Mishra",
      title: "Product Leader - Messaging and Personalization",
      currentRole: "Product Leader at Ford Motor Company",
      location: "Seattle, WA",
      email: "arushimishra3@gmail.com",
      linkedin: "https://www.linkedin.com/in/arushi-mishra/",
      
      // Education
      education: [
        {
          institution: "Carnegie Mellon University - Heinz College",
          degree: "Master's degree, Information Systems Management",
          duration: "2016 - 2017",
          major: "Data Analytics and Product Management",
          skills: ["Data Science", "Product Management", "Coding with R/Python"],
          type: "Masters"
        },
        {
          institution: "Madan Mohan Malaviya University of Technology",
          degree: "Bachelor of Technology (B.Tech.), Computer Science",
          duration: "2008 - 2012",
          grade: "First Division with Honors",
          skills: ["Data Structures and Algorithms", "Object Oriented Programming", "Automata", "Neural Networks", "Computer Networking"],
          type: "Bachelors"
        },
        {
          institution: "Stanford University",
          program: "XAPRO210 - Mastering Generative AI for Product Innovation",
          type: "Professional Certificate",
          status: "Completed",
          period: "Apr 2025"
        }
      ],
      
      // Professional Summary
      tagline: "I read the bumps in the journey so users don't have to",
      corePhilosophy: "Start with one person, one moment, one job to be done. Listen hard, test fast, measure honestly, and ship what helps.",
      yearsExperience: "10+ Years Experience",
      customersImpacted: "14M+ Customers Impacted",
      
      // Core Strengths
      coreStrengths: [
        "Product Strategy",
        "Product Execution", 
        "AI & Personalization",
        "Data-Driven Decisions",
        "Customer Empathy"
      ],
      
      // Current Work Experience (Detailed)
      currentWork: {
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
      
      // Previous Work Experience
      previousWork: [
        {
          company: "ServiceLink",
          period: "2017 - 2021",
          positions: [
            {
              title: "Senior Product Manager - Enterprise, B2B, B2C",
              period: "Nov 2019 - Aug 2021",
              description: "Drove successful product launches and led A/B tests & KPI settings across enterprise, B2B, and B2C products in the real estate technology space."
            },
            {
              title: "Product Manager",
              period: "2017 - 2019", 
              description: "Managed product development and strategy for enterprise solutions in the real estate technology space."
            },
            {
              title: "Strategy and Operations Research Analyst",
              period: "2017 - 2018",
              description: "Conducted research and analysis to support strategic decision-making and operational improvements."
            }
          ]
        },
        {
          company: "Wipro Technologies",
          period: "2013 - 2016",
          title: "Product Data Analyst - Telecommunications",
          description: "Analyzed customer data and billing systems for telecommunications clients, focusing on customer analytics and data migration projects.",
          achievements: [
            "Increased client profits by 15% using Customer Analytics to predict late payment segments",
            "Led data migration for 160K+ customers across all segments and products",
            "Implemented predictive models for customer behavior analysis"
          ]
        }
      ],
      
      // Skills & Expertise (Detailed)
      skills: [
        "AI & Personalization: Recommendation Systems, Intelligent Document Processing, Personalization engines",
        "Product Management: Product Strategy, Agile/SAFe methodologies, OKR coaching, Platform Strategy",
        "Data & Analytics: SQL (BigQuery), Python, Amplitude (funnels, cohorts, A/B testing), Predictive Modeling",
        "Technologies: Vertex AI (LLMs, Document AI, embeddings, pipelines), GCP (BigQuery, Pub/Sub, Cloud Run, Cloud Storage)",
        "Experimentation: A/B tests, holdouts, online metrics, offline model evaluation, NPIR measurement",
        "Messaging & APIs: Push, in-app, email, SMS, REST APIs, webhooks, event-driven design, Cross-channel orchestration",
        "Privacy & Trust: Consent management, GDPR/CCPA compliance, Audit trails, Opt-out automation"
      ],
      
      // Certifications (Detailed)
      certifications: [
        {
          name: "XAPRO210 - Mastering Generative AI for Product Innovation",
          issuer: "Stanford Online",
          issuedDate: "Apr 2025",
          skills: ["GenAI", "Product Management", "Product Strategy"]
        },
        {
          name: "Certified SAFe 5 Agile Product Manager", 
          issuer: "Scaled Agile, Inc.",
          issuedDate: "Oct 2022",
          credentialId: "01203733-2467",
          skills: ["SAFe", "Agile", "Product Management"]
        },
        {
          name: "OKR Certified Coach",
          issuer: "Results Foundry at WorkBoard", 
          issuedDate: "Nov 2021",
          skills: ["OKR", "Coaching", "Strategy"]
        }
      ],
      
      // Major Projects & Achievements
      majorProjects: [
        {
          title: "Messaging Platform Evolution",
          company: "Ford Motor Company",
          role: "Lead Product Manager",
          duration: "18 months",
          scale: "14M+ customers across mobile, web, and embedded surfaces",
          impact: "NPIR moved from undefined to north star, engagement opens +4 pts, opt-outs -12%, time to publish -35%",
          technologies: ["AI/ML Decisioning", "Recommendation Systems", "Personalization", "Real-time Messaging", "Mobile & In-Vehicle Platforms"]
        },
        {
          title: "Personalized Vehicle Onboarding",
          company: "Ford Motor Company", 
          role: "Senior Product Manager",
          duration: "1 year + iterations",
          impact: "Completion +10-15 pts, time-to-link -25-35%, support tickets -30-40%, duplicate records -50%+",
          technologies: ["Mobile UX flows", "Identity & authorization", "API design", "Analytics & experimentation"]
        },
        {
          title: "Enterprise Closing Platform",
          company: "ServiceLink",
          role: "Product Manager", 
          duration: "15 months",
          impact: "Turnaround time 8 hrs → <2 hrs per file (6+ hrs saved), ~15% profit lift",
          technologies: ["Platform Strategy", "Workflow Orchestration", "Scheduling Systems", "NLP/ML Automation"]
        }
      ],
      
      // Industry Experience
      industries: ["Automotive (Ford)", "Real Estate Technology (ServiceLink)", "Telecommunications (Wipro)"],
      
      // Technical Expertise Areas
      technicalAreas: [
        "Recommendation Systems & Personalization",
        "Intelligent Document Processing (NLP/ML)",
        "Cross-channel Messaging Platforms", 
        "Mobile & Embedded Systems",
        "Data Analytics & Experimentation",
        "Platform Strategy & API Design",
        "Privacy & Consent Management"
      ]
    };

    return JSON.stringify(context, null, 2);
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

    const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Track message sent
    trackChatUsage('message_sent');

  try {
    // Get website content context
    const websiteContext = getWebsiteContext();
    
          // OpenAI API endpoint
      const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage.content,
        context: `You are Arushi's AI assistant. Use ONLY the following information from her website to answer questions. Do not make up or add external information.

IMPORTANT: Format your responses with proper markdown:
- Use **bold** for important terms and job titles
- Use bullet points (•) for lists
- Use ## for section headers
- Use proper spacing and structure
- Make responses visually appealing and easy to read

For education questions, be specific about:
- Degree types and fields of study
- Current status (graduated, in progress, etc.)
- Distinguish between degrees and certificates

${websiteContext}

${location && location.city !== 'Unknown' ? `\n\nVisitor is located in ${location.city}, ${location.country}. You can reference this location in your responses to make them more personal and relevant.` : ''}

If the user asks about something not mentioned above, politely say you don't have that information and suggest they contact Arushi directly.`
      })
    });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.response,
          role: 'assistant',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact Arushi directly at arushimishra3@gmail.com",
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      trackChatUsage('open');
    } else {
      trackChatUsage('close');
    }
  };

  return (
    <>
                   {/* Floating Chat Button */}
             <div
               onClick={toggleChat}
               className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 cursor-pointer transition-all duration-300 hover:scale-110"
             >
               <div className="flex flex-col items-center justify-center">
                 <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-0.5 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:shadow-xl transition-shadow">
                   <img 
                     src="/images/cuterobot2.png" 
                     alt="Cute waving robot" 
                     className="w-full h-full object-cover rounded-full"
                   />
                 </div>
                 <div className="text-white text-xs md:text-sm font-bold mt-1 md:mt-2 bg-blue-600/90 rounded-full px-2 md:px-3 py-1 shadow-md">Arushi's AI</div>
               </div>
             </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-2 left-2 md:bottom-24 md:right-6 md:left-auto z-40 w-auto md:w-96 max-h-[80vh] md:max-h-[600px] bg-background border rounded-lg shadow-2xl">
          <Card className="h-full border-0 shadow-none">
            <CardHeader className="pb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5" />
                  </div>
                                  <div>
                  <CardTitle className="text-lg">Arushi's AI Assistant</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/20">
                      Online
                    </Badge>
                    {location && location.city !== 'Unknown' && (
                      <Badge variant="secondary" className="text-xs bg-white/10 text-white/80 border-white/10">
                        📍 {location.city}, {location.country}
                      </Badge>
                    )}
                  </div>
                </div>
                </div>
                <button
                  onClick={toggleChat}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>
            </CardHeader>
            
            <CardContent className="p-0 h-96 flex flex-col">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    
                                               <div
                             className={`max-w-[80%] rounded-lg px-4 py-2 ${
                               message.role === 'user'
                                 ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                 : 'bg-muted text-foreground'
                             }`}
                           >
                             <div 
                               className="text-sm whitespace-pre-wrap"
                               dangerouslySetInnerHTML={{
                                 __html: message.role === 'assistant' ? formatMessageContent(message.content) : message.content
                               }}
                             />
                             {message.role === 'assistant' && message.id === '1' && (
                               <div className="mt-3 pt-3 border-t border-muted-foreground/20">
                                 <p className="text-xs text-muted-foreground/70 italic">
                                   🤖 AI Assistant - For clarification, reach out to Arushi at{' '}
                                   <a 
                                     href="mailto:arushimishra3@gmail.com" 
                                     className="text-primary hover:underline"
                                   >
                                     arushimishra3@gmail.com
                                   </a>
                                 </p>
                               </div>
                             )}
                             <p className="text-xs opacity-70 mt-1">
                               {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                             </p>
                           </div>

                    {message.role === 'user' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-muted rounded-lg px-4 py-2">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm text-muted-foreground">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t bg-muted/20">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Arushi's experience..."
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Powered by OpenAI • Ask about projects, skills, or experience
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
