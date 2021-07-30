import React from "react";
import { Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerActions } from "@react-navigation/routers";

// Screens
import HomeScreen from "../screens/home_screen/home";
import FavScreen from "../screens/home_screen/favorites";

const Home = createMaterialBottomTabNavigator()
const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {

    const { Navigator, Screen } = Drawer
    return (
        <Navigator>
            <Screen name="goToGome" component={() => <Text> Home </Text>} />
            <Screen name="goToSettings" component={() => <Text> Settings </Text>} />
        </Navigator>
    )

}

const HomeNavigator = () => {

    const {Navigator, Screen} = Home

    return (
        <Navigator activeColor="white" barStyle={{backgroundColor: '#62BD69', height: 60}} >
            <Screen name="Homes" options={{
                tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color="white" onPress={() => {
                    DrawerActions.openDrawer()
                }} />,
            }} component={HomeScreen}/>

            <Screen name="Favorites" options={{
                tabBarIcon: () => <MaterialCommunityIcons name="playlist-star" size={24} color="white" />
            }} component={FavScreen}/>
        </Navigator>
    )

}

export default HomeNavigator