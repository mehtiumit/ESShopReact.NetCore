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
    const data = [
      {
        title: "Keşfet",
        icon: <HomeFilled style={{ fontSize: "24px" }} />,
      },
      {
        title: "Hakkında",
        icon: <InfoCircleFilled style={{ fontSize: "24px" }} />,
      },
      {
        title: "Şartlar ve koşullar",
        icon: <ReadFilled style={{ fontSize: "24px" }} />,
      },
      {
        title: "Gizlilik Politikası",
        icon: <InsuranceFilled style={{ fontSize: "24px" }} />,
      },
    ];
    return (
      <Drawer
        title="Hesabım"
        placement="right"
        closable={false}
        onClose={this.props.onShow}
        visible={true}
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
          <Link to="/login" onClick={this.props.onShow}>
            Giriş Yapmak İçin
          </Link>
        </div>
        <Divider style={{ backgroundColor: "green" }} />
        <List
          itemLayout="horizontal"
          dataSource={data}
          style={{ width: "100%", marginTop: "5px", marginLeft: "5px" }}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={item.icon}
                title={<Link to="/">{item.title}</Link>}
              />
            </List.Item>
          )}
        />
      </Drawer>
    );
  }
}

export default ProfileForNotLogin;
