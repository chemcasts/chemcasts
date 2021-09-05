import Drawer from "@/comp/Notes/Drawer";
import Markdown from "@/comp/Markdown";
import client from "apolloClient";
import GET_CHAPTER from "@/query/chapter";
import GET_CHAPTERS_PATHS from "@/query/chaptersPaths";

const index = ({ chapter, URL }) => {
  return (
    <>
      <div class="w-full max-w-8xl mx-auto">
        <div class="container lg:flex">
          <Drawer links={chapter.Notes} base={"/notes/"+chapter.Subject.Slug+"/"+chapter.Slug} />
          <div
            id="content-wrapper"
            class="min-w-0 z-90 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible"
          >
            <div class="px-4 sm:px-6 xl:px-8 pt-10 pb-16">
              <Markdown markdown={"# Chapter"} />
            </div>
          </div>
        </div>
      </div>
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

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const slug = params.chapter;
  const URL = process.env.APP_URL + "/notes/" + params.subject + "/" + params.chapter;
  const data = await client.query({
    query: GET_CHAPTER,
    variables: { slug: slug },
  });
  const chapter = data.data.chapters[0];

  return {
    props: { chapter, URL },
  };
}
