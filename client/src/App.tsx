import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

import Beranda from "@/pages/beranda";
import SkillUp from "@/pages/skill-up";
import JobGlobal from "@/pages/job-global";
import WalletPage from "@/pages/wallet";
import ProfilAI from "@/pages/profil-ai";
import NotFound from "@/pages/not-found";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Beranda} />
      <Route path="/skill-up" component={SkillUp} />
      <Route path="/job-global" component={JobGlobal} />
      <Route path="/wallet" component={WalletPage} />
      <Route path="/profil-ai" component={ProfilAI} />
      <Route component={NotFound} />
    </Switch>
  );
}

function TopHeader() {
  return (
    <header className="flex items-center justify-between gap-4 px-4 py-2.5 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <SidebarTrigger data-testid="button-sidebar-toggle" />
        <nav className="hidden md:flex items-center gap-1 ml-2">
          {["Beranda", "Skill-Up", "Job Global", "Wallet", "Dashboard"].map(
            (item) => (
              <span
                key={item}
                className="text-sm text-muted-foreground px-2.5 py-1 rounded-md hover:text-foreground transition-colors cursor-pointer"
              >
                {item}
              </span>
            )
          )}
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <Button size="icon" variant="ghost" data-testid="button-notification">
          <Bell className="h-4 w-4" />
        </Button>
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarImage src="https://api.dicebear.com/9.x/notionists/svg?seed=Andi" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1 min-w-0">
              <TopHeader />
              <main className="flex-1 overflow-y-auto">
                <Router hook={useHashLocation}>
                  <AppRouter />
                </Router>
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
