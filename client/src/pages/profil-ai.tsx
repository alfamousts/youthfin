import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Brain,
  Download,
  Sparkles,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Star,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  Upload,
  Monitor,
  Code2,
  BarChart3,
  BriefcaseBusiness,
  FileText,
  Globe,
  Check,
  Circle,
  Loader2,
} from "lucide-react";

/* ─── Static data ─── */
const skills = [
  { name: "UI Design", level: 92, category: "Design" },
  { name: "Figma", level: 88, category: "Design" },
  { name: "Design System", level: 78, category: "Design" },
  { name: "React", level: 72, category: "Development" },
  { name: "TypeScript", level: 65, category: "Development" },
  { name: "HTML/CSS", level: 85, category: "Development" },
  { name: "Copywriting", level: 58, category: "Content" },
  { name: "SEO", level: 45, category: "Content" },
  { name: "User Research", level: 70, category: "Research" },
];

const certificates = [
  { title: "Google UX Design Certificate", issuer: "Google / Coursera", date: "Feb 2026", verified: true },
  { title: "Advanced Figma Mastery", issuer: "Udemy", date: "Jan 2026", verified: true },
  { title: "React + TypeScript Bootcamp", issuer: "Coursera", date: "Des 2025", verified: true },
  { title: "SEO Copywriting Fundamentals", issuer: "Skillshare", date: "Nov 2025", verified: false },
];

const completedJobs = [
  { title: "SaaS Dashboard Redesign", client: "TechCorp", platform: "Upwork", rating: 5.0, amount: "$2,400" },
  { title: "Mobile Banking App Design", client: "FinApp", platform: "Contra", rating: 4.9, amount: "$3,200" },
  { title: "Landing Page Design", client: "StartupXYZ", platform: "Contra", rating: 5.0, amount: "$800" },
  { title: "Blog Content Writing (10 articles)", client: "MediaCo", platform: "Fiverr", rating: 4.8, amount: "$600" },
];

const skillColors: Record<string, string> = {
  Design: "bg-primary",
  Development: "bg-chart-2",
  Content: "bg-chart-3",
  Research: "bg-chart-4",
};

/* ─── Profiling wizard data ─── */
const bidangMinat = [
  { id: "uiux", label: "UI/UX Design", icon: Monitor },
  { id: "coding", label: "Coding", icon: Code2 },
  { id: "marketing", label: "Marketing", icon: BarChart3 },
  { id: "bisnis", label: "Bisnis", icon: BriefcaseBusiness },
  { id: "content", label: "Content Writing", icon: FileText },
  { id: "data", label: "Data Science", icon: Globe },
];

const experienceLevels = ["Pemula", "Menengah", "Mahir"];

const experienceQuestions = [
  { id: "design", label: "Pengalaman di bidang desain?" },
  { id: "marketing", label: "Pengalaman di bidang marketing?" },
  { id: "coding", label: "Pengalaman di bidang coding?" },
];

const checklistItems = [
  { id: "freelance", label: "Pernah freelance" },
  { id: "kursus", label: "Pernah ikut kursus online" },
  { id: "portofolio", label: "Punya portofolio" },
];

const portfolioLinks = [
  { id: "linkedin", label: "LinkedIn" },
  { id: "github", label: "GitHub" },
  { id: "behance", label: "Behance" },
];

/* ─── Profiling Result mock ─── */
const profilingResult = {
  bidangUtama: "UI/UX Design",
  matchPercent: 80,
  skillGap: [
    { name: "Figma", mastered: true },
    { name: "Wireframing", mastered: true },
    { name: "User Research", mastered: false },
    { name: "Prototyping", mastered: false },
  ],
};

/* ─────────────────────────────── */

