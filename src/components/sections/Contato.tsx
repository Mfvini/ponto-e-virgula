import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactHighlights, contactInfo, whatsappLink } from "@/constants/data";

export function Contato() {
  return (
    <section id="contato" className="bg-white px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Vamos conversar?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Entre em contato e comece seu projeto hoje mesmo.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600">
              Atendimento rápido e direto via WhatsApp, com apoio por telefone e e-mail. Estamos prontos para tirar suas dúvidas e enviar uma proposta clara.
            </p>
            <div className="mt-8 space-y-4">
              {contactHighlights.map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-3xl border border-zinc-200 bg-slate-50 p-5">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950">{item.label}</p>
                    <p className="mt-1 text-sm text-zinc-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-2xl shadow-slate-950/20">
            <div className="flex items-center gap-3 text-sky-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500/10">
                <ArrowRight className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.24em]">Contato rápido</span>
            </div>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">WhatsApp</p>
                <p className="mt-2 text-lg font-semibold">{contactInfo.whatsapp}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">E-mail</p>
                <p className="mt-2 text-lg font-semibold">{contactInfo.email}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Atendimento</p>
                <p className="mt-2 text-lg font-semibold">{contactInfo.schedule}</p>
              </div>
            </div>
            <Button href={whatsappLink} target="_blank" rel="noreferrer" className="mt-10 w-full">
              Enviar mensagem
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
