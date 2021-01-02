import React, { useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Easing,
  Text,
} from "react-native";
import Styles from "../config/Styles";

const CategoryIconItem = ({ color, image, name }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animationDuration = 600;

  const handleAnimation = (value) => {
    Animated.timing(fadeAnim, {
      toValue: value,
      duration: animationDuration,
      easing: Easing.ease,
      useNativeDriver: "true",
    }).start(() => handleAnimation(0));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handleAnimation(1);
      }}
    >
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                scaleX: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8],
                }),
              },
              {
                scaleY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8],
                }),
              },
            ],
          },
        ]}
      >
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          <Image source={image} style={styles.image} />
        </View>
        <Text style={styles.text}>{name}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryIconItem;

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  container: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40,
    marginVertical: 45,
    marginLeft: 10,
  },
  image: {
    width: 20,
    height: 20,
    opacity: 1,
  },
  text: {
    paddingVertical: 10,
    fontSize: Styles.FontSizes.tiny,
  },
});
