import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// Images
import fiveWindowsLogo from "@/assets/5Windows.webp";
import hero5Image from "@/assets/14.png";
import heroMobileImage from "@/assets/19.png";
import ctaMobileImage from "@/assets/20.png";
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
            <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-[#30302f] mb-8 leading-tight">
              The Five Windows Weekend
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="w-24 h-[2px] bg-[#8FA883] mx-auto my-12" />
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-[#30302f]/90 max-w-3xl mx-auto leading-relaxed font-medium">
              An annual, invitation-only gathering for a small number of couples who have created something strong---and intend to make the next chapter even more pleasurable.
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

      {/* You Are the Rare Couple Section */}
      <section id="five-windows-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center space-y-8">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#30302f] mb-8">
                You Are the Rare Couple
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto mb-12" />
              <div className="space-y-6 text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                <p>
                  You've done it all---the careers, the family, the contributions---and you've done it well.
                </p>
                <p>
                  Best of all, you're still happy to see each other at the end of the day.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What You Know Section */}
      <section className="py-24 md:py-32 bg-[rgb(249,247,244)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#30302f] mb-8">
                What You Know
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "The crowded decades when everything demanded attention at once are behind you.",
              "Your commitment to each other is solid.",
              "Individual fulfillment translates into better together.",
              "Love thrives when you give it the time and attention it deserves.",
              "The future of your marriage is too important to leave to chance, inertia or complacency.",
              "The years ahead---when good health, energy, and choice align---won't last forever."
            ].map((item, index) => (
              <FadeIn key={index} delay={0.1 + index * 0.1}>
                <div className="text-center md:text-left">
                  <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What No Longer Fits Section */}
      <section className="py-24 md:py-32 bg-[#4A4A4A]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-8">
                What No Longer Fits
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto" />
            </div>
          </FadeIn>

          <div className="space-y-8 max-w-3xl mx-auto text-center">
            <FadeIn delay={0.1}>
              <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                An outdated vision of your future together.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                Arrangements shaped long ago.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                Roles that no longer reflect who you've become.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                Desires unspoken.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="pt-8">
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white italic leading-relaxed">
                  Without intention, these will never surface.
                </p>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white italic leading-relaxed mt-4">
                  Assumptions will take their place.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="pt-8">
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                  And yet, there are few resources for couples who can imagine the value of having a roadmap for the years ahead.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why the Five Windows Weekend Exists Section */}
      <section className="py-24 md:py-32 bg-[rgb(249,247,244)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#30302f] mb-8">
                Why the Five Windows Weekend Exists
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto" />
            </div>
          </FadeIn>

          <div className="space-y-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed text-center">
                The Five Windows Weekend exists for couples exactly here.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                It's an annual, invitation-only gathering for a small number of couples who have created something strong and want the next chapter of their marriage to be fun, stimulating and fulfilling.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-6 pt-8">
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                  You'll have conversations guided by people who understand long marriages---without dramatizing them.
                </p>
                <div className="pl-8 space-y-4">
                  <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                    Not to revisit the past.
                  </p>
                  <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                    Not to diagnose or repair.
                  </p>
                  <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                    Not to tell you who you should be.
                  </p>
                  <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                    But to ask---and answer--- the questions that will shape the years ahead.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-6 pt-8">
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                  Held in a setting chosen for privacy and natural beauty, the weekend creates space that ordinary life rarely allows to access deeper longings.
                </p>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                  Time to enjoy what you share---and leave with something genuinely valuable to carry forward.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="space-y-6 pt-8">
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                  You'll meet couples who are similarly happy, active, and engaged with life.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="pt-8">
                <h3 className="font-display text-2xl md:text-3xl text-[#30302f] mb-6 text-center">
                  And you'll clarify, together, how to:
                </h3>
                <ul className="space-y-4 pl-8">
                  <li className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                    remain close without losing yourselves
                  </li>
                  <li className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                    stay open to what matters most to your partner as circumstances change
                  </li>
                  <li className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                    Balance independence and partnership
                  </li>
                  <li className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                    keep physical intimacy and pleasure alive
                  </li>
                  <li className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                    shape a future that reflects who you are now
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What Changes Section */}
      <section className="py-24 md:py-32 bg-[#6B9A9E]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-8">
                What Changes
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                  You leave with confidence.
                </p>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                  About how you speak openly---without friction.
                </p>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                  About how roles can be adjusted with respect.
                </p>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                  About how closeness deepens, rather than fades, over time.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                  You feel more understood.
                </p>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                  More connected.
                </p>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                  More prepared for what lies ahead.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-12 space-y-6">
              <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                And reassured.
              </p>
              <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                Similar couples are having the same conversations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What This Is Not Section */}
      <section className="py-24 md:py-32 bg-[rgb(249,247,244)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#30302f] mb-8">
                What This Is Not
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="space-y-4">
                <p className="font-display text-2xl md:text-3xl text-[#30302f]">
                  This is not therapy.
                </p>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                  No dredging up the past or hurt feelings.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <p className="font-display text-2xl md:text-3xl text-[#30302f]">
                  This is not an open invitation.
                </p>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                  Every couple is carefully vetted. Privacy and fit are essential.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-4">
                <p className="font-display text-2xl md:text-3xl text-[#30302f]">
                  This is not about uniform answers.
                </p>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                  Each couple finds what fits them.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-4">
                <p className="font-display text-2xl md:text-3xl text-[#30302f]">
                  And this is not hard work.
                </p>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
                  The setting is elegant, comfortable, and designed for ease so you can enjoy your surroundings.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* A Note for the Reluctant Partner Section */}
      <section className="py-24 md:py-32 bg-[#4A4A4A]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center space-y-8">
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white mb-8">
                A Note for the Reluctant Partner
              </h3>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto mb-8" />
              <div className="space-y-6">
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                  This is not about changing your marriage.
                </p>
                <p className="text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                  It's about being thoughtful with it at a moment that matters.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Five Windows Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#30302f] mb-8">
                Why "Five Windows"
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto" />
            </div>
          </FadeIn>

          <div className="space-y-6 text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed text-center max-w-3xl mx-auto">
            <FadeIn delay={0.1}>
              <p>
                The name comes from the historic Jewish ghetto of Venice,
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                where synagogues were concealed inside ordinary buildings.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>
                From the outside, they were intentionally discreet---almost invisible.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p>
                But for those who knew,
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p>
                five windows on the façade signaled a sacred interior:
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p>
                a refuge shaped by culture, devotion, resilience, and belonging.
              </p>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="pt-8">
                <p className="font-display text-[1.25em] md:text-xl lg:text-2xl text-[#6B9A9E] italic font-semibold">
                  Long partnerships are much the same.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="space-y-6 pt-8">
                <p>Extraordinary without display.</p>
                <p>Cherished by those inside them.</p>
                <p>Recognizable only to those who have traveled this far.</p>
                <p>A legacy worth maintaining.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.9}>
              <div className="pt-8">
                <p>
                  Five Windows exists to honor that kind of relationship---
                </p>
                <p>
                  and to offer it the attention it deserves.
                </p>
              </div>
            </FadeIn>
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

        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-24 md:py-32 bg-[#6B9A9E]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center space-y-8">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-8">
                The Opportunity
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto mb-12" />
              <div className="space-y-6 text-[1.25em] md:text-xl lg:text-[1.75em] text-white/90 leading-relaxed">
                <p>
                  Strong marriages do not maintain themselves by accident.
                </p>
                <p>
                  They are tended---selectively, intelligently, and at the right moments.
                </p>
                <p className="font-display text-2xl md:text-3xl text-white italic pt-4">
                  This is one of those moments.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Next Step CTA Section */}
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#30302f] mb-8">
              Next Step
            </h2>
            <div className="w-24 h-[1px] bg-[#8FA883] mx-auto mb-12" />
            <div className="space-y-6 text-[1.25em] md:text-xl lg:text-[1.75em] text-[#30302f]/80 leading-relaxed">
              <p>
                If this resonates, the next step is simple.
              </p>
              <p>
                Email me to arrange a private conversation with you and your spouse.
              </p>
              <p>
                We'll explore---without obligation---whether the Five Windows Weekend is right for you.
              </p>
              <p className="italic pt-4">
                Some conversations are worth having sooner rather than later.
              </p>
            </div>
            <a href="mailto:inquiries@drherwitz.com" className="inline-block mt-8">
              <Button
                size="lg"
                className="bg-[#6B9A9E] hover:bg-[#6B9A9E]/90 text-white px-8 py-6 text-lg"
              >
                inquiries@drherwitz.com
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

