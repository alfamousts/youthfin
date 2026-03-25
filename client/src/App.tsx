import { Switch, Route, Router, Link } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Bell, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AuthProvider, useAuth } from "@/lib/auth";

import Landing from "@/pages/landing";
import { LoginPage, RegisterPage } from "@/pages/auth";
import Beranda from "@/pages/beranda";
import SkillUp from "@/pages/skill-up";
import JobGlobal from "@/pages/job-global";
import WalletPage from "@/pages/wallet";
import ProfilAI from "@/pages/profil-ai";
import NotFound from "@/pages/not-found";

const topNavItems = [
  { label: "Beranda", href: "/" },
  { label: "Skill-Up", href: "/skill-up" },
  { label: "Job Global", href: "/job-global" },
  { label: "Wallet", href: "/wallet" },
  { label: "Dashboard", href: "/" },
];

function DashboardRouter() {
  return (
    <Switch>
      <Route path="/" component={Beranda} />
      <Route path="/skill-up" component={SkillUp} />
      <Route path="/job-global" component={JobGlobal} />
      <Route path="/wallet" component={WalletPage} />
      <Route path="/profil" component={ProfilAI} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AvatarDropdown() {
  const { logout } = useAuth();
  const [, navigate] = useHashLocation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" data-testid="button-avatar-menu">
          <Avatar className="h-8 w-8 cursor-pointer">
            <AvatarImage src="https://api.dicebear.com/9.x/notionists/svg?seed=Andi" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem
          className="gap-2 cursor-pointer"
          onClick={() => navigate("/profil")}
          data-testid="menu-profil"
        >
          <User className="h-4 w-4" />
          Profil
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="gap-2 cursor-pointer text-red-600 dark:text-red-400 focus:text-red-600 dark:focus:text-red-400"
          onClick={() => {
            logout();
            navigate("/landing");
          }}
          data-testid="menu-logout"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function TopHeader() {
  return (
    <header className="flex items-center justify-between gap-4 px-4 py-2.5 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <SidebarTrigger data-testid="button-sidebar-toggle" />
        <nav className="hidden md:flex items-center gap-1 ml-2">
          {topNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground px-2.5 py-1 rounded-md hover:text-foreground transition-colors cursor-pointer no-underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <Button size="icon" variant="ghost" data-testid="button-notification">
          <Bell className="h-4 w-4" />
        </Button>
        <AvatarDropdown />
      </div>
    </header>
  );
}

function DashboardLayout() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 min-w-0">
          <TopHeader />
          <main className="flex-1 overflow-y-auto">
            <DashboardRouter />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function AuthenticatedApp() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Switch>
        <Route path="/masuk" component={LoginPage} />
        <Route path="/daftar" component={RegisterPage} />
        <Route component={Landing} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/landing" component={Landing} />
      <Route path="/masuk" component={LoginPage} />
      <Route path="/daftar" component={RegisterPage} />
      <Route>
        <DashboardLayout />
      </Route>
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router hook={useHashLocation}>
          <AuthProvider>
            <AuthenticatedApp />
          </AuthProvider>
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
