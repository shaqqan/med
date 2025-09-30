import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface LoginFormProps {
  onLogin?: (values: { phone: string; password: string }) => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: { phone: string; password: string }) => {
    console.log("Login attempt:", values);
    if (onLogin) {
      onLogin(values);
    }
  };

  return (
    <Card
      style={{
        width: 500,
        border: "none",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <Title level={2}>Вход в систему</Title>
        <Text type="secondary">Введите номер телефона и пароль для входа</Text>
      </div>

      <Form form={form} layout="vertical" onFinish={handleSubmit} size="large">
        <Form.Item
          label="Номер телефона"
          name="phone"
          rules={[
            { required: true, message: "Пожалуйста, введите номер телефона" },
            {
              pattern: /^\+998[0-9]{9}$/,
              message: "Введите корректный номер телефона (+998XXXXXXXXX)",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="+998XXXXXXXXX"
            style={{ borderRadius: 8 }}
          />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            { required: true, message: "Пожалуйста, введите пароль" },
            { min: 6, message: "Пароль должен содержать минимум 6 символов" },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Введите пароль"
            style={{ borderRadius: 8 }}
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              height: 48,
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
