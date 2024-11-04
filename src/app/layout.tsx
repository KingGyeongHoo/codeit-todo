import Header from "@/widgets/Header";
import "../css/global.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
