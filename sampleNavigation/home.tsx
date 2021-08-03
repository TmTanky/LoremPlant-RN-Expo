import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "@react-navigation/routers";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

// CustomBtn
import { customBtn } from "../children_components/customBtns";

// Screens and Navigators
import HomeScreen, { HomeHome } from "../screens/home_screens/home";
import SearchScreen, { SearchSearch } from "../screens/home_screens/search";
import { CategoriesNavigator } from "./categories";
import { firebase } from "../firebase/config";
import { Text, View } from "react-native";

// Stacks
const Home = createStackNavigator()
const BottomStack = createStackNavigator()

// BottomTabs
const BottomTab = createMaterialBottomTabNavigator()

// Drawers
const Drawer = createDrawerNavigator()

// export const DrawerNavigator: FC = (props: any) => {

//     return (
//         <Drawer.Navigator drawerStyle={{
//             justifyContent: 'flex-end',
//         }} drawerContentOptions={{
//             activeBackgroundColor: '#62BD69',
//             activeTintColor: 'white',
//         }}>
//             <Drawer.Screen name="Home" component={BottomTabStackNavigator} />
//             <Drawer.Screen name="Categories" component={CategoriesNavigator} />
//         </Drawer.Navigator>
//     )

// }

export const DrawerNavigator: FC = (props: any) => {

    return (
        <Drawer.Navigator drawerContentOptions={{
            itemStyle: {
                marginVertical: 1000
            }
        }} drawerContent={(props) => {

            return (
                <DrawerContentScrollView {...props}>
                    <DrawerItem onPress={() => props.navigation.navigate('tae')} label="Home" />
                    <DrawerItem onPress={() => props.navigation.navigate('pota')} label="Categories" />
                    <DrawerItem onPress={() => firebase.auth().signOut()} label="Logout" />
                </DrawerContentScrollView>
            )

        }} >
            <Drawer.Screen name="tae" component={BottomTabStackNavigator}  />
            <Drawer.Screen name="pota" component={CategoriesNavigator}  />
        </Drawer.Navigator>
    )

}

export const BottomTabNavigator = () => {

    return (
        <BottomTab.Navigator activeColor="white"  barStyle={{
            backgroundColor: '#62BD69',
            height: 65,
            justifyContent: 'center',
        }} >
            <BottomTab.Screen name="hometab" options={{
                title: 'Home',
                tabBarIcon: () => {
                    return <MaterialCommunityIcons name="home" size={25} color="white" />
                },
            }} component={HomeHome} />
            <BottomTab.Screen name="favtab" options={{
                title: 'Search',
                tabBarIcon: () => {
                    return <Ionicons name="ios-search-sharp" size={25} color="white" />
                },
            }} component={SearchSearch} />
        </BottomTab.Navigator>
    )

}

export const BottomTabStackNavigator: FC = (props: any) => {

    // console.log(props)

    return (
        <BottomStack.Navigator screenOptions={{
            headerShown: false
        }} >
            <BottomStack.Screen name="puday" component={BottomTabNavigator} />
        </BottomStack.Navigator>
    )
}

// export const HomeNavigator = () => {

//     return (
//         <Home.Navigator>
//             <Home.Screen name="drawerstack" component={DrawerNavigator} />
//             <Home.Screen name="homestack" component={BottomTabStackNavigator} />
//         </Home.Navigator>
//     )

// }