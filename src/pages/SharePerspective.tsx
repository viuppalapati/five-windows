import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const SharePerspective = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    yearsMarried: "",
    whatWorked: "",
    biggestChallenge: "",
    adviceForCouples: "",
    interestedInRetreat: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for sharing",
      description: "Your perspective is valuable and appreciated.",
    });
    setFormData({
      name: "",
      email: "",
      yearsMarried: "",
      whatWorked: "",
      biggestChallenge: "",
      adviceForCouples: "",
      interestedInRetreat: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gold-accent">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Start the Conversation</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Share Your Perspective
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your experience matters. Help us understand what long-term couples truly need and value.
          </p>
        </div>
      </section>

      {/* Survey Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="bg-card p-8 md:p-12 border border-border/50">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              A Few Questions
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-8" />
            <p className="text-muted-foreground mb-8">
              This brief survey helps us shape Five Windows to meet the real needs of couples like you. All responses are confidential.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium mb-2 block">
                    Your Name (optional)
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
                    Email (optional)
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="yearsMarried" className="text-foreground font-medium mb-2 block">
                  How many years have you been married or partnered?
                </Label>
                <Input
                  id="yearsMarried"
                  name="yearsMarried"
                  type="text"
                  value={formData.yearsMarried}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-primary focus:ring-primary"
                  placeholder="e.g., 25 years"
                />
              </div>

              <div>
                <Label htmlFor="whatWorked" className="text-foreground font-medium mb-2 block">
                  What has worked best in your relationship over the years?
                </Label>
                <Textarea
                  id="whatWorked"
                  name="whatWorked"
                  rows={4}
                  value={formData.whatWorked}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                  placeholder="Share what has helped your relationship thrive..."
                />
              </div>

              <div>
                <Label htmlFor="biggestChallenge" className="text-foreground font-medium mb-2 block">
                  What has been your biggest challenge as a long-term couple?
                </Label>
                <Textarea
                  id="biggestChallenge"
                  name="biggestChallenge"
                  rows={4}
                  value={formData.biggestChallenge}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                  placeholder="Describe a challenge you've faced or are facing..."
                />
              </div>

              <div>
                <Label htmlFor="adviceForCouples" className="text-foreground font-medium mb-2 block">
                  What advice would you give to other long-term couples?
                </Label>
                <Textarea
                  id="adviceForCouples"
                  name="adviceForCouples"
                  rows={4}
                  value={formData.adviceForCouples}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                  placeholder="Share your wisdom..."
                />
              </div>

              <div>
                <Label className="text-foreground font-medium mb-4 block">
                  Would you be interested in learning more about the Five Windows Weekend retreat?
                </Label>
                <RadioGroup
                  value={formData.interestedInRetreat}
                  onValueChange={(value) => setFormData({ ...formData, interestedInRetreat: value })}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="text-muted-foreground cursor-pointer">
                      Yes, I'd like to learn more
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="maybe" id="maybe" />
                    <Label htmlFor="maybe" className="text-muted-foreground cursor-pointer">
                      Maybe, tell me more
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="text-muted-foreground cursor-pointer">
                      Not at this time
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full">
                Submit Your Perspective
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 md:py-32 bg-teal text-teal-foreground">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Thank You
          </h2>
          <div className="w-16 h-0.5 bg-teal-foreground/50 mx-auto mb-8" />
          <p className="text-lg leading-relaxed opacity-95">
            Your perspective helps shape how Five Windows serves couples who have built lasting partnerships. We deeply appreciate you taking the time to share.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default SharePerspective;
