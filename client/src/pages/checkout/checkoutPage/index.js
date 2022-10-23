// import React, { useState, useEffect } from "react";
import AddAddressForm from "../../../components/AddAddressForm/addAddressForm";
import Pulsayan from "../../../components/PulSayan/pulSayan";
import Form from "antd/lib/form/Form";
function Checkout() {
  const onFinish = (values) => {
    values = { total: 4000, ...values };
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ paddingBottom: "100px" }}>
      <div style={{ marginBottom: "50px", marginTop: "50px" }}>
        <h1 style={{ textAlign: "center" }}>Checkout</h1>
      </div>
      <Form
        id="check"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingLeft: "130px",
          paddingRight: "130px",
        }}
      >
        <div style={{ flexBasis: "60%" }}>
          <div>
            <h2 style={{ marginBottom: "30px" }}>Shipping Details</h2>
            <AddAddressForm />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ flexBasis: "35%", flexShrink: 0 }}>
          <div>
            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ marginBottom: "30px" }}>Order Items ({3})</h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "20px 0px",
                  borderTop: "1px solid rgb(229,229,229)",
                }}
              >
                <div
                  style={{
                    width: "75px",
                    height: "100px",
                    backgroundColor: "rgb(100,100,100)",
                    marginRight: "25px",
                  }}
                ></div>
                <div>
                  <h3 style={{ marginBottom: "0px" }}>
                    Cotton floral print Dress x 1
                  </h3>
                  <strong
                    style={{
                      color: "rgb(160,160,160)",
                      display: "block",
                      marginBottom: "20px",
                    }}
                  >
                    $40.00
                  </strong>
                  <p style={{ color: "rgb(160,160,160)", margin: "0px" }}>
                    Size M
                  </p>
                  <p style={{ color: "rgb(160,160,160)", margin: "0px" }}>
                    Color: Red
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "20px 0px",
                  borderTop: "1px solid rgb(229,229,229)",
                }}
              >
                <div
                  style={{
                    width: "75px",
                    height: "100px",
                    backgroundColor: "rgb(100,100,100)",
                    marginRight: "25px",
                  }}
                ></div>
                <div>
                  <h3 style={{ marginBottom: "0px" }}>
                    Cotton floral print Dress x 1
                  </h3>
                  <strong
                    style={{
                      color: "rgb(160,160,160)",
                      display: "block",
                      marginBottom: "20px",
                    }}
                  >
                    $40.00
                  </strong>
                  <p style={{ color: "rgb(160,160,160)", margin: "0px" }}>
                    Size M
                  </p>
                  <p style={{ color: "rgb(160,160,160)", margin: "0px" }}>
                    Color: Red
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "20px",
              backgroundColor: "rgb(245,245,245)",
              marginBottom: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "16px",
                padding: "10px 0px",
                borderBottom: "1px solid rgb(229,229,229)",
              }}
            >
              <span>Subtotal</span>
              <span>$128.00</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "16px",
                padding: "10px 0px",
                borderBottom: "1px solid rgb(229,229,229)",
              }}
            >
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "16px",
                padding: "10px 0px",
                borderBottom: "1px solid rgb(229,229,229)",
              }}
            >
              <span>Shipping</span>
              <span>$8.00</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "18px",
                fontWeight: 500,
                padding: "10px 0px",
              }}
            >
              <span>Total</span>
              <span>$136.00</span>
            </div>
          </div>
          <p>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>

          <button
            form="check"
            type="submit"
            onClick={(e) => {}}
            style={{
              cursor: "pointer",
              width: "100%",
              backgroundColor: "black",
              color: "white",
              boxSizing: "border-box",
              padding: "12px",
            }}
          >
            Place Order
          </button>
        </div>
      </Form>
    </div>
  );
}
export default Checkout;
