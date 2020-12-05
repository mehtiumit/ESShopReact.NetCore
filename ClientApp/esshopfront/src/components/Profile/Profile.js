import React, { Component } from "react";
import { Drawer, Avatar, List, Divider, Typography } from "antd";
import {
  UserOutlined,
  HomeFilled,
  InfoCircleFilled,
  ReadFilled,
  InsuranceFilled,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
const { Text } = Typography;
class Profile extends Component {
  render() {
    const data = [
      {
        title: "Keşfet",
        icon: <HomeFilled style={{ fontSize: "24px" }} />,
      },
      {
        title: "Profilim",
        icon: <UserOutlined style={{ fontSize: "24px" }} />,
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
      {
        title: "Çıkış Yap",
        icon: <CloseCircleOutlined style={{ fontSize: "24px" }} />,
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
          <Text>Hoş Geldiniz Sayın</Text>
          <br></br>
          <Text type="warning">{this.props.userData.userName}</Text>
        </div>
        <Divider style={{ backgroundColor: "green" }} />
        <List
          itemLayout="horizontal"
          dataSource={data}
          style={{ width: "100%", marginTop: "5px", marginLeft: "5px" }}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta avatar={item.icon} title={item.title} />
            </List.Item>
          )}
        />
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.authReducer.user,
  };
};

export default connect(mapStateToProps, null)(Profile);
