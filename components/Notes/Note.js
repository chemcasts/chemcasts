import Markdown from "@/comp/Markdown";
import Link from "next/link";

const Note = ({ note, subject, chapter }) => {
  return (
    <>
      <div
        id="content-wrapper"
        className="min-w-0 z-90 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible"
      >
        <div className="px-4 sm:px-6 xl:px-8 pt-2 pb-2">
          <nav className="mt-3 mb-3">
            <ol className="flex leading-none text-brand font-bold divide-x divide-brand-400">
              <li>
                <Link href={"/notes/" + subject.Slug}>
                  <a className="pr-2">{subject.Name}</a>
                </Link>
              </li>
              <li>
                <Link href={"/notes/" + subject.Slug + "/" + chapter.Slug}>
                  <a className="px-2">{chapter.Name}</a>
                </Link>
              </li>
              <li className="px-2 text-brand font-semibold">{note.Name}</li>
            </ol>
          </nav>
          <div className="prose prose-brand lg:prose-lg xl:prose-xl">
            <Markdown markdown={note.Body} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
