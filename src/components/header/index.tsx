import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/logo.svg";
import { LiaGamepadSolid } from "react-icons/lia";

const Header = () => {
  return (
    <header className="w-full h-28 bg-slate-100 px-2 text-black">
      <div className="max-w-screen-xl mx-auto flex justify-center sm:justify-between items-center h-28">
        <nav className="flex items-center justify-center gap-4">
          <Link href="/">
            <Image
              src={logoImg}
              alt="Logo"
              quality={100}
              priority
              className="w-full"
            />
          </Link>

          <Link href="/">Games</Link>
          <Link href="/profile">Perfil</Link>
        </nav>

        <div className="hidden sm:flex justify-center items-center">
          <Link href="/profile">
            <LiaGamepadSolid size={34} color="#475569"/>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
