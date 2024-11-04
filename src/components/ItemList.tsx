"use client";

import { ItemListPropsType } from "@/types/component";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import CheckButton from "./CheckButton";
import { useTodo } from "@/hooks/useTodo";
import useDataStore from "@/store/useDataStore";

export default function ItemList({
  info,
  isInDetail,
  className,
}: ItemListPropsType) {
  const { isCompleted, name, id } = info;

  const { todoList, setTodoList } = useDataStore();
  const { patchTodoListItem } = useTodo();

  const checkTodo = (e: React.MouseEvent) => {
    e.preventDefault();
    const req = {
      isCompleted: !isCompleted,
    };
    if (id) {
      patchTodoListItem(id, req);
    }
  };

  return (
    <Link
      href={`/items/${id}`}
      className={twMerge(
        "flex justify-start items-center gap-4 w-full h-fit rounded-[27px] border-2 border-slate-900 text-slate-800 px-3 py-[9px]",
        isCompleted ? "bg-violet-100" : "bg-white",
        className
      )}
    >
      <CheckButton isCompleted={isCompleted} onClick={checkTodo} />
      <span className={twMerge(isCompleted && "line-through")}>{name}</span>
    </Link>
  );
}
