import React from "react";
import { useNavigation } from "@react-navigation/native";

import { styled } from "nativewind";
import {
  Text as StyledText,
  View as StyledView,
  Image as StyledImage,
  TouchableOpacity,
} from "react-native";

import { StarIcon as StyledStarIcon } from "react-native-heroicons/solid";
import {
  ClockIcon as StyledClockIcon,
  TruckIcon as StyledTruckIcon,
} from "react-native-heroicons/outline";

const Text = styled(StyledText);
const View = styled(StyledView);
const Image = styled(StyledImage);
const StarIcon = styled(StyledStarIcon);
const ClockIcon = styled(StyledClockIcon);
const TruckIcon = styled(StyledTruckIcon);

const RestaurantCard = ({ id, name, image }) => {
  const navigation = useNavigation();
  console.log(id, name);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          name: name,
        });
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
          <View className="flex flex-row items-center">
            <StarIcon className="color-black" />
            <Text className="pl-2 font-bold text-lg">4.4</Text>
          </View>
        </View>
        <View className="pb-8 flex flex-row justify-between items-center">
          <View className="flex flex-row items-center">
            <ClockIcon className="text-black text-gray-700" />
            <Text className="pl-2 pr-6 text-lg text-gray-700 align-center">
              60 min
            </Text>
            <TruckIcon className="text-black text-gray-700" />
            <Text className="pl-2 text-lg text-gray-700">1$ delivery fee</Text>
          </View>
          <View className="bg-purple-900 bg-gradient-to-r from-purple-900 to-blue-500 rounded-full">
            <Text className="text-base font-bold px-2 bottom-[1px] text-white">
              genius
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
