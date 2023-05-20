import React from "react";
import { UserOutlined, DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Avatar, Space, Dropdown } from "antd";

function Profile() {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="profile-avatar-list"
        >
          Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
          className="profile-avatar-list"
        >
          Settings
        </a>
      ),
      //   icon: <SmileOutlined />,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Logout
        </a>
      ),
      danger: true,
    },
  ];
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
      >
        <a
          onClick={(e) => e.preventDefault()}
          style={{
            float: "right",
            marginRight: "3.5%",
          }}
        >
          <Space direction="horizontal" size={10}>
            <Space wrap size={16}>
              <Avatar size={45} icon={<UserOutlined />} />
            </Space>
          </Space>
        </a>
      </Dropdown>
    </>
  );
}

export default Profile;
