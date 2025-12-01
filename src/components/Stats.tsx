import { Users, Package, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Happy Customers",
    color: "primary",
  },
  {
    icon: Package,
    value: "10,000+",
    label: "Prints Delivered",
    color: "accent",
  },
  {
    icon: Award,
    value: "99.5%",
    label: "Satisfaction Rate",
    color: "primary",
  },
  {
    icon: Zap,
    value: "24hr",
    label: "Average Turnaround",
    color: "accent",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${stat.color}/10 border border-${stat.color}/20 group-hover:bg-${stat.color}/20 transition-all duration-300 group-hover:scale-110 animate-float`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <Icon className={`w-8 h-8 text-${stat.color}`} />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
