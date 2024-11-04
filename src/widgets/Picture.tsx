import Image from "next/image";
import img from "@assets/icons/no_img.png";

export default function Picture() {
  return (
    <div className="relative flex justify-center items-center lg:w-2/5 w-full h-[320px] bg-slate-50 rounded-[24px] border-2 border-dashed border-slate-300">
      <Image src={img} alt="빈이미지" width={64} height={64} />
      <button className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-slate-200 bg-[url('../assets/icons/plus.png')] bg-no-repeat bg-center" />
    </div>
  );
}
