import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "../components/Text";
import moment from "moment";
import Styles from "../config/Styles";
import CategoryIconItem from "../components/CategoryIconItem";
import CategoryIconsList from "../containers/CategoryIconsList";

const HomeScreen = () => {
  var date = moment().format("dddd-DD-MMM");
  const DATA = [
    {
      id: "1",
      name: "T-Shirt",
      imageUrl: require("../assets/category_vectors/t-shirt.png"),
      color: "#d4ffd3",
    },
    {
      id: "2",
      name: "Bags",
      imageUrl: require("../assets/category_vectors/bags.png"),
      color: "#ffe9ec",
    },
    {
      id: "3",
      name: "Dresss",
      imageUrl: require("../assets/category_vectors/clothing.png"),
      color: "#e5e2e3",
    },
    {
      id: "4",
      name: "T-Shirt",
      imageUrl: require("../assets/category_vectors/bags.png"),
      color: "#d4ffd3",
    },
    {
      id: "5",
      name: "T-Shirt",
      imageUrl: require("../assets/category_vectors/t-shirt.png"),
      color: "#d4ffd3",
    },
  ];
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo_main}
        source={require("../assets/logo-main.png")}
      />
      <Text style={styles.date}>{date.toUpperCase()}</Text>

      <CategoryIconsList DATA={DATA} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { paddingTop: 20 },
  logo_main: {
    width: 120,
    height: 60,
    resizeMode: "contain",
    marginLeft: 10,
  },
  date: {
    fontWeight: "normal",
    fontSize: Styles.FontSizes.medium,
    marginLeft: 10,
  },
});
