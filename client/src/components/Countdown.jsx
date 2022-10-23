import React from "react";
import countdown from "../asset/images/countdown-bg.jpg";
// import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
const Countdown = () => {
  // const defaultTime = {
  //   day: "00",
  //   hour: "00",
  //   minute: "00",
  //   second: "00",
  // };
  //   // var countDownDate=new Date("Jun 14,2023 00:00:00").getTime();
  // // var remainingTime=()=>{
  // //    var now= new Date().getTime();
  // //    var distance=countDownDate-now;

  // //    var day=Math.floor(distance/(1000*60*60*24));
  // //    var hour=Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  // //    var minute=Math.floor((distance % (1000*60*60))/(1000*60));
  // //    var second=Math.floor((distance % (1000*60))/1000);

  // //    var result= document.getElementById('root').innerHTML=day+" "+":"+" "+hour+" "+":"+" "+minute+" "+":"+" "+second;
  // // }
  //   const [remainingTime,setRemainingTime]=useState(defaultTime)
  //   useEffect(()=>{
  //     const interId=setInterval(()=>{
  //       updateTime();
  //     },1000)
  //     return ()=> clearInterval(interId);
  //   },[])
  //   const updateTime=()=>{
  //     var countDownDate=new Date("Jun 14,2023 00:00:00").getTime();
  //     var remainingTime=()=>{
  //     var now= new Date().getTime();
  //     var distance=countDownDate-now;
  //     var day=Math.floor(distance/(1000*60*60*24));
  //     var hour=Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  //     var minute=Math.floor((distance % (1000*60*60))/(1000*60));
  //     var second=Math.floor((distance % (1000*60))/1000);
  //     var result= document.getElementById('root').innerHTML=day+" "+":"+" "+hour+" "+":"+" "+minute+" "+":"+" "+second;
  //   }
  // }
  return (
    <div className="countdown mt-32">
      <img src={countdown} alt="" className="" />
      <div className="absolute ml-[50%] mt-[-29%] w-96">
        <h3 className="text-3xl font-sans mb-7 font-medium text-start">
          Get -50% from <br />
          Summer Collection
        </h3>
        <div className="tarix block text-start">
          <div className="flex justify-between mb-3">
          <span  className="text-5xl font-semibold" style={{'color':'#FF6F61'}}>199  </span>
          <span className="text-5xl font-semibold" style={{'color':'#FF6F61'}}>: </span>
          <span className="text-5xl font-semibold" style={{'color':'#FF6F61'}}>19 </span>
          <span className="text-5xl font-semibold" style={{'color':'#FF6F61'}}>: </span>
          <span className="text-5xl font-semibold" style={{'color':'#FF6F61'}}>9 </span>
          <span className="text-5xl font-semibold" style={{'color':'#FF6F61'}}>: </span>
          <span className="text-5xl font-semibold" style={{'color':'#FF6F61'}}>99 </span>
          </div>
           <div className="flex justify-between ml-2">
          <span className="pl-2 text-xs "style={{'color':'#767676'}}>DAYS</span>
          <span className="pl-20 text-xs "style={{'color':'#767676'}}>HOURS</span>
          <span className="pl-6 text-xs "style={{'color':'#767676'}}>MINUTES</span>
          <span className="pl-6 text-xs "style={{'color':'#767676'}}>SECONDS</span>
          </div>
          </div>
        <div className="shopnow flex mt-14">
          <a
            href="/shop"
            className="flex justify-center items-center pt-4 pb-4 pr-7 pl-7 bg-black text-base font-medium"
            style={{ color: "white" }}
          >
            Shop Now{" "}
            <FaArrowRight style={{ marginLeft: "20px", color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Countdown
