import { Col, Row } from "antd";

export default function BlogHeadline() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <h1
          style={{
            fontSize: 70,
            fontWeight: "bold",
          }}
        >
          Jayden's Blog
        </h1>
        <p style={{ fontSize: 24 }}>안녕하세요, Jayden입니다.</p>
      </Col>
    </Row>
  );
}
