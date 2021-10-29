import Link from "next/link";
import Seo from "@/comp/Seo";

const contact = () => {
  return (
    <>
      <Seo
        title="Contact"
        description="Catering Questions?: We are here to help"
        twTitle="Contact"
        twDescription="Catering Questions?: We are here to help"
        ogTitle="Contact"
        ogDescription="Catering Questions?: We are here to help"
      />
      <header className="text-white bg-gray-700">
        <div className="flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h1 className="mb-5 text-4xl uppercase md:text-5xl">Contact</h1>
            <p className="mb-8 text-lg leading-relaxed text-left">
              {" "}
              Contact us at given mail address if you need any help.
            </p>
            <div className="flex flex-col justify-center lg:flex-row">
              <a
                href="mailto:chemcasts.wb@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="bg-brand rounded text-white hover:text-gray-300 focus:outline-none px-3 h-12 w-full">
                  <span className="font-bold text-xl">
                    chemcasts.wb@gmail.com
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="w-full bg-white rounded lg:w-1/2 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded-lg "
              alt="hero"
              src="/svg/contact.svg"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default contact;
