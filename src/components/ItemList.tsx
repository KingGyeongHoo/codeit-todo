"use client";

import useDataStore from "@/store/useDataStore";
import { ItemListPropsType } from "@/types/component";
import { TodoDataType } from "@/types/data";
import { twMerge } from "tailwind-merge";

export default function ItemList({ info, ...props }: ItemListPropsType) {
  const { isCompleted, name, id } = info;
  const { todoList, setTodoList } = useDataStore();

  const checkTodo = () => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const req = {
      isCompleted: !isCompleted,
    };
    fetch(`${url}/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        if (todoList)
          setTodoList(
            todoList.map((item: TodoDataType) => (item.id === id ? res : item))
          );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className={twMerge(
        "flex justify-start items-center gap-4 w-full h-fit rounded-[27px] border-2 border-slate-900 text-slate-800 px-3 py-[9px]",
        isCompleted ? "bg-violet-100" : "bg-white"
      )}
      {...props}
    >
      <button
        className={twMerge(
          "w-8 h-8 rounded-full",
          isCompleted
            ? "bg-violet-600 bg-[url('../assets/icons/todo_checked.png')] bg-center bg-no-repeat"
            : "bg-yellow-50 border-2 border-slate-900"
        )}
        onClick={checkTodo}
      />
      <span className={twMerge(isCompleted && "line-through")}>{name}</span>
    </div>
  );
}
