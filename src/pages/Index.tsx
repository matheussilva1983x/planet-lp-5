import { Button } from "@/components/ui/button";
import { Benefits } from "@/components/Benefits";
import { TrustBar } from "@/components/TrustBar";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useState } from "react";

const Index = () => {
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const isValidLead = leadName.trim().length > 1 && leadPhone.trim().length > 5 && leadEmail.trim().length > 5;

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLeadModal = () => setLeadOpen(true);
  const closeLeadModal = () => setLeadOpen(false);
  const submitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidLead) return;
    window.location.href = "https://joviplanet.com/";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with form on the right */}
      <section
        className="relative min-h-screen flex items-center bg-primary overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 58, 46, 0.4), rgba(13, 58, 46, 0.4)), url('/diferencas.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              {/* Logo como <img> com tamanho controlado */}
              <img
                src="/Design%20sem%20nome%20(8).png"
                alt="JoviPlanet"
                className="mx-auto md:mx-0 mb-0 w-40 sm:w-48 md:w-64 lg:w-[22rem] h-auto select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                style={{ objectFit: "contain", display: "block" }}
              />
              <h1 className="-mt-6 sm:-mt-8 md:-mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-1 animate-fade-in leading-tight max-w-4xl">
                Invista no seu futuro com segurança e valorização.
              </h1>
              <p
                className="text-base md:text-lg text-white/90 mb-8 md:mb-10 max-w-2xl animate-fade-in leading-relaxed"
                style={{ animationDelay: "0.2s" }}
              >
                Cadastre-se agora e receba informações completas sobre nossos empreendimentos em fase de lançamento, plantas, valores e condições especiais.
              </p>
              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button
                  variant="accent"
                  size="lg"
                  className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6 font-semibold shadow-2xl hover:scale-105 transition-transform bg-[#C2855E] hover:bg-[#B67550] text-white"
                  onClick={openLeadModal}
                >
                  Quero meu acesso antecipado
                </Button>
              </div>
            </div>
            <div className="md:justify-self-end w-full">
              <ContactForm variant="hero" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Trust / Social proof */}
      <TrustBar />

      {/* Benefits Section */}
      <Benefits />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA (moved to the end) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-5xl font-heading font-bold tracking-wide mb-8" style={{ color: "#0D3A2E" }}>
            Garanta acesso antecipado aos melhores imóveis.
          </h3>
          <Button
            variant="accent"
            size="lg"
            className="text-lg md:text-xl px-10 md:px-14 py-4 md:py-6 font-semibold shadow-xl hover:scale-[1.02] transition-transform bg-[#C2855E] hover:bg-[#B67550] text-white"
            onClick={openLeadModal}
          >
            Quero meu acesso antecipado agora
          </Button>
        </div>
      </section>

      {leadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4" onClick={closeLeadModal}>
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
            <h4 className="text-xl md:text-2xl font-heading font-semibold mb-2" style={{ color: "#0D3A2E" }}>Antes de continuar</h4>
            <p className="text-sm md:text-base mb-6" style={{ color: "#555555" }}>Preencha os seus dados para personalizarmos a sua experiência.</p>
            <form onSubmit={submitLead} className="space-y-4">
              <div>
                <label htmlFor="lead-name" className="block text-sm font-medium mb-1" style={{ color: "#0D3A2E" }}>Nome</label>
                <input id="lead-name" value={leadName} onChange={(e) => setLeadName(e.target.value)} required className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C2855E] bg-white" placeholder="O seu nome" />
              </div>
              <div>
                <label htmlFor="lead-phone" className="block text-sm font-medium mb-1" style={{ color: "#0D3A2E" }}>Telefone</label>
                <input id="lead-phone" type="tel" value={leadPhone} onChange={(e) => setLeadPhone(e.target.value)} required className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C2855E] bg-white" placeholder="(+351) 900 000 000" />
              </div>
              <div>
                <label htmlFor="lead-email" className="block text-sm font-medium mb-1" style={{ color: "#0D3A2E" }}>E-mail</label>
                <input id="lead-email" type="email" value={leadEmail} onChange={(e) => setLeadEmail(e.target.value)} required className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C2855E] bg-white" placeholder="oseu@email.com" />
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Button type="button" variant="secondary" className="px-5" onClick={closeLeadModal}>Cancelar</Button>
                <Button type="submit" className="ml-auto px-6 bg-[#C2855E] hover:bg-[#B67550] text-white" disabled={!isValidLead}>Continuar</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat phone="5599999999999" message="Olá! Preciso de ajuda para arrendar imóveis." />
    </div>
  );
};

export default Index;
