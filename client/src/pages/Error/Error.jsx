import React from 'react'
import Promo from '../../components/Promo/Promo'
import Head from '../../components/Header/Head'
import Footer from '../../components/Footer/Footer'
// import Modal from '../../components/Modal'
const Error = () => {
  return (
    <>
    <Promo/>
    <Head/>
    <div className='flex flex-col justify-center items-center py-24'>
         <h1 className='text-5xl mb-8'>🙁</h1>
        <h1 className='text-4xl font-medium mb-5'>404. Page not found.</h1>
        <p className='mb-7 text-gray-500'>Sorry, we couldn't find the page you where looking for. We suggest that you <br /> <span className='pl-[36%]'>return to home page.</span> </p>
        <a href="/home" className='py-3 px-4 bg-black text-white text-base font-medium'> Go to homepage</a>
        </div>
        {/* <Modal/> */}
    <Footer/>
    </>
  )
}

export default Error