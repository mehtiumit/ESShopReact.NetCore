import React, { Component } from "react";
import { Form, Input, Button, Select, notification } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import classes from "./RegisterForm.module.css";
import Axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 12, span: 12 },
};
export default class RegisterForm extends Component {
  componentDidMount() {
    console.log("props", this.props);
  }
  state = {
    registerData: {
      userName: "",
      userSurname: "",
      eMail: "",
      phoneNumber: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      registerData: {
        ...this.state.registerData,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const onFinish = () => {
      Axios.post("/auth/register", this.state.registerData)
        .then((res) => {
          notification.info({
            message: "Kayıt işlemi başarıyla tamamlandı",
            placement: "bottomRight",
          });
          this.props.history.push("/login");
          console.log("Res", res.headers);
          console.log("res data", res.data);
        })
        .catch((err) => {
          notification.warning({
            message: "Kayıt işlemi sırasında hata oldu",
            placement: "bottomRight",
          });
          console.log("err", err);
        });
      console.log("State:", this.state.registerData);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    const {
      userName,
      userSurname,
      eMail,
      phoneNumber,
      password,
    } = this.state.registerData;
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
              name="userName"
              rules={[{ required: true, message: "Lütfen İsminizi Giriniz" }]}
            >
              <Input
                name="userName"
                value={userName}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item
              label="Soyisim"
              name="lastname"
              rules={[
                { required: true, message: "Lütfen Soyisminizi Giriniz" },
              ]}
            >
              <Input
                name="userSurname"
                value={userSurname}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item
              label="E-Mail"
              name="email"
              rules={[
                { required: true, message: "Lütfen E-Mail Adresinizi Giriniz" },
              ]}
            >
              <Input name="eMail" value={eMail} onChange={this.handleChange} />
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
              <Input
                style={{ width: "100%" }}
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name="password"
              rules={[{ required: true, message: "Lütfen Şifrenizi Giriniz" }]}
            >
              <Input.Password
                onChange={this.handleChange}
                value={password}
                name="password"
              />
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
