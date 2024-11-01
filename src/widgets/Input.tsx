import Button from "@/components/Button";
import InputBar from "@/components/InputBar";
import plus_black from "@assets/icons/plus_black.png";

export default function Input() {
  return (
    <div className="flex justify-between items-center xs:gap-4 gap-2 w-full h-fit py-6">
      <InputBar />
      <Button src={plus_black}>추가하기</Button>
    </div>
  );
}
