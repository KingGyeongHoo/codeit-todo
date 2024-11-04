"use client";

import ItemList from "@/components/ItemList";
import { useTodo } from "@/hooks/useTodo";
import { TodoDataType } from "@/types/data";
import TodoDetail from "@/widgets/TodoDetail";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center xs:gqp-6 gap-4 w-full h-fit font-700 decoration-none my-6">
      <TodoDetail />
    </div>
  );
}
