import React from "react";
import { Form, Input, Row, Checkbox } from 'antd';
function editAddress() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={{ width: "70%" }}>
            <h1 style={{ fontSize: "24px" }}>Edit Address</h1>
            <Form
                style={{ width: "100%" }}
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
                        style={{ width: "45%" }}
                        wrapperCol={{ sm: { span: 22, offset: 0 } }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your lastname!',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="Last Name*" />
                    </Form.Item>
                </Row>
                <Form.Item
                    // style={{display:"flex",flexDirection:"column",alignItems}}
                    label="Email Address"
                    name="email"
                    style={{ width: "94%" }}
                    wrapperCol={{ sm: { span: 22, offset: 0 } }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input size="large" placeholder="Email Address*" />
                </Form.Item>
                <Form.Item
                    // style={{display:"flex",flexDirection:"column",alignItems}}
                    label="Company Name"
                    name="companyname"
                    style={{ width: "94%" }}
                    wrapperCol={{ sm: { span: 22, offset: 0 } }}

                >
                    <Input size="large" placeholder="Company Name" />
                </Form.Item>
                <Form.Item
                    // style={{display:"flex",flexDirection:"column",alignItems}}
                    label="Country"
                    name="country"
                    style={{ width: "94%" }}
                    wrapperCol={{ sm: { span: 22, offset: 0 } }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Country!',
                        },
                    ]}
                >
                    <Input size="large" placeholder="Country*" />
                </Form.Item>
                <Form.Item
                    // style={{display:"flex",flexDirection:"column",alignItems}}
                    label="Address Line 1 "
                    name="address1"
                    style={{ width: "94%" }}
                    wrapperCol={{ sm: { span: 22, offset: 0 } }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your address!',
                        },
                    ]}
                >
                    <Input size="large" placeholder="Address Line 1*" />
                </Form.Item>
                <Form.Item
                    // style={{display:"flex",flexDirection:"column",alignItems}}
                    label="Address Line 2"
                    name="address2"
                    style={{ width: "94%" }}
                    wrapperCol={{ sm: { span: 22, offset: 0 } }}

                >
                    <Input size="large" placeholder="Address Line 2" />
                </Form.Item>
                <Row>
                    <Form.Item
                        label="Town / City"
                        name="city"
                        style={{ width: "45%" }}
                        wrapperCol={{ sm: { span: 22, offset: 0 } }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your city!',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="Town / City*" />
                    </Form.Item>
                    <Form.Item
                        // style={{display:"flex",flexDirection:"column",alignItems}}
                        label="ZIP / Postcode"
                        name="zip"
                        style={{ width: "45%" }}
                        wrapperCol={{ sm: { span: 22, offset: 0 } }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your ZIP / postcode!',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="ZIP / Postcode*" />
                    </Form.Item>
                </Row>
                <Form.Item
                    // style={{display:"flex",flexDirection:"column",alignItems}}
                    label="Mobile Phone"
                    name="mobile"
                    style={{ width: "94%" }}
                    wrapperCol={{ sm: { span: 22, offset: 0 } }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your mobile phone!',
                        }, {

                        }
                    ]}
                >
                    <Input size="large" placeholder="055-555-55-55" type="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" />
                </Form.Item>
                <Form.Item name={"DefaultDelivery"} valuePropName="checked" style={{ margin: "5px" }}>
                    <Checkbox style={{ fontSize: "16px", color: "rgb(116,116,116)", }}>Default delivery address</Checkbox>
                </Form.Item>
                <Form.Item name={"DefaultShipping"} valuePropName="checked" style={{ margin: "5px" }}>
                    <Checkbox style={{ fontSize: "16px", color: "rgb(116,116,116)", marginBottom: "20px" }}>Default shipping address</Checkbox>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 0,
                        span: 5,
                    }}
                >
                    <button onClick={() => { }} style={{ cursor: "pointer", width: "100%", backgroundColor: "black", color: "white", boxSizing: "border-box", padding: "12px" }}>
                        Edit Address
                    </button>
                </Form.Item>

            </Form>
        </div>
    )
}
export default editAddress;