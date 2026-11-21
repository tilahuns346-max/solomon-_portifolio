import Link from "next/link";
import { Home, ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            404
          </h1>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The route or resource you are looking for has been relocated or does
            not exist in Solomon&apos;s portfolio.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-900 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-95 shadow-neon-green transition-all"
          >
            <Home className="w-4 h-4 text-slate-900" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
