import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// Images
import fiveWindowsLogo from "@/assets/5Windows.webp";
import fiveWindowsWhiteLogo from "@/assets/5 Windows White Background Logo.png";
import hero5Image from "@/assets/14.png";
import heroMobileImage from "@/assets/19.png";
import ctaMobileImage from "@/assets/20.png";
import oceanImage from "@/assets/ocean.jpg";
import mountImage from "@/assets/mount.jpg";
import sereneSuiteImage from "@/assets/serene-suite.jpg";
import fivePairsImage from "@/assets/Five_Pairs.png";
import topSquaresImage from "@/assets/15.png";
import picImage from "@/assets/pic.jpg";
import ctaBackgroundImage from "@/assets/16.png";
import footerBackgroundImage from "@/assets/17.png";

// Animation component
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function IndexClean() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const x = useTransform(scrollY, [0, 1000], [0, 200]); // Parallax effect: moves right as you scroll

  // Refs for CTA and Footer sections
  const ctaRef = useRef(null);
  const footerRef = useRef(null);

  // Parallax for CTA section
  const { scrollYProgress: ctaScrollProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });
  const ctaX = useTransform(ctaScrollProgress, [0, 1], [0, 200]);

  // Parallax for Footer
  const { scrollYProgress: footerScrollProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"]
  });
  const footerX = useTransform(footerScrollProgress, [0, 1], [0, 200]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('five-windows-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#BBD4E8] font-body">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={fiveWindowsLogo}
                alt="Five Windows"
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <Link
                to="/"
                className="text-sm tracking-widest uppercase font-body font-medium text-[#30302f] hover:text-[#8FA883] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="text-sm tracking-widest uppercase font-body font-medium text-[#30302f] hover:text-[#8FA883] transition-colors"
              >
                Blog
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 text-[#30302f]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm tracking-widest uppercase font-body font-medium text-[#30302f] hover:text-[#8FA883] transition-colors py-2"
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm tracking-widest uppercase font-body font-medium text-[#30302f] hover:text-[#8FA883] transition-colors py-2"
                >
                  Blog
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[rgb(249,247,244)] overflow-hidden">
        {/* Background Image for Mobile with Parallax */}
        <motion.div className="absolute inset-0 md:hidden" style={{ x }}>
          <img
            src={heroMobileImage}
            alt="Five Windows Hero Mobile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Background Image with Parallax for Desktop */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{ x }}
        >
          <img
            src={hero5Image}
            alt="Five Windows Hero"
            className="w-full h-full object-cover"
            key="hero-trans-image"
          />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 md:pt-0">
          <FadeIn>
            <p className="text-[#30302f] text-sm md:text-lg lg:text-xl tracking-[0.3em] uppercase mb-8 font-semibold">
              You are the
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-[#30302f] mb-8 leading-tight">
              Rare Couple
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="w-24 h-[2px] bg-[#8FA883] mx-auto my-12" />
          </FadeIn>

          <FadeIn delay={0.3}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#30302f] mb-12">
              The Five Windows Weekend
            </h2>
            <p className="text-xl md:text-2xl text-[#30302f]/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Elevating your lasting love through intimate conversations in Venice
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Button
              size="lg"
              onClick={scrollToNextSection}
              className="bg-[#6B9A9E] hover:bg-[#6B9A9E]/90 text-white px-8 py-6 text-lg mt-12"
            >
              Learn More
            </Button>
          </FadeIn>

          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
            style={{ opacity }}
            onClick={scrollToNextSection}
          >
            <ChevronDown className="w-8 h-8 text-[#30302f] animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Five Windows Section */}
      <section id="five-windows-section" className="relative min-h-screen flex items-center justify-center bg-[rgb(249,247,244)] overflow-hidden pt-0 md:pt-24">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{ x }}
        >
          <img
            src={topSquaresImage}
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn delay={0.15}>
            <div className="space-y-6 leading-relaxed text-center">
              <p className="font-display text-3xl md:text-4xl lg:text-[3rem] text-[#30302f]">
                You've arrived at a stage where time is no longer the scarce resource it once was.
              </p>
              <p className="font-display text-3xl md:text-4xl lg:text-[3rem] text-[#30302f] italic my-8">
                And yet—
              </p>
              <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80">
                has it occurred to you how valuable it could be to set aside a few days in an elegant setting to consider how this chapter might be more fully enjoyed together?
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="py-24 md:py-32 bg-[#6B9A9E]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-[3em] text-white mb-8">
                The Five Windows Weekend exists for this moment.
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto" />
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-start mt-12">
            <FadeIn delay={0.2}>
              <div className="space-y-6 text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                <p>
                  An annual, invitation-only gathering for couples who have built something strong and want to discover how to take even more pleasure in one another as they grow into this next chapter.
                </p>
                <p>
                  Held in a place where the natural beauty reflects what you have created together and inspires you to access deeper longings that don't emerge during the day-to-day.
                </p>
                <p>
                  Guided by steady hands so you stay focused on the future without being distracted by the past.
                </p>
                <p>
                  A break to ask and answer the questions essential to living and loving well.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="sticky top-32">
                <img
                  src={sereneSuiteImage}
                  alt="Serene suite"
                  className="w-full aspect-[4/5] object-cover rounded-lg"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="flex flex-col md:grid md:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto items-center">
              {[
                "No therapy.",
                "No performing.",
                "No demands.",
                "No fixing."
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-[1.25em] font-semibold text-white whitespace-nowrap">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Five Windows Section */}
      <section className="py-24 md:py-32 bg-[rgb(249,247,244)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[#8FA883] text-base md:text-lg lg:text-[1.75em] font-semibold tracking-[0.3em] uppercase mb-4">
                The Meaning
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#30302f] mb-8">
                Why "Five Windows"
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6 text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed max-w-3xl mx-auto text-center">
              <p className="font-display text-[1.25em] md:text-xl lg:text-2xl text-[#6B9A9E] italic font-semibold">
                Long partnership is much the same.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6 max-w-4xl mx-auto mt-12">
            {[
              "Extraordinary without display.",
              "Cherished by those who live inside it.",
              "Recognizable only to those who have traveled this far.",
              "A legacy worth maintaining."
            ].map((item, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1}>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 text-center">
                  {item}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Weekend at a Glance Section */}
      <section className="py-24 md:py-32 bg-[#4A4A4A]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[#8FA883] text-base md:text-lg lg:text-[1.75em] font-semibold tracking-[0.3em] uppercase mb-4">
                Experience
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-8">
                The Weekend, at a Glance
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              Over the course of the weekend, you will be guided through different ways of considering long-term partnership at this stage of life:
            </p>
          </FadeIn>

          <div className="space-y-12 max-w-4xl mx-auto">
            {[
              {
                icon: "✦",
                title: "How independence and togetherness stay balanced",
                description: "Finding the rhythm between shared life and individual pursuits"
              },
              {
                icon: "✦",
                title: "How physical intimacy deepens",
                description: "Exploring connection beyond habit and expectation"
              },
              {
                icon: "✦",
                title: "How shared meaning evolves",
                description: "Creating purpose that grows with you both"
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="text-[#8FA883] text-6xl flex-shrink-0 leading-none">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.7}>
            <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed max-w-4xl mx-auto mt-12">
              Conversations are structured, private, and intentionally paced. There is time together, time apart, and time to simply enjoy the setting you're in.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* For Couples Who Section */}
      <section className="py-12 md:py-16 bg-[#4A4A4A]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[#8FA883] text-base md:text-lg lg:text-[1.75em] font-semibold tracking-[0.3em] uppercase mb-4">
                For You
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
                Five Windows is for couples who:
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto mt-8" />
            </div>
          </FadeIn>

          <div className="space-y-12 max-w-4xl mx-auto mt-12">
            {[
              "Have been together for decades and still enjoy each other's company",
              "Feel proud of and grateful for what they've built",
              "Value privacy, discretion and autonomy",
              "Are not interested in therapy or self-improvement programs",
              "Support one another willingly through occasional inconvenience",
              "Are comfortable in exquisite accommodations in beautiful places"
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="flex items-start gap-6">
                  <div className="text-[#8FA883] text-6xl flex-shrink-0 leading-none">
                    ☞
                  </div>
                  <p className="text-white/90 text-[1.25em] md:text-xl lg:text-[1.75em] leading-relaxed">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>


        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className="relative py-24 md:py-32 bg-[rgb(249,247,244)] overflow-hidden">
        {/* Background Image for Mobile */}
        <motion.div className="absolute inset-0 md:hidden" style={{ x: ctaX }}>
          <img
            src={ctaMobileImage}
            alt="Background Mobile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Background Image for Desktop */}
        <motion.div className="absolute inset-0 hidden md:block" style={{ x: ctaX }}>
          <img
            src={ctaBackgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 mb-12">
              Five Windows is named to honor that kind of life together—and to give it the attention it deserves.
            </p>
            <a href="mailto:inquiries@drherwitz.com">
              <Button
                size="lg"
                className="bg-[#6B9A9E] hover:bg-[#6B9A9E]/90 text-white px-8 py-6 text-lg"
              >
                Begin the Conversation
              </Button>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer ref={footerRef} className="relative bg-[rgb(249,247,244)] text-[#30302f] py-12 overflow-hidden">
        {/* Background Image for Mobile */}
        <motion.div className="absolute inset-0 md:hidden" style={{ x: footerX }}>
          <img
            src={ctaMobileImage}
            alt="Background pattern mobile"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Background Image for Desktop */}
        <motion.div className="absolute inset-0 hidden md:block" style={{ x: footerX }}>
          <img
            src={footerBackgroundImage}
            alt="Background pattern"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <img src={fiveWindowsLogo} alt="Five Windows Logo" className="h-16 mx-auto" />
            </div>

            <div className="text-sm text-[#30302f]/60">
              <p className="mb-2">
                <a href="mailto:inquiries@drherwitz.com" className="hover:text-[#30302f] transition-colors">
                  inquiries@drherwitz.com
                </a>
              </p>
              <p>© 2026 Five Windows. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

