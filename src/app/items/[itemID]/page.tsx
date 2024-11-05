"use client";

import TodoDetail from "@/widgets/TodoDetail";

export default function page() {
  //할 일 정보 페이지입니다
  return (
    <div className="flex flex-col items-center xs:gap-6 gap-4 w-full h-fit font-700 decoration-none my-6">
      <TodoDetail />
    </div>
  );
}
