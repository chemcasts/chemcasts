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
        title={subject.Name}
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
      <header className="text-white bg-black">
        <div className="flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h1 className="mb-5 text-3xl font-white tracking-tighter md:text-5xl title-font">
              {subject.Name}
            </h1>
            <p className="mb-8 text-x leading-relaxed text-left">
              {subject.Description}
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded-lg "
              alt="hero"
              src={subject.Image.url}
            />
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
              <Chapter key={chapter.id} chapter={chapter} subjectSlug={subject.Slug} />
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
  const URL = process.env.APP_URL + "/notes/" + slug;
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
    revalidate: 10,
  };
}
