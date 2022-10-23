import React from "react";
import { Card } from "antd"
import { NavLink,  } from "react-router-dom";
function Orders() {

  return (
    // <div className="card card-lg mb-5 border">
    //       <div className="card-body pb-0">

    //         {/* <!-- Info --> */}
    //         <div className="card card-sm">
    //           <div className="card-body bg-light">
    //             <div className="row">
    //               <div className="col-6 col-lg-3">

    //                 {/* <!-- Heading --> */}
    //                 <h6 className="heading-xxxs text-muted">Order No:</h6>

    //                 {/* <!-- Text --> */}
    //                 <p className="mb-lg-0 fs-sm fw-bold">
    //                   673290789
    //                 </p>

    //               </div>
    //               <div className="col-6 col-lg-3">

    //                 {/* <!-- Heading --> */}
    //                 <h6 className="heading-xxxs text-muted">Shipped date:</h6>

    //                 {/* <!-- Text --> */}
    //                 <p className="mb-lg-0 fs-sm fw-bold">
    //                   <time dateTime="2019-10-01">
    //                     01 Oct, 2019
    //                   </time>
    //                 </p>

    //               </div>
    //               <div className="col-6 col-lg-3">

    //                 {/* <!-- Heading --> */}
    //                 <h6 className="heading-xxxs text-muted">Status:</h6>

    //                 {/* <!-- Text --> */}
    //                 <p className="mb-0 fs-sm fw-bold">
    //                   Awating Delivery
    //                 </p>

    //               </div>
    //               <div className="col-6 col-lg-3">

    //                 {/* <!-- Heading --> */}
    //                 <h6 className="heading-xxxs text-muted">Order Amount:</h6>

    //                 {/* <!-- Text --> */}
    //                 <p className="mb-0 fs-sm fw-bold">
    //                   $259.00
    //                 </p>

    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //       </div>
    //       <div className="card-footer">
    //         <div className="row align-items-center">
    //           <div className="col-12 col-lg-6">
    //             <div className="row gx-5 mb-4 mb-lg-0">
    //               <div className="col-3">

    //                 {/* <!-- Image --> */}
    //                 <div className="ratio ratio-1x1 bg-cover" ></div>

    //               </div>
    //               <div className="col-3">

    //                 {/* <!-- Image --> */}
    //                 <div className="ratio ratio-1x1 bg-cover" ></div>

    //               </div>
    //               <div className="col-3">

    //                 {/* <!-- Image --> */}
    //                 <div className="ratio ratio-1x1 bg-cover" ></div>

    //               </div>
    //               <div className="col-3">

    //                 {/* <!-- Image --> */}
    //                 <div className="ratio ratio-1x1 bg-light">
    //                   <a className="ratio-item ratio-item-text text-reset" href="#!">
    //                     <div className="fs-xxs fw-bold">
    //                       +2 <br/> more
    //                     </div>
    //                   </a>
    //                 </div>

    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-12 col-lg-6">
    //             <div className="row gx-5">
    //               <div className="col-6">

    //                 {/* <!-- Button --> */}
    //                 <a className="btn btn-sm w-100 btn-outline-dark" href="account-order.html">
    //                   Order Details
    //                 </a>

    //               </div>
    //               <div className="col-6">

    //                 {/* <!-- Button --> */}
    //                 <a className="btn btn-sm w-100 btn-outline-dark" href="#!">
    //                   Track order
    //                 </a>

    //               </div>
    //             </div>

    //           </div>
    //         </div>
    //       </div>
    //     </div>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", flexShrink: "0", width: "75%" }}>
      <Card
        style={{
          width: "70%",
          padding: "10px",
          border: "1px solid rgb(229,229,229)",
          marginBottom: "20px"
        }}
      >
        <div style={{ display: "flex", alignItmes: "center", justifyContent: "space-between", backgroundColor: 'rgb(245,245,245)', padding: "15px", color: "rgb(31,31,31)" }}>
          <div><h5 style={{ color: "rgb(118,118,118)" }}>ORDER NO:</h5><p style={{ fontWeight: 600, fontSize: "16px" }}>My content</p></div>
          <div><h5 style={{ color: "rgb(118,118,118)" }}>SHIPPED DATE:</h5><p style={{ fontWeight: 600, fontSize: "16px" }}>My content</p></div>
          <div><h5 style={{ color: "rgb(118,118,118)" }}>STATUS:</h5><p style={{ fontWeight: 600, fontSize: "16px" }}>My content</p></div>
          <div><h5 style={{ color: "rgb(118,118,118)" }}>ORDER AMOUNT:</h5><p style={{ fontWeight: 600, fontSize: "16px" }}>My content</p></div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "30px" }}>
          <div>
            <div style={{ width: "60px", height: "60px", backgroundColor: 'rgb(245,245,245)' }}></div>
          </div>
          <div>
            <NavLink to="/myaccount/order/1" state={{}} style={{ padding: "10px 15px", color: "black", backgroundColor: "#fff", border: "black 1px solid", fontWeight: 600, fontSize: "16px" }}
              onMouseOver={function (e) { e.target.style.color = "#fff"; e.target.style.backgroundColor = "black" }}
              onMouseOut={(e) => { e.target.style.color = "black"; e.target.style.backgroundColor = "#fff" }}>Order Details</NavLink>
          </div>
        </div>
      </Card>
      <Card
        style={{
          width: "70%",
          padding: "10px",
          border: "1px solid rgb(229,229,229)",
          marginBottom: "20px"
        }}
      >
        <div style={{ display: "flex", alignItmes: "center", justifyContent: "space-between", backgroundColor: 'rgb(245,245,245)', padding: "15px", color: "rgb(31,31,31)" }}>
          <div><h5 style={{ color: "rgb(118,118,118)" }}>ORDER NO:</h5><p style={{ fontWeight: 600, fontSize: "16px" }}>My content</p></div>
          <div><h5 style={{ color: "rgb(118,118,118)" }}>SHIPPED DATE:</h5><p style={{ fontWeight: 600, fontSize: "16px" }}>My content</p></div>
          <div><h5 style={{ color: "rgb(118,118,118)" }}>STATUS:</h5><p style={{ fontWeight: 600, fontSize: "16px" }}>My content</p></div>
          <div><h5 style={{ color: "rgb(118,118,118)" }}>ORDER AMOUNT:</h5><p style={{ fontWeight: 600, fontSize: "16px" }}>My content</p></div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "30px" }}>
          <div>
            <div style={{ width: "60px", height: "60px", backgroundColor: 'rgb(245,245,245)' }}></div>
          </div>
          <div>
            <NavLink to="/myaccount/order/2" style={{ padding: "10px 15px", color: "black", backgroundColor: "#fff", border: "black 1px solid", fontWeight: 600, fontSize: "16px" }}
              onMouseOver={function (e) { e.target.style.color = "#fff"; e.target.style.backgroundColor = "black" }}
              onMouseOut={(e) => { e.target.style.color = "black"; e.target.style.backgroundColor = "#fff" }}>Order Details</NavLink>
          </div>
        </div>
      </Card>

    </div>
  )
}
export default Orders