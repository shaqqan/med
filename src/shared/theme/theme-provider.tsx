import React, { useState } from "react";
import type { ReactNode } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { ThemeProvider as AntdStyleThemeProvider } from "antd-style";
import type { ThemeContextType } from "./theme-context";
import { ThemeContext } from "./theme-context";

interface AppThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  const lightTheme = {
    token: {
      colorPrimary: "#0769FE",
      colorText: "#1E293B",
      colorGray: "#64748B",
      colorTextSecondary: "#64748B",
      colorBgLayout: "#F6F9F9",
      colorBgHeader: "#FFFFFF",
      colorBorder: "#E2E8F0",
      borderRadius: 8,
      fontSize: 16,
      fontFamily: "Inter, sans-serif",
    },
    components: {
      Button: {
        colorPrimary: "#0769FE",
        borderRadius: 6,
        boxShadow: "none",
      },
      Input: {
        borderRadius: 6,
      },
    },
    algorithm: antdTheme.defaultAlgorithm,
  };

  const darkTheme = {
    token: {
      colorPrimary: "#0769FE",
      colorText: "#F1F5F9",
      colorTextSecondary: "#94A3B8",
      colorBgLayout: "#0F172A",
      colorBgHeader: "#1E293B",
      colorBorder: "#334155",
      borderRadius: 8,
      fontSize: 14,
      fontFamily: "Inter, sans-serif",
    },
    components: {
      Button: {
        colorPrimary: "#red",
      },
    },
    algorithm: antdTheme.darkAlgorithm,
  };

  const antdThemeConfig = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={contextValue}>
      <ConfigProvider theme={antdThemeConfig}>
        <AntdStyleThemeProvider appearance={theme}>
          {children}
        </AntdStyleThemeProvider>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
