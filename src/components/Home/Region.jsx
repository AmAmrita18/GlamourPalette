import React from "react";
import bgwhite2 from "/BG2.png";
import region1 from "../../assets/makeup.jpg";
import region2 from "../../assets/background15.jpg";
import region3 from "../../assets/bride3.jpg";

const Region = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${bgwhite2}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="w-[80%] h-full mx-auto max-w-[1200px] md:py-32 py-12 flex flex-col items-center gap-y-12">
        <h1 className="lg:text-[60px] uppercase md:text-[50px] text-[45px] text-center leading-[69.12px] tracking-widest text-black">
          Styled by Region
        </h1>
        <div className="flex md:flex-row flex-col lg:gap-12 md:gap-3 gap-8">
          <div className="relative shadow-2xl rounded-t-full transition-all duration-700 ease-in-out  hover:scale-95  ">
            <img
              src={region1}
              alt=""
              className="brightness-50 object-cover rounded-t-full w-[350px] md:h-[550px] h-[450px]"
            />
            <div className="lg:px-8 pl-3 absolute bottom-0 mb-4">
              <h1 className="text-white lg:text-[38px] text-[25px] leading-[46.08px] tracking-widest">
                Glam & Beauty
              </h1>
              <h2 className="text-white text-[15px] leading-[23.04px] tracking-widest">
                86 Glamour Services
              </h2>
            </div>
          </div>

          <div className="relative shadow-2xl rounded-t-full transition-all duration-700 ease-in-out  hover:scale-95  ">
            <img
              src={region2}
              alt=""
              className="brightness-50 object-cover rounded-t-full w-[350px] md:h-[550px] h-[450px]"
            />
            <div className="lg:px-8 pl-3 absolute bottom-0 mb-4">
              <h1 className="text-white lg:text-[38px] text-[25px] leading-[46.08px] tracking-widest">
                Cut & Curls
              </h1>
              <h2 className="text-white text-[15px] leading-[23.04px] tracking-widest">
                54 Hairstyling Services
              </h2>
            </div>
          </div>

          <div className="relative shadow-2xl rounded-t-full transition-all duration-700 ease-in-out  hover:scale-95  ">
            <img
              src={region3}
              alt=""
              className="brightness-50 object-cover  rounded-t-full w-[350px] md:h-[550px] h-[450px]"
            />
            <div className="lg:px-8 pl-3 absolute bottom-0 mb-4">
              <h1 className="text-white lg:text-[38px] text-[25px] leading-[46.08px] tracking-widest">
                Bridal Grace
              </h1>
              <h2 className="text-white text-[15px] leading-[23.04px] tracking-widest">
                97 Bridal Packages
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Region;
