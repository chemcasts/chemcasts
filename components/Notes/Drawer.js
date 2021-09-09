import React from "react";
import Link from "next/link";

const Drawer = ({ links,base }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <>
      <aside
        id="sidebar"
        className={
          (drawerOpen ? "block fixed z-20 " : "hidden z-60 ") +
          "inset-0 flex-none bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block"
        }
      >
        <div
          id="navWrapper"
          className="h-screen overflow-y-auto scrolling-touch lg:block lg:sticky lg:bg-transparent lg:top-10  bg-white mr-24 lg:mr-0"
        >
          <nav
            id="nav"
            className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:block lg:pb-14 sticky"
          >
            <ul>
              <li className="mt-8">
                <h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
                  Topics
                </h5>
                <ul>
                  {links.map((link) => (
                    <li key={link.id}>
                      <Link href={base+"/"+link.Slug} >
                      <a
                        className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      >
                        <span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                        <span className="relative">{link.Name}</span>
                      </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        type="button"
        aria-label="Navigation"
        className="fixed z-20 bottom-4 right-4 w-16 h-16 rounded-full focus:outline-none bg-brand-400 text-black block lg:hidden"
      >
        <span className="sr-only">Open site navigation</span>
        {drawerOpen ? (
          <>
            <svg
              width="24"
              height="24"
              fill="none"
              className="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        ) : (
          <>
            <svg
              width="24"
              height="24"
              fill="none"
              className="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform"
            >
              <path
                d="M4 8h16M4 16h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              className="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform opacity-0 scale-80"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        )}
      </button>
    </>
  );
};

export default Drawer;
