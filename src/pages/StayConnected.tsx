import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const StayConnected = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "You're on the list!",
      description: "Thank you for subscribing. You'll hear from us soon.",
    });
    setEmail("");
    setFirstName("");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-teal text-teal-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-teal-foreground/80 text-sm tracking-widest uppercase mb-4">Newsletter</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Stay Connected
          </h1>
          <div className="w-16 h-0.5 bg-teal-foreground/50 mx-auto mb-8" />
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            Join a community of thoughtful couples who value depth, discretion, and the ongoing work of lasting partnership.
          </p>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-xl mx-auto px-6 md:px-12">
          <div className="bg-card p-8 md:p-12 border border-border/50 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              Stay in the Loop
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Receive occasional letters with insights on long-term partnership, updates on Five Windows events, and thoughtful resources for couples at this stage of life.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-left">
                <Label htmlFor="firstName" className="text-foreground font-medium mb-2 block">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-background border-border focus:border-primary focus:ring-primary"
                  placeholder="Your first name"
                />
              </div>

              <div className="text-left">
                <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background border-border focus:border-primary focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full">
                Subscribe
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-6">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              What to Expect
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl text-primary">1</span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">Letters on Lasting Love</h3>
              <p className="text-muted-foreground">
                Thoughtful essays exploring the nuances of long-term partnership and what it means to grow together.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl text-primary">2</span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">Event Updates</h3>
              <p className="text-muted-foreground">
                Be the first to know about Five Windows Weekend retreats and other exclusive gatherings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl text-primary">3</span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">Curated Resources</h3>
              <p className="text-muted-foreground">
                Carefully selected books, articles, and conversations for couples seeking depth and meaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Connect with Five Windows
          </h2>
          <div className="w-16 h-0.5 bg-primary-foreground/50 mx-auto mb-10" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
              asChild
            >
              <Link to="/share-perspective">Share Your Perspective</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
              asChild
            >
              <Link to="/listen-in">Listen In</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StayConnected;
