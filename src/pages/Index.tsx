import { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-gold-texture.jpg";
import veniceImage from "@/assets/venice-five-windows.jpg";
import picImage from "@/assets/pic.jpg";
import oceanImage from "@/assets/ocean.jpg";
import suiteImage from "@/assets/serene-suite.jpg";
import VideoModal from "@/components/VideoModal";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Scroll reveal animation wrapper
const ScrollReveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Image with hover zoom effect
const HoverImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <motion.div className={`overflow-hidden ${className}`}>
    <motion.img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    />
  </motion.div>
);

const Index = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const navigate = useNavigate();
  
  // Parallax effect for hero
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

      {/* Hero Section - Full Height with Parallax */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: heroY }}
        >
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-cream text-center tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            You are the Rare Couple
          </motion.h1>

          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-cream/90 text-center tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            The Five Windows Weekend
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-cream/70 text-center mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          >
            Elevating your lasting love
          </motion.p>

          <motion.a
            href="mailto:inquiries@drherwitz.com"
            className="mt-12 border-2 border-cream/80 text-cream/90 px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium bg-transparent hover:bg-cream hover:text-charcoal transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>

      {/* Opening Section - Generous Whitespace */}
      <section className="py-32 md:py-48 lg:py-64 bg-cream">
        <div className="max-w-4xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed">
              You've arrived at a stage where time is no longer the scarce resource it once was.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal mt-12 md:mt-16">
              And yet—
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <p className="text-lg md:text-xl lg:text-2xl text-charcoal-light mt-12 md:mt-16 leading-relaxed italic font-light">
              has it occurred to you how valuable it could be to set aside a few days in an elegant setting to consider how this chapter might be more fully enjoyed together?
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Image Break - Full Width */}
      <section className="w-full">
        <HoverImage
          src={picImage}
          alt="Luxury retreat terrace at golden hour"
          className="w-full aspect-[21/9]"
        />
      </section>

      {/* Five Windows Weekend Section - Full Width Background */}
      <section className="py-32 md:py-48 lg:py-64 bg-teal-dark w-full">
        <div className="max-w-5xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-cream leading-tight">
              The Five Windows Weekend exists for this moment.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="w-16 h-[1px] bg-cream/40 mx-auto mt-12 md:mt-16" />
          </ScrollReveal>
          
          <div className="mt-16 md:mt-24 space-y-10 md:space-y-12">
            <ScrollReveal delay={0.1}>
              <p className="text-lg md:text-xl lg:text-2xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
                An annual, invitation-only gathering for couples who have built something strong and want to discover how to take even more pleasure in one another as they grow into this next chapter.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl lg:text-2xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
                Held in a place where the natural beauty reflects what you have created together and inspires you to access deeper longings that don't emerge during the day-to-day.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-xl lg:text-2xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
                Guided by steady hands so you stay focused on the future without being distracted by the past.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <p className="font-display text-xl md:text-2xl lg:text-3xl text-cream italic py-8 max-w-3xl mx-auto">
                A break to ask and answer the questions essential to living and loving well.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-cream/10">
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-cream/80 text-lg md:text-xl">
                {["No therapy.", "No performing.", "No demands.", "No fixing."].map((item, i) => (
                  <motion.span 
                    key={i}
                    className="font-light tracking-wide"
                    whileHover={{ color: "rgba(255,255,255,1)" }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              <p className="mt-12 md:mt-16 font-display text-xl md:text-2xl lg:text-3xl text-cream italic">
                The weekend reflects a simple but enduring truth: a life together thrives when time is set aside.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Five Windows - Asymmetrical Grid Layout */}
      <section className="py-32 md:py-48 lg:py-64 bg-primary w-full">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Text Content - Offset */}
            <div className="lg:col-span-5 lg:col-start-1">
              <ScrollReveal>
                <span className="text-cream/60 text-sm tracking-[0.3em] uppercase">The Meaning</span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream mt-6 leading-tight">
                  Why "Five Windows"
                </h2>
                <div className="w-12 h-[1px] bg-cream/40 mt-8" />
              </ScrollReveal>
              
              <div className="mt-12 space-y-8">
                <ScrollReveal delay={0.1}>
                  <p className="text-base md:text-lg lg:text-xl text-cream/85 leading-relaxed">
                    Five Windows comes from the historic Jewish ghetto of Venice, where synagogues were concealed inside ordinary buildings.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                  <p className="text-base md:text-lg lg:text-xl text-cream/85 leading-relaxed">
                    From the outside, they were intentionally discreet—almost invisible. But for those who knew, five windows on the façade signaled a sacred interior: a refuge shaped by culture, devotion, resilience, and belonging.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.3}>
                  <p className="font-display text-xl md:text-2xl text-cream italic pt-4">
                    Long partnership is much the same.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Image - Larger, Offset */}
            <div className="lg:col-span-6 lg:col-start-7">
              <ScrollReveal delay={0.2}>
                <HoverImage
                  src={veniceImage}
                  alt="Historic Venice building with five windows"
                  className="aspect-[4/5] w-full"
                />
              </ScrollReveal>
            </div>
          </div>

          {/* Bottom Text Grid */}
          <div className="mt-24 md:mt-32 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {[
              "Extraordinary without display.",
              "Cherished by those who live inside it.",
              "Recognizable only to those who have traveled this far.",
              "A legacy worth maintaining."
            ].map((text, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <p className="text-cream/80 text-center text-base md:text-lg leading-relaxed">
                  {text}
                </p>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.5}>
            <p className="text-center text-cream/90 text-lg md:text-xl mt-16 md:mt-24 max-w-2xl mx-auto leading-relaxed">
              Five Windows is named to honor that kind of life together—and to give it the attention it deserves.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Two Image Grid */}
      <section className="w-full grid md:grid-cols-2">
        <HoverImage
          src={oceanImage}
          alt="Ocean view"
          className="w-full aspect-square"
        />
        <HoverImage
          src={suiteImage}
          alt="Serene luxury suite"
          className="w-full aspect-square"
        />
      </section>

      {/* Weekend at a Glance - Full Width Gold */}
      <section className="py-32 md:py-48 lg:py-64 bg-gold-accent w-full">
        <div className="max-w-5xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <span className="text-charcoal/60 text-sm tracking-[0.3em] uppercase">Experience</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mt-6 leading-tight">
              The Weekend, at a Glance
            </h2>
            <div className="w-12 h-[1px] bg-charcoal/30 mx-auto mt-8" />
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl lg:text-2xl text-charcoal/80 leading-relaxed mt-12 md:mt-16 max-w-3xl mx-auto">
              Over the course of the weekend, you will be guided through different ways of considering long-term partnership at this stage of life:
            </p>
          </ScrollReveal>

          {/* Masonry-style grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24">
            {[
              { text: "How independence and togetherness stay balanced", height: "aspect-[3/4]" },
              { text: "How physical intimacy deepens", height: "aspect-square" },
              { text: "How shared meaning evolves", height: "aspect-[3/4]" }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                <motion.div 
                  className={`${item.height} bg-cream/60 backdrop-blur-sm flex items-center justify-center p-8 md:p-12`}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-display text-lg md:text-xl lg:text-2xl text-charcoal leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <p className="text-base md:text-lg lg:text-xl text-charcoal/80 leading-relaxed mt-16 md:mt-24 max-w-2xl mx-auto">
              Conversations are structured, private, and intentionally paced. There is time together, time apart, and time to simply enjoy the setting you're in.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* For Couples Who - Condensed Grid */}
      <section className="py-32 md:py-48 bg-cream w-full">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-charcoal/60 text-sm tracking-[0.3em] uppercase">For You</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mt-6 leading-tight">
                Five Windows is for couples who:
              </h2>
              <div className="w-12 h-[1px] bg-primary mx-auto mt-8" />
            </div>
          </ScrollReveal>
          
          {/* Condensed 2-column grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mt-16 md:mt-20 max-w-4xl mx-auto">
            {[
              "Have been together for decades and still enjoy each other's company",
              "Feel proud of and grateful for what they've built",
              "Value privacy, discretion and autonomy",
              "Are not interested in therapy or self-improvement programs",
              "Support one another willingly through occasional inconvenience",
              "Are comfortable in exquisite accommodations in beautiful places"
            ].map((item, index) => (
              <ScrollReveal key={index} delay={0.05 * index}>
                <motion.div 
                  className="flex items-start gap-4 py-3"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-charcoal-light text-base md:text-lg leading-relaxed">{item}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-16 md:mt-20">
              <p className="text-charcoal/80 text-lg md:text-xl italic mb-10">
                If you identify yourself as one of these rare couples, you are invited to
              </p>
              <motion.button
                onClick={handleRequestInvitation}
                className="border-2 border-primary text-primary px-12 md:px-16 py-4 md:py-5 text-sm tracking-[0.2em] uppercase font-medium bg-transparent"
                whileHover={{ 
                  backgroundColor: "hsl(43, 57%, 23%)", 
                  color: "hsl(40, 33%, 97%)",
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                Request an Invitation
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>


    </Layout>
  );
};

export default Index;
