import React from "react";
import { Card, Typography, Skeleton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Meta } = Card;
const { Title } = Typography;
class ProductCard extends React.Component {
  render() {
    return (
      <>
        <Card
          key={this.props.id}
          hoverable
          style={{
            width: 300,
            textAlign: "center",
            margin: "5px 5px 5px 5px",
          }}
          cover={
            <Skeleton loading={this.props.loading} avatar active>
              <img
                alt="example"
                src="data:image/jpeg;base64,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"
              />
            </Skeleton>
          }
          actions={[
            <PlusOutlined
              onClick={() => {
                console.log("props", this.props);
              }}
              key="add"
            />,
          ]}
        >
          <Skeleton loading={this.props.loading}>
            <Meta
              title={this.props.name}
              description={this.props.description}
            />
            <Title level={3}>Fiyatı : {this.props.price} ₺</Title>
          </Skeleton>
        </Card>
      </>
    );
  }
}
export default ProductCard;
