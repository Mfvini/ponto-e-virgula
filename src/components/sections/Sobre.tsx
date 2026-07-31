import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutPoints } from "@/constants/data";

export function Sobre() {
  return (
    <section id="sobre" className="bg-white px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Sobre nós"
          description="Transparência, eficiência e desenvolvimento inteligente para entregar resultados reais." 
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="space-y-6 rounded-[2rem] border border-zinc-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-zinc-950">PONTO & VÍRGULA</h3>
            <p className="text-base leading-7 text-zinc-600">
              A Ponto e Vírgula acredita que cada empresa tem uma história única. Antes de 			desenvolver qualquer projeto, buscamos entender quem é o cliente, quais são seus 			objetivos e como podemos transformar sua presença digital em uma ferramenta para gerar confiança e novas oportunidades. Utilizamos Inteligência Artificial para acelerar o desenvolvimento, mas todas as entregas passam por revisão humana para garantir qualidade, organização e atenção aos detalhes.<br/>
              Nosso objetivo é ajudar empresas, comércios, restaurantes e prestadores de serviços a conquistarem presença digital através de sites rápidos, elegantes e profissionais.
            </p>
            <p className="text-base leading-7 text-zinc-600">
              Unimos boas práticas de engenharia de software, design leve e uso responsável de IA para acelerar o processo sem perder a qualidade.
              Todo projeto deve transmitir confiança, profissionalismo, simplicidade e eficiência.
            </p>
          </div>
          <div className="space-y-4">
            {aboutPoints.map((item) => (
              <div key={item} className="rounded-3xl border border-zinc-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-base leading-7 text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
