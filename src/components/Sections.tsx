import { useState } from "react";
import {
  MAPS_LINK,
  PHONE_MAIN,
  PHONE_WHATS,
  REVIEWS,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from "../data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-bold tracking-wide text-sky-600 uppercase ring-1 ring-sky-100">
      <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
      {children}
    </span>
  );
}

/* ---------------- QUEM SOMOS ---------------- */

export function About() {
  const stats = [
    { value: "4,8★", label: "Avaliação no Google" },
    { value: "100%", label: "Clientes satisfeitos" },
    { value: "Hoje", label: "Atendimento rápido" },
  ];

  return (
    <section id="quem-somos" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <SectionLabel>Quem Somos</SectionLabel>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Equipe especializada,
            <span className="block text-sky-600">serviço de qualidade.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-500">
            Estamos preparados para atender todas as suas necessidades, com uma
            equipe especializada em manutenção de geladeiras e lavadoras. Aqui
            você conta com profissionais qualificados e capacitados.
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Prezamos por um serviço de qualidade e com o preço justo, buscando
            sempre proporcionar uma experiência única através dos nossos
            serviços — entregando a satisfação como resultado.
          </p>

          <div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-4 ring-1 ring-sky-100">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white shadow-lg shadow-sky-200">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1M9 13h1m4 0h1M9 17h1m4 0h1" />
              </svg>
            </span>
            <p className="text-sm font-bold text-slate-700">
              Condições especiais
              <span className="block text-xs font-medium text-slate-500">
                para condomínios e síndicos
              </span>
            </p>
          </div>

          <div className="mt-8">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-sky-200 transition-all hover:scale-105"
            >
              Conheça Nosso Trabalho
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-50" />
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src="/images/geladeira.png"
              alt="Manutenção de geladeiras"
              className="rounded-3xl bg-white object-cover shadow-xl shadow-sky-900/10"
            />
            <img
              src="/images/maquina-lavar.png"
              alt="Manutenção de lavadoras"
              className="mt-8 rounded-3xl bg-white object-cover shadow-xl shadow-sky-900/10"
            />
          </div>
          <div className="relative mt-4 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white p-4 text-center shadow-lg shadow-sky-900/5 ring-1 ring-slate-100"
              >
                <p className="text-xl font-black text-sky-600">{s.value}</p>
                <p className="mt-1 text-[11px] font-semibold text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVIÇOS ---------------- */

const SERVICES = [
  {
    img: "/images/geladeira.png",
    title: "Geladeiras",
    desc: "Conserto de geladeiras que não gelam, side by side, frost free, Brastemp, Electrolux e todas as marcas.",
  },
  {
    img: "/images/maquina-lavar.png",
    title: "Máquinas de Lavar",
    desc: "Reparo de lavadoras e lava e seca: não centrifuga, não liga, vazamentos e demais defeitos.",
  },
  {
    img: "/images/ar-condicionado.png",
    title: "Ar Condicionado",
    desc: "Instalação, manutenção e limpeza de ar condicionado split e janela, residencial e comercial.",
  },
  {
    img: "/images/televisao.png",
    title: "Televisões",
    desc: "Diagnóstico e conserto de TVs: imagem, som, fonte e placa, com peças de qualidade.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Nossos Serviços</SectionLabel>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Tudo o que sua casa precisa,
            <span className="block text-sky-600">em um só lugar.</span>
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Manutenção especializada com atendimento residencial em Goiânia e
            região metropolitana.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-3xl bg-white p-5 shadow-lg shadow-sky-900/5 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-900/10"
            >
              <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-sky-50">
                <img
                  src={s.img}
                  alt={s.title}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                {s.desc}
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 transition-colors hover:text-blue-700"
              >
                Saiba Mais
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- VANTAGENS ---------------- */

const ADVANTAGES = [
  {
    title: "Orçamento pelo celular",
    desc: "Envie fotos e descreva o problema pelo WhatsApp. Você recebe o orçamento de forma rápida e sem compromisso.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "Atendimento residencial",
    desc: "Vamos até você! Atendimento a domicílio em todos os setores de Goiânia, Aparecida e região metropolitana.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11 12 3l9 8M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    title: "Pagamento facilitado",
    desc: "Diversas formas de pagamento para facilitar a sua vida, com preço justo e transparência do início ao fim.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2.5" />
        <path d="M2 10h20M6 15h4" />
      </svg>
    ),
  },
];

export function Advantages() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Vantagens</SectionLabel>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Por que escolher a Rapidinho Resolve?
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Confira algumas vantagens em contratar nossos serviços.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ADVANTAGES.map((a) => (
            <div
              key={a.title}
              className="rounded-3xl bg-gradient-to-b from-slate-50 to-white p-8 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-900/5"
            >
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 p-3 text-white shadow-lg shadow-sky-200">
                {a.icon}
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ORÇAMENTO ---------------- */

export function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "Olá! Vim através do Google e gostaria de solicitar um orçamento, por favor.",
      "",
      `*Nome:* ${name}`,
      `*Telefone:* ${phone}`,
      subject ? `*Assunto:* ${subject}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section
      id="orcamento"
      className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-blue-600 to-blue-700 py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide uppercase backdrop-blur-sm">
            Orçamento Online
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
            Solicite seu orçamento.
            <span className="block text-cyan-200">
              Retornaremos o mais breve!
            </span>
          </h2>
          <p className="mt-4 max-w-md text-sky-50/90">
            Dúvidas? Entre em contato, será um prazer atendê-lo! Preencha o
            formulário e fale direto com um técnico pelo WhatsApp.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07a8.1 8.1 0 0 1-2.39-1.47 8.96 8.96 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35Z" />
                  <path d="M12.05 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.35-.21-3.7.97.99-3.6-.24-.38a9.77 9.77 0 0 1-1.5-5.23c0-5.41 4.4-9.8 9.82-9.8a9.76 9.76 0 0 1 9.8 9.81c0 5.41-4.4 9.81-9.81 9.81Zm8.35-18.16A11.73 11.73 0 0 0 12.04.2C5.55.2.26 5.49.25 11.98c0 2.08.54 4.1 1.57 5.89L.15 24l6.27-1.64a11.78 11.78 0 0 0 5.63 1.43h.01c6.49 0 11.78-5.29 11.78-11.78 0-3.15-1.22-6.11-3.44-8.34Z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-medium text-sky-100">
                  WhatsApp
                </span>
                <span className="block font-bold">{PHONE_WHATS}</span>
              </span>
            </a>
            <a
              href="tel:+5562991219838"
              className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-medium text-sky-100">
                  Telefone
                </span>
                <span className="block font-bold">{PHONE_MAIN}</span>
              </span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] bg-white p-7 shadow-2xl shadow-blue-900/30 sm:p-9"
        >
          <h3 className="text-xl font-extrabold text-slate-900">
            Orçamento Online
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Preencha os campos e fale conosco pelo WhatsApp.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-600 uppercase">
                Nome *
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu primeiro nome"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-600 uppercase">
                Telefone *
              </label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(00) 0 0000-0000"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-600 uppercase">
                Assunto
              </label>
              <textarea
                rows={3}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Digite sua mensagem (ex.: geladeira não está gelando)"
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-200 transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              Enviar pelo WhatsApp →
            </button>
            <p className="text-center text-[11px] text-slate-400">
              Retornaremos o mais breve possível. Sem compromisso.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ---------------- AVALIAÇÕES ---------------- */

export function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Avaliações</SectionLabel>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Clientes 100% satisfeitos
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-5 w-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-500">
              4,8 no Google
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, idx) => (
            <figure
              key={r.name}
              className={`flex flex-col rounded-3xl bg-white p-7 shadow-lg shadow-sky-900/5 ring-1 ring-slate-100 ${
                idx === 3 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-extrabold text-white">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{r.name}</p>
                  <p className="text-xs text-slate-400">Avaliação no Google</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ÁREA DE ATENDIMENTO ---------------- */

export function Coverage() {
  const areas = [
    "Goiânia",
    "Aparecida de Goiânia",
    "Senador Canedo",
    "Trindade",
    "Região Metropolitana",
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 px-7 py-14 text-center sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-sky-200 uppercase">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              Área de Atendimento
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
              Atendimento em Goiânia, Aparecida e Região
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
              Atendimento a domicílio em todos os setores de Goiânia e região
              metropolitana — Autorizada Rapidin Resolve, Av. Central, Jardim
              Nova Esperança.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
              {areas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200"
                >
                  {a}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-xl transition-all hover:scale-105"
              >
                <svg className="h-4 w-4 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                Ver localização no Google Maps
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Fale Conosco
              </a>
            </div>

            <p className="mt-6 text-xs font-medium text-slate-400">
              ★ 4,8 estrelas no Google Maps — Autorizada Rapidin Resolve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
