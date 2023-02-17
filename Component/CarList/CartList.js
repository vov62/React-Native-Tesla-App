import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import CarsData from "../../assets/cars";
import CarItem from "../CarItem/CarItem";
import styles from "./style";

const CarList = () => {
  return (
    <View style={styles.container}>
      {/* render list of car data and send the item as props */}
      <FlatList
        //array to data
        data={CarsData}
        // function fire for each item to render
        renderItem={({ item }) => <CarItem car={item} />}
        // values to know how big is the item
        snapToInterval={Dimensions.get("window").height}
        // center ths window after scrolling
        snapToAlignment={"start"}
        // effect of animation speed
        decelerationRate={"fast"}
        // set the scroll indicator to false
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarList;
