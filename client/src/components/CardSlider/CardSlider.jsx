import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './CardSlider.css'
import "swiper/css/pagination";
// import { Pagination } from "swiper";
import famale from "../../asset/images/famale.jpg";
import male from "../../asset/images/male.jpg";
import child from "../../asset/images/child.jpg";
import { FaArrowRight } from "react-icons/fa";
const CardSlider = () => {
  return (
    <div className="card">
      <div className="category flex desktop ">
        <Swiper  slidesPerView={3}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        // modules={[Pagination]}
        className="yourswiper " style={{'height':'480px'}} >
      <div className="comments  flex justify-between flex-wrap">
       <SwiperSlide>
        <a href="/category" className="cursor-pointer">
        <div className="famale">
          <img src={famale} alt="" />
          <p className="-mt-60  mb-28 font-semibold text-5xl  flex justify-center text-center items-center text-white" >Women</p>
          <div className="shop bg-white justify-center items-center text-center flex ">
          <a href="/category" className="pt-2 pb-2 pl-4 pr-4 bg-white flex justify-center items-center gap-4 text-black hover:text-white hover:bg-transparent border">Shop Woman 
          <FaArrowRight/></a>
          </div>
        </div>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="/category" className="cursor-pointer">
        <div className="male">
          <img src={male} alt="" />
          <p className="-mt-60  mb-28 font-semibold text-5xl text-white flex justify-center text-center items-center" >Men</p>
          <div className="shop  bg-white justify-center items-center text-center flex ">
          <a href="/category" className="pt-2 pb-2 pl-4 pr-4 bg-white flex justify-center items-center gap-4 text-black hover:text-white hover:bg-transparent border">Shop Men 
          <FaArrowRight/></a>
          </div>
        </div>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="/category" className="cursor-pointer">
        <div className="child">
          <img src={child} alt="" />
          <p className="-mt-60 mb-28 font-semibold text-5xl text-white flex justify-center text-center items-center" >Kids</p>
          <div className="shop  bg-white justify-center items-center text-center flex ">
          <a href="/category" className="pt-2 pb-2 pl-4 pr-4 bg-white flex justify-center items-center gap-4 text-black hover:text-white hover:bg-transparent border">Shop Kids 
          <FaArrowRight/></a>
          </div>
        </div>
        </a>
        </SwiperSlide>
      </div>
      </Swiper>
    </div>
      <div className="category flex tablet">
        <Swiper  slidesPerView={2}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        // modules={[Pagination]}
        className="yourSwiper " style={{'height':'480px'}} >
      <div className="comments  flex justify-between flex-wrap">
       <SwiperSlide>
        <a href="/category" className="cursor-pointer">
        <div className="famale">
          <img src={famale} alt="" />
          <p className="-mt-60  mb-28 font-semibold text-5xl  flex justify-center text-center items-center text-white" >Women</p>
          <div className="shop  bg-white justify-center items-center text-center flex ">
          <a href="/category" className="pt-2 pb-2 pl-4 pr-4 bg-white flex justify-center items-center gap-4 text-black hover:text-white hover:bg-transparent border">Shop Woman 
          <FaArrowRight/></a>
          </div>
        </div>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="/category" className="cursor-pointer">
        <div className="male">
          <img src={male} alt="" />
          <p className="-mt-60  mb-28 font-semibold text-5xl text-white flex justify-center text-center items-center" >Men</p>
          <div className="shop  bg-white justify-center items-center text-center flex ">
          <a href="/category" className="pt-2 pb-2 pl-4 pr-4 bg-white flex justify-center items-center gap-4 text-black hover:text-white hover:bg-transparent border">Shop Men 
          <FaArrowRight/></a>
          </div>
        </div>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="/category" className="cursor-pointer">
        <div className="child">
          <img src={child} alt="" />
          <p className="-mt-60 mb-28 font-semibold text-5xl text-white flex justify-center text-center items-center" >Kids</p>
          <div className="shop  bg-white justify-center items-center text-center flex ">
          <a href="/category" className="pt-2 pb-2 pl-4 pr-4 bg-white flex justify-center items-center gap-4 text-black hover:text-white hover:bg-transparent border">Shop Kids 
          <FaArrowRight/></a>
          </div>
        </div>
        </a>
        </SwiperSlide>
      </div>
      </Swiper>
    </div>
      <div className="category flex mobile">
        <Swiper  slidesPerView={1}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        // modules={[Pagination]}
        className="yourSwiper " style={{'height':'480px'}} >
      <div className="comments  flex justify-between flex-wrap">
       <SwiperSlide>
        <a href="/category" className="cursor-pointer">
        <div className="famale">
          <img src={famale} alt="" />
          <p className="-mt-60  mb-28 font-semibold text-5xl  flex justify-center text-center items-center text-white" >Women</p>
          <div className="shop  bg-white justify-center items-center text-center flex ">
          <a href="/category" className="pt-2 pb-2 pl-4 pr-4 bg-white flex justify-center items-center gap-4 text-black hover:text-white hover:bg-transparent border">Shop Woman 
          <FaArrowRight/></a>
          </div>
        </div>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="/category" className="cursor-pointer">
        <div className="male">
          <img src={male} alt="" />
          <p className="-mt-60  mb-28 font-semibold text-5xl text-white flex justify-center text-center items-center" >Men</p>
          <div className="shop  bg-white justify-center items-center text-center flex ">
          <a href="/category" className="pt-2 pb-2 pl-4 pr-4 bg-white flex justify-center items-center gap-4 text-black hover:text-white hover:bg-transparent border">Shop Men 
          <FaArrowRight/></a>
          </div>
        </div>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="/category" className="cursor-pointer">
        <div className="child">
          <img src={child} alt="" />
          <p className="-mt-60 mb-28 font-semibold text-5xl text-white flex justify-center text-center items-center" >Kids</p>
          <div className="shop  bg-white justify-center items-center text-center flex ">
          <a href="/category" className="pt-2 pb-2 pl-4 pr-4 bg-white flex justify-center items-center gap-4 text-black hover:text-white hover:bg-transparent border">Shop Kids 
          <FaArrowRight/></a>
          </div>
        </div>
        </a>
        </SwiperSlide>
      </div>
      </Swiper>
    </div>
    </div>
  );
};

export default CardSlider;
