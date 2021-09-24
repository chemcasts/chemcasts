import Link from "next/link";
import React from "react";
import Twitter from "@/comp/Icons/Twitter";
import Linkedin from "@/comp/Icons/Linkedin";

const data = [
  { name: "Learn", href: "/learn" },
  { name: "News", href: "/news" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          (navbarOpen ? "z-50 " : "z-20 ") +
          "max-w-screen-2xl sticky inset-0 top-0 bg-black lg:z-10 w-full col-span-12 px-4 py-2 mx-auto"
        }
      >
        <div className="md:hidden z-48 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center" aria-label="Home">
              <img src="/logo/logo.svg" className="w-12 h-12" alt="CHEMCASTS" />
            </a>
          </Link>
          <div className="flex -mr-2">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white z-20 inline-flex items-center justify-center p-2 text-gray-400 transition duration-300 ease-in-out rounded-sm"
            >
              <svg
                className="block w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="md:justify-between md:flex items-center hidden">
          <div className="md:flex-row md:items-center flex flex-col">
            <Link href="/">
              <a className="flex items-center mr-5" aria-label="Home">
                <img
                  src="/logo/logo.svg"
                  className="w-12 h-12"
                  alt="CHEMCASTS"
                />
              </a>
            </Link>
            {data.map((link) => (
              <Link key={link.href} href={link.href}>
                <a aria-label={link.name}>
                  <span className="text-white hover:text-brand hover:border-brand-700 hover:border-b-2 mx-2 lg:mx-3 text-xl font-medium tracking-tight ">
                    {link.name}
                  </span>
                </a>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="">
              <label htmlFor="-header_desktop-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <input
                  id="-header_desktop-search"
                  className="form-input rounded"
                  name="q"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            (navbarOpen ? "flex " : "hidden ") +
            "fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full overflow-hidden bg-black"
          }
        >
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white absolute top-0 right-0 z-50 inline-flex items-center justify-center p-2 m-4 text-gray-300 transition duration-200 ease-in-out rounded-sm"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 12 12"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
            >
              <path d="M1.5,1.5 L10.5,10.5 M1.37697205,10.5152716 L10.376972,1.5152716"></path>
            </svg>
          </button>
          <div className="flex flex-col items-center w-full h-full p-12">
            <div className="pt-8 mb-6">
              <a className="flex items-center" href="/" aria-label="Home">
                <img
                  src="/logo/logo.svg"
                  className="w-12 h-12"
                  alt="CHEMCASTS"
                />
              </a>
            </div>
            <div className="">
              <label htmlFor="-header_mobile-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <input
                  id="-header_mobile-search"
                  className="form-input rounded"
                  name="q"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="flex-grow w-full max-w-lg">
              <ul className="grid grid-cols-12 gap-2 py-8">
                {data.map((link) => (
                  <li
                    key={link.href}
                    className="inline-flex items-center justify-center col-span-12"
                  >
                    <Link href={link.href}>
                      <a
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        aria-label={link.name}
                      >
                        <span className="text-white mx-3 mt-3 mb-6 text-4xl font-bold tracking-tight ">
                          {link.name}
                        </span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center w-3/4">
              <div className="flex justify-center my-6 space-x-8">
                <a
                  href="https://www.twitter.com/CHEMCASTS_"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:rotate-12 transition-transform duration-100 ease-linear transform"
                  aria-label="Twitter link"
                >
                  <Twitter height="48" width="48" />
                </a>
                <a
                  href="https://www.linkedin.com/company/chemcasts"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:rotate-12 transition-transform duration-100 ease-linear transform"
                  aria-label="LinkedIn link"
                >
                  <Linkedin height="48" width="48" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
