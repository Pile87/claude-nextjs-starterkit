import Link from "next/link";
import { Rocket } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav, type NavItem } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";

const navItems: NavItem[] = [
  { href: "/", label: "홈" },
  { href: "https://ui.shadcn.com", label: "문서", external: true },
];

// 상단 네비게이션 바: 로고 + 메뉴 + 테마 토글.
// md 이상은 가로 메뉴, md 미만은 햄버거(MobileNav)로 전환된다.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pt-safe">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Rocket className="h-5 w-5 text-primary" />
          <span>Starter Kit</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild>
                <Link
                  href={item.href}
                  {...(item.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>
          <ThemeToggle />
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
