import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/constants/data";

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-white px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Como funciona"
          description="Veja as etapas do nosso processo, do primeiro contato até seu site no ar." 
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-zinc-200 bg-slate-50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-600 text-white text-lg font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-zinc-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
