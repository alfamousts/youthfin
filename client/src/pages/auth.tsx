import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/lib/auth";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ImagePlus,
  User,
  Smartphone,
  Calendar,
  Loader2,
} from "lucide-react";

/* ─── Shared layout shell ─── */
function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[400px]">{children}</div>
    </div>
  );
}

function AuthCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-background rounded-2xl border border-border/50 shadow-sm p-6 space-y-5 ${className}`}
    >
      {children}
    </div>
  );
}

function LogoBlock() {
  return (
    <div className="flex flex-col items-center gap-3 pt-2">
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
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
      <div className="text-center">
        <h1 className="text-xl font-bold tracking-tight">YouthFin</h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          Bangun karir, kelola keuangan,
          <br />
          raih masa depan.
        </p>
      </div>
    </div>
  );
}

/* ─── Login Page ─── */
export function LoginPage() {
  const { login } = useAuth();
  const [, navigate] = useLocation();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <AuthShell>
      <AuthCard>
        <LogoBlock />

        <div className="space-y-3">
          <Button
            className="w-full text-base py-5"
            size="lg"
            onClick={handleLogin}
            data-testid="button-masuk"
          >
            Masuk
          </Button>
          <Link href="/daftar">
            <Button
              variant="outline"
              className="w-full text-base py-5 text-primary"
              size="lg"
              data-testid="button-daftar-link"
            >
              Daftar
            </Button>
          </Link>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">atau</span>
          </div>
        </div>

        <div className="space-y-2">
          <Button variant="outline" className="w-full gap-2" size="lg">
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Masuk dengan Google
          </Button>
          <Button variant="outline" className="w-full gap-2" size="lg">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Masuk dengan LinkedIn
          </Button>
        </div>
      </AuthCard>
    </AuthShell>
  );
}

/* ─── Registration Wizard ─── */
export function RegisterPage() {
  const { login } = useAuth();
  const [, navigate] = useLocation();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Form state
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [nama, setNama] = useState("Andi Pratama");
  const [tanggalLahir, setTanggalLahir] = useState("15/03/2001");
  const [kota, setKota] = useState("Jakarta");
  const [status, setStatus] = useState("Mahasiswa");
  const [agreeTerms, setAgreeTerms] = useState(true);

  const totalSteps = 4;
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // OTP countdown
  const [countdown, setCountdown] = useState(47);
  useEffect(() => {
    if (step === 2 && countdown > 0) {
      const timer = setInterval(() => setCountdown((c) => c - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [step, countdown]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Final step → complete
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        login();
        navigate("/");
      }, 1500);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepTitles: Record<number, string> = {
    1: "Daftar",
    2: "Verifikasi",
    3: "Data Diri",
    4: "Verifikasi Identitas",
  };

  return (
    <AuthShell>
      <AuthCard>
        {/* Header with progress */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-register-back"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
              ) : (
                <Link href="/masuk">
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                </Link>
              )}
              <span className="text-sm font-semibold">{stepTitles[step]}</span>
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

        {/* Step 1: Email/Phone */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold">Buat Akun Baru</h2>
              <p className="text-sm text-muted-foreground mt-0.5">
                Masukkan email atau no. HP kamu
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">
                Email / No. HP
              </Label>
              <Input
                id="email"
                placeholder="user@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-email"
              />
            </div>
            <Button
              className="w-full"
              size="lg"
              onClick={handleNext}
              data-testid="button-register-next"
            >
              Lanjut
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">atau</span>
              </div>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full gap-2" size="lg">
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Masuk dengan Google
              </Button>
              <Button variant="outline" className="w-full gap-2" size="lg">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Masuk dengan LinkedIn
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: OTP Verification */}
        {step === 2 && (
          <div className="space-y-5">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-bold">Masukkan Kode OTP</h2>
              <p className="text-xs text-muted-foreground">
                Kode dikirim ke +62 812 •••• 5678
              </p>
            </div>

            <div className="flex justify-center gap-2">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => { otpRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  data-testid={`input-otp-${i}`}
                  className="w-11 h-12 text-center text-lg font-bold border-2 border-border rounded-lg bg-background focus:border-primary focus:outline-none transition-colors"
                />
              ))}
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Kirim ulang dalam{" "}
                <span className="font-semibold text-foreground tabular-nums">
                  {String(Math.floor(countdown / 60)).padStart(2, "0")}:
                  {String(countdown % 60).padStart(2, "0")}
                </span>
              </p>
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={handleNext}
              data-testid="button-verify-otp"
            >
              Verifikasi
            </Button>

            <button className="text-sm text-primary font-medium w-full text-center hover:underline">
              Kirim Ulang Kode
            </button>
          </div>
        )}

        {/* Step 3: Data Diri */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold">Lengkapi Data Diri</h2>
            </div>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label className="text-sm">Nama Lengkap</Label>
                <Input
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  data-testid="input-nama"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm">Tanggal Lahir</Label>
                <div className="relative">
                  <Input
                    value={tanggalLahir}
                    onChange={(e) => setTanggalLahir(e.target.value)}
                    data-testid="input-tanggal"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm">Kota</Label>
                <Input
                  value={kota}
                  onChange={(e) => setKota(e.target.value)}
                  data-testid="input-kota"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm">Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger data-testid="select-status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mahasiswa">Mahasiswa</SelectItem>
                    <SelectItem value="Fresh Graduate">Fresh Graduate</SelectItem>
                    <SelectItem value="Profesional">Profesional</SelectItem>
                    <SelectItem value="Pelajar">Pelajar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button
              className="w-full"
              size="lg"
              onClick={handleNext}
              data-testid="button-data-next"
            >
              Lanjut
            </Button>
          </div>
        )}

        {/* Step 4: KYC & Persetujuan */}
        {step === 4 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold">Verifikasi KYC</h2>
              <p className="text-sm text-muted-foreground mt-0.5">
                Upload dokumen untuk verifikasi identitasmu
              </p>
            </div>

            {/* Upload KTP */}
            <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 flex flex-col items-center gap-2 hover:border-primary/40 transition-colors cursor-pointer">
              <ImagePlus className="h-6 w-6 text-muted-foreground" />
              <p className="text-sm font-medium">Upload Foto KTP</p>
              <p className="text-xs text-muted-foreground">JPG/PNG, max 5MB</p>
            </div>

            {/* Upload Selfie */}
            <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 flex flex-col items-center gap-2 hover:border-primary/40 transition-colors cursor-pointer">
              <User className="h-6 w-6 text-muted-foreground" />
              <p className="text-sm font-medium">Upload Selfie</p>
              <p className="text-xs text-muted-foreground">Foto wajah jelas</p>
            </div>

            {/* Terms */}
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setAgreeTerms(!agreeTerms)}
                data-testid="check-terms"
                className={`flex items-center justify-center h-5 w-5 rounded border-2 transition-all shrink-0 ${
                  agreeTerms
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-muted-foreground/40"
                }`}
              >
                {agreeTerms && <Check className="h-3 w-3" />}
              </div>
              <span className="text-sm">Setuju S&K dan Kebijakan Privasi</span>
            </label>

            <Button
              className="w-full"
              size="lg"
              onClick={handleNext}
              disabled={loading}
              data-testid="button-selesai"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Memproses...
                </>
              ) : (
                "Selesai & Mulai Profil AI"
              )}
            </Button>
          </div>
        )}
      </AuthCard>
    </AuthShell>
  );
}
