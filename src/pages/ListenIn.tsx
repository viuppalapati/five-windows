import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ListenIn = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Podcast & Media</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Listen In
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Conversations about lasting love, long-term partnership, and the wisdom that comes from decades together.
          </p>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Featured Conversations
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Episode Card 1 */}
            <div className="bg-background p-8 border border-border/50">
              <p className="text-primary text-sm tracking-widest uppercase mb-3">Episode 1</p>
              <h3 className="font-display text-2xl text-foreground mb-4">
                The Art of Growing Together
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Exploring what it means to evolve as individuals while deepening your connection as partners. A conversation about the paradox of togetherness and autonomy.
              </p>
              <p className="text-sm text-muted-foreground italic">Coming Soon</p>
            </div>

            {/* Episode Card 2 */}
            <div className="bg-background p-8 border border-border/50">
              <p className="text-primary text-sm tracking-widest uppercase mb-3">Episode 2</p>
              <h3 className="font-display text-2xl text-foreground mb-4">
                Navigating the Empty Nest
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When the house quiets and the roles you've played for decades begin to shift. How couples rediscover each other in this pivotal transition.
              </p>
              <p className="text-sm text-muted-foreground italic">Coming Soon</p>
            </div>

            {/* Episode Card 3 */}
            <div className="bg-background p-8 border border-border/50">
              <p className="text-primary text-sm tracking-widest uppercase mb-3">Episode 3</p>
              <h3 className="font-display text-2xl text-foreground mb-4">
                Intimacy After Decades
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The evolution of intimacy in long-term relationships—beyond the physical to emotional, intellectual, and spiritual connection.
              </p>
              <p className="text-sm text-muted-foreground italic">Coming Soon</p>
            </div>

            {/* Episode Card 4 */}
            <div className="bg-background p-8 border border-border/50">
              <p className="text-primary text-sm tracking-widest uppercase mb-3">Episode 4</p>
              <h3 className="font-display text-2xl text-foreground mb-4">
                The Wisdom of Weathered Love
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                What couples who have stayed together for 30, 40, 50 years know that the rest of us are still learning.
              </p>
              <p className="text-sm text-muted-foreground italic">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Podcast Section */}
      <section className="py-20 md:py-32 bg-gold-accent">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              About Listen In
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Listen In is a space for thoughtful conversations about the realities of long-term partnership. Here, we explore the questions that couples rarely discuss openly—the challenges, the triumphs, and the quiet wisdom that emerges from decades of shared life.
            </p>
            <p>
              Each episode features real couples, therapists, and thought leaders who understand that lasting love is not about perfection—it's about presence, growth, and the courage to keep choosing each other.
            </p>
            <p className="text-foreground font-medium">
              Subscribe to be notified when new episodes are released.
            </p>
          </div>

          <div className="text-center mt-12">
            <Button variant="gold" size="lg" asChild>
              <Link to="/stay-connected">
                Get Notified
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
              <Link to="/stay-connected">Stay Connected</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ListenIn;
