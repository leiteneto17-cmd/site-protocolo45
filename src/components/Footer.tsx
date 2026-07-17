import { Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[var(--surface-1)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--cyan-vivid)] to-[var(--blue-royal)] flex items-center justify-center">
              <Compass className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-sm font-bold"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span className="text-[var(--cyan-vivid)]">PROTOCOLO</span>{" "}
              <span className="text-white">45</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="/termos"
              className="text-xs text-[var(--text-muted)] hover:text-white transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="/privacidade"
              className="text-xs text-[var(--text-muted)] hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-[var(--text-muted)]">
              © {new Date().getFullYear()} PROTOCOLO 45.
              Todos os direitos reservados.
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Criado por{" "}
              <span className="text-[var(--text-secondary)]">Paulo Leite</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
