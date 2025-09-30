import { Button, Card, Modal } from "antd";
import { useState } from "react";
import { NurseTable } from "../../features/nurses/components";
import { NurseCreate } from "../../features/nurses/components/create";

export const NursesPage = () => {
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
        title="Медсестры"
        extra={
          <Button type="primary" onClick={handleCreateClick}>
            Добавить медсестру
          </Button>
        }
      >
        <NurseTable />
      </Card>

      <Modal
        title="Добавить медсестру"
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
        <NurseCreate onClose={handleCreateModalClose} />
      </Modal>
    </>
  );
};
