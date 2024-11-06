import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from '../screens/Home';
import News from '../screens/News';
import Matches from '../screens/Matches';
import Shop from '../screens/Shop';
import GroupChat from '../screens/GroupChat';
import Icon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';
import { TabBarParamsList } from '../types';

interface TabsProps {
}

const TabBar = createMaterialBottomTabNavigator<TabBarParamsList>();
const TabBarNavigator: React.FC<TabsProps> = ({ }) => {
  return (
    <TabBar.Navigator
      barStyle={{
        justifyContent: "center",
        alignItems: "center"

      }}
      initialRouteName={"Home"}
      screenOptions={{
        tabBarColor: "#F2D90B",

      }}
      activeColor={"#693214"}
      inactiveColor={"white"}
    >
      <TabBar.Screen
        name="Home"
        component={Home}
        options={
          {
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            )
          }
        }
      />
      <TabBar.Screen
        name="News"
        component={News}
        options={
          {
            title: "News",
            tabBarIcon: ({ color }) => (
              <Icon name="newspaper" color={color} size={26} />
            )
          }
        }
      />
      <TabBar.Screen
        name="Matches"
        component={Matches}
        options={
          {
            title: "Matches",
            tabBarIcon: ({ color }) => (
              <Icon name="football" color={color} size={26} />
            )
          }
        }
      />
      <TabBar.Screen
        name="Shop"
        component={Shop}
        options={
          {
            title: "Shop",
            tabBarIcon: ({ color }) => (
              <EIcon name="shopping-bag" color={color} size={26} />
            )
          }
        }
      />
      <TabBar.Screen
        name="GroupChat"
        component={GroupChat}
        options={
          {
            title: "GroupChat",
            tabBarIcon: ({ color }) => (
              <EIcon name="chat" color={color} size={26} />
            )
          }
        }
      />
    </TabBar.Navigator>
  )
}

export default TabBarNavigator
