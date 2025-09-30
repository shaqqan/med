import { Button, Card, Modal } from "antd";
import { useState } from "react";
import { RecipeTable } from "../../features/recipes/components";
import { RecipeCreate } from "../../features/recipes/components/create";

export const RecipesPage = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const handleCreateClick = () => {
    setCreateModalOpen(true);
  };

  const handleCreateModalClose = () => {
    setCreateModalOpen(false);
  };

  return (
    <>
      <Card
        title="Рецепты"
        extra={
          <Button type="primary" onClick={handleCreateClick}>
            Добавить рецепт
          </Button>
        }
      >
        <RecipeTable />
      </Card>

      <Modal
        title="Добавить рецепт"
        open={createModalOpen}
        onCancel={handleCreateModalClose}
        footer={null}
        width={600}
        styles={{
          mask: {
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }
        }}
      >
        <RecipeCreate onClose={handleCreateModalClose} />
      </Modal>
    </>
  );
};
