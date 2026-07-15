// 하단 푸터: 저작권 및 간단한 링크.
export function SiteFooter() {
  return (
    <footer className="border-t pb-safe">
      <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Starter Kit. All rights reserved.</p>
        <p>
          Built with Next.js · Tailwind CSS · shadcn/ui
        </p>
      </div>
    </footer>
  );
}
