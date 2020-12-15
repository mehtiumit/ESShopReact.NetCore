import React, { Component } from "react";
import { Row, Col, Form, Input, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

class ProfileInfo extends Component {
  state = {
    hover: false,
    isEdit: false,
    user: {
      userName: "",
      userSurname: "",
      eMail: "",
      address: "",
      phoneNumber: "",
    },
  };
  componentDidMount() {
    console.log("this.props", this.props);
    this.setState({ user: this.props.userData });
  }
  componentDidUpdate() {}

  handleMouseEnter = () => {
    this.setState({ hover: true });
  };
  handleMouseLeave = () => {
    this.setState({ hover: false });
  };
  handleChange = (e) => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const { hover } = this.state;
    const { isEdit } = this.state;
    const {
      userName,
      userSurname,
      eMail,
      phoneNumber,
      address,
    } = this.state.user;
    return (
      <Row
        justify="center"
        style={{
          margin: "0",
          padding: "0",
          left: "50%",
          top: "50%",
          position: "absolute",
          WebkitTransform: "translate(-50%,-50%)",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Col>
          <Form
            {...layout}
            style={{
              minWidth: "50vh",
            }}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Col style={{ marginBottom: "25px" }}>
              <Row justify="center">
                <Avatar size={99} icon={<UserOutlined />} />
              </Row>
            </Col>
            <Form.Item label="Name">
              <Input
                onChange={this.handleChange}
                disabled={!isEdit}
                name="userName"
                value={userName}
              />
            </Form.Item>
            <Form.Item label="Surname">
              <Input
                onChange={this.handleChange}
                disabled={!isEdit}
                name="userSurname"
                value={userSurname}
              />
            </Form.Item>
            <Form.Item label="E-Mail">
              <Input
                onChange={this.handleChange}
                disabled={!isEdit}
                name="eMail"
                value={eMail}
              />
            </Form.Item>
            <Form.Item label="Adress">
              <Input
                onChange={this.handleChange}
                disabled={!isEdit}
                name="adress"
                value={address}
              />
            </Form.Item>
            <Form.Item label="Phone">
              <Input
                onChange={this.handleChange}
                disabled={!isEdit}
                name="phoneNumber"
                value={phoneNumber}
              />
            </Form.Item>
            <Col>
              <Row justify="center">
                <Form.Item>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      borderColor: "black",
                      width: "110px",
                      height: "42px",
                      ...(hover && {
                        backgroundColor: "white",
                        color: "black",
                      }),
                    }}
                    onClick={() => this.setState({ isEdit: !isEdit })}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                  >
                    {isEdit ? "Save" : "Edit"}
                  </Button>
                </Form.Item>
              </Row>
            </Col>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default ProfileInfo;
