import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CreditCard,
  Eye,
  EyeOff,
  Copy,
  ArrowUpRight,
  ArrowDownLeft,
  Shield,
  Wifi,
} from "lucide-react";

const courseTransactions = [
  {
    date: "24 Mar 2026",
    desc: "Advanced Figma – Udemy",
    amount: "-Rp 204.000",
    status: "Berhasil",
    statusColor: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
  },
  {
    date: "20 Mar 2026",
    desc: "React + TypeScript – Coursera",
    amount: "-Rp 785.000",
    status: "Berhasil",
    statusColor: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
  },
  {
    date: "15 Mar 2026",
    desc: "Python for Data – Udemy",
    amount: "-Rp 235.000",
    status: "Berhasil",
    statusColor: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
  },
  {
    date: "10 Mar 2026",
    desc: "SEO Copywriting – Skillshare",
    amount: "-Rp 156.000",
    status: "Pending",
    statusColor: "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30",
  },
];

const jobTransactions = [
  {
    date: "23 Mar 2026",
    desc: "UI Redesign – TechCorp (Upwork)",
    amount: "+$580",
    status: "Diterima",
    statusColor: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
  },
  {
    date: "18 Mar 2026",
    desc: "Landing Page – StartupXYZ (Contra)",
    amount: "+$320",
    status: "Diterima",
    statusColor: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
  },
  {
    date: "12 Mar 2026",
    desc: "Blog Writing – MediaCo (Fiverr)",
    amount: "+$200",
    status: "Diterima",
    statusColor: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
  },
  {
    date: "05 Mar 2026",
    desc: "Mobile App Design – FinApp (Contra)",
    amount: "+$380",
    status: "Proses",
    statusColor: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
  },
  {
    date: "01 Mar 2026",
    desc: "Data Dashboard – AnalyticsCo (Upwork)",
    amount: "+$450",
    status: "Diterima",
    statusColor: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
  },
];

export default function WalletPage() {
  const [showNumber, setShowNumber] = useState(false);

  return (
    <div className="p-6 max-w-[1400px] mx-auto" data-testid="page-wallet">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Wallet</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Virtual Credit Card dan riwayat transaksi.
        </p>
      </div>

      {/* VCC Card */}
      <div className="mb-6">
        <div className="relative w-full max-w-md rounded-xl p-6 bg-gradient-to-br from-primary via-primary to-blue-700 dark:from-primary dark:to-blue-800 text-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-6 -translate-x-6" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.2)" />
                  <path
                    d="M8 10L16 18L24 10"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="16"
                    y1="18"
                    x2="16"
                    y2="24"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-sm font-semibold tracking-wide">
                  YouthFin VCC
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wifi className="h-4 w-4 opacity-60" />
                <Shield className="h-4 w-4 opacity-60" />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span
                  className="text-lg font-mono tracking-widest tabular-nums"
                  data-testid="text-card-number"
                >
                  {showNumber
                    ? "4532 8901 2345 6789"
                    : "•••• •••• •••• 6789"}
                </span>
                <button
                  onClick={() => setShowNumber(!showNumber)}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  data-testid="button-toggle-number"
                >
                  {showNumber ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider opacity-60 mb-0.5">
                  Pemegang Kartu
                </p>
                <p className="text-sm font-medium">ANDI RAHMAWAN</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider opacity-60 mb-0.5">
                  Berlaku s/d
                </p>
                <p className="text-sm font-medium tabular-nums">12/28</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider opacity-60">
                    Limit
                  </p>
                  <p className="text-base font-bold tabular-nums">
                    Rp 5.000.000
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wider opacity-60">
                    Sisa
                  </p>
                  <p className="text-base font-bold tabular-nums">
                    Rp 3.750.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Tabs */}
      <Tabs defaultValue="courses" className="w-full">
        <TabsList data-testid="tabs-transactions">
          <TabsTrigger value="courses">Transaksi Kursus</TabsTrigger>
          <TabsTrigger value="income">Transaksi Job/Income</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="mt-4">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full" data-testid="table-course-transactions">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="text-left p-3 font-medium">Tanggal</th>
                    <th className="text-left p-3 font-medium">Deskripsi</th>
                    <th className="text-right p-3 font-medium">Nominal</th>
                    <th className="text-right p-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {courseTransactions.map((tx, i) => (
                    <tr
                      key={i}
                      className="border-b last:border-b-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-3 text-sm text-muted-foreground tabular-nums">
                        {tx.date}
                      </td>
                      <td className="p-3 text-sm font-medium">{tx.desc}</td>
                      <td className="p-3 text-sm text-right font-medium tabular-nums text-red-600 dark:text-red-400">
                        {tx.amount}
                      </td>
                      <td className="p-3 text-right">
                        <Badge
                          variant="secondary"
                          className={`text-[10px] ${tx.statusColor}`}
                        >
                          {tx.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="income" className="mt-4">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full" data-testid="table-income-transactions">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="text-left p-3 font-medium">Tanggal</th>
                    <th className="text-left p-3 font-medium">Deskripsi</th>
                    <th className="text-right p-3 font-medium">Nominal</th>
                    <th className="text-right p-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {jobTransactions.map((tx, i) => (
                    <tr
                      key={i}
                      className="border-b last:border-b-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-3 text-sm text-muted-foreground tabular-nums">
                        {tx.date}
                      </td>
                      <td className="p-3 text-sm font-medium">{tx.desc}</td>
                      <td className="p-3 text-sm text-right font-medium tabular-nums text-green-600 dark:text-green-400">
                        {tx.amount}
                      </td>
                      <td className="p-3 text-right">
                        <Badge
                          variant="secondary"
                          className={`text-[10px] ${tx.statusColor}`}
                        >
                          {tx.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
