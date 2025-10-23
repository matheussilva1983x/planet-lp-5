import { CheckCircle, Globe2, HomeIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CountUp = ({ end, suffix = "", duration = 1200 }: { end: number; suffix?: string; duration?: number }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTs = performance.now();
          const from = 0;
          const to = end;
          const step = (now: number) => {
            const t = Math.min(1, (now - startTs) / duration);
            const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
            setValue(Math.round(from + (to - from) * eased));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString("pt-PT")}
      {suffix}
    </span>
  );
};

export const TrustBar = () => {
  return (
    <section aria-label="Bloco de confiança" className="py-10 md:py-12 bg-white/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="flex items-center gap-4 p-5 rounded-xl border border-[#EAEAEA] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.05)]">
            <div className="h-12 w-12 rounded-full bg-[#F2D5C1] flex items-center justify-center ring-1 ring-black/5">
              <HomeIcon className="h-6 w-6 text-[#C2855E]" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold" style={{ color: "#0D3A2E" }}>
                <CountUp end={2000} suffix="+" />
              </p>
              <p className="text-sm" style={{ color: "#555555" }}>imóveis</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-xl border border-[#EAEAEA] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.05)]">
            <div className="h-12 w-12 rounded-full bg-[#F2D5C1] flex items-center justify-center ring-1 ring-black/5">
              <CheckCircle className="h-6 w-6 text-[#C2855E]" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold" style={{ color: "#0D3A2E" }}>
                <CountUp end={98} suffix="%" />
              </p>
              <p className="text-sm" style={{ color: "#555555" }}>satisfação</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-xl border border-[#EAEAEA] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.05)]">
            <div className="h-12 w-12 rounded-full bg-[#F2D5C1] flex items-center justify-center ring-1 ring-black/5">
              <Globe2 className="h-6 w-6 text-[#C2855E]" />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold" style={{ color: "#0D3A2E" }}>
                <CountUp end={10} suffix="+" />
              </p>
              <p className="text-sm" style={{ color: "#555555" }}>países</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm md:text-base font-medium" style={{ color: "#C2855E" }}>
          
        </p>
      </div>
    </section>
  );
};
