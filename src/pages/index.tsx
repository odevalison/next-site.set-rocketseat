import { Header } from "@/components/header";
import { PT_Sans_Caption } from "next/font/google";

const ptSansCaption = PT_Sans_Caption({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`bg-black min-h-screen min-w-full text-white ${ptSansCaption.className}`}
    >
      <Header />
    </div>
  );
}
