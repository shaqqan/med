import { Descriptions, Button, Card } from "antd";
import { useParams, useNavigate } from "react-router-dom";

export const PatientShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - same as in the table component
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

  const patient = dataSource.find((d) => d.key === Number(id));

  if (!patient) return <div>Данные не найдены</div>;

  return (
    <Card
      title="Информация о пациенте"
      extra={
        <Button onClick={() => navigate("/patients")}>Назад к списку</Button>
      }
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="№">{patient.index}</Descriptions.Item>
        <Descriptions.Item label="ФИО">{patient.fullName}</Descriptions.Item>
        <Descriptions.Item label="Возраст">{patient.age} лет</Descriptions.Item>
        <Descriptions.Item label="Пол">{patient.gender}</Descriptions.Item>
        <Descriptions.Item label="Диагноз">{patient.diagnosis}</Descriptions.Item>
        <Descriptions.Item label="Статус">{patient.status}</Descriptions.Item>
        <Descriptions.Item label="Телефон">{patient.phone}</Descriptions.Item>
        <Descriptions.Item label="Адрес">{patient.address}</Descriptions.Item>
        <Descriptions.Item label="Группа крови">{patient.bloodType}</Descriptions.Item>
        <Descriptions.Item label="Дата поступления">{patient.admissionDate}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};
