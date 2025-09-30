import { Layout, Grid, Typography } from "antd";
import { Outlet } from "react-router-dom";

const { useBreakpoint } = Grid;

export const AuthLayout: React.FC = () => {
  const screens = useBreakpoint();

  const isMobile = !screens.md; // md (<768px) dan kichik bo‘lsa true

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // mobil ekranda ustma-ust
          height: "100vh",
          width: "100%",
        }}
      >
        {/* Chap qism (form) */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 24,
          }}
        >
          <Outlet />
        </div>

        {/* O‘ng qism (rasm) */}
        <div
          style={{
            flex: 1,
            display: isMobile ? "none" : "flex", // mobil ekranda yashiramiz
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
          }}
        >
          <Typography.Title level={1} style={{ color: "white" }}>
            ANB MED
          </Typography.Title>
        </div>
      </div>
    </Layout>
  );
};
