import { createContext, useContext } from "react";

// Theme context type
export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Create theme context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
