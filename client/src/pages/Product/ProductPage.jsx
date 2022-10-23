import React from 'react'
import Promo from '../../components/Promo/Promo'
import Head from '../../components/Header/Head'
import Info from '../../components/Info'
import Footer from '../../components/Footer/Footer'
import Product from '../../components/Products/Product'
const ProductPage = () => {
  return (
    <>
    <Promo/>
    <Head/>
    <Product/>
    <Info/>
    <Footer/>
    </>
  )
}

export default ProductPage