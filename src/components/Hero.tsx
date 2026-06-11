import { useEffect, useState } from "react";
import { PHONE_MAIN, PHONE_MAIN_RAW, REVIEWS, WHATSAPP_LINK } from "../data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-lg shadow-sky-900/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg shadow-blue-900/10 ring-1 ring-white/50">
            <img
              src="images/rapidinho-logo-mark.png"
              alt=""
              className="h-8 w-8 object-contain"
            />
          </span>
          <span className="leading-tight">
            <span
              className={`block text-sm font-extrabold tracking-tight transition-colors ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Rapidinho Resolve
            </span>
            <span
              className={`block text-[11px] font-medium transition-colors ${
                scrolled ? "text-slate-500" : "text-sky-100"
              }`}
            >
              Refrigerações
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Início", "#inicio"],
            ["Quem Somos", "#quem-somos"],
            ["Área", "#area-atendimento"],
            ["Contato", "#orcamento"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-slate-600 hover:text-blue-600"
                  : "text-sky-50 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:+${PHONE_MAIN_RAW}`}
            className={`hidden items-center gap-2 text-sm font-bold sm:flex ${
              scrolled ? "text-slate-700" : "text-white"
            }`}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
            </svg>
            {PHONE_MAIN}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all hover:scale-105 ${
              scrolled
                ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-200"
                : "bg-white text-blue-700 shadow-xl shadow-blue-900/20"
            }`}
          >
            Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}

const FLOATING_CARDS = [
  {
    img: "images/geladeira.png",
    label: "Geladeiras",
    anim: "animate-float",
    tilt: "-4deg",
  },
  {
    img: "images/maquina-lavar.png",
    label: "Máquinas de Lavar",
    anim: "animate-float-delay",
    tilt: "3deg",
  },
  {
    img: "images/ar-condicionado.png",
    label: "Ar Condicionado",
    anim: "animate-float-delay-2",
    tilt: "-3deg",
  },
  {
    img: "images/televisao.png",
    label: "Televisões",
    anim: "animate-float-delay-3",
    tilt: "4deg",
  },
];

const HERO_REVIEW_LOOP = [...REVIEWS, ...REVIEWS];

function ReviewStars({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex gap-0.5 text-amber-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={compact ? "h-3.5 w-3.5" : "h-4 w-4"}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-sky-400 via-sky-500 to-blue-600"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sky-300/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-blue-400/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pt-32 pb-20 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            Atendimento rápido em Goiânia, Aparecida e Região
          </div>

          <h1 className="animate-fade-up delay-100 mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Assistência Técnica
            <span className="block bg-gradient-to-r from-cyan-100 to-white bg-clip-text text-transparent">
              Especializada em Refrigeração
            </span>
          </h1>

          <p className="animate-fade-up delay-200 mx-auto mt-5 max-w-xl text-base text-sky-50/90 sm:text-lg">
            Conserto e manutenção de geladeiras, máquinas de lavar, ar
            condicionado e TVs — com atendimento a domicílio, preço justo e
            garantia de qualidade.
          </p>

          <div className="animate-fade-up delay-300 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-2xl shadow-blue-900/30 transition-all hover:scale-105"
            >
              <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07a8.1 8.1 0 0 1-2.39-1.47 8.96 8.96 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.35-.21-3.7.97.99-3.6-.24-.38a9.77 9.77 0 0 1-1.5-5.23c0-5.41 4.4-9.8 9.82-9.8a9.76 9.76 0 0 1 9.8 9.81c0 5.41-4.4 9.81-9.81 9.81Zm8.35-18.16A11.73 11.73 0 0 0 12.04 .2C5.55.2.26 5.49.25 11.98c0 2.08.54 4.1 1.57 5.89L.15 24l6.27-1.64a11.78 11.78 0 0 0 5.63 1.43h.01c6.49 0 11.78-5.29 11.78-11.78 0-3.15-1.22-6.11-3.44-8.34Z" />
              </svg>
              Solicitar Orçamento Agora
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href={`tel:+${PHONE_MAIN_RAW}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
              </svg>
              Ligar Agora
            </a>
          </div>
        </div>

        {/* floating 3D appliance cards */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-20 lg:grid-cols-4">
          {FLOATING_CARDS.map((card, i) => (
            <div
              key={card.label}
              className={`${card.anim} ${i % 2 === 1 ? "lg:mt-10" : ""}`}
              style={{ "--tilt": card.tilt } as React.CSSProperties}
            >
              <div className="group rounded-3xl bg-white p-4 shadow-2xl shadow-blue-900/25 transition-transform duration-300 hover:-translate-y-2 sm:p-5">
                <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-sky-50">
                  <img
                    src={card.img}
                    alt={card.label}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-1">
                  <p className="text-sm font-bold text-slate-800">
                    {card.label}
                  </p>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-8 sm:hidden">
          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-black text-white shadow-lg shadow-blue-900/10 backdrop-blur-md">
            <ReviewStars compact />
            <span>4,8 no Google</span>
          </div>

          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
            <div className="hero-review-track-mobile">
              {HERO_REVIEW_LOOP.map((review, index) => (
                <figure
                  key={`${review.name}-mobile-${index}`}
                  className="w-[300px] shrink-0 rounded-2xl bg-white/95 px-4 py-3 text-left shadow-lg shadow-blue-950/10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <ReviewStars compact />
                    <span className="text-xs font-black text-sky-600">
                      {review.name}
                    </span>
                  </div>
                  <blockquote className="review-copy mt-1 text-xs font-bold leading-5 text-slate-600">
                    “{review.text}”
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* rating badge */}
        <div className="sr-only">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-amber-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-sm font-medium text-sky-50">
            Avaliação <strong className="text-white">4,8</strong> no Google —
            clientes 100% satisfeitos
          </p>
        </div>
      </div>

      <span
        id="avaliacoes"
        className="pointer-events-none absolute bottom-36 left-0 h-px w-px"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-7 z-20 hidden sm:block">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-black text-white shadow-lg shadow-blue-900/10 backdrop-blur-md">
            <ReviewStars compact />
            <span>4,8 no Google</span>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/25 bg-white/12 py-3 shadow-2xl shadow-blue-900/15 backdrop-blur-md [mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent)]">
            <div className="hero-review-track">
              {HERO_REVIEW_LOOP.map((review, index) => (
                <figure
                  key={`${review.name}-curve-${index}`}
                  className="flex w-[360px] shrink-0 items-center gap-4 rounded-2xl bg-white px-4 py-3 text-slate-900 shadow-xl shadow-blue-950/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-black text-white">
                    {review.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <ReviewStars compact />
                      <span className="text-xs font-black text-slate-900">
                        {review.name}
                      </span>
                    </div>
                    <blockquote className="mt-1 truncate text-xs font-bold text-slate-500">
                      “{review.text}”
                    </blockquote>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* curve transition */}
      <svg
        className="block w-full text-white"
        viewBox="0 0 1440 80"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0 80h1440V20C1200 60 960 80 720 80S240 60 0 20v60Z" />
      </svg>
    </section>
  );
}
