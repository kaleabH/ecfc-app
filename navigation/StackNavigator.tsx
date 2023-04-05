import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StackParamsList } from '../types';
import NewsDetail from '../screens/NewsDetail';
import MatchDetail from '../screens/MatchDetail';
import ShopItemDetail from '../screens/ShopItemDetail';
import PollDetail from '../screens/PollDetail';
import DrawerNavigator from './DrawerNavigator'
const Stack = createStackNavigator<StackParamsList>();
const StackNavigator = () => {
  return (
    <Stack.Navigator
     initialRouteName='DrawerNavigator'
     screenOptions={{headerShown:false}}
    >
        <Stack.Screen
        name='DrawerNavigator'
        component={DrawerNavigator}
        />
       
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
        />
        <Stack.Screen
           name="MatchDetail"
           component={MatchDetail}
        />
        <Stack.Screen
           name="ShopItemDetail"
           component={ShopItemDetail}
        />
        <Stack.Screen
           name="PollDetail"
           component={PollDetail}
        />
            
    </Stack.Navigator>
  )
}

export default StackNavigator
