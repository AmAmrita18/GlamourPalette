import React from "react";
import card1 from "../../assets/card1.jpg";
import card3 from "../../assets/card2.jpg";
import card6 from "../../assets/card3.jpg";
import card7 from "../../assets/card4.jpg";
import card8 from "../../assets/card5.jpg";
import card9 from "../../assets/card6.jpg";
import peop1 from "../../assets/Ellipse.png";
import peop3 from "../../assets/Ellipse (1).png";
import peop6 from "../../assets/Ellipse (4).png";
import peop7 from "../../assets/Ellipse (5).png";
import peop8 from "../../assets/Ellipse (6).png";
import peop9 from "../../assets/Ellipse (7).png";

import infoBG from "/bg-bride7.jpg";
import { Link } from "react-router-dom";
import Header from "../Header";
const BlogInfo = () => {
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
      <div className="w-full bg-[#32210DB2]">
        <Header transparent={false} />
        <div className="w-[80%] mx-auto max-w-[1200px] h-full py-24 flex flex-col gap-4">
          <h1 className="lg:text-[60px] md:text-[50px] text-[45px] leading-[69.12px] text-center text-white">
            Glamour Palette Chronicles: <br />
            Exploring Beauty Beyond Borders
          </h1>
          <p className="text-[18px] leading-[29.37px] text-white text-center md:w-[70%] mx-auto my-8">
            Dive into Our Expert Blog for Insights, Inspiration, and Innovations
            in the World of Beauty. Your Journey to Beauty Discovery Starts
            Here. <br />
            Discover the latest trends, expert tips, and captivating stories
            that will ignite your passion for beauty. From skincare secrets to
            makeup mastery, our blog is your ultimate resource for unlocking the
            secrets of timeless beauty. Join us on this journey as we explore
            the artistry, science, and allure of beauty in all its forms.
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-6">
            <Link to="/mainblog">
              <div className="bg-[#efece899] rounded-2xl   transition-all duration-700 ease-in-out  hover:scale-95 shadow-2xl">
                <img
                  src={card1}
                  alt=""
                  className="w-full rounded-t-2xl object-cover h-[200px]"
                />
                <div className="flex flex-col gap-4 py-8 px-5">
                  <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                    Skincare Secrets: Unveiling Radiant Complexions and Timeless
                    Beauty
                  </h1>
                  <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam sagittis, sem in sagittis aliquet, sapien purus
                    ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                    quis sagittis nulla, vehicula suscipit.
                  </p>
                  <div className="flex flex-row items-center gap-4">
                    <img src={peop1} alt="" />
                    <h1>GlamourGuru</h1>
                    <h1>|</h1>
                    <h1>14th February,2024</h1>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/mainblog">
              <div className="bg-[#efece899]   transition-all duration-700 ease-in-out  hover:scale-95 shadow-2xl rounded-2xl">
                <img
                  src={card3}
                  alt=""
                  className="w-full object-cover h-[200px] rounded-t-2xl"
                />
                <div className="flex flex-col gap-4 py-8 px-5">
                  <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                    Makeup Mastery: Tips, Tricks, and Trends for Every Occasion
                  </h1>
                  <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam sagittis, sem in sagittis aliquet, sapien purus
                    ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                    quis sagittis nulla, vehicula suscipit.
                  </p>
                  <div className="flex flex-row items-center gap-4">
                    <img src={peop3} alt="" />
                    <h1>BeautyBrushMaestro</h1>
                    <h1>|</h1>
                    <h1>17th April, 2024</h1>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/mainblog">
              <div className="bg-[#efece899]   transition-all duration-700 ease-in-out  hover:scale-95 shadow-2xl rounded-2xl">
                <img
                  src={card6}
                  alt=""
                  className="w-full object-cover h-[200px] rounded-t-2xl"
                />
                <div className="flex flex-col gap-4 py-8 px-5">
                  <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                    Hair Care Chronicles: From Styling Tips to Hair Health
                  </h1>
                  <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam sagittis, sem in sagittis aliquet, sapien purus
                    ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                    quis sagittis nulla, vehicula suscipit.
                  </p>
                  <div className="flex flex-row items-center gap-4">
                    <img src={peop6} alt="" />
                    <h1>MakeupMaven</h1>
                    <h1>|</h1>
                    <h1>27th May,2024</h1>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/mainblog">
              <div className="bg-[#efece899]   transition-all duration-700 ease-in-out  hover:scale-95 shadow-2xl rounded-2xl">
                <img
                  src={card7}
                  alt=""
                  className="w-full object-cover h-[200px] rounded-t-2xl"
                />
                <div className="flex flex-col gap-4 py-8 px-5">
                  <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                    Beauty Diaries: Tales of Transformation and Self-Expression
                  </h1>
                  <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam sagittis, sem in sagittis aliquet, sapien purus
                    ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                    quis sagittis nulla, vehicula suscipit.
                  </p>
                  <div className="flex flex-row items-center gap-4">
                    <img src={peop7} alt="" />
                    <h1>CosmeticsConnoisseur</h1>
                    <h1>|</h1>
                    <h1>28th June,2024</h1>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/mainblog">
              <div className="bg-[#efece899]   transition-all duration-700 ease-in-out  hover:scale-95 shadow-2xl rounded-2xl">
                <img
                  src={card8}
                  alt=""
                  className="w-full object-cover h-[200px] rounded-t-2xl"
                />
                <div className="flex flex-col gap-4 py-8 px-5">
                  <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                    Wellness Wonders: Nourishing Your Body, Mind, and Soul
                  </h1>
                  <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam sagittis, sem in sagittis aliquet, sapien purus
                    ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                    quis sagittis nulla, vehicula suscipit.
                  </p>
                  <div className="flex flex-row items-center gap-4">
                    <img src={peop8} alt="" />
                    <h1>GlamFinesse</h1>
                    <h1>|</h1>
                    <h1>21rd July,2024</h1>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/mainblog">
              <div className="bg-[#efece899]   transition-all duration-700 ease-in-out  hover:scale-95 shadow-2xl rounded-2xl">
                <img
                  src={card9}
                  alt=""
                  className="w-full object-cover h-[200px] rounded-t-2xl"
                />
                <div className="flex flex-col gap-4 py-8 px-5">
                  <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                    Wellness Wonders: Nourishing Your Body, Mind, and Soul
                  </h1>
                  <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam sagittis, sem in sagittis aliquet, sapien purus
                    ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                    quis sagittis nulla, vehicula suscipit.
                  </p>
                  <div className="flex flex-row items-center gap-4">
                    <img src={peop9} alt="" />
                    <h1>BeautyBlendMaster</h1>
                    <h1>|</h1>
                    <h1>18th August,2024</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
