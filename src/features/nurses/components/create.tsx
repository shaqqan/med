import { Form, Input, Button, Space, Select } from "antd";

interface NurseCreateProps {
  onClose: () => void;
}

export const NurseCreate = ({ onClose }: NurseCreateProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Create nurse:", values);
    onClose();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="ФИО"
        name="fullName"
        rules={[{ required: true, message: "Пожалуйста, введите ФИО" }]}
      >
        <Input placeholder="Введите ФИО медсестры" />
      </Form.Item>

      <Form.Item
        label="Отделение"
        name="department"
        rules={[{ required: true, message: "Пожалуйста, выберите отделение" }]}
      >
        <Select placeholder="Выберите отделение">
          <Select.Option value="Терапевтическое">Терапевтическое</Select.Option>
          <Select.Option value="Хирургическое">Хирургическое</Select.Option>
          <Select.Option value="Педиатрическое">Педиатрическое</Select.Option>
          <Select.Option value="Кардиологическое">Кардиологическое</Select.Option>
          <Select.Option value="Неврологическое">Неврологическое</Select.Option>
          <Select.Option value="Офтальмологическое">Офтальмологическое</Select.Option>
          <Select.Option value="Дерматологическое">Дерматологическое</Select.Option>
          <Select.Option value="Гинекологическое">Гинекологическое</Select.Option>
          <Select.Option value="Урологическое">Урологическое</Select.Option>
          <Select.Option value="Ортопедическое">Ортопедическое</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Стаж работы (лет)"
        name="experience"
        rules={[{ required: true, message: "Пожалуйста, введите стаж работы" }]}
      >
        <Input type="number" placeholder="Введите стаж работы" />
      </Form.Item>

      <Form.Item
        label="Смена"
        name="shift"
        rules={[{ required: true, message: "Пожалуйста, выберите смену" }]}
      >
        <Select placeholder="Выберите смену">
          <Select.Option value="Дневная">Дневная</Select.Option>
          <Select.Option value="Ночная">Ночная</Select.Option>
          <Select.Option value="Вечерняя">Вечерняя</Select.Option>
        </Select>
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
