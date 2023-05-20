import { useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  Layout,
  Button,
  Form,
  Input,
  Select,
  Space,
  Tooltip,
  Typography,
  DatePicker,
  InputNumber,
} from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;
import { Col, Row } from "antd";
const contentStyle = {
  // textAlign: "center",
  minHeight: 0,

  lineHeight: "0px",
};
function AddWorkers() {
  // const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const [form] = Form.useForm();

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Birthday is required",
      },
    ],
  };
  // const formItemLayout =
  //   formLayout === "horizontal"
  //     ? {
  //         labelCol: {
  //           span: 4,
  //         },
  //         wrapperCol: {
  //           span: 14,
  //         },
  //       }
  //     : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 20,
            offset: 10,
          },
        }
      : null;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="Yes">Yes</Option>
        <Option value="No">No</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <Row>
        <Col
          xs={{
            span: 10,
            offset: 2,
          }}
          lg={{
            span: 20,
            offset: 2,
          }}
        >
          <div style={{ marginBottom: "25px" }}>
            <h4>Personal Info & Address Personal Info & Address</h4>
            <hr />
          </div>
        </Col>
      </Row>

      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        className="rows"
      >
        <Layout>
          <Content style={contentStyle}>
            <Form
              // {...formItemLayout}

              // form={form}
              // initialValues={{
              //   layout: formLayout,
              // }}
              // onValuesChange={onFormLayoutChange}
              // style={
              //   {
              //     // maxWidth: "100%",
              //   }
              // }
              form={form}
              layout="vertical"

              // initialValues={{
              //   requiredMarkValue: requiredMark,
              // }}
              // onValuesChange={onRequiredTypeChange}
              // requiredMark={requiredMark}
            >
              {/* 1st row */}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item
                    label="First Name (English)"
                    required
                    tooltip="This is a required field"
                  >
                    <Form.Item
                      name="name"
                      // noStyle
                      rules={[
                        {
                          required: true,
                          message: "First name is required",
                        },
                      ]}
                    >
                      <Input
                        placeholder="First Name"
                        rules={[
                          {
                            required: true,
                            message: "Gender is required",
                          },
                        ]}
                      />
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item
                    label="Last Name (English)
"
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    // offset: 2,
                  }}
                >
                  <Form.Item label="Full Name (Bangla)">
                    <Input placeholder="input placeholder" />
                  </Form.Item>
                </Col>
              </Row>

              {/* 2rd row */}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item label="Father's Name">
                    <Input placeholder="Father's Name" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Mother's Name">
                    <Input placeholder="Mother's Name" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Gender">
                    <Form.Item
                      name="gender"
                      // noStyle
                    >
                      <Select placeholder="Select Gender" allowClear showSearch>
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>
              {/* 3nd row */}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item
                    label="Date Of Birth"
                    required
                    tooltip="This is a required field"
                  >
                    <Form.Item name="birth" {...config}>
                      <DatePicker
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="NID">
                    <Input placeholder="Enter NID" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Religion">
                    <Form.Item
                      name="religion"
                      // noStyle
                    >
                      <Select
                        placeholder="Select Religion"
                        allowClear
                        showSearch
                      >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>
              {/* 4th row */}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item label="Mobile No">
                    <Form.Item name="mobileno">
                      <Input placeholder="input placeholder" />
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
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
                    <Input placeholder="Enter Email" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Education">
                    <Form.Item
                      name="education"
                      // noStyle
                    >
                      <Select
                        placeholder="Select Education"
                        allowClear
                        showSearch
                      >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>

              {/* 5th row */}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item label="Blood Group">
                    <Form.Item name="blood">
                      <Select
                        placeholder="Select Blood group"
                        allowClear
                        showSearch
                      >
                        <Option value="A+">A+</Option>
                        <Option value="A-">A-</Option>
                        <Option value="B+">B+</Option>
                        <Option value="B-">B-</Option>
                        <Option value="AB+">AB+</Option>
                        <Option value="AB-">AB-</Option>
                        <Option value="O+">O+</Option>
                        <Option value="O-">O-</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Present Address" name="presentaddress">
                    <Input.TextArea placeholder="Present Address" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Permanent Address" name="parmanentaddress">
                    <Input.TextArea placeholder="Permanent Address" />
                  </Form.Item>
                </Col>
              </Row>
              {/* 6th row */}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item label="Emergency Contact Name">
                    <Form.Item
                      name="emergency"
                      // noStyle
                    >
                      <Input placeholder="Emergency Contact Name" />
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item
                    label="Relation
