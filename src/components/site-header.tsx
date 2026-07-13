import Link from "next/link";
import { Rocket } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

// 상단 네비게이션 바: 로고 + 메뉴 + 테마 토글.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Rocket className="h-5 w-5 text-primary" />
          <span>Starter Kit</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">홈</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              문서
            </a>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
