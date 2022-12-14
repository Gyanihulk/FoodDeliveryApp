import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
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
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,type->{name}
      },
    }`
      )
      .then( data => {
        setFeaturedCategories(data);
      }).catch((error) => {
        console.error(error);
      });;
  }, []);
 

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

        <UserIcon size={35} color="#00CCBB"></UserIcon>
      </View>

      {/* Search  */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-row flex-l space-x-2 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={35} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

    
        {featuredCategories?.map(category=>(<FeaturedRow key={category._id}
          id={category._id}
          title={category.name}
          desc={category.short_description}
        />))}
        
   

        
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
