import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full h-full  max-w-[1200px] py-12 flex md:flex-row flex-col  ">
        <div className="w-full md:rounded-l-3xl rounded-l-none md:rounded-tr-none rounded-t-3xl md:border-r-2 md:border-b-0 border-b-2 border-[#E4E4E4] bg-[#1E1E1E]">
          <button onClick={() => setIsOpen((prev) => !prev)} className="bg-[#1E1E1E] md:py-12 py-4 pl-8 pr-8  text-start md:rounded-l-3xl rounded-l-none md:rounded-tr-none rounded-t-3xl flex flex-row gap-4 items-center text-[17px] leading-[19.58px] tracking-[-0.43px] text-white">
            Looking For
            {!isOpen ? <RiArrowDropDownLine className="text-[28px] font-thin" /> : <RiArrowDropUpLine className="text-[28px] font-thin text-white" />}
          </button>
          {isOpen && (
            <ul className="bg-[#1E1E1E] shadow-2xl md:w-[19%] w-[80%]  absolute z-10 mt-4 flex flex-col rounded-3xl text-start">
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5 rounded-t-3xl w-full hover:bg-[#B2A797] ">Glamorous Makeover</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5  w-full hover:bg-[#B2A797] ">Skincare Treatment</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5  w-full hover:bg-[#B2A797] ">Hairstyling Session</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5 rounded-b-3xl w-full hover:bg-[#B2A797] ">Bridal Makeup</li>
            </ul>
          )}
        </div>
        <div className="w-full md:border-r-2 md:border-b-0 border-b-2 border-[#E4E4E4]  bg-[#1E1E1E]">
          <button onClick={() => setIsOpenTwo((prev) => !prev)} className="bg-[#1E1E1E] md:py-12 py-4 pl-8 pr-8 text-start flex flex-row gap-4 items-center text-[17px] leading-[19.58px] tracking-[-0.43px] text-white">
            Beauty Style
            {!isOpenTwo ? <RiArrowDropDownLine className="text-[28px] font-thin" /> : <RiArrowDropUpLine className="text-[28px] font-thin text-white" />}
          </button>
          {isOpenTwo && (
            <ul className="bg-[#1E1E1E] shadow-2xl md:w-[19%] w-[80%]  absolute z-10 mt-4 flex flex-col rounded-3xl text-start">
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5 rounded-t-3xl w-full hover:bg-[#B2A797] ">Classic</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5 w-full hover:bg-[#B2A797] ">Trendy</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5 w-full hover:bg-[#B2A797] ">Natural</li>
             
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5 rounded-b-3xl w-full hover:bg-[#B2A797] ">Glamorous</li>
              
            </ul>
          )}
        </div>
        <div className="w-full md:border-r-2 md:border-b-0 border-b-2 border-[#E4E4E4]  bg-[#1E1E1E]">
          <button onClick={() => setIsOpenThree((prev) => !prev)} className="bg-[#1E1E1E] md:py-12 py-4 pl-8 pr-8 text-start  flex flex-row gap-4 items-center text-[17px] leading-[19.58px] tracking-[-0.43px] text-white">
          Beauty Services
            {!isOpenThree ? <RiArrowDropDownLine className="text-[28px] font-thin" /> : <RiArrowDropUpLine className="text-[28px] font-thin text-white" />}
          </button>
          {isOpenThree && (
            <ul className="bg-[#1E1E1E] shadow-2xl md:w-[19%] w-[80%] absolute z-10 mt-4 flex flex-col rounded-3xl text-start">
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5 rounded-t-3xl w-full hover:bg-[#B2A797] ">Bridal Grace</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5  w-full hover:bg-[#B2A797] ">Glam and Glow</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5  w-full hover:bg-[#B2A797] ">Cut and Curls</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5  w-full hover:bg-[#B2A797] ">Hair Colour</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5  w-full hover:bg-[#B2A797] ">Beauty Facial</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5  w-full hover:bg-[#B2A797] ">Meni-Pedi</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5  w-full hover:bg-[#B2A797] ">Waxing</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5  w-full hover:bg-[#B2A797] ">Cleanup</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5  w-full hover:bg-[#B2A797] ">Mehandi</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5 rounded-b-3xl w-full hover:bg-[#B2A797] ">Threading</li>
            </ul>
          )}
        </div>
        <div className="w-full md:rounded-r-3xl md:rounded-b-none rounded-b-3xl   bg-[#1E1E1E]">
          <button onClick={() => setIsOpenFour((prev) => !prev)} className="bg-[#1E1E1E] md:py-12 py-4 pl-8 pr-8 text-start md:rounded-r-3xl md:rounded-b-none rounded-b-3xl flex flex-row gap-4 items-center text-[17px] leading-[19.58px] tracking-[-0.43px] text-white">
            Budget
            {!isOpenFour ? <RiArrowDropDownLine className="text-[28px] font-thin" /> : <RiArrowDropUpLine className="text-[28px] font-thin text-white" />}
          </button>
          {isOpenFour && (
            <ul className="bg-[#1E1E1E] shadow-2xl md:w-[19%] w-[80%]  absolute z-10 mt-4 flex flex-col rounded-3xl text-start">
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5 rounded-t-3xl w-full hover:bg-[#B2A797] ">Rs 0 - Rs 2,000</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5  w-full hover:bg-[#B2A797] ">Rs 2,000 - Rs 5,000</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5  w-full hover:bg-[#B2A797] ">Rs 5,000 - Rs 10,000</li>
            
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-5 rounded-b-3xl w-full hover:bg-[#B2A797] ">Rs 10,000 - Rs 20,000</li>
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default DropdownList;
