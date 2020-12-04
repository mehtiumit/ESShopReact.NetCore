import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import classes from "./RegisterForm.module.css";
import * as authActions from "../../redux/actions/authActions";
import { connect } from "react-redux";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 12, span: 12 },
};
class LoginForm extends Component {
  state = {
    auth: {
      eMail: "",
      password: "",
    },
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
      this.props.history.push("/");
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const { eMail, password } = this.state.auth;
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
              <Input name="eMail" value={eMail} onChange={this.handleChange} />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name="password"
              rules={[{ required: true, message: "Lütfen Şifrenizi Giriniz" }]}
            >
              <Input.Password
                name="password"
                value={password}
                onChange={this.handleChange}
              />
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

const mapDispatchToProps = (dispatch) => {
  return {
    login: (eMail, password) => dispatch(authActions.login(eMail, password)),
  };
};
export default connect(null, mapDispatchToProps)(LoginForm);
