import Logo from "../components/Logo";
import Link from "next/link";
import Twitter from "@/comp/Icons/Twitter";
import Linkedin from "@/comp/Icons/Linkedin";

const data = [
  {
    name: "chemcasts",
    links: [
      { name: "Notes", href: "/notes" },
      { name: "Examples", href: "/examples" },
      { name: "Books", href: "/books" },
      { name: "News", href: "/news" },
    ],
  },
  {
    name: "legal",
    links: [
      { name: "Policy", href: "/legal/policy" },
      { name: "Terms of Service", href: "/legal/terms-of-service" },
      { name: "Terms Of Use", href: "/legal/terms-of-use" },
    ],
  },
  {
    name: "company",
    links: [
      { name: "About Us", href: "/company/about" },
      { name: "Partners", href: "/company/partners" },
      { name: "Advertising", href: "/company/advertising" },
      { name: "Contact", href: "/company/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="grid grid-cols-12 gap-8 py-16 mx-auto">
          <div className="lg:col-span-3 lg:col-start-2 md:col-span-5 md:col-start-2 col-span-10 col-start-2 mb-10">
            <p className="mb-4 text-base text-white">
              World wide chemico community
            </p>
            <div className="flex flex-wrap">
              <img
                src="https://laravelnews.imgix.net/laravel-news__logo.png?ixlib=php-3.3.1"
                className="w-56 h-12"
                alt="Laravel News"
              />
            </div>
          </div>
          <div className="lg:col-span-5 md:col-span-5 col-span-10 col-start-2">
            <p className="mb-4 text-base text-white">Follow Laravel News on</p>
            <div className="flex flex-wrap">
              <a
                href="https://www.facebook.com/laravelnews"
                rel="noopener"
                className="hover:bg-gray-500 inline-flex items-center px-4 py-3 mb-2 mr-2 transition-colors duration-200 ease-in bg-gray-700 rounded-sm shadow"
              >
                <Twitter height="24" width="24" />
                <p className="font-body ml-2 text-sm leading-none text-white capitalize">
                  Twitter
                </p>
              </a>
              <a
                href="https://www.facebook.com/laravelnews"
                rel="noopener"
                className="hover:bg-gray-500 inline-flex items-center px-4 py-3 mb-2 mr-2 transition-colors duration-200 ease-in bg-gray-700 rounded-sm shadow"
              >
                <Linkedin height="24" width="24" />
                <p className="font-body ml-2 text-sm leading-none text-white capitalize">
                  LinkedIn
                </p>
              </a>
            </div>
          </div>
          <a
            className="lg:col-span-2 md:col-span-10 md:col-start-2 md:justify-center md:items-center lg:items-end lg:justify-start md:flex-row lg:flex-col group flex flex-col col-span-10 col-start-2"
            href="#"
            aria-label="zaengle.com"
          >
            <p className="md:mb-0 md:mr-4 lg:mr-0 lg:mb-4 lg:text-right mb-4 text-base text-white transition-colors duration-100 ease-in">
              Design &amp; development&nbsp;by
            </p>
            <svg
              className="group-hover:text-z-green text-white transition-colors duration-100 ease-in fill-current"
              width="148"
              height="46"
              viewBox="0 0 148 46"
              fill="current"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M54.3348 21.4531L54.8899 25.0112L66.5023 23.7755C66.8083 22.5366 66.9622 21.2654 66.9604 19.9896C66.9604 14.1005 63.5595 10.674 57.6917 10.674C51.8238 10.674 46.7842 14.898 46.7842 23.2672C46.7842 30.208 50.6696 35.0542 57.8238 35.0542C63.5595 35.0542 66.6344 33.0912 66.6344 33.0912L65.7533 29.0249C63.4304 29.8496 60.9936 30.3137 58.5287 30.4008C54.2908 30.4008 52.1939 28.3939 52.1939 23.276C52.1939 16.6419 54.7578 15.0645 57.6917 15.0645C60.467 15.0645 61.8415 16.8172 61.8415 20.0422V20.3051L54.3348 21.4531Z"
                fill="current"
              ></path>{" "}
              <path
                d="M42.8722 20.1562C42.8722 14.3635 38.8193 10.7178 32.4757 10.7178C30.1474 10.6904 27.8255 10.9643 25.5682 11.5328L26.1233 16.0987C27.9885 15.6687 29.8922 15.425 31.8061 15.3713C35.4889 15.3713 37.1718 16.8348 37.2599 19.6654V29.6647L41.4096 35.0543L45.7356 32.5829L42.8986 27.5176L42.8722 20.1562Z"
                fill="current"
              ></path>{" "}
              <path
                d="M31.5948 30.4096C28.934 30.4096 28.1939 28.9198 28.1939 27.1671C28.1885 26.3321 28.4475 25.5165 28.934 30.836L34.8988 23.7318V20.1562L26.793 21.2079C25.6459 21.8293 30.6866 22.7444 30.0143 23.8584C23.3421 30.9723 22.9812 26.2447 22.9692 27.5439C22.9692 31.7505 25.5331 35.0368 31.2688 35.0368C33.2241 35.0379 35.1298 34.4244 36.7137 33.2841L34.8988 29.6297C33.867 30.1239 32.7398 30.39 31.5948 30.4096Z"
                fill="current"
              ></path>{" "}
              <path
                d="M20.0352 11.454H0V16.0636H20.0352V11.454Z"
                fill="current"
              ></path>{" "}
              <path
                d="M7.0837 29.2528L8.81057 27.7893L17.2863 18.7979L10.7137 18.3948L0 29.6647V34.2744H20.0352V29.6647H7.0837V29.2528Z"
                fill="current"
              ></path>{" "}
              <path
                d="M103.489 26.9217C108.159 26.9217 112.855 30.1612 112.855 19.0345C112.855 15.3889 110.432 12.7861 107.568 11.5066C107.85 9.85029 108.123 7.86096 108.176 7.1774L103.559 6.85315V14.977C106.59 15.0208 107.612 16.8962 107.612 19.0345C107.612 21.462 106.405 22.908 103.507 22.908C100.608 22.908 99.1013 21.4445 99.1013 19.0345C99.0198 18.2055 99.2312 17.374 99.6991 16.6831C100.167 15.9922 100.862 15.485 101.665 15.2487L100.687 11.0684C98.4053 11.6205 93.8414 13.8903 93.8414 19.052C93.8502 30.6432 98.326 26.9217 103.489 26.9217Z"
                fill="current"
              ></path>{" "}
              <path
                d="M76.0528 11.454H70.4141V34.2743H76.0528V11.454Z"
                fill="current"
              ></path>{" "}
              <path
                d="M122.74 26.1067V0H117.101V26.7464C117.101 33.2665 118.943 34.8264 125.612 34.8264V29.7085C123.295 29.7085 122.74 28.6131 122.74 26.1067Z"
                fill="current"
              ></path>{" "}
              <path
                d="M139.559 30.4095C135.322 30.4095 133.225 28.4027 133.225 23.2847C133.225 16.6507 135.789 15.0733 138.722 15.0733C141.498 15.0733 142.863 16.826 142.863 20.0422V20.3139L135.366 21.4531L135.921 25.0112L147.533 23.7755C147.842 22.5369 147.998 21.2657 148 19.9896C148 14.1005 144.599 10.674 138.722 10.674C132.846 10.674 127.841 14.898 127.841 23.276C127.841 30.2167 131.727 35.0542 138.881 35.0542C144.617 35.0542 147.692 33.0912 147.692 33.0912L146.811 29.0249C144.478 29.8476 142.033 30.3144 139.559 30.4095Z"
                fill="current"
              ></path>{" "}
              <path
                d="M112.273 31.2597L97.9207 28.3414C97.6231 29.1847 97.4973 30.0784 97.5507 30.9705C97.6056 31.8104 97.8625 32.6248 98.2996 33.3454L109.251 35.2734C109.569 35.8458 109.715 36.4964 109.674 37.1488C109.674 39.5676 107.912 41.3466 104.176 41.3466C100.441 41.3466 98.2115 39.7954 98.2115 37.2803C98.2175 36.9017 98.2499 36.5239 98.3084 36.1498L93.9031 35.4575C93.5195 36.3672 93.3276 37.3455 93.3392 38.3319C93.3392 42.8977 97.7445 46 103.454 46C110.908 46 114.908 41.7585 114.908 36.9648C114.93 35.8777 114.704 34.7998 114.248 33.8118C113.792 32.8237 113.117 31.9512 112.273 31.2597Z"
                fill="current"
              ></path>{" "}
              <path
                d="M82.5286 10.6829C80.2467 10.6829 77.9119 12.5057 77.9119 12.5057L79.022 16.572C79.908 16.1209 80.8754 15.8498 81.8678 15.7745C84.2026 15.7745 85.1982 16.4142 85.1982 18.6051V34.2744H90.8194V17.9829C90.8194 12.8738 86.3436 10.6829 82.5286 10.6829Z"
                fill="current"
              ></path>{" "}
            </svg>
          </a>
          <div className="col-span-10 col-start-2 mb-6">
            <div className="md:items-center lg:items-start flex flex-col w-full">
              {data.map((links) => (
                <div key={links.name} className="flex flex-wrap mb-4">
                  {links.links.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <a
                        key={link.href}
                        aria-label={link.name}
                        className="mr-6 mb-2"
                      >
                        <span className="text-white hover:border-b-2 hover:border-white text-base ">
                          {link.name}
                        </span>
                      </a>
                    </Link>
                  ))}
                </div>
              ))}
              <div className="lg:flex-row flex flex-col justify-between w-full">
                <div className="lg:w-1/3 lg:text-left lg:mt-0 md:text-center w-full mt-6 text-left">
                  <p className="text-xs text-gray-300">
                    © 2012 - 2021 CHEMCASTS
                  </p>
                  <p className="text-xs text-gray-300">
                    A division of dotdev inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
