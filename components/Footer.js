import Link from "next/link";
import Twitter from "@/comp/Icons/Twitter";
import Linkedin from "@/comp/Icons/Linkedin";
import LogoBrandFlat from "@/comp/Svg/Logo/LogoBrandFlat";

const data = [
  {
    name: "chemcasts",
    links: [
      { name: "Learn", href: "/learn" },
      { name: "News", href: "/news" },
    ],
  },
  {
    name: "legal",
    links: [
      { name: "Legal", href: "/legal" },
      { name: "Policy", href: "/legal/privacy-policy" },
      { name: "Terms of Service", href: "/legal/terms-of-service" },
      { name: "Terms Of Use", href: "/legal/terms-of-use" },
    ],
  },
  {
    name: "company",
    links: [
      { name: "Company", href: "/company" },
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
            <p className="mb-4 text-base font-title tracking-wider uppercase text-white">
              World wide quimico community
            </p>
            <div className="flex flex-wrap items-center">
              <LogoBrandFlat />
            </div>
          </div>
          <div className="lg:col-span-5 md:col-span-5 col-span-10 col-start-2">
            <p className="mb-4 text-base text-white">Follow CHEMCASTS on</p>
            <div className="flex flex-wrap">
              <a
                href="https://www.twitter.com/CHEMCASTS_"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:bg-gray-500 inline-flex items-center px-4 py-3 mb-2 mr-2 transition-colors duration-200 ease-in bg-gray-700 rounded-sm shadow"
              >
                <Twitter height="24" width="24" />
                <p className="font-body ml-2 text-sm leading-none text-white capitalize">
                  Twitter
                </p>
              </a>
              <a
                href="https://www.linkedin.com/company/chemcasts"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:bg-gray-500 inline-flex items-center px-4 py-3 mb-2 mr-2 transition-colors duration-200 ease-in bg-gray-700 rounded-sm shadow"
              >
                <Linkedin height="24" width="24" />
                <p className="font-body ml-2 text-sm leading-none text-white capitalize">
                  LinkedIn
                </p>
              </a>
            </div>
          </div>
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
                        <span className="text-gray-200 hover:border-b-2 hover:border-white lg:text-lg text-base">
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
                    A division of 009Labs Inc.
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
