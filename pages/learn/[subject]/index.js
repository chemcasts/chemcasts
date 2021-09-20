import client from "apolloClient";
import GET_SUBJECT_STATE from "@/query/subjectState";
import GET_SUBJECTS_PATHS from "@/query/subjectsPaths";
import Seo from "@/comp/Seo";
import { useRouter } from "next/router";
import NumberFormatter from "@/help/NumberFormatter";
import Link from "next/link";

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
      <header className="text-white bg-gray-900">
        <div className="flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h1 className="mb-5 text-3xl font-white tracking-tighter md:text-5xl title-font">
              {subject.Name}
            </h1>
            <p className="mb-8 text-x leading-relaxed text-left">
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
          <div className="w-full lg:w-1/2 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded-lg "
              alt={subject.Image.alternativeText}
              src={subject.Image.url}
            />
          </div>
        </div>
      </header>
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
  const URL = process.env.APP_URL + "/learn/" + slug;
  const data = await client.query({
    query: GET_SUBJECT_STATE,
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
