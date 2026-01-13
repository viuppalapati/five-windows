import { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Images
import heroImage from "@/assets/hero-gold-texture.jpg";
import fiveWindowsImage from "@/assets/Five Windows.png";
import picImage from "@/assets/pic.jpg";
import oceanImage from "@/assets/ocean.jpg";
import veniceImage from "@/assets/five.png";
import suiteImage from "@/assets/serene-suite.jpg";
import mountImage from "@/assets/mount.jpg";
import shipImage from "@/assets/ship.jpg";
import VideoModal from "@/components/VideoModal";

// Scroll reveal component
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

const IndexNew = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const handleRequestInvitation = () => {
    setIsVideoModalOpen(true);
  };

  const handleVideoComplete = () => {
    navigate("/invitation-intro");
  };

  return (
    <Layout>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onVideoComplete={handleVideoComplete}
      />

      {/* HERO - Cinematic Split Screen */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-charcoal">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: y1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal z-10" />
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover opacity-70"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-20 h-full flex items-center"
          style={{ opacity }}
        >
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Typography - Centered Vertically */}
              <div className="space-y-8 lg:space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  <div className="w-16 h-[2px] bg-gold mb-8" />
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cream leading-[0.95] tracking-tight">
                    You are the<br />
                    <span className="italic text-gold-light">Rare</span> Couple
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="space-y-6"
                >
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-cream/90 font-light">
                    The Five Windows Weekend
                  </h2>
                  <p className="text-lg md:text-xl text-cream/70 leading-relaxed max-w-xl">
                    Elevating your lasting love through intimate conversations in Venice
                  </p>
                </motion.div>

                <motion.a
                  href="mailto:inquiries@drherwitz.com"
                  className="inline-block mt-8 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <div className="flex items-center gap-4 border-b-2 border-cream/30 pb-3 group-hover:border-gold transition-colors duration-500">
                    <span className="text-cream text-sm tracking-[0.3em] uppercase">Get in Touch</span>
                    <svg className="w-6 h-6 text-cream group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.a>
              </div>

              {/* Right: Floating Image - 80% height with 10% space top/bottom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.4 }}
                className="relative hidden lg:flex items-center justify-center h-screen"
              >
                <div className="relative w-full h-[80vh] overflow-hidden">
                  <img
                    src={fiveWindowsImage}
                    alt="Five Windows"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* OPENING STATEMENT - Magazine Editorial Style */}
      <section className="relative py-24 md:py-32 lg:py-48 bg-cream overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Large Quote */}
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-charcoal leading-[1.1] tracking-tight">
                  You've arrived at a stage where time is no longer the scarce resource it once was.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mt-12 lg:mt-16">
                  And yet—
                </p>
              </FadeIn>
            </div>

            {/* Side Note */}
            <div className="lg:col-span-5 flex items-end">
              <FadeIn delay={0.3}>
                <div className="border-l-2 border-primary pl-8 lg:pl-12">
                  <p className="text-lg md:text-xl text-charcoal-light leading-relaxed italic">
                    has it occurred to you how valuable it could be to set aside a few days in an elegant setting to consider how this chapter might be more fully enjoyed together?
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* THE WEEKEND - Luxury Brochure Style with Floating Image */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-cream via-gold-accent/20 to-cream overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-16 lg:gap-24 items-start">
            {/* Left: Content */}
            <div className="space-y-12 lg:space-y-16">
              <FadeIn>
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="text-primary/60 text-xs tracking-[0.5em] uppercase font-light">The Experience</span>
                    <div className="w-12 h-[1px] bg-primary/30 mt-3" />
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.08] tracking-tight">
                    The Five Windows Weekend exists for this moment.
                  </h2>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="space-y-8 max-w-2xl">
                  <p className="text-xl md:text-2xl text-charcoal leading-[1.6] font-light">
                    An annual, invitation-only gathering for couples who have built something strong and want to discover how to take even more pleasure in one another as they grow into this next chapter.
                  </p>

                  <div className="pl-8 border-l-2 border-primary/20">
                    <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
                      Held in a place where the natural beauty reflects what you have created together and inspires you to access deeper longings that don't emerge during the day-to-day.
                    </p>
                  </div>

                  <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
                    Guided by steady hands so you stay focused on the future without being distracted by the past.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="bg-white/60 backdrop-blur-sm p-8 md:p-10 max-w-2xl">
                  <p className="font-display text-2xl md:text-3xl text-charcoal italic leading-[1.4]">
                    A break to ask and answer the questions essential to living and loving well.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="flex flex-wrap gap-x-12 gap-y-4 pt-8">
                  {["No therapy.", "No performing.", "No demands.", "No fixing."].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      <span className="text-charcoal/70 text-base md:text-lg tracking-wide font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right: Floating Image */}
            <div className="relative lg:sticky lg:top-32">
              <FadeIn delay={0.2}>
                <div className="relative">
                  {/* Main Image */}
                  <div className="aspect-[3/4] overflow-hidden shadow-2xl">
                    <img
                      src={oceanImage}
                      alt="Serene ocean view"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Accent Image - Overlapping */}
                  <div className="absolute -bottom-8 -right-8 w-2/3 aspect-[4/3] overflow-hidden shadow-xl border-4 border-cream hidden lg:block">
                    <img
                      src={suiteImage}
                      alt="Elegant suite"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FIVE WINDOWS - Architectural Layout with Inset Image */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-charcoal overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-[0.85fr,1.15fr] gap-12 lg:gap-20 items-center">
            {/* Left: Image with Caption */}
            <div className="order-2 lg:order-1">
              <FadeIn>
                <div className="space-y-6">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={veniceImage}
                      alt="Venice Five Windows"
                      className="w-full h-full object-cover grayscale-[30%] opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                  </div>
                  <p className="text-cream/50 text-sm italic leading-relaxed pl-4 border-l border-gold/30">
                    The historic Jewish ghetto of Venice, where five windows signaled a sacred interior
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-10 lg:space-y-12">
              <FadeIn>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-gold" />
                    <span className="text-gold/80 text-xs tracking-[0.5em] uppercase">The Meaning</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05] tracking-tight">
                    Why "Five Windows"
                  </h2>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="space-y-8">
                  <p className="text-xl md:text-2xl text-cream/90 leading-[1.6] font-light">
                    Five Windows comes from the historic Jewish ghetto of Venice, where synagogues were concealed inside ordinary buildings.
                  </p>

                  <p className="text-lg md:text-xl text-cream/75 leading-relaxed">
                    From the outside, they were intentionally discreet—almost invisible. But for those who knew, five windows on the façade signaled a sacred interior: a refuge shaped by culture, devotion, resilience, and belonging.
                  </p>

                  <div className="pt-6">
                    <p className="font-display text-3xl md:text-4xl text-gold-light italic leading-[1.3]">
                      Long partnership is much the same.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="grid grid-cols-1 gap-6 pt-8 border-t border-cream/10">
                  {[
                    "Extraordinary without display.",
                    "Cherished by those who live inside it.",
                    "Recognizable only to those who have traveled this far.",
                    "A legacy worth maintaining."
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center border border-gold/30 group-hover:border-gold transition-colors duration-300 mt-1">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      </div>
                      <p className="text-cream/70 text-base md:text-lg leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* THE WEEKEND AT A GLANCE - Sidebar Layout with Image */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-teal-dark overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-[1fr,0.75fr] gap-16 lg:gap-24">
            {/* Left: Content */}
            <div className="space-y-12 lg:space-y-16">
              <FadeIn>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3">
                    <div className="w-8 h-8 border border-gold/40 flex items-center justify-center">
                      <span className="text-gold text-xs">01</span>
                    </div>
                    <span className="text-cream/50 text-xs tracking-[0.5em] uppercase">Experience</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.08] tracking-tight max-w-2xl">
                    The Weekend, at a Glance
                  </h2>
                  <p className="text-xl md:text-2xl text-cream/70 leading-[1.6] max-w-2xl font-light">
                    Over the course of the weekend, you will be guided through different ways of considering long-term partnership at this stage of life:
                  </p>
                </div>
              </FadeIn>

              {/* Three Focus Areas - Vertical List */}
              <div className="space-y-8 lg:space-y-10 max-w-2xl">
                {[
                  {
                    number: "01",
                    title: "How independence and togetherness stay balanced",
                    description: "Finding the rhythm between shared life and individual pursuits"
                  },
                  {
                    number: "02",
                    title: "How physical intimacy deepens",
                    description: "Exploring connection beyond habit and expectation"
                  },
                  {
                    number: "03",
                    title: "How shared meaning evolves",
                    description: "Creating purpose that grows with you both"
                  }
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.1 * (i + 1)}>
                    <div className="group">
                      <div className="flex items-start gap-6 pb-8 border-b border-cream/10 group-hover:border-gold/30 transition-colors duration-500">
                        <div className="w-12 h-12 flex-shrink-0 border border-cream/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500">
                          <span className="text-cream/60 text-sm font-display group-hover:text-gold">{item.number}</span>
                        </div>
                        <div className="space-y-3 pt-1">
                          <h3 className="font-display text-2xl md:text-3xl text-cream leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-cream/60 text-base md:text-lg leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.4}>
                <div className="bg-cream/5 backdrop-blur-sm p-8 md:p-10 max-w-2xl border-l-2 border-gold/30">
                  <p className="text-cream/80 text-lg md:text-xl leading-relaxed">
                    Conversations are structured, private, and intentionally paced. There is time together, time apart, and time to simply enjoy the setting you're in.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right: Vertical Image */}
            <div className="relative hidden lg:block">
              <FadeIn delay={0.2}>
                <div className="sticky top-32">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={mountImage}
                      alt="Mountain landscape"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-dark/60" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FOR COUPLES WHO - Checklist with Elegance */}
      <section className="py-32 md:py-48 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-charcoal/50 text-xs tracking-[0.4em] uppercase">For You</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mt-6">
                Five Windows is for couples who:
              </h2>
              <div className="w-16 h-[1px] bg-primary mx-auto mt-8" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
            {[
              "Have been together for decades and still enjoy each other's company",
              "Feel proud of and grateful for what they've built",
              "Value privacy, discretion and autonomy",
              "Are not interested in therapy or self-improvement programs",
              "Support one another willingly through occasional inconvenience",
              "Are comfortable in exquisite accommodations in beautiful places"
            ].map((item, index) => (
              <FadeIn key={index} delay={0.05 * index}>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                    <span className="text-primary text-sm font-display">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-charcoal-light text-lg md:text-xl leading-relaxed pt-2">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-20 md:mt-28">
              <p className="text-charcoal/70 text-xl md:text-2xl italic mb-12 font-display">
                If you identify yourself as one of these rare couples, you are invited to
              </p>
              <button
                onClick={handleRequestInvitation}
                className="group inline-flex items-center gap-4 border-2 border-primary px-12 py-5 hover:bg-primary hover:text-cream transition-all duration-500"
              >
                <span className="text-sm tracking-[0.3em] uppercase">Request an Invitation</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL STATEMENT - Full Bleed Image with Overlay Text */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={picImage}
            alt="Five Windows"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-end pb-20 md:pb-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full">
            <FadeIn>
              <div className="max-w-3xl">
                <p className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-12">
                  Five Windows is named to honor that kind of life together—and to give it the attention it deserves.
                </p>
                <a
                  href="mailto:inquiries@drherwitz.com"
                  className="inline-flex items-center gap-4 text-cream group"
                >
                  <span className="text-sm tracking-[0.3em] uppercase border-b-2 border-cream/30 pb-2 group-hover:border-gold transition-colors duration-500">
                    Begin the Conversation
                  </span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexNew;

