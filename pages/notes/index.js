import Link from "next/link";
import Newslater from "@/comp/Newslater";
import client from "apolloClient";
import GET_SUBJECTS from "@/query/subjects";
import Seo from "@/comp/Seo";

const index = ({ subjects, URL }) => {
  return (
    <>
      <Seo
        title="Subjects"
        description="Chemical Engg. Subjects"
        twTitle="Chemical Engg. Subjects"
        twDescription=""
        ogTitle="Chemical Engg. Subjects"
        ogDescription=""
        ogUrl={URL}
      />
      <header className="grid grid-cols-12 bg-black">
        <div className="lg:col-span-6 lg:col-start-2 lg:pt-48 lg:pb-64 md:col-span-6 md:col-start-2 col-span-10 col-start-2 py-24">
          <h1 className="font-display md:text-6xl xl:text-8xl text-6xl font-semibold leading-normal tracking-tighter text-white">
            Subjects
          </h1>
          <div className="font-display pt-7 text-white prose-white prose">
            <p>
              Interested in learning more about Laravel? This section features
              tutorials on everything from getting started with Laravel, to
              expert topics, and everything in&nbsp;between.
            </p>
          </div>
        </div>
      </header>
      <div className="bg-gray-500">
        {subjects.map((subject) => (
          <section key={subject.id} id={subject.id} className="pt-10 pb-10">
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
                <p className="mb-8 text-base leading-relaxed text-left  ">
                  {subject.Description}
                </p>
                <div className="flex flex-col justify-left lg:flex-row">
                  <Link href={"/notes/" + subject.Slug}>
                    <a>
                      <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-brand rounded hover:bg-brand-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                        {" "}
                        Show me{" "}
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <Newslater />
    </>
  );
};

export default index;

export async function getStaticProps(context) {
  const URL = process.env.APP_URL + "/notes";
  const data = await client.query({ query: GET_SUBJECTS });
  const subjects = await data.data.subjects;

  return {
    props: { subjects, URL },
  };
}
