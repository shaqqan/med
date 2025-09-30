import { Form, Input, Button, Space } from "antd";

interface DoctorEditProps {
  doctor: any;
  onClose: () => void;
}

export const DoctorEdit = ({ doctor, onClose }: DoctorEditProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Edit doctor:", values);
    onClose();
  };

  if (!doctor) return <div>Данные не найдены</div>;

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={doctor}
      onFinish={handleSubmit}
    >
      <Form.Item
        label="ФИО"
        name="fullName"
        rules={[{ required: true, message: "Пожалуйста, введите ФИО" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Специальность"
        name="specialty"
        rules={[
          { required: true, message: "Пожалуйста, введите специальность" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Кабинет"
        name="cabinet"
        rules={[
          { required: true, message: "Пожалуйста, введите номер кабинета" },
        ]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Телефон"
        name="phone"
        rules={[{ required: true, message: "Пожалуйста, введите телефон" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          { required: true, message: "Пожалуйста, введите пароль" },
          { min: 6, message: "Пароль должен содержать минимум 6 символов" },
        ]}
      >
        <Input.Password placeholder="Введите новый пароль" />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
          <Button onClick={onClose}>Отмена</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
