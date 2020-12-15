import React, { Component } from "react";
import { Row, Col, Menu } from "antd";
import { ProfileOutlined } from "@ant-design/icons";
import { BiCartAlt } from "react-icons/bi";
import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";

class ProfileContainer extends Component {
  state = {
    isProfile: true,
  };

  profileHandler = () => {
    this.setState({ isProfile: true });
  };
  orderHandler = () => {
    this.setState({ isProfile: false });
  };
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        <Row>
          <Row style={{ margin: "auto" }}>
            <Menu mode="horizontal">
              <Menu.Item
                key="mail"
                onClick={() => this.profileHandler()}
                icon={<ProfileOutlined />}
              >
                Profile
              </Menu.Item>
              <Menu.Item
                key="app"
                icon={<BiCartAlt />}
                onClick={() => this.orderHandler()}
              >
                My Orders
              </Menu.Item>
            </Menu>
          </Row>
        </Row>
        <Row
          style={{
            width: "100%",
            minHeight: "100vh",
            height: "auto",
          }}
        >
          <Col span={4}></Col>
          <Col span={16}>
            {this.state.isProfile ? (
              <ProfileInfo userData={this.props.userData} />
            ) : (
              <p>Order</p>
            )}
          </Col>
          <Col span={4}></Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.authReducer.user,
  };
};

export default connect(mapStateToProps)(ProfileContainer);
