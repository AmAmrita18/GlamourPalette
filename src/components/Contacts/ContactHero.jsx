import React from "react";
import heroImageContact from "/bg-bride6.jpg";
import Header from "../Header";

const ContactHero = () => {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url('${heroImageContact}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition:"bottom"
      }}
    >
      <div className="w-full h-full bg-[#32210DB2]">
        <Header transparent={false} />
        <div className="w-[80%] h-full mx-auto max-w-[1200px]  md:pt-36 md:pb-56 pt-20 pb-32 flex flex-col gap-6 justify-center items-center">
          <h1 className="md:text-[60px] text-[45px] lg:px-52 text-center text-white md:leading-[80px] tracking-[-2.01px]">
          Begin Your Beauty Transformation with Glamour Palette
          </h1>
          <p className="text-white text-[20px] leading-[35px] lg:w-[50%] md:w-[70%] tracking-[-0.5px] text-center">
          Ready to elevate your beauty experience? Our team at Glamour Palette is here to accompany you through every step of your beauty journey. Reach out now and let's bring your beauty dreams to life.
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

export default ContactHero;
