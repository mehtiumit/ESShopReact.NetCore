import React, { Component } from "react";
import { Drawer, Avatar, List, Divider, Typography } from "antd";
import {
  UserOutlined,
  HomeFilled,
  InfoCircleFilled,
  ReadFilled,
  InsuranceFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Text } = Typography;
class ProfileForNotLoginDrawer extends Component {
  render() {
    const profileData = [
      {
        title: "All Products",
        icon: <HomeFilled style={{ fontSize: "24px" }} />,
        dest: "/",
        onClick: () => this.props.onShow(),
      },
      {
        title: "About",
        icon: <InfoCircleFilled style={{ fontSize: "24px" }} />,
        dest: "/about",
        onClick: () => this.props.onShow(),
      },
      {
        title: "Terms and Conditions",
        icon: <ReadFilled style={{ fontSize: "24px" }} />,
        dest: "/termsandcontitions",
        onClick: () => this.props.onShow(),
      },
      {
        title: "Privacy Policy",
        icon: <InsuranceFilled style={{ fontSize: "24px" }} />,
        dest: "/privacypolicy",
        onClick: () => this.props.onShow(),
      },
    ];
    return (
      <Drawer
        title="My Account"
        placement="right"
        closable={false}
        onClose={this.props.onShow}
        visible={this.props.onShow}
        key="right"
        bodyStyle={{ padding: "10px" }}
      >
        <div style={{ marginLeft: "0px", marginTop: "5px", width: "100%" }}>
          <Avatar
            shape="circle"
            size={{ xs: 32, sm: 40, md: 48, lg: 72, xl: 88, xxl: 108 }}
            icon={<UserOutlined />}
            style={{ display: "block" }}
          />
          <Text>Giriş Yapmadın</Text>
          <br></br>
          <Link
            style={{ color: "#faad14" }}
            to="/login"
            onClick={this.props.onShow}
          >
            For Login
          </Link>
        </div>
        <Divider style={{ backgroundColor: "green" }} />
        <List
          itemLayout="horizontal"
          dataSource={profileData}
          style={{ width: "100%", marginTop: "5px", marginLeft: "5px" }}
          renderItem={(item) => (
            <List.Item onClick={() => item.onClick()}>
              <List.Item.Meta
                avatar={item.icon}
                title={<Link to={item.dest}>{item.title}</Link>}
              />
            </List.Item>
          )}
        />
      </Drawer>
    );
  }
}

export default ProfileForNotLoginDrawer;
