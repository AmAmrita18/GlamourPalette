import React from "react";
import resultsHero from "/hero-home.jpg";
const Results = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${resultsHero}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full bg-[#1D1307BA]">
        <div className="w-[80%] h-full mx-auto max-w-[1200px] md:py-32 py-12 flex flex-col items-center gap-y-12">
          <h1 className="lg:text-[60px] md:trxt-[50px] text-[45px] text-center leading-[69.12px] tracking-widest text-white">
            PROVEN RESULTS
          </h1>
          <p className="text-[20px] leading-[23.04px] tracking-widest text-white text-center lg:px-44">
            Glamour Palette thrives on a legacy of undeniable results. Beyond
            numbers, our success is reflected in the satisfaction of our clients
            and the flawless services we've delivered. Trust Glamour Palette:
            where every appointment is a testament to our excellence.
          </p>
          <div className="flex md:flex-row flex-col lg:gap-24 md:gap-8 gap-4">
            <div>
              <h1 className="md:text-[60px] text-[45px] text-center leading-[69.12px] tracking-widest text-white">
                800+
              </h1>
              <h2 className="lg:text-[19px] text-[17px] text-center leading-[21.89px] tracking-widest text-white">
                SERVICES RENDERED
              </h2>
            </div>
            <div>
              <h1 className="md:text-[60px] text-[45px] text-center leading-[69.12px] tracking-widest text-white">
                1500+
              </h1>
              <h2 className="lg:text-[19px] text-[17px] text-center leading-[21.89px] tracking-widest text-white">
                SATISFIED CLIENTS
              </h2>
            </div>
            <div>
              <h1 className="md:text-[60px] text-[45px] text-center leading-[69.12px] tracking-widest text-white">
                97%
              </h1>
              <h2 className="lg:text-[19px] text-[17px] text-center leading-[21.89px] tracking-widest text-white">
                CUSTOMER SATISFACTION
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
