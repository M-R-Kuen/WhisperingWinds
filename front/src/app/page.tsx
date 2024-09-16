import Image from "next/image";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col  w-screen ">
      <div
        className="bg-cover bg-center absolute inset-0   "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1643494555111-df0141d84a62?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 overflow-hidden w-full bg-black opacity-30"></div>
      </div>
      <div className="relative z-20 flex flex-col justify-evenly w-full md:mt-[10%] ">
        <div className="flex flex-col items-center justify-center text-white p-8 overflow-hidden lg:flex-row md:items-center md:text-left md:w-full 2xl:w-3/4 2xl:mx-auto ">
          {" "}
          <div className="flex flex-col items-center lg:items-start md:w-1/2">
            <Image
              src="/images/Whispering Winds-Logotypewhite.png"
              width={256}
              height={256}
              alt="logo"
              className="mx-auto mb-4 lg:ml-0"
              data-parallax-offset="10"
            />
            <h1
              className="text-4xl text-center mt-0 w-3/4 sfHeavy z-50 hover-mustard lg:text-left md:text-5xl lg:text-8xl 2xl:text-9xl"
              data-parallax-offset="5"
            >
              Empowering adventurous souls.
            </h1>
            <h3 className="sfThin text-2xl md:text-4xl  2xl:text-6xl">
              Coming Soon.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
