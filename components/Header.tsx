import Link from "next/link";

const Header = () => {
  return (
    <nav className="mt-4 absolute z-30 w-full flex flex-wrap items-center justify-between px-2 py-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <input type="checkbox" className="hidden" id="menu-button" />
        <div className="w-full relative flex justify-between items-center h-12">
          <Link
            className="relative text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="/"
          >
            <svg
              className="h-12 w-52 absolute top-0 transform -translate-y-2/4"
              aria-label="Gamou"
            >
              <use xlinkHref="#logo_white" />
            </svg>
          </Link>
          <a className="btn-primary btn-small" href="/users/sign_in">
            <i className="fas fa-sign-in-alt"></i>
            Entrar
          </a>
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

export default Header;
