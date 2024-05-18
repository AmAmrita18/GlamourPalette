import React from "react";
import office1 from "/off1.jpg";
import office2 from "/off2.jpg";
import office3 from "/off3.jpg";
const OurOffice = () => {
  return (
    <div className="w-full bg-[#937D64AD]"
    >
      <div className="w-[80%] h-full mx-auto max-w-[1200px] flex flex-col items-center justify-center gap-6">
        <h1 className="text-black md:text-[50px] text-[40px] mt-5 leading-[57.6px] text-current tracking-[-1.26px] md:py-16">
          OUR PARLOUR
        </h1>
        <p className="text-black text-[18px] text-center leading-[20.74px] text-current tracking-widest">
        Nestled in the heart of Bangalore's vibrant Cunningham Road, Glamour Palette's headquarters exude style and accessibility. 
        </p>
        <p className="text-black text-[18px] text-center leading-[20.74px] text-current tracking-widest">
        Located in the prestigious Vasant Nagar neighborhood, our office offers seamless connectivity and convenience. 
        </p>
        <p className="text-black text-[18px] text-center leading-[20.74px] text-current tracking-widest">
        Just moments away from the city's bustling thoroughfares, Glamour Palette's central location ensures easy access for all beauty enthusiasts in Bangalore, India.
        </p>
        <div className="w-full flex flex-col md:gap-8 gap-4 md:pt-16 pt-4 md:pb-28 pb-20">
         <div className="relative rounded-tr-[60px]">

            <img src={office1} alt="" className="shadow-2xl object-cover h-[400px] w-full rounded-tr-[60px]"/>
            <div className="absolute rounded-tr-[60px] top-0  w-full h-full bg-[#32210D66] "></div>
         </div>
         <div className="grid grid-cols-2 md:gap-x-8 gap-x-4">
            <div className="relative rounded-bl-[60px] ">
                <img src={office2} alt="" className="shadow-2xl object-cover h-[400px] w-full rounded-bl-[60px]"/>
                <div className="absolute rounded-bl-[60px]  top-0  w-full h-full bg-[#32210D66] "></div>
            </div>
            <div className="relative rounded-br-[60px] ">
            <img src={office3} alt="" className="shadow-2xl object-cover h-[400px] w-full rounded-br-[60px]"/>
            <div className="absolute rounded-br-[60px]  top-0  w-full h-full bg-[#32210D66] "></div>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffice;
