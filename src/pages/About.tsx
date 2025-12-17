import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import aboutImage from "@/assets/about-setting.jpg";

const About = () => {
  const couplesTherapyItems = [
    "Emotional, sexual and financial betrayals",
    "Conflict avoidance",
    "Angry escalating arguments",
    "Disillusionment",
    "Difficulty managing strong emotions when differences emerge",
    "Inability to make challenging decisions together",
    "A desire to learn to work together as a team",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-primary text-sm tracking-widest uppercase mb-4">About</p>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Dr. Herwitz
              </h1>
              <div className="w-16 h-0.5 bg-primary mb-8" />
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Dr. Herwitz holds a Ph.D. in Clinical Psychology. She specializes in supporting adult development through interpersonal relationships and individual growth.
                </p>
                <p className="text-lg leading-relaxed">
                  She holds licenses to practice psychology in <span className="text-foreground">New York, California, Connecticut, DC and Florida</span>. She sees patients in person in her office on the Upper East Side of New York City; she also sees patients virtually in these states.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] bg-muted overflow-hidden shadow-medium">
                <img
                  src={aboutImage}
                  alt="Dr. Herwitz's Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="font-display text-xl md:text-2xl leading-relaxed">
            Dr. Herwitz is the Founder of Five Windows, helping couples in long term committed relationships re-connect after decades of building careers, family and community.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Experience
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>
          
          <div className="space-y-8 text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              For <span className="text-foreground font-medium">25 years</span>, Dr. Herwitz has treated adults for anxiety disorders, mood disorders, PTSD and sexual concerns.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              She uses a range of powerful psychotherapy modalities including <span className="text-foreground font-medium">The Tools®</span>, which she learned from Phil Stutz through decades under his mentorship, as well as psychodynamic, CBT, IFS and 2-chair.
            </p>
          </div>
        </div>
      </section>

      {/* Couples Therapy Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Couples Therapy
              </h2>
              <div className="w-16 h-0.5 bg-primary mb-8" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                She has extensive training and experience using <span className="text-foreground font-medium">Bader and Peterson's Developmental Model®</span> to treat couples who present with:
              </p>
              <ul className="space-y-4">
                {couplesTherapyItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border/50 p-8 md:p-12">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Discernment Counseling
              </h3>
              <div className="w-12 h-0.5 bg-primary mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Having completed training with the <span className="text-foreground font-medium">Doherty Relationship Institute</span>, Dr. Herwitz is an experienced discernment counselor.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Using the evidence based five-session Discernment Counseling protocol, she counsels couples on the brink of divorce develop clarity and confidence in determining a direction for their marriage, based on a deeper understanding of how they came to this point and of their own contributions to this outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Background
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>
          
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              While writing her dissertation on Resilient Teenage Mothers within the framework of Attachment Theory, Dr. Herwitz raised three children. She practiced, completed training in and facilitated <span className="text-foreground font-medium">RIE® Parent-Infant Observation and Discussion Groups</span> for parents and their children ages 3-24 months, promoting children's self confidence and parents' peace of mind.
            </p>
            <p>
              She graduated from <span className="text-foreground font-medium">Aspen High School</span> and <span className="text-foreground font-medium">Barnard College</span>, where she studied art history. After college she worked in fashion and tabletop design. She worked as a professional chef in Florence, Italy and NYC, Atlanta, Dallas and the Napa Valley before embarking upon earning a doctoral degree.
            </p>
            <p>
              Dr. Herwitz was married in 1995 and lives with her husband in NYC, where their adult children currently live and work.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Schedule a Consultation
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to explore what's possible in your relationship? I'd love to hear from you.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
