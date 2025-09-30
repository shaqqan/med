import type { ColumnsType } from "antd/es/table";
import { Table, Button, Modal, Space } from "antd/lib";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DoctorEdit } from "./edit";
import { DoctorDelete } from "./delete";

export const DoctorTable = () => {
  const navigate = useNavigate();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const handleRowClick = (record: any) => {
    navigate(`/doctors/${record.key}`);
  };

  const handleEditClick = (record: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedDoctor(record);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (record: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedDoctor(record);
    setDeleteModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setSelectedDoctor(null);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
    setSelectedDoctor(null);
  };

  const columns: ColumnsType = [
    {
      title: "№",
      dataIndex: "index",
    },
    {
      title: "Врач",
      dataIndex: "fullName",
    },
    {
      title: "Специальность",
      dataIndex: "specialty",
    },
    {
      title: "Кол-во приемов",
      dataIndex: "appointmentsCount",
    },
    {
      title: "Кабинет",
      dataIndex: "cabinet",
    },
    {
      title: "Телефон",
      dataIndex: "phone",
    },
    {
      title: "Действия",
      width: 150,
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            size="small"
            onClick={(e) => handleEditClick(record, e)}
          >
            Редактировать
          </Button>
          <Button
            type="primary"
            danger
            size="small"
            onClick={(e) => handleDeleteClick(record, e)}
          >
            Удалить
          </Button>
        </Space>
      ),
    },
  ];
  const dataSource = Array.from({ length: 100 }, (_, index) => ({
    key: index + 1,
    index: index + 1,
    fullName: `Dr. ${
      [
        "Ахмедов",
        "Каримов",
        "Тошматов",
        "Усманов",
        "Рахимов",
        "Салимов",
        "Азизов",
        "Хасанов",
        "Махмудов",
        "Юлдашев",
      ][index % 10]
    } ${
      [
        "Алишер",
        "Бахтиёр",
        "Дилшод",
        "Элёр",
        "Фарход",
        "Гулнора",
        "Хуршид",
        "Ислом",
        "Жахонгир",
        "Камол",
      ][index % 10]
    } ${
      [
        "Угли",
        "Угли",
        "Угли",
        "Угли",
        "Угли",
        "Угли",
        "Угли",
        "Угли",
        "Угли",
        "Угли",
      ][index % 10]
    }`,
    specialty: [
      "Терапевт",
      "Кардиолог",
      "Невролог",
      "Педиатр",
      "Хирург",
      "Офтальмолог",
      "Дерматолог",
      "Гинеколог",
      "Уролог",
      "Ортопед",
      "Эндокринолог",
      "Психиатр",
      "Онколог",
      "Анестезиолог",
      "Радиолог",
    ][index % 15],
    appointmentsCount: Math.floor(Math.random() * 200) + 50,
    cabinet: Math.floor(Math.random() * 50) + 1,
    phone: `+998${Math.floor(Math.random() * 900000000) + 100000000}`,
  }));

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
          style: { cursor: "pointer" },
        })}
      />

      <Modal
        title="Редактировать врача"
        open={editModalOpen}
        onCancel={handleEditModalClose}
        footer={null}
        width={600}
        styles={{
          mask: {
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <DoctorEdit doctor={selectedDoctor} onClose={handleEditModalClose} />
      </Modal>

      <Modal
        title="Удалить врача"
        open={deleteModalOpen}
        onCancel={handleDeleteModalClose}
        footer={null}
        width={400}
        styles={{
          mask: {
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <DoctorDelete
          doctor={selectedDoctor}
          onClose={handleDeleteModalClose}
        />
      </Modal>
    </>
  );
};
