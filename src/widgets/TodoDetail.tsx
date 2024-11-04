"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Memo from "./Memo";
import Picture from "./Picture";
import Button from "@/components/Button";
import check from "@assets/icons/check.png";
import x from "@assets/icons/X.png";
import { twMerge } from "tailwind-merge";
import CheckButton from "@/components/CheckButton";
import { TodoDataType } from "@/types/data";
import { useParams } from "next/navigation";
import { useTodo } from "@/hooks/useTodo";

export default function TodoDetail() {
  const router = useRouter();
  const { patchTodoListItem } = useTodo();
  const [id, setId] = useState(-1);
  const [name, setName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [memo, setMemo] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { itemID } = useParams();
  const { getTodolistItem, deleteTodoListItem } = useTodo();
  const [data, setData] = useState<TodoDataType>();
  useEffect(() => {
    itemID && getTodolistItem(itemID, setData);
    setData(data);
  }, []);

  useEffect(() => {
    if (data) {
      setId(data.id);
      setName(data.name);
      setIsCompleted(data.isCompleted);
      setMemo(data.memo ?? "");
    }
  }, [data]);

  const enterMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };
  const patchItem = () => {
    const req = {
      name,
      memo,
      isCompleted,
      imageUrl,
    };
    patchTodoListItem(id, req);
    router.push("/");
  };
  const deleteItem = () => {
    deleteTodoListItem(id);
    router.push("/");
  };
  return (
    <div className="flex flex-col gap-6 w-full h-fit">
      <div
        className={twMerge(
          "flex justify-center items-center gap-4 w-full h-fit rounded-[24px] border-2 border-slate-900 text-slate-800 px-3 py-[9px]",
          isCompleted ? "bg-violet-100" : "bg-white"
        )}
      >
        <CheckButton
          isCompleted={isCompleted}
          onClick={() => setIsCompleted((isCompleted) => !isCompleted)}
        />
        <span className="underline font-700">{data?.name}</span>
      </div>
      <div className="flex lg:flex-row flex-col xs:gap-6 gap-4 w-full h-fit">
        <Picture />
        <Memo value={memo} onChange={enterMemo} />
      </div>
      <div className="flex flex-row lg:justify-end justify-center gap-4 w-full h-fit">
        <Button src={check} onClick={patchItem}>
          수정 완료
        </Button>
        <Button src={x} className="bg-rose-500 text-white" onClick={deleteItem}>
          삭제하기
        </Button>
      </div>
    </div>
  );
}
