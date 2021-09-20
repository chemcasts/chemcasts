import Link from "next/link";

const Chapter = ({ chapter, subjectSlug }) => {
  return (
    <>
      <section id={chapter.id} className="text-blueGray-700 py-5">
        <div className="container rounded-lg bg-white lg:w-2/3 shadow-xl flex flex-col items-center px-5 py-6 mx-auto">
          <Link href={"/learn/" + subjectSlug + "/notes/" + chapter.Slug}>
            <a>
              <div className="flex flex-col w-full mb-6 text-left ">
                <div className="w-full mx-auto">
                  <h1 className="mx-auto mb-3 text-left text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                    {chapter.Name}
                  </h1>
                  <p className="mx-auto line-clamp-3 text-left text-base font-medium leading-relaxed text-blueGray-700 ">
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
