const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            3D Print Lab
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#shop" className="hover:text-primary transition-colors">
              Shop
            </a>
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} 3D Print Lab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
