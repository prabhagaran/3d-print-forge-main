import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import phoneStandImage from "@/assets/phone-stand.jpg";
import racingTrackImage from "@/assets/racing-track.jpg";
import classicCarsImage from "@/assets/classic-cars.jpg";
import organizerImage from "@/assets/organizer.jpg";
import displayCaseImage from "@/assets/display-case.jpg";
import modelKitImage from "@/assets/model-kit.jpg";

const products = [
  {
    id: 1,
    name: "Premium Car Phone Stand",
    category: "Gadgets",
    price: "$24.99",
    rating: 4.9,
    reviews: 127,
    image: phoneStandImage,
    badge: "Bestseller",
    description: "Sleek automotive-inspired design with adjustable viewing angles",
  },
  {
    id: 2,
    name: "Ultimate Racing Track Set",
    category: "Hot Wheels",
    price: "$89.99",
    rating: 5.0,
    reviews: 203,
    image: racingTrackImage,
    badge: "New",
    description: "Multi-level track with loops, jumps, and custom connectors",
  },
  {
    id: 3,
    name: "Classic Car Collection",
    category: "Car Models",
    price: "$149.99",
    rating: 4.8,
    reviews: 95,
    image: classicCarsImage,
    badge: "Limited",
    description: "Museum-quality vintage car models in 1:24 scale",
  },
  {
    id: 4,
    name: "Tech Desk Organizer",
    category: "Gadgets",
    price: "$34.99",
    rating: 4.7,
    reviews: 168,
    image: organizerImage,
    badge: "Popular",
    description: "Multi-compartment organizer for cables, tools, and accessories",
  },
  {
    id: 5,
    name: "LED Display Case",
    category: "Hot Wheels",
    price: "$119.99",
    rating: 4.9,
    reviews: 142,
    image: displayCaseImage,
    badge: "Premium",
    description: "Wall-mounted showcase with integrated LED lighting",
  },
  {
    id: 6,
    name: "Supercar Model Kit",
    category: "Car Models",
    price: "$64.99",
    rating: 4.8,
    reviews: 89,
    image: modelKitImage,
    badge: "New",
    description: "Detailed assembly kit with paintable parts and display stand",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="featured" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--accent))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--accent))_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="mb-2 border-primary text-primary">
            Featured Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Bestselling
            </span>{" "}
            Products
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover our most popular 3D printed items, loved by collectors and enthusiasts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-elevated hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {product.badge && (
                  <Badge
                    className="absolute top-4 right-4 bg-accent text-accent-foreground shadow-lg"
                  >
                    {product.badge}
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-60" />
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-2xl font-bold text-foreground">{product.price}</div>
                  <Button
                    variant="default"
                    size="sm"
                    className="group-hover:shadow-glow-primary"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:border-primary">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
