import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Car, Gamepad2, Package, Sparkles } from "lucide-react";
import hotWheelsImage from "@/assets/hot-wheels-garage.jpg";
import carModelImage from "@/assets/3d-car-model.jpg";
import gadgetsImage from "@/assets/gadgets.jpg";

const categories = [
  {
    title: "Hot Wheels Garages",
    description: "Custom display garages, tracks, and storage solutions for your collection",
    icon: Gamepad2,
    image: hotWheelsImage,
    color: "accent",
  },
  {
    title: "Car Models",
    description: "High-detail 3D printed car models from classic to modern vehicles",
    icon: Car,
    image: carModelImage,
    color: "primary",
  },
  {
    title: "Custom Gadgets",
    description: "Personalized accessories, phone stands, organizers, and more",
    icon: Package,
    image: gadgetsImage,
    color: "primary",
  },
  {
    title: "Custom Services",
    description: "Bring your unique ideas to life with our expert 3D modeling and printing",
    icon: Sparkles,
    image: null,
    color: "accent",
  },
];

const ProductCategories = () => {
  return (
    <section id="shop" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore our range of high-quality 3D printed products and services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-elevated"
              >
                {category.image ? (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  </div>
                ) : (
                  <div className="h-64 bg-gradient-surface flex items-center justify-center">
                    <Icon className={`w-24 h-24 text-${category.color}`} />
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${category.color}/10 border border-${category.color}/20`}
                      >
                        <Icon className={`w-6 h-6 text-${category.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto text-primary hover:text-primary-glow"
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
