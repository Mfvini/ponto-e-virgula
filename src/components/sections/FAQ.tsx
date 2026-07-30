import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/constants/data";

export function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Perguntas frequentes"
          description="Respondemos as dúvidas mais comuns para você entender como funciona o serviço." 
        />
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
