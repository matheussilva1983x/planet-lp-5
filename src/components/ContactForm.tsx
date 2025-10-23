import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, User } from "lucide-react";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "O nome é obrigatório" })
    .max(100, { message: "O nome deve ter menos de 100 caracteres" }),
  phone: z
    .string()
    .trim()
    .min(8, { message: "Telefone inválido" })
    .max(20, { message: "Telefone demasiado longo" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "O e-mail deve ter menos de 255 caracteres" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

type ContactFormProps = {
  variant?: "section" | "hero";
};

export const ContactForm = ({ variant = "section" }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simular envio (em produção, conectar com backend)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contacto em breve.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const isHero = variant === "hero";
  const formContent = (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        (isHero
          ? "bg-white/90 backdrop-blur-xl ring-1 ring-black/5 border border-white/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
          : "bg-secondary border border-border shadow-xl") +
        " p-8 md:p-12 rounded-3xl animate-slide-up"
      }
      style={{ animationDelay: "0.2s" }}
    >
      <div className="space-y-6">
        {isHero && (
          <div className="mb-2">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Garanta seu imóvel na planta com condições exclusivas!</h3>
            <p className="text-sm md:text-base mt-1">
              <span className="inline-block bg-[#C2855E] text-white px-3 py-1 rounded-full shadow-md">
                Melhores oportunidades para quem se cadastra antes do lançamento.
              </span>
            </p>
          </div>
        )}
        <div>
          <Label htmlFor="name">Nome</Label>
          <div className="relative mt-2">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              id="name"
              placeholder="O seu nome completo"
              {...register("name")}
              className={(isHero ? "bg-white/95 border-white/60 shadow-sm focus-visible:ring-accent " : "") + "h-12 rounded-xl pl-10"}
            />
          </div>
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Telefone</Label>
          <div className="relative mt-2">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              placeholder="(+351) 900 000 000"
              {...register("phone")}
              className={(isHero ? "bg-white/95 border-white/60 shadow-sm focus-visible:ring-accent " : "") + "h-12 rounded-xl pl-10"}
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">E-mail</Label>
          <div className="relative mt-2">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="oseu@email.com"
              {...register("email")}
              className={(isHero ? "bg-white/95 border-white/60 shadow-sm focus-visible:ring-accent " : "") + "h-12 rounded-xl pl-10"}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="accent"
          size="lg"
          className="w-full font-semibold py-7 text-base shadow-lg transition-transform bg-[#C2855E] hover:bg-[#B67550] text-white hover:-translate-y-0.5"
          disabled={isSubmitting}
        >
          {isSubmitting ? "A enviar..." : "Quero meu acesso antecipado"}
        </Button>
        <p className="text-xs text-center mt-3" style={{ color: "#B67550" }}>
          
        </p>
      </div>
    </form>
  );

  if (variant === "hero") {
    return (
      <div id="contato" className="w-full max-w-2xl ml-auto">
        {formContent}
        <p className="text-[11px] md:text-xs text-center mt-3" style={{ color: "#FFFFFF" }}>
          Ao registar-se, garante prioridade no acesso a imóveis com condições especiais de lançamento.
        </p>
      </div>
    );
  }

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Entre em contacto</h2>
          <p className="text-lg text-muted-foreground">Preencha o formulário e a nossa equipa entrará em contacto</p>
        </div>
        {formContent}
        <p className="text-[11px] md:text-xs text-center mt-3" style={{ color: "#555555" }}>
          Ao registar-se, garante prioridade no acesso a imóveis com condições especiais de lançamento.
        </p>
      </div>
    </section>
  );
}
