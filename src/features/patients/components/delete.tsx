import { Button, Space, Typography } from "antd";

const { Text } = Typography;

interface PatientDeleteProps {
  patient: any;
  onClose: () => void;
}

export const PatientDelete = ({ patient, onClose }: PatientDeleteProps) => {
  const handleDelete = () => {
    console.log("Delete patient:", patient);
    onClose();
  };

  if (!patient) return <div>Данные не найдены</div>;

  return (
    <div>
      <Text>
        Вы уверены, что хотите удалить пациента <strong>{patient.fullName}</strong>?
      </Text>
      <br />
      <br />
      <Text type="secondary">
        Это действие нельзя будет отменить.
      </Text>
      
      <div style={{ marginTop: 24, textAlign: "right" }}>
        <Space>
          <Button onClick={onClose}>
            Отмена
          </Button>
          <Button type="primary" danger onClick={handleDelete}>
            Удалить
          </Button>
        </Space>
      </div>
    </div>
  );
};
