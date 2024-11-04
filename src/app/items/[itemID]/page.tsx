"use client";

import TodoDetail from "@/widgets/TodoDetail";

export default function page() {
  return (
    <div className="flex flex-col items-center xs:gqp-6 gap-4 w-full h-fit font-700 decoration-none my-6">
      <TodoDetail />
    </div>
  );
}
