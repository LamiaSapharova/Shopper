import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Navigation } from "swiper";
import '../../pages/About/About.css'
const Reviews = () => {
  return (
    <div className="container">
    <div className="reviews">
      <div className="our-story-text-title">
        <h6>WHAT BUYERS SAY</h6>
        <h1>Customers Reviews</h1>
      </div>
      <Swiper  slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiperr h-64 " >
      <div className="reviews -mt-12 -mb-12">
       <SwiperSlide> <div className="review cursor-grab">
      <p className="reviews-text">
        <i>
          " Given wherein. Doesn't called also and air sea to make first
          subdue beginning. Appear seasons the it after whose beginning. Hath
          can't good life. They're multiply made give divided open, be
          likeness Cattle be have. Life tree darkness. She'd very."
        </i>
      </p>
      <div className="review-date">Darrell Baker, 18 May 2019</div>
      </div> </SwiperSlide>
       <SwiperSlide> <div className="review cursor-grab">
      <p className="reviews-text">
        <i>
          " Given wherein. Doesn't called also and air sea to make first
          subdue beginning. Appear seasons the it after whose beginning. Hath
          can't good life. They're multiply made give divided open, be
          likeness Cattle be have. Life tree darkness. She'd very."
        </i>
      </p>
      <div className="review-date">Darrell Baker, 18 May 2019</div>
      </div> </SwiperSlide>
       <SwiperSlide> <div className="review cursor-grab">
      <p className="reviews-text">
        <i>
          " Given wherein. Doesn't called also and air sea to make first
          subdue beginning. Appear seasons the it after whose beginning. Hath
          can't good life. They're multiply made give divided open, be
          likeness Cattle be have. Life tree darkness. She'd very."
        </i>
      </p>
      <div className="review-date">Darrell Baker, 18 May 2019</div>
      </div> </SwiperSlide>
      </div>
      </Swiper>
    </div>
  </div>
  )
}

export default Reviews