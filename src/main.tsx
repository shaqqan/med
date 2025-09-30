import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { App as AntdApp, ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider locale={ruRU}>
      <AntdApp>
        <App />
      </AntdApp>
    </ConfigProvider>
  </StrictMode>
);
