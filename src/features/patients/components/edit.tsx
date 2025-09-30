import { Form, Input, Button, Space, Select, DatePicker } from "antd";

interface PatientEditProps {
  patient: any;
  onClose: () => void;
}

export const PatientEdit = ({ patient, onClose }: PatientEditProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Edit patient:", values);
    onClose();
  };

  if (!patient) return <div>Данные не найдены</div>;

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={patient}
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
        label="Возраст"
        name="age"
        rules={[{ required: true, message: "Пожалуйста, введите возраст" }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Пол"
        name="gender"
        rules={[{ required: true, message: "Пожалуйста, выберите пол" }]}
      >
        <Select>
          <Select.Option value="Мужской">Мужской</Select.Option>
          <Select.Option value="Женский">Женский</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Диагноз"
        name="diagnosis"
        rules={[{ required: true, message: "Пожалуйста, введите диагноз" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Статус"
        name="status"
        rules={[{ required: true, message: "Пожалуйста, выберите статус" }]}
      >
        <Select>
          <Select.Option value="Активный">Активный</Select.Option>
          <Select.Option value="Выписан">Выписан</Select.Option>
          <Select.Option value="Критический">Критический</Select.Option>
          <Select.Option value="Наблюдение">Наблюдение</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Телефон"
        name="phone"
        rules={[{ required: true, message: "Пожалуйста, введите телефон" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Адрес"
        name="address"
        rules={[{ required: true, message: "Пожалуйста, введите адрес" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Группа крови"
        name="bloodType"
        rules={[{ required: true, message: "Пожалуйста, выберите группу крови" }]}
      >
        <Select>
          <Select.Option value="A+">A+</Select.Option>
          <Select.Option value="A-">A-</Select.Option>
          <Select.Option value="B+">B+</Select.Option>
          <Select.Option value="B-">B-</Select.Option>
          <Select.Option value="AB+">AB+</Select.Option>
          <Select.Option value="AB-">AB-</Select.Option>
          <Select.Option value="O+">O+</Select.Option>
          <Select.Option value="O-">O-</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Дата поступления"
        name="admissionDate"
        rules={[{ required: true, message: "Пожалуйста, выберите дату поступления" }]}
      >
        <DatePicker style={{ width: "100%" }} />
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
