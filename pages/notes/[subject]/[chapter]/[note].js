import Drawer from "@/comp/Notes/Drawer";
import Markdown from "@/comp/Markdown";
import client from "apolloClient";
import GET_NOTE from "@/query/note";
import GET_NOTES_PATHS from "@/query/notesPaths";
import Router from "next/router";

const Note = ({ note, subject, chapter }) => {
  return (
    <>
      <div className="w-full max-w-8xl mx-auto">
        <div className="container lg:flex">
          <Drawer
            links={note.Chapter.Notes}
            base={"/notes/" + subject + "/" + chapter}
          />
          <div
            id="content-wrapper"
            className="min-w-0 z-90 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible"
          >
            <div className="px-4 prose lg:prose-lg xl:prose-xl sm:px-6 xl:px-8 pt-10 pb-16">
              <Markdown markdown={note.Body} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;

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

  return { paths, fallback: false };
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
  const note = data.data.notes[0];
  return {
    props: { note, subject: params.subject, chapter: params.chapter },
  };
}
