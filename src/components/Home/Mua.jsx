import React from "react";
import bgWhite from "/BG1.png";
import architect from "../../assets/mua.jpg";

const Mua = () => {
  return (
    <div className="w-full bg-[#937D64AD] ">
      <div className="relative w-[80%] h-full mx-auto max-w-[1200px] flex md:flex-row flex-col-reverse gap-20">
        <div className="md:w-[55%] md:pt-28 md:pb-28 pb-12 lg:pl-10  flex flex-col lg:gap-12 gap-6">
          <h1 className="text-[32px] text-[#1E1E1E] leading-[36.86px] tracking-widest">
            MEET AISHA, THE VISIONARY BEHIND GLAMOUR PALETTE
          </h1>
          <p className="text-[21px] leading-[33px] text-[#1E1E1E]">
            Aisha is the driving force in the beauty industry, orchestrating
            experiences that resonate with stories and charm. Through Glamour
            Palette, Aisha introduces services that transcend mere beauty
            treatments – they are moments waiting to be cherished. Each service
            curated by Glamour Palette reflects Aisha's commitment to
            authenticity and excellence.
          </p>
          <p className="text-[21px] leading-[33px] text-[#1E1E1E]">
            Step into the realm of Glamour Palette, where beauty services are
            not just routines, but pathways to exploration and intimacy.
          </p>
        </div>

        <div className="md:w-[45%] md:pt-28 pt-12 md:absolute md:right-0 lg:pl-20 md:pl-4 pl-0">
          <img
            src={architect}
            width={445}
            height={651}
            className="w-[440px] lg:h-[651px] h-[450px]  object-cover transition-all duration-700 ease-in-out  hover:scale-95   rounded-t-full brightness-50"
            alt=""
          />
        </div>
      </div>

      <div
        className="w-full lg:block hidden h-60"
        style={{
          backgroundImage: `url('${bgWhite}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      ></div>
    </div>
  );
};

export default Mua;
