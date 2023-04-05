import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import {DrawerScreenProps} from "@react-navigation/drawer"
import { ParamListBase, CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
export type TabBarParamsList = { 
    Home: undefined;
    News: undefined;
    Matches: undefined;
    Shop: undefined; 
    GroupChat: undefined
}
export type DrawerParamsList ={
 TabBarNavigator: NavigatorScreenParams<TabBarParamsList>;
 DrawerContent: NavigatorScreenParams<TabBarParamsList>;
};

export type StackParamsList = {
    DrawerNavigator: undefined;
    NewsDetail: undefined;
    MatchDetail: undefined;
    ShopItemDetail: undefined;
    PollDetail: undefined;
}

export type TabBarProps<T extends ParamListBase, K  extends keyof T> = MaterialBottomTabScreenProps<T, K>

export type DrawerProps<T extends ParamListBase, K extends keyof T> = CompositeScreenProps< DrawerScreenProps<T, K | any>, TabBarProps<T, keyof T>>

export type StackProps<T extends ParamListBase, K extends keyof T> = CompositeScreenProps<StackScreenProps<T, K | any>, DrawerProps<T,keyof T>>
