import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
function PaymentMethods() {
    let cartStyle = { width: "48%", boxSizing: "border-box", padding: "25px", backgroundColor: "rgb(200,200,200)", marginBottom: "10px" }
    let cartPStyle = { fontSize: "16px", color: "rgb(100,100,100)", margin: "0px", marginBottom: "15px" }
    let cartH5Style = { fontWeight: 500, fontSize: "15px", color: "black", margin: "0px" };
    return (
        <div style={{ width: "65%" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "20px" }}>
                <div style={{ width: "350px", position: "relative", boxSizing: "border-box", padding: "25px", backgroundColor: "rgb(230,230,230)", marginBottom: "2vw" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h4 style={{ fontSize: "20px", marginBottom: "10px" }}>Debit / Credit Card</h4>
                        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", }}>
                            <Link to='/myaccount/payment/edit/1' style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color: "black", marginRight: "5px", width: "35px", height: "35px", cursor: "pointer", border: "none", borderRadius: "50%", backgroundColor: "white", }}
                                onMouseOver={(e) => {
                                    e.preventDefault()
                                    e.currentTarget.style.color = "#fff";
                                    e.currentTarget.style.backgroundColor = "rgb(255,111,97)"
                                    e.currentTarget.firstElementChild.style.borderColor = "#fff"
                                    e.currentTarget.firstElementChild.style.backgroundColor = "rgb(255,111,97)"
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.color = "black";
                                    e.currentTarget.style.backgroundColor = "white"
                                    e.currentTarget.firstElementChild.style.borderColor = "black"
                                    e.currentTarget.firstElementChild.style.backgroundColor = "white"
                                }}
                                onClick={() => {

                                }}
                            >
                                <FiEdit2 />
                            </Link>

                            <button style={{ width: "35px", height: "35px", cursor: "pointer", border: "none", borderRadius: "50%", backgroundColor: "white", }}
                                onMouseOver={(e) => {
                                    e.target.style.color = "#fff";
                                    e.target.style.backgroundColor = "rgb(255,111,97)"
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.color = "black";
                                    e.target.style.backgroundColor = "white"

                                }}
                                onClick={() => {

                                }}
                            >
                                X
                            </button>
                        </div>
                    </div>
                    <h5 style={{ fontWeight: 500, fontSize: "15px", color: "black", margin: "0px" }}>Card Number:</h5>
                    <p style={cartPStyle}>4242......7856 (Mastercad)</p>
                    <h5 style={cartH5Style}>Expiry Date:</h5>
                    <p style={cartPStyle}>Feb 2022</p>
                    <h5 style={cartH5Style}>Name on Card:</h5>
                    <p style={cartPStyle}>Daniel Robinson</p>
                </div>
            </div>
            <Link to="/myaccount/payment/add" style={{
                width: "100%", backgroundColor: "white", display: "block", textAlign: "center", color: "black",
                border: "1px solid rgb(211,211,211)", cursor: "pointer",
                padding: "20px", fontSize: "16px", fontWeight: 500


            }} onMouseOut={(e) => { e.target.style.borderColor = "rgb(211,211,211)" }}
                onMouseOver={(e) => { e.target.style.borderColor = "black" }}>Add Payment Method +</Link>
        </div>
    )
}
export default PaymentMethods;