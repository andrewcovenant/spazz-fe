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

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <View className="flex justify-center items-center">
        <Image
          source={{
            uri: imgUrl,
          }}
          className="h-24 w-24 rounded-full"
        />
        <Text className="pt-5 text-lg">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