"
                  >
                    <Input placeholder="Relation" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Emergency Contact No.">
                    <Input placeholder="Emergency Contact No." />
                  </Form.Item>
                </Col>
              </Row>
              {/* 7th row */}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item label="Emergency Contact Email address">
                    <Form.Item
                      name="emergencyno"
                      // noStyle
                    >
                      <Input placeholder="Emergency Contact Email address" />
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Spouse Name">
                    <Input placeholder="Spouse Name" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item
                    label="No. of child."
                    name={["No of Child", "child"]}
                    rules={[
                      {
                        type: "number",
                        min: 0,
                        max: 99,
                      },
                    ]}
                  >
                    <InputNumber
                      placeholder="No. of child."
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              {/* divider */}

              <Row
                style={{
                  backgroundColor: "white",
                  // marginBottom: "20px",
                  paddingBottom: "20px",
                }}
              >
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 20,
                    offset: 2,
                  }}
                >
                  <h4>About Factory</h4>
                  <hr />
                </Col>
              </Row>
              {/* 8th row */}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item
                    label="Factory Name"
                    required
                    tooltip="This is a required field"
                  >
                    <Form.Item
                      name="factory"
                      rules={[
                        {
                          required: true,
                          message: "Factory name is required",
                        },
                      ]}
                      // noStyle
                    >
                      <Select
                        placeholder="Select Education"
                        allowClear
                        showSearch
                      >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Designation">
                    <Form.Item
                      name="designation"
                      // noStyle
                    >
                      <Select
                        placeholder="Select Education"
                        allowClear
                        showSearch
                      >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Department">
                    <Form.Item
                      name="dducation"
                      // noStyle
                    >
                      <Select
                        placeholder="Select Education"
                        allowClear
                        showSearch
                      >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>
              {/* 9th Row */}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item label="ID No">
                    <Form.Item name="nid">
                      <Input placeholder="NID" />
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Worker grade" name="grade">
                    <Input placeholder="Worker Grade" />
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Joining Date">
                    <Form.Item name="joiningdate">
                      <DatePicker
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>

              {/* 10th row */}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item label="Total years of experience">
                    <Form.Item name="yearofexp">
                      <Input placeholder="Year of experience" />
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Employment Contracts">
                    <Form.Item
                      name="employment"
                      // noStyle
                    >
                      <Select
                        placeholder="Employment Contracts"
                        allowClear
                        showSearch
                      >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>
              {/* 11th row */}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item label="WPC Member">
                    <Form.Item
                      name="wpc"
                      // noStyle
                    >
                      <Select placeholder="Select WPC" allowClear showSearch>
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="WPC Designation">
                    <Form.Item
                      name="wpcdesignation"
                      // noStyle
                    >
                      <Select
                        placeholder="Select Education"
                        allowClear
                        showSearch
                      >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Member Since">
                    <Form.Item name="membersince">
                      <DatePicker
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>
              {/* 12 row */}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item label="Safety Committee Member">
                    <Form.Item name="safety">
                      <Select
                        placeholder="Select Blood group"
                        allowClear
                        showSearch
                      >
                        <Option value="A+">A+</Option>
                        <Option value="A-">A-</Option>
                        <Option value="B+">B+</Option>
                        <Option value="B-">B-</Option>
                        <Option value="AB+">AB+</Option>
                        <Option value="AB-">AB-</Option>
                        <Option value="O+">O+</Option>
                        <Option value="O-">O-</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Safety Committee Designation">
                    <Form.Item name="safetydesi">
                      <Select
                        placeholder="Select Blood group"
                        allowClear
                        showSearch
                      >
                        <Option value="A+">A+</Option>
                        <Option value="A-">A-</Option>
                        <Option value="B+">B+</Option>
                        <Option value="B-">B-</Option>
                        <Option value="AB+">AB+</Option>
                        <Option value="AB-">AB-</Option>
                        <Option value="O+">O+</Option>
                        <Option value="O-">O-</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Member Since">
                    <Form.Item name="safetymembersince">
                      <DatePicker
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>
              {/* divider */}
              <Row
                style={{
                  backgroundColor: "white",
                  // marginBottom: "20px",
                  paddingBottom: "20px",
                }}
              >
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 20,
                    offset: 2,
                  }}
                >
                  <h4>Union Membership</h4>
                  <hr />
                </Col>
              </Row>
              {/* 13 row*/}
              <Row className="row-to-column">
                <Col
                  xs={{
                    span: 6,
                    offset: 2,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Form.Item label="Union">
                    <Form.Item name="union">
                      <Select
                        // addonBefore={prefixSelector}
                        placeholder="Select Union Name"
                        allowClear
                        showSearch
                      >
                        <Option value="A+">A+</Option>
                        <Option value="A-">A-</Option>
                        <Option value="B+">B+</Option>
                        <Option value="B-">B-</Option>
                        <Option value="AB+">AB+</Option>
                        <Option value="AB-">AB-</Option>
                        <Option value="O+">O+</Option>
                        <Option value="O-">O-</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Union Designation">
                    <Form.Item name="uniondesignation">
                      <Select
                        placeholder="Select Blood group"
                        allowClear
                        showSearch
                      >
                        <Option value="A+">A+</Option>
                        <Option value="A-">A-</Option>
                        <Option value="B+">B+</Option>
                        <Option value="B-">B-</Option>
                        <Option value="AB+">AB+</Option>
                        <Option value="AB-">AB-</Option>
                        <Option value="O+">O+</Option>
                        <Option value="O-">O-</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col
                  xs={{
                    span: 6,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 1,
                  }}
                >
                  <Form.Item label="Member Since">
                    <Form.Item name="unionmembersince">
                      <DatePicker
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>
              {/* Submit Button */}
              <Form.Item {...buttonItemLayout}>
                <Button type="link" htmlType="button">
                  Save as draft
                </Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button
                  type="default"
                  htmlType="reset"
                  style={{ marginLeft: "5px" }}
                >
                  Reset
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </Space>
    </>
  );
}

export default AddWorkers;
