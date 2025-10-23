import { CheckCircle, Shield, Headphones } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Imóveis verificados",
    description:
      "Cada imóvel passa por análise rigorosa para garantir segurança e confiança.",
    circleBg: "bg-[#F2D5C1]",
    iconColor: "text-[#C2855E]",
  },
  {
    icon: Shield,
    title: "Segurança total",
    description:
      "Processo transparente do início ao fim, com acompanhamento personalizado.",
    circleBg: "bg-[#F2D5C1]",
    iconColor: "text-[#C2855E]",
  },
  {
    icon: Headphones,
    title: "Atendimento humano",
    description:
      "Fale com pessoas reais, prontas para entender o que você realmente busca.",
    circleBg: "bg-[#F2D5C1]",
    iconColor: "text-[#C2855E]",
  },
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-wide" style={{ color: "#000000" }}>
            Porque escolher a JoviPlanet?
          </h2>
          <p className="mt-3 text-base md:text-xl max-w-3xl mx-auto" style={{ color: "#444444" }}>
            Conectamos você ao imóvel certo, com segurança, atenção e transparência.
          </p>
          <p className="mt-4 text-base md:text-lg italic font-medium" style={{ color: "#C2855E" }}>
            Mais do que negociar imóveis, realizamos conquistas pessoais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-[12px] border border-transparent shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] hover:border-[#E5B690] animate-fade-in"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${benefit.circleBg} ring-1 ring-black/5`}>
                    <Icon className={`h-8 w-8 ${benefit.iconColor}`} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-semibold" style={{ color: "#000000" }}>
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm md:text-base leading-relaxed" style={{ color: "#555555" }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
