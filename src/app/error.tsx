"use client";

import * as React from "react";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

// 라우트 세그먼트에서 발생한 런타임 에러 화면.
// App Router 규약상 error.tsx 는 반드시 클라이언트 컴포넌트여야 한다.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // 운영 환경에서는 이 자리에 에러 리포팅(Sentry 등)을 연결한다.
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex flex-col items-center justify-center gap-6 py-24 text-center">
      <AlertTriangle className="h-12 w-12 text-destructive" />
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          문제가 발생했습니다
        </h1>
        <p className="max-w-md text-muted-foreground">
          예상치 못한 오류로 페이지를 표시하지 못했습니다. 잠시 후 다시
          시도해 주세요.
        </p>
        {/* digest 는 서버에서 발생한 에러를 로그와 대조할 때 쓰는 식별자 */}
        {error.digest && (
          <p className="font-mono text-xs text-muted-foreground">
            오류 코드: {error.digest}
          </p>
        )}
      </div>
      <Button onClick={reset}>다시 시도</Button>
    </div>
  );
}
