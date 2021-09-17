import Drawer from "@/comp/Notes/Drawer";
import client from "apolloClient";
import GET_NOTE from "@/query/note";
import GET_NOTES_PATHS from "@/query/notesPaths";
import { useRouter } from "next/router";
import Note from "@/comp/Notes/Note";

const NotePage = ({ note }) => {
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
      <div className="w-full max-w-8xl mx-auto">
        <div className="container lg:flex">
          <Drawer
            links={note.Chapter.Notes}
            activeLink={note.Slug}
            base={
              "/notes/" + note.Chapter.Subject.Slug + "/" + note.Chapter.Slug
            }
          />
          <Note
            note={note}
            subject={{
              Name: note.Chapter.Subject.Name,
              Slug: note.Chapter.Subject.Slug,
            }}
            chapter={{ Name: note.Chapter.Name, Slug: note.Chapter.Slug }}
          />
        </div>
      </div>
    </>
  );
};

export default NotePage;

export async function getStaticPaths() {
  const data = await client.query({ query: GET_NOTES_PATHS });
  const notes = await data.data.notes;
  const paths = notes.map((note) => ({
    params: {
      subject: note.Chapter.Subject.Slug,
      chapter: note.Chapter.Slug,
      note: note.Slug,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const slug = params.note;
  const URL =
    process.env.APP_URL +
    "/notes/" +
    params.subject +
    "/" +
    params.chapter +
    "/" +
    params.note;
  const data = await client.query({
    query: GET_NOTE,
    variables: { slug: slug },
  });

  if (Object.entries(data.data.notes).length === 0) {
    return {
      notFound: true,
    };
  }

  const note = data.data.notes[0];
  return {
    props: { note },
    revalidate: 10,
  };
}
