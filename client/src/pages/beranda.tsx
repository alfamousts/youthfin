import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  ArrowRight,
  CreditCard,
  TrendingUp,
  BookOpen,
  Briefcase,
  Sparkles,
} from "lucide-react";

const roleMatches = [
  { role: "UI Designer", score: 87, color: "bg-primary" },
  { role: "Frontend Dev", score: 72, color: "bg-chart-2" },
  { role: "Copywriter", score: 58, color: "bg-chart-3" },
];

const monthlyData = [28, 35, 42, 38, 55, 48, 65];

export default function Beranda() {
  return (
    <div className="p-6 max-w-[1400px] mx-auto" data-testid="page-beranda">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">
          Selamat Pagi, Andi
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Ringkasan aktivitas dan rekomendasi untuk kamu hari ini.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left column — 2/3 width */}
        <div className="lg:col-span-2 space-y-5">
          {/* AI Profile Summary Card */}
          <Card data-testid="card-ai-profile">
            <CardHeader className="flex flex-row items-center justify-between gap-2 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                  <Brain className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-base font-semibold">
                  Ringkasan Profil AI
                </CardTitle>
              </div>
              <Badge variant="secondary" className="text-xs">
                Diperbarui hari ini
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Match score teratas berdasarkan profil, skill, dan pengalamanmu.
              </p>
              <div className="space-y-3">
                {roleMatches.map((item) => (
                  <div key={item.role} className="flex items-center gap-3">
                    <span className="text-sm w-28 shrink-0 font-medium">
                      {item.role}
                    </span>
                    <div className="flex-1 relative">
                      <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${item.color}`}
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-semibold w-10 text-right tabular-nums">
                      {item.score}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps Card */}
          <Card data-testid="card-next-steps">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-accent/10">
                  <Sparkles className="h-4 w-4 text-accent" />
                </div>
                <CardTitle className="text-base font-semibold">
                  Langkah Berikutnya
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  className="flex items-center gap-3 p-4 rounded-md border border-border bg-card hover:bg-muted/40 transition-colors text-left group"
                  data-testid="cta-complete-course"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 shrink-0">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">
                      Selesaikan "Advanced Figma"
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Naik level ke Pro setelah selesai
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                </button>

                <button
                  className="flex items-center gap-3 p-4 rounded-md border border-border bg-card hover:bg-muted/40 transition-colors text-left group"
                  data-testid="cta-view-jobs"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-green-500/10 shrink-0">
                    <Briefcase className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">
                      10 job cocok minggu ini
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Remote, sesuai skillmu
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Quick stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Kursus Selesai", value: "7", delta: "+2" },
              { label: "Job Melamar", value: "12", delta: "+3" },
              { label: "Sertifikat", value: "4", delta: "+1" },
              { label: "Match Rate", value: "87%", delta: "+5%" },
            ].map((stat) => (
              <Card key={stat.label} className="p-4">
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-lg font-semibold tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">
                    {stat.delta}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Right column — 1/3 width */}
        <div className="space-y-5">
          {/* VCC Status Card */}
          <Card data-testid="card-vcc-status">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                  <CreditCard className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-base font-semibold">
                  Status VCC
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                    <span>Pemakaian</span>
                    <span className="tabular-nums">
                      Rp 1.250.000 / Rp 5.000.000
                    </span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Sisa limit</span>
                  <span className="font-semibold tabular-nums">
                    Rp 3.750.000
                  </span>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  data-testid="button-vcc-detail"
                >
                  Lihat detail kartu
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Earnings Card */}
          <Card data-testid="card-earnings">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-green-500/10">
                  <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-base font-semibold">
                  Pendapatan Bulan Ini
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-3">
                <span className="text-2xl font-bold tabular-nums">
                  $1.280
                </span>
                <span className="text-xs font-medium text-green-600 dark:text-green-400 ml-2">
                  +18%
                </span>
              </div>
              {/* Mini sparkline chart using SVG */}
              <svg
                viewBox="0 0 200 50"
                className="w-full h-12 text-primary"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="sparkGrad"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="hsl(215, 85%, 45%)"
                      stopOpacity="0.2"
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(215, 85%, 45%)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                <path
                  d={`M0,${50 - (monthlyData[0] / 65) * 45} ${monthlyData
                    .map(
                      (d, i) =>
                        `L${(i / (monthlyData.length - 1)) * 200},${50 - (d / 65) * 45}`
                    )
                    .join(" ")} L200,50 L0,50 Z`}
                  fill="url(#sparkGrad)"
                />
                <polyline
                  points={monthlyData
                    .map(
                      (d, i) =>
                        `${(i / (monthlyData.length - 1)) * 200},${50 - (d / 65) * 45}`
                    )
                    .join(" ")}
                  fill="none"
                  stroke="hsl(215, 85%, 45%)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-xs text-muted-foreground mt-2">
                Total kumulatif: $4.850
              </p>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card data-testid="card-recent-activity">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">
                Aktivitas Terakhir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    text: "Menyelesaikan 'React Advanced'",
                    time: "2 jam lalu",
                    type: "course",
                  },
                  {
                    text: "Melamar UI Designer @ Toptal",
                    time: "Kemarin",
                    type: "job",
                  },
                  {
                    text: "Menerima pembayaran $320",
                    time: "2 hari lalu",
                    type: "payment",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                        item.type === "course"
                          ? "bg-primary"
                          : item.type === "job"
                            ? "bg-chart-3"
                            : "bg-green-500"
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="text-sm">{item.text}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
