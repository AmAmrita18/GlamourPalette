import React from "react";
import infoBG from "/footerBG.png";
import infoPeople from "/bg-bride3.png";
const AboutInfo = () => {
  return (
    <div
      className="w-full bg-[#937D64AD]"
     
    >
      <div className="md:pt-32 py-12 flex md:flex-row flex-col md:p-0 p-10">
        <div
          className="md:w-[50%] w-full md:h-[750px] h-[500px] brightness-50  rounded-tr-[54px]"
          style={{
            backgroundImage: `url('${infoPeople}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundPosition:"center"
          }}
        >
        </div>

        <div className="md:w-[50%] h-full mx-auto max-w-[1200px] flex flex-col gap-12 md:pl-12 lg:pr-32 md:pr-16 pb-24 md:px-10">
          <h1 className="md:text-[50px] text-[40px] text-black leading-[57.6px] tracking-[-1.26px]">
          Exploring Your Beauty Dreams in Bangalore
          </h1>
          <p className="text-[20px] text-black leading-[28px] tracking-[-0.5px]">
          Welcome to Glamour Palette, where your voyage to discover the ultimate beauty experience amidst the vibrant cityscape of Bangalore unfolds.
Embark on the journey of bridal bliss with Glamour Palette, where we specialize in transforming your dreams into reality on your special day. 
          </p>
          <p className="text-[20px] text-black leading-[28px] tracking-[-0.5px]">
          Nestled in the heart of South India's bustling metropolis, Bangalore offers a dynamic fusion of modernity, tradition, and charm. At Glamour Palette, we boast an intimate knowledge of Bangalore's diverse beauty landscape, and our dedication to assisting you in uncovering a haven where you can embrace your unique allure.
          </p>
          <button className="bg-[#251408] w-[200px] transition-all duration-700 ease-in-out  hover:scale-95  text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-6 rounded-tr-xl">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
