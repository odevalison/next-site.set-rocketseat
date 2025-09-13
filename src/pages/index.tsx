import { PT_Sans_Caption } from "next/font/google";

const ptSansCaption = PT_Sans_Caption({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`min-h-screen min-w-full ${ptSansCaption.className}`}></div>
  );
}
