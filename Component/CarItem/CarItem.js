import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Btns from "../Buttons/Btns";
import styles from "./style";

const CarItem = ({ car }) => {
  const { name, tagline, image } = car;
  return (
    <View style={styles.carContainer}>
      {/* render bg image */}
      <ImageBackground source={image} style={styles.bcImage} />
      {/* render bg title, subtitle */}
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline}</Text>
      </View>

      <View style={styles.btnsContainer}>
        <Btns
          type="primary"
          content={"Custom Order"}
          onPress={() => console.warn("Custom order was pressed")}
        />
        <Btns
          type="secondary"
          content={"Exiting Inventory"}
          onPress={() => console.warn("Exiting Inventory was pressed")}
        />
      </View>
    </View>
  );
};

export default CarItem;
