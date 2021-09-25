import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <>
      <header className="text-white bg-black">
        <div className="flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h1 className="mb-5 text-3xl font-white tracking-tighter md:text-5xl title-font">
              Legal
            </h1>
            <p className="mb-8 text-x leading-relaxed text-left">
              By accessing and using this website you agree with our Privacy
              Policy, Terms of Service and Terms of Use. Please read it
              carefully ...
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:max-w-lg md:w-1/2">
            <Image
              className="object-cover object-center rounded-lg "
              alt="Privacy Proctection - Chemcasts"
              loading="lazy"
              layout="responsive"
              height={600}
              width={720}
              src="/png/privacy-protection.png"
            />
          </div>
        </div>
      </header>
      <div className="pt-10 pb-10 lg:px-16 md:px-10 px-5 bg-gray-500">
        <section className="text-blueGray-700 rounded bg-white">
          <div className="flex flex-col px-5 py-24 mx-auto lg:items-center">
            <div className="flex flex-col w-full mb-12 text-left lg:text-center">
              <Link href="/legal/privacy-policy">
                <button className="px-16 py-2 my-2 text-xl font-bold transition duration-500 ease-in-out transform text-brand-500 bg-brand-50 rounded hover:bg-brand-200 focus:shadow-outline focus:outline-none">
                  <h1 className="text-2xl font-semibold tracking-tighter sm:text-5xl title-font">
                    {" "}
                    Privacy Policy{" "}
                  </h1>
                </button>
              </Link>
            </div>
            <div className="flex flex-col w-full mb-12 text-left lg:text-center">
              <Link href="/legal/terms-of-service">
                <button className="px-16 py-2 my-2 text-xl font-bold transition duration-500 ease-in-out transform text-brand-500 bg-brand-50 rounded hover:bg-brand-200 focus:shadow-outline focus:outline-none">
                  <h1 className="text-2xl font-semibold tracking-tighter sm:text-5xl title-font">
                    {" "}
                    Terms Of Service{" "}
                  </h1>
                </button>
              </Link>
            </div>
            <div className="flex flex-col w-full mb-12 text-left lg:text-center">
              <Link href="/legal/terms-of-use">
                <button className="px-16 py-2 my-2 text-xl font-bold transition duration-500 ease-in-out transform text-brand-500 bg-brand-50 rounded hover:bg-brand-200 focus:shadow-outline focus:outline-none">
                  <h1 className="text-2xl font-semibold tracking-tighter sm:text-5xl title-font">
                    {" "}
                    Terms Of Use{" "}
                  </h1>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
