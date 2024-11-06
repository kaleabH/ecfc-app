import { createDrawerNavigator, DrawerContentComponentProps, DrawerHeaderProps } from "@react-navigation/drawer";
import TabBarNavigator from "./TabBarNavigator"
import Home from '../screens/Home';
import News from '../screens/News';
import Matches from '../screens/Matches';
import Shop from '../screens/Shop';
import GroupChat from '../screens/GroupChat';
import { DrawerParamsList, DrawerProps as Props } from "../types";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { DrawerContent } from "../components/DrawerContent";
import { ReactNode, useState } from "react";
import Search from "../components/Search";
import EIcon from 'react-native-vector-icons/Entypo';
interface DrawerProps /*extends Props<DrawerParamsList, "DrawerContent">*/ {
}

const Drawer = createDrawerNavigator<DrawerParamsList>();

const DrawerNavigator: React.FC<DrawerProps> = (props) => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props: DrawerHeaderProps): ReactNode => (

          <View style={styles.menuAndLogoContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity
                style={{ zIndex: 1 }}
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              >
                <EIcon name="menu" size={40} color="#000000" />
              </TouchableOpacity>

              <View style={styles.logoContainer}>
                <Image
                  source={require("../assets/Logo.png")}
                  style={{ height: 90, width: 90 }}
                />
              </View>
            </View>

            <View
              style={styles.searchContainer}
            >
              <Search
                value={value}
                handleChange={(text) => {
                  setValue(text)
                }}
              />
            </View>

          </View>)
      }}
      drawerContent={(props: DrawerContentComponentProps): ReactNode =>
        <DrawerContent {...props} />
      }>
      <Drawer.Screen
        name="TabBarNavigator"
        component={TabBarNavigator}
        options={{
          title: "Home"
        }}
      />

    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: "95%",
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: "center",
    position: "absolute",
    top: 50,
    borderRadius: 10,
    height: 45,
    backgroundColor: "#FFFFFF"

  },
  searchContainer: {
    width: "83%",
    marginLeft: "12%",
    position: "absolute",
    top: 53,
    zIndex: 0,
    alignItems: "flex-end",
  },
  logoContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F2D90B",
    borderWidth: 4,
    borderRadius: 45,
    overflow: "hidden",
    marginRight: "35%"
  },
  menuAndLogoContainer: {
    flex: 2,
  }
});

export default DrawerNavigator
