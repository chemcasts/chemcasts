const data = { newslater: 0 };

const Newslater = () => {
  if (data.newslater == 0) {
    return <></>;
  }
  return (
    <>
      <div className="justify-center border-t-4 p-8 shadow relative md:col-span-6 col-span-12 text-gray-500 bg-white">
        <div className="w-2/3">
          <h3 className="font-bold text-4xl text-brand mb-2">Newsletter</h3>
          <p className="mb-10 text-lg text-black">
            Join 33,000+ others and never miss out on new tips, tutorials,
            and&nbsp;more.
          </p>
        </div>
        <form className="flex flex-wrap md:flex-nowrap">
          <input
            autoComplete="Email"
            aria-label="Email"
            className="form-input font-bold px-3 h-12 w-full rounded"
            id="fieldEmail"
            maxLength="50"
            name="cm-owwr-owwr"
            required=""
            type="email"
            placeholder="Your email address"
          />
          <button className="bg-brand rounded hover:bg-gray-800 h-12 w-full md:w-1/3">
            <span className="text-xl text-white"> Subscribe </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Newslater;
