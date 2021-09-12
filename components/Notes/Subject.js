import Link from "next/link";

const Subject = ({subject}) => {
    return (
        <>
        <section id={subject.id} className="pt-10 pb-10">
            <div className="container rounded bg-gray-200 flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
              <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
                <img
                  className="object-cover object-center rounded"
                  alt={subject.Name}
                  loading="lazy"
                  src={subject.Image.url}
                />
              </div>
              <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
                <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">
                  {subject.Name}
                </h1>
                <p className="mb-8 line-clamp-3 lg:line-clamp-5 text-base leading-relaxed text-left  ">
                  {subject.Description}
                </p>
                <div className="flex flex-col justify-left lg:flex-row">
                  <Link href={"/notes/" + subject.Slug}>
                    <a>
                      <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-brand rounded hover:bg-brand-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                        {" "}
                        
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>{" "}
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}

export default Subject;