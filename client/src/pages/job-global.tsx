import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  Bookmark,
  Send,
  MapPin,
  Clock,
  DollarSign,
  ExternalLink,
  ArrowRight,
  Filter,
  Sparkles,
  CheckCircle2,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Job {
  id: number;
  title: string;
  platform: string;
  platformColor: string;
  fee: string;
  feeType: string;
  location: string;
  matchScore: number;
  requirements: string[];
  description: string;
  budget: string;
  deadline: string;
  skills: string[];
  postedAgo: string;
  proposals: number;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior UI/UX Designer for SaaS Platform",
    platform: "Upwork",
    platformColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    fee: "$40-60/hr",
    feeType: "Hourly",
    location: "Remote",
    matchScore: 92,
    requirements: [
      "3+ tahun pengalaman UI/UX",
      "Mahir Figma & design system",
      "Portofolio SaaS product",
    ],
    description:
      "Kami mencari UI/UX Designer berpengalaman untuk merancang ulang platform SaaS kami. Proyek ini meliputi redesign dashboard analytics, onboarding flow, dan component library. Harus memiliki pengalaman bekerja dengan tim engineering dan memahami design-to-code workflow. Preferensi untuk designer yang familiar dengan React component patterns.",
    budget: "$3,000 - $5,000",
    deadline: "30 hari",
    skills: ["Figma", "UI Design", "UX Research", "Design System"],
    postedAgo: "2 jam lalu",
    proposals: 8,
  },
  {
    id: 2,
    title: "Frontend Developer – React/Next.js",
    platform: "Contra",
    platformColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    fee: "$35-50/hr",
    feeType: "Hourly",
    location: "Remote",
    matchScore: 87,
    requirements: [
      "React & Next.js expertise",
      "TypeScript proficiency",
      "Tailwind CSS experience",
    ],
    description:
      "Startup fintech membutuhkan frontend developer untuk membangun dashboard analytics real-time. Tech stack: Next.js 14, TypeScript, Tailwind CSS, Recharts. Bekerja langsung dengan founder dan designer. Kontrak 3 bulan dengan kemungkinan perpanjangan.",
    budget: "$4,000 - $7,500",
    deadline: "14 hari",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    postedAgo: "5 jam lalu",
    proposals: 12,
  },
  {
    id: 3,
    title: "Content Writer – Tech & SaaS Blog",
    platform: "Fiverr",
    platformColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
    fee: "$200-400",
    feeType: "Fixed",
    location: "Remote",
    matchScore: 74,
    requirements: [
      "Native English writing",
      "SEO knowledge",
      "Tech industry experience",
    ],
    description:
      "Kami membutuhkan content writer untuk blog mingguan tentang SaaS, productivity tools, dan tech trends. Setiap artikel 1500-2500 kata. SEO-optimized dengan keyword research. Tone: informative tapi engaging. Portfolio blog/artikel wajib.",
    budget: "$200 - $400 per artikel",
    deadline: "7 hari",
    skills: ["Copywriting", "SEO", "Content Strategy"],
    postedAgo: "1 hari lalu",
    proposals: 24,
  },
  {
    id: 4,
    title: "Data Analyst – Python & SQL",
    platform: "Upwork",
    platformColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    fee: "$30-45/hr",
    feeType: "Hourly",
    location: "Remote",
    matchScore: 65,
    requirements: [
      "Python (Pandas, NumPy)",
      "SQL proficiency",
      "Data visualization tools",
    ],
    description:
      "E-commerce company mencari data analyst untuk menganalisis sales data, customer behavior, dan marketing performance. Membuat dashboard reporting dan memberikan insight actionable.",
    budget: "$2,000 - $4,000",
    deadline: "21 hari",
    skills: ["Python", "SQL", "Tableau", "Data Analysis"],
    postedAgo: "3 jam lalu",
    proposals: 15,
  },
  {
    id: 5,
    title: "Mobile App Designer – Fintech",
    platform: "Contra",
    platformColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    fee: "$50-70/hr",
    feeType: "Hourly",
    location: "Remote",
    matchScore: 81,
    requirements: [
      "Mobile design experience",
      "Fintech or banking app portfolio",
      "Prototyping skills",
    ],
    description:
      "Fintech startup sedang membangun mobile banking app dan membutuhkan designer untuk merancang seluruh user flow: onboarding, dashboard, transfer, dan investasi. Design di Figma dengan interactive prototype.",
    budget: "$5,000 - $8,000",
    deadline: "45 hari",
    skills: ["Mobile Design", "Figma", "Prototyping", "Fintech"],
    postedAgo: "6 jam lalu",
    proposals: 6,
  },
];

const favoriteRoles = [
  "UI Designer",
  "Frontend Dev",
  "Copywriter",
  "Data Analyst",
  "Mobile Designer",
];

