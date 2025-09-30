import {
  UserOutlined,
  TeamOutlined,
  HeartOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Card, Flex, Typography } from "antd";
import { useEffect, useState } from "react";

export const DashboardCards = () => {
  const [animatedValues, setAnimatedValues] = useState({
    doctors: 0,
    nurses: 0,
    patients: 0,
    recipes: 0,
  });

  const targetValues = {
    doctors: 19178,
    nurses: 1414,
    patients: 4401,
    recipes: 2151,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    const animateValue = (key: keyof typeof targetValues) => {
      const startValue = 0;
      const endValue = targetValues[key];
      const increment = (endValue - startValue) / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.floor(startValue + increment * currentStep);
        
        setAnimatedValues(prev => ({
          ...prev,
          [key]: currentValue,
        }));

        if (currentStep >= steps) {
          setAnimatedValues(prev => ({
            ...prev,
            [key]: endValue,
          }));
          clearInterval(timer);
        }
      }, stepDuration);
    };

    // Start animation for all values
    Object.keys(targetValues).forEach(key => {
      animateValue(key as keyof typeof targetValues);
    });
  }, []);

  const data = [
    {
      title: "Врачи",
      subtitle: "Общее количество врачей",
      value: animatedValues.doctors,
      icon: <UserOutlined />,
      color: "white",
      backgroundColor: "#2D7AC4",
      link: "/doctors",
    },
    {
      title: "Медсестры",
      subtitle: "Общее количество медсестер",
      value: animatedValues.nurses,
      icon: <TeamOutlined />,
      color: "white",
      backgroundColor: "#40C872",
      link: "/nurses",
    },
    {
      title: "Пациенты",
      subtitle: "Общее количество пациентов",
      value: animatedValues.patients,
      icon: <HeartOutlined />,
      color: "white",
      backgroundColor: "#FF6B6B",
      link: "/patients",
    },
    {
      title: "Рецепты",
      subtitle: "Общее количество рецептов",
      value: animatedValues.recipes,
      icon: <FileTextOutlined />,
      color: "white",
      backgroundColor: "#FFA726",
      link: "/recipes",
    },
  ];

  return (
    <Flex gap={24} wrap="wrap" style={{ width: "100%" }}>
      {data.map((item, idx) => (
        <Card
          key={idx}
          style={{
            flex: "1 1 300px", // minimal kenglik 300px, katta ekranda yonma-yon joylashadi
            maxWidth: 360, // maksimal 360px bo‘lsin
            borderRadius: 12,
            backgroundColor: item.backgroundColor,
            border: `1px solid ${
              item.color === "white" ? "#eee" : "transparent"
            }`,
            cursor: "pointer",
          }}
          bodyStyle={{ padding: 24 }}
        >
          <Typography.Title
            level={2}
            style={{ color: item.color, marginBottom: 12 }}
          >
            {item.value.toLocaleString()}
          </Typography.Title>

          <Flex align="center" gap={12}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "20%",
                backgroundColor:
                  item.backgroundColor === "white"
                    ? item.color + "20"
                    : "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.color,
                fontSize: 20,
              }}
            >
              {item.icon}
            </div>
            <div style={{ color: item.color, fontSize: 14 }}>
              {item.subtitle}
            </div>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};
