import {
  MAPS_LINK,
  PHONE_MAIN,
  WHATSAPP_LINK,
} from "../data";

function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black tracking-wide uppercase ${
        dark
          ? "border border-white/20 bg-white/10 text-cyan-100"
          : "bg-sky-50 text-sky-600 ring-1 ring-sky-100"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
      {children}
    </span>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function WhatsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07a8.1 8.1 0 0 1-2.39-1.47 8.96 8.96 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.35-.21-3.7.97.99-3.6-.24-.38a9.77 9.77 0 0 1-1.5-5.23c0-5.41 4.4-9.8 9.82-9.8a9.76 9.76 0 0 1 9.8 9.81c0 5.41-4.4 9.81-9.81 9.81Zm8.35-18.16A11.73 11.73 0 0 0 12.04.2C5.55.2.26 5.49.25 11.98c0 2.08.54 4.1 1.57 5.89L.15 24l6.27-1.64a11.78 11.78 0 0 0 5.63 1.43h.01c6.49 0 11.78-5.29 11.78-11.78 0-3.15-1.22-6.11-3.44-8.34Z" />
    </svg>
  );
}

/* ---------------- QUEM SOMOS ---------------- */

const ABOUT_STEPS = [
  {
    icon: "whats",
    title: "Conta com a gente",
    desc: "Você manda o problema pelo WhatsApp com foto, vídeo ou áudio.",
  },
  {
    icon: "truck",
    title: "Vamos até você",
    desc: "Avaliamos e combinamos o melhor atendimento para o seu caso.",
  },
  {
    icon: "seal",
    title: "Resolvemos",
    desc: "Diagnóstico claro, reparo direto no ponto e sem enrolação.",
  },
];

const ABOUT_TRUST = [
  {
    icon: "shield",
    title: "Técnicos experientes",
    desc: "em refrigeração",
  },
  {
    icon: "pin",
    title: "Atendimento em",
    desc: "Goiânia e região",
  },
  {
    icon: "badge",
    title: "Serviço rápido, honesto",
    desc: "e com garantia",
  },
];

const COVERAGE_FEATURES = [
  {
    icon: "pin",
    title: "Atendimento",
    strong: "a domicílio",
    desc: "Vamos até você",
  },
  {
    icon: "shield",
    title: "Cobertura",
    strong: "ampla",
    desc: "Goiânia e região",
  },
  {
    icon: "clock",
    title: "Agilidade que",
    strong: "resolve",
    desc: "Mais rapidez para você",
  },
  {
    icon: "badge",
    title: "Serviço com",
    strong: "garantia",
    desc: "Qualidade garantida",
  },
];

function ProcessIcon({ type, className }: { type: string; className?: string }) {
  if (type === "whats") return <WhatsIcon className={className} />;

  if (type === "truck") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7h10v10H3z" />
        <path d="M13 10h4l4 4v3h-8z" />
        <path d="M6.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M17.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M3 4h7" />
        <path d="M1.5 10H7" />
        <path d="M1.5 13H5" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.5 14.7 5l3.7-.2.6 3.7 2.6 2.7-2.6 2.7-.6 3.7-3.7-.2L12 21.5l-2.7-2.5-3.7.2-.6-3.7-2.6-2.7L5 8.5l.6-3.7 3.7.2L12 2.5Z" />
      <path d="m8.5 12.2 2.2 2.2 4.8-5" />
    </svg>
  );
}

function TrustIcon({ type, className }: { type: string; className?: string }) {
  if (type === "clock") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
        <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    );
  }

  if (type === "badge") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.8 14 5l3-.3.8 2.9 2.6 1.6-1.2 2.8 1.2 2.8-2.6 1.6-.8 2.9-3-.3-2 2.2-2-2.2-3 .3-.8-2.9-2.6-1.6 1.2-2.8-1.2-2.8 2.6-1.6.8-2.9 3 .3 2-2.2Z" />
        <path d="m8.8 12.1 2 2 4.4-4.5" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 5 6v5c0 4.7 2.9 8.2 7 10 4.1-1.8 7-5.3 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

