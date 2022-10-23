import React from "react";
import { Breadcrumb, Layout, Menu, Tabs, } from "antd";
import { NavLink, Outlet,useNavigate } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute";
import axios from "axios";
const { Content, Footer, Header, } = Layout;

function MyAccount() {
const navigate = useNavigate();

  async function handleLogout(){
   let data =  await axios.post('http://localhost:8080/logout',{},{
      withCredentials: true,
      headers: { "Access-Control-Allow-Origin": "localhost:3000",'withCredentials':true, 'Access-Control-Allow-Credentials': true,'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' }
    }).then(r=>r);
    navigate('/login')
  }

  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  return (
    <ProtectedRoute>
      <Layout style={{ backgroundColor: "#fff" }}>
        <Content
          style={{
            padding: '0 50px',
          }}
        >
          
          <Layout
            className="site-layout-background"
            style={{
              padding: '24px 0',
              backgroundColor: "white"

            }}
          >
            <h1 style={{ textAlign: "center", fontSize: "32px", fontWeight: 700, marginBottom: "50px" }}>My Account</h1>
            {/* <Tabs            
              tabPosition={"left"}
              items={[{
                label: "Orders", key: "orders", children: <Orders />
              }, {
                label: "Wishlist", key: "wishlist", children: <Wishlist />
              }, {
                label: "Personal info", key: "personalinfo", children: <PersonalInfo />
              }, {
                label: "Adresses", key: "adresses", children: <Adresses />
              }, {
                label: "Payment Methods", key: "payment", children: <PaymentMethods />
              }, {
                label: "Logout", key: "logout", children: ""

              }
              ]}
            /> */}
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start"}}>
              <nav style={{display:"flex",flexDirection:"column",alignItems:'flex-start',justifyContent:"flex-start",marginRight:"150px"}}>
                <NavLink style={{color:"rgb(31,31,31)",borderBottom:"1px solid rgb(229,229,229)",borderTop:"1px solid rgb(229,229,229)",display:"block",width:"100%",padding:"15px 0",fontSize:"16px"}} to='orders'>Orders</NavLink>
                <NavLink style={{color:"rgb(31,31,31)",borderBottom:"1px solid rgb(229,229,229)",borderTop:"1px solid rgb(229,229,229)",display:"block",width:"100%",padding:"15px 0",fontSize:"16px"}} to='wishlist'>Wishlist</NavLink>
                <NavLink style={{color:"rgb(31,31,31)",borderBottom:"1px solid rgb(229,229,229)",borderTop:"1px solid rgb(229,229,229)",display:"block",width:"100%",padding:"15px 0",fontSize:"16px"}} to='personalinfo'>Personal info</NavLink>
                <NavLink style={{color:"rgb(31,31,31)",borderBottom:"1px solid rgb(229,229,229)",borderTop:"1px solid rgb(229,229,229)",display:"block",width:"100%",padding:"15px 0",fontSize:"16px"}} to='adresses'>Addresses</NavLink>
                <NavLink style={{color:"rgb(31,31,31)",borderBottom:"1px solid rgb(229,229,229)",borderTop:"1px solid rgb(229,229,229)",display:"block",width:"100%",padding:"15px 0",fontSize:"16px"}} to='payment'>Payment Methods</NavLink>
                <button 
                style={{ cursor:'pointer', color:"rgb(31,31,31)",borderBottom:"1px solid rgb(229,229,229)",borderTop:"1px solid rgb(229,229,229)",display:"block",width:"100%",padding:"15px 0",fontSize:"16px",borderLeft:'none',borderRight:'none',backgroundColor:'#fff',textAlign:'left'}} 
                onClick={handleLogout}>Logout</button>
              </nav>
              <Outlet />
            </div>

          </Layout>
        </Content>

      </Layout>



    </ProtectedRoute>
  )
}
export default MyAccount