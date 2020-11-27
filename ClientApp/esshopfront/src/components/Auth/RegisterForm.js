import React, { Component } from "react";
import { Form, Input, Button, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import classes from "./RegisterForm.module.css";
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 12, span: 12 },
};
export default class RegisterForm extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="90">+90</Option>
          <Option value="1">+1</Option>
          <Option value="44">+44</Option>
        </Select>
      </Form.Item>
    );
    return (
      <div className={classes.container}>
        <div className={classes.fix}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="İsim"
              name="name"
              rules={[{ required: true, message: "Lütfen İsminizi Giriniz" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Soyisim"
              name="lastname"
              rules={[
                { required: true, message: "Lütfen Soyisminizi Giriniz" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-Mail"
              name="email"
              rules={[
                { required: true, message: "Lütfen E-Mail Adresinizi Giriniz" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Telefon Numarası"
              rules={[
                {
                  required: true,
                  message: "Lütfen Telefon Numaranızı Giriniz",
                },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name="password"
              rules={[{ required: true, message: "Lütfen Şifrenizi Giriniz" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button icon={<PlusOutlined />} type="primary" htmlType="submit">
                Kaydol
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
