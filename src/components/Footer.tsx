import { Linkedin, Instagram, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer
      className="text-primary-foreground py-16"
      style={{
        background: "linear-gradient(180deg, hsl(162 63% 15%), hsl(162 63% 8%))",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="JoviPlanet" className="h-12 w-12" />
              <h3 className="text-2xl font-heading font-bold">JoviPlanet</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Encontre o imóvel ideal para viver ou investir em diversos países.
              Conectamos você ao imóvel certo, com segurança, atenção e transparência.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Ligações úteis</h4>
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block"
              >
                Sobre nós
              </a>
              <a
                href="#beneficios"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block"
              >
                Benefícios
              </a>
              <a
                href="#contato"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block"
              >
                Contacto
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block"
              >
                Termos de utilização
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contacto</h4>
            <div className="text-primary-foreground/70 space-y-3">
              <p className="hover:text-primary-foreground transition-colors">
                contacto@joviplanet.com
              </p>
              <p className="hover:text-primary-foreground transition-colors">
                +55 (11) 99999-9999
              </p>
              <p className="text-sm mt-4">
                Seg - Sex: 9h às 18h<br />
                Atendimento em português,<br />
                inglês e espanhol
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} JoviPlanet. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
