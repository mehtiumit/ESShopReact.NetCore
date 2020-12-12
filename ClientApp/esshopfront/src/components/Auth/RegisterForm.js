import React, { Component } from "react";
import { Form, Input, Button, notification } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Axios from "axios";

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
    hover: false,
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
  handleMouseEnter = () => {
    this.setState({ hover: true });
  };
  handleMouseLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    const onFinish = () => {
      Axios.post("/auth/register", this.state.registerData)
        .then((res) => {
          notification.info({
            message: "Kayıt işlemi başarıyla tamamlandı",
            placement: "bottomRight",
          });
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
    const { hover } = this.state;
    return (
      <div style={{ marginTop: "5%" }}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="userName"
            style={{ marginLeft: "20%", width: "296px", height: "42px" }}
          >
            <Input
              name="userName"
              value={userName}
              onChange={this.handleChange}
              placeholder="isim"
            />
          </Form.Item>
          <Form.Item
            name="lastname"
            style={{ marginLeft: "20%", width: "296px", height: "42px" }}
          >
            <Input
              name="userSurname"
              value={userSurname}
              onChange={this.handleChange}
              placeholder="Soyisim"
            />
          </Form.Item>
          <Form.Item
            name="email"
            style={{ marginLeft: "20%", width: "296px", height: "42px" }}
          >
            <Input
              name="eMail"
              value={eMail}
              onChange={this.handleChange}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            style={{ marginLeft: "20%", width: "296px", height: "42px" }}
          >
            <Input
              style={{ width: "100%" }}
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleChange}
              placeholder="Telefon Numarası"
            />
          </Form.Item>
          <Form.Item
            name="password"
            style={{ marginLeft: "20%", width: "296px", height: "42px" }}
          >
            <Input.Password
              onChange={this.handleChange}
              value={password}
              name="password"
              placeholder="Şifre"
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                marginLeft: "20%",
                color: "white",
                backgroundColor: "black",
                borderColor: "black",
                width: "296px",
                height: "42px",
                ...(hover && {
                  backgroundColor: "white",
                  color: "black",
                }),
              }}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              icon={<PlusOutlined />}
              type="primary"
              htmlType="submit"
            >
              Kaydol
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
