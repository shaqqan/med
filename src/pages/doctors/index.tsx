import { Button, Card, Modal } from "antd";
import { useState } from "react";
import { DoctorTable } from "../../features/doctors/components";
import { DoctorCreate } from "../../features/doctors/components/create";

export const DoctorsPage = () => {
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
        title="Врачи"
        extra={
          <Button type="primary" onClick={handleCreateClick}>
            Добавить врача
          </Button>
        }
      >
        <DoctorTable />
      </Card>

      <Modal
        title="Добавить врача"
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
        <DoctorCreate onClose={handleCreateModalClose} />
      </Modal>
    </>
  );
};
