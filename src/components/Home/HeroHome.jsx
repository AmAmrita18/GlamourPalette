import React from "react";
import heroImage from "/img3.jpg";
import Header from "../Header";
const HeroHome = () => {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url('${heroImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-[#32210DB2]">
        <Header transparent={false} />
        <div className="w-[80%] h-full mx-auto max-w-[1200px]  md:pt-36 md:pb-56 pt-20 pb-32 flex flex-col gap-12 justify-center items-center">
          <div className="text-center">
            <h1 className="text-white text-[23px] pb-4 leading-[26.5px] tracking-widest ">
              Unveil the Beauty Within
            </h1>
            <h1 className="text-white lg:text-[60px] md:text-[50px] text-[45px] leading-[69.12px] tracking-widest ">
              GLAMOUR PALETTE
            </h1>
          </div>
          <p className="text-white text-[20px] leading-[35px] lg:w-[65%] md:w-[60%] lg:px-14 text-center">
            Discover the essence of timeless beauty at Glamour Palette. We're
            here to make your beauty dreams a reality. Step into our sanctuary
            of elegance and let us unveil the true radiance within you.
          </p>
          <button className="border transition-all duration-700 ease-in-out  hover:scale-95 border-[#937D64]">
            <h1 className="text-white text-[17px] leading-[19.58px] px-14 py-3">
              EXPLORE MORE 
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
