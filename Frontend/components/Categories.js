import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
        <CategoryCard img="https://media.istockphoto.com/id/1312283557/photo/classic-thai-food-dishes.webp?s=612x612&w=is&k=20&c=jCS33AOBwwXAIx00CCLADoM4IyO9vmy13n7HYibjSkM=" title="Testing"/>
        <CategoryCard img="https://media.istockphoto.com/id/1312283557/photo/classic-thai-food-dishes.webp?s=612x612&w=is&k=20&c=jCS33AOBwwXAIx00CCLADoM4IyO9vmy13n7HYibjSkM=" title="Testing 2"/>
        <CategoryCard img="https://media.istockphoto.com/id/1312283557/photo/classic-thai-food-dishes.webp?s=612x612&w=is&k=20&c=jCS33AOBwwXAIx00CCLADoM4IyO9vmy13n7HYibjSkM=" title="Testing 3"/>
        <CategoryCard img="https://media.istockphoto.com/id/1312283557/photo/classic-thai-food-dishes.webp?s=612x612&w=is&k=20&c=jCS33AOBwwXAIx00CCLADoM4IyO9vmy13n7HYibjSkM=" title="Testing 3"/>
        <CategoryCard img="https://media.istockphoto.com/id/1312283557/photo/classic-thai-food-dishes.webp?s=612x612&w=is&k=20&c=jCS33AOBwwXAIx00CCLADoM4IyO9vmy13n7HYibjSkM=" title="Testing 3"/>
        <CategoryCard img="https://media.istockphoto.com/id/1312283557/photo/classic-thai-food-dishes.webp?s=612x612&w=is&k=20&c=jCS33AOBwwXAIx00CCLADoM4IyO9vmy13n7HYibjSkM=" title="Testing 3"/>
        <CategoryCard img="https://media.istockphoto.com/id/1312283557/photo/classic-thai-food-dishes.webp?s=612x612&w=is&k=20&c=jCS33AOBwwXAIx00CCLADoM4IyO9vmy13n7HYibjSkM=" title="Testing 3"/>

    </ScrollView>
  );
};

export default Categories;
