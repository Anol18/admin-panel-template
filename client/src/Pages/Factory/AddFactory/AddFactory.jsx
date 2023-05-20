import { useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Row,
  Col,
  Layout,
  Divider,
} from "antd";
import { Content } from "antd/es/layout/layout";
function AddFactory() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const { Content } = Layout;
  return (
    <>
      <Layout>
        <Content>
          <Divider>
            <h4>Add Factory</h4>
          </Divider>

          <Form
            labelCol={{
              span: 0,
            }}
            wrapperCol={{
              span: 0,
            }}
            layout="vertical"
            initialValues={{
              size: "default",
            }}
            onValuesChange={onFormLayoutChange}
            size="default"
            // style={{
            //   maxWidth: "100%",
            // }}
          >
            <Divider orientation="left">Factory Details</Divider>
            {/* first row */}
            <Row className="row-to-column" justify="center">
              <Col
                xs={{
                  span: 5,
                  offset: 0,
                }}
                lg={{
                  span: 5,
                  offset: 0,
                }}
              >
                <Form.Item
                  label="Factory Name"
                  required
                  tooltip="This is a required field"
                >
                  <Form.Item
                    name="factoryname"
                    rules={[
                      {
                        required: true,
                        message: "Factory name is required",
                      },
                    ]}
                  >
                    <Input placeholder="Factory name " />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col
                xs={{
                  span: 5,
                  offset: 1,
                }}
                lg={{
                  span: 5,
                  offset: 1,
                }}
              >
                <Form.Item label="Sector">
                  <Form.Item
                    name="sector"
                    // noStyle
                  >
                    <Select placeholder="Select Religion" allowClear showSearch>
                      <Option value="Male">Male</Option>
                      <Option value="Female">Female</Option>
                    </Select>
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col
                xs={{
                  span: 5,
                  offset: 1,
                }}
                lg={{
                  span: 5,
                  offset: 1,
                }}
              >
                <Form.Item label="Registration Year">
                  <Input />
                </Form.Item>
              </Col>
              <Col
                xs={{
                  span: 5,
                  offset: 1,
                }}
                lg={{
                  span: 5,
                  offset: 1,
                }}
              >
                <Form.Item label="Register Address">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            {/* 2nd row */}
            <Row className="row-to-column" justify="center">
              <Col
                xs={{
                  span: 5,
                  offset: 0,
                }}
                lg={{
                  span: 5,
                  offset: 0,
                }}
              >
                <Form.Item label="Fax">
                  <Input />
                </Form.Item>
              </Col>
              <Col
                xs={{
                  span: 5,
                  offset: 1,
                }}
                lg={{
                  span: 5,
                  offset: 1,
                }}
              >
                <Form.Item label="Phone Number">
                  <Input />
                </Form.Item>
              </Col>
              <Col
                xs={{
                  span: 5,
                  offset: 1,
                }}
                lg={{
                  span: 5,
                  offset: 1,
                }}
              >
                <Form.Item label="Mobile Number">
                  <Input />
                </Form.Item>
              </Col>
              <Col
                xs={{
                  span: 5,
                  offset: 1,
                }}
                lg={{
                  span: 5,
                  offset: 1,
                }}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            {/* 3rd row */}
            <Row className="row-to-column" justify="center">
              <Col
                xs={{
                  span: 5,
                  offset: 0,
                }}
                lg={{
                  span: 5,
                  offset: 0,
                }}
              >
                <Form.Item label="TIN Number">
                  <Input />
                </Form.Item>
              </Col>
              <Col
                xs={{
                  span: 5,
                  offset: 1,
                }}
                lg={{
                  span: 5,
                  offset: 1,
                }}
              >
                <Form.Item label="BIN Number" name="bin">
                  <Input />
                </Form.Item>
              </Col>
              <Col
                xs={{
                  span: 5,
                  offset: 1,
                }}
                lg={{
                  span: 5,
                  offset: 1,
                }}
              >
                <Form.Item label="EXP Number">
                  <Input />
                </Form.Item>
              </Col>
              <Col
                xs={{
                  span: 5,
                  offset: 1,
                }}
                lg={{
                  span: 5,
                  offset: 1,
                }}
              >
                <Form.Item label="IMP Number" name="imp">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Content>
      </Layout>
    </>
  );
}

export default AddFactory;
