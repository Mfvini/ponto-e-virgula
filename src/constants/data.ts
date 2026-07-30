import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Monitor,
  Rocket,
  RefreshCcw,
  Settings2,
  Search,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import type {
  NavItem,
  ServiceItem,
  StepItem,
  ProjectItem,
  FAQItem,
  ContactInfo,
} from "@/types";

export const navItems: NavItem[] = [
  { id: "inicio", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "portfolio", label: "Portfólio" },
  { id: "sobre", label: "Sobre" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
];

export const whatsappNumber = "5511966037119";
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20quero%20um%20site%20institucional%20para%20meu%20neg%C3%B3cio.`;

export const serviceItems: ServiceItem[] = [
  {
    title: "Sites Institucionais",
    description: "Sites claros, profissionais e responsivos para sua empresa aparecer melhor online.",
    icon: Monitor,
  },
  {
    title: "Landing Pages",
    description: "Páginas focadas em conversão para campanhas, promoções e captação de leads.",
    icon: Rocket,
  },
  {
    title: "Reformulação",
    description: "Atualizamos seu site com design moderno e usabilidade otimizada.",
    icon: RefreshCcw,
  },
  {
    title: "Manutenção",
    description: "Suporte contínuo para atualizações, correções e estabilidade do seu site.",
    icon: Settings2,
  },
  {
    title: "Otimização",
    description: "Melhoramos velocidade e desempenho para carregar rápido em qualquer dispositivo.",
    icon: Sparkles,
  },
  {
    title: "SEO Básico",
    description: "Estrutura pensada para buscas locais e primeiros resultados no Google.",
    icon: Search,
  },
];

export const processSteps: StepItem[] = [
  {
    title: "Contato via WhatsApp",
    description: "Você nos envia um briefing rápido e a gente responde com clareza sobre o projeto.",
  },
  {
    title: "Alinhamento",
    description: "Entendemos seu negócio, público e objetivo para criar a melhor experiência.",
  },
  {
    title: "Planejamento",
    description: "Definimos escopo, estrutura de páginas e cronograma realista.",
  },
  {
    title: "Desenvolvimento",
    description: "Construímos o site com foco em performance, design e conversão.",
  },
  {
    title: "Revisão",
    description: "Você revisa o site e ajustamos detalhes até ficar pronto para publicar.",
  },
  {
    title: "Publicação",
    description: "Entregamos seu site no ar, pronto para atrair clientes e gerar resultados.",
  },
];

export const portfolioProjects: ProjectItem[] = [
  {
    title: "Site Oficial da Ponto e Vírgula",
    description: "A própria vitrine da empresa, construída para demonstrar qualidade, clareza e geração de leads.",
    status: "Lançado",
  },
];

export const aboutPoints: string[] = [
  "Acreditamos em transparência: orçamentos claros e entrega pontual.",
  "Alinhamos tecnologia com resultados reais, não com jargões desnecessários.",
  "Usamos práticas de engenharia leve para proteger o seu site e acelerar o desenvolvimento.",
  "Aplicamos inteligência artificial quando ela traz agilidade sem comprometer a qualidade.",
];

export const faqItems: FAQItem[] = [
  {
    question: "Qual é o prazo para entregar um site institucional?",
    answer: "Normalmente entregamos um site institucional em 7 a 14 dias úteis, dependendo do conteúdo e da complexidade definida no briefing.",
  },
  {
    question: "O site será responsivo para celular e tablet?",
    answer: "Sim. Todos os nossos sites são pensados para funcionar bem em qualquer tela, do celular ao desktop.",
  },
  {
    question: "Vocês cuidam do site para o Google?",
    answer: "Sim. O desenvolvimento inclui estrutura e boas práticas para SEO básico e melhor visibilidade nas buscas.",
  },
  {
    question: "Como funciona o suporte depois da entrega?",
    answer: "Oferecemos manutenção e ajustes rápidos para manter o site sempre atualizado e seguro.",
  },
  {
    question: "Vocês fazem hospedagem e domínio?",
    answer: "Podemos orientar você na contratação de hospedagem e domínio, além de ajudar na publicação do site.",
  },
];

export const contactInfo: ContactInfo = {
  whatsapp: "+55 (11) 96603-7119",
  whatsappLink,
  tel: "+55 (11) 96603-7119",
  email: "ponto.virgula.contato@gmail.com",
  schedule: "Seg-Sex 9h-18h",
};

export const contactHighlights = [
  {
    icon: Phone,
    label: "Telefone",
    value: contactInfo.tel,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: contactInfo.email,
  },
  {
    icon: MessageCircle,
    label: "Atendimento",
    value: contactInfo.schedule,
  },
];
