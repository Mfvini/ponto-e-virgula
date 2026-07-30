import { ArrowRight, CircleDollarSign } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/constants/data";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 px-6 py-20 text-white sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_35%)]" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-sky-200 shadow-lg shadow-slate-950/20">
            <CircleDollarSign className="h-4 w-4" />
            Sites que geram resultados reais para pequenos negócios.
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Criamos sites profissionais que ajudam sua empresa a conquistar mais clientes.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Desenvolvemos sua presença digital com foco em velocidade, clareza e conversão para WhatsApp. Uma landing page moderna, acessível e pronta para atrair clientes.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={whatsappLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              Falar no WhatsApp
            </Button>
            <Button href="#servicos" variant="secondary" className="w-full sm:w-auto">
              Ver serviços
            </Button>
          </div>
        </div>
        <div className="relative isolate mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/30 sm:p-10">
          <div className="absolute -right-20 top-20 h-36 w-36 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 text-white shadow-lg">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Landing page</p>
            <h2 className="mt-4 text-2xl font-semibold">Site institucional que converte</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Layout claro, CTA direto e foco em WhatsApp para transformar visitantes em contatos valiosos.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-3xl bg-slate-900/80 px-4 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                  <ArrowRight className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Projeto rápido e transparente</p>
                  <p className="text-sm text-slate-400">Planejamento e entrega sem burocracia.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl bg-slate-900/80 px-4 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                  <CircleDollarSign className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Investimento que vale a pena</p>
                  <p className="text-sm text-slate-400">Melhor custo-benefício para negócios que vendem online.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
