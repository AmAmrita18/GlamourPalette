import React from "react";
import infoBG from "/footerBG.png";
import propertyPeople from "/backgroundinfoabout2.jpg";
const AboutInfo2 = () => {
  return (
    <div
      className="w-full bg-[#937D64AD]"
      
    >
      <div className="md:pt-24 pt-16 flex md:flex-row-reverse flex-col md:p-0 p-10">
      <div
          className="md:w-[50%] w-full md:h-[750px] h-[500px] brightness-50  rounded-tl-[54px]"
          style={{
            backgroundImage: `url('${propertyPeople}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundPosition:"center"
          }}
        >
        </div>

        <div className="md:w-[50%] w-full lg:pt-44 md:pb-44 pb-24 h-full mx-auto max-w-[1200px] flex flex-col gap-8 md:pr-12 pr-10 pl-10 lg:pl-32 md:pl-20">
          <h1 className="md:text-[50px] md:mt-0 mt-5 text-[40px] text-black leading-[57.6px] tracking-[-1.26px]">
          Personalized and Curated Beauty Experience          </h1>
          <p className="text-[20px] text-black leading-[28px] tracking-[-0.5px]">
          Whether you're seeking a glamorous makeover, a rejuvenating skincare session, or a stunning bridal look, our expert team is committed to crafting a beauty experience that fulfills your every desire.
          </p>
          <p className="text-[20px] text-black leading-[28px] tracking-[-0.5px]"> With our in-depth expertise and tailored approach, we accompany you throughout the process, ensuring a smooth and delightful journey to your beauty transformation.
          </p>
          <button className="bg-[#251408] transition-all duration-700 ease-in-out  hover:scale-95  w-[200px] text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-6 rounded-tr-xl">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo2;
