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
          <nav className="text-brand items-center overflow-x-auto font-bold my-8">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href={"/learn/" + subject.Slug + "/notes"}>
                  <a className="pr-2">{subject.Name}</a>
                </Link>
                <svg
                  className="fill-current w-3 h-3 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li className="flex items-center">
                <Link
                  href={"/learn/" + subject.Slug + "/notes/" + chapter.Slug}
                >
                  <a className="px-2">{chapter.Name}</a>
                </Link>
                <svg
                  className="fill-current w-3 h-3 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li className="text-brand-400">{note.Name}</li>
            </ol>
          </nav>

          <div className="prose prose-blockquote:border-brand lg:prose-lg xl:prose-xl">
            <Markdown markdown={note.Body} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