function ProfilingWizard({
  open,
  onClose,
}: {
  open: boolean;
  onClose: (completed: boolean) => void;
}) {
  const [step, setStep] = useState(1);
  const [selectedMinat, setSelectedMinat] = useState<string[]>([]);
  const [expLevels, setExpLevels] = useState<Record<string, string>>({});
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    freelance: true,
    kursus: false,
    portofolio: true,
  });
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const totalSteps = 3;

  const toggleMinat = (id: string) => {
    setSelectedMinat((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // step 3 → run "AI analysis"
      setAnalyzing(true);
      setTimeout(() => {
        setAnalyzing(false);
        setShowResult(true);
      }, 2500);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      setStep(3);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    // reset
    setStep(1);
    setSelectedMinat([]);
    setExpLevels({});
    setAnalyzing(false);
    setShowResult(false);
    onClose(showResult);
  };

  return (
    <Dialog open={open} onOpenChange={() => handleClose()}>
      <DialogContent className="sm:max-w-[540px] p-0 overflow-hidden gap-0">
        {/* Progress bar */}
        {!showResult && !analyzing && (
          <div className="px-6 pt-5 pb-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="button-profiling-back"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                )}
                <span className="text-sm font-semibold">Profil AI</span>
              </div>
              <span className="text-sm text-muted-foreground tabular-nums">
                {step}/{totalSteps}
              </span>
            </div>
            <div className="h-1 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Analyzing overlay */}
        {analyzing && (
          <div className="flex flex-col items-center justify-center py-20 px-6 gap-4">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-primary/20 h-16 w-16" />
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
              </div>
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-base font-semibold">Menganalisis Profil Kamu...</h3>
              <p className="text-sm text-muted-foreground">
                AI sedang mencocokkan minat, skill, dan portofoliomu
              </p>
            </div>
          </div>
        )}

        {/* Result view */}
        {showResult && !analyzing && (
          <div className="px-6 py-5 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleBack}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <span className="text-sm font-semibold">Hasil Profiling</span>
              </div>
              <Badge variant="secondary" className="gap-1">
                <Sparkles className="h-3 w-3" />
                AI Result
              </Badge>
            </div>

            {/* Profile summary */}
            <div className="flex flex-col items-center text-center gap-2">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://api.dicebear.com/9.x/notionists/svg?seed=Andi" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-semibold">Andi Rahmawan</p>
                <p className="text-sm text-muted-foreground">
                  Fresh Graduate · Jakarta
                </p>
              </div>
            </div>

            {/* Bidang Utama */}
            <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-4 space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Bidang Utama
              </p>
              <p className="text-lg font-bold">{profilingResult.bidangUtama}</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-700"
                    style={{ width: `${profilingResult.matchPercent}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-primary tabular-nums">
                  {profilingResult.matchPercent}% match
                </span>
              </div>
            </div>

            {/* Skill & Skill Gap */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Skill & Skill Gap
              </p>
              <div className="flex flex-wrap gap-2">
                {profilingResult.skillGap.map((s) => (
                  <Badge
                    key={s.name}
                    variant="outline"
                    className={`text-xs px-2.5 py-1 ${
                      s.mastered
                        ? "border-green-500/50 bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                        : "border-red-400/50 bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                    }`}
                  >
                    {s.name}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Circle className="h-2 w-2 fill-green-500 text-green-500" />
                  Dikuasai
                </span>
                <span className="flex items-center gap-1">
                  <Circle className="h-2 w-2 fill-red-400 text-red-400" />
                  Perlu belajar
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Langkah Pertama
              </p>
              <Button
                className="w-full gap-2"
                size="lg"
                data-testid="button-lihat-kursus"
                onClick={handleClose}
              >
                <BookOpen className="h-4 w-4" />
                Lihat Kursus Rekomendasi
              </Button>
              <Button
                variant="outline"
                className="w-full gap-2"
                size="lg"
                data-testid="button-aktifkan-vcc"
                onClick={handleClose}
              >
                <Briefcase className="h-4 w-4" />
                Aktifkan Kartu Kredit Virtual
              </Button>
            </div>
          </div>
        )}

        {/* Step content */}
        {!analyzing && !showResult && (
          <div className="px-6 pt-5 pb-6 space-y-5">
            {/* Step 1: Bidang Minat */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold">Bidang Minat Kamu</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Pilih satu atau lebih bidang yang kamu minati
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {bidangMinat.map((item) => {
                    const selected = selectedMinat.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleMinat(item.id)}
                        data-testid={`minat-${item.id}`}
                        className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all text-center ${
                          selected
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-primary/40 text-foreground"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Tingkat Kemampuan */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold">Tingkat Kemampuan</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Beri tahu kami skill yang sudah kamu kuasai
                  </p>
                </div>
                <div className="space-y-4">
                  {experienceQuestions.map((q) => (
                    <div key={q.id} className="space-y-2">
                      <p className="text-sm font-medium">{q.label}</p>
                      <div className="flex gap-2">
                        {experienceLevels.map((level) => {
                          const active = expLevels[q.id] === level;
                          return (
                            <button
                              key={level}
                              onClick={() =>
                                setExpLevels((prev) => ({ ...prev, [q.id]: level }))
                              }
                              data-testid={`exp-${q.id}-${level.toLowerCase()}`}
                              className={`flex-1 text-sm py-2 px-3 rounded-lg border transition-all ${
                                active
                                  ? "border-primary bg-primary text-primary-foreground font-medium"
                                  : "border-border text-muted-foreground hover:border-primary/40"
                              }`}
                            >
                              {level}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5 pt-1">
                  {checklistItems.map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <div
                        onClick={() =>
                          setChecklist((prev) => ({
                            ...prev,
                            [item.id]: !prev[item.id],
                          }))
                        }
                        data-testid={`check-${item.id}`}
                        className={`flex items-center justify-center h-5 w-5 rounded border-2 transition-all shrink-0 ${
                          checklist[item.id]
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-muted-foreground/40"
                        }`}
                      >
                        {checklist[item.id] && <Check className="h-3 w-3" />}
                      </div>
                      <span className="text-sm">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Upload CV & Portofolio */}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold">Upload CV & Portofolio</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Kami akan menganalisis profil kamu dengan AI
                  </p>
                </div>

                {/* Upload zone */}
                <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 flex flex-col items-center gap-3 hover:border-primary/40 transition-colors cursor-pointer">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted">
                    <Upload className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">Upload CV (PDF)</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Drag & drop atau tap untuk pilih file
                    </p>
                  </div>
                </div>

                {/* Portfolio links */}
                <div className="flex gap-2">
                  {portfolioLinks.map((link) => (
                    <Button
                      key={link.id}
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-1.5 text-xs"
                      data-testid={`link-${link.id}`}
                    >
                      {link.id === "github" && (
                        <Circle className="h-3 w-3" />
                      )}
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Action button */}
            <Button
              className="w-full gap-2"
              size="lg"
              onClick={handleNext}
              disabled={step === 1 && selectedMinat.length === 0}
              data-testid="button-profiling-next"
            >
              {step === totalSteps ? (
                <>
                  <Sparkles className="h-4 w-4" />
                  Jalankan Analisis AI
                </>
              ) : (
                <>
                  Berikutnya
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

/* ─── Main page ─── */
export default function ProfilAI() {
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <div className="p-6 max-w-[1400px] mx-auto" data-testid="page-profil">
      {/* Hero Section */}
      <div className="mb-6">
        <Card className="overflow-visible">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Avatar className="h-20 w-20 shrink-0">
                <AvatarImage src="https://api.dicebear.com/9.x/notionists/svg?seed=Andi" />
                <AvatarFallback className="text-xl">AR</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h1 className="text-xl font-semibold tracking-tight">
                  Andi Rahmawan
                </h1>
                <p className="text-base text-muted-foreground mt-0.5">
                  Product Designer{" "}
                  <span className="text-primary font-medium">
                    — 80% match
                  </span>
                </p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <Badge variant="secondary" className="text-xs">
                    Rising Talent
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    7 kursus selesai
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    4 sertifikat
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    $4,850 total earned
                  </Badge>
                </div>
              </div>
              <Button
                className="gap-2 shrink-0"
                onClick={() => setWizardOpen(true)}
                data-testid="button-profiling-start"
              >
                <Sparkles className="h-4 w-4" />
                Mulai Profiling Karirmu !
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left column: Skill Timeline */}
        <div className="space-y-5">
          <Card data-testid="card-skills">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                  <Brain className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-base font-semibold">
                  Skill Progress
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${skillColors[skill.category] || "bg-primary"}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">
                  Avg. Rating
                </span>
              </div>
              <span className="text-lg font-bold tabular-nums">4.93</span>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`h-3 w-3 ${s <= 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-400/50 text-yellow-400/50"}`}
                  />
                ))}
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span className="text-xs text-muted-foreground">
                  Job Success
                </span>
              </div>
              <span className="text-lg font-bold tabular-nums">100%</span>
              <p className="text-[10px] text-muted-foreground mt-1">
                4 dari 4 berhasil
              </p>
            </Card>
          </div>
        </div>

        {/* Right column: Certificates & Jobs */}
        <div className="space-y-5">
          <Card data-testid="card-certificates">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-chart-3/20">
                  <Award className="h-4 w-4 text-chart-3" />
                </div>
                <CardTitle className="text-base font-semibold">
                  Sertifikat
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certificates.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3 p-3 rounded-md bg-muted/30"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-medium truncate">
                          {cert.title}
                        </p>
                        {cert.verified && (
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 shrink-0"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-completed-jobs">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-green-500/10">
                  <Briefcase className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-base font-semibold">
                  Job Berhasil
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {completedJobs.map((job, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3 p-3 rounded-md bg-muted/30"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">
                        {job.title}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
                        <span>{job.client}</span>
                        <span>·</span>
                        <span>{job.platform}</span>
                        <span>·</span>
                        <div className="flex items-center gap-0.5">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="tabular-nums">{job.rating}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold tabular-nums text-green-600 dark:text-green-400 shrink-0">
                      {job.amount}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Profiling Wizard Modal */}
      <ProfilingWizard
        open={wizardOpen}
        onClose={(completed) => setWizardOpen(false)}
      />
    </div>
  );
}
