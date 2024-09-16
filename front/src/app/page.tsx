import Image from "next/image";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      {/* Background with scaling animation */}
      <div className="bg-landing-bg bg-cover bg-center absolute inset-0 animate-scaleImage">
        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 overflow-hidden w-full bg-black opacity-50"></div>
      </div>

      {/* Content over the background */}
      <div className="relative z-20 flex flex-col justify-evenly w-full md:mt-[5%]">
        <div className="flex flex-col items-center justify-center text-white p-8 overflow-hidden lg:flex-row md:items-center md:w-full 2xl:w-3/4 2xl:mx-auto">
          <div className="flex flex-col items-center md:w-1/2">
            <Image
              src="/images/Whispering Winds-Logotypewhite.png"
              width={256}
              height={256}
              alt="logo"
              className="mx-auto mb-20 mt-10 md:mb-20 md:mt-0"
            />
            <h1 className="text-4xl text-center text-yellow-600 mt-0 mx-auto w-full gt uppercase md:text-8xl hover:scale-110">
              Empowering adventurous souls
            </h1>
            <h3 className="sfThin text-2xl md:text-4xl mt-10">
              Unveiling soon. Stay curious.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
