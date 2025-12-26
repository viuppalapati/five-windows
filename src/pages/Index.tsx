import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-gold-texture.jpg";
import veniceImage from "@/assets/venice-five-windows.jpg";
import VideoModal from "@/components/VideoModal";

const Index = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleRequestInvitation = () => {
    setIsVideoModalOpen(true);
  };

  const handleVideoComplete = () => {
    navigate("/invitation-intro");
  };

  return (
    <Layout>
      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onVideoComplete={handleVideoComplete}
      />

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
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-10 animate-fade-in-up">
            Elevate Your Lasting Love
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }} />
        </div>
      </section>

      {/* Opening Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            You've arrived at a stage where time is no longer the scarce resource it once was.
          </p>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            And yet—
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
            has it occurred to you how valuable it could be to set aside a few days in an elegant setting to consider how this chapter might be more fully enjoyed together?
          </p>
        </div>
      </section>

      {/* Five Windows Weekend Section */}
      <section className="py-20 md:py-32 bg-teal text-teal-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-10">
            The Five Windows Weekend exists for this moment.
          </h2>
          <div className="w-16 h-0.5 bg-teal-foreground/50 mx-auto mb-10" />
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p className="opacity-95">
              An annual, invitation-only gathering for couples who have built something strong and want to discover how to take even more pleasure in one another as they grow into this next chapter.
            </p>
            <p className="opacity-95">
              Held in a place where the natural beauty reflects what you have created together and inspires you to access deeper longings that don't emerge during the day-to-day.
            </p>
            <p className="opacity-95">
              Guided by steady hands so you stay focused on the future without being distracted by the past.
            </p>
            <p className="font-display text-xl md:text-2xl italic opacity-90 py-4">
              A break to ask and answer the questions essential to living and loving well.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-teal-foreground/20">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <p className="opacity-90">No therapy.</p>
              <p className="opacity-90">No performing.</p>
              <p className="opacity-90">No demands.</p>
              <p className="opacity-90">No fixing.</p>
            </div>
            <p className="mt-10 font-display text-xl md:text-2xl italic opacity-95">
              The weekend reflects a simple but enduring truth: a life together thrives when time is set aside.
            </p>
          </div>
        </div>
      </section>

      {/* Why Five Windows Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8">
                Why "Five Windows"
              </h2>
              <div className="w-16 h-0.5 bg-primary-foreground/50 mb-8" />
              <div className="space-y-6 text-lg md:text-xl leading-relaxed opacity-95">
                <p>
                  Five Windows comes from the historic Jewish ghetto of Venice, where synagogues were concealed inside ordinary buildings.
                </p>
                <p>
                  From the outside, they were intentionally discreet—almost invisible. But for those who knew, five windows on the façade signaled a sacred interior: a refuge shaped by culture, devotion, resilience, and belonging.
                </p>
                <p className="font-display text-xl md:text-2xl italic pt-4">
                  Long partnership is much the same.
                </p>
                <div className="pt-4 space-y-2">
                  <p>Extraordinary without display.</p>
                  <p>Cherished by those who live inside it.</p>
                  <p>Recognizable only to those who have traveled this far.</p>
                  <p className="font-medium">A legacy worth maintaining.</p>
                </div>
                <p className="pt-4">
                  Five Windows is named to honor that kind of life together—and to give it the attention it deserves.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] overflow-hidden shadow-medium">
                <img
                  src={veniceImage}
                  alt="Historic Venice building with five windows"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekend at a Glance Section */}
      <section className="py-20 md:py-32 bg-gold-accent">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
            The Weekend, at a Glance
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-10" />
          
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-10">
            Over the course of the weekend, you will be guided through different ways of considering long-term partnership at this stage of life:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-background/50 p-6 shadow-soft">
              <p className="text-foreground font-medium">How independence and togetherness stay balanced</p>
            </div>
            <div className="bg-background/50 p-6 shadow-soft">
              <p className="text-foreground font-medium">How physical intimacy deepens</p>
            </div>
            <div className="bg-background/50 p-6 shadow-soft">
              <p className="text-foreground font-medium">How shared meaning evolves</p>
            </div>
          </div>

          <p className="text-lg text-foreground/90 leading-relaxed">
            Conversations are structured, private, and intentionally paced. There is time together, time apart, and time to simply enjoy the setting you're in.
          </p>
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
          
          <ul className="space-y-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {[
              "have been together for decades and still enjoy each other's company",
              "feel proud of and grateful for what they've built",
              "value privacy, discretion and autonomy",
              "understand that occasional inconvenience is part of supporting one another — and do so willingly",
              "are not interested in therapy or self-improvement programs",
              "are comfortable in exquisite accommodations in beautiful places"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4 p-4 bg-background rounded-sm">
                <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-12">
            <p className="text-foreground text-lg mb-8 italic">
              If you identify yourself as one of these rare couples, you are invited to
            </p>
            <button
              onClick={handleRequestInvitation}
              className="bg-primary text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-gold"
            >
              Request an Invitation
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
