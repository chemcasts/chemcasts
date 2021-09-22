import Drawer from "@/comp/Notes/Drawer";
import client from "apolloClient";
import GET_CHAPTER from "@/query/chapter";
import GET_EXAMPLES_PATHS from "@/query/examplesPaths";
import { useRouter } from "next/router";
import Router from "next/router";
import Note from "@/comp/Notes/Note";
import Seo from "@/comp/Seo";

const ExamplePage = ({ chapter, note, URL, canURL }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <section className="pt-10 pb-10 bg-gray-500">
          <div className="container rounded bg-gray-200 flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="Loading.."
                loading="lazy"
                src="/svg/loader.svg"
              />
            </div>
            <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
              <h1 className="mb-8 text-3xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">
                Loading....
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-left  ">
                Wait a moment ...
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
        title={chapter.Name + "::" + note.Name}
        description={chapter.Description}
        twTitle={chapter.Name + "::" + note.Name}
        twDescription={chapter.Description}
        ogTitle={chapter.Name + "::" + note.Name}
        ogDescription={chapter.Description}
        ogUrl={URL}
        canonical={canURL}
      />
      <header className="text-white bg-gray-900">
        <div className="flex flex-col items-center px-5 py-5 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 className="mb-3 rounded px-2 bg-indigo-100 text-2xl font-white tracking-wider text-indigo-500 md:text-4xl title-font">
              Examples
            </h2>
            <h1 className="mb-5 text-3xl font-white tracking-tighter md:text-5xl title-font">
              {chapter.Name}
            </h1>
            <p className="mb-2 text-x leading-relaxed text-left">
              {chapter.Description}
            </p>
          </div>
        </div>
      </header>
      {Object.entries(note).length === 0 ? (
        <>
          <section className="pt-10 pb-10 bg-gray-500">
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
          <div className="w-full max-w-8xl mx-auto">
            <div className="container lg:flex">
              <Note
                note={note}
                subject={{
                  Name: chapter.Subject.Name,
                  Slug: chapter.Subject.Slug,
                }}
                chapter={{ Name: chapter.Name, Slug: chapter.Slug }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ExamplePage;

export async function getStaticPaths() {
  const data = await client.query({ query: GET_EXAMPLES_PATHS });
  const examples = await data.data.examples;
  const paths = examples.map((example) => ({
    params: {
      subject: example.Chapter.Subject.Slug,
      chapter: example.Chapter.Slug,
      example: example.Slug,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  let note;
  const slug = params.chapter;
  const noteSlug = "introduction-" + slug;
  const URL =
    process.env.APP_URL +
    "/learn/" +
    params.subject +
    "/notes/" +
    params.chapter;
  const canURL =
    process.env.APP_URL +
    "/learn/" +
    params.subject +
    "/notes/" +
    params.chapter +
    "/introduction-" +
    params.chapter;
  const data = await client.query({
    query: GET_CHAPTER,
    variables: { slug: slug, note: noteSlug },
  });

  if (Object.entries(data.data.chapters).length === 0) {
    return {
      notFound: true,
    };
  }

  const chapter = data.data.chapters[0];
  if (Object.entries(data.data.notes).length === 0) {
    note = [];
  } else {
    note = data.data.notes[0];
  }
  return {
    props: { chapter, note, URL, canURL },
    revalidate: 10,
  };
}
