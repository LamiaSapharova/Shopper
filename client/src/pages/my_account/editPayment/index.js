import React from "react";
import { Form, Input,  Select,  Row, Checkbox } from 'antd';
const { Option } = Select;
function editPayment() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    let months = ["January", "February", "Marth", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((e, i) => {
        return <Option key={i + 1} value={e}> {e} </Option>
    })
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();
    let year = Array(15).fill(0).map((e, i) => {
        return <Option key={i + 1} value={currentYear + i}>{currentYear + i}</Option>
    })
    return (
        <div style={{ width: "70%" }}>
            <h1 style={{ fontSize: "24px" }}>Edit Debit / Credit Card</h1>
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
                        label="Card Number"
                        name="cardnumber"
                        style={{ width: "45%" }}
                        wrapperCol={{ sm: { span: 22, offset: 0 } }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Card Number!',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="Card Number" />
                    </Form.Item>
                    <Form.Item
                        // style={{display:"flex",flexDirection:"column",alignItems}}
                        label="Name on Card"
                        name="nameoncard"
                        style={{ width: "45%" }}
                        wrapperCol={{ sm: { span: 22, offset: 0 } }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Name on Card!',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="Name on Card" />
                    </Form.Item>
                </Row>
                <Form.Item
                    label={"Expiry Date *"}
                    style={{ width: "94%",marginBottom:"0px" }}
                    wrapperCol={{
                        offset: 0,
                        span: 22,
                    }}

                >

                    <Row style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Form.Item
                            initialValue={"January"}
                            name={"month"}
                            style={{ width: "30%", marginRight: "10px" }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input your bithdate!',
                                },
                            ]}
                        >

                            <Select style={{ width: "95%" }} size="large" >
                                {months}
                            </Select>

                        </Form.Item>
                        <Form.Item initialValue={currentYear}
                            name={"year"}
                            style={{ width: "30%", marginRight: "10px" }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input year!',
                                },
                            ]}
                        >

                            <Select style={{ width: "95%", }} size="large" >{year}</Select>

                        </Form.Item>
                        <Form.Item
                            name={"CCV"}
                            style={{ width: "30%" }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input CCV!',
                                },
                            ]}
                        >
                            <Input style={{ width: "100%" }} size="large" placeholder="CCV *" />
                        </Form.Item>

                    </Row>
                </Form.Item>
                <Form.Item name={"DefaultPaymentMethod"} valuePropName="checked" style={{ margin: "5px" }}>
                    <Checkbox style={{ fontSize: "16px", color: "rgb(116,116,116)", marginBottom: "20px" }}>Default payment method</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 0,
                        span: 5,
                    }}
                >
                    <button onClick={() => { }} style={{ cursor: "pointer", width: "100%", backgroundColor: "black", color: "white", boxSizing: "border-box", padding: "12px" }}>
                        Edit Card
                    </button>
                </Form.Item>

            </Form>
        </div>
    )
};
export default editPayment;