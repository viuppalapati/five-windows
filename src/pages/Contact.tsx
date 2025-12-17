import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. I'll be in touch soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Get in Touch
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            For further inquiries, please contact me at:
          </p>
          <a 
            href="mailto:inquiries@drherwitz.com" 
            className="text-xl md:text-2xl text-primary hover:underline font-display mt-4 inline-block"
          >
            inquiries@drherwitz.com
          </a>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form */}
            <div className="bg-background p-8 md:p-12 border border-border/50">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Send a Message
              </h2>
              <div className="w-12 h-0.5 bg-primary mb-8" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium mb-2 block">
                    Phone (optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground font-medium mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Contact Information
              </h2>
              <div className="w-12 h-0.5 bg-primary mb-8" />
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:inquiries@drherwitz.com" 
                      className="text-primary hover:underline"
                    >
                      inquiries@drherwitz.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="mt-12 p-8 bg-card border border-border/50">
                <h3 className="font-display text-xl text-foreground mb-4">
                  Request an Invitation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A simple, private inquiry to see whether Five Windows is the right fit for you and your partner.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I typically respond within 24-48 business hours.
                </p>
              </div>

              {/* Share Perspective Card */}
              <div className="mt-6 p-8 bg-teal text-teal-foreground">
                <h3 className="font-display text-xl mb-4">
                  Share Your Perspective
                </h3>
                <p className="leading-relaxed opacity-95 mb-6">
                  What's your point of view on this stage of partnership? I'd love to hear your thoughts and reflections.
                </p>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-teal-foreground text-teal-foreground bg-transparent hover:bg-teal-foreground hover:text-teal" 
                  asChild
                >
                  <Link to="/share-perspective">
                    Take the Survey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <blockquote className="font-display text-2xl md:text-3xl italic leading-relaxed">
            "Thank you for making me reflect on what I want in this time of life."
          </blockquote>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
