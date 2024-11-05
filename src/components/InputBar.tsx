import { InputBarPropsType } from "@/types/component";
import { twMerge } from "tailwind-merge";

//[공통]입력을 위한 입력 바 컴포넌트입니다
export default function InputBar({
  value,
  className,
  ...props
}: InputBarPropsType) {
  return (
    <div className="relative flex-grow h-[52px]">
      <input
        className={twMerge(
          "relative w-full h-full bg-slate-100 border-2 border-black rounded-[24px] px-6 py-5 outline-none text-slate-900 placeholder:text-slate-500 z-10",
          className
        )}
        placeholder="할 일을 입력해주세요"
        value={value}
        {...props}
      />
      <div className="absolute top-1 left-1 w-full h-full bg-black border-2 border-black rounded-[24px]" />
    </div>
  );
}
