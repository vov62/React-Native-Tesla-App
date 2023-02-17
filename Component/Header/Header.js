import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.png";

import styles from "./style";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Image style={styles.menu} source={menu} />
    </View>
  );
};
export default Header;
