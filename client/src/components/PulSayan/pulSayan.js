import React from 'react'

function Pulsayan() {
  return (
    <div className="costrow">
          {" "}
          <div className="Total">
            <div className="subtotal">
              Subtotal
              <p>
                {/* {selproducts.reduce((sum, object) => {
                  return sum + object.price;
                }, 0)} */}
                {'price'}$
              </p>
            </div>
            <div className="tax">
              Tax
              <p>00.00$</p>
            </div>
            <div className="total">
              <h3>Total</h3>
              <p>{'price'}$</p>
            </div>
            <p className="p">Shipping cost calculated at Checkout *</p>
          </div>
          <button>Proceed to Checkout</button>
          <div className="coun">
            {" "}
            <a href="/"> {`< `}Continue Shopping</a>
          </div>
        </div>
  )
}

export default Pulsayan