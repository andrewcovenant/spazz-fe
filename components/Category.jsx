import React from "react";

import { styled } from "nativewind";
import {
  ScrollView,
  Text as StyledText,
  View as StyledView,
} from "react-native";
import CategoryCard from "./CategoryCard";

const Text = styled(StyledText);
const View = styled(StyledView);

const Category = () => {
  return (
    <View className="p-6">
      <Text className="pt-5 pb-5 text-2xl font-bold">
        I feel like eating...?
      </Text>
      <ScrollView
        contentContainerStyle={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 30,
          width: 580,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <CategoryCard
          imgUrl={
            "https://www.umamiburgerparis.com/media/images/minigal/02.jpg"
          }
          title={"Burgers"}
        />
        <CategoryCard
          imgUrl={
            "https://www.umamiburgerparis.com/media/images/minigal/02.jpg"
          }
          title={"Burgers"}
        />
        <CategoryCard
          imgUrl={
            "https://www.umamiburgerparis.com/media/images/minigal/02.jpg"
          }
          title={"Burgers"}
        />
        <CategoryCard
          imgUrl={
            "https://www.umamiburgerparis.com/media/images/minigal/02.jpg"
          }
          title={"Burgers"}
        />
        <CategoryCard
          imgUrl={
            "https://www.umamiburgerparis.com/media/images/minigal/02.jpg"
          }
          title={"Burgers"}
        />
      </ScrollView>
    </View>
  );
};

export default Category;
