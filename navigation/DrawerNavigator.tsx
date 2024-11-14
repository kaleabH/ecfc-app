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


            <View style={styles.logoContainer}>
              <Image
                style={{
                  height: 90,
                  width: 90,
                  // transform: [{ scale: 0.6 }]
                }}
                source={require("../assets/Logo.png")}
              />

            </View>

            <View
              style={styles.searchAndMenuContainer}
            >
              <TouchableOpacity

                style={styles.burgerMenu}
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              >
                <EIcon name="menu" size={40} color="#000000" />
              </TouchableOpacity>
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
  searchAndMenuContainer: {
    zIndex: 2,
    width: '100%',
    // borderColor: 'green',
    // borderWidth: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    position: 'absolute'
  },
  logoContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F2D90B",
    borderWidth: 4,
    borderRadius: 50,
    overflow: "hidden",
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 4,
    zIndex: 1
  },
  menuAndLogoContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    height: 5,
  },
  burgerMenu: {
    position: 'absolute',
    left: '6%',
    backgroundColor: "#F2F2F2",
    borderRadius: 20
  }
});

export default DrawerNavigator
