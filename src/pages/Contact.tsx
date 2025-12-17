import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone } from "lucide-react";

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
            Whether you're seeking couples therapy, discernment counseling, or simply want to learn more about Five Windows, I'd love to hear from you.
          </p>
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
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2">Office Location</h3>
                    <p className="text-muted-foreground">
                      Upper East Side<br />
                      New York City, NY
                    </p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      In-person and virtual sessions available
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:contact@thefivewindows.com" 
                      className="text-primary hover:underline"
                    >
                      contact@thefivewindows.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2">Licensed In</h3>
                    <p className="text-muted-foreground">
                      New York • California • Connecticut<br />
                      Washington DC • Florida
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-8 bg-card border border-border/50">
                <h3 className="font-display text-xl text-foreground mb-4">
                  Scheduling Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  For inquiries about couples therapy, individual therapy, or discernment counseling, please use the contact form or email directly. I typically respond within 24-48 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <blockquote className="font-display text-2xl md:text-3xl italic leading-relaxed">
            "The beginning of love is to let those we love be perfectly themselves."
          </blockquote>
          <p className="text-primary-foreground/70 mt-6">— Thomas Merton</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
