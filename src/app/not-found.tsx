import Link from "next/link";
import { FileQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";

// 존재하지 않는 경로 접근 시 표시되는 404 화면.
export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center gap-6 py-24 text-center">
      <FileQuestion className="h-12 w-12 text-muted-foreground" />
      <div className="flex flex-col gap-2">
        <p className="font-mono text-sm text-muted-foreground">404</p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="max-w-md text-muted-foreground">
          주소가 바뀌었거나 삭제된 페이지일 수 있습니다.
        </p>
      </div>
      <Button asChild>
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
    </div>
  );
}
