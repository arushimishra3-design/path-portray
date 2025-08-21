const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Product Philosophy
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm border-2 border-primary/20 rounded-xl p-8">
              <p className="text-xl font-medium text-foreground leading-relaxed mb-6">
                "I believe the best products are the ones you don't notice—because they're already a step ahead of you."
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If built right, products anticipate intent, remove friction, and quietly guide the user toward value.
              </p>
            </div>

            <div className="bg-card/50 p-8 rounded-lg border border-border/50">
              <h3 className="text-xl font-semibold text-primary mb-6">Core Principles</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-lg font-medium text-foreground mb-2">Customer behavior is the clearest signal</div>
                  <div className="text-sm text-muted-foreground">Follow that, and your roadmap won't drift</div>
                </div>
                <div>
                  <div className="text-lg font-medium text-foreground mb-2">Good platforms empower teams</div>
                  <div className="text-sm text-muted-foreground">Not just to build faster—but to build smarter</div>
                </div>
                <div>
                  <div className="text-lg font-medium text-foreground mb-2">Simplicity wins</div>
                  <div className="text-sm text-muted-foreground">If your product feels heavy, your user is carrying it</div>
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