import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FaStar } from "react-icons/fa";
import './Feedback.css'
const Feedback = () => {
  return (
    <div className="py-24 block">
      <div className="header flex flex-col justify-center items-center">
        <p className="text-gray-400 mb-3">WHAT BUYERS SAY</p>
      </div>
      <h4 className="mb-10 text-4xl font-medium flex justify-center">Latest buyers Reviews</h4>
      <Swiper  slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper h-96 desktop" >
      <div className="comments mr-[13%] ml-[13%] flex justify-between flex-wrap">
       <SwiperSlide> <div className="cursor-grab comment-1 p-8 w-80 h-80 border">
          <a href="/product">
            {" "}
            <div className="head flex">
              <img
                src="	https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-13.jpg"
                style={{ width: "70px", height: "70px" }}
                className="text-start flex justify-start items-start"
                alt=""
              />
              <div className="flex flex-col ml-6">
                <h6 className="text-gray-500 text-start">Shoes</h6>
                <h5 className="font-medium text-lg -mt-1 text-black">
                  Low top Sneakers
                </h5>
                <div className="rate flex text-orange-400 -mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </a>
          <div className="info mt-8 text-gray-500  text-start">
            <p>
              From creepeth said moved given divide make multiply of him shall
              itself also above second doesn't unto created saying land herb sea
              midst night wherein.
            </p>
            <p className="text-gray-500 mt-4 text-start">
              <a href="linkedin.com/in/agasefamircan">
                <b> Agasef Amircan</b>
              </a>{" "}
              , 09 sep 2022
            </p>
          </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>  <div className="cursor-grab comment-2 p-8 w-80 h-80 border">
          <a href="/product">
            <div className="head flex">
              <img
                src="	https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-14.jpg"
                style={{ width: "70px", height: "70px" }}
                className="text-start flex justify-start items-start"
                alt=""
              />
              <div className="flex flex-col ml-6">
                <h6 className="text-gray-500 text-start">Shoes</h6>
                <h5 className="font-medium text-lg -mt-1 text-black">
                  Low top Sneakers
                </h5>
                <div className="rate flex text-orange-400 -mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </a>
          <div className="info mt-8 text-gray-500  text-start">
            <p>
              From creepeth said moved given divide make multiply of him shall
              itself also above second doesn't unto created saying land herb sea
              midst night wherein.
            </p>
            <p className="text-gray-500 mt-4 text-start">
              <a href="linkedin.com/in/agasefamircan">
                <b> Agasef Amircan</b>
              </a>{" "}
              , 09 sep 2022
            </p>
          </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>  <div className="cursor-grab comment-3 p-8 w-80 h-80 border">
          <a href="/product">
            {" "}
            <div className="head flex">
              <img
                src="	https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-15.jpg"
                style={{ width: "70px", height: "70px" }}
                className="text-start flex justify-start items-start"
                alt=""
              />
              <div className="flex flex-col ml-6">
                <h6 className="text-gray-500 text-start">Shoes</h6>
                <h5 className="font-medium text-lg -mt-1 text-black">
                  Low top Sneakers
                </h5>
                <div className="rate flex text-orange-400 -mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </a>
          <div className="info mt-8 text-gray-500  text-start">
            <p>
              From creepeth said moved given divide make multiply of him shall
              itself also above second doesn't unto created saying land herb sea
              midst night wherein.
            </p>
            <p className="text-gray-500 mt-4 text-start">
              <a href="linkedin.com/in/agasefamircan">
                <b> Agasef Amircan</b>
              </a>{" "}
              , 09 sep 2022
            </p>
          </div>
        </div>
    </SwiperSlide>
      <SwiperSlide>  <div className="cursor-grab comment-3 p-8 w-80 h-80 border">
          <a href="/product">
            {" "}
            <div className="head flex">
              <img
                src="	https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-18.jpg"
                style={{ width: "70px", height: "70px" }}
                className="text-start flex justify-start items-start"
                alt=""
              />
              <div className="flex flex-col ml-6">
                <h6 className="text-gray-500 text-start">Shoes</h6>
                <h5 className="font-medium text-lg -mt-1 text-black">
                  Low top Sneakers
                </h5>
                <div className="rate flex text-orange-400 -mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </a>
          <div className="info mt-8 text-gray-500  text-start">
            <p>
              From creepeth said moved given divide make multiply of him shall
              itself also above second doesn't unto created saying land herb sea
              midst night wherein.
            </p>
            <p className="text-gray-500 mt-4 text-start">
              <a href="linkedin.com/in/agasefamircan">
                <b> Agasef Amircan</b>
              </a>{" "}
              , 09 sep 2022
            </p>
          </div>
        </div>
    </SwiperSlide>
      </div>
      </Swiper>
      <Swiper  slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper h-96 tablet" >
      <div className="comments mr-[13%] ml-[13%] flex justify-between flex-wrap">
       <SwiperSlide> <div className="cursor-grab comment-1 p-8 w-80 h-80 border">
          <a href="/product">
            {" "}
            <div className="head flex">
              <img
                src="	https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-13.jpg"
                style={{ width: "70px", height: "70px" }}
                className="text-start flex justify-start items-start"
                alt=""
              />
              <div className="flex flex-col ml-6">
                <h6 className="text-gray-500 text-start">Shoes</h6>
                <h5 className="font-medium text-lg -mt-1 text-black">
                  Low top Sneakers
                </h5>
                <div className="rate flex text-orange-400 -mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </a>
          <div className="info mt-8 text-gray-500  text-start">
            <p>
              From creepeth said moved given divide make multiply of him shall
              itself also above second doesn't unto created saying land herb sea
              midst night wherein.
            </p>
            <p className="text-gray-500 mt-4 text-start">
              <a href="linkedin.com/in/agasefamircan">
                <b> Agasef Amircan</b>
              </a>{" "}
              , 09 sep 2022
            </p>
          </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>  <div className="cursor-grab comment-2 p-8 w-80 h-80 border">
          <a href="/product">
            <div className="head flex">
              <img
                src="	https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-14.jpg"
                style={{ width: "70px", height: "70px" }}
                className="text-start flex justify-start items-start"
                alt=""
              />
              <div className="flex flex-col ml-6">
                <h6 className="text-gray-500 text-start">Shoes</h6>
                <h5 className="font-medium text-lg -mt-1 text-black">
                  Low top Sneakers
                </h5>
                <div className="rate flex text-orange-400 -mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </a>
          <div className="info mt-8 text-gray-500  text-start">
            <p>
              From creepeth said moved given divide make multiply of him shall
              itself also above second doesn't unto created saying land herb sea
              midst night wherein.
            </p>
            <p className="text-gray-500 mt-4 text-start">
              <a href="linkedin.com/in/agasefamircan">
                <b> Agasef Amircan</b>
              </a>{" "}
              , 09 sep 2022
            </p>
          </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>  <div className="cursor-grab comment-3 p-8 w-80 h-80 border">
          <a href="/product">
            {" "}
            <div className="head flex">
              <img
                src="	https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-15.jpg"
                style={{ width: "70px", height: "70px" }}
                className="text-start flex justify-start items-start"
                alt=""
              />
              <div className="flex flex-col ml-6">
                <h6 className="text-gray-500 text-start">Shoes</h6>
                <h5 className="font-medium text-lg -mt-1 text-black">
                  Low top Sneakers
                </h5>
                <div className="rate flex text-orange-400 -mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </a>
          <div className="info mt-8 text-gray-500  text-start">
            <p>
              From creepeth said moved given divide make multiply of him shall
              itself also above second doesn't unto created saying land herb sea
              midst night wherein.
            </p>
            <p className="text-gray-500 mt-4 text-start">
              <a href="linkedin.com/in/agasefamircan">
                <b> Agasef Amircan</b>
              </a>{" "}
              , 09 sep 2022
            </p>
          </div>
        </div>
    </SwiperSlide>
      <SwiperSlide>  <div className="cursor-grab comment-3 p-8 w-80 h-80 border">
          <a href="/product">
            {" "}
            <div className="head flex">
              <img
                src="	https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-18.jpg"
                style={{ width: "70px", height: "70px" }}
                className="text-start flex justify-start items-start"
                alt=""
              />
              <div className="flex flex-col ml-6">
                <h6 className="text-gray-500 text-start">Shoes</h6>
                <h5 className="font-medium text-lg -mt-1 text-black">
                  Low top Sneakers
                </h5>
                <div className="rate flex text-orange-400 -mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </a>
          <div className="info mt-8 text-gray-500  text-start">
            <p>
              From creepeth said moved given divide make multiply of him shall
              itself also above second doesn't unto created saying land herb sea
              midst night wherein.
            </p>
            <p className="text-gray-500 mt-4 text-start">
              <a href="linkedin.com/in/agasefamircan">
                <b> Agasef Amircan</b>
              </a>{" "}
              , 09 sep 2022
            </p>
          </div>
        </div>
    </SwiperSlide>
      </div>
      </Swiper>
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
        className="mySwiper h-96 mobile " >
      <div className="comments mr-[13%] ml-[13%] flex justify-between flex-wrap">
       <SwiperSlide> <div className=" cursor-grab comment-1 p-8 w-80 h-80 border">
          <a href="/product">
            {" "}
            <div className="head flex">
              <img
                src="	https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-13.jpg"
                style={{ width: "70px", height: "70px" }}
                className="text-start flex justify-start items-start"
                alt=""
              />
              <div className="flex flex-col ml-6">
                <h6 className="text-gray-500 text-start">Shoes</h6>
                <h5 className="font-medium text-lg -mt-1 text-black">
                  Low top Sneakers
                </h5>
                <div className="rate flex text-orange-400 -mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </a>
          <div className="info mt-8 text-gray-500  text-start">
            <p>
              From creepeth said moved given divide make multiply of him shall
              itself also above second doesn't unto created saying land herb sea
              midst night wherein.
            </p>
            <p className="text-gray-500 mt-4 text-start">
              <a href="linkedin.com/in/agasefamircan">
                <b> Agasef Amircan</b>
              </a>{" "}
              , 09 sep 2022
            </p>
          </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>  <div className="cursor-grab comment-2 p-8 w-80 h-80 border">
          <a href="/product">
            <div className="head flex">
              <img
                src="	https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-14.jpg"
                style={{ width: "70px", height: "70px" }}
                className="text-start flex justify-start items-start"
                alt=""
              />
              <div className="flex flex-col ml-6">
                <h6 className="text-gray-500 text-start">Shoes</h6>
                <h5 className="font-medium text-lg -mt-1 text-black">
                  Low top Sneakers
                </h5>
                <div className="rate flex text-orange-400 -mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </a>
          <div className="info mt-8 text-gray-500  text-start">
            <p>
              From creepeth said moved given divide make multiply of him shall
              itself also above second doesn't unto created saying land herb sea
              midst night wherein.
            </p>
            <p className="text-gray-500 mt-4 text-start">
              <a href="linkedin.com/in/agasefamircan">
                <b> Agasef Amircan</b>
              </a>{" "}
              , 09 sep 2022
            </p>
          </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>  <div className="cursor-grab comment-3 p-8 w-80 h-80 border">
          <a href="/product">
            {" "}
            <div className="head flex">
              <img
                src="	https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-15.jpg"
                style={{ width: "70px", height: "70px" }}
                className="text-start flex justify-start items-start"
                alt=""
              />
              <div className="flex flex-col ml-6">
                <h6 className="text-gray-500 text-start">Shoes</h6>
                <h5 className="font-medium text-lg -mt-1 text-black">
                  Low top Sneakers
                </h5>
                <div className="rate flex text-orange-400 -mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </a>
          <div className="info mt-8 text-gray-500  text-start">
            <p>
              From creepeth said moved given divide make multiply of him shall
              itself also above second doesn't unto created saying land herb sea
              midst night wherein.
            </p>
            <p className="text-gray-500 mt-4 text-start">
              <a href="linkedin.com/in/agasefamircan">
                <b> Agasef Amircan</b>
              </a>{" "}
              , 09 sep 2022
            </p>
          </div>
        </div>
    </SwiperSlide>
      <SwiperSlide>  <div className="cursor-grab comment-3 p-8 w-80 h-80 border">
          <a href="/product">
            {" "}
            <div className="head flex">
              <img
                src="	https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-18.jpg"
                style={{ width: "70px", height: "70px" }}
                className="text-start flex justify-start items-start"
                alt=""
              />
              <div className="flex flex-col ml-6">
                <h6 className="text-gray-500 text-start">Shoes</h6>
                <h5 className="font-medium text-lg -mt-1 text-black">
                  Low top Sneakers
                </h5>
                <div className="rate flex text-orange-400 -mt-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </a>
          <div className="info mt-8 text-gray-500  text-start">
            <p>
              From creepeth said moved given divide make multiply of him shall
              itself also above second doesn't unto created saying land herb sea
              midst night wherein.
            </p>
            <p className="text-gray-500 mt-4 text-start">
              <a href="linkedin.com/in/agasefamircan">
                <b> Agasef Amircan</b>
              </a>{" "}
              , 09 sep 2022
            </p>
          </div>
        </div>
    </SwiperSlide>
      </div>
      </Swiper>
    </div>
  );
};

export default Feedback;
