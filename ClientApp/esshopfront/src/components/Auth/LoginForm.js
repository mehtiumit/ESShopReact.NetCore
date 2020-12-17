import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import * as authActions from "../../redux/actions/authActions";
import { connect } from "react-redux";

class LoginForm extends Component {
  state = {
    auth: {
      eMail: "",
      password: "",
    },
    hover: false,
  };
  handleMouseEnter = () => {
    this.setState({ hover: true });
  };
  handleMouseLeave = () => {
    this.setState({ hover: false });
  };
  handleChange = (e) => {
    this.setState({
      ...this.state,
      auth: {
        ...this.state.auth,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const onFinish = () => {
      const { password, eMail } = this.state.auth;
      this.props.login(password, eMail);
      this.props.onShowModal();
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    const { hover } = this.state;
    const { eMail, password } = this.state.auth;
    return (
      <div style={{ marginTop: "5%", width: "auto", height: "auto" }}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            style={{ marginLeft: "20%", width: "296px", height: "42px" }}
          >
            <Input
              name="eMail"
              placeholder="Email"
              value={eMail}
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            style={{ marginLeft: "20%", width: "296px", height: "42px" }}
          >
            <Input.Password
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              icon={<LoginOutlined />}
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
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (eMail, password) => dispatch(authActions.login(eMail, password)),
  };
};
export default connect(null, mapDispatchToProps)(LoginForm);
