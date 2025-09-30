import type { ColumnsType } from "antd/es/table";
import { Table, Button, Modal, Space, Tag } from "antd/lib";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PatientEdit } from "./edit";
import { PatientDelete } from "./delete";

export const PatientTable = () => {
  const navigate = useNavigate();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const handleRowClick = (record: any) => {
    navigate(`/patients/${record.key}`);
  };

  const handleEditClick = (record: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPatient(record);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (record: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPatient(record);
    setDeleteModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setSelectedPatient(null);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
    setSelectedPatient(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активный":
        return "green";
      case "Выписан":
        return "blue";
      case "Критический":
        return "red";
      case "Наблюдение":
        return "orange";
      default:
        return "default";
    }
  };

  const columns: ColumnsType = [
    {
      title: "№",
      dataIndex: "index",
    },
    {
      title: "Пациент",
      dataIndex: "fullName",
    },
    {
      title: "Возраст",
      dataIndex: "age",
    },
    {
      title: "Пол",
      dataIndex: "gender",
    },
    {
      title: "Диагноз",
      dataIndex: "diagnosis",
    },
    {
      title: "Статус",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>{status}</Tag>
      ),
    },
    {
      title: "Телефон",
      dataIndex: "phone",
    },
    {
      title: "Действия",
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
    fullName: `${
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
        "Ахмедова",
        "Каримова",
        "Тошматова",
        "Усманова",
        "Рахимова",
      ][index % 15]
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
        "Алиша",
        "Бахтиёр",
        "Дилшод",
        "Элёр",
        "Фархода",
      ][index % 15]
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
        "Угли",
        "Угли",
        "Угли",
        "Угли",
        "Угли",
      ][index % 15]
    }`,
    age: Math.floor(Math.random() * 70) + 18,
    gender: ["Мужской", "Женский"][index % 2],
    diagnosis: [
      "Гипертония",
      "Диабет",
      "Грипп",
      "Пневмония",
      "Гастрит",
      "Астма",
      "Аллергия",
      "Мигрень",
      "Артрит",
      "Бронхит",
      "Сердечная недостаточность",
      "Язва желудка",
      "Гепатит",
      "Туберкулез",
      "Рак",
    ][index % 15],
    status: ["Активный", "Выписан", "Критический", "Наблюдение"][index % 4],
    phone: `+998${Math.floor(Math.random() * 900000000) + 100000000}`,
    address: `Улица ${Math.floor(Math.random() * 100) + 1}, дом ${Math.floor(Math.random() * 50) + 1}`,
    bloodType: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"][index % 8],
    admissionDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString(),
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
        title="Редактировать пациента"
        open={editModalOpen}
        onCancel={handleEditModalClose}
        footer={null}
        width={600}
        styles={{
          mask: {
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }
        }}
      >
        <PatientEdit patient={selectedPatient} onClose={handleEditModalClose} />
      </Modal>

      <Modal
        title="Удалить пациента"
        open={deleteModalOpen}
        onCancel={handleDeleteModalClose}
        footer={null}
        width={400}
        styles={{
          mask: {
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }
        }}
      >
        <PatientDelete patient={selectedPatient} onClose={handleDeleteModalClose} />
      </Modal>
    </>
  );
};
