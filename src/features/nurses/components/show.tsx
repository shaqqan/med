import { Descriptions, Button, Card } from "antd";
import { useParams, useNavigate } from "react-router-dom";

export const NurseShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - same as in the table component
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

  const nurse = dataSource.find((d) => d.key === Number(id));

  if (!nurse) return <div>Данные не найдены</div>;

  return (
    <Card
      title="Информация о медсестре"
      extra={
        <Button onClick={() => navigate("/nurses")}>Назад к списку</Button>
      }
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="№">{nurse.index}</Descriptions.Item>
        <Descriptions.Item label="ФИО">{nurse.fullName}</Descriptions.Item>
        <Descriptions.Item label="Отделение">{nurse.department}</Descriptions.Item>
        <Descriptions.Item label="Стаж работы">{nurse.experience}</Descriptions.Item>
        <Descriptions.Item label="Смена">{nurse.shift}</Descriptions.Item>
        <Descriptions.Item label="Телефон">{nurse.phone}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};
