import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Brain,
  BookOpen,
  Briefcase,
  Wallet,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Globe,
  TrendingUp,
  Shield,
  Info,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Profiling",
    desc: "Analisis kemampuan dan minat karirmu secara otomatis dengan AI",
  },
  {
    icon: BookOpen,
    title: "Skill-Up Marketplace",
    desc: "Akses ribuan kursus online untuk meningkatkan kemampuanmu",
  },
  {
    icon: Briefcase,
    title: "Job Global",
    desc: "Terhubung ke pasar kerja global dari platform terpercaya",
  },
  {
    icon: Wallet,
    title: "Virtual Credit Card",
    desc: "Bayar kursus dan terima pembayaran dengan kartu kredit virtual",
  },
];

const stats = [
  { value: "10K+", label: "Talenta Muda" },
  { value: "500+", label: "Kursus Online" },
  { value: "2K+", label: "Job Tersedia" },
  { value: "95%", label: "Tingkat Kecocokan AI" },
];

const benefits = [
  "Profiling karir berbasis AI yang akurat",
  "Kursus dari platform terpercaya dunia",
  "Peluang kerja remote dan global",
  "Kartu kredit virtual untuk transaksi aman",
  "Dashboard terintegrasi untuk semua aktivitas",
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background flex flex-col" data-testid="page-landing">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="flex items-center gap-2.5">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-label="YouthFin logo"
          >
            <rect width="32" height="32" rx="8" fill="hsl(215, 85%, 45%)" />
            <path
              d="M8 10L16 18L24 10"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="16" y1="18" x2="16" y2="24"
              stroke="white" strokeWidth="2.5" strokeLinecap="round"
            />
            <circle cx="24" cy="10" r="2.5" fill="hsl(150, 60%, 50%)" />
          </svg>
          <span className="text-lg font-bold tracking-tight">YouthFin</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/masuk">
            <Button variant="ghost" size="sm" data-testid="button-header-masuk">
              Masuk
            </Button>
          </Link>
          <Link href="/daftar">
            <Button size="sm" data-testid="button-header-daftar">
              Daftar
            </Button>
          </Link>
        </div>
      </header>

      {/* Demo Banner */}
      <div className="w-full bg-primary/5 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-center gap-2.5">
          <Info className="h-4 w-4 text-primary shrink-0" />
          <p className="text-sm text-primary">
            <span className="font-semibold">Mode Demo</span>
            <span className="text-primary/70"> — Silakan klik Masuk atau Daftar untuk menjelajahi seluruh fitur dan menu di dalam aplikasi.</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
          <svg
            width="44"
            height="44"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M8 10L16 18L24 10"
              stroke="hsl(215, 85%, 45%)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="16" y1="18" x2="16" y2="24"
              stroke="hsl(215, 85%, 45%)" strokeWidth="2.5" strokeLinecap="round"
            />
            <circle cx="24" cy="10" r="2.5" fill="hsl(150, 60%, 50%)" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3">
          Bangun Karir, Kelola Keuangan,
          <br />
          <span className="text-primary">Raih Masa Depan.</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8">
          Platform digitalisasi penciptaan lapangan kerja berbasis AI untuk menghubungkan talenta muda Indonesia ke pasar kerja global.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mb-12">
          <Link href="/daftar">
            <Button size="lg" className="gap-2 text-base px-8" data-testid="button-hero-daftar">
              Mulai Sekarang
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/masuk">
            <Button size="lg" variant="outline" className="gap-2 text-base px-8" data-testid="button-hero-masuk">
              Sudah Punya Akun
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-2xl">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-primary tabular-nums">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              Satu Platform untuk Semua Kebutuhanmu
            </h2>
            <p className="text-muted-foreground">
              Dari profiling AI hingga pembayaran, semua ada di YouthFin
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-background rounded-xl border border-border/50 p-5 space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start gap-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              Kenapa YouthFin?
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Platform yang dirancang khusus untuk talenta muda Indonesia.
            </p>
            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-xl border border-border/50 bg-muted/20 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">AI-Powered</p>
                  <p className="text-xs text-muted-foreground">Teknologi kecerdasan buatan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10">
                  <Globe className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Akses Global</p>
                  <p className="text-xs text-muted-foreground">Peluang kerja tanpa batas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-chart-3/10">
                  <Shield className="h-5 w-5 text-chart-3" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Aman & Terpercaya</p>
                  <p className="text-xs text-muted-foreground">Verifikasi KYC terintegrasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Siap Memulai Perjalanan Karirmu?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Daftar gratis dan mulai profiling AI-mu sekarang
          </p>
          <Link href="/daftar">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-base px-8"
              data-testid="button-cta-daftar"
            >
              Daftar Sekarang
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-6 border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; 2026 YouthFin — Digitalisasi Penciptaan Lapangan Kerja.{" "}
          <a
            href="https://www.perplexity.ai/computer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Created with Perplexity Computer
          </a>
        </p>
      </footer>
    </div>
  );
}
