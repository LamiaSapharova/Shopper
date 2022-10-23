import React from "react";
import './orderDetails.css'
function OrderDetails() {
    let cartPStyle = { fontSize: "14px", color: "rgb(100,100,100)", margin: "0px" }
    return (
        <div className="orderlist" style={{ width: "70%", }}>
            <div style={{
                padding: "35px",
                border: "1px solid rgb(229,229,229)",
                marginBottom: "20px"
            }}>
                <div  style={{ display: "flex", marginBottom: "30px", alignItmes: "center", padding: "20px", justifyContent: "space-between", backgroundColor: 'rgb(245,245,245)', padding: "15px", color: "rgb(31,31,31)" }}>
                    <div><h5 style={{ color: "rgb(118,118,118)" }}>ORDER NO:</h5><p style={{ fontWeight: 600, fontSize: "16px" }}>My content</p></div>
                    <div><h5 style={{ color: "rgb(118,118,118)" }}>SHIPPED DATE:</h5><p style={{ fontWeight: 600, fontSize: "16px !important" }}>My content</p></div>
                    <div><h5 style={{ color: "rgb(118,118,118)" }}>STATUS:</h5><p style={{ fontWeight: 600, fontSize: "16px" }}>My content</p></div>
                    <div><h5 style={{ color: "rgb(118,118,118)" }}>ORDER AMOUNT:</h5><p style={{ fontWeight: 600, fontSize: "16px" }}>My content</p></div>
                </div>
                <h2 style={{ marginBottom: "30px" }}>Order Items ({3})</h2>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "20px 0px", borderTop: "1px solid rgb(229,229,229)", }}>
                    <div style={{ width: "75px", height: "100px", backgroundColor: "rgb(100,100,100)", marginRight: "25px" }}></div>
                    <div>
                        <h3 style={{ marginBottom: "0px" }}>Cotton floral print Dress x 1</h3>
                        <strong style={{ color: "rgb(160,160,160)", display: "block", marginBottom: "20px" }}>$40.00</strong>
                        <p style={{ color: "rgb(160,160,160)", margin: "0px" }}>Size M</p>
                        <p style={{ color: "rgb(160,160,160)", margin: "0px" }}>Color: Red</p>
                    </div>

                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "20px 0px", borderTop: "1px solid rgb(229,229,229)", }}>
                    <div style={{ width: "75px", height: "100px", backgroundColor: "rgb(100,100,100)", marginRight: "25px" }}></div>
                    <div>
                        <h3 style={{ marginBottom: "0px" }}>Cotton floral print Dress x 1</h3>
                        <strong style={{ color: "rgb(160,160,160)", display: "block", marginBottom: "20px" }}>$40.00</strong>
                        <p style={{ color: "rgb(160,160,160)", margin: "0px" }}>Size M</p>
                        <p style={{ color: "rgb(160,160,160)", margin: "0px" }}>Color: Red</p>
                    </div>

                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "20px 0px", borderTop: "1px solid rgb(229,229,229)", }}>
                    <div style={{ width: "75px", height: "100px", backgroundColor: "rgb(100,100,100)", marginRight: "25px" }}></div>
                    <div>
                        <h3 style={{ marginBottom: "0px" }}>Cotton floral print Dress x 1</h3>
                        <strong style={{ color: "rgb(160,160,160)", display: "block", marginBottom: "20px" }}>$40.00</strong>
                        <p style={{ color: "rgb(160,160,160)", margin: "0px" }}>Size M</p>
                        <p style={{ color: "rgb(160,160,160)", margin: "0px" }}>Color: Red</p>
                    </div>

                </div>
            </div>
            <div style={{
                padding: "35px",
                border: "1px solid rgb(229,229,229)",
                marginBottom: "20px"
            }}>
                <h2>Order Total</h2>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "16px", padding: "20px 0px", borderBottom: "1px solid rgb(229,229,229)" }}><span>Subtotal</span><span>$128.00</span></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "16px", padding: "20px 0px", borderBottom: "1px solid rgb(229,229,229)" }}><span>Tax</span><span>$0.00</span></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "16px", padding: "20px 0px", borderBottom: "1px solid rgb(229,229,229)" }}><span>Shipping</span><span>$8.00</span></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "18px", fontWeight: 500, padding: "20px 0px" }}><span>Total</span><span>$136.00</span></div>
            </div>
            <div style={{
                padding: "35px",
                border: "1px solid rgb(229,229,229)",
            }}>
                <h2 style={{ marginBottom: "20px" }}>Shipping Details</h2>
                <div style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start"}}>
                    <div style={{marginRight:"150px"}}>
                        <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>Shipping Address:</h4>
                        <p style={{ fontSize: "14px", color: "rgb(100,100,100)", margin: "0px" }}>Daniel Robinson</p>
                        <p style={cartPStyle}>2997 Raccon Run</p>
                        <p style={cartPStyle}>Kingston</p>
                        <p style={cartPStyle}>45644</p>
                        <p style={cartPStyle}>United States</p>
                        <p style={cartPStyle}>6146389574</p>
                    </div>
                    <div>
                        <div style={{marginBottom:"20px"}}>
                            <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>Shipping Method:</h4>
                            <pre style={{ fontSize: "14px", color: "rgb(100,100,100)", margin: "0px" }}>
                                Standart Shipping {'\n'}
                                (5 - 7 days)
                            </pre>
                        </div>
                        <div>
                            <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>Payment Method:</h4>
                            <p style={{ fontSize: "14px", color: "rgb(100,100,100)", margin: "0px" }}>
                                Debit Mastercard
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrderDetails