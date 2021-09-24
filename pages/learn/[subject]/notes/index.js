import client from "apolloClient";
import GET_SUBJECT from "@/query/subject";
import GET_SUBJECTS_PATHS from "@/query/subjectsPaths";
import Router from "next/router";
import Seo from "@/comp/Seo";
import { useRouter } from "next/router";
import Chapter from "@/comp/Notes/Chapter";

const index = ({ subject, URL }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <section className="pt-10 pb-10">
          <div className="container rounded bg-gray-200 flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="animate-spin object-cover object-center rounded"
                alt="It's empty Here"
                loading="lazy"
                src="/svg/loader.svg"
              />
            </div>
            <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
              <h1 className="mb-8 text-3xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">
                Loading....
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-left  ">
                Page is loading.Wait a moment ...
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Seo
        title={subject.Name + "::Notes"}
        description={subject.Description}
        twTitle={subject.Name}
        twDescription={subject.Description}
        twImage={subject.Image.url}
        ogTitle={subject.Name}
        ogDescription={subject.Description}
        ogImage={subject.Image.url}
        ogUrl={URL}
        canonical={URL}
      />
      <header className="bg-gray-900">
        <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-16">
          <div className="w-full mb-6 lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt={subject.Name}
              loading="lazy"
              src={subject.Image.url}
            />
          </div>
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <h2 className="mb-5 rounded px-2 bg-cyan-100 text-2xl font-white tracking-wider text-cyan-500 md:text-4xl title-font">
              Notes
            </h2>
            <h1 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-left text-white title-font">
              {subject.Name}
            </h1>
            <p className="mb-8 line-clamp-3 lg:line-clamp-5 text-white text-base leading-relaxed text-left  ">
              {subject.Description}
            </p>
          </div>
        </div>
      </header>
      <div className="bg-gray-500 pb-5 pt-5">
        {Object.entries(subject.Chapters).length === 0 ? (
          <>
            <section className="pt-10 pb-10">
              <div className="container rounded bg-gray-200 flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
                <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
                  <img
                    className="object-cover object-center rounded"
                    alt="It's empty Here"
                    loading="lazy"
                    src="/svg/empty.svg"
                  />
                </div>
                <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
                  <h1 className="mb-8 text-3xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">
                    Empty
                  </h1>
                  <p className="mb-8 text-xl leading-relaxed text-left  ">
                    Nothing to read here yet.Notes are availabale soon.....
                  </p>
                  <div className="flex flex-col justify-left lg:flex-row">
                    <button
                      onClick={() => Router.back()}
                      className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-brand rounded hover:bg-brand-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                    >
                      {" "}
                      Go Back{" "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            {subject.Chapters.map((chapter) => (
              <Chapter
                key={chapter.id}
                chapter={chapter}
                subjectSlug={subject.Slug}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default index;

export async function getStaticPaths() {
  const data = await client.query({ query: GET_SUBJECTS_PATHS });
  const subjects = await data.data.subjects;
  const paths = subjects.map((subject) => ({
    params: { subject: subject.Slug },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const slug = params.subject;
  const URL = process.env.APP_URL + "/learn/" + slug + "/notes";
  const data = await client.query({
    query: GET_SUBJECT,
    variables: { slug: slug },
  });

  if (Object.entries(data.data.subjects).length === 0) {
    return {
      notFound: true,
    };
  }

  const subject = await data.data.subjects[0];

  return {
    props: { subject, URL },
    revalidate: 120,
  };
}
