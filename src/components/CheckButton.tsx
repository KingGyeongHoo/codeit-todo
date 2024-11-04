import { useTodo } from "@/hooks/useTodo";
import useDataStore from "@/store/useDataStore";
import { CheckButtonPropstype } from "@/types/component";
import { twMerge } from "tailwind-merge";

export default function CheckButton({
  isCompleted,
  ...props
}: CheckButtonPropstype) {
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
