import { Button, Space, Typography } from "antd";

const { Text } = Typography;

interface NurseDeleteProps {
  nurse: any;
  onClose: () => void;
}

export const NurseDelete = ({ nurse, onClose }: NurseDeleteProps) => {
  const handleDelete = () => {
    console.log("Delete nurse:", nurse);
    onClose();
  };

  if (!nurse) return <div>Данные не найдены</div>;

  return (
    <div>
      <Text>
        Вы уверены, что хотите удалить медсестру <strong>{nurse.fullName}</strong>?
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
