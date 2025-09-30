import { Button, Card, Modal } from "antd";
import { useState } from "react";
import { PatientTable } from "../../features/patients/components";
import { PatientCreate } from "../../features/patients/components/create";

export const PatientsPage = () => {
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
        title="Пациенты"
        extra={
          <Button type="primary" onClick={handleCreateClick}>
            Добавить пациента
          </Button>
        }
      >
        <PatientTable />
      </Card>

      <Modal
        title="Добавить пациента"
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
        <PatientCreate onClose={handleCreateModalClose} />
      </Modal>
    </>
  );
};
