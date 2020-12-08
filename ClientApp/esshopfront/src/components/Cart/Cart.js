import React, { Component } from "react";
import { Drawer } from "antd";
export default class Cart extends Component {
  componentDidMount() {
    console.log("this.props", this.props);
  }
  render() {
    return (
      <Drawer
        title="Hesabım"
        placement="right"
        closable={false}
        onClose={this.props.deneme}
        visible={this.props.deneme}
        key="right"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    );
  }
}
