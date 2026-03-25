import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  Star,
  CreditCard,
  BookOpen,
  Filter,
  X,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Course {
  id: number;
  title: string;
  platform: string;
  platformLogo: string;
  rating: number;
  reviews: number;
  price: string;
  priceNum: number;
  duration: string;
  level: string;
  skills: string[];
  recommended: boolean;
  thumbnail: string;
  description: string;
  outcomes: string[];
  syllabus: string[];
  skillGap: "Tinggi" | "Sedang" | "Rendah";
}

const courses: Course[] = [
  {
    id: 1,
    title: "Advanced Figma: Design System Mastery",
    platform: "Udemy",
    platformLogo: "U",
    rating: 4.8,
    reviews: 2341,
    price: "$12.99",
    priceNum: 12.99,
    duration: "18 jam",
    level: "Intermediate",
    skills: ["UI Design", "Figma", "Design System"],
    recommended: true,
    thumbnail: "",
    description:
      "Pelajari cara membangun design system yang scalable di Figma. Dari component variants, auto-layout, hingga token management.",
    outcomes: [
      "Membangun design system dari nol",
      "Menguasai auto-layout dan variants",
      "Token management & theming",
      "Handoff ke developer",
    ],
    syllabus: [
      "Pengenalan Design System (2 jam)",
      "Component Architecture (4 jam)",
      "Auto Layout Mastery (3 jam)",
      "Variants & Properties (4 jam)",
      "Token Management (3 jam)",
      "Dev Handoff & Documentation (2 jam)",
    ],
    skillGap: "Tinggi",
  },
  {
    id: 2,
    title: "React + TypeScript: Build Modern Web Apps",
    platform: "Coursera",
    platformLogo: "C",
    rating: 4.7,
    reviews: 1856,
    price: "$49.99",
    priceNum: 49.99,
    duration: "30 jam",
    level: "Intermediate",
    skills: ["React", "TypeScript", "Frontend"],
    recommended: true,
    thumbnail: "",
    description:
      "Kursus lengkap membangun web app modern dengan React dan TypeScript. Termasuk state management, routing, dan API integration.",
    outcomes: [
      "Membangun SPA dengan React + TS",
      "State management dengan Zustand/Redux",
      "API integration & data fetching",
      "Testing & deployment",
    ],
    syllabus: [
      "TypeScript Fundamentals (5 jam)",
      "React Core Concepts (6 jam)",
      "State Management (5 jam)",
      "Routing & Navigation (3 jam)",
      "API Integration (5 jam)",
      "Testing & CI/CD (6 jam)",
    ],
    skillGap: "Sedang",
  },
  {
    id: 3,
    title: "Python for Data Analysis",
    platform: "Udemy",
    platformLogo: "U",
    rating: 4.6,
    reviews: 3412,
    price: "$14.99",
    priceNum: 14.99,
    duration: "24 jam",
    level: "Beginner",
    skills: ["Python", "Data Analysis", "Pandas"],
    recommended: false,
    thumbnail: "",
    description:
      "Dari nol hingga mahir analisis data dengan Python. Meliputi Pandas, NumPy, Matplotlib, dan proyek nyata.",
    outcomes: [
      "Menguasai Python untuk data",
      "Analisis data dengan Pandas",
      "Visualisasi dengan Matplotlib",
      "Proyek portofolio",
    ],
    syllabus: [
      "Python Basics (4 jam)",
      "NumPy Fundamentals (4 jam)",
      "Pandas Deep Dive (6 jam)",
      "Data Visualization (4 jam)",
      "Real-World Projects (6 jam)",
    ],
    skillGap: "Rendah",
  },
  {
    id: 4,
    title: "SEO Copywriting Masterclass",
    platform: "Skillshare",
    platformLogo: "S",
    rating: 4.5,
    reviews: 982,
    price: "$9.99",
    priceNum: 9.99,
    duration: "8 jam",
    level: "Beginner",
    skills: ["Copywriting", "SEO", "Content"],
    recommended: true,
    thumbnail: "",
    description:
      "Kuasai seni menulis copy yang menjual sekaligus ramah mesin pencari. Teknik storytelling, headline formula, dan keyword strategy.",
    outcomes: [
      "Menulis copy yang konversi tinggi",
      "Optimasi konten untuk SEO",
      "Headline formula yang terbukti",
      "Content strategy",
    ],
    syllabus: [
      "Copywriting Fundamentals (2 jam)",
      "SEO Basics (2 jam)",
      "Headline & Hook Writing (2 jam)",
      "Advanced Techniques (2 jam)",
    ],
    skillGap: "Tinggi",
  },
  {
    id: 5,
    title: "Cloud Computing with AWS",
    platform: "Coursera",
    platformLogo: "C",
    rating: 4.7,
    reviews: 1567,
    price: "$39.99",
    priceNum: 39.99,
    duration: "36 jam",
    level: "Advanced",
    skills: ["AWS", "Cloud", "DevOps"],
    recommended: false,
    thumbnail: "",
    description:
      "Persiapan AWS Solutions Architect. EC2, S3, Lambda, VPC, dan arsitektur cloud yang scalable.",
    outcomes: [
      "Arsitektur cloud di AWS",
      "Deploy & manage services",
      "Security & compliance",
      "Cost optimization",
    ],
    syllabus: [
      "AWS Overview (4 jam)",
      "Compute & Storage (8 jam)",
      "Networking & Security (8 jam)",
      "Serverless & Containers (8 jam)",
      "Architecture Patterns (8 jam)",
    ],
    skillGap: "Rendah",
  },
  {
    id: 6,
    title: "UX Research Methods",
    platform: "Udemy",
    platformLogo: "U",
    rating: 4.9,
    reviews: 789,
    price: "$19.99",
    priceNum: 19.99,
    duration: "14 jam",
    level: "Intermediate",
    skills: ["UX Research", "User Testing", "Analytics"],
    recommended: false,
    thumbnail: "",
    description:
      "Pelajari metode riset UX dari user interview, usability testing, survey design, hingga data analysis.",
    outcomes: [
      "Merancang riset UX",
      "Usability testing",
      "Survey & interview",
      "Data synthesis & reporting",
    ],
    syllabus: [
      "Research Planning (3 jam)",
      "Qualitative Methods (4 jam)",
      "Quantitative Methods (3 jam)",
      "Analysis & Reporting (4 jam)",
    ],
    skillGap: "Sedang",
  },
];

