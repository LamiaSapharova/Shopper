import React from 'react'
import './Footer.css'
import {
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaInstagram,
    FaMedium
  } from "react-icons/fa";
  import MasterCard from '../../asset/images/mastercard.svg'
  import Visa from '../../asset/images/visa.svg'
  import Amex from '../../asset/images/amex.svg'
  import Paypal from '../../asset/images/paypal.svg'
  import Maestro from '../../asset/images/maestro.svg'
  import Klarna from '../../asset/images/klarna.svg'
const Footer = () => {
  return (
        <footer className="bg-black bg-cover" style={{'background':'#202020'}}>
        <div className='flex flex-col'>
            <div className="text-center text-white mb-7 mt-24">
                <h2 className='text-2xl font-medium'>Want style Ideas and Treats?</h2>
            </div>
            <div className=" mr-[31.5%]  ml-[31.5%] h-14 flex">
                <input type="email" placeholder="Enter Email  *" className="w-[75%] flex justify-items-start h-full px-7 py-3" style={{'background':'#303030'}} />
                <button type="submit" className="btn bg-gray-500 text-white" style={{"marginLeft":'15px','background':'#525252'}}>Subscribe</button>
            </div>
        </div>
        <div className="flex categorydeanchor py-16 justify-between  mr-[13%] ml-[13%]">
           <div >
            <h4 className="text-white mb-6 text-3xl font-medium text-start">Shopper.</h4>
            <div className=' flex text-gray-400 text-2xl'>
                <FaFacebook className='mr-2'/>
                <FaYoutube className='mr-2'/>
                <FaTwitter className='mr-2'/>
                <FaInstagram className='mr-2'/>
                <FaMedium className='mr-2'/>
            </div>
           </div>
           <div className="flex flex-col">
                <h5 className="text-white">SUPPORT</h5>
                <div className="flex flex-col">
                    <a href="#">Contact Us</a>
                    <a href="#">FAQs</a>
                    <a href="#">Size Guide</a>
                    <a href="#">Shipping & Returns</a>
                </div>
           </div>
           <div className="flex flex-col">
            <h5 className="text-white">SHOP</h5>
            <div className="flex flex-col">
                <a href="#">Men`s Shopping</a>
                <a  href="#">Women`s Shopping</a>
                <a href="#">Kids`s Shopping</a>
                <a  href="#">Discounts</a>
            </div>
           </div>
           <div className="flex flex-col">
                <h5 className="text-white">COMPANY</h5>
                <div className="flex flex-col">
                    <a href="#">Our Story</a>
                    <a href="#">Careers</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy & Cookie policy</a>
                </div>
           </div>
           <div className="flex flex-col">
                <h5 className="text-white">CONTACT</h5>
                <div className="flex flex-col">
                    <a  href="#">+99-470-777-77-77</a>
                    <a href="#">+99-470-777-77-77</a>
                    <a href="#">help@shopper.com</a>
                </div>
           </div>
        </div>
        <hr className='' style={{'borderColor':'#484848'}} />
        <div className=' flex justify-between py-6  mr-[11%] ml-[13%] text-start text-gray-500 font-medium  text-lg'>
            <p className='
            text-muted'>© 2022 All rights reserved. Designed by IATC Team.</p>
            <div className="flex gap-2">
              <a href="#"><img src={MasterCard} alt="" /></a>
              <a href="#"><img src={Visa} alt="" /></a>
              <a href="#"><img src={Amex} alt="" /></a>
              <a href="#"><img src={Paypal} alt="" /></a>
              <a href="#"><img src={Maestro} alt="" /></a>
              <a href="#"><img src={Klarna} alt="" /></a>
            </div>
        </div>
    </footer>
  )
}
export default Footer