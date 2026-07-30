"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlignLeft, X } from "lucide-react";
import { navItems, whatsappLink } from "@/constants/data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-3 font-semibold text-zinc-950">
          <Image
            src="/ponto-virgula-P-transparente.png"
            alt="Ponto e Vírgula"
            width={160}
            height={40}
            priority
            className="block object-contain"
          />
          <span className="sr-only">Ponto e Vírgula</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-zinc-700 transition hover:text-zinc-950">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Vamos conversar
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 transition hover:border-zinc-300 lg:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <AlignLeft className="h-5 w-5" />}
        </button>
      </div>
      {isOpen ? (
        <div className="border-t border-zinc-200 bg-white/95 px-6 pb-6 lg:hidden">
          <div className="space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block rounded-3xl px-4 py-3 text-base font-medium text-zinc-700 transition hover:bg-zinc-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="block rounded-3xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Vamos conversar
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
