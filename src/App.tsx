import AppRouter from "./shared/router/routes";
import { AppThemeProvider } from "./shared/theme/theme-provider";

function App() {
  return (
    <AppThemeProvider>
      <AppRouter />
    </AppThemeProvider>
  );
}

export default App;
