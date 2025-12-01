import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Hot Wheels Collector",
    avatar: "MC",
    rating: 5,
    text: "The custom garage display they created for my collection is absolutely incredible! Every detail is perfect, and the LED integration makes it look like a professional showroom. Best investment for my hobby.",
  },
  {
    name: "Sarah Thompson",
    role: "Model Enthusiast",
    avatar: "ST",
    rating: 5,
    text: "I ordered a custom 1:18 scale classic car model, and the quality exceeded all expectations. The level of detail is museum-grade. Their team was responsive and made sure every specification was perfect.",
  },
  {
    name: "James Rodriguez",
    role: "Small Business Owner",
    avatar: "JR",
    rating: 5,
    text: "Ordered 50 custom phone stands for my store. The turnaround was quick, quality consistent, and customers love them. Professional service from start to finish. Highly recommend for bulk orders!",
  },
  {
    name: "Emily Watson",
    role: "Gift Shopper",
    avatar: "EW",
    rating: 5,
    text: "Got a custom racing track set for my son's birthday. The packaging was excellent, and the quality is outstanding. He plays with it every day! Worth every penny for the smile it brought.",
  },
  {
    name: "David Park",
    role: "Tech Enthusiast",
    avatar: "DP",
    rating: 5,
    text: "The cable management system and desk organizers I ordered have transformed my workspace. Sleek design, perfect fit, and the custom colors match my setup exactly. Top-tier work!",
  },
  {
    name: "Lisa Martinez",
    role: "Interior Designer",
    avatar: "LM",
    rating: 5,
    text: "I've ordered multiple display pieces for client projects. The attention to detail and ability to match specific color schemes is unmatched. They understand both form and function perfectly.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of satisfied customers who've transformed their ideas into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-elevated group relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Quote icon background */}
              <Quote className="absolute -top-2 -right-2 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors" />

              <div className="relative space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-foreground/90 leading-relaxed">{testimonial.text}</p>

                {/* Author info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
