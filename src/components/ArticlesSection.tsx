import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, TrendingUp } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  imageUrl?: string;
}

const ArticlesSection = () => {
  // Your real Medium articles
  const articles: Article[] = [
    {
      id: '1',
      title: "AI Product Management: Cut Through the Noise and Get Started",
      excerpt: "A practical guide for product managers looking to navigate the AI landscape, cut through the hype, and build a strong foundation in AI product management.",
      url: "https://medium.com/@arushimishra3/ai-product-management-cut-through-the-noise-and-get-started-bf5efa42c35a",
      readTime: "5 min read",
      tags: ["Product Strategy", "AI", "PM Toolkit", "AI Product Management", "Product Management"],
      featured: true,
      imageUrl: "https://cdn-images-1.medium.com/max/1024/1*7zE6t9TQtmzSFWbtZRsSYQ.png"
    },
    {
      id: '2',
      title: "From Hype to Help: A Strategic Approach to Building with GenAI for Product Managers",
      excerpt: "How to move beyond the hype and build genuinely helpful GenAI products that deliver real value to users and drive business impact.",
      url: "https://medium.com/@arushimishra3/from-hype-to-help-a-strategic-approach-to-building-with-genai-for-product-managers-f15a37034373",
      readTime: "5 min read",
      tags: ["Product Strategy", "Product-Led Growth", "Generative AI Solution", "Product Management", "UX Design"],
      imageUrl: "https://cdn-images-1.medium.com/max/1024/1*BUk1oPXk2F-mN_9rN8DMGw.png"
    },
    {
      id: '6',
      title: "From Chat to Action: AI Agents, A2A & MCP",
      excerpt: "Exploring the evolution from conversational AI to actionable AI agents, and how A2A and MCP protocols are shaping the future of AI interactions.",
      url: "https://medium.com/@arushimishra3/from-chat-to-action-ai-agents-a2a-mcp-cda38e4c429e",
      readTime: "5 min read",
      tags: ["Agentic AI", "Model Context", "A2A Protocol", "MCP Protocol", "Future of AI"],
      featured: true,
      imageUrl: "https://cdn-images-1.medium.com/max/1003/1*tdoUGuQ3EqazG9d2VDtVJg.png"
    },
    {
      id: '3',
      title: "How to Pick the Right GenAI Model: A Practical Guide for Product Managers",
      excerpt: "A comprehensive guide to selecting the right GenAI model for your product, covering technical considerations, business requirements, and practical decision frameworks.",
      url: "https://medium.com/@arushimishra3/how-to-pick-the-right-genai-model-a-practical-guide-for-product-managers-dae913257ebb",
      readTime: "5 min read",
      tags: ["Large Language Models", "Gen AI Revolution", "Product Management", "Generative AI Solution", "Strategic Thinking"],
      imageUrl: "https://cdn-images-1.medium.com/max/1012/1*1Jhx3L9iDdA_pCC4mEbf4A.png"
    },
    {
      id: '4',
      title: "Personalization That Feels Helpful",
      excerpt: "How to build messaging platforms that guide users rather than nag them, creating personalization that feels genuinely helpful and drives engagement.",
      url: "https://medium.com/@arushimishra3/personalization-that-feels-helpful-7650579e350b",
      readTime: "5 min read",
      tags: ["Messaging Platforms", "Product Management", "Messaging", "Platform Engineering", "Intelligent Design"],
      imageUrl: "https://cdn-images-1.medium.com/max/1024/1*uTenfskeahNhlap9AlAPTg.png"
    },
    {
      id: '5',
      title: "Brains vs Bots: The Battle for Intelligence",
      excerpt: "Exploring the evolving relationship between human intelligence and artificial intelligence, and how we can leverage both for better product outcomes.",
      url: "https://www.linkedin.com/pulse/brains-bots-battle-intelligence-arushi-mishra-nxuuc/",
      readTime: "5 min read",
      tags: ["Artificial Intelligence", "Product Strategy", "Human-AI Collaboration", "Innovation"],
      imageUrl: "https://media.licdn.com/dms/image/v2/D5612AQHmg-O1Tj-4NA/article-cover_image-shrink_720_1280/B56ZaAiNeMGUAI-/0/1745913177112?e=1761782400&v=beta&t=BpG6_sWW118Ff75_4TnXQ-vnUgIDuT4No20BwDDib64"
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const otherArticles = articles.filter(article => !article.featured);

  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Thought Leadership
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Insights on AI, product management, and building scalable platforms. 
            Sharing lessons learned from leading products that impact millions of users.
          </p>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
              Featured Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredArticles.map((article) => (
                <a 
                  key={article.id} 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden flex flex-col h-full cursor-pointer">
                  {article.imageUrl && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-3 md:pb-4 flex-shrink-0 px-4 md:px-6">
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                        Featured
                      </Badge>
                    </div>
                    <CardTitle className="text-lg md:text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow px-4 md:px-6">
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-start text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 md:h-4 md:w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 md:py-3 px-3 md:px-4 rounded-md text-center flex items-center justify-center gap-2 text-sm md:text-base">
                        Read on Medium
                        <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Other Articles */}
        {otherArticles.length > 0 && (
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
              More Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {otherArticles.map((article) => (
                <a 
                  key={article.id} 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer">
                  {article.imageUrl && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-2 md:pb-3 flex-shrink-0 px-3 md:px-6">
                    <CardTitle className="text-base md:text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow px-3 md:px-6">
                    <div className="flex flex-wrap gap-1 mb-2 md:mb-3">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-start text-xs text-gray-500 mb-2 md:mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-2 px-3 rounded-md text-center flex items-center justify-center gap-2 text-xs md:text-sm">
                        Read Article
                        <ExternalLink className="h-3 w-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Follow My Writing Journey
              </h3>
              <p className="text-blue-100 mb-4 md:mb-6 text-sm md:text-base">
                Get the latest insights on AI, product management, and building scalable platforms.
              </p>
              <Button 
                asChild 
                variant="secondary" 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 w-full md:w-auto"
              >
                <a 
                  href="https://medium.com/@arushimishra3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Follow on Medium
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
