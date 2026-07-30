import Link from "next/link";
import Image from "next/image";
import { whatsappLink } from "@/constants/data";

export function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-slate-300 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <Link href="#inicio" className="inline-flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black border border-neutral-700 overflow-hidden shadow-sm">
              <Image
                src="/ponto-virgula-P-editada.png"
                alt="Ponto e Vírgula"
                width={80}
                height={80}
                className="h-auto w-auto object-contain block"
              />
            </div>
            <span className="text-lg font-semibold">Ponto e Vírgula</span>
          </Link>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            Desenvolvemos sites institucionais modernos e fáceis de atualizar para pequenos negócios e autônomos.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <a href="#servicos" className="transition hover:text-white">Serviços</a>
              </li>
              <li>
                <a href="#como-funciona" className="transition hover:text-white">Como funciona</a>
              </li>
              <li>
                <a href="#contato" className="transition hover:text-white">Contato</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="transition hover:text-white">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:ponto.virgula.contato@gmail.com" className="transition hover:text-white">
                  ponto.virgula.contato@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Créditos</h3>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Direitos autorais © {new Date().getFullYear()} Ponto e Vírgula. Desenvolvido por Ponto e Vírgula.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
