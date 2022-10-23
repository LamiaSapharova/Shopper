import React from 'react'
import '../../pages/About/About.css'

const imagesSection = () => {
  return (
    <div className="container">
    <div className="images-section">
      <div className="image">
        <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-116.jpg" />
        <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-117.jpg" />
      </div>
      <div className="image">
        <img
          className="img-right"
          src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-118.jpg"
        />
        <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-119.jpg" />
      </div>
    </div>
  </div>
  )
}

export default imagesSection