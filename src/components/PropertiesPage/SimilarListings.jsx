import React from "react";
import SimilarListingSlider from "./SimilarListingSlider";
import infoImage from "/woman1.jpg";


const SimilarListings = () => {
  return (
    <div className="w-full bg-[#937D64AD]" 
   ><div className="w-full h-full">
      <div className="w-[80%] h-full mx-auto max-w-[1200px] pt-28">
        <div className="w-[170px] h-1 bg-[#1E1E1E] rounded-md"></div>
        <h1 className="md:text-[50px] text-[40px] uppercase py-4 text-[#1E1E1E] leading-[57.6px] tracking-[-1.26px]">
          Similar Listings
        </h1>
        <SimilarListingSlider/>
      </div>
    </div>
    </div>
  );
};

export default SimilarListings;
