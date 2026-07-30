import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioProjects } from "@/constants/data";

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Portfólio"
          description="Veja o site oficial da Ponto e Vírgula e saiba que novos projetos chegam em breve." 
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {portfolioProjects.map((project) => (
            <article key={project.title} className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-blue-600">Projeto em destaque</p>
                  <h3 className="mt-3 text-2xl font-semibold text-zinc-950">{project.title}</h3>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{project.status}</span>
              </div>
              <p className="text-base leading-7 text-zinc-600">{project.description}</p>
            </article>
          ))}
          <div className="rounded-[2rem] border border-dashed border-zinc-300 bg-white p-8 text-zinc-700 shadow-sm">
            <p className="text-lg font-semibold">Mais projetos em breve</p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              A vitrine está crescendo: novos sites institucionais e landing pages estarão disponíveis em breve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
