import { CheckButtonPropstype } from "@/types/component";
import { twMerge } from "tailwind-merge";

//[공통] 체크 버튼 컴포넌트입니다
export default function CheckButton({
  isCompleted,
  ...props
}: CheckButtonPropstype) {
  //체크 상태를 전달받아 색상과 배경을 변경합니다
  return (
    <button
      className={twMerge(
        "w-8 h-8 rounded-full",
        isCompleted
          ? "bg-violet-600 bg-[url('../assets/icons/todo_checked.png')] bg-center bg-no-repeat"
          : "bg-yellow-50 border-2 border-slate-900"
      )}
      {...props}
    />
  );
}
