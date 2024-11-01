import { ButtonPropsType } from "@/types/component";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Button({
  className,
  src,
  children,
  ...props
}: ButtonPropsType) {
  return (
    <div className="relative md:w-[164px] xs:w-[158px] w-[54px] h-[52px]">
      <button
        className={twMerge(
          "relative flex justify-center items-center gap-1 w-full h-full bg-slate-200 border-2 border-black rounded-[24px] z-10",
          className
        )}
        {...props}
      >
        <Image src={src} alt="img" width={16} height={16} />
        <span className="xs:flex hidden">{children}</span>
      </button>
      <div className="absolute top-1 left-1 w-full h-full bg-black border-2 border-black rounded-[24px]" />
    </div>
  );
}
