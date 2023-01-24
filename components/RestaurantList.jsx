import React, { useState, useEffect } from "react";

import { styled } from "nativewind";
import { Text as StyledText, View as StyledView } from "react-native";
import RestaurantCard from "./RestaurantCard";

const Text = styled(StyledText);
const View = styled(StyledView);

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/restaurant/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRestaurants(data);
        setLoading(false);
      });
  }, []);

  return (
    <View className="p-6">
      <Text className="pb-7 text-2xl font-bold">Restaurants</Text>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        restaurants?.map((restaurant) => (
          <RestaurantCard
            id={restaurant.id}
            name={restaurant.name}
            image={restaurant.image}
          />
        ))
      )}
    </View>
  );
};

export default RestaurantList;
