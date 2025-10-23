import { useState } from "react";

type WhatsAppFloatProps = {
  phone?: string; // E.164 sem sinais, ex: 5511999999999
  message?: string;
};

export const WhatsAppFloat = ({
  phone = "5599999999999",
  message = "Olá, gostaria de saber mais sobre um imóvel.",
}: WhatsAppFloatProps) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const canContinue = name.trim().length > 1 && email.trim().length > 5 && tel.trim().length > 5;

  const start = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinue) return;
    const text = `${message}\n\nNome: ${name}\nEmail: ${email}\nTelefone: ${tel}`;
    const wa = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(wa, "_blank");
    setOpen(false);
  };

  return (
    <>
      <button
        aria-label="Fale connosco no WhatsApp"
        className="fixed right-4 bottom-6 z-50"
        onClick={() => setOpen(true)}
      >
        <div className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.47 0 .08 5.37.08 11.98c0 2.11.56 4.16 1.62 5.98L0 24l6.2-1.63a12 12 0 0 0 5.86 1.5h.01c6.6 0 12-5.39 12-12 0-3.2-1.25-6.2-3.55-8.39Zm-8.45 18.4h-.01a9.99 9.99 0 0 1-5.09-1.39l-.36-.21-3.68.96.98-3.59-.23-.37a9.95 9.95 0 0 1-1.54-5.3c0-5.51 4.49-9.99 10.01-9.99 2.67 0 5.18 1.04 7.07 2.93a9.93 9.93 0 0 1 2.93 7.07c0 5.52-4.49 10.01-10.08 10.01Zm5.55-7.49c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.96-.95 1.16c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.61-.9-2.2-.24-.59-.48-.5-.66-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.49 1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.06 4.49.71.3 1.26.48 1.7.61.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.27-.2-.57-.35Z" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#0D3A2E] text-white px-5 py-3 flex items-center justify-between">
              <p className="text-sm md:text-base font-semibold">Olá! Preencha os campos abaixo para iniciar a conversa connosco no WhatsApp</p>
              <button className="opacity-80 hover:opacity-100" onClick={() => setOpen(false)} aria-label="Fechar">×</button>
            </div>
            <form onSubmit={start} className="p-5 md:p-6 space-y-3">
              <input className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#25D366]" placeholder="Nome *" value={name} onChange={(e) => setName(e.target.value)} required />
              <input className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#25D366]" placeholder="E-mail *" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#25D366]" placeholder="Telefone (com indicativo do país) *" value={tel} onChange={(e) => setTel(e.target.value)} required />
              <button type="submit" disabled={!canContinue} className={`w-full h-11 rounded-xl font-semibold text-white transition ${canContinue ? "bg-[#25D366] hover:brightness-105" : "bg-[#25D366]/60 cursor-not-allowed"}`}>
                INICIAR CONVERSA
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
