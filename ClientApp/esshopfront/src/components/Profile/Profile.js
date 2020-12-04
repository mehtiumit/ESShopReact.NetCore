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
export default class Profile extends Component {
  render() {
    const data = [
      {
        title: "Keşfet",
        icon: <HomeFilled size={20} />,
      },
      {
        title: "Hakkında",
        icon: <InfoCircleFilled size={20} />,
      },
      {
        title: "Şartlar ve koşullar",
        icon: <ReadFilled />,
      },
      {
        title: "Gizlilik Politikası",
        icon: <InsuranceFilled />,
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
          <Text type="warning">Şimdi Giriş Yap</Text>
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
