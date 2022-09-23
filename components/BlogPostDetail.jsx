import { Row, Col } from "antd";
import BlockContent from "@sanity/block-content-to-react";
import SyntaxHighlighter from "react-syntax-highlighter";

const serializers = {
  types: {
    code: ({ node }) => {
      const { code } = node;
      return (
        <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
      );
    },
    video: ({ node }) => {
      return <p>video</p>;
    },
    link: ({ node }) => {
      return <p>link</p>;
    },
    imageGallery: ({ node }) => {
      return <p>imageGallery</p>;
    },
  },
};

export default function BlogPostDetail({ blocks }) {
  return (
    <Row>
      <Col span={24}>
        <BlockContent
          blocks={blocks}
          projectId="c7br1j5h"
          dataset="production"
          serializers={serializers}
        />
      </Col>
    </Row>
  );
}
