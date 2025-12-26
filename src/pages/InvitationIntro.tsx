import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const InvitationIntro = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center bg-background pt-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-relaxed">
            A simple, private way to express interest in the Five Windows Weekend.
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-10" />
          
          <Button variant="gold" size="lg" asChild className="mb-16">
            <Link to="/invitation-form">Request an Invitation</Link>
          </Button>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            The Five Windows Weekend is intentionally small and invitation-only.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Each gathering is carefully composed to ensure discretion, compatibility, and a shared understanding of what this experience is — and what it is not.
          </p>
          <div className="w-16 h-0.5 bg-primary/30 mx-auto my-10" />
          <p className="text-lg text-foreground leading-relaxed">
            Requesting an invitation does not commit you to attend, and it does not place you on a mailing or marketing list.
          </p>
          <p className="text-lg text-foreground leading-relaxed mt-4 font-medium">
            It simply begins a private inquiry about whether the Five Windows Weekend is the right fit for you at this point in your lives.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default InvitationIntro;
