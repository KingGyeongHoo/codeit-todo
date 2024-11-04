"use client";

import { MemoType } from "@/types/component";

export default function Memo({ value, ...props }: MemoType) {
  return (
    <div className="flex flex-col gap-4 lg:w-3/5 w-full h-[320px] bg-[url('../assets/images/memo.png')] bg-cover bg-no-repeat bg-center px-4 py-6">
      <p className="text-center text-amber-800 font-800">Memo</p>
      <textarea
        className="w-full h-full outline-none bg-transparent"
        value={value}
        {...props}
      />
    </div>
  );
}
