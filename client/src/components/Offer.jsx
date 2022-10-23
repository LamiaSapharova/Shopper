import React from "react";
import { FaArrowRight } from "react-icons/fa";
import offer1 from "../asset/images/offer1.jpg";
import offer2 from "../asset/images/offer2.jpg";
import offer3 from "../asset/images/offer3.jpg";
import offer4 from "../asset/images/offer4.jpg";
const Offer = () => {
  return (
    <div className="pt-12">
      <div className="header m-0 flex flex-col justify-center items-center text-center ">
        <h6 className="text-gray-400 mb-3">New Collection</h6>
        <h2 className="mb-4 font-medium text-4xl">Best Picks 2022</h2>
        <p className="mb-10 text-gray-500 w-[50%]">
          Appear, dry there darkness they're seas, dry waters thing fly midst.
          Beast, above fly brought Very green.
        </p>
      </div>
      <div className="offers ml-[13%] mr-[13%] flex flex-col gap-10">
        <div className="image-content-1 flex gap-10">
          <div className="" style={{ height: "400px", width: "350px" }}>
            <img
              src={offer1}
              alt=""
              className="h-full"
              style={{ width: "350px", height: "400px" }}
            />
            <div className="info flex flex-col justify-center items-center -mt-56 text-white font-medium text-2xl">
            <p className="mb-4">Bags Collection</p>
            <span className="flex  justify-center items-center gap-3">
              <a href="/shop" className="text-base text-white" >Shop Now</a> <FaArrowRight />
            </span>
            </div>
          </div>
          <div style={{ height: "400px", width: "69%" }}>
            <img
              src={offer2}
              alt=""
              style={{ width: "100%" }}
              className="h-full"
            />
            <div className="info flex flex-col -mt-56 ml-[4%] font-medium text-2xl absolute">
            <p className="mb-4">Printed men's Shirts</p>
            <span className="flex  justify-center items-center gap-3">
              <a href="/shop" className="text-base text-black" >Shop Now</a> <FaArrowRight />
            </span>
            </div>
          </div>
        </div>
        <div className="image-content-2 flex gap-10">
          <div style={{ height: "400px", width: "69%" }}>
            <img
              src={offer3}
              alt=""
              style={{ width: "100%" }}
              className="h-full"
            />
             <div className="info flex flex-col justify-center items-center -mt-56  font-medium text-2xl absolute ml-[4%]">
            <p className="mb-4">Basic woman's Dresses</p>
            <span className="flex  justify-center items-center gap-3">
              <a href="/shop" className="text-base text-black " >Shop Now</a> <FaArrowRight />
            </span>
            </div>
          </div>
          <div style={{ height: "400px", width: "350px" }}>
            <img
              src={offer4}
              alt=""
              className="h-full"
              style={{ width: "350px", height: "400px" }}
            />
             <div className="info flex flex-col justify-center items-center -mt-56 text-white font-medium text-2xl">
            <p className="mb-4">Sweatshirts</p>
            <span className="flex  justify-center items-center gap-3">
              <a href="/shop" className="text-base text-white" >Shop Now</a> <FaArrowRight />
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
