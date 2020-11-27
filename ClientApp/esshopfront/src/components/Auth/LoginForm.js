import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import classes from "./RegisterForm.module.css";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 12, span: 12 },
};
export default class LoginForm extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
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
              label="E-Mail"
              name="email"
              rules={[
                { required: true, message: "Lütfen Soyisminizi Giriniz" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name="password"
              rules={[{ required: true, message: "Lütfen Şifrenizi Giriniz" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button icon={<LoginOutlined />} type="primary" htmlType="submit">
                Giriş
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
