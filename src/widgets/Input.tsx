"use client";

import Button from "@/components/Button";
import InputBar from "@/components/InputBar";
import useDataStore from "@/store/useDataStore";
import plus_black from "@assets/icons/plus_black.png";
import { useState } from "react";

export default function Input() {
  const { todoList, setTodoList } = useDataStore();
  const [newTodo, setNewTodo] = useState("");

  const enterTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addNewTodo = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_API_URL;
    const req = {
      name: newTodo,
    };
    const post = () => {
      fetch(`${url}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      })
        .then((res) => res.json())
        .then((res) => {
          if (todoList) setTodoList([res, ...todoList]);
        })
        .catch((err) => console.log(err));
    };
    post();
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
