"use client";

import Button from "@/components/Button";
import InputBar from "@/components/InputBar";
import { useTodo } from "@/hooks/useTodo";
import plus_black from "@assets/icons/plus_black.png";
import { useState } from "react";

export default function Input() {
  const { postTodoList } = useTodo();
  const [newTodo, setNewTodo] = useState("");

  const enterTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addNewTodo = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (newTodo.length < 1) {
      alert("할 일을 입력하세요!");
      return;
    }
    postTodoList(newTodo);
    setNewTodo("");
  };

  return (
    <form
      className="flex justify-between items-center xs:gap-4 gap-2 w-full h-fit py-6"
      onSubmit={addNewTodo}
    >
      <InputBar value={newTodo} onChange={enterTodo} />
      <Button src={plus_black} onClick={addNewTodo}>
        추가하기
      </Button>
    </form>
  );
}