const platformColors: Record<string, string> = {
  U: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  C: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  S: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
};

const skillGapColors: Record<string, string> = {
  Tinggi:
    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  Sedang:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  Rendah:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
};

const courseColors = [
  "from-blue-500/20 to-indigo-500/10",
  "from-emerald-500/20 to-teal-500/10",
  "from-amber-500/20 to-orange-500/10",
  "from-purple-500/20 to-pink-500/10",
  "from-cyan-500/20 to-blue-500/10",
  "from-rose-500/20 to-red-500/10",
];

export default function SkillUp() {
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [filterLevel, setFilterLevel] = useState<string | null>(null);

  const filtered = courses.filter((c) => {
    const matchSearch =
      search === "" ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchLevel = !filterLevel || c.level === filterLevel;
    return matchSearch && matchLevel;
  });

  return (
    <div className="p-6 max-w-[1400px] mx-auto" data-testid="page-skill-up">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Skill-Up</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Temukan kursus terbaik untuk meningkatkan skill dan match score-mu.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Belajar apa hari ini?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
            data-testid="input-search-course"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <Button
              key={level}
              size="sm"
              variant={filterLevel === level ? "default" : "secondary"}
              onClick={() =>
                setFilterLevel(filterLevel === level ? null : level)
              }
              data-testid={`filter-${level.toLowerCase()}`}
            >
              {level}
            </Button>
          ))}
          {filterLevel && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setFilterLevel(null)}
            >
              <X className="h-3 w-3 mr-1" /> Reset
            </Button>
          )}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((course, idx) => (
          <Card
            key={course.id}
            className="group cursor-pointer hover:shadow-md transition-shadow overflow-visible"
            onClick={() => setSelectedCourse(course)}
            data-testid={`card-course-${course.id}`}
          >
            {/* Thumbnail placeholder */}
            <div
              className={`h-32 rounded-t-md bg-gradient-to-br ${courseColors[idx % courseColors.length]} flex items-center justify-center relative`}
            >
              <BookOpen className="h-10 w-10 text-foreground/20" />
              {course.recommended && (
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px]">
                  Recommended
                </Badge>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[10px] font-bold w-5 h-5 rounded flex items-center justify-center ${platformColors[course.platformLogo]}`}
                >
                  {course.platformLogo}
                </span>
                <span className="text-xs text-muted-foreground">
                  {course.platform}
                </span>
                <div className="flex items-center gap-0.5 ml-auto">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium tabular-nums">
                    {course.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({course.reviews.toLocaleString()})
                  </span>
                </div>
              </div>
              <h3 className="text-sm font-semibold leading-snug mb-2 line-clamp-2">
                {course.title}
              </h3>
              <div className="flex flex-wrap gap-1 mb-3">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{course.duration}</span>
                </div>
                <span className="text-sm font-bold tabular-nums">
                  {course.price}
                </span>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="secondary" className="flex-1 text-xs">
                  Detail
                </Button>
                <Button size="sm" className="flex-1 text-xs gap-1">
                  <CreditCard className="h-3 w-3" />
                  Bayar VCC
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <BookOpen className="h-10 w-10 mx-auto mb-3 text-muted-foreground/40" />
          <p className="text-sm">
            Tidak ada kursus ditemukan. Coba ubah filter atau kata kunci.
          </p>
        </div>
      )}

      {/* Course Detail Dialog */}
      <Dialog
        open={!!selectedCourse}
        onOpenChange={() => setSelectedCourse(null)}
      >
        {selectedCourse && (
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-lg pr-6">
                {selectedCourse.title}
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-2">
              {/* Left side - Description */}
              <div className="md:col-span-3 space-y-4">
                <p className="text-sm text-muted-foreground">
                  {selectedCourse.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold mb-2">
                    Learning Outcome
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedCourse.outcomes.map((o, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Silabus</h4>
                  <ol className="space-y-1.5">
                    {selectedCourse.syllabus.map((s, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        <span className="text-foreground font-medium">
                          {i + 1}.
                        </span>{" "}
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Right side - Price box */}
              <div className="md:col-span-2">
                <Card className="p-4">
                  <div className="space-y-3">
                    <div className="text-center">
                      <span className="text-2xl font-bold">
                        {selectedCourse.price}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">
                        {selectedCourse.platform} ·{" "}
                        {selectedCourse.duration} ·{" "}
                        {selectedCourse.level}
                      </p>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/50">
                      <span className="text-xs text-muted-foreground">
                        Skill Gap
                      </span>
                      <Badge
                        className={`text-[10px] ${skillGapColors[selectedCourse.skillGap]}`}
                        variant="secondary"
                      >
                        {selectedCourse.skillGap}
                      </Badge>
                    </div>
                    <Button className="w-full gap-2" data-testid="button-enroll">
                      <CreditCard className="h-4 w-4" />
                      Daftar & Bayar dengan VCC
                    </Button>
                    <p className="text-[10px] text-center text-muted-foreground">
                      Pembayaran menggunakan Virtual Credit Card YouthFin
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
