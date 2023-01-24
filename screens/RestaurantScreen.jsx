import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import MealCard from "../components/MealCard";

const RestaurantScreen = () => {
  const [meals, setMeals] = useState([]);
  const {
    params: { id, name },
  } = useRoute();

  useEffect(() => {
    fetch("http://localhost:3000/meal/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMeals(data);
      });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="p-6">
        <Text className="pb-7 text-2xl font-bold">
          {id} - {name}
        </Text>
        <View className="p-6">
          {meals?.map((meal) => (
            <MealCard
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              currency={meal.currency}
              image={meal.image}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
