import React from 'react'
import Category from '../../components/Category/Category'
import Promo from '../../components/Promo/Promo'
import Head from '../../components/Header/Head'
import Discount from '../../components/Discount'
import Footer from '../../components/Footer/Footer'
const Categories = () => {
  return (
     <div className="category">
        <Promo/>
        <Head/>
        <Discount/>
        <Category/>
        <Footer/>
     </div>
  )
}

export default Categories