import React from "react";
import { Col, Layout, Row, Button, Space } from "antd";
function Report() {
  return (
    <>
      <Layout style={{ float: "right", margin: "5px" }}>
        <Row>
          <Col span={24}>
            <Space direction="vertical">
              <Space>
                <Button size="small" type="primary">
                  Excel
                </Button>
                <Button size="small" type="primary">
                  CSV
                </Button>
                <Button size="small" type="primary">
                  PDF
                </Button>
                <Button size="small" type="primary">
                  Print
                </Button>
              </Space>
            </Space>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Report;
