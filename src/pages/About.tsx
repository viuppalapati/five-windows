import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import johannaImage from "@/assets/johanna-headshot.webp";
import veniceImage from "@/assets/venice-five-windows.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section with Image */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="order-2 md:order-1">
              <p className="text-primary text-sm tracking-widest uppercase mb-4">About Me</p>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Dr. Johanna Herwitz
              </h1>
              <div className="w-16 h-0.5 bg-primary mb-8" />
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a clinical psychologist in NYC with over two decades of experience helping adult individuals and couples navigate the emotional landscapes of intimacy, identity, and connection.
                </p>
                <p className="text-lg leading-relaxed">
                  My work integrates powerful modalities of psychotherapy, psychosexual therapy, and relationship-centered approaches, grounded in training from The Couples Institute, the Gottman Institute, The Tools®, and RIE®.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[3/4] bg-muted overflow-hidden shadow-medium">
                <img
                  src={johannaImage}
                  alt="Dr. Johanna Herwitz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About My Practice */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Many of the people I work with have spent decades building a successful life together. They've raised families, created communities, built careers, faced illness and loss, and supported one another through it all. Now, with more space and time, they find themselves asking: <span className="font-display italic text-foreground">What's next?</span>
            </p>
            <p className="text-foreground font-medium">
              The Harvard Study of Adult Development—one of the longest-running studies of adult life—found that the quality of our closest relationships is the strongest predictor of long-term happiness, health, and even longevity.
            </p>
            <p>
              Yet few couples are offered the tools or support to reflect on their relationship at this stage, or to intentionally shape what comes next.
            </p>
            <p>
              I help these couples recognize the strength of what they've created—celebrate it—and design a next chapter rooted in authenticity, pride, purpose, and connection.
            </p>
          </div>
        </div>
      </section>

      {/* About Five Windows */}
      <section className="py-20 md:py-32 bg-teal text-teal-foreground">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="aspect-[4/3] overflow-hidden shadow-medium">
                <img
                  src={veniceImage}
                  alt="Historic Venice building with five windows"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                About Five Windows
              </h2>
              <div className="w-16 h-0.5 bg-teal-foreground/50 mb-8" />
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  In the historic Jewish ghetto of Venice, there's a quiet detail: five windows signify the building is a synagogue. From the outside, these structures are modest — even unremarkable. But step inside, and you find spaces of extraordinary beauty, history, and reverence.
                </p>
                <p>
                  That image stayed with me. It felt like a perfect metaphor for long-term romantic partnership. A relationship that, on the surface, may look ordinary, well-worn, even predictable — but within holds decades of shared experience, resilience, and unspoken depth.
                </p>
                <p>
                  Five Windows is for couples who've built lives, raised families, weathered seasons, and created legacy — and now find themselves at a threshold. The roles they've played are shifting. The noise is quieting. And what's left is a single, potent question: <span className="font-display italic">What now?</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              I guide couples to reflect and reconnect not just with each other, but with the deeper, often quieter parts of themselves that have waited patiently beneath all the building, leading, and giving.
            </p>
            <p>
              This is the space where intimacy is renewed, desire rekindled, and a new kind of love — rooted in who they've become — is invited in.
            </p>
            <p className="text-foreground font-medium text-xl">
              Five Windows is a private and intentional space for thoughtful reconnection and meaningful next chapters. This is where couples discover how to fall in love again.
            </p>
            <p className="text-center font-display text-2xl text-foreground italic mt-12">
              Here, you'll find resources designed for couples who've lived life together — and are now ready to turn inward and fall in love again — with each other.
            </p>
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-10">
            Connect with Five Windows
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary" 
              asChild
            >
              <Link to="/share-perspective">Share Your Perspective</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary" 
              asChild
            >
              <Link to="/stay-connected">Stay Connected</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary" 
              asChild
            >
              <Link to="/listen-in">Listen In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Ready to begin your next chapter?
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            I'd love to hear from you.
          </p>
          <Button variant="gold" size="lg" asChild>
            <a href="mailto:inquiries@drherwitz.com">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
