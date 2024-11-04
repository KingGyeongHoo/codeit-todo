"use client";

import todo_img from "@assets/images/todo.png";
import done_img from "@assets/images/done.png";
import { TodoListType } from "@/types/component";
import Image from "next/image";
import ItemList from "@/components/ItemList";
import { useEffect } from "react";
import { TodoDataType } from "@/types/data";
import useDataStore from "@/store/useDataStore";
import { twMerge } from "tailwind-merge";
import { useTodo } from "@/hooks/useTodo";

export default function TodoLists() {
  const { getTodolist } = useTodo();
  const { todoList, setTodoList } = useDataStore();
  useEffect(() => {
    getTodolist();
  }, []);

  return (
    <div className="flex lg:flex-row flex-col gap-6 w-full h-fit md:py-6">
      <List
        list={todoList.filter((item: TodoDataType) => !item.isCompleted)}
        img={todo_img}
        type="todo"
      ></List>
      <List
        list={todoList.filter((item: TodoDataType) => item.isCompleted)}
        img={done_img}
        type="done"
      ></List>
    </div>
  );
}

const List = ({ list, img, type }: TodoListType) => {
  return (
    <div className="lg:w-1/2 flex flex-col gap-4 w-full h-fit">
      <Image src={img} alt="img" width={101} height={36} />
      {list && list.length > 0 ? (
        list.map((item: TodoDataType, idx: number) => (
          <ItemList key={idx} info={item} />
        ))
      ) : (
        <div
          className={twMerge(
            "flex flex-col justify-center items-center w-full h-fit lg:py-16 py-0"
          )}
        >
          <div
            className={twMerge(
              "w-[120px] h-[120px] bg-center bg-cover",
              "xs:w-[240px] xs:h-[240px] ",
              type === "todo"
                ? "bg-[url('../assets/images/todo_nothing.png')]"
                : "bg-[url('../assets/images/done_nothing.png')]"
            )}
          />
          <p className="text-center text-slate-400">
            {type === "todo" ? (
              <span>
                할 일이 없어요.
                <br />
                TODO를 새롭게 추가해주세요!
              </span>
            ) : (
              <span>
                아직 다 한 일이 없어요
                <br />
                해야 할 일을 체크해보세요
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};
