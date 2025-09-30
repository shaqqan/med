import type { ColumnsType } from "antd/es/table";
import { Table, Button, Modal, Space, Tag } from "antd/lib";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RecipeEdit } from "./edit";
import { RecipeDelete } from "./delete";

export const RecipeTable = () => {
  const navigate = useNavigate();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);

  const handleRowClick = (record: any) => {
    navigate(`/recipes/${record.key}`);
  };

  const handleEditClick = (record: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedRecipe(record);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (record: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedRecipe(record);
    setDeleteModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setSelectedRecipe(null);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
    setSelectedRecipe(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активный":
        return "green";
      case "Выписан":
        return "blue";
      case "Отменен":
        return "red";
      case "Завершен":
        return "purple";
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
      dataIndex: "patientName",
    },
    {
      title: "Врач",
      dataIndex: "doctorName",
    },
    {
      title: "Лекарство",
      dataIndex: "medication",
    },
    {
      title: "Дозировка",
      dataIndex: "dosage",
    },
    {
      title: "Статус",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>{status}</Tag>
      ),
    },
    {
      title: "Дата выписки",
      dataIndex: "prescriptionDate",
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

  const dataSource = Array.from({ length: 75 }, (_, index) => ({
    key: index + 1,
    index: index + 1,
    patientName: `${
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
    }`,
    doctorName: `Dr. ${
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
    }`,
    medication: [
      "Аспирин",
      "Парацетамол",
      "Ибупрофен",
      "Амоксициллин",
      "Цефтриаксон",
      "Метформин",
      "Лозартан",
      "Аторвастатин",
      "Омепразол",
      "Левомицетин",
      "Азитромицин",
      "Кларитромицин",
      "Ципрофлоксацин",
      "Доксициклин",
      "Флуконазол",
      "Преднизолон",
      "Дексаметазон",
      "Гидрокортизон",
      "Инсулин",
      "Варфарин",
    ][index % 20],
    dosage: [
      "100мг 2 раза в день",
      "500мг 3 раза в день",
      "200мг 1 раз в день",
      "250мг 2 раза в день",
      "50мг 1 раз в день",
      "10мг 2 раза в день",
      "20мг 1 раз в день",
      "5мг 1 раз в день",
      "40мг 1 раз в день",
      "100мг 1 раз в день",
    ][index % 10],
    status: ["Активный", "Выписан", "Отменен", "Завершен"][index % 4],
    prescriptionDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    instructions: [
      "Принимать после еды",
      "Принимать натощак",
      "Принимать с большим количеством воды",
      "Принимать перед сном",
      "Принимать утром",
      "Принимать по назначению врача",
      "Не принимать с алкоголем",
      "Хранить в прохладном месте",
    ][index % 8],
    quantity: Math.floor(Math.random() * 50) + 10,
    refills: Math.floor(Math.random() * 5),
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
        title="Редактировать рецепт"
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
        <RecipeEdit recipe={selectedRecipe} onClose={handleEditModalClose} />
      </Modal>

      <Modal
        title="Удалить рецепт"
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
        <RecipeDelete recipe={selectedRecipe} onClose={handleDeleteModalClose} />
      </Modal>
    </>
  );
};
