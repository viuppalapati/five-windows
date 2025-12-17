import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gold-texture.jpg";
import aboutImage from "@/assets/about-setting.jpg";
import blogImage from "@/assets/blog-five-windows.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-in-up">
            Elevating Lasting Love
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8 animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }} />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            For couples who've built a life together—and are ready to reimagine what's possible inside it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <Button variant="gold" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
            <Button variant="outline-gold" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-relaxed mb-8 animate-fade-in-up">
            "The quality of our closest relationships is the strongest predictor of long-term happiness, health, and even longevity."
          </blockquote>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            — The Harvard Study of Adult Development
          </p>
        </div>
      </section>

      {/* Core Message Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              You've Done the Work
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>
          
          <div className="space-y-8 text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Careers, family, homes, years of logistics and complexity. And you're still together. 
              <span className="text-foreground font-medium"> You lasted.</span> You already know relationships matter.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              But knowing… and tending? Not the same thing.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
              Now that you've created a life, a legacy, and a relationship with real history—this is the moment to ask:
            </p>
            <p className="font-display text-2xl md:text-3xl text-primary italic">
              Who are we now—and where do we want to go, together?
            </p>
          </div>
        </div>
      </section>

      {/* About Five Windows Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <img
                src={aboutImage}
                alt="Five Windows"
                className="w-full h-auto shadow-medium"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Five Windows is for You
              </h2>
              <div className="w-16 h-0.5 bg-primary mb-8" />
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  You're not looking to start over—you're ready to <span className="text-foreground font-medium">elevate</span> what you've already built.
                </p>
                <p className="text-lg leading-relaxed">
                  Through intimate conversations, tailored experiences, and quietly provocative frameworks, Five Windows helps you reimagine the relationship you've lived—not by undoing it, but by expanding what's possible inside it.
                </p>
                <p className="text-lg leading-relaxed font-medium text-foreground">
                  More authentic. More connected. More alive.
                </p>
              </div>
              <div className="mt-10">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/about">
                    Meet Dr. Herwitz
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Statement */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8">
            Welcome to Your Next Love Affair
          </h2>
          <p className="font-display text-xl md:text-2xl italic opacity-90">
            —with each other.
          </p>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Letters on Lasting Love
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Observations, patterns, and reflections on what it means to love well over decades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog Card 1 */}
            <Link to="/blog/looking-again" className="group">
              <article className="bg-card border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
                <div className="aspect-[16/10] bg-muted overflow-hidden">
                  <img
                    src={blogImage}
                    alt="Looking Again"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <p className="text-primary text-sm tracking-widest uppercase mb-3">Letter No. 1</p>
                  <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    Looking Again at What We Thought We Knew
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    I began imagining Five Windows because I had a hunch: that people in long-term couples are entering a hard-earned phase of life...
                  </p>
                </div>
              </article>
            </Link>

            {/* Blog Card 2 */}
            <Link to="/blog/why-five-windows" className="group">
              <article className="bg-card border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
                <div className="aspect-[16/10] bg-muted overflow-hidden">
                  <img
                    src={blogImage}
                    alt="Why Five Windows"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <p className="text-primary text-sm tracking-widest uppercase mb-3">Letter No. 2</p>
                  <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    Why Five Windows
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    The inquiry that opens Letters for Lasting Love began with a hunch. It formed slowly, and away from home...
                  </p>
                </div>
              </article>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline-gold" size="lg" asChild>
              <Link to="/blog">
                Read All Letters
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Ready to Elevate Your Relationship?
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're seeking couples therapy, discernment counseling, or simply want to learn more about the Five Windows approach, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button variant="outline-gold" size="lg" asChild>
              <a href="mailto:contact@thefivewindows.com">Email Directly</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