export default function JobGlobal() {
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [bookmarked, setBookmarked] = useState<number[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const filtered = jobs.filter((j) => {
    const matchSearch =
      search === "" ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchSearch;
  });

  const handleSelectJob = (job: Job) => {
    setSelectedJob(job);
    setCoverLetter(
      `Halo, saya sangat tertarik dengan posisi ${job.title}. Dengan pengalaman saya di bidang ${job.skills.slice(0, 2).join(" dan ")}, saya yakin dapat memberikan kontribusi yang signifikan untuk proyek ini.\n\nSaya telah menyelesaikan beberapa proyek serupa dan memiliki pemahaman mendalam tentang kebutuhan industri ini. Saya siap memulai segera dan berdedikasi untuk memberikan hasil terbaik.\n\nTerima kasih atas pertimbangannya.`
    );
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600 dark:text-green-400";
    if (score >= 70) return "text-yellow-600 dark:text-yellow-400";
    return "text-muted-foreground";
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 85) return "bg-green-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-muted-foreground";
  };

  return (
    <div className="p-6 max-w-[1400px] mx-auto" data-testid="page-job-global">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Job Global</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Temukan pekerjaan remote yang cocok dengan profil AI-mu.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Remote UI Designer, Data Analyst..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
            data-testid="input-search-job"
          />
        </div>
        <Button variant="secondary" size="default" className="gap-1.5">
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline">Filter</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Job List — 3/4 */}
        <div className="lg:col-span-3 space-y-3">
          {filtered.map((job) => (
            <Card
              key={job.id}
              className="cursor-pointer hover:shadow-sm transition-shadow overflow-visible"
              onClick={() => handleSelectJob(job)}
              data-testid={`card-job-${job.id}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h3 className="text-sm font-semibold">{job.title}</h3>
                      <Badge
                        variant="secondary"
                        className={`text-[10px] px-1.5 py-0 ${job.platformColor}`}
                      >
                        {job.platform}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2 flex-wrap">
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {job.fee}
                      </span>
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                        {job.feeType}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.postedAgo}
                      </span>
                    </div>

                    {/* Match Score Bar */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-muted-foreground w-24 shrink-0">
                        Match Score
                      </span>
                      <div className="flex-1 max-w-40">
                        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${getScoreBarColor(job.matchScore)}`}
                            style={{ width: `${job.matchScore}%` }}
                          />
                        </div>
                      </div>
                      <span
                        className={`text-xs font-semibold tabular-nums ${getScoreColor(job.matchScore)}`}
                      >
                        {job.matchScore}%
                      </span>
                    </div>

                    {/* Requirements */}
                    <ul className="space-y-0.5">
                      {job.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="text-xs text-muted-foreground flex items-center gap-1.5"
                        >
                          <div className="w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <Button
                      size="sm"
                      className="gap-1 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectJob(job);
                      }}
                      data-testid={`button-apply-${job.id}`}
                    >
                      <Send className="h-3 w-3" />
                      Lamar
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        setBookmarked((prev) =>
                          prev.includes(job.id)
                            ? prev.filter((id) => id !== job.id)
                            : [...prev, job.id]
                        );
                      }}
                      data-testid={`button-bookmark-${job.id}`}
                    >
                      <Bookmark
                        className={`h-4 w-4 ${bookmarked.includes(job.id) ? "fill-primary text-primary" : ""}`}
                      />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Search className="h-10 w-10 mx-auto mb-3 text-muted-foreground/40" />
              <p className="text-sm">Tidak ada job ditemukan.</p>
            </div>
          )}
        </div>

        {/* Right Sidebar — 1/4 */}
        <div className="space-y-4">
          <Card data-testid="card-quick-filter">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold">
                Filter Cepat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {favoriteRoles.map((role) => (
                  <label
                    key={role}
                    className="flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <Checkbox
                      checked={selectedRoles.includes(role)}
                      onCheckedChange={(checked) => {
                        setSelectedRoles((prev) =>
                          checked
                            ? [...prev, role]
                            : prev.filter((r) => r !== role)
                        );
                      }}
                    />
                    <span>{role}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-tips">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <CardTitle className="text-sm font-semibold">
                  Tips Job Pertama
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Lengkapi profil AI 100%",
                  "Buat portofolio di Contra",
                  "Gunakan cover letter AI",
                  "Mulai dari fixed-price jobs",
                ].map((tip, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Job Detail + Proposal Dialog */}
      <Dialog
        open={!!selectedJob}
        onOpenChange={() => setSelectedJob(null)}
      >
        {selectedJob && (
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-2 flex-wrap">
                <DialogTitle className="text-lg">
                  {selectedJob.title}
                </DialogTitle>
                <Badge
                  variant="secondary"
                  className={`${selectedJob.platformColor}`}
                >
                  {selectedJob.platform}
                </Badge>
              </div>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-2">
              {/* Job Detail */}
              <div className="md:col-span-3 space-y-4">
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3.5 w-3.5" />
                    Budget: {selectedJob.budget}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    Deadline: {selectedJob.deadline}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {selectedJob.location}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Deskripsi</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Requirements</h4>
                  <ul className="space-y-1.5">
                    {selectedJob.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {selectedJob.skills.map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Proposal Panel */}
              <div className="md:col-span-2 space-y-4">
                <Card className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <h4 className="text-sm font-semibold">Proposal</h4>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">
                        Cover Letter{" "}
                        <span className="text-primary">(AI-generated)</span>
                      </label>
                      <Textarea
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        rows={8}
                        className="text-sm resize-none"
                        data-testid="textarea-cover-letter"
                      />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-2">
                        Portofolio
                      </p>
                      <div className="space-y-1.5">
                        {["SaaS Dashboard Redesign", "Mobile Banking App"].map(
                          (item) => (
                            <label
                              key={item}
                              className="flex items-center gap-2 text-sm"
                            >
                              <Checkbox defaultChecked />
                              <span>{item}</span>
                            </label>
                          )
                        )}
                      </div>
                    </div>

                    <Button
                      className="w-full gap-2"
                      data-testid="button-send-proposal"
                    >
                      <Send className="h-4 w-4" />
                      Kirim Proposal
                    </Button>

                    <p className="text-[10px] text-center text-muted-foreground">
                      {selectedJob.proposals} proposal telah dikirim
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
