import infoBG from "/kit.jpg";
import React, { useState } from "react";

import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

import profile from "../../assets/mua.jpg";
import Header from "../Header";

const Details = ({ estate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [displayImage, setDisplayImage] = useState(0);
  const {
    title,
    images,
    price,
  } = estate;

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${infoBG}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-[#32210DB2]">
        <Header transparent={false} />
        <div className="w-[80%] h-full mx-auto max-w-[1200px] md:pt-28 pt-12 pb-12 flex flex-col">
          <div className="flex md:flex-row flex-col justify-between gap-x-3 mb-10 ">
            <div className="flex flex-col md:gap-y-8 gap-y-4 ">
              <h1 className="text-white md:text-[50px] text-[28px] md:font-normal font-bold lg:leading-[25.6px] leading-tight tracking-[-0.8px]">
                {title}
              </h1>
            </div>
            <div className="flex flex-col md:mt-0 mt-3 gap-y-8">
              <h1 className="text-white md:text-[50px] text-[20px] lg:leading-[25.6px] leading-tight tracking-[-0.8px]">
                {price}
              </h1>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-[60%]">
              <div className="">
                <img
                  src={images[displayImage]}
                  width={704}
                  height={520}
                  className="md:w-[704px]  md:h-[520px] w-[500px] h-[400px] shadow-2xl rounded-tr-[57px] object-cover"
                  alt=""
                />
              </div>

              <div className="flex w-full flex-row md:gap-6 gap-2 py-6">
                {images.map(
                  (image, index) =>
                    index != displayImage && (
                      <div
                        onClick={() => setDisplayImage(index)}
                        key={`img` + index}
                        className="shadow-2xl  cursor-pointer"
                      >
                        <img
                          src={image}
                          alt=""
                          className="md:w-[80px] md:h-[80px] w-[60px] h-[50px] object-cover rounded-tr-2xl"
                        />
                      </div>
                    )
                )}
              </div>

              {/* features div  */}
              <div className=" mb-12 px-6 shadow-2xl bg-[#efece899] rounded-xl ">
                <div className="flex justify-between px-6 py-8 border-b border-[#1E1E1E]">
                  <h1 className="text-black text-[20px] leading-[23.04px] tracking-[-0.5px]">
                    Features
                  </h1>
                </div>
                <div className="flex md:flex-row flex-col  px-6 py-8 justify-between ">
                  <ul className="flex flex-col md:gap-y-4 gap-y-2 text-[15px] text-black leading-[22px] tracking-[-0.38px]">
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Velvet Smooth
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Radiant Glow
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Timeless Elegance
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Effortless Charm
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Pure Luxury
                    </li>
                  </ul>
                  <ul className="flex md:mt-0 mt-2 flex-col md:gap-y-4 gap-y-2 text-[15px] text-black leading-[22px] tracking-[-0.38px]">
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Luminous Finish
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Natural Beauty
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Flawless Coverage
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Dreamy Softness
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Vibrant Shades
                    </li>
                  </ul>
                  <ul className="flex flex-col md:mt-0 mt-2  md:gap-y-4 gap-y-2 text-[15px] text-black leading-[22px] tracking-[-0.38px]">
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Alluring Shine
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Silky Texture
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Glamorous Appeal
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Ethereal Charm
                    </li>
                    <li className="flex flex-row gap-2 items-center">
                      <FaCircleCheck />
                      Delicate Balance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-[40%]  ">
              {/* form  */}
              <div
                className="w-full bg-[#efece899]
            lg:mx-6  shadow-2xl rounded-2xl py-8"
              >
                <div className="flex flex-row gap-3 items-center bg-[#efece899] mx-6 my-5 rounded-xl px-3 py-4">
                  <div>
                    <img
                      src={profile}
                      width={40}
                      height={40}
                      alt=""
                      className="object-cover rounded-full w-[40px] h-[40px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-black text-[15px] leading-[17.28px] tracking-[-0.38px]">
                      Glamour Palette
                    </h1>
                    <h2 className="text-black text-[13px] leading-[17.28px] tracking-[-0.38px]">
                      View Profile
                    </h2>
                  </div>
                </div>
                <form className="flex flex-col items-end gap-y-4 mx-6 ">
                  <div className="text-[#0A385A] py-3 w-full border border-[#1E1E1E] rounded-xl">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="bg-transparent rounded-xl  tracking-wider pl-3 text-[14px]  font-[500] w-full border-none  placeholder:text-black  outline-none focus:outline-none"
                    />
                  </div>
                  <div className="text-[#0A385A] py-3 w-full  border border-[#1E1E1E] rounded-xl  ">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="bg-transparent tracking-wider pl-3 rounded-xl text-[14px] font-[500]  w-full border-none placeholder:text-black  outline-none focus:outline-none"
                    />
                  </div>
                  <div className="text-[#0A385A] w-full py-3  border border-[#1E1E1E] rounded-xl">
                    <input
                      type="text"
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      className="bg-transparent tracking-wider pl-3 rounded-xl text-[14px] font-[500]  w-full border-none  placeholder:text-black  outline-none focus:outline-none"
                    />
                  </div>
                  <div className="text-[#0A385A] py-3 w-full  border border-[#1E1E1E] rounded-xl">
                    <textarea
                      id="w3review"
                      name="w3review"
                      rows="2"
                      cols="50"
                      placeholder="Hello, Iám interested in..."
                      className="bg-transparent tracking-wider resize-none rounded-xl pl-3 text-[14px]  font-[500]  w-full border-none  placeholder:text-black  outline-none focus:outline-none"
                    ></textarea>
                  </div>
                  <button className="bg-[#251408] flex flex-row gap-5 justify-center items-center w-full text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-6 rounded-tr-xl">
                    Book Appointment <FaLongArrowAltRight className="w-[20px]" />
                  </button>
                </form>
              </div>
              <br />

              {/* description  */}
              <div className="w-full  mb-10 lg:mx-6  shadow-2xl rounded-2xl ">
                <div className="mt-4 bg-[#efece899] rounded-xl ">
                  <div className="flex justify-between px-6 py-8 mx-6 border-b border-[#1E1E1E]">
                    <h1 className="text-black text-[20px] leading-[23.04px] tracking-[-0.5px]">
                      Description
                    </h1>
                  </div>
                  <div className="flex flex-col px-6 py-6 gap-4 ">
                    {estate.description.map((desc, index) => (
                      <div key={`PAR${estate.title + index}`}>
                        <p className="text-black text-[15px] leading-[22px] tracking-[-0.38px]">
                          {desc}
                        </p>
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
