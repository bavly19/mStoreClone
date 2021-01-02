import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryIconItem from "../components/CategoryIconItem";

const CategoryIconsList = ({ DATA }) => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <CategoryIconItem
          color={item.color}
          image={item.imageUrl}
          name={item.name}
        />
      )}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      alwaysBounceHorizontal={true}
    />
  );
};

export default CategoryIconsList;

const styles = StyleSheet.create({});
