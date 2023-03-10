import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  bcImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  btnsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});
export default styles;
