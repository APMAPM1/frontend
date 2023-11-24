import React from "react";

function MainBody() {
  return (
    <div className="font-sans">
      <section className="bg-[#7CE6B7]">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-[#19514F] font-sans">
              Welcome to Jan Suvidha Portal
              <strong className="font-medium text-[#ffffff] sm:block">
                One portal for all schemes
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-[#19514F] px-12 py-3 text-sm font-medium text-[#ffffff] shadow hover:bg-[#379683] hover:text-[#ffffff] focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm bg-[#ffffff] font-medium text-[#7CE6B7] shadow hover:text-green-950 focus:outline-none focus:ring active:text-green-800 sm:w-auto"
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
