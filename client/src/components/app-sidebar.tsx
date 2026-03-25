import {
  LayoutDashboard,
  Brain,
  BookOpen,
  Briefcase,
  Wallet,
  Settings,
  ChevronUp,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Profil AI", url: "/profil-ai", icon: Brain },
  { title: "Skill-Up", url: "/skill-up", icon: BookOpen },
  { title: "Job Global", url: "/job-global", icon: Briefcase },
  { title: "Wallet", url: "/wallet", icon: Wallet },
  { title: "Pengaturan", url: "/pengaturan", icon: Settings },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4 pb-2">
        <div className="flex items-center gap-2 mb-4">
          <svg
            width="28"
            height="28"
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
              x1="16"
              y1="18"
              x2="16"
              y2="24"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="24" cy="10" r="2.5" fill="hsl(150, 60%, 50%)" />
          </svg>
          <span className="font-semibold text-base tracking-tight">
            YouthFin
          </span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-md bg-sidebar-accent/50">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://api.dicebear.com/9.x/notionists/svg?seed=Andi" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium truncate">
              Andi Rahmawan
            </span>
            <Badge
              variant="secondary"
              className="w-fit text-[11px] px-1.5 py-0"
            >
              Rising Talent
            </Badge>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive =
                  item.url === "/"
                    ? location === "/" || location === ""
                    : location.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      data-active={isActive}
                      className={
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : ""
                      }
                    >
                      <Link href={item.url} data-testid={`nav-${item.url.replace("/", "") || "home"}`}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 pt-2">
        <div className="text-xs text-muted-foreground text-center">
          <a
            href="https://www.perplexity.ai/computer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Created with Perplexity Computer
          </a>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
