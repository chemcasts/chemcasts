import Link from "next/link";
import NumberFormatter from "@/help/NumberFormatter";
import Image from "next/image";

const Subject = ({ subject }) => {
  var notes = 0;
  var examples = 0;
  var books = 0;
  if (Object.entries(subject.Chapters).length != 0) {
    subject.Chapters.map((Chapter) => {
      Chapter.Examples.map((Example) => {
        examples++;
      });
      Chapter.Notes.map((Note) => {
        notes++;
      });
    });
  }
  if (Object.entries(subject.Books).length != 0) {
    subject.Books.map((Book) => {
      books++;
    });
  }
  const notesCount = NumberFormatter(notes);
  const examplesCount = NumberFormatter(examples);
  const booksCount = NumberFormatter(books);

  return (
    <>
      <section id={subject.id} className="pt-2 pb-2 mx-2 lg:mx-10">
        <div className="container rounded bg-gray-300 flex flex-col px-5 py-4 mx-auto lg:items-center md:flex-row lg:px-16">
          <div className="w-full mb-6 lg:w-1/3 lg:max-w-lg md:w-1/2">
            <Image
              className="rounded"
              alt={subject.Name}
              loading="lazy"
              layout="responsive"
              height={600}
              width={720}
              src={subject.Image.url}
            />
          </div>
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <h1 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold text-left title-font">
              {subject.Name}
            </h1>
            <p className="mb-8 line-clamp-3 lg:line-clamp-5 text-base leading-relaxed text-left  ">
              {subject.Description}
            </p>
            <div className="flex flex-wrap items-center w-full">
              <div className="items-center text-center my-2 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
                <div className="mr-1 bg-cyan-500 rounded">
                  <div className="place-items-center">
                    <div className="text-3xl text-white font-bold">
                      {notesCount}
                    </div>
                    <div className="text-gray-200">Notes</div>
                  </div>
                </div>
                <div className="mr-1 mt-1 items-center text-center justify-center justify-items-center bg-cyan-500 rounded">
                  <Link href={"/learn/" + subject.Slug + "/notes"}>
                    <a className="hover:opacity-70">
                      <div className="text-white py-1 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 m-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="items-center text-center my-2 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
                <div className="mr-1 bg-indigo-500 rounded">
                  <div className="place-items-center">
                    <div className="text-3xl text-white font-bold">
                      {examplesCount}
                    </div>
                    <div className="text-gray-200">Examples</div>
                  </div>
                </div>
                <div className="mr-1 mt-1 items-center text-center justify-center justify-items-center bg-indigo-500 rounded">
                  <Link href={"/learn/" + subject.Slug + "/examples"}>
                    <a className="hover:opacity-70">
                      <div className="text-white py-1 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 m-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="items-center text-center my-2 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
                <div className="mr-1 bg-yellow-500 rounded">
                  <div className="place-items-center">
                    <div className="text-3xl text-white font-bold">
                      {booksCount}
                    </div>
                    <div className="text-gray-200">Books</div>
                  </div>
                </div>
                <div className="mr-1 mt-1 items-center text-center justify-center justify-items-center bg-yellow-500 rounded">
                  <Link href={"/learn/" + subject.Slug + "/books"}>
                    <a className="hover:opacity-70">
                      <div className="text-white py-1 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 m-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subject;
