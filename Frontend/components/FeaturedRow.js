import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, desc }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{desc}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
    
      >
        {/* Restaurants Cards  */}
        <RestaurantCard id={123}
        imgUrl="https://static4.depositphotos.com/1015060/494/i/600/depositphotos_4947647-stock-photo-restaurant.jpg"
        title="Dream Cafe"
        rating={4.5}
        genre="Japanese"
        address="123 main street"
        shortDescription="This is a TEst description"
        dishes={[]}
        long={20}
        lat={0}/>
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
