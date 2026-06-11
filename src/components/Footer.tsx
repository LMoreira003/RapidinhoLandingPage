import {
  FOOTER_SERVICES,
  PHONE_MAIN,
  PHONE_MAIN_RAW,
  PHONE_WHATS,
  WHATSAPP_LINK,
} from "../data";

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg shadow-blue-950/20">
                <img
                  src="images/rapidinho-logo-mark.png"
                  alt=""
                  className="h-8 w-8 object-contain"
                />
              </span>
              <span>
                <span className="block text-sm font-extrabold text-white">
                  Rapidinho Resolve
                </span>
                <span className="block text-[11px] text-slate-500">
                  Refrigerações
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              Assistência técnica especializada em refrigeração e linha branca.
              Atendimento em Goiânia, Aparecida e região.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href={`tel:+${PHONE_MAIN_RAW}`}
                className="flex items-center gap-2.5 font-bold text-white transition-colors hover:text-sky-400"
              >
                <svg className="h-4 w-4 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
                </svg>
                {PHONE_MAIN}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-bold text-white transition-colors hover:text-emerald-400"
              >
                <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.4 3.64A11.73 11.73 0 0 0 12.04.2C5.55.2.26 5.49.25 11.98c0 2.08.54 4.1 1.57 5.89L.15 24l6.27-1.64a11.78 11.78 0 0 0 5.63 1.43h.01c6.49 0 11.78-5.29 11.78-11.78 0-3.15-1.22-6.11-3.44-8.37Z" />
                </svg>
                {PHONE_WHATS} (WhatsApp)
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-300 uppercase">
              Serviços em destaque
            </h4>
            <ul className="mt-5 grid gap-x-8 gap-y-2.5 text-sm sm:grid-cols-2 lg:grid-cols-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 transition-colors hover:text-sky-400"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © 2025 Refrigeração Rapidinho Resolve — Todos os direitos
            reservados.
          </p>
          <p className="mt-1.5 text-xs text-slate-600">
            Atendimento a domicílio em todos os setores de Goiânia e região
            metropolitana.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingButtons() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-full bg-emerald-500 py-3 pr-5 pl-3.5 text-white shadow-2xl shadow-emerald-500/40 transition-all hover:scale-105 hover:bg-emerald-600"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <span className="relative">
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07a8.1 8.1 0 0 1-2.39-1.47 8.96 8.96 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.35-.21-3.7.97.99-3.6-.24-.38a9.77 9.77 0 0 1-1.5-5.23c0-5.41 4.4-9.8 9.82-9.8a9.76 9.76 0 0 1 9.8 9.81c0 5.41-4.4 9.81-9.81 9.81Zm8.35-18.16A11.73 11.73 0 0 0 12.04.2C5.55.2.26 5.49.25 11.98c0 2.08.54 4.1 1.57 5.89L.15 24l6.27-1.64a11.78 11.78 0 0 0 5.63 1.43h.01c6.49 0 11.78-5.29 11.78-11.78 0-3.15-1.22-6.11-3.44-8.34Z" />
          </svg>
        </span>
        <span className="text-sm font-bold">Fale Conosco</span>
      </a>
    </div>
  );
}
