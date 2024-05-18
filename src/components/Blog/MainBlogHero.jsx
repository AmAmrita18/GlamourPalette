import React from 'react'
import heroImage from "/girl1.jpg";
import Header from "../Header";
const MainBlogHero = () => {
  return (
    <div
    className="w-full h-full"
    style={{
      backgroundImage: `url('${heroImage}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      objectFit: "cover",
      backgroundPosition:"center",
    }}
  >
     <div className="w-full bg-[#32210DB2]">
      <Header transparent={true} />
      <div className="w-[80%] h-full mx-auto max-w-[1200px]  md:pt-36 md:pb-56 pt-20 pb-32 flex flex-col gap-6 justify-start items-start">
        <div className='bg-[#FFFFFF26] rounded-xl'><h1 className='px-6 py-3 text-white text-[10px] leading-[11.52px] text-center'>BEAUTY SPOTLIGHT</h1></div>
        <h1 className="md:text-[36px] text-[25px]   text-white md:leading-[41px]">
        Unveiling the Charm of Bangalore Beauty: <br />
Exploring Exclusive Services
        </h1>
        <p className="text-[#E5E5E5] text-start text-[14px] leading-[20px] md:w-[50%] tracking-[-0.5px]">
        Ready to elevate your beauty experience? The Glamour Palette team is here to accompany you through every beauty transformation. Reach out today and let's embark on your journey to radiant confidence.
        </p>
        <p className="text-white text-start text-[12px] leading-[20px] md:w-[50%] tracking-[-0.5px]">
        By Glamour Palette
        </p>
      </div>
      </div>
  </div>
  )
}

export default MainBlogHero