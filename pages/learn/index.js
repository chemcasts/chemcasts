import Newslater from "@/comp/Newslater";
import client from "apolloClient";
import GET_SUBJECTS from "@/query/subjects";
import Seo from "@/comp/Seo";
import Subject from "@/comp/Notes/Subject";

const index = ({ subjects, URL }) => {
  return (
    <>
      <Seo
        title="Subjects"
        description="Chemical Engg. Subjects"
        twTitle="Chemical Engg. Subjects"
        twDescription=""
        ogTitle="Chemical Engg. Subjects"
        ogDescription=""
        ogUrl={URL}
      />
      <header className="text-white bg-gray-900">
        <div className="flex pt-10 flex-col items-start px-5 py-3 mx-auto md:flex-row lg:px-28">
          <h1 className="text-5xl font-content font-white tracking-wide md:text-7xl title-font">
            {" "}
            Learn{" "}
          </h1>
        </div>
        <div className="flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
          <div className="flex w-full flex-col items-start mb-16 lg:flex-grow lg:pr-24">
            <h2 className="mb-5 text-3xl font-white tracking-tighter md:text-5xl title-font">
              {" "}
              Read, Solve, Explore{" "}
            </h2>
          </div>
        </div>
      </header>
      <div className="bg-gray-500">
        {subjects.map((subject) => (
          <Subject key={subject.id} subject={subject} />
        ))}
      </div>
      <Newslater />
    </>
  );
};

export default index;

export async function getStaticProps(context) {
  const URL = process.env.APP_URL + "/notes";
  const data = await client.query({ query: GET_SUBJECTS });
  const subjects = await data.data.subjects;

  return {
    props: { subjects, URL },
    revalidate: 120,
  };
}
