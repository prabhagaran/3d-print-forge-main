import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 animate-glow">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Stay Updated with Our Latest
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Designs & Offers
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Get exclusive access to new products, special discounts, and 3D printing tips
              delivered to your inbox
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-card border-border focus:border-primary h-12"
            />
            <Button variant="hero" size="lg" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Join 5,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
