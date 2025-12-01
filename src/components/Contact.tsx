import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Start Your{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get in touch and let's bring your ideas to life
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Email Us</h3>
                <p className="text-sm text-muted-foreground">hello@3dprintlab.com</p>
              </div>

              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border border-accent/20">
                  <MessageSquare className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-foreground">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Available 9 AM - 6 PM</p>
              </div>

              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Quick Response</h3>
                <p className="text-sm text-muted-foreground">Within 24 hours</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Custom Quote
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
