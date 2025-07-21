const Mission = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Mission & Vision</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-lg bg-syncore-gradient-subtle border border-border">
              <h3 className="text-2xl font-semibold mb-4 bg-syncore-gradient bg-clip-text text-transparent">
                Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To build Electronic Health Record systems that are fast, intelligent, and effortless to use, 
                making clinical care more efficient and accessible across the world.
              </p>
            </div>
            
            <div className="p-8 rounded-lg bg-syncore-gradient-subtle border border-border">
              <h3 className="text-2xl font-semibold mb-4 bg-syncore-gradient bg-clip-text text-transparent">
                Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To set a new global standard for Electronic Health Records by creating software that empowers 
                every healthcare provider to deliver better care through simplicity and innovation.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-syncore-blue/10 via-syncore-purple/10 to-syncore-pink/10 p-8 rounded-lg border border-border">
            <blockquote className="text-xl lg:text-2xl text-foreground font-medium italic">
              "We are not just improving healthcare software. We are rethinking what healthcare software should be."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;