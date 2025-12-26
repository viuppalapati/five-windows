import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

type FormStep = 1 | 2 | 3 | 4 | 5;

interface FormData {
  name: string;
  partnerName: string;
  email: string;
  message: string;
}

const InvitationForm = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    partnerName: "",
    email: "",
    message: "",
  });

  const totalSteps = 4;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as FormStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as FormStep);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim().length > 0;
      case 2:
        return formData.partnerName.trim().length > 0;
      case 3:
        return formData.email.trim().length > 0 && formData.email.includes("@");
      case 4:
        return true; // Optional field
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center bg-background pt-20">
          <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Thank you.
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              I've received your request for the Five Windows Weekend and will be in touch privately.
            </p>
            <p className="text-lg text-foreground mb-12">
              There's nothing further you need to do.
            </p>
            <div className="border-t border-border/50 pt-8">
              <p className="text-muted-foreground text-sm italic">
                The Five Windows Weekend is shaped with discretion and respect for what you've already built.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-background">
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
          <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            What Happens Next
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Once I receive your note, I'll reach out by email. We will schedule a brief conversation to ensure that the Five Windows Weekend feels aligned — for you and for the group as a whole.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Whether or not this is the right next step, I appreciate the care it takes to pause and consider this chapter.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-xl mx-auto px-6 md:px-12">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step === currentStep
                    ? "w-8 bg-primary"
                    : step < currentStep
                    ? "w-4 bg-primary/60"
                    : "w-4 bg-border"
                }`}
              />
            ))}
          </div>

          {/* Form Steps */}
          <div className="bg-background p-8 md:p-12 shadow-soft min-h-[320px] flex flex-col">
            {currentStep === 1 && (
              <div className="flex-1 flex flex-col animate-fade-in">
                <label className="font-display text-xl text-foreground mb-6">
                  Your Name
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your name"
                  className="text-lg py-6 border-border/50 focus:border-primary"
                  autoFocus
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="flex-1 flex flex-col animate-fade-in">
                <label className="font-display text-xl text-foreground mb-6">
                  Partner's Name
                </label>
                <Input
                  type="text"
                  value={formData.partnerName}
                  onChange={(e) => handleInputChange("partnerName", e.target.value)}
                  placeholder="Enter your partner's name"
                  className="text-lg py-6 border-border/50 focus:border-primary"
                  autoFocus
                />
              </div>
            )}

            {currentStep === 3 && (
              <div className="flex-1 flex flex-col animate-fade-in">
                <label className="font-display text-xl text-foreground mb-6">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email address"
                  className="text-lg py-6 border-border/50 focus:border-primary"
                  autoFocus
                />
              </div>
            )}

            {currentStep === 4 && (
              <div className="flex-1 flex flex-col animate-fade-in">
                <label className="font-display text-xl text-foreground mb-4">
                  Optional
                </label>
                <p className="text-muted-foreground mb-6">
                  If you wish, you may share a sentence or two about what drew you here.
                </p>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="What drew you here..."
                  className="text-lg border-border/50 focus:border-primary min-h-[120px] resize-none"
                  autoFocus
                />
                <p className="text-sm text-muted-foreground mt-4 italic">
                  This is entirely optional. Many couples leave this blank.
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/30">
              <div>
                {currentStep > 1 && (
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                )}
              </div>

              <div>
                {currentStep < 4 ? (
                  <Button
                    variant="gold"
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="disabled:opacity-50"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="gold" onClick={handleSubmit}>
                    Request an Invitation
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Form Microcopy */}
          {currentStep === 4 && (
            <div className="mt-8 text-center space-y-3">
              <p className="text-sm text-muted-foreground">
                This is simply a moment of contact — thoughtfully and quietly made.
              </p>
              <p className="text-sm text-muted-foreground">
                Your note will be read personally and kept confidential. You will not be added to any mailing list.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default InvitationForm;
