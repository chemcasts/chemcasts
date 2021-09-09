import Drawer from "@/comp/Notes/Drawer";
import Markdown from "@/comp/Markdown";
import client from "apolloClient";
import GET_CHAPTER from "@/query/chapter";
import GET_CHAPTERS_PATHS from "@/query/chaptersPaths";
import Router from "next/router";

const index = ({ chapter, note, URL }) => {
  return (
    <>
      {Object.entries(note).length === 0 ? (
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
          <div className="w-full max-w-8xl mx-auto">
            <div className="container lg:flex">
              <Drawer
                links={chapter.Notes}
                base={"/notes/" + chapter.Subject.Slug + "/" + chapter.Slug}
              />
              <div
                id="content-wrapper"
                className="min-w-0 z-90 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible"
              >
                <div className="px-4 prose prose-lg sm:px-6 xl:px-8 pt-10 pb-16">
                  <Markdown markdown={note.Body} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default index;

export async function getStaticPaths() {
  const data = await client.query({ query: GET_CHAPTERS_PATHS });
  const chapters = await data.data.chapters;
  const paths = chapters.map((chapter) => ({
    params: { subject: chapter.Subject.Slug, chapter: chapter.Slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let note;
  const slug = params.chapter;
  const noteSlug = "introduction-" + slug;
  const URL =
    process.env.APP_URL + "/notes/" + params.subject + "/" + params.chapter;
  const data = await client.query({
    query: GET_CHAPTER,
    variables: { slug: slug, note: noteSlug },
  });
  const chapter = data.data.chapters[0];
  if (Object.entries(data.data.notes).length === 0) {
    note = [];
  } else {
    note = data.data.notes[0];
  }
  return {
    props: { chapter, note, URL },
  };
}
