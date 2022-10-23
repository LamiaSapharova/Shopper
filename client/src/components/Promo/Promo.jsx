import React from "react";
import truck from '../../asset/images/truck.svg'
import usa from '../../asset/images/usa.svg';
import canada from  '../../asset/images/canada.svg';
import germany from '../../asset/images/germany.svg'
import './Promo.css'
import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMedium,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
  // FaTruck,
} from "react-icons/fa";
const Promo = () => {
  const [nav, setNav] = useState(true);
  const [chev, setChev] = useState(true);
  const [chev2, setChev2] = useState(true);
  const [chev3, setChev3] = useState(true);
  return (
    <>
      <div className="bg">
        <div className="responsive">
          <span className="truck">
            <img className=" pr-2" src={truck} alt="" /> FREE SHIPPING WORLDWIDE
          </span>
          <button className="" onClick={() => setNav(!nav)}>
            {!nav ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div className={`promo close ${!nav ? "block" : "hidden"}`}>
        <div className="sec-1 ">
          <span id="truck">
            <img className="pr-2" src={truck} alt="" /> FREE SHIPPING WORLDWIDE
          </span>
          <span className="chev">
            <span className="cursor-pointer" onClick={() => setChev(!chev)}>
              <img src={usa} alt="" />
              United States
              {chev ? <FaChevronDown /> : <FaChevronUp />}
            </span>
            <span className="chevdown">
              <p
                className={` ${
                  !chev ? "block" : "hidden"
                } ml-3 font-mono text-sm flex pt-2 pb-2 mb-0`}
              >
                {" "}
                <img src={usa} alt="" className="pr-2 object-none" /> United States
              </p>
              <p
                className={` ${
                  !chev ? "block" : "hidden"
                } ml-3 font-mono text-sm flex pt-2 pb-2 mb-0`}
              >
                {" "}
                <img src={canada} alt="" className="pr-2 object-none" /> Canada
              </p>
              <p
                className={` ${
                  !chev ? "block" : "hidden"
                } ml-3 font-mono text-sm flex pt-2 pb-2 mb-0`}
              >
                {" "}
                <img src={germany} alt="" className="pr-2 object-none" /> Germany
              </p>
            </span>
          </span>
          <span className="curr">
            <span className="cursor-pointer" onClick={() => setChev2(!chev2)}>
              USD {chev2 ? <FaChevronDown /> : <FaChevronUp />}
            </span>
            <span className="currency">
              <p
                className={` ${
                  !chev2 ? "block" : "hidden"
                } ml-3 font-mono text-sm flex pt-2 pb-2`}
              >
                USD
              </p>
              <p
                className={` ${
                  !chev2 ? "block" : "hidden"
                } ml-3 font-mono text-sm flex pt-2 pb-2`}
              >
                EUR
              </p>
            </span>
          </span>
          <span className="lang">
            <span className="cursor-pointer" onClick={() => setChev3(!chev3)}>
              English {chev3 ? <FaChevronDown /> : <FaChevronUp />}
            </span>
            <span className="language">
              <p
                className={`${
                  !chev3 ? "block" : "hidden"
                } font-mono text-sm pt-2 pb-2`}
              >
                English
              </p>
              <p
                className={`${
                  !chev3 ? "block" : "hidden"
                } font-mono text-sm pt-2 pb-2`}
              >
                French
              </p>
              <p
                className={`${
                  !chev3 ? "block" : "hidden"
                } font-mono text-sm pt-2 pb-2`}
              >
                German
              </p>
            </span>
          </span>
        </div>
        <div className="sec-2 ">
          <div className="sec-2-1">
            <a href="/shipping" className="text-black">Shipping</a>
            <a href="/fag" className="text-black"> FAG</a>
            <a href="/contact" className="text-black"> Contact</a>
          </div>
          <div className="sec-2-2 ">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaMedium />
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
