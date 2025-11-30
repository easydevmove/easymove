import type { NavItem, Service, HowItWorksStep, Testimonial, FAQItem, GalleryImage } from '@/lib/types/definitions';
import { Truck, Box, Warehouse, Star, Wrench, ShieldCheck, MapPin, Phone, Mail, Building } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const navItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Como funciona', href: '/#como-funciona' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Orçamento', href: '/orcamento' },
];

export const services: Service[] = [
  {
    imageUrl: '/videos/caminhao-bau.png',
    title: 'Mudança Residencial',
    description: 'Transporte seguro e eficiente para sua casa ou apartamento, em qualquer lugar do Brasil.',
  },
  {
    imageUrl: '/videos/caixass.png',
    title: 'Embalagem Profissional',
    description: 'Nossa equipe cuida da embalagem de seus pertences com materiais de alta qualidade.',
  },
  {
    imageUrl: '/videos/predio-comercial.png',
    title: 'Mudança Comercial',
    description: 'Planejamento e execução para escritórios e empresas com o mínimo de impacto em suas operações.',
  },
  {
    imageUrl: '/videos/caixa-de-ferramentas.png',
    title: 'Desmontagem/Montagem',
    description: 'Serviço de desmontagem e montagem de móveis para facilitar sua mudança.',
  },
  {
    imageUrl: '/videos/escudo.png',
    title: 'Seguro da Carga (opcional)',
    description: 'Proteção completa para seus bens. Oferecemos seguro opcional para sua tranquilidade.',
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  { step: 1, title: 'Solicitação', description: 'Preencha nosso formulário ou chame no WhatsApp para solicitar um orçamento rápido.' },
  { step: 2, title: 'Levantamento', description: 'Avaliamos os detalhes da sua mudança para fornecer um orçamento preciso e personalizado.' },
  { step: 3, title: 'Agendamento', description: 'Com o orçamento aprovado, agendamos a melhor data e horário para sua mudança.' },
  { step: 4, title: 'Execução', description: 'Nossa equipe realiza a mudança com cuidado, eficiência e no prazo combinado.' },
];

export const testimonials: Testimonial[] = [
  { name: 'Mariana S.', location: 'Curitiba, PR', quote: 'A equipe foi super profissional e cuidadosa. Minha mudança foi mais tranquila do que eu imaginava. Recomendo!' },
  { name: 'Rafael P.', location: 'São Paulo, SP', quote: 'Contratei a mudança interestadual e fiquei impressionado com a pontualidade e organização. Chegou tudo perfeito.' },
  { name: 'Juliana C.', location: 'Belo Horizonte, MG', quote: 'Serviço impecável! A embalagem foi o diferencial, tudo muito bem protegido. Nota 10!' },
  { name: 'Fernando L.', location: 'Porto Alegre, RS', quote: 'Excelente custo-benefício. A equipe é muito ágil e prestativa. Facilitaram todo o processo para mim.' },
  { name: 'Ana B.', location: 'Rio de Janeiro, RJ', quote: 'Usamos o guarda-móveis por um mês e foi a solução perfeita. Tudo seguro e acessível. Ótimo atendimento.' },
];

export const faqItems: FAQItem[] = [
  {
    question: 'O que está incluso no orçamento da mudança?',
    answer: 'O orçamento base inclui o caminhão, motorista e equipe de carregadores. Serviços adicionais como embalagem, desmontagem/montagem de móveis e seguro podem ser contratados separadamente.',
  },
  {
    question: 'Vocês realizam mudanças aos finais de semana e feriados?',
    answer: 'Sim, trabalhamos aos sábados, domingos e feriados, mediante agendamento prévio e verificação de disponibilidade. Pode haver um acréscimo no valor para essas datas.',
  },
  {
    question: 'Como funciona o transporte de itens especiais?',
    answer: 'Itens como pianos, cofres, obras de arte ou equipamentos sensíveis recebem embalagem especial e são manuseados por uma equipe treinada para garantir a máxima segurança durante o transporte.',
  },
  {
    question: 'Preciso providenciar o material de embalagem?',
    answer: 'Não é necessário. Se você contratar nosso serviço de embalagem, nós fornecemos todo o material: caixas de diversos tamanhos, plástico-bolha, fitas e o que mais for preciso.',
  },
  {
    question: 'Como é feito o transporte em prédios com escada ou sem elevador?',
    answer: 'Nossa equipe é treinada para realizar o transporte por escadas. É importante informar o andar e a ausência de elevador no momento do orçamento, pois o içamento de itens pode ser necessário e tem um custo adicional.',
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos pagamento via Pix, transferência bancária e cartão de crédito (com parcelamento sujeito a taxas). O pagamento é geralmente feito com um sinal no agendamento e o restante na finalização do serviço.',
  },
];

export const footerContacts = [
    { icon: Phone, text: '41 9 9537-8521', href: 'https://wa.me/5541995378521' },
    { icon: Mail, text: 'easymovetransportes@gmail.com', href: 'mailto:easymovetransportes@gmail.com' },
    { icon: MapPin, text: 'Curitiba, PR - Atendemos todo o Brasil', href: '#cidades' },
]

export const galleryImages: GalleryImage[] = [
    {
      id: "caminhao-estrada",
      description: "Caminhão de mudança em uma estrada.",
      imageUrl: "/videos/c1.png",
      imageHint: "moving truck road"
    },
    {
      id: "caminhao-caixas",
      description: "Caminhão de mudança com caixas.",
      imageUrl: "/videos/c2.png",
      imageHint: "moving truck boxes"
    },
    {
      id: "homem-caixas",
      description: "Homem carregando caixas de mudança.",
      imageUrl: "/videos/c3.png",
      imageHint: "man carrying boxes"
    },
    {
      id: "caixas-empilhadas",
      description: "Caixas de mudança empilhadas.",
      imageUrl: "/videos/c4.png",
      imageHint: "stacked boxes"
    },
    {
      id: "caminhao-predio",
      description: "Caminhão de mudança em frente a um prédio.",
      imageUrl: "/videos/c5.png",
      imageHint: "moving truck building"
    }
];
