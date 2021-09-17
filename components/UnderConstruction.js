import Link from "next/link";

const UnderConstruction = () => {
  return (
    <>
      <section className="text-white bg-gray-400">
        <div className="flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h1 className="mb-5 text-4xl uppercase md:text-5xl">
              {" "}
              Under Construction{" "}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-left">
              {" "}
              This section is under construction. Available soon.{" "}
            </p>
            <div className="flex flex-col justify-center lg:flex-row">
              <Link href="/">
                <button className="bg-brand rounded text-white hover:text-gray-300 focus:outline-none px-3 h-12 w-full">
                  <span className="font-bold text-xl"> Return Home </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded-lg "
              alt="hero"
              src="/svg/under-construction.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UnderConstruction;