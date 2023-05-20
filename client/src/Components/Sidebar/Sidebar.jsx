// Importing React Components
import React, { lazy, useEffect } from "react";
import { useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
const Profile = lazy(() => import("../Profile/Profile"));
// Imporing logo image
import logo from "../../assets/logo.png";

// Ant design icons
import {
  UserOutlined,
  TeamOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreAddOutlined,
  BankOutlined,
  InsertRowLeftOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

// Ant design item components
import { Layout, Menu, theme, Button } from "antd";
const { Header, Content, Footer, Sider } = Layout;

// Sidebar object return Function
function getItem(label, key, icon, children, path) {
  return {
    path,
    key,
    icon,
    children,
    label,
  };
}

// Sidebar Nav menu items
const items = [
  getItem("Dashboard", "/", <AppstoreAddOutlined />, null, "/workerslist"),
  //   getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Workers", "sub1", <UserOutlined />, [
    getItem("Add Workers", "/workers/add-workers"),
    getItem("Workers List", "/workers/workers-list"),
  ]),
  getItem("Factory", "sub2", <BankOutlined />, [
    getItem("Add Factory", "/factory/add-factory"),
    getItem("Factory List", "/factory/factory-list"),
  ]),
  getItem("Union", "sub3", <TeamOutlined />, [
    getItem("Add Union", "/union/add-union"),
    getItem("Union List", "/union/union-list"),
  ]),
  getItem("Association", "sub4", <InsertRowLeftOutlined />, [
    getItem("Add Association", "/association/add-association"),
    getItem("Association List", "/association/association-list"),
  ]),
  getItem("Accounts", "sub5", <TeamOutlined />, [
    getItem("Add Accounts", "/account/add-account"),
    getItem("Accounts List", "/account/account-list"),
  ]),
  getItem("Training", "sub6", <TeamOutlined />, [
    getItem("Add Trainer", "/training/add-trainer"),
    getItem("Training Category", "/training/training-category"),
    getItem("Training Topic", "/training/training-topic"),
    getItem("Training Entry", "/training/training-entry"),
    getItem("Training List", "/training/training-list"),
  ]),
  getItem("Setting", "sub7", <TeamOutlined />, [
    getItem("National Federation", "/settings/national-federation"),
    getItem("Sectoral Federation", "/settings/sectoral-federation"),
    getItem("Department", "/settings/department"),
    getItem("Designation", "/settings/designation"),
    getItem("Sector", "/settings/sector"),
    getItem("Education", "/settings/education"),
    getItem("Religion", "/settings/religion"),
    getItem("Employment Contract", "/settings/employment-contract"),
    getItem("Machineries", "/settings/machineries"),
  ]),
];

function Sidebar({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [contentPosition, setContentPosition] = useState(200);
  const [buttonPosition, setButtontPosition] = useState(200);
  const [width, setWidth] = useState(Number(window.innerWidth));
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (collapsed) {
      setContentPosition(70);
      setButtontPosition(80);
    } else {
      setContentPosition(200);
      setButtontPosition(200);
    }
  }, [collapsed]);
  // alert(collapsed);

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            overflow: "auto",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 20,
          }}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255,0.2)",
              borderRadius: "7px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
            className="logo"
          >
            {/* Logo Image */}
            <img src={logo} alt="logo" srcSet="" width={30} height={32} />
            <h1
              hidden={collapsed}
              style={{ color: "white", fontSize: "1.2em" }}
            >
              BTSMIS
            </h1>
          </div>
          {/* main menu */}
          <Menu
            theme="dark"
            defaultSelectedKeys={["sub"]}
            mode="inline"
            items={items}
            onClick={({ key }) => {
              navigate(key);
            }}
          />
        </Sider>
        <Layout className="site-layout" style={{}}>
          <Header
            style={{
              padding: 0,
              // background: colorBgContainer,
              position: "fixed",
              top: 0,
              zIndex: 10,
              width: "100%",
            }}
          >
            {/* collaps button */}
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="toggle-button"
              style={{
                color: "var(--light)",
                marginLeft: buttonPosition,
                // display: width <= 767 && "none",
              }}
            />{" "}
            <Suspense fallback={<>Loading</>}>
              <Profile />
            </Suspense>
          </Header>
          <Content
            className="main-content"
            style={{ marginLeft: contentPosition }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              marginLeft: contentPosition,
            }}
            className="footer"
          >
            Copy Right ©2023 Decent Act International
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Sidebar;
