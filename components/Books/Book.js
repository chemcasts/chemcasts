import Link from "next/link";

const Book = ({ book }) => {
  return (
    <>
      <section id={book.id} className="pt-5 pb-5 mx-2 lg:mx-10">
        <div className="container rounded bg-gray-100 flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-16">
          <div className="w-full mb-6 lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt={book.Cover.alternativeText}
              loading="lazy"
              src={book.Cover.url}
            />
          </div>
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-left text-black">
              {book.Name}
            </h1>
            <h2 className="mb-5 text-xl md:text-2xl lg:text-3xl text-left text-gray-900">
              Authors: {book.Authors}
            </h2>
            <h3 className="mb-8 text-lg font-bold tracking-tighter text-left text-gray-800">
              Edition/Volume: {book.Edition}
            </h3>
            <p className="line-clamp-3 lg:line-clamp-5 text-base leading-relaxed text-left">
              {book.Description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
