import { Palette, Rocket, ShieldCheck, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// 랜딩 페이지에 표시할 주요 기능 목록
const features = [
  {
    icon: Zap,
    title: "빠른 시작",
    description:
      "Next.js App Router와 Turbopack 기반으로 즉시 개발을 시작할 수 있습니다.",
  },
  {
    icon: Palette,
    title: "테마 지원",
    description: "next-themes로 라이트/다크/시스템 모드를 기본 제공합니다.",
  },
  {
    icon: ShieldCheck,
    title: "타입 안전성",
    description:
      "TypeScript로 엄격한 타입 검사를 적용해 안정적인 코드를 작성합니다.",
  },
  {
    icon: Rocket,
    title: "shadcn/ui",
    description:
      "접근성 높은 컴포넌트를 복사해 프로젝트에 맞게 자유롭게 커스터마이징합니다.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero 섹션 */}
      <section className="flex flex-col items-center gap-6 py-20 text-center sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm text-muted-foreground">
          <Rocket className="h-4 w-4" />
          웹 개발을 빠르게 시작하세요
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Next.js Starter Kit
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Next.js, TypeScript, Tailwind CSS, shadcn/ui, lucide-react로 구성된
          최신 웹 개발 스타터킷입니다. 반복적인 초기 설정 없이 바로 기능 개발에
          집중하세요.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              시작하기
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://ui.shadcn.com/docs/components"
              target="_blank"
              rel="noopener noreferrer"
            >
              컴포넌트 살펴보기
            </a>
          </Button>
        </div>
      </section>

      {/* Feature 카드 그리드 */}
      <section className="grid grid-cols-1 gap-4 pb-24 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-2">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </section>
    </div>
  );
}
