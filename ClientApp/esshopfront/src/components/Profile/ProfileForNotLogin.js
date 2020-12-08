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
class ProfileForNotLogin extends Component {
  render() {
    const profileData = [
      {
        title: "Keşfet",
        icon: <HomeFilled style={{ fontSize: "24px" }} />,
        dest: "/",
        onClick: () => this.props.onShow(),
      },
      {
        title: "Hakkında",
        icon: <InfoCircleFilled style={{ fontSize: "24px" }} />,
        dest: "/about",
        onClick: () => this.props.onShow(),
      },
      {
        title: "Şartlar ve koşullar",
        icon: <ReadFilled style={{ fontSize: "24px" }} />,
        dest: "/termsandcontitions",
        onClick: () => this.props.onShow(),
      },
      {
        title: "Gizlilik Politikası",
        icon: <InsuranceFilled style={{ fontSize: "24px" }} />,
        dest: "/privacypolicy",
        onClick: () => this.props.onShow(),
      },
    ];
    return (
      <Drawer
        title="Hesabım"
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
            Giriş Yapmak İçin
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

export default ProfileForNotLogin;
