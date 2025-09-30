import { Button, Space, Typography } from "antd";

const { Text } = Typography;

interface RecipeDeleteProps {
  recipe: any;
  onClose: () => void;
}

export const RecipeDelete = ({ recipe, onClose }: RecipeDeleteProps) => {
  const handleDelete = () => {
    console.log("Delete recipe:", recipe);
    onClose();
  };

  if (!recipe) return <div>Данные не найдены</div>;

  return (
    <div>
      <Text>
        Вы уверены, что хотите удалить рецепт для пациента <strong>{recipe.patientName}</strong>?
      </Text>
      <br />
      <br />
      <Text type="secondary">
        Лекарство: <strong>{recipe.medication}</strong>
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
