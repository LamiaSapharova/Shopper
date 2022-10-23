import React from "react";
import { Form, Input, Row } from "antd";

function addAddressForm() {
  return (
    <>
      <Form.Item
        // style={{display:"flex",flexDirection:"column",alignItems}}
        label="Country"
        name="country"
        style={{ width: "94%" }}
        wrapperCol={{ sm: { span: 22, offset: 0 } }}
        rules={[
          {
            required: true,
            message: "Please input your Country!",
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
            message: "Please input your address!",
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
              message: "Please input your city!",
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
              message: "Please input your ZIP / postcode!",
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
            message: "Please input your mobile phone!",
          },
          {},
        ]}
      >
        <Input
          size="large"
          placeholder="055-555-55-55"
          type="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
        />
      </Form.Item>
    </>
  );
}
export default addAddressForm;
