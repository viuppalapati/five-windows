import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gold-texture.jpg";
import johannaImage from "@/assets/johanna-headshot.webp";
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
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            You are the rare couple.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            After decades of building, navigating, and giving, you still enjoy one another's company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Request an Invitation</Link>
            </Button>
            <Button variant="outline-gold" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-relaxed mb-8 animate-fade-in-up">
            "My partner helped me become who I want to be…the road ahead looks entirely do-able and beautiful."
          </blockquote>
          <p className="text-muted-foreground text-lg leading-relaxed mt-8">
            Those who reach this place often wonder, quietly, where the others are—couples who have lived well, chosen wisely, and now have the freedom to savor what comes next together.
          </p>
        </div>
      </section>

      {/* Five Windows Weekend Section */}
      <section className="py-20 md:py-32 bg-teal text-teal-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8">
            The Five Windows Weekend
          </h2>
          <div className="w-16 h-0.5 bg-teal-foreground/50 mx-auto mb-8" />
          <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-95">
            Once each year, in one of the world's most vibrant settings, a small circle of such couples meets—by invitation—for reflection, conversation, and the pleasure of being among peers who understand without explanation.
          </p>
          <blockquote className="font-display text-xl md:text-2xl italic opacity-90 mb-8">
            "It would be nice to be with other well-functioning couples who are committed to staying together—just to compare notes."
          </blockquote>
          <p className="text-lg leading-relaxed opacity-95">
            This weekend is not for revisiting the past, nor for fixing anything. It is a quiet honoring of what you have built, and a dignified way to launch the next chapter of your marriage with the mutual support you have earned.
          </p>
        </div>
      </section>

      {/* What Couples Say */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Long-term couples tell me:
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>
          
          <div className="space-y-8 text-center">
            <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
              "The things that make a long-term partnership work and grow stronger are rarely spoken about in detail — mostly it's vague and mysterious."
            </blockquote>
            <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
              "There's always more to learn."
            </blockquote>
            <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
              "More knowledge about the normal issues long-term couples face, and how these can bring us closer, is really important."
            </blockquote>
            <p className="text-lg text-foreground leading-relaxed font-medium mt-8">
              These reflections are markers of maturity—of couples who have grown together and understand that this legacy is worth maintaining.
            </p>
          </div>
        </div>
      </section>

      {/* The Name Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              The Name
            </h2>
            <div className="w-16 h-0.5 bg-primary-foreground/50 mx-auto" />
          </div>
          
          <div className="space-y-6 text-center">
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              Five Windows comes from the historic Jewish ghetto in Venice, where synagogues were concealed inside ordinary buildings. From the outside, they were intentionally discreet—almost invisible. But for those who knew, five windows on the façade signaled a sacred interior: a refuge shaped by culture, devotion, resilience, and belonging.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              Long-term partnership is much the same.
            </p>
            <p className="font-display text-xl md:text-2xl italic opacity-90 mt-8">
              Extraordinary but rarely showy. Cherished by those who live inside it. Recognizable only to those who have traveled this far.
            </p>
          </div>
        </div>
      </section>

      {/* About Dr. Herwitz Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="aspect-[3/4] bg-muted overflow-hidden shadow-medium">
                <img
                  src={johannaImage}
                  alt="Dr. Johanna Herwitz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-primary text-sm tracking-widest uppercase mb-4">About</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Dr. Johanna Herwitz
              </h2>
              <div className="w-16 h-0.5 bg-primary mb-8" />
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a clinical psychologist in NYC with over two decades of experience helping adult individuals and couples navigate the emotional landscapes of intimacy, identity, and connection.
                </p>
                <p className="text-lg leading-relaxed">
                  I help couples recognize the strength of what they've created—celebrate it—and design a next chapter rooted in authenticity, pride, purpose, and connection.
                </p>
              </div>
              <div className="mt-10">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/about">
                    Learn More About Five Windows
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Couples Who Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Five Windows is for couples who:
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>
          
          <ul className="grid md:grid-cols-2 gap-4 text-lg text-muted-foreground">
            {[
              "have been together for decades",
              "feel grateful for what they've built",
              "value privacy, discretion, and autonomy",
              "are not interested in therapy or self-improvement programs",
              "want daily life together to feel smoother, warmer, and more aligned",
              "understand that occasional inconvenience is part of supporting one another"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 p-4 bg-background rounded-sm">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-center text-foreground font-medium text-lg mt-10">
            This is not a retreat for everyone. It is intentionally designed for the rare couple who recognizes themselves here.
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
              Explore the perspective behind Five Windows
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
      <section className="py-20 md:py-32 bg-teal text-teal-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            If you are one of these rare few, you are invited to learn more.
          </h2>
          <div className="w-16 h-0.5 bg-teal-foreground/50 mx-auto mb-10" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-teal-foreground text-teal-foreground hover:bg-teal-foreground hover:text-teal" asChild>
              <Link to="/contact">Request an Invitation</Link>
            </Button>
            <Button variant="ghost" size="lg" className="text-teal-foreground hover:bg-teal-foreground/10" asChild>
              <Link to="/blog">Read the Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;