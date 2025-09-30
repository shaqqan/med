import { Form, Input, Button, Space } from "antd";

interface DoctorCreateProps {
  onClose: () => void;
}

export const DoctorCreate = ({ onClose }: DoctorCreateProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Create doctor:", values);
    // Here you would typically make an API call to create the doctor
    onClose();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="ФИО"
        name="fullName"
        rules={[{ required: true, message: "Пожалуйста, введите ФИО" }]}
      >
        <Input placeholder="Введите ФИО врача" />
      </Form.Item>

      <Form.Item
        label="Специальность"
        name="specialty"
        rules={[
          { required: true, message: "Пожалуйста, введите специальность" },
        ]}
      >
        <Input placeholder="Введите специальность" />
      </Form.Item>

      <Form.Item
        label="Кабинет"
        name="cabinet"
        rules={[
          { required: true, message: "Пожалуйста, введите номер кабинета" },
        ]}
      >
        <Input type="number" placeholder="Введите номер кабинета" />
      </Form.Item>

      <Form.Item
        label="Телефон"
        name="phone"
        rules={[{ required: true, message: "Пожалуйста, введите телефон" }]}
      >
        <Input placeholder="Введите номер телефона" />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          { required: true, message: "Пожалуйста, введите пароль" },
          { min: 6, message: "Пароль должен содержать минимум 6 символов" },
        ]}
      >
        <Input.Password placeholder="Введите пароль" />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
          <Button onClick={onClose}>Отмена</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
