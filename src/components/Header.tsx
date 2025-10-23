import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="JoviPlanet" className="h-10 w-10" />
            <span className="text-2xl font-heading font-bold text-primary">
              JoviPlanet
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Imóveis
            </a>
            <a
              href="#beneficios"
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <Button variant="ghost" onClick={scrollToContact}>
              Contacto
            </Button>
          </nav>

          <Button variant="hero" size="lg" className="hidden md:flex">
            Procurar imóveis
          </Button>

          <Button
            variant="hero"
            size="default"
            className="md:hidden"
            onClick={scrollToContact}
          >
            Contacto
          </Button>
        </div>
      </div>
    </header>
  );
};
