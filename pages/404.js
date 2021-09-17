import Newslater from "@/comp/Newslater";
import Link from "next/link";

const Error404 = () => {
  return (
    <>
      <section className="text-white bg-gray-600">
        <div className="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              loading="lazy"
              src="/svg/404.svg"
            />
          </div>
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <h1 className="mb-8 text-3xl font-bold tracking-tighter lg:text-left lg:text-5xl title-font">
              You lost somewhere in space.
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-left">
              Page you are looking for is not available.{" "}
            </p>
            <div className="flex flex-col w-full gap-2 md:justify-start md:flex-row">
              <Link href="/">
                <a>
                  <button className="bg-brand rounded px-3 h-12 w-full">
                    <span className="font-bold text-xl text-white">
                      {" "}
                      Return Home{" "}
                    </span>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Newslater />
    </>
  );
};

export default Error404;
