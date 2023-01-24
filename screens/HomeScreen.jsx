import React, { useLayoutEffect, useState } from "react";
import { styled } from "nativewind";

import {
  SafeAreaView,
  ScrollView,
  Text as StyledText,
  TextInput as StyledTextInput,
  View as StyledView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
  MapPinIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon as StyledMagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import Category from "../components/Category";
import RestaurantList from "../components/RestaurantList";

const Text = styled(StyledText);
const View = styled(StyledView);
const TextInput = styled(StyledTextInput);
const MagnifyingGlassIcon = styled(StyledMagnifyingGlassIcon);

export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleChange = (e) => {
    console.log(e);
    let text = e.target?.value;
    setSearchText(text);
  };

  return (
    <SafeAreaView>
      <View className="flex flex-row justify-center items-center">
        <MapPinIcon color={"#999999"} />
        <Text className="text-base font-bold px-1">27 Strada Lebedei</Text>
        <ChevronDownIcon color={"#ea3c33"} />
      </View>
      <View className="flex flex-row justify-center items-center">
        <View className="relative">
          <MagnifyingGlassIcon
            color={"#e93d33"}
            className="absolute z-10 bottom-[7px] left-[10px]"
          />
          <TextInput
            //To do: refactor the bellow className
            className="mt-5 pb-2 text-base bg-neutral-200 rounded-full h-10 w-80 text-neutral-600 font-semibold placeholder:text-center placeholder:pb-1 focus:pl-10 focus:text-left focus:pb-2"
            onChangeText={(e) => handleChange(e)}
            placeholder="Look for Restaurants"
            value={searchText}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Category />
        <RestaurantList />
      </ScrollView>
    </SafeAreaView>
  );
}
