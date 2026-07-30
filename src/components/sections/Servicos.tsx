import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceItems } from "@/constants/data";

export function Servicos() {
  return (
    <section id="servicos" className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Serviços para seu site institucional"
          description="Tudo o que você precisa para criar, reformular ou manter um site rápido, bonito e preparado para vender."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((service) => (
            <Card key={service.title} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
