import { Descriptions, Button, Card } from "antd";
import { useParams, useNavigate } from "react-router-dom";

export const RecipeShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - same as in the table component
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

  const recipe = dataSource.find((d) => d.key === Number(id));

  if (!recipe) return <div>Данные не найдены</div>;

  return (
    <Card
      title="Информация о рецепте"
      extra={
        <Button onClick={() => navigate("/recipes")}>Назад к списку</Button>
      }
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="№">{recipe.index}</Descriptions.Item>
        <Descriptions.Item label="Пациент">{recipe.patientName}</Descriptions.Item>
        <Descriptions.Item label="Врач">{recipe.doctorName}</Descriptions.Item>
        <Descriptions.Item label="Лекарство">{recipe.medication}</Descriptions.Item>
        <Descriptions.Item label="Дозировка">{recipe.dosage}</Descriptions.Item>
        <Descriptions.Item label="Статус">{recipe.status}</Descriptions.Item>
        <Descriptions.Item label="Дата выписки">{recipe.prescriptionDate}</Descriptions.Item>
        <Descriptions.Item label="Инструкции">{recipe.instructions}</Descriptions.Item>
        <Descriptions.Item label="Количество">{recipe.quantity} шт.</Descriptions.Item>
        <Descriptions.Item label="Повторные выписки">{recipe.refills}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};
