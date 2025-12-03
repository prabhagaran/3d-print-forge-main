// components/Contact.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, Clock, Phone, Instagram } from "lucide-react";

const CONTACT_EMAIL = "rcfactory471@gmail.com";
const WHATSAPP_NUMBER = "+918754615471"; // include country code
const WHATSAPP_PREFILL = encodeURIComponent(
  "Hi, I found your site and would like a quote for a new project. Could you please share details?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PREFILL}`;
const INSTAGRAM_LINK = "https://www.instagram.com/_rc_factory_/"; // <-- replace with your page

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Start Your{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-xl text-muted-foreground">Get in touch and let's bring your ideas to life</p>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-8">
              {/* Email (mailto with subject & body) */}
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  "Project Inquiry – RC Factory"
                )}&body=${encodeURIComponent(
                  "Hi RC Factory Team,\n\nI would like to discuss a new project. Please get back to me with the details.\n\nThanks!"
                )}`}
                className="text-center space-y-3"
                aria-label="Email RC Factory"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Email Us</h3>
                <p className="text-sm text-muted-foreground">{CONTACT_EMAIL}</p>
              </a>

              {/* Live Chat (static block) */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border border-accent/20">
                  <MessageSquare className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-foreground">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Available 9 AM - 6 PM</p>
              </div>

              {/* Quick Response (static block) */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Quick Response</h3>
                <p className="text-sm text-muted-foreground">Within 24 hours</p>
              </div>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center space-y-3"
                aria-label="Chat on WhatsApp"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20">
                  <Phone className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="font-bold text-foreground">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Chat Instantly</p>
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center space-y-3"
                aria-label="Visit our Instagram"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-500/10 border border-pink-500/20">
                  <Instagram className="w-7 h-7 text-pink-500" />
                </div>
                <h3 className="font-bold text-foreground">Instagram</h3>
                <p className="text-sm text-muted-foreground">Follow Us</p>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Get Custom Quote
              </Button>

              <Button variant="outline" size="lg" as="a" href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
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
