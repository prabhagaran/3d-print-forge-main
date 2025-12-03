import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Premium quality materials and precision printing",
  "Expert team with years of 3D printing experience",
  "Custom design and modeling services",
  "Fast turnaround times without compromising quality",
  "Competitive pricing for hobbyists and professionals",
  "Dedicated customer support throughout your project",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Crafting Excellence
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                One Layer at a Time
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We're passionate about transforming ideas into tangible reality through cutting-edge
              3D printing technology. From intricate car models to custom Hot Wheels garages,
              every project receives our meticulous attention to detail.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a collector seeking the perfect display solution or an enthusiast
              wanting to create something unique, we combine technical expertise with creative
              problem-solving to exceed your expectations.
            </p>

            <div className="pt-4">
              <Button variant="accent" size="lg">
                Learn Our Story
              </Button>
            </div>
          </div>

          {/* Right Section - Highlights */}
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{highlight}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
