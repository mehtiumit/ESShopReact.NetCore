import React from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Meta } = Card;

class ProductCard extends React.Component {
  state = {
    loading: true,
  };

  onChange = (checked) => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <Switch checked={!loading} onChange={this.onChange} />
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[<PlusOutlined key="add" />]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </>
    );
  }
}
export default ProductCard;
