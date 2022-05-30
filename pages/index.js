import Newslater from "@/comp/Newslater";
import Seo from "@/comp/Seo";
import Link from "next/link";
import Image from "next/image";
import Brand from "@/comp/Svg/Logo/Brand";

export default function Home({ URL }) {
  return (
    <>
      <Seo
        title="World wide quimico community portal"
        description="Digital library and commuity portal for chemical engineers. Online chemical engineering learning resources and
        collaboration platform."
        twTitle="World wide quimico community portal"
        twDescription="Digital library and commuity portal for chemical engineers. Online chemical engineering learning resources and
        collaboration platform."
        ogTitle="World wide quimico community portal"
        ogDescription="Digital library and commuity portal for chemical engineers. Online chemical engineering learning resources and
        collaboration platform."
        ogUrl={URL}
      />
      <header className="text-white bg-gray-900">
        <div className="flex pt-10 flex-col items-start px-5 py-3 mx-auto md:flex-row lg:px-28">
          <h5 className="text-4xl font-content text-brand tracking-tighter md:text-7xl">
            <Brand />
          </h5>
        </div>
        <div className="flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h1 className="mb-5 text-4xl uppercase md:text-5xl">
              {" "}
              World wide <br />
              <span className="rounded font-bold text-5xl md:text-6xl text-brand-600 transform rotate-2">
                quimico
              </span>{" "}
              <br />
              community
              <br />
              portal{" "}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-left">
              {" "}
              Digital library and commuity portal for
              <strong className="tracking-wider uppercase"> chemical </strong>
              engineers. Online chemical engineering learning resources and
              collaboration platform.{" "}
            </p>
            <div className="flex flex-col justify-center lg:flex-row">
              <Link href="/learn">
                <a>
                  <button className="bg-brand rounded text-white hover:text-gray-300 focus:outline-none px-3 h-12 w-full">
                    <span className="font-bold text-xl"> Get Strated </span>
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full bg-white rounded lg:w-1/2 lg:max-w-lg md:w-1/2">
            <Image
              className="object-cover object-center rounded-lg "
              alt="Chemcasts- World wide quimico community"
              src="/png/hero-1.png"
              priority={true}
              layout="responsive"
              height={600}
              width={720}
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
                    <h3 className="mb-3 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font ">
                      {" "}
                      Notes
                    </h3>
                    <p className="mb-3 text-base leading-relaxed text-blueGray-700">
                      {" "}
                      Well-written notes to understanding each chemical
                      engineering topic and concept easily. Make your
                      fundamentals strong.{" "}
                    </p>
                    <Link href="/learn">
                      <a>
                        <button className="w-full px-16 py-2 my-2 text-xl font-bold transition duration-500 ease-in-out transform text-brand-500 bg-brand-50 rounded hover:bg-brand-100 focus:shadow-outline focus:outline-none">
                          {" "}
                          Read{" "}
                        </button>
                      </a>
                    </Link>
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
                    <h3 className="mb-3 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font ">
                      {" "}
                      Examples
                    </h3>
                    <p className="mb-3 text-base leading-relaxed text-blueGray-700">
                      {" "}
                      Solve given examples based on every topic and subject to
                      sharpen your concept and enhance your problem-solving
                      ability.{" "}
                    </p>
                    <Link href="/learn">
                      <a>
                        <button className="w-full px-16 py-2 my-2 text-xl font-bold transition duration-500 ease-in-out transform text-brand-500 bg-brand-50 rounded hover:bg-brand-100 focus:shadow-outline focus:outline-none">
                          {" "}
                          Solve{" "}
                        </button>
                      </a>
                    </Link>
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
                    <h3 className="mb-3 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font ">
                      {" "}
                      Books
                    </h3>
                    <p className="mb-3 text-base leading-relaxed text-blueGray-700">
                      {" "}
                      Recommended books for every subject. Explore these books.
                      Going beyond the surface of a subject is essential to
                      success.{" "}
                    </p>
                    <Link href="/learn">
                      <a>
                        <button className="w-full px-16 py-2 my-2 text-xl font-bold transition duration-500 ease-in-out transform text-brand-500 bg-brand-50 rounded hover:bg-brand-100 focus:shadow-outline focus:outline-none">
                          {" "}
                          Explore{" "}
                        </button>
                      </a>
                    </Link>
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
  const URL = process.env.NEXT_PUBLIC_VERCEL_URL;
  return {
    props: { URL },
  };
}
