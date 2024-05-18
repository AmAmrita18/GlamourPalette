import React from "react";
import infoBG from "/footerBG.png";
import { estates } from "./estates";
import DropdownList from "./DropdownList";
import { Link } from "react-router-dom";
import img1 from "/background6.jpg";
import img2 from "/makeover.jpg";
import img3 from "/background14.jpg";
import img4 from "/background3.jpg";
import img5 from "/spa.jpg";
import img6 from "/service2.jpg";
import img7 from "/wax (3).jpg";
import img8 from "/service5.jpg";
import img9 from "/service6.jpg";
import img10 from "/service7.jpg";
const FindPlace = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${infoBG}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="w-[80%] h-full mx-auto max-w-[1200px] py-28">
        <div className="w-[170px] h-1 bg-black rounded-md"></div>
        <h1 className="md:text-[50px] text-[40px] py-4 uppercase text-black leading-[57.6px] tracking-[-1.26px] mb-5">
          Find your next beauty bliss
        </h1>

        <div className="grid md:grid-cols-4 grid-cols-2">
          <div className="">
            <img
              src={img1}
              alt=""
              className="object-cover h-[300px] w-[300px]"
            />
          </div>

          <div className=" bg-[#1E1E1E] flex flex-col justify-center">
            <h1 className="text-white font-[400] md:text-[40px] text-[30px] md:mt-0 mt-6 text-center  leading-[40px] px-3">
              Bridal Grace
            </h1>

            <p className="text-[16px] text-white font-[400] text-center uppercase tracking-[3.25px] my-4">
              Enchanted Beauty
            </p>

            <p className="lg:block hidden text-[19px] mx-auto w-[80%] text-center text-[#4D4D4D] font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              impedit cumque deleniti quis omnis harum. Lorem ipsum dolor sit
              amet.
            </p>
          </div>

          <div className="">
            <img
              src={img2}
              alt=""
              className="object-cover h-[300px] w-[300px]"
            />
          </div>
          <div className=" flex flex-col justify-center bg-[#1E1E1E]">
            <h1 className="text-white font-[400] md:text-[40px] text-[30px] md:mt-0 mt-6 text-center  leading-[40px] px-3">
              Glam & Glow
            </h1>

            <p className="text-[16px] text-white font-[400] text-center uppercase tracking-[3.25px] my-4">
              Ethereal Shine
            </p>

            <p className="lg:block hidden text-[19px] mx-auto w-[80%] text-center text-[#4D4D4D] font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              impedit cumque deleniti quis omnis harum. Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className=" flex flex-col justify-center bg-[#1E1E1E]">
            <h1 className="text-white font-[400] md:text-[40px] text-[30px] md:mt-0 mt-6 text-center  leading-[40px] px-3">
              Cut & Curls
            </h1>

            <p className="text-[16px] text-white font-[400] text-center uppercase tracking-[3.25px] my-4">
              Crystal Clear
            </p>

            <p className="lg:block hidden text-[19px] mx-auto w-[80%] text-center text-[#4D4D4D] font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              impedit cumque deleniti quis omnis harum. Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className="">
            <img
              src={img3}
              alt=""
              className="object-cover h-[300px] w-[300px]"
            />
          </div>

          <div className=" flex flex-col justify-center bg-[#1E1E1E]">
            <h1 className="text-white font-[400] md:text-[40px] text-[30px] md:mt-0 mt-6 text-center  leading-[40px] px-3">
              Hair Color
            </h1>

            <p className="text-[16px] text-white font-[400] text-center uppercase tracking-[3.25px] my-4">
              Aura Mist
            </p>

            <p className="lg:block hidden text-[19px] mx-auto w-[80%] text-center text-[#4D4D4D] font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              impedit cumque deleniti quis omnis harum. Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className="">
            <img
              src={img4}
              alt=""
              className="object-cover h-[300px] w-[300px]"
            />
          </div>
          <div className="">
            <img
              src={img5}
              alt=""
              className="object-cover h-[300px] w-[300px]"
            />
          </div>
          <div className=" flex flex-col justify-center bg-[#1E1E1E]">
            <h1 className="text-white font-[400] md:text-[40px] text-[30px] md:mt-0 mt-6 text-center  leading-[40px] px-3">
              Beauty Facial{" "}
            </h1>

            <p className="text-[16px] text-white font-[400] text-center uppercase tracking-[3.25px] my-4">
              Diamond Dew
            </p>

            <p className="lg:block hidden text-[19px] mx-auto w-[80%] text-center text-[#4D4D4D] font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              impedit cumque deleniti quis omnis harum. Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className="">
            <img
              src={img6}
              alt=""
              className="object-cover h-[300px] w-[300px]"
            />
          </div>
          <div className=" flex flex-col justify-center bg-[#1E1E1E]">
            <h1 className="text-white font-[400] md:text-[40px] text-[30px] md:mt-0 mt-6 text-center  leading-[40px] px-3">
              Meni-Pedi
            </h1>

            <p className="text-[16px] text-white font-[400] text-center uppercase tracking-[3.25px] my-4">
              Satin Smooth
            </p>

            <p className="lg:block hidden text-[19px] mx-auto w-[80%] text-center text-[#4D4D4D] font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              impedit cumque deleniti quis omnis harum. Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className=" flex flex-col justify-center bg-[#1E1E1E]">
            <h1 className="text-white font-[400] md:text-[40px] text-[30px] md:mt-0 mt-6 text-center  leading-[40px] px-3">
              Waxing
            </h1>

            <p className="text-[16px] text-white font-[400] text-center uppercase tracking-[3.25px] my-4">
              Velvet Touch
            </p>

            <p className="lg:block hidden text-[19px] mx-auto w-[80%] text-center text-[#4D4D4D] font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              impedit cumque deleniti quis omnis harum. Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className="">
            <img
              src={img7}
              alt=""
              className="object-cover h-[300px] w-[300px]"
            />
          </div>
          <div className="flex flex-col justify-center bg-[#1E1E1E]">
            <h1 className="text-white font-[400] md:text-[40px] text-[30px] md:mt-0 mt-6 text-center  leading-[40px] px-3">
              Cleanup
            </h1>

            <p className="text-[16px] text-white font-[400] text-center uppercase tracking-[3.25px] my-4">
              Refreshing Glow
            </p>

            <p className="lg:block hidden text-[19px] mx-auto w-[80%] text-center text-[#4D4D4D] font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              impedit cumque deleniti quis omnis harum. Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className="">
            <img
              src={img8}
              alt=""
              className="object-cover h-[300px] w-[300px]"
            />
          </div>
          <div className="">
            <img
              src={img9}
              alt=""
              className="object-cover h-[300px] w-[300px]"
            />
          </div>
          <div className=" flex flex-col justify-center bg-[#1E1E1E]">
            <h1 className="text-white font-[400] md:text-[40px] text-[30px] md:mt-0 mt-6 text-center  leading-[40px] px-3">
              Mehandi
            </h1>

            <p className="text-[16px] text-white font-[400] text-center uppercase tracking-[3.25px] my-4">
              Artistic perfection
            </p>

            <p className="lg:block hidden text-[19px] mx-auto w-[80%] text-center text-[#4D4D4D] font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              impedit cumque deleniti quis omnis harum. Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className="">
            <img
              src={img10}
              alt=""
              className="object-cover h-[300px] w-[300px]"
            />
          </div>
          <div className=" flex flex-col justify-center bg-[#1E1E1E]">
            <h1 className="text-white font-[400] md:text-[40px] text-[30px] md:mt-0 mt-6 text-center  leading-[40px] px-3">
              Threading
            </h1>

            <p className="text-[16px] text-white font-[400] text-center uppercase tracking-[3.25px] my-4">
              Flawless Finish
            </p>

            <p className="lg:block hidden text-[19px] mx-auto w-[80%] text-center text-[#4D4D4D] font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              impedit cumque deleniti quis omnis harum. Lorem ipsum dolor sit
              amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPlace;
