import React from "react";
import {
    FaLock,
    FaRetweet,
    FaTag,
    FaTruck,
  } from "react-icons/fa";
const Info = () => {
  return (
    <div className="info pt-7">
      <div className="info-sub pb-7 border-b flex justify-between flex-wrap gap-8 mr-[12%] ml-[12%]">
        <div className="main info1   w-64 h-14">
          <FaTruck  style={{"color":"orange"}}/>
          <div className="text-info absolute -mt-5 text-start ml-8 ">
            <h4 className="font-medium text-base text-black">FREE SHIPPING</h4>
            <p className="text-muted text-gray-600">From all orders over $100</p>
          </div>
        </div>
        <div className="main info2 w-64 h-14">
          <FaRetweet style={{"color":"orange"}}/>
          <div className="text-info absolute -mt-5 text-start ml-8">
            <h4 className="font-medium text-base text-black uppercase">FREE Returns</h4>
            <p className="text-muted text-gray-600 uppercase">Return money within 30 days</p>
          </div>
        </div>
        <div className="main info3 w-64 h-14">
          <FaLock style={{"color":"orange"}}/>
          <div className="text-info absolute -mt-5 text-start ml-8">
            <h4 className="font-medium text-base text-black uppercase">Secure Shopping</h4>
            <p className="text-muted text-gray-600">You are in safe hands</p>
          </div>
        </div>
        <div className="main info4 w-64 h-14">
          <FaTag style={{"color":"orange"}}/>
          <div className="text-info absolute -mt-5 text-start ml-8">
            <h4 className="font-medium text-base text-black uppercase">OVER 10,000 styles</h4>
            <p className="text-muted text-gray-600">We have  everything you need</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
