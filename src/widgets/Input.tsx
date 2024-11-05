"use client";

import Button from "@/components/Button";
import InputBar from "@/components/InputBar";
import { useTodo } from "@/hooks/useTodo";
import plus_black from "@assets/icons/plus_black.png";
import { useState } from "react";

//할일 입력 및 등록을 담당하는 위젯입니다
export default function Input() {
  const { postTodoList } = useTodo();
  const [newTodo, setNewTodo] = useState("");

  //입력을 받습니다
  const enterTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  //버튼을 누르거나 엔터키를 눌러 할 일을 등록합니다
  const addNewTodo = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    //입력이 없을 경우 경고창 출력
    if (newTodo.length < 1) {
      alert("할 일을 입력하세요!");
      return;
    }
    postTodoList(newTodo);
    //입력창 초기화
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
