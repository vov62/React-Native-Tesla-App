import React from "react";
import { View, Text, ImageBackground } from "react-native";
import ModelX from "../../assets/images/ModelX.jpeg";
import Btns from "../Buttons/Btns";
import styles from "./style";

const Index = () => {
  return (
    <View style={styles.carContainer}>
      {/* render bg image */}
      <ImageBackground source={ModelX} style={styles.bcImage} />
      {/* render bg title, subtitle */}
      <View style={styles.titles}>
        <Text style={styles.title}>Modal S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
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

export default Index;
