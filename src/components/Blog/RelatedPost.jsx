import React from "react";
import blog1 from "../../assets/imgcard (2).jpg";
import blog2 from "../../assets/imgcard (1).jpg";
import blog3 from "../../assets/lipstic.jpg";
import blog4 from "../../assets/imgcard (3).jpg";
const RelatedPost = () => {
  return (
    <div className="bg-[#937D64AD] w-full">
      <div className="w-[80%] mx-auto max-w-[1200px] h-full py-24">
      <div className="w-[170px] h-1 bg-[#1E1E1E] rounded-md"></div>

      <h1 className="md:text-[50px] text-[40px] uppercase py-4 text-[#1E1E1E] leading-[57.6px] tracking-[-1.26px] mb-4">
          Related Posts
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-6">
          <div className="rounded-xl  flex  gap-y-4 transition-all duration-700 ease-in-out  hover:scale-95   flex-col shadow-2xl p-3 bg-[#efece899] cursor-pointer">
            <img src={blog1} alt="" className="rounted-t-xl object-cover w-full h-[230px]" />
            
            <h2 className="text-[12px] text-[#6C757D leading-[13px]">
              08.08.2021
            </h2>
            <h1 className="text-[18px] text-[#495057] leading-[25px]">
            Fragrance Fascination: Discovering the Power of Scent
            </h1>
            <p className="text-[12px] leading-[20px] text-[#6C757D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="rounded-xl  flex  gap-y-4 transition-all duration-700 ease-in-out  hover:scale-95   flex-col shadow-2xl p-3 bg-[#efece899] cursor-pointer">
            <img src={blog2} alt="" className="rounted-t-xl object-cover w-full h-[230px]" />
            <h2 className="text-[12px] text-[#6C757D leading-[13px]">
              08.08.2021
            </h2>
            <h1 className="text-[18px] text-[#495057] leading-[25px]">
            Glamour Galore: Red Carpet Beauty Breakdowns
            </h1>
            <p className="text-[12px] leading-[20px] text-[#6C757D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="rounded-xl  flex  gap-y-4 transition-all duration-700 ease-in-out  hover:scale-95   flex-col shadow-2xl p-3 bg-[#efece899] cursor-pointer">
            <img src={blog3} alt="" className="rounted-t-xl object-cover w-full h-[230px]" />
            <h2 className="text-[12px] text-[#6C757D leading-[13px]">
              08.08.2021
            </h2>
            <h1 className="text-[18px] text-[#495057] leading-[25px]">
            Lipstick Love: Exploring Shades, Formulas, and Application Tips
            </h1>
            <p className="text-[12px] leading-[20px] text-[#6C757D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="rounded-xl  flex  gap-y-4 transition-all duration-700 ease-in-out  hover:scale-95   flex-col shadow-2xl p-3 bg-[#efece899] cursor-pointer">
            <img src={blog4} alt="" className="rounted-t-xl object-cover w-full h-[230px]" />
            <h2 className="text-[12px] text-[#6C757D leading-[13px]">
              08.08.2021
            </h2>
            <h1 className="text-[18px] text-[#495057] leading-[25px]">
            The Science of Beauty: Understanding Formulations
            </h1>
            <p className="text-[12px] leading-[20px] text-[#6C757D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;
