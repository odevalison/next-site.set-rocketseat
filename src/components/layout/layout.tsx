import { Footer } from "../footer";
import { Header } from "../header";
import { Inter, PT_Sans_Caption } from "next/font/google";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.variable} ${ptSansCaption.variable} relative flex flex-col min-h-screen bg-gray-700 font-inter`}
    >
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};
