import React from "react";

function MainBody() {
  return (
    <div>
      <section className="bg-[#5CDB95]">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-green-200">
              Understand User Flow.
              <strong className="font-extrabold text-green-800 sm:block">
                Increase Conversion.
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-green-800 px-12 py-3 text-sm font-medium text-[#8EE4AF] shadow hover:bg-[#379683] hover:text-green-800 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm bg-[#8EE4AF] font-medium text-green-700 shadow hover:text-green-950 focus:outline-none focus:ring active:text-green-800 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainBody;
