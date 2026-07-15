"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

// md 미만 화면에서만 노출되는 햄버거 메뉴. 링크 선택 시 시트를 닫는다.
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="tap-target md:hidden">
          <Menu />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      {/* pt-safe/pr-safe: landscape 노치와 상단 상태바를 피해 콘텐츠 배치 */}
      <SheetContent side="right" className="w-72 pt-safe pr-safe">
        <SheetHeader>
          <SheetTitle>메뉴</SheetTitle>
          <SheetDescription className="sr-only">
            사이트 페이지로 이동하는 링크 목록
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              {...(item.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
