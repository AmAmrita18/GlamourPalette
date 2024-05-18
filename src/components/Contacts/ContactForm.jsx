import React, { useState } from "react";
import ImageContact from "../../assets/mua.jpg";
import ImageContact1 from "/kit.jpg";

import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      className="w-full "
      style={{
        backgroundImage: `url('${ImageContact1}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="w-full h-full bg-[#32210DB2]">
        <div className="w-[80%]  h-full md:mx-auto mx-5 max-w-[1200px] md:py-32 py-24 flex lg:flex-row flex-col gap-x-20 ">
          <div className="mx-auto bg-[#efece899] md:px-32 px-5 py-10 rounded-3xl flex lg:flex-row flex-col gap-16">
            <div
              className="md:w-[450px] lg:mx-0 mx-auto md:h-[595px] w-[310px] h-[450px] rounded-t-full shadow-2xl"
              style={{
                backgroundImage: `url('${ImageContact}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full h-full bg-[#473f3599] rounded-t-full"></div>
            </div>
            <div>
              <div className="flex md:flex-row flex-col justify-between items-center ">
                {" "}
                <h1 className="md:text-[50px] text-[40px] uppercase leading-[60px] ">
                  Contact Us
                </h1>
                <div className="flex flex-row gap-x-3 ">
                  <div className="w-[30px] h-[30px]  py-1 rounded-full">
                    <MdOutlineFacebook className="w-[25px] h-[25px] cursor-pointer  mx-auto" />
                  </div>
                  <div className="w-[30px] h-[30px]  py-1 rounded-full">
                    <RiInstagramFill className="w-[25px] h-[25px] cursor-pointer  mx-auto" />
                  </div>
                  <div className="w-[30px] h-[30px]  py-1 rounded-full">
                    <RiWhatsappFill className="w-[25px] h-[25px]  cursor-pointer mx-auto" />
                  </div>
                </div>
              </div>
              <div className=" w-full py-7 flex flex-col gap-y-8 ">
                <div className="text-black pb-6  w-full border-b-2 border-black md:text-[18px] text-[16px] font-[500]">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="bg-transparent  w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-black placeholder:text-[18px] border-none  outline-none focus:outline-0"
                  />
                </div>
                <div className="text-black pb-6 w-full border-b-2 border-black md:text-[18px] text-[16px] font-[500]">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="bg-transparent w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-black  placeholder:text-[18px] border-none  outline-none  focus:outline-0"
                  />
                </div>
                <div className="text-black pb-6 w-full border-b-2 border-black md:text-[18px] text-[16px] font-[500]">
                  <input
                    type="text"
                    id="Message"
                    name="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="bg-transparent  w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-black  placeholder:text-[18px] border-none  outline-none focus:outline-0"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="bg-[#251408] transition-all duration-700 ease-in-out  hover:scale-95 w-[200px] text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-6 mt-4 rounded-tr-xl">
                    CONTACT US
                  </button>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-row flex-col gap-x-12 gap-y-12 ">
                <div className="w-[40%] flex flex-col gap-y-3">
                  <h1 className="text-[25px] text-black leading-[30px]">
                    Contact
                  </h1>
                  <h2 className="text-[18px] text-black leading-[30px]">
                    {" "}
                    +230 5123 4567
                  </h2>
                </div>
                <div className="flex flex-col gap-y-3">
                  <h1 className="text-[25px] text-black leading-[30px]">
                    Based in
                  </h1>
                  <h2 className="text-[18px] text-black leading-[30px]">
                    CUNNINGHAM ROAD, VASANT NAGAR, BANGALORE, INDIA
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
