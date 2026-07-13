// 하단 푸터: 저작권 및 간단한 링크.
export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Starter Kit. All rights reserved.</p>
        <p>
          Built with Next.js · Tailwind CSS · shadcn/ui
        </p>
      </div>
    </footer>
  );
}
