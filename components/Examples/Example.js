import Link from "next/link";

const Example = ({ example, chapterSlug, subjectSlug }) => {
  return (
    <>
      <section
        id={example.id}
        className="text-blueGray-700 bg-gray-500 py-5 px-3"
      >
        <div className="rounded-lg bg-white w-full lg:w-5/6 shadow-xl flex flex-col items-center px-5 py-6 mx-auto">
          <Link
            href={
              "/learn/" +
              subjectSlug +
              "/examples/" +
              chapterSlug +
              "/" +
              example.Slug
            }
          >
            <a className="w-full">
              <div className="flex flex-col w-full mb-6 text-left ">
                <p className="w-full text-blueGray-700">
                  <span className="text-indigo-500 px-1 rounded bg-indigo-100 font-bold">
                   Level:{example.Level}{" "}
                  </span>
                  {example.Problem}
                </p>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Example;
