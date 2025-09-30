import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Flex,
  Layout,
  Menu,
  theme,
  Typography,
  Dropdown,
  Grid,
} from "antd";
import { Outlet, useNavigate } from "react-router";
import {
  DashboardOutlined,
  MedicineBoxOutlined,
  TeamOutlined,
  FileTextOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Text } = Typography;
const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const screens = useBreakpoint(); // 📱 breakpoint hook
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 📱 ekran kichkina bo‘lsa (sm yoki md dan kichik), avtomatik collapse qilamiz
  useEffect(() => {
    if (!screens.md) {
      setCollapsed(true);
    }
  }, [screens]);

  const handleUserMenuClick = ({ key }: { key: string }) => {
    switch (key) {
      case "profile":
        console.log("Profile clicked");
        break;
      case "settings":
        console.log("Settings clicked");
        break;
      case "logout":
        console.log("Logout clicked");
        navigate("/login");
        break;
      default:
        break;
    }
  };

  const userMenuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Профиль",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Настройки",
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Выйти",
      danger: true,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={260}
        collapsedWidth={screens.xs ? 0 : 80} // 📱 telefon uchun butunlay yopiladi
        style={{ background: colorBgContainer }}
      >
        <Flex
          justify="center"
          align="center"
          style={{
            height: 64,
            gap: 4,
            fontSize: 24,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {collapsed ? (
            <svg
              width="80"
              height="42"
              viewBox="0 0 47 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9495 5.80661C17.5597 5.80661 15.6224 7.74395 15.6224 10.1338C15.6224 12.5236 17.5597 14.4609 19.9495 14.4609C22.3394 14.4609 24.2767 12.5236 24.2767 10.1338C24.2767 7.74395 22.3394 5.80661 19.9495 5.80661ZM11.4889 14.2248C15.9933 14.2248 19.6448 17.8763 19.6448 22.3807V29.0652H15.5881V22.3807C15.5881 21.901 15.5057 21.4405 15.3542 21.0127L9.39549 26.9715L6.52695 24.1029L12.2733 18.3565C12.0195 18.3073 11.7572 18.2816 11.4889 18.2816H4.80444V14.2248H11.4889ZM28.5111 14.2248C24.0068 14.2248 20.3553 17.8763 20.3553 22.3807V29.0652H24.412V22.3807C24.412 22.0049 24.4626 21.6409 24.5573 21.2952L30.7906 27.5285L33.6591 24.66L27.4259 18.4268C27.7716 18.3321 28.1355 18.2816 28.5111 18.2816H35.1957V14.2248H28.5111Z"
                fill="#168BD9"
              />
            </svg>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <svg
                width="40"
                height="35"
                viewBox="0 0 40 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.9495 5.80661C17.5597 5.80661 15.6224 7.74395 15.6224 10.1338C15.6224 12.5236 17.5597 14.4609 19.9495 14.4609C22.3394 14.4609 24.2767 12.5236 24.2767 10.1338C24.2767 7.74395 22.3394 5.80661 19.9495 5.80661ZM11.4889 14.2248C15.9933 14.2248 19.6448 17.8763 19.6448 22.3807V29.0652H15.5881V22.3807C15.5881 21.901 15.5057 21.4405 15.3542 21.0127L9.39549 26.9715L6.52695 24.1029L12.2733 18.3565C12.0195 18.3073 11.7572 18.2816 11.4889 18.2816H4.80444V14.2248H11.4889ZM28.5111 14.2248C24.0068 14.2248 20.3553 17.8763 20.3553 22.3807V29.0652H24.412V22.3807C24.412 22.0049 24.4626 21.6409 24.5573 21.2952L30.7906 27.5285L33.6591 24.66L27.4259 18.4268C27.7716 18.3321 28.1355 18.2816 28.5111 18.2816H35.1957V14.2248H28.5111Z"
                  fill="#168BD9"
                />
              </svg>
              <div style={{ color: "#168BD9" }}>ANB MED</div>
            </div>
          )}
        </Flex>

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            borderRight: "none",
            justifyContent: "center",
            alignItems: "center",
          }}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: "Панель управления",
              onClick: () => {
                navigate("/");
              },
              style: { height: "56px" },
            },
            {
              key: "2",
              icon: <TeamOutlined />,
              label: "Медсестры",
              onClick: () => {
                navigate("/nurses");
              },
              style: { height: "56px" },
            },
            {
              key: "3",
              icon: <MedicineBoxOutlined />,
              label: "Врачи",
              onClick: () => {
                navigate("/doctors");
              },
              style: { height: "56px" },
            },
            {
              key: "4",
              icon: <TeamOutlined />,
              label: "Пациенты",
              onClick: () => {
                navigate("/patients");
              },
              style: { height: "56px" },
            },
            {
              key: "5",
              icon: <FileTextOutlined />,
              label: "Рецепты",
              onClick: () => {
                navigate("/recipes");
              },
              style: { height: "56px" },
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            paddingLeft: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap", // 📱 telefon uchun yangi qatordan tushishi mumkin
            gap: 8,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 48,
              height: 48,
            }}
          />

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text style={{ fontSize: 14, fontWeight: 500 }}>
                MUXIYATDINOV NURATDIN SADRATDIN ULI
              </Text>
              <Text type="secondary" style={{ fontSize: 12 }}>
                Тест клиника U-Study
              </Text>
            </div>
            <Dropdown
              menu={{ items: userMenuItems, onClick: handleUserMenuClick }}
              placement="bottomRight"
              trigger={["click", "hover"]}
              arrow
            >
              <Avatar
                src="https://i.ibb.co/WY5x369/2.png"
                alt="user"
                style={{
                  width: 40,
                  height: 40,
                  cursor: "pointer",
                }}
              />
            </Dropdown>
          </div>
        </Header>

        <Content
          style={{
            padding: 16,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
