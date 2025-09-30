import { Form, Input, Button, Space, Select, InputNumber, DatePicker } from "antd";

interface RecipeCreateProps {
  onClose: () => void;
}

export const RecipeCreate = ({ onClose }: RecipeCreateProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Create recipe:", values);
    onClose();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Пациент"
        name="patientName"
        rules={[{ required: true, message: "Пожалуйста, введите имя пациента" }]}
      >
        <Input placeholder="Введите имя пациента" />
      </Form.Item>

      <Form.Item
        label="Врач"
        name="doctorName"
        rules={[{ required: true, message: "Пожалуйста, введите имя врача" }]}
      >
        <Input placeholder="Введите имя врача" />
      </Form.Item>

      <Form.Item
        label="Лекарство"
        name="medication"
        rules={[{ required: true, message: "Пожалуйста, введите название лекарства" }]}
      >
        <Input placeholder="Введите название лекарства" />
      </Form.Item>

      <Form.Item
        label="Дозировка"
        name="dosage"
        rules={[{ required: true, message: "Пожалуйста, введите дозировку" }]}
      >
        <Input placeholder="Например: 100мг 2 раза в день" />
      </Form.Item>

      <Form.Item
        label="Статус"
        name="status"
        rules={[{ required: true, message: "Пожалуйста, выберите статус" }]}
      >
        <Select placeholder="Выберите статус">
          <Select.Option value="Активный">Активный</Select.Option>
          <Select.Option value="Выписан">Выписан</Select.Option>
          <Select.Option value="Отменен">Отменен</Select.Option>
          <Select.Option value="Завершен">Завершен</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Дата выписки"
        name="prescriptionDate"
        rules={[{ required: true, message: "Пожалуйста, выберите дату выписки" }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Инструкции"
        name="instructions"
        rules={[{ required: true, message: "Пожалуйста, введите инструкции" }]}
      >
        <Input.TextArea 
          rows={3} 
          placeholder="Введите инструкции по применению" 
        />
      </Form.Item>

      <Form.Item
        label="Количество"
        name="quantity"
        rules={[{ required: true, message: "Пожалуйста, введите количество" }]}
      >
        <InputNumber 
          style={{ width: "100%" }} 
          placeholder="Количество таблеток/капсул" 
          min={1}
        />
      </Form.Item>

      <Form.Item
        label="Повторные выписки"
        name="refills"
        rules={[{ required: true, message: "Пожалуйста, введите количество повторных выписок" }]}
      >
        <InputNumber 
          style={{ width: "100%" }} 
          placeholder="Количество повторных выписок" 
          min={0}
          max={10}
        />
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
