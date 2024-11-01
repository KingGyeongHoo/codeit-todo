// 헤더 컴포넌트입니다
export default function Header() {
  return (
    //반응형 스타일을 이용해 헤더 컨텐츠의 여백과 배경 이미지를 변경하도록 하였습니다.
    <div className="w-full h-[60px] bg-white px-4 lg:px-[18.75%] xs:px-6 py-3 border-slate-200 border-[1px]">
      <div className="w-full h-fit bg-white">
        <div className="xs:w-[150px] w-[71px] h-[40px] xs:bg-[url('../assets/images/logo_text.png')] bg-[url('../assets/images/logo.png')] bg-cover bg-center" />
      </div>
    </div>
  );
}
