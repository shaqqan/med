import { LoginForm } from "../../features/auth/components/login-forum";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (values: { phone: string; password: string }) => {
    // Here you would typically make an API call to authenticate
    console.log("Login successful:", values);
    // For demo purposes, redirect to dashboard
    navigate("/");
  };

  return <LoginForm onLogin={handleLogin} />;
};
