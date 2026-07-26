import { Loader2 } from "lucide-react";

// 라우트 전환·서버 컴포넌트 대기 중 표시되는 로딩 화면.
// 스피너는 aria-hidden 처리하고 sr-only 텍스트로 스크린리더에 상태를 알린다.
export default function Loading() {
  return (
    <div className="container-page flex items-center justify-center py-24">
      <Loader2
        className="h-8 w-8 animate-spin text-muted-foreground"
        aria-hidden="true"
      />
      <span className="sr-only">불러오는 중</span>
    </div>
  );
}
