import React from "react";

import { styled } from "nativewind";
import {
  Text as StyledText,
  View as StyledView,
  Image as StyledImage,
  TouchableOpacity,
} from "react-native";

const Text = styled(StyledText);
const View = styled(StyledView);
const Image = styled(StyledImage);

const MealCard = ({ name, description, price, currency, image }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Pressed");
      }}
    >
      <View>
        <Image
          source={{
            uri: "https://via.placeholder.com/500x300.png?text=" + name,
          }}
          className="h-40 w-full rounded-2xl"
        />
        <View className="py-2 flex flex-row justify-between items-center">
          <Text className="font-bold text-lg">{name}</Text>
          <Text className="font-bold text-lg">{description}</Text>
          <Text className="font-bold text-lg">{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MealCard;
