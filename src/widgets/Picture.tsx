import Image from "next/image";
import img from "@assets/icons/no_img.png";
import { Dispatch, SetStateAction } from "react";
import { useTodo } from "@/hooks/useTodo";
import { twMerge } from "tailwind-merge";

//이미지를 등록, 출력 할 수 있는 이미지 컴포넌트입니다
export default function Picture({
  imageUrl,
  setImageUrl,
}: {
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
}) {
  const { uploadImage } = useTodo();

  //이미지 등록하면, 서버에 업로드 한 뒤 url을 반환합니다
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      //사이즈가 5M 이상일 경우 등록 불가
      if (file.size > 1024 * 1024 * 5) {
        alert("파일의 크기는 5M 이하여야 합니다");
        return;
      }

      //파일명이 영어가 아닌 경우 등록 불가
      const isEnglishOnly = /^[a-zA-Z._-]+$/.test(file.name);
      if (!isEnglishOnly) {
        alert("파일명은 영어로만 이루어져야 합니다");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);
      uploadImage(formData, setImageUrl);
    }
  };

  //이미지가 없는 경우 기본 이미지를, 있는 경우 등록한 url의 이미지를 사용하도록 하였습니다
  return (
    <div className="relative flex justify-center items-center lg:w-2/5 w-full h-[320px] bg-slate-50 rounded-[24px] border-2 border-dashed border-slate-300 overflow-hidden">
      <label
        htmlFor="file-upload"
        className={twMerge(
          "absolute bottom-4 right-4 w-16 h-16 rounded-full bg-no-repeat bg-center",
          imageUrl
            ? "bg-[url('../assets/icons/edit.png')] bg-[rgba(15,23,42,0.5)] border-2 border-slate-900"
            : "bg-[url('../assets/icons/plus.png')] bg-slate-200 "
        )}
      />
      {imageUrl ? (
        <img src={`${imageUrl}`} className="w-full h-full object-fit" />
      ) : (
        <Image src={img} alt="빈이미지" width={64} height={64} />
      )}

      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleImage}
      />
    </div>
  );
}
