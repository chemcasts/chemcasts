import Newslater from "@/comp/Newslater";
import Seo from "@/comp/Seo";

export default function Home({ URL }) {
  return (
    <>
      <Seo
        description="Chemical Engg. Subjects"
        twTitle="CHEMCASTS"
        twDescription="Chemical Engg. Subjects"
        ogTitle="CHEMCASTS"
        ogDescription="Chemical Engg. Subjects"
        ogUrl={URL}
      />
      <header className="text-white bg-black">
        <div className="flex pt-10 flex-col items-start px-5 py-3 mx-auto md:flex-row lg:px-28">
          <h1 className="text-5xl font-content text-brand tracking-tighter md:text-7xl title-font">
            {" "}
            CHEMCASTS{" "}
          </h1>
        </div>
        <div className="flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h1 className="mb-5 text-4xl tracking-wide uppercase md:text-5xl title-font">
              {" "}
              World wide{" "}
              <strong className="rounded text-brand">
                chemico
              </strong>{" "}
              community{" "}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-left">
              {" "}
              Digital library and commuity portal for
              <strong className="tracking-wider uppercase"> chemical </strong>
              engineers.{" "}
            </p>
            <div className="flex flex-col justify-center lg:flex-row">
              <button className="bg-brand rounded px-3 h-12 w-full">
                <span className="font-bold text-xl text-white">
                  {" "}
                  Start here{" "}
                </span>
              </button>
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
      <section className="text-black bg-gray-500">
        <div className="container items-center px-5 py-3 mx-auto lg:px-24">
          <div className="flex flex-wrap mb-5 text-left">
            <div className="w-full p-4 mx-auto lg:w-1/3">
              <div className="p-4 lg:p-8 border-t-8 border-brand-500 bg-white rounded">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 bg-gray-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(72 12 12)"
                    ></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(144 12 12)"
                    ></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(216 12 12)"
                    ></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(288 12 12)"
                    ></line>
                  </svg>
                </div>
                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter lg:text-3xl title-font">
                  {" "}
                  For Students{" "}
                </h1>
                <p className="mx-auto text-base font-medium leading-relaxed">
                  You're about to launch soon and must be 100% focused on your
                  product. Don't loose precious days designing, coding the
                  landing page and testing .{" "}
                </p>
              </div>
            </div>
            <div className="w-full p-4 mx-auto lg:w-1/3">
              <div className="p-4 lg:p-8 border-t-8 border-brand-500 bg-white rounded">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 bg-gray-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(72 12 12)"
                    ></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(144 12 12)"
                    ></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(216 12 12)"
                    ></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(288 12 12)"
                    ></line>
                  </svg>
                </div>
                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter lg:text-3xl title-font">
                  {" "}
                  For Professionals{" "}
                </h1>
                <p className="mx-auto text-base font-medium leading-relaxed">
                  You're about to launch soon and must be 100% focused on your
                  product. Don't loose precious days designing, coding the
                  landing page and testing .{" "}
                </p>
              </div>
            </div>
            <div className="w-full p-4 mx-auto lg:w-1/3">
              <div className="p-4 lg:p-8 border-t-8 border-brand-500 bg-white rounded">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 bg-gray-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(72 12 12)"
                    ></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(144 12 12)"
                    ></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(216 12 12)"
                    ></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(288 12 12)"
                    ></line>
                  </svg>
                </div>
                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter lg:text-3xl">
                  {" "}
                  For Teachers{" "}
                </h1>
                <p className="mx-auto text-base font-medium leading-relaxed">
                  You're about to launch soon and must be 100% focused on your
                  product. Don't loose precious days designing, coding the
                  landing page and testing .{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white pt-3 bg-black">
        <div className="flex flex-col items-start mt-4 px-5 py-3 mx-auto lg:items-center md:flex-row lg:px-28">
          <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              loading="lazy"
              src="/svg/hero-2.svg"
            />
          </div>
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <h1 className="mb-8 text-2xl font-bold tracking-tighter lg:text-left lg:text-5xl title-font">
              Medium length display headline.
            </h1>
            <p className="mb-8 text-x leading-relaxed text-left">
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page.{" "}
            </p>
            <p className="w-full mt-2 mb-8 text-sm text-left">
              {" "}
              I got 99 problems and blocks ain't one.
            </p>
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
