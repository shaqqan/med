import { Descriptions, Button, Card } from "antd";
import { useParams, useNavigate } from "react-router-dom";

export const DoctorShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - same as in the table component
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

  const doctor = dataSource.find((d) => d.key === Number(id));

  if (!doctor) return <div>Данные не найдены</div>;

  return (
    <Card
      title="Информация о враче"
      extra={
        <Button onClick={() => navigate("/doctors")}>Назад к списку</Button>
      }
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="№">{doctor.index}</Descriptions.Item>
        <Descriptions.Item label="ФИО">{doctor.fullName}</Descriptions.Item>
        <Descriptions.Item label="Специальность">
          {doctor.specialty}
        </Descriptions.Item>
        <Descriptions.Item label="Количество приемов">
          {doctor.appointmentsCount}
        </Descriptions.Item>
        <Descriptions.Item label="Кабинет">{doctor.cabinet}</Descriptions.Item>
        <Descriptions.Item label="Телефон">{doctor.phone}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};