export function About() {
  return (
    <section
      id="quem-somos"
      className="relative z-10 scroll-mt-24 overflow-hidden bg-gradient-to-br from-white via-sky-50/45 to-white py-20 lg:min-h-[760px] lg:pt-36 lg:pb-28"
    >
      <div className="relative mx-auto grid max-w-[1500px] gap-12 px-5 lg:grid-cols-[0.62fr_1.38fr] lg:items-center lg:gap-14 lg:px-8 xl:gap-20">
        <div>
          <SectionLabel>Assistência rápida e confiável</SectionLabel>
          <h2 className="mt-8 max-w-xl text-4xl font-black leading-[0.96] tracking-tight text-slate-950 sm:text-6xl">
            Você manda o
            <span className="block bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              problema.
            </span>
            <span className="block whitespace-nowrap">A gente resolve</span>
            <span className="block bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              rapidinho.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-slate-500">
            Atendimento direto para refrigeração e linha branca em Goiânia e
            região.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-700 px-7 py-3.5 text-sm font-black text-white shadow-xl shadow-blue-200 transition-all hover:scale-105"
          >
            Chamar um técnico
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>

        <div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-6 xl:gap-8">
            {ABOUT_STEPS.map((item, index) => (
              <div key={item.title} className="relative">
                <article className="relative rounded-[1.8rem] bg-white px-5 pt-8 pb-7 text-center shadow-2xl shadow-blue-900/10 ring-1 ring-sky-100/80 md:min-h-[21rem] md:rounded-[2.2rem] md:px-6 md:pt-12 md:pb-8 xl:px-8">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-50 text-blue-600 md:h-28 md:w-28">
                    <ProcessIcon type={item.icon} className="h-10 w-10 md:h-14 md:w-14" />
                  </div>

                  <h3 className="mt-5 text-base font-black text-slate-950 md:mt-7 md:text-lg xl:text-xl">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[13.75rem] text-sm leading-6 text-slate-500 md:mt-4 md:text-base md:leading-7">
                    {item.desc}
                  </p>
                </article>

                {index < ABOUT_STEPS.length - 1 && (
                  <span className="relative z-10 mx-auto mt-5 mb-1 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-xl shadow-blue-900/20 md:absolute md:top-1/2 md:right-[-2.25rem] md:my-0 md:h-12 md:w-12 md:-translate-y-1/2 xl:right-[-2.5rem]">
                    <ArrowIcon className="h-5 w-5 rotate-90 md:rotate-0" />
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 grid max-w-[58rem] gap-4 rounded-[2rem] bg-white/90 p-5 shadow-2xl shadow-blue-900/10 ring-1 ring-sky-100/80 sm:grid-cols-3 sm:rounded-full sm:px-7">
            {ABOUT_TRUST.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-center gap-4 ${
                  index > 0 ? "sm:border-l sm:border-slate-200 sm:pl-6" : ""
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                  <TrustIcon type={item.icon} className="h-6 w-6" />
                </span>
                <p className="text-sm font-semibold leading-6 text-slate-600">
                  <span className="block text-slate-700">{item.title}</span>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ORÇAMENTO ---------------- */

export function QuoteForm() {
  return (
    <section
      id="orcamento"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-white via-sky-50/40 to-white py-16 lg:py-24"
    >
      <div className="relative mx-auto grid max-w-[1500px] items-center gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="order-2 lg:order-1">
          <SectionLabel>Orçamento rápido</SectionLabel>
          <h2 className="mt-7 max-w-2xl text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl">
            Clique, chame,
            <span className="block bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              e fale direto no
            </span>
            <span className="block bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              WhatsApp.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Sem formulário para preencher. O botão abre a conversa com a mensagem
            pronta e você continua pelo canal que realmente converte.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 text-sm font-black text-white shadow-xl shadow-emerald-200 transition-all hover:scale-105"
            >
              <WhatsIcon className="h-5 w-5" />
              Chamar no WhatsApp
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="tel:+5562991219838"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-black text-slate-900 shadow-lg shadow-slate-900/5 transition-colors hover:bg-slate-50"
            >
              <svg
                className="h-4 w-4 text-blue-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
              </svg>
              Ligar para {PHONE_MAIN}
            </a>
          </div>
        </div>

        <div className="order-1 overflow-hidden rounded-[2.5rem] bg-white lg:order-2">
          <img
            src="/images/rapidinho-whatsapp-phone-appliances.png"
            alt="Atendimento pelo WhatsApp"
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- ÁREA DE ATENDIMENTO ---------------- */

export function Coverage() {
  return (
    <section
      id="area-atendimento"
      className="relative scroll-mt-24 overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute right-0 top-10 h-44 w-44 opacity-50 [background-image:radial-gradient(#dbeafe_1.4px,transparent_1.4px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 opacity-60 [background-image:radial-gradient(#dbeafe_1.4px,transparent_1.4px)] [background-size:18px_18px]" />

      <div className="relative mx-auto grid max-w-[1500px] items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="order-2 lg:order-1">
          <SectionLabel>Área de Atendimento</SectionLabel>
          <h2 className="mt-7 max-w-2xl text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl">
            Goiânia, Aparecida
            <span className="block">
              e{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                região metropolitana.
              </span>
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Atendemos a domicílio todos os setores de Goiânia e cidades
            próximas.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {COVERAGE_FEATURES.map((item) => (
              <div key={item.title} className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 text-blue-600 ring-1 ring-sky-100">
                  <TrustIcon type={item.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-sm font-black leading-5 text-slate-950 sm:text-base">
                  {item.title}
                  <span className="block">{item.strong}</span>
                </h3>
                <p className="mt-2 text-xs font-semibold text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-black text-white shadow-xl shadow-slate-900/15 transition-all hover:scale-105"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6.5 8 4l8 3.5 5-2.5v13l-5 2.5L8 17l-5 2.5v-13Z" />
                <path d="M8 4v13" />
                <path d="M16 7.5v13" />
              </svg>
              Ver localização no Maps
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-black text-slate-900 shadow-lg shadow-slate-900/5 transition-colors hover:bg-slate-50"
            >
              <WhatsIcon className="h-5 w-5 text-emerald-500" />
              Fale conosco
            </a>
          </div>
        </div>

        <div className="order-1 overflow-hidden rounded-[2.4rem] bg-sky-50 shadow-2xl shadow-blue-900/10 ring-1 ring-sky-100 lg:order-2">
          <img
            src="/images/rapidinho-coverage-map-van.png"
            alt="Rota de atendimento em Goiânia e região"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
