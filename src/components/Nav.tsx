import Link from "next/link";
import { Logo } from "../icons/Logo";
import { Button } from "./Button";

const Nav = () => {
  return (
    <nav className="mt-4 absolute z-30 w-full flex flex-wrap items-center justify-between px-2 py-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <input type="checkbox" className="hidden" id="menu-button" />
        <div className="w-full relative flex justify-between items-center h-12">
          <Link
            className="relative text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="/"
          >
            <Logo />
          </Link>
          <Link href="#contato">
            <i className="fas fa-sign-in-alt"></i>
            <Button>CONTATO</Button>
          </Link>
        </div>
        <div
          className="flex-grow items-center bg-white lg:ml-auto lg:mr-4 lg:max-w-xs"
          id="menu-list"
        >
          <ul className="flex flex-col list-none"></ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
