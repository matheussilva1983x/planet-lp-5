import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Ribeiro",
    role: "Comprou apartamento em Lisboa",
    text:
      "Em menos de uma semana encontrei meu apartamento perfeito. Atendimento incrível!",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&h=80&fit=crop&crop=faces",
  },
  {
    name: "Marcos Andrade",
    role: "Alugou em Porto",
    text:
      "Com a JoviPlanet encontrei um imóvel incrível e fechei negócio sem complicação!",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop&crop=faces",
  },
  {
    name: "Camila Soares",
    role: "Comprou casa no Porto",
    text:
      "A equipe foi atenciosa do início ao fim. Fiz tudo online e me senti completamente seguro.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces",
  },
];

export const Testimonials = () => {
  return (
    <section aria-label="Depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-wide" style={{ color: "#0D3A2E" }}>
            O que os nossos clientes dizem
          </h2>
          <p className="mt-2 text-sm md:text-base" style={{ color: "#555555" }}>
            Experiências reais de quem encontrou o imóvel certo com a JoviPlanet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-5 md:p-6 rounded-2xl bg-white border border-[#EAEAEA] shadow-[0_6px_18px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)]"
            >
              <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 md:h-4 md:w-4 fill-[#C2855E] text-[#C2855E]" />
                ))}
              </div>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#000" }}>
                “{t.text}”
              </p>
              <div className="mt-4 md:mt-5 flex items-center gap-2.5 md:gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-8 w-8 md:h-9 md:w-9 rounded-full object-cover ring-1 ring-black/5"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (!img.src.includes("pravatar.cc")) {
                      img.src = "https://i.pravatar.cc/80?img=15";
                    }
                  }}
                />
                <div>
                  <p className="text-sm md:text-base font-semibold" style={{ color: "#0D3A2E" }}>{t.name}</p>
                  <p className="text-xs md:text-sm" style={{ color: "#555555" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
