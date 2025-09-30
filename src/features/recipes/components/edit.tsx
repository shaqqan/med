import { Form, Input, Button, Space, Select, InputNumber, DatePicker } from "antd";

interface RecipeEditProps {
  recipe: any;
  onClose: () => void;
}

export const RecipeEdit = ({ recipe, onClose }: RecipeEditProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Edit recipe:", values);
    onClose();
  };

  if (!recipe) return <div>Данные не найдены</div>;

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={recipe}
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Пациент"
        name="patientName"
        rules={[{ required: true, message: "Пожалуйста, введите имя пациента" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Врач"
        name="doctorName"
        rules={[{ required: true, message: "Пожалуйста, введите имя врача" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Лекарство"
        name="medication"
        rules={[{ required: true, message: "Пожалуйста, введите название лекарства" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Дозировка"
        name="dosage"
        rules={[{ required: true, message: "Пожалуйста, введите дозировку" }]}
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
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item
        label="Количество"
        name="quantity"
        rules={[{ required: true, message: "Пожалуйста, введите количество" }]}
      >
        <InputNumber style={{ width: "100%" }} min={1} />
      </Form.Item>

      <Form.Item
        label="Повторные выписки"
        name="refills"
        rules={[{ required: true, message: "Пожалуйста, введите количество повторных выписок" }]}
      >
        <InputNumber style={{ width: "100%" }} min={0} max={10} />
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
