import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const PhilosophySection = () => {
  const [isPhilosophyExpanded, setIsPhilosophyExpanded] = useState(false);

  return (
    <section id="philosophy" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Product Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My approach to building products that truly matter
            </p>
          </div>

          <div>
            <button
              onClick={() => setIsPhilosophyExpanded(!isPhilosophyExpanded)}
              className="w-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm border-2 border-primary/20 rounded-xl p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="text-left">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      My Product Philosophy
                    </h3>
                  </div>
                  <p className="text-foreground font-medium text-lg leading-relaxed">
                    "I believe the best products are the ones you don't notice—because they're already a step ahead of you."
                  </p>
                </div>
                <div className="text-primary group-hover:scale-110 group-hover:rotate-180 transition-all duration-300 ml-4">
                  {isPhilosophyExpanded ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                </div>
              </div>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isPhilosophyExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="pt-8 space-y-6">
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="text-lg leading-relaxed">
                    If built right, Products anticipate intent, remove friction, and quietly guide the user toward value.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Whether I'm building onboarding flows, personalization systems, or platform infrastructure, 
                    I care deeply about making products feel purposeful, not performative. My work has spanned 
                    everything from customer journeys and lifecycle engagement to AI-powered internal tools and 
                    scalable experimentation frameworks.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Across it all, my focus remains the same: drive real outcomes by respecting real behavior.
                  </p>

                  <p className="text-lg leading-relaxed">
                    I've learned to build systems that are flexible enough for iteration, structured enough to 
                    scale, and smart enough to listen. That's why I'm drawn to products that blend intelligence 
                    with clarity—where thoughtful architecture enables teams to move fast without losing depth.
                  </p>

                  <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg my-8">
                    <p className="text-lg leading-relaxed mb-4">
                      I believe Generative AI, LLMs and AI Agents are powerful not just because they accelerate execution—but 
                      because they help us scale empathy. Used well, they allow us to personalize more precisely, 
                      test more thoughtfully, and meet users with nuance—not noise.
                    </p>
                    <p className="text-lg leading-relaxed">
                      For me, the opportunity isn't in replacing product intuition, but in augmenting it with tools 
                      that help us build with more care, not just more speed.
                    </p>
                  </div>

                  <div className="bg-card/50 p-6 rounded-lg border border-border/50">
                    <h4 className="text-xl font-semibold text-primary mb-4">Here's what I've learned along the way:</h4>
                    <div className="space-y-3 text-foreground">
                      <div className="text-lg">
                        <strong>Customer behavior is the clearest signal.</strong> Follow that, and your roadmap won't drift.
                      </div>
                      <div className="text-lg">
                        <strong>Good platforms empower teams.</strong> Not just to build faster—but to build smarter.
                      </div>
                      <div className="text-lg">
                        <strong>Simplicity wins.</strong> If your product feels heavy, your user is carrying it, not you.
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                    <p className="text-lg font-medium text-foreground">
                      If you're building something at the intersection of relevance, intelligence, and user respect—I'd love to connect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;