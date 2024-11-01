import { ItemListPropsType } from "@/types/component";
import { twMerge } from "tailwind-merge";

export default function ItemList({
  children,
  isCompleted,
  ...props
}: ItemListPropsType) {
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
      />
      <span className={twMerge(isCompleted && "line-through")}>{children}</span>
    </div>
  );
}
