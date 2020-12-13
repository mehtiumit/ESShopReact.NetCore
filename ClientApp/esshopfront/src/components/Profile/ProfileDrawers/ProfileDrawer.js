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
import { Link } from "react-router-dom";
import { logout } from "../../../redux/actions/authActions";
const { Text } = Typography;
class ProfileDrawer extends Component {
  render() {
    const data = [
      {
        title: "Keşfet",
        icon: <HomeFilled style={{ fontSize: "24px" }} />,
        dest: "/",
        onClick: () => this.props.onShow(),
      },
      {
        title: "Profilim",
        icon: <UserOutlined style={{ fontSize: "24px" }} />,
        dest: "/profile",
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
      {
        title: "Çıkış Yap",
        icon: <CloseCircleOutlined style={{ fontSize: "24px" }} />,
        onClick: () => {
          this.props.onShow();
          this.props.logOut();
        },
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

const mapStateToProps = (state) => {
  return {
    userData: state.authReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDrawer);
