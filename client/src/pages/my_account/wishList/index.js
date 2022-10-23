import React, { useEffect, useState,useRef } from "react";
import { Card, Modal, Radio, InputNumber, Space } from "antd";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { BsCart2 } from "react-icons/bs"
const { Meta } = Card
function Wishlist() {
    const [color, setColor] = useState("white");
    const [size, setSize] = useState('m')
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [product,setProduct] = useState({inventory:[],sizearray:[]});
    const [image,setImage] = useState('');
    let isFirt = useRef(true);


    useEffect(() => {
        let mydata = axios.get('http://localhost:8080/api/wishlist', {
            withCredentials: true,
            headers: { "Access-Control-Allow-Origin": "localhost:3000", withCredentials: true, 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' }
        }).then(r => r).then(
                (r) => {
                    if (r.data.length > 0)
                        setData(r.data);
                }
            );
        isFirt.current = false;
    }, []);

    const showModal = (id) => {
        return async ()=>{
            await axios.get(`http://localhost:8080/api/product/${id}`,{
                withCredentials: true,
                headers: { "Access-Control-Allow-Origin": "localhost:3000", withCredentials: true, 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' }
            }).then(r => r).then(
                (r) => {
                    setProduct(r.data);
                    setImage(r.data.inventory[0].images[0]);
                    setColor(r.data.inventory[0].color);
                    setSize(r.data.sizearray[0]);
                }
            );
            setOpen(true);
        }
    };



    const handleCancel = (e) => {
        console.log(e.currentTarget)
        setOpen(false);
    };
    return (
        <>
            <div style={{ width: "70%", display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                {data.length > 0 ? data.map((e) => {
                    return (
                        <Card key={e._id}


                            onMouseOver={(e) => {
                                e.currentTarget.firstElementChild.firstElementChild.lastElementChild.style.opacity = "1";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.firstElementChild.firstElementChild.lastElementChild.style.opacity = "0"
                            }}
                            hoverable
                            style={{
                                width: '240px',
                                cursor: "default",
                                marginBottom: '25px'
                            }}

                            cover={
                                <div style={{position: "relative", width: "240px", height: "300px", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${e.image})`, padding: '0px' }}>
                                    <button style={{ position: "absolute", left: "185px", width: "35px", height: "35px", cursor: "pointer", border: "none", borderRadius: "50%", backgroundColor: "white", marginTop: "20px", marginRight: "20px" }}
                                        onMouseOver={(e) => {
                                            e.target.style.color = "#fff";
                                            e.target.style.backgroundColor = "rgb(255,111,97)"
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = "black";
                                            e.target.style.backgroundColor = "white"
                                        }}
                                        onClick={((a) => {
                                            return async () => {
                                                try{
                                                    await axios.delete(`http://localhost:8080/api/wishlist/${a}`, {
                                                        withCredentials: true,
                                                        headers: { "Access-Control-Allow-Origin": "localhost:3000", withCredentials: true, 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' }
                                                    });
                                                    let newData=[];
                                                    for (let i = 0; i < data.length; i++) {
                                                        if(data[i].product_id!=a){
                                                            newData.push(data[i]);
                                                        }
                                                        
                                                    }
                                                    setData(newData);
                                                } catch(e){
                                                    console.log(e);
                                                }
                                                
                                            }
                                        })(e.product_id)}
                                    >
                                        X
                                    </button>
                                    <button onClick={showModal(e.product_id)} style={{ width: "100%", backgroundColor: "black", color: "white", boxSizing: "border-box", opacity: "0", transitionDelay: "0s", transitionDuration: "0.3s", cursor: "pointer", transitionTimingFunction: "ease", transitionProperty: "opacity", padding: "8px", position: "absolute", bottom: "0" }}>
                                        <FontAwesomeIcon icon={faEye} style={{ color: 'white', marginRight: "10px" }} />
                                        Quick view
                                    </button>
                                </div>}
                        >
                            <Meta title={<Link style={{ color: "black", width:'150px',display:'inline-block' }} to={`/product/${e.product_id}}`}>{`${e.name}`}</Link>} description={`$${e.price}`} style={{ textAlign: "center", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }} />
                        </Card>
                    )
                }) : <h2 style={{ textAlign: 'center', flexShrink: 0, flexBasis: '100%' }}> your wishlist is empty</h2>}



            </div>
            <Modal
                centered
                width={1000}
                open={open}
                onCancel={handleCancel}
                footer={null}
                bodyStyle={{ padding: "0px" }}
            >
                <div style={{ height: "600px", display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>
                    <div style={{ width: "40%", flexShrink: "0", height: "100%", backgroundColor: "rgb(100,100,100)",backgroundImage:`url(${image})`,backgroundSize:'cover', position: "relative" }}>
                        <Link to={`/product/${product._id}`}
                            style={{ position: "absolute", bottom: 0, width: "100%", cursor: "pointer", padding: "13px 24px", textAlign: "center", backgroundColor: "rgb(255,111,97)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", border: "none", color: "white", fontWeight: 500 }}
                            onMouseOver={(e) => {
                                e.currentTarget.backgroundColor = "#e66457"
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.backgroundColor = "#ff6f61"
                            }}>
                            More Product Info <AiOutlineInfoCircle style={{ color: "white", marginLeft: "8px" }} />
                        </Link >
                    </div>
                    <form action="" method='post' onSubmit={(async (e)=>{
                        e.preventDefault();
                        console.log(e.target[e.target.length - 2].value);
                        await axios.post('http://localhost:8080/api/cart',{
                            product_id: product._id,
                            color: color,
                            count: e.target[e.target.length - 2].value,
                            size: size
                        },{
                            withCredentials: true,
                            headers: { "Access-Control-Allow-Origin": "localhost:3000", withCredentials: true, 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' }
                        })
                    })} style={{ padding: "50px 40px" }}>
                        <h3 style={{ fontWeight: "500", fontSize: "28px", marginBottom: "1px" }}>{product.name}</h3>
                        <h4 style={{ fontWeight: "500", fontSize: "24px", marginBottom: "32px" }} > {`$${product.total}`} <span style={{ fontSize: "15px", fontWeight: "400" }}> (In Stock) </span></h4>
                        <h5 style={{ fontSize: "16px", marginBottom: "24px", }}> Color:<strong style={{ marginLeft: "6px" }}>{color}</strong></h5>
                        <Radio.Group onChange={
                            (e) => { setColor(e.target.value);
                                product.inventory.forEach(element => {
                                    if(element.color == e.target.value){
                                        setImage(element.images[0]);
                                    }
                                });
                             }} 
                             defaultValue={product.inventory[0]?.color}
                             style={{ marginBottom: "40px" }}>
                            {product.inventory.map((e,i)=>{
                               return( <Radio.Button key={i} autoFocus={false}  value={e.color} style={{ width: "50px", height: "50px", padding: "0px", margin: "0px", backgroundColor: "white", marginRight: "5px",backgroundSize: 'cover',backgroundImage:`url(${e.images[0]})` } }></Radio.Button>)
                            })}

                        </Radio.Group>
                        <h5 style={{ fontSize: "16px", marginBottom: "24px", }}> Size:<strong style={{ marginLeft: "6px" }}>{size} US</strong></h5>
                        <Radio.Group onChange={(e) => { setSize(e.target.value); }} defaultValue="White" style={{ marginBottom: "24px" }}>
                            
                            {
                                [...new Set(product.sizearray)].map(
                                    (element,i)=>{
                                        console.log(element)
                                        return(
                                            <Radio.Button key={i} value={element} style={{ height: "45px", verticalAlign: "center", fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>{element}</Radio.Button>
                                        )
                                    }
                                )
                            }

                        </Radio.Group>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                            <Space >
                                <InputNumber style={{ padding: "8.5px" }} min={1} max={20} defaultValue={1} onChange={() => { }} />
                            </Space>
                            <button onClick={() => { }} style={{ marginLeft: "39px", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "300px", backgroundColor: "black", color: "white", boxSizing: "border-box", padding: "12px", cursor: "pointer" }}>
                                Add To Cart
                                <BsCart2 style={{ fontSize: "18px", marginLeft: "5px" }} />
                            </button>

                        </div>
                    </form>
                </div>

            </Modal>
        </>
    )
}
export default Wishlist;