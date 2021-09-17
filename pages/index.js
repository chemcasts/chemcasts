import Newslater from "@/comp/Newslater";
import Seo from "@/comp/Seo";
import Link from "next/link";

export default function Home({ URL }) {
  return (
    <>
      <Seo
        description="Digital library and commuity portal for chemical engineers."
        twTitle="CHEMCASTS"
        twDescription="Digital library and commuity portal for chemical engineers."
        ogTitle="CHEMCASTS"
        ogDescription="Digital library and commuity portal for chemical engineers."
        ogUrl={URL}
      />
      <header className="text-white bg-black">
        <div className="flex pt-10 flex-col items-start px-5 py-3 mx-auto md:flex-row lg:px-28">
          <h1 className="text-5xl font-content text-brand tracking-tighter md:text-7xl">
            {" "}
            CHEMCASTS{" "}
          </h1>
        </div>
        <div className="flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h1 className="mb-5 text-4xl uppercase md:text-5xl">
              {" "}
              World wide <br />
              <span className="rounded font-bold text-5xl md:text-6xl text-brand-600 transform rotate-2">
                quimico
              </span>{" "}
              community portal{" "}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-left">
              {" "}
              Digital library and commuity portal for
              <strong className="tracking-wider uppercase"> chemical </strong>
              engineers.{" "}
            </p>
            <div className="flex flex-col justify-center lg:flex-row">
              <Link href="/learn">
                <button className="bg-brand rounded text-white hover:text-gray-300 focus:outline-none px-3 h-12 w-full">
                  <span className="font-bold text-xl"> Get Strated </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded-lg "
              alt="hero"
              src="/svg/hero-1.svg"
            />
          </div>
        </div>
      </header>
      <section className="bg-gray-400">
        <div className="container items-center px-5 py-8 mx-auto lg:px-24">
          <div className="flex flex-wrap mb-6 text-left">
            <div className="items-center px-5 py-3 lg:w-1/3">
              <div className="flex flex-wrap ">
                <div className="w-full mx-auto my-4 bg-white border rounded-lg shadow-xl">
                  <div className="p-6">
                    <h2 className="mb-3 text-xs font-semibold tracking-widest text-black uppercase title-font">
                      {" "}
                      Understand concepts
                    </h2>
                    <h4 className="mb-3 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font ">
                      {" "}
                      Notes
                    </h4>
                    <p className="mb-3 text-base leading-relaxed text-blueGray-500">
                      {" "}
                      Well-written notes to understanding each chemical
                      engineering topic and concept easily. Make your
                      fundamentals strong.{" "}
                    </p>
                    <p></p>
                    <button className="w-full px-16 py-2 my-2 text-xl font-bold transition duration-500 ease-in-out transform text-brand-500 bg-brand-100 rounded hover:bg-brand-200 focus:shadow-outline focus:outline-none">
                      {" "}
                      Read{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center px-5 py-3 lg:w-1/3">
              <div className="flex flex-wrap ">
                <div className="w-full mx-auto my-4 bg-white border rounded-lg shadow-xl">
                  <div className="p-6">
                    <h2 className="mb-3 text-xs font-semibold tracking-widest text-black uppercase title-font">
                      {" "}
                      Solved Examples
                    </h2>
                    <h4 className="mb-3 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font ">
                      {" "}
                      Examples
                    </h4>
                    <p className="mb-3 text-base leading-relaxed text-blueGray-500">
                      {" "}
                      If any Environment Variables values are changed between
                      Deployments, deduplication will always be bypassed.{" "}
                    </p>
                    <p></p>
                    <button className="w-full px-16 py-2 my-2 text-xl font-bold transition duration-500 ease-in-out transform text-brand-500 bg-brand-100 rounded hover:bg-brand-200 focus:shadow-outline focus:outline-none">
                      {" "}
                      Solve{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center px-5 py-3 lg:w-1/3">
              <div className="flex flex-wrap ">
                <div className="w-full mx-auto my-4 bg-white border rounded-lg shadow-xl">
                  <div className="p-6">
                    <h2 className="mb-3 text-xs font-semibold tracking-widest text-black uppercase title-font">
                      {" "}
                      Recommended Books
                    </h2>
                    <h4 className="mb-3 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font ">
                      {" "}
                      Books
                    </h4>
                    <p className="mb-3 text-base leading-relaxed text-blueGray-500">
                      {" "}
                      If any Environment Variables values are changed between
                      Deployments, deduplication will always be bypassed.{" "}
                    </p>
                    <p></p>
                    <button className="w-full px-16 py-2 my-2 text-xl font-bold transition duration-500 ease-in-out transform text-brand-500 bg-brand-100 rounded hover:bg-brand-200 focus:shadow-outline focus:outline-none">
                      {" "}
                      Explore{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newslater />
    </>
  );
}

export async function getStaticProps(context) {
  const URL = process.env.APP_URL;
  return {
    props: { URL },
  };
}
