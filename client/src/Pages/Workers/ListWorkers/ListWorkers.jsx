import { Suspense, lazy, useState } from "react";
import {
  Divider,
  Layout,
  Radio,
  Table,
  Col,
  Row,
  Space,
  Select,
  Button,
} from "antd";
import { EditFilled, EyeFilled, DeleteFilled } from "@ant-design/icons";
const Report = lazy(() => import("../../../Components/Report/Report"));
const Delete = lazy(() => import("../../../Components/DeleteRecord/Delete"));
function ListWorkers() {
  const [selectionType, setSelectionType] = useState("checkbox");
  const columns = [
    {
      title: "#SL",
      dataIndex: "key",
      key: "age",
      width: 80,
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
      // fixed: "left",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "John",
          value: "John",
        },
      ],
    },
    {
      title: "Name(Bangla)",
      dataIndex: "age",
      key: "age",
      width: 150,
    },
    {
      title: "Phone",
      dataIndex: "street",
      key: "street",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "building",
      key: "building",
      width: 100,
    },
    {
      title: "Present Address",
      dataIndex: "companyAddress",
      key: "companyAddress",
      width: 200,
    },
    {
      title: "Education",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "NID",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
    },
    {
      title: "Religion",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "Blood Group",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "Factory Name",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "Factory ID",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "Grade",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "Designation",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "Department",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "Joining Date",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "Employment Contract",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "WPC Membership",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "Union Membership",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      // fixed: "right",
    },
    {
      title: "Action",
      dataIndex: "",
      kay: "",
      width: 100,
      render: () => (
        <>
          <div className="action-buttons">
            <EditFilled className="edit-button" />
            <EyeFilled className="view-button" />
            <Delete />
          </div>
        </>
      ),
      fixed: "right",
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i + 1,
      name: "John Brown",
      age: i + 1,
      street: "Lake Park",
      building: "C",
      number: 2035,
      companyAddress: "Lake Street 42",
      companyName: "SoftLake Co",
      gender: "M",
    });
  }
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows,
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <>
      <Layout>
        <Row>
          <Col span={24}>
            <h4>Workers List</h4>
          </Col>
        </Row>
        <br />
        {/* filter Function start */}

        <Layout>
          <Row justify="start">
            <Col span={3}>
              <Select
                style={{
                  width: "100%",
                }}
                showSearch
                allowClear
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Col>

            <Col
              span={3}
              style={{
                marginLeft: "20px",
              }}
            >
              <Select
                style={{
                  width: "100%",
                }}
                showSearch
                allowClear
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Col>
            <Col
              span={3}
              style={{
                marginLeft: "20px",
              }}
            >
              <Select
                style={{
                  width: "100%",
                }}
                showSearch
                allowClear
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Col>
            <Col
              span={3}
              style={{
                marginLeft: "20px",
              }}
            >
              <Select
                style={{
                  width: "100%",
                }}
                showSearch
                allowClear
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Col>
            <Col
              span={3}
              style={{
                marginLeft: "20px",
              }}
            >
              <Select
                style={{
                  width: "100%",
                }}
                showSearch
                allowClear
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Col>
          </Row>
        </Layout>
        <br />
        <Layout>
          <Row>
            <Col span={3}>
              <Select
                style={{
                  width: "100%",
                }}
                showSearch
                allowClear
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Col>
            <Col
              span={3}
              style={{
                marginLeft: "20px",
              }}
            >
              <Select
                style={{
                  width: "100%",
                }}
                showSearch
                allowClear
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Col>
            <Col
              span={3}
              style={{
                marginLeft: "20px",
              }}
            >
              <Select
                style={{
                  width: "100%",
                }}
                showSearch
                allowClear
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Col>
            <Col
              span={3}
              style={{
                marginLeft: "20px",
              }}
            >
              <Select
                style={{
                  width: "100%",
                }}
                showSearch
                allowClear
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Col>
            <Col
              span={3}
              style={{
                marginLeft: "20px",
              }}
            >
              <Select
                style={{
                  width: "100%",
                }}
                showSearch
                allowClear
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Col>
            <Col>
              <Button
                type="primary"
                style={{
                  marginLeft: "20px",
                }}
              >
                Filter
              </Button>
              <Button
                type="default"
                style={{
                  marginLeft: "20px",
                }}
              >
                Clear
              </Button>
            </Col>
          </Row>
        </Layout>
      </Layout>
      {/* filter Function end */}
      <Divider />
      <Layout>
        <Row>
          <Col span={24}>
            <Suspense fallback={<>Loading</>}>
              {" "}
              <Report />
            </Suspense>
          </Col>
        </Row>
      </Layout>

      <Layout>
        <Row>
          <Col span={24}>
            <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
              bordered
              // pagination={{ position: "topCenter" }}
              pagination={{
                position: ["bottomCenter"],
              }}
              size="small"
              scroll={{
                x: "calc(700px + 50%)",
                y: 300,
              }}
            />
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default ListWorkers;
