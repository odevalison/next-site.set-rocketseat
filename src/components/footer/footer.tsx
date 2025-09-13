import Link from "next/link";
import { Logo } from "../logo";

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row justify-between gap-8 py-8">
          <Logo />
          <nav className="flex flex-col items-center md:flex-row gap-4 text-body-sm text-blue-100">
            <Link href="/termos-de-uso" className="hover:text-blue-200">
              Termos de uso
            </Link>
            <Link href="/politica-privacidade" className="hover:text-blue-200">
              Política de privacidade
            </Link>
            <Link href="/feedback" className="hover:text-blue-200">
              Enviar feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
