import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, Ruler, Download, Truck, MessageSquare, Shield } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "3D Printing",
    description: "High-precision printing with premium materials for exceptional quality",
  },
  {
    icon: Ruler,
    title: "Custom Modeling",
    description: "Professional 3D modeling services to bring your concepts to reality",
  },
  {
    icon: Download,
    title: "STL Files",
    description: "Download ready-to-print STL files for your own 3D printer",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Secure packaging and quick delivery anywhere in the country",
  },
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Expert guidance on materials, designs, and printing specifications",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Every print meets our strict quality standards or we'll remake it",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Complete 3D printing solutions from design to delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-elevated group"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
