import React, { Component, Fragment } from "react";
import { Menu } from "antd";
import {
  ShoppingCartOutlined,
  LoginOutlined,
  HomeOutlined,
  FormOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "../Profile/Profile";
import { getUserData } from "../../redux/actions/authActions";
import ProfileForNotLogin from "../Profile/ProfileForNotLogin";
import { isLogin } from "../../utils/Utils";

class Navbar extends Component {
  componentDidMount() {
    console.log("props", this.props);
  }
  state = {
    showProfile: false,
    flag: false,
  };
  onShow = () => {
    this.setState({ showProfile: !this.state.showProfile });
  };
  render() {
    let profileForShow = (
      <Fragment>
        {isLogin() ? (
          <Profile onShow={this.onShow}></Profile>
        ) : (
          <ProfileForNotLogin onShow={this.onShow}></ProfileForNotLogin>
        )}
      </Fragment>
    );
    let profile = (
      <div className={classes.field}>
        <MenuFoldOutlined
          onClick={this.onShow}
          style={{ fontSize: "32px", color: "white" }}
        />
        {this.state.showProfile ? profileForShow : null}
      </div>
    );
    return (
      <div>
        {profile}
        <div className={classes.search}>
          <Menu theme="dark" mode="horizontal">
            <Menu
              style={{
                float: "left",
              }}
              theme="dark"
              mode="horizontal"
            >
              <Menu.Item icon={<HomeOutlined />} key="1">
                <Link to="/">Anasayfa</Link>
              </Menu.Item>
            </Menu>
            {this.props.isAuth ? null : (
              <Fragment>
                <Menu.Item icon={<LoginOutlined />} key="3">
                  <Link to="/login"> Giriş</Link>
                </Menu.Item>
                <Menu.Item icon={<FormOutlined />} key="4">
                  Kaydol
                  <Link to="/register" />
                </Menu.Item>
              </Fragment>
            )}
            <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
              <Link to="/cart">Sepet</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuthenticated,
    userId: state.authReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (userId) => dispatch(getUserData(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
