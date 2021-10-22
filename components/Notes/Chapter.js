import Link from "next/link";

const Chapter = ({ chapter, subjectSlug }) => {
  return (
    <>
      <section id={chapter.id} className="text-blueGray-700 py-5">
        <div className="rounded-lg bg-white lg:w-2/3 md:w-4/5 w-11/12 shadow-xl flex flex-col items-center px-5 py-3 mx-auto">
          <Link href={"/learn/" + subjectSlug + "/notes/" + chapter.Slug}>
            <a className="w-full">
              <div className="flex flex-col w-full mb-2 text-left ">
                <div className="w-full">
                  <h1 className="mx-auto w-full mb-3 text-left text-2xl font-semibold leading-none text-black lg:text-3xl title-font">
                    {chapter.Name}
                  </h1>
                  <p className="mx-auto w-full line-clamp-3 text-left text-base font-medium leading-relaxed text-blueGray-700 ">
                    {chapter.Description}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Chapter;
