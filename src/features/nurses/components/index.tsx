import type { ColumnsType } from "antd/es/table";
import { Table, Button, Modal, Space } from "antd/lib";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NurseEdit } from "./edit";
import { NurseDelete } from "./delete";

export const NurseTable = () => {
  const navigate = useNavigate();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedNurse, setSelectedNurse] = useState<any>(null);

  const handleRowClick = (record: any) => {
    navigate(`/nurses/${record.key}`);
  };

  const handleEditClick = (record: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedNurse(record);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (record: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedNurse(record);
    setDeleteModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setSelectedNurse(null);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
    setSelectedNurse(null);
  };

  const columns: ColumnsType = [
    {
      title: "№",
      dataIndex: "index",
    },
    {
      title: "Медсестра",
      dataIndex: "fullName",
    },
    {
      title: "Отделение",
      dataIndex: "department",
    },
    {
      title: "Стаж работы",
      dataIndex: "experience",
    },
    {
      title: "Смена",
      dataIndex: "shift",
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

  const dataSource = Array.from({ length: 50 }, (_, index) => ({
    key: index + 1,
    index: index + 1,
    fullName: `${
      [
        "Ахмедова",
        "Каримова",
        "Тошматова",
        "Усманова",
        "Рахимова",
        "Салимова",
        "Азизова",
        "Хасанова",
        "Махмудова",
        "Юлдашева",
      ][index % 10]
    } ${
      [
        "Алиша",
        "Бахтиёр",
        "Дилшод",
        "Элёр",
        "Фархода",
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
    department: [
      "Терапевтическое",
      "Хирургическое",
      "Педиатрическое",
      "Кардиологическое",
      "Неврологическое",
      "Офтальмологическое",
      "Дерматологическое",
      "Гинекологическое",
      "Урологическое",
      "Ортопедическое",
      "Эндокринологическое",
      "Психиатрическое",
      "Онкологическое",
      "Анестезиологическое",
      "Радиологическое",
    ][index % 15],
    experience: `${Math.floor(Math.random() * 20) + 1} лет`,
    shift: ["Дневная", "Ночная", "Вечерняя"][index % 3],
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
        title="Редактировать медсестру"
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
        <NurseEdit nurse={selectedNurse} onClose={handleEditModalClose} />
      </Modal>

      <Modal
        title="Удалить медсестру"
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
        <NurseDelete nurse={selectedNurse} onClose={handleDeleteModalClose} />
      </Modal>
    </>
  );
};
