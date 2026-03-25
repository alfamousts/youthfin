import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Brain,
  Download,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Star,
  TrendingUp,
} from "lucide-react";

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
  {
    title: "Google UX Design Certificate",
    issuer: "Google / Coursera",
    date: "Feb 2026",
    verified: true,
  },
  {
    title: "Advanced Figma Mastery",
    issuer: "Udemy",
    date: "Jan 2026",
    verified: true,
  },
  {
    title: "React + TypeScript Bootcamp",
    issuer: "Coursera",
    date: "Des 2025",
    verified: true,
  },
  {
    title: "SEO Copywriting Fundamentals",
    issuer: "Skillshare",
    date: "Nov 2025",
    verified: false,
  },
];

const completedJobs = [
  {
    title: "SaaS Dashboard Redesign",
    client: "TechCorp",
    platform: "Upwork",
    rating: 5.0,
    amount: "$2,400",
  },
  {
    title: "Mobile Banking App Design",
    client: "FinApp",
    platform: "Contra",
    rating: 4.9,
    amount: "$3,200",
  },
  {
    title: "Landing Page Design",
    client: "StartupXYZ",
    platform: "Contra",
    rating: 5.0,
    amount: "$800",
  },
  {
    title: "Blog Content Writing (10 articles)",
    client: "MediaCo",
    platform: "Fiverr",
    rating: 4.8,
    amount: "$600",
  },
];

const skillColors: Record<string, string> = {
  Design: "bg-primary",
  Development: "bg-chart-2",
  Content: "bg-chart-3",
  Research: "bg-chart-4",
};

export default function ProfilAI() {
  return (
    <div className="p-6 max-w-[1400px] mx-auto" data-testid="page-profil-ai">
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
              <Button variant="secondary" size="sm" className="gap-1.5 shrink-0">
                <ExternalLink className="h-3.5 w-3.5" />
                Edit Profil
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
    </div>
  );
}
