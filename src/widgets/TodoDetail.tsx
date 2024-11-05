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
import { useParams } from "next/navigation";
import { useTodo } from "@/hooks/useTodo";
import { TodoDataType } from "@/types/data";

//할 일의 세부 정보를 나타내주는 위젯입니다
export default function TodoDetail() {
  const router = useRouter();
  const { patchTodoListItem } = useTodo();
  //id, 제목, 완료여부, memo, 이미지URL을 상태로 관리합니다
  const [id, setId] = useState(-1);
  const [name, setName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [memo, setMemo] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { itemID } = useParams();
  const { getTodolistItem, deleteTodoListItem } = useTodo();
  const [data, setData] = useState<TodoDataType>();

  //페이지 최초 진입시 할 일 정보를 받아옵니다
  useEffect(() => {
    const getData = async () => {
      const data = await getTodolistItem(itemID);
      setData(data);
    };
    getData();
  }, []);

  //정보 수정 및 등록을 위해 받아온 데이터를 상태로 저장합니다
  useEffect(() => {
    if (data) {
      setId(data.id);
      setName(data.name);
      setIsCompleted(data.isCompleted);
      setMemo(data.memo ?? "");
      setImageUrl(data.imageUrl ?? "");
    }
  }, [data]);

  //할 일 이름을 수정합니다
  const enterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  //메모를 수정합니다
  const enterMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  //수정한 정보를 바탕으로 할 일을 수정합니다
  const patchItem = () => {
    //이름에 빈 입력이 있을 경우 등록 불가
    if (name.length < 1) {
      alert("할 일을 입력하세요!");
      return;
    }
    const req = {
      name,
      memo,
      isCompleted,
      imageUrl,
    };
    patchTodoListItem(id, req);
    router.push("/");
  };

  //핳 일을 삭제합니다
  const deleteItem = () => {
    //삭제 전 삭제 여부를 한번 더 물어봅니다
    const isDelete = confirm("삭제하시겠습니까?");
    if (isDelete) {
      deleteTodoListItem(id);
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full h-fit">
      <div
        className={twMerge(
          "flex justify-center items-center w-full h-fit rounded-[24px] border-2 border-slate-900 text-slate-800 px-3 py-[9px]",
          isCompleted ? "bg-violet-100" : "bg-white"
        )}
      >
        <div className="flex items-center gap-4">
          <CheckButton
            isCompleted={isCompleted}
            onClick={() => setIsCompleted((isCompleted) => !isCompleted)}
          />
          <input
            type="text"
            className={twMerge(
              "w-[140px] underline text-xl font-700 outline-none bg-transparent"
            )}
            value={name}
            onChange={enterName}
          ></input>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col xs:gap-6 gap-4 w-full h-fit">
        <Picture imageUrl={imageUrl ?? ""} setImageUrl={setImageUrl} />
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
