import { Button, Space, Typography } from "antd";

const { Text } = Typography;

interface DoctorDeleteProps {
  doctor: any;
  onClose: () => void;
}

export const DoctorDelete = ({ doctor, onClose }: DoctorDeleteProps) => {
  const handleDelete = () => {
    console.log("Delete doctor:", doctor);
    // Here you would typically make an API call to delete the doctor
    onClose();
  };

  if (!doctor) return <div>Данные не найдены</div>;

  return (
    <div>
      <Text>
        Вы уверены, что хотите удалить врача <strong>{doctor.fullName}</strong>?
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
