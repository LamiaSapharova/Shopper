import React,{useEffect, useState} from "react";
import { Form, Input, Select, Row } from 'antd';
import axios from 'axios';
const { Option } = Select;
function PersonalInfo() {
    let my_date = new Date(2004,2,31);
    const [data,setData] = useState({
        first_name: '',
        last_name:'',
        DofB: my_date
    });
    useEffect(()=>{
        async function getData(){
          let b =  await axios.get('http://localhost:8080/me',{
                withCredentials: true,
                headers: { "Access-Control-Allow-Origin": "localhost:3000",withCredentials:true, 'Access-Control-Allow-Credentials': true,'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' }
              });
              console.log(b.data);
             let a =  new Date(b.data.DofB);
             setData({
                first_name: b.data.first_name,
                last_name: b.data.last_name,
                DofB: a,
             });
        }
        getData();
        console.log(data)
    },[]);


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    let days = Array(31).fill(0).map((e, i) => {
        return <Option key={i + 1} value={i + 1}> {i + 1} </Option>
    });
    let month = ["January", "February", "Marth", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let months = month.map((e, i) => {
        return <Option key={i + 1} value={e}> {e} </Option>
    })
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();
    let year = Array(currentYear - 1899).fill(0).map((e, i) => {
        return <Option key={i + 1} value={currentYear - i}>{currentYear - i}</Option>
    })
    return (
        <Form
        
            style={{ width: "70%" }}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
        >
            <Row>
                <Form.Item
                    label="First Name"
                    name="firstname"
                    initialValue={data.first_name}
                    style={{ width: "45%" }}
                    wrapperCol={{ sm: { span: 22, offset: 0 } }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your firstname!',
                        },
                    ]}
                >
                    <Input size="large" placeholder="First Name*" />
                </Form.Item>
                <Form.Item
                    // style={{display:"flex",flexDirection:"column",alignItems}}
                    label="Last Name"
                    name="lastname"
                    initialValue={data.last_name}
                    style={{ width: "45%" }}
                    wrapperCol={{ sm: { span: 22, offset: 0 } }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your lastname!',
                        },
                    ]}
                >
                    <Input size="large" value={'askjdasjkd'} placeholder="Last Name*" />
                </Form.Item>
            </Row>
            <Row>
                <Form.Item
                    label="Current Password"
                    name="currentPassword"

                    style={{ width: "45%" }}
                    wrapperCol={{ sm: { span: 22, offset: 0 } }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your current password!',
                        },
                    ]}
                >
                    <Input.Password size="large" placeholder="Current Password*" />
                </Form.Item>
                <Form.Item
                    label="New Password"
                    name="newPassword"
                    style={{ width: "45%" }}
                    wrapperCol={{ sm: { span: 22, offset: 0 } }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your new password!',
                        },
                    ]}
                >
                    <Input.Password size="large" style={{}} placeholder="New Password*" />
                </Form.Item>
            </Row>
            <Form.Item
                label={"Date of Birth"}
                style={{width:"45%"}}
                wrapperCol={{
                    offset: 0,
                    span: 22,
                }}
                
            >

                <Row>
                    <Form.Item
                        initialValue={data.DofB.getDay()}
                        style={{ width: "113px", marginRight:"10px" }}
                        name="day"
                        rules={[
                            {
                                required: true,
                                message: 'Input Bithdate!',
                            },
                        ]}
                    >

                        <Select size="large" placement="topLeft" style={{ width: "110px" }}>
                            {days}
                        </Select>

                    </Form.Item>
                    <Form.Item
                        initialValue={month[data.DofB.getMonth()]}
                        name={"month"}
                        style={{ width: "113px",marginRight:"10px" }}
                        rules={[
                            {
                                required: true,
                                message: 'Input your bithdate!',
                            },
                        ]}
                    >

                        <Select style={{ width: "110px" }} size="large" >
                            {months}
                        </Select>

                    </Form.Item>
                    <Form.Item initialValue={data.DofB.getFullYear()}
                        name={"year"}
                        style={{ width: "113px" }}
                        rules={[
                            {
                                required: true,
                                message: 'Input something!',
                            },
                        ]}
                    >

                        <Select style={{ width: "110px" }} size="large" >{year}</Select>

                    </Form.Item>

                </Row>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 0,
                    span: 5,
                }}
            >
                <button onClick={()=>{}} style={{cursor:"pointer", width: "100%", backgroundColor: "black", color: "white", boxSizing: "border-box",  padding: "12px" }}>
                    Save Changes
                </button>
            </Form.Item>

        </Form>
    );
}
export default PersonalInfo;