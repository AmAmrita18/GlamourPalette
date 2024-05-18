import React from "react";
import infoImage from "/Glamour.jpg";
const Info = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${infoImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition:"center"
      }}
    >
      <div className="bg-[#1D1307BA] ">
        <div className="w-[80%] h-full mx-auto max-w-[1200px] md:py-56 py-12 flex flex-col gap-y-12">
          <h1 className="md:text-[60px] text-[45px] leading-[69.12px] tracking-widest text-white">
          GLAMOUR PALETTE
          </h1>
          <p className="text-[26px] lg:w-[55%] leading-[29.95px] tracking-widest text-white">
          Whether pampering or seeking beauty services, Glamour Palette adds a unique flair to its offerings. We immerse ourselves in every client's vision, delivering top-notch services in premium locations. From styling to skincare, Glamour Palette enhances your beauty experience with unmatched expertise.
          </p>
          <div className="flex flex-row gap-4">
            <button className="border transition-all duration-700 ease-in-out  hover:scale-95 border-[#937D64]">
              <h1 className="text-white md:text-[17px] text-[14px] leading-[19.58px] md:px-8 px-2 py-3">
              EXPERIENCE GLAMOUR PALETTE
              </h1>
            </button>
            <button className="border transition-all duration-700 ease-in-out  hover:scale-95 bg-white">
              <h1 className="text-[#1D1010] md:text-[17px] text-[14px] leading-[19.58px] md:px-8 px-2 py-3">
               BOOK APPOINTMENT
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
