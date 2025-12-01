import { Card } from "@/components/ui/card";
import { Upload, Palette, Printer, Package } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Submit Your Design",
    description:
      "Upload your 3D model or describe your project. We accept STL, OBJ, and custom requests.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Choose Materials & Colors",
    description:
      "Select from premium PLA, ABS, PETG, or resin. Pick from 20+ vibrant colors and finishes.",
  },
  {
    icon: Printer,
    number: "03",
    title: "Precision Printing",
    description:
      "Our advanced printers create your model layer by layer with exceptional detail and accuracy.",
  },
  {
    icon: Package,
    number: "04",
    title: "Quality Check & Delivery",
    description:
      "Every print is inspected, cleaned, and securely packaged for fast shipping to your door.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Animated lines connecting steps */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line
            x1="25%"
            y1="50%"
            x2="75%"
            y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From concept to reality in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative p-8 bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-elevated group"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Step number watermark */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {step.number}
                </div>

                <div className="relative space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-primary group-hover:shadow-glow-primary transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-accent">STEP {step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Connecting line indicator */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
