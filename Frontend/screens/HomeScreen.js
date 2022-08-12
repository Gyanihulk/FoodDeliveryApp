import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  ServerIcon,
  AdjustmentsIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView className="bg-white pt-5">
      
        {/* Headers */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={require("./../asset/deliveryBoy.jpg")}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          ></Image>
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          
          <UserIcon  size={35} color="#00CCBB"></UserIcon>
        </View>

        {/* Search  */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
          <View className="flex-row flex-l space-x-2 bg-gray-200 p-3">
            <SearchIcon color="gray" size={20}/>
            <TextInput placeholder="Restaurants and cuisines"
            keyboardType="default"/>
          </View>
          <AdjustmentsIcon size={35} color="#00CCBB"/>
        </View>
        

        {/* Body */}
        <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom:100,}}>
          {/* Categories */}
          <Categories/>

          {/* FeaturedRow */}
          <FeaturedRow id="123" title="Featured" desc="Paid placement from our partners"/>
          
          {/* Tasty Discount  */}
          <FeaturedRow id="1234" title="Tasty Discount" desc="Everyone enjoy tasty discount"/>

          {/* Offers Near You  */}
          <FeaturedRow id="12345" title="Offers near you" desc="why not support your local  restaurant"/>
        </ScrollView>
      
    </SafeAreaView>
  );
};

export default HomeScreen;
