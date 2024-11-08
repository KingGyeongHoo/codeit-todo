import Header from "@/widgets/Header";
import "../css/global.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

//기본 레이아웃입니다
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //헤더를 레이아웃에 배치해 모든 컴포넌트 및 페이지에서 볼 수 있도록 하였습니다
  //화면 크기에 따른 여백을 조정해 디바이스별 화면에 맞췄습니다
  return (
    <html lang="en">
      <body className="font-nanum font-400">
        <header>
          <Header />
        </header>
        <main className="w-full h-16 bg-white px-4 lg:px-[18.75%] xs:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
