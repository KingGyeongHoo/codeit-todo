"use client";

import { ItemListPropsType } from "@/types/component";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import CheckButton from "./CheckButton";
import { useTodo } from "@/hooks/useTodo";

//[공통] 할 일을 보여주고, 체크 할 수 있는 리스트 컴포넌트입니다
export default function ItemList({ info, className }: ItemListPropsType) {
  const { isCompleted, name, id } = info;
  const { patchTodoListItem } = useTodo();

  //체크 버튼을 클릭하면 할 일을 현재의 반대 상태로 수정합니다
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
