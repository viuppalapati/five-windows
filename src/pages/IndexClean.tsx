import { useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Images
import fiveWindowsImage from "@/assets/Five Windows.png";
import oceanImage from "@/assets/ocean.jpg";
import mountImage from "@/assets/mount.jpg";

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
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-[#BBD4E8] font-body">
      {/* Hero Section - Clean and Minimal */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#BBD4E8] to-[#E8DCC8]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 opacity-20">
            <img
              src={fiveWindowsImage}
              alt="Five Windows"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#4A4A4A] mb-8 leading-tight">
              You're seeing a bigger future for your relationship <em className="text-[#6B9A9E]">and yourselves.</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="w-24 h-[2px] bg-[#8FA883] mx-auto my-12" />
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-[#4A4A4A]/80 max-w-3xl mx-auto leading-relaxed">
              And what you're seeing has more layers, more moving parts, and even more complexity.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-[#4A4A4A]/70 max-w-2xl mx-auto mt-8 leading-relaxed">
              You know it's going to take more to bring this vision to life.
            </p>
          </FadeIn>

          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            style={{ opacity }}
          >
            <ChevronDown className="w-8 h-8 text-[#6B9A9E] animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section - Clean Text Focus */}
      <section className="py-24 md:py-32 bg-[#E8DCC8]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1fr,300px] gap-16 items-start">
            {/* Main Content */}
            <div className="space-y-12">
              <FadeIn>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-[1px] bg-[#8FA883]" />
                    <span className="text-[#8FA883] text-sm tracking-[0.3em] uppercase font-medium">
                      The Invitation
                    </span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#4A4A4A] leading-tight">
                    You don't need to do it alone.
                  </h2>
                  <p className="font-display text-3xl md:text-4xl text-[#6B9A9E] italic">
                    We've got your back.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="space-y-6 text-lg md:text-xl text-[#4A4A4A]/80 leading-relaxed">
                  <p>
                    At Five Windows, we partner with couples in long-term committed relationships to clarify, prioritize, and coordinate the actions needed to reconnect and elevate what they've already built together.
                  </p>
                  <p>
                    Our proven approach to relationship renewal is both grounding and transformative. Whether you've been together for decades or are just beginning to feel the weight of routine, you can count on us to help you rediscover the extraordinary in your partnership.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Small Image Accent */}
            <div className="hidden lg:block">
              <FadeIn delay={0.2}>
                <div className="sticky top-32">
                  <img
                    src={oceanImage}
                    alt="Ocean view"
                    className="w-full aspect-square object-cover opacity-60"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Section - Inspired by Las Peregrinas */}
      <section className="py-24 md:py-32 bg-[#BBD4E8]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-[#8FA883] text-sm tracking-[0.3em] uppercase mb-4">
                The Five Windows Difference
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-[#4A4A4A] mb-6">
                This is how we'll do it:
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto" />
            </div>
          </FadeIn>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {[
              {
                title: "See the forest and the trees.",
                description: "Make decisions day-to-day that align with what you're committed to and the outcomes you care about most."
              },
              {
                title: "Trust your plan and your gut.",
                description: "Navigate effectively in real time, regardless of conditions, as we help you blend strategy with instincts and intuition."
              },
              {
                title: "Take action and take care of each other.",
                description: "Coordinate efficient and effective action reliably over time while fostering a mood of respect and shared commitment."
              },
              {
                title: "Be dreamers and do-ers.",
                description: "Stay in action and stay accountable to your goals and larger purpose while we hold your vision with you."
              },
              {
                title: "Commit to the growth of your relationship and your good life.",
                description: "Name and prioritize what matters most in both your partnership and personal lives so you don't sacrifice one for the other."
              }
            ].map((principle, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#8FA883]/20 rounded-full">
                    <div className="w-3 h-3 bg-[#8FA883] rounded-full" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-[#4A4A4A]">
                    {principle.title}
                  </h3>
                  <p className="text-[#4A4A4A]/70 leading-relaxed">
                    {principle.description}
                  </p>
                  <div className="w-12 h-[1px] bg-[#8FA883]/30" />
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <p className="text-center text-lg text-[#4A4A4A]/70 mt-16 max-w-2xl mx-auto">
              These Principles form the foundation of our work together, no matter how it's structured.
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-[#6B9A9E] hover:bg-[#6B9A9E]/90 text-white px-8 py-6 text-lg"
              >
                LEARN MORE
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* For Couples Who Section */}
      <section className="py-24 md:py-32 bg-[#E8DCC8]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[#8FA883] text-sm tracking-[0.3em] uppercase mb-4">
                For You
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-[#4A4A4A]">
                Five Windows is for couples who:
              </h2>
              <div className="w-24 h-[1px] bg-[#8FA883] mx-auto mt-8" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl mx-auto mt-12">
            {[
              "Have been together for decades and still enjoy each other's company",
              "Feel proud of and grateful for what they've built",
              "Value privacy, discretion and autonomy",
              "Are not interested in therapy or self-improvement programs",
              "Want to reconnect without drama or crisis",
              "Are ready to invest in what they've already created together"
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center border border-[#8FA883]/40 mt-1">
                    <div className="w-2 h-2 bg-[#8FA883] rounded-full" />
                  </div>
                  <p className="text-[#4A4A4A]/80 text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#BBD4E8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1fr,300px] gap-12 items-center">
            <div>
              <FadeIn>
                <h2 className="font-display text-4xl md:text-5xl text-[#4A4A4A] mb-8 leading-tight">
                  All bigger futures begin with a conversation.
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="w-24 h-[1px] bg-[#8FA883] mb-8" />
              </FadeIn>
              <FadeIn delay={0.2}>
                <Button
                  size="lg"
                  className="bg-[#6B9A9E] hover:bg-[#6B9A9E]/90 text-white px-8 py-6 text-lg"
                >
                  LET'S TALK
                </Button>
              </FadeIn>
            </div>

            <div className="hidden lg:block">
              <FadeIn delay={0.3}>
                <img
                  src={mountImage}
                  alt="Mountain landscape"
                  className="w-full aspect-square object-cover opacity-60"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-[#4A4A4A] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="font-display text-2xl mb-2">Five Windows</p>
              <p className="text-white/60 text-sm">Elevating Lasting Love</p>
            </div>

            <div className="text-center md:text-right text-sm text-white/60">
              <p className="mb-2">
                <a href="mailto:hello@fivewindows.com" className="hover:text-white transition-colors">
                  hello@fivewindows.com
                </a>
              </p>
              <p>Copyright © Five Windows. All rights reserved.</p>
              <p className="mt-2">
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy & Terms of Use
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

