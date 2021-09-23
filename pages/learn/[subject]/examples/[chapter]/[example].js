import client from "apolloClient";
import GET_EXAMPLE from "@/query/example";
import GET_EXAMPLES_PATHS from "@/query/examplesPaths";
import { useRouter } from "next/router";
import Seo from "@/comp/Seo";
import Markdown from "@/comp/Markdown";

const ExamplePage = ({ example, URL }) => {
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
        title={example.Chapter.Name + "::"}
        description={example.Chapter.Description}
        twTitle={example.Chapter.Name + "::"}
        twDescription={example.Chapter.Description}
        ogTitle={example.Chapter.Name + "::"}
        ogDescription={example.Chapter.Description}
        ogUrl={URL}
      />
      <header className="text-white bg-gray-900">
        <div className="flex flex-col items-center px-5 py-5 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 className="mb-3 rounded px-2 bg-indigo-100 text-2xl font-white tracking-wider text-indigo-500 md:text-4xl title-font">
              Examples
            </h2>
            <h1 className="mb-5 text-3xl font-white tracking-tighter md:text-5xl title-font">
              {example.Chapter.Name}
            </h1>
            <p className="mb-2 text-x leading-relaxed text-left">
              {example.Chapter.Description}
            </p>
          </div>
        </div>
      </header>
      <div className="w-full lg:px-28 bg-gray-500 max-w-8xl">
        <div className="rounded px-2 py-3">
          <span className="text-indigo-500 font-bold text-3xl px-1 rounded rounded-b-none bg-indigo-100">
            Problem
          </span>
          <span className="text-indigo-500 ml-3 px-1 text-3xl rounded rounded-b-none bg-indigo-100 font-bold">
            Level:{example.Level}{" "}
          </span>
          <div className="prose px-2 py-3 lg:prose-lg bg-gray-50 rounded rounded-tl-none">
            <Markdown markdown={example.Problem} />
          </div>
        </div>
        <div className="rounded px-2 py-2">
          <span className="text-indigo-500 font-bold text-3xl px-1 rounded rounded-b-none bg-indigo-100">
            Solution
          </span>
          <div className="bg-white px-2 py-3 rounded rounded-tl-none prose lg:prose-lg">
            <Markdown markdown={example.Solution} />
          </div>
        </div>
      </div>
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
  const slug = params.example;
  const URL =
    process.env.APP_URL +
    "/learn/" +
    params.subject +
    "/examples/" +
    params.chapter +
    "/" +
    params.example;
  const data = await client.query({
    query: GET_EXAMPLE,
    variables: { slug: slug },
  });

  if (Object.entries(data.data.examples).length === 0) {
    return {
      notFound: true,
    };
  }

  const example = data.data.examples[0];

  return {
    props: { example, URL },
    revalidate: 120,
  };
}
