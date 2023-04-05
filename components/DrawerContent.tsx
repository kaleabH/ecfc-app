import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';

import { DrawerParamsList, DrawerProps } from '../types';
type DrawerContentNavigationProp = DrawerProps<DrawerParamsList, 'DrawerContent'>['navigation']
type DrawerContentRouteProp = DrawerProps<DrawerParamsList, 'DrawerContent'>['route']


export const DrawerContent: React.FC<DrawerContentComponentProps>=(props)=>{
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const paperTheme = useTheme();

    const toggleTheme =  () => {
        setIsDarkTheme( isDarkTheme => !isDarkTheme );
      }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: '../assets/ecfcTeam.jpg'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Test User</Title>
                                <Caption style={styles.caption}>@test_user</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon name="ios-home" color={color} size={size} />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('TabBarNavigator',{
                                screen:"Home"
                            })}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon name="ios-newspaper" color={color} size={size} />
                            )}
                            label="News"
                            onPress={() => {props.navigation.navigate('TabBarNavigator',{
                                screen:"News"
                            })}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon name="football" color={color} size={size} />
                            )}
                            label="Matches"
                            onPress={() => {props.navigation.navigate('TabBarNavigator',{
                                screen:"Matches"
                            })}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <EIcon name="shopping-bag" color={color} size={size} />
                            )}
                            label="Shop"
                            onPress={() => {props.navigation.navigate('TabBarNavigator',{
                                screen:"Shop"
                            })}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <EIcon name="chat" color={color} size={size} />
                            )}
                            label="GroupChat"
                            onPress={() => {props.navigation.navigate('TabBarNavigator',{
                                screen:"GroupChat"
                            })}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
